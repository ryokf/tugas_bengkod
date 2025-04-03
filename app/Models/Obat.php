<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obat extends Model
{
    use HasFactory;

    protected $table = 'obat';

    protected $fillable = [
        'nama_obat',
        'kemasan',
        'harga',
    ];

    // Relationship with detail periksa
    public function detailPeriksa()
    {
        return $this->hasMany(DetailPeriksa::class, 'id_obat');
    }

    // Relationship with periksa through detail periksa
    public function periksa()
    {
        return $this->belongsToMany(Periksa::class, 'detail_periksa', 'id_obat', 'id_periksa')
                    ->withPivot('id') // Include pivot table id if needed
                    ->withTimestamps();
    }
}
