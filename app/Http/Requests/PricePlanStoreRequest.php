<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PricePlanStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'monthly_price' => 'numeric|required',
            'name' => 'required',
            'is_active' => 'boolean',
            'stripe_id' => 'nullable|string',
            'features' => 'nullable|json',
            'restrictions' => 'nullable|json',
        ];
    }
}
