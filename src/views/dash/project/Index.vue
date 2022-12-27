<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import View from '@/components/dash/View.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <View url-prefix="Project" visible-title="name">
                <template #model>
                    <span>Projets</span>
                </template>
            </View>
        </template>
    </DashBaseVue>
</template>