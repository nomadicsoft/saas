<?php


namespace App\Models\Relations;


use App\Models\User;

trait BelongsToUser
{
    /**
     * @property $this \Illuminate\Database\Eloquent\Model
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
