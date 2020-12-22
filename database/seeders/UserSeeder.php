<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\Models\User::factory()->create(['email' => 'admin@example.com']);
        $user->assignRole('admin');
        \App\Models\User::factory(10)->create();
    }
}
