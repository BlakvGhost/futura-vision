<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import CurrentUser from '@/components/CurrentUser.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <div class="py-2">
                <h5 class="oswald-bold my-2 text-decoration-underline">Administracteur Connecté</h5>
                <CurrentUser></CurrentUser>
            </div>
        </template>
    </DashBaseVue>
</template>