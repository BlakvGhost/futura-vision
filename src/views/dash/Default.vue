<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <h1>Welcome {{ $currentUser()['email'] }}</h1>
        </template>
    </DashBaseVue>
</template>