<?php


namespace App\Services;


use App\Models\PricePlan;
use App\Models\User;

class StripeService
{

    public function storePaymentMethod(User $user, $id)
    {
        if($user->stripe_id == null ){
            $user->createAsStripeCustomer();
        }
        $user->addPaymentMethod( $id );
        $user->updateDefaultPaymentMethod( $id );
    }

    public function getPaymentMethods(User $user)
    {
        $methods = array();

        if( $user->hasPaymentMethod() ){
            foreach( $user->paymentMethods() as $method ){
                array_push( $methods, [
                    'id' => $method->id,
                    'brand' => $method->card->brand,
                    'last_four' => $method->card->last4,
                    'exp_month' => $method->card->exp_month,
                    'exp_year' => $method->card->exp_year,
                ] );
            }
        }
        return $methods;
    }

    public function removePaymentMethod(User $user, $paymentMethodID)
    {
        $success = false;
        $paymentMethods = $user->paymentMethods();
        foreach( $paymentMethods as $method ){
            if( $method->id == $paymentMethodID ){
                $method->delete();
                $success = true;
                break;
            }
        }
        return $success;
    }

    public function updateSubscription(User $user, $planId, $paymentMethodId)
    {
        if(! $user->subscribed('Nomadic Saas') ){
            $user->newSubscription( 'Nomadic Saas', $planId )->create( $paymentMethodId );
        }else{
            $user->subscription('Nomadic Saas')->swap( $planId );
        }
        $pricePlan =  PricePlan::where('stripe_id', $planId)->first();
        $user->pricePlan()->associate($pricePlan)->save();
    }
}
