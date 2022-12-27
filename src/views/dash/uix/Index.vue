<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import View from '@/components/dash/View.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <View url-prefix="Post" visible-title="sup_title">
                <template #model>
                    <span>Postes</span>
                </template>
            </View>
        </template>
    </DashBaseVue>
</template>