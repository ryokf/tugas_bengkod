<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Periksa extends Model
{
    use HasFactory;

    protected $table = 'periksa';

    protected $fillable = [
        'id_pasien',
        'id_dokter',
        'tgl_periksa',
        'catatan',
        'biaya_periksa',
    ];

    protected $dates = [
        'tgl_periksa',
    ];

    // Relationship with pasien
    public function pasien()
    {
        return $this->belongsTo(User::class, 'id_pasien');
    }

    // Relationship with dokter
    public function dokter()
    {
        return $this->belongsTo(User::class, 'id_dokter');
    }

    // Relationship with detail periksa
    public function detailPeriksa()
    {
        return $this->hasMany(DetailPeriksa::class, 'id_periksa');
    }

    // Relationship with obat through detail periksa
    public function obat()
    {
        return $this->belongsToMany(Obat::class, 'detail_periksa', 'id_periksa', 'id_obat')
                    ->withPivot('id') // Include pivot table id if needed
                    ->withTimestamps();
    }
}
