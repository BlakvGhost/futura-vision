<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import View from '@/components/dash/View.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <View url-prefix="About" visible-title="title">
                <template #model>
                    <span>A-propos</span>
                </template>
            </View>
        </template>
    </DashBaseVue>
</template>