<?php

namespace App\Models;

use App\Models\Relations\HasManyUsers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PricePlan extends BaseModel
{
    use HasFactory;
    use HasManyUsers;
}
