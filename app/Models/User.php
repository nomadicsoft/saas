<?php

namespace App\Models;

use App\Models\Relations\BelongsToPricePlan;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, HasRoles, Billable;
    use BelongsToPricePlan;

    protected $guarded = [];
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getPrimaryRoleNameAttribute()
    {
        return optional($this->roles()->orderBy('id')->first())->name ?? 'user';
    }

    public function getRedirectLinkAttribute()
    {
        if ($this->hasRole('admin')) {
            return '/admin/users';
        }
        if ($this->plan_id !== null) {
            return '/admin/users';
        }
        return '/dashboard/billing/select-plan';
    }
}
