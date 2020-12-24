<?php

namespace Database\Seeders;

use App\Models\PricePlan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PricePlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('price_plans')->insert([
           ['name'=>'Basic','stripe_id'=>'price_1I1mXPCgYzmVVpXhHCUxxhiS', 'is_active' => true, 'monthly_price' => 5.0],
           ['name'=>'Pro','stripe_id'=>'price_1I1mXQCgYzmVVpXhffJPrBRe', 'is_active' => true, 'monthly_price' => 10.0],
        ]);
    }
}
