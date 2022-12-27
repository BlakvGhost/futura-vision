<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import View from '@/components/dash/View.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <View url-prefix="Team" visible-title="role">
                <template #model>
                    <span>Notre Equipe</span>
                </template>
            </View>
        </template>
    </DashBaseVue>
</template>