<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response as Response;
use App\Enums\Error;
use App\Enums\UserStatus;
use App\Enums\UserRole;
use File;

class AuthController extends Controller
{ 
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
  
    /**
     * Register new user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request){
        $validate = Validator::make($request->all(), [
            'name'      => 'required',
            'email'     => 'required|email|unique:users',
            'password'  => 'required|min:4|confirmed',
            'role'      => 'required'
        ]);        
        if ($validate->fails()){
            return response()->json([
                'validation' => $validate->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }



        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->status = UserStatus::Inactive;
        $user->menuroles = $request->role;
        $user->save();

        $user_id = $user->id;
        $path = public_path().'/img/avatars/' . $user_id;
        if(!File::exists($path)) {
            File::makeDirectory($path, $mode = 0777, true, true);
        }
        $avatar = $request->file('image');
        $imageName = 'avatar.'.$avatar->getClientOriginalExtension();
        $request->image->move($path, $imageName);

        return response()->json(['status' => 'success','user' => $user], Response::HTTP_OK);
    } 

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(
            [
                'error' =>
                        [
                            'code' => Error::GENR0002,
                            'message' => Error::getDescription(Error::GENR0002)
                        ],
                'validation' => $validator->errors()
            ],
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json([
                'code' => Error::AUTH0001,
                'message' => Error::getDescription(Error::AUTH0001)
            ], 
            Response::HTTP_UNAUTHORIZED);
        }
        $_role = auth()->user()->menuroles;
        $roles = explode(',', $_role);
        $role = '';
        if(empty($roles)){
            return response()->json(['error' => 'UnAuthrized'], Response::HTTP_UNAUTHORIZED);
        }elseif(in_array(UserRole::DEV, $roles)){
            $role = UserRole::DEV;
        }elseif(in_array(UserRole::ADMIN, $roles)){
            $role = UserRole::ADMIN;
        }elseif(in_array(UserRole::CUSTOMER, $roles)){
            $role = UserRole::CUSTOMER;
        }elseif(in_array(UserRole::TECHNIQUE, $roles)){
            $role = UserRole::TECHNIQUE;
        }elseif(in_array(UserRole::SUBADMIN, $roles)){
            $role = UserRole::SUBADMIN;
        }else{
            return response()->json(['error' => ['error' => $_role]], Response::HTTP_UNAUTHORIZED);
        }
        return $this->respondWithToken($token, $role);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function getUser(Request $request)
    {
        $user = $request->user();
        return response()->json(['user' => $user], Response::HTTP_OK);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $role)
    {
        return response()->json([
            'role' => $role,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}