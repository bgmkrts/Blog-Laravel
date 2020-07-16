<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{
    public function index()
    {
        //
        $users = User::paginate(10);
        return view("admin.user_index",compact('users'));
    }
}
