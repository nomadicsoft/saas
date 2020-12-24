<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PricePlan;
use App\Services\StripeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BillingController extends Controller
{

    /**
     * @var \App\Services\StripeService
     */
    public $stripeService;

    public function __construct()
    {
        $this->stripeService = new StripeService();
    }

    public function getSetupIntent( Request $request ){
        return $request->user()->createSetupIntent();
    }

    public function postPaymentMethods( Request $request ){
        $this->stripeService->storePaymentMethod($request->user(), $request->get('payment_method'));
        return response()->json( null, 204 );
    }

    public function getPaymentMethods( Request $request ){
        $paymentMethods = $this->stripeService->getPaymentMethods($request->user());
        return response()->json( $paymentMethods );
    }

    public function removePaymentMethod( Request $request ){
        $success = $this->stripeService->removePaymentMethod($request->user(), $request->get('id'));
        return response()->json( null, $success ? 204 : 422 );
    }

    public function updateSubscription( Request $request ){
        $this->stripeService->updateSubscription($request->user(), $request->get('plan'), $request->get('payment'));
        return response()->json(['subscription_updated' => true]);
    }
}
