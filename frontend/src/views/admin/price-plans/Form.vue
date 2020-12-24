<template>
    <admin-dashboard-layout>
        <v-card>
            <v-card-title>
                <v-row>
                    <v-col>
                        {{pricePlan.name}}
                    </v-col>
                    <v-col class="text-right">
                        <v-btn text :to="{name: 'admin.price-plans.index'}">return</v-btn>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-text-field label="Name"  v-model="pricePlan.name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field label="Monthly Price"
                                          v-model="pricePlan.monthly_price"
                                          :disabled="pricePlan.id"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-switch label="Active" v-model="pricePlan.is_active"  />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <v-btn @click="handleSave">  Save </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </admin-dashboard-layout>
</template>

<script>
    import PricePlan from "../../../models/PricePlan";
    import AdminDashboardLayout from "../../../layouts/AdminDashboardLayout";

    export default {
        name: "users-show",
        components: {AdminDashboardLayout},
        data: function () {
            return {
                pricePlan: {}
            }
        },
        methods:{
            async handleSave() {
                const pricePlan = new PricePlan(this.pricePlan)
                this.pricePlan = await pricePlan.save()
            }
        },
        async mounted() {
            if (this.$route.params.id) {
                const pricePlanId = this.$route.params.id
                this.pricePlan = await PricePlan.find(pricePlanId)
            }

        },
    }
</script>

<style scoped>

</style>
