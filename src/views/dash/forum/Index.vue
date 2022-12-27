<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import View from '@/components/dash/View.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <View url-prefix="Forum" visible-title="content">
                <template #model>
                    <span>Postes du Forum</span>
                </template>
            </View>
        </template>
    </DashBaseVue>
</template>