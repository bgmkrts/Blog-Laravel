<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "name" => "Begum KARATAS",
            "email" => "begumkaratas18@gmail.com",
            "password" => bcrypt("123456")
        ]);

        DB::table("role_users")->insert(["roles_id" => 1, "users_id" => 1]);
        DB::table("role_users")->insert(["roles_id" => 2, "users_id" => 1]);
        DB::table("role_users")->insert(["roles_id" => 3, "users_id" => 1]);
    }
}
