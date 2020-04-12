<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sliders;
use File;

class EditPageController extends Controller
{
    public function getAllSliders() {
        return Sliders::all();
    }
    public function updateSlider(Request $request) {

        
        

        Sliders::truncate();
        $sliders = $request->get('sliders');
        foreach($sliders as $slider) {
            $s = new Sliders($slider);
            $s->save();
        }
        return response()->json('successfully Updated');
    }
    public function uploadSliderImage(Request $request){

        $path = public_path().'/images/sliders/';
        if(!File::exists($path)) {
            File::makeDirectory($path, $mode = 0777, true, true);
        }
        $sliderId = $request->get('item');
        $imageName = 'slider_'.$sliderId.'.'.$request->image->getClientOriginalExtension();
        $request->image->move($path, $imageName);
        
        return response()->json(['success'=>'You have successfully upload image.', 'path'=>'/images/sliders/'.$imageName]);
    }

}
