<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Talep extends Model
{
    //
    protected $table = "talepler";

    protected $fillable = ["users_id","aciklama"];

    public function user()
    {
        return $this->belongsTo("App\User");
    }
}
