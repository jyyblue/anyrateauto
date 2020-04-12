<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sliders extends Model
{
    protected $table = 'sliders';
    protected $fillable = ['name', 'path', 'layer1', 'layer2', 'layer3', 'layer4', 'layer5'];
}
