<?php


namespace App\Models\Relations;


use App\Models\PricePlan;

trait BelongsToPricePlan
{
    /**
     * @property $this \Illuminate\Database\Eloquent\Model
     */
    public function pricePlan()
    {
        return $this->belongsTo(PricePlan::class);
    }
}
