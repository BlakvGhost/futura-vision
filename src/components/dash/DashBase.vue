<script setup>
import Sidebar from "@/components/dash/Sidebar.vue";
import ControlBar from '@/components/dash/ControlBar.vue'
</script>
<template>
    <div class="border-top py-3">
        <div class="container">
            <div class="row fv-f-direc-colRev-sm" v-if="allowed">
                <div class="col col-4 fv-w-100-sm">
                    <Sidebar></Sidebar>
                </div>
                <div class="col col-8 fv-w-100-sm">
                    <ControlBar></ControlBar>
                    <slot name="main"></slot>
                </div>
            </div>
            <div v-if="!allowed">
                <div class="text-center">
                    <div class="text-center">
                        <h1 class="text-danger fa-3x"> It's a 403 </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        !this.allowed ?
            this.$router.back() :
            false;
    },
    computed: {
        allowed: function () {
            if (this.$currentUser()) {
                return this.$currentUser()['role'] === 'admin'
            }
            return false
        }
    }
}
</script>