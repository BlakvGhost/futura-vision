<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import View from '@/components/dash/View.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <View url-prefix="Blog" visible-title="title">
                <template #model>
                    <span>Postes de Blog</span>
                </template>
            </View>
        </template>
    </DashBaseVue>
</template>