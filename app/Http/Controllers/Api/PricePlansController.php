<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PricePlan;
use Illuminate\Http\Request;

class PricePlansController extends Controller
{
    public function index()
    {
        return PricePlan::get();
    }

    public function show(PricePlan $pricePlan)
    {
        return $pricePlan;
    }

    public function store(Request $request)
    {

    }

    public function update(PricePlan $pricePlan,  Request $request)
    {

    }
}
