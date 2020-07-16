<?php

use App\Ayar;
use Illuminate\Database\Seeder;

class AyarTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Ayar::create(["name"=>"baslik","value"=>"Yemek Atolyesi"]);
       Ayar::create(["name"=>"author","value"=>"Begum Karatas"]);
       Ayar::create(["name"=>"aciklama","value"=>"Afiyet Olsun"]);
       Ayar::create(["name"=>"keywords","value"=>"yazilim,php,java"]);
       Ayar::create(["name"=>"facebook","value"=>"http://facebook.com"]);
       Ayar::create(["name"=>"twitter","value"=>"http://twitter.com"]);
       Ayar::create(["name"=>"github","value"=>"http://github.com"]);
    }
}
