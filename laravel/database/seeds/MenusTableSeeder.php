<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class MenusTableSeeder extends Seeder
{
    private $menuId = null;
    private $dropdownId = array();
    private $dropdown = false;
    private $sequence = 1;
    private $joinData = array();
    private $adminRole = null;
    private $userRole = null;

    public function join($roles, $menusId){
        $roles = explode(',', $roles);
        foreach($roles as $role){
            array_push($this->joinData, array('role_name' => $role, 'menus_id' => $menusId));
        }
    }

    /*
        Function assigns menu elements to roles
        Must by use on end of this seeder
    */
    public function joinAllByTransaction(){
        DB::beginTransaction();
        foreach($this->joinData as $data){
            DB::table('menu_role')->insert([
                'role_name' => $data['role_name'],
                'menus_id' => $data['menus_id'],
            ]);
        }
        DB::commit();
    }

    public function insertLink($roles, $name, $href, $icon = null){
        if($this->dropdown === false){
            DB::table('menus')->insert([
                'slug' => 'link',
                'name' => $name,
                'icon' => $icon,
                'href' => $href,
                'menu_id' => $this->menuId,
                'sequence' => $this->sequence
            ]);
        }else{
            DB::table('menus')->insert([
                'slug' => 'link',
                'name' => $name,
                'icon' => $icon,
                'href' => $href,
                'menu_id' => $this->menuId,
                'parent_id' => $this->dropdownId[count($this->dropdownId) - 1],
                'sequence' => $this->sequence
            ]);
        }
        $this->sequence++;
        $lastId = DB::getPdo()->lastInsertId();
        $this->join($roles, $lastId);
        $permission = Permission::where('name', '=', $name)->get();
        if(empty($permission)){
            $permission = Permission::create(['name' => 'visit ' . $name]);
        }
        $roles = explode(',', $roles);
        if(in_array('user', $roles)){
            $this->userRole->givePermissionTo($permission);
        }
        if(in_array('admin', $roles)){
            $this->adminRole->givePermissionTo($permission);
        }
        if(in_array('dev', $roles)){
            $this->devRole->givePermissionTo($permission);
        }
        return $lastId;
    }

    public function insertTitle($roles, $name){
        DB::table('menus')->insert([
            'slug' => 'title',
            'name' => $name,
            'menu_id' => $this->menuId,
            'sequence' => $this->sequence
        ]);
        $this->sequence++;
        $lastId = DB::getPdo()->lastInsertId();
        $this->join($roles, $lastId);
        return $lastId;
    }

    public function beginDropdown($roles, $name, $href, $icon){
        if(count($this->dropdownId)){
            $parentId = $this->dropdownId[count($this->dropdownId) - 1];
        }else{
            $parentId = null;
        }
        DB::table('menus')->insert([
            'slug' => 'dropdown',
            'name' => $name,
            'icon' => $icon,
            'menu_id' => $this->menuId,
            'sequence' => $this->sequence,
            'parent_id' => $parentId,
            'href' => $href
        ]);
        $lastId = DB::getPdo()->lastInsertId();
        array_push($this->dropdownId, $lastId);
        $this->dropdown = true;
        $this->sequence++;
        $this->join($roles, $lastId);
        return $lastId;
    }

    public function endDropdown(){
        $this->dropdown = false;
        array_pop( $this->dropdownId );
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Get roles */
        $this->adminRole = Role::where('name' , '=' , 'admin' )->first();
        $this->userRole = Role::where('name', '=', 'user' )->first();
        $this->devRole = Role::where('name', '=', 'dev' )->first();

        $dropdownId = array();
        /* sidebar menu */
        $this->menuId = 1;
        /* guest menu */
        $this->insertLink('guest,user,admin,dev', 'Dashboard', '/', 'cil-speedometer');
        $this->insertLink('dev', 'Login', '/login', 'cil-account-logout');
        $this->insertLink('dev', 'Register', '/register', 'cil-account-logout');
        $this->beginDropdown('admin,dev', 'Settings', '/', 'cil-puzzle');
            $this->insertLink('admin,dev', 'Media',    '/media');
            $this->insertLink('admin,dev', 'Users',    '/users');
            $this->insertLink('admin,dev', 'Menu',    '/menu');
            $this->insertLink('admin,dev', 'BREAD',    '/bread');
            $this->insertLink('admin,dev', 'Email',    '/email');
        $this->endDropdown();
        $this->insertTitle('dev', 'Theme');
        $this->insertLink('dev', 'Colors', '/colors', 'cil-drop');
        $this->insertLink('dev', 'Typography', '/typography', 'cil-pencil');
        $this->insertTitle('dev', 'Components');
        $this->beginDropdown('dev', 'Base', '/base', 'cil-puzzle');
            $this->insertLink('dev', 'Breadcrumb',    '/base/breadcrumb');
            $this->insertLink('dev', 'Cards',         '/base/cards');
            $this->insertLink('dev', 'Carousel',      '/base/carousel');
            $this->insertLink('dev', 'Collapse',      '/base/collapse');
            $this->insertLink('dev', 'Forms',         '/base/forms');
            $this->insertLink('dev', 'Jumbotron',     '/base/jumbotron');
            $this->insertLink('dev', 'List group',    '/base/list-group');
            $this->insertLink('dev', 'Navs',          '/base/navs');
            $this->insertLink('dev', 'Pagination',    '/base/pagination');
            $this->insertLink('dev', 'Popovers',      '/base/popovers');
            $this->insertLink('dev', 'Progress',      '/base/progress');
           // $this->insertLink('user,admin', 'Scrollspy',     '/base/scrollspy');  
            $this->insertLink('dev', 'Switches',      '/base/switches');
            $this->insertLink('dev', 'Tables',        '/base/tables');
            $this->insertLink('dev', 'Tabs',          '/base/tabs');
            $this->insertLink('dev', 'Tooltips',      '/base/tooltips');
        $this->endDropdown();
        $this->beginDropdown('dev', 'Buttons', '/buttons', 'cil-cursor');
            $this->insertLink('dev', 'Buttons',           '/buttons/buttons');
            $this->insertLink('dev', 'Buttons Group',     '/buttons/button-group');
            $this->insertLink('dev', 'Dropdowns',         '/buttons/dropdowns');
            $this->insertLink('dev', 'Brand Buttons',     '/buttons/brand-buttons');
        $this->endDropdown();
        $this->insertLink('dev', 'Charts', '/charts', 'cil-chart-pie');
        $this->beginDropdown('dev', 'Icons', '/icon', 'cil-star');
            $this->insertLink('dev', 'CoreUI Icons',      '/icon/coreui-icons');
            $this->insertLink('dev', 'Flags',             '/icon/flags');
            $this->insertLink('dev', 'Brands',            '/icon/brands');
        $this->endDropdown();
        $this->beginDropdown('dev', 'Notifications', '/notifications', 'cil-bell');
            $this->insertLink('dev', 'Alerts',     '/notifications/alerts');
            $this->insertLink('dev', 'Badge',      '/notifications/badge');
            $this->insertLink('dev', 'Modals',     '/notifications/modals');
        $this->endDropdown();
        $this->insertLink('dev', 'Widgets', '/widgets', 'cil-calculator');
        $this->insertTitle('dev', 'Extras');
        $this->beginDropdown('dev', 'Pages', '/pages', 'cil-star');
            $this->insertLink('dev', 'Login',         '/login');
            $this->insertLink('dev', 'Register',      '/register');
            $this->insertLink('dev', 'Error 404',     '/404');
            $this->insertLink('dev', 'Error 500',     '/500');
        $this->endDropdown();
        $this->joinAllByTransaction(); ///   <===== Must by use on end of this seeder
    }
}
