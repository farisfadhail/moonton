<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature1', 'feature2', 'feature3'])
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 10,
                'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'])
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
