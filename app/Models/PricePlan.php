<?php

namespace App\Models;

use App\Models\Relations\HasManyUsers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PricePlan extends BaseModel
{
    use HasFactory;
    use HasManyUsers;

    const TRIAL_DAYS = 7;


    public static function create(array $attributes = [])
    {
        $attributes['monthly_price'] = convertDollarsToCents($attributes['monthly_price']);
        $productId = config('services.stripe.product');

        $pricePlan = self::query()->create($attributes);
        $stripe = \Stripe\Plan::create([
            'nickname' => $attributes['name'],
            'amount' => $pricePlan->monthly_price,
            'interval' => 'month',
            'product' => $productId,
            'currency' => 'usd',
        ]);

        $pricePlan->update(['stripe_id' => $stripe->id]);
        return $pricePlan;
    }

    public function update(array $attributes = [], array $options = [])
    {
        if (isset($attributes['is_active']) && $this->is_active !== $attributes['is_active']) {
            \Stripe\Plan::update($this->stripe_id, ['active' => $attributes['is_active']]);
        }
        if (isset($attributes['name']) && $this->name !== $attributes['name']) {

            \Stripe\Plan::update($this->stripe_id, ['nickname' => $attributes['name'],]);
        }
        return parent::update($attributes, $options);
    }
}
