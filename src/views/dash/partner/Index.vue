<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import View from '@/components/dash/View.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <View url-prefix="Partner" visible-title="name">
                <template #model>
                    <span>Partenaires</span>
                </template>
            </View>
        </template>
    </DashBaseVue>
</template>