<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PricePlanStoreRequest;
use App\Http\Requests\PricePlanUpdateRequest;
use App\Models\PricePlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PricePlansController extends Controller
{
    public function __construct()
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
    }

    public function index()
    {
        return PricePlan::get();
    }

    public function show(PricePlan $pricePlan)
    {
        return $pricePlan;
    }

    public function store(PricePlanStoreRequest $request)
    {
        try {
            return PricePlan::create($request->validated());
        } catch (\Throwable $t) {
            report($t);
            abort(500, $t->getMessage());
        }
    }

    public function update(PricePlan $pricePlan,  PricePlanUpdateRequest $request)
    {
        try {
            DB::beginTransaction();
            $pricePlan->update($request->validated());
            DB::commit();
            return $pricePlan;
        } catch (\Throwable $t) {
            DB::rollBack();
            report($t);
            return  abort(500, $t->getMessage());
        }
    }
}
