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
        //

        Ayar::create(["name" => "baslik", "value" => "Moda Atolyesi"]);
        Ayar::create(["name" => "author", "value" => "Begüm Karatas"]);
        Ayar::create(["name" => "aciklama", "value" => "Güzel Olmak Her Kadının Hakkı"]);
        Ayar::create(["name" => "keywords", "value" => "yazılım,php,java"]);
        Ayar::create(["name" => "facebook", "value" => "http://www.facebook.com"]);
        Ayar::create(["name" => "twitter", "value" => "http://www.twitter.com"]);
        Ayar::create(["name" => "github", "value" => "http://www.github.com"]);
    }
}
