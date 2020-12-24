<?php


namespace App\Models\Relations;


use App\Models\PricePlan;
use App\Models\User;

trait HasManyUsers
{
    /**
     * @property $this \Illuminate\Database\Eloquent\Model
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
