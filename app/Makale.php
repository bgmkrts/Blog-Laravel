<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Makale extends Model
{
    protected $table="makaleler";
    protected $fillable=[
        'baslik',
        'slug',
        'icerik',
        'users_id',
        'kategoriler_id',
        'durum'
    ];
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'baslik'
            ]
        ];
    }
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function kategori(){
        return $this->belongsTo(Kategori::class);
    }

    public function resim()
    {
        return $this->morphOne("App\Resim","imageable");
    }

    public function getKucukResimAttribute()
    {
        return "b";
        $resim = asset("uploads/thumb_".$this->resim()->first()->isim);
        return '<img src="'.$resim.'" class="img-thumbnail" width="150" />';
    }


}
