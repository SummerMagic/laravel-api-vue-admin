<?php


namespace Cameron\Admin\Controllers\Auth;

use Illuminate\Routing\Controller;
use Cameron\Admin\Contracts\Service;
use Cameron\Admin\Traits\HasResourceRoutes;

class AdminUserController extends Controller
{
    use HasResourceRoutes;

    /**
     * 分配角色
     * @return mixed
     */
    public function assignRole(Service $service)
    {
        return $service->assignRole();
    }
}
