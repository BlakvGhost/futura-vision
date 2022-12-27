<script setup>
import CurrentUser from "../components/CurrentUser.vue";
</script>
<template>
    <div class="border-top p-3">
        <div class="container-custom my-3">
            <div class="fv-title-normal my-3 row">
                <h3 class="text-fv-primary col col-10"><span class="dbslash">//</span> &nbsp; Votre Compte</h3>
                <button class="text-end btn btn-danger col text-center" @click="$logout">Deconnectez-Vous</button>
            </div>
            <div class="my-2">
                <CurrentUser></CurrentUser>
            </div>
        </div>        
    </div>
</template>