<?php

namespace Database\Seeders;

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
           ['name'=>'Basic','stripe_id'=>'price_1I1mXPCgYzmVVpXhHCUxxhiS'],
           ['name'=>'Pro','stripe_id'=>'price_1I1mXQCgYzmVVpXhffJPrBRe'],
        ]);
    }
}
