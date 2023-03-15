<script setup>
import ContactUs from "../components/ContactUs.vue";
defineProps({
    data: Object,
})
</script>
<template>
    <div class="border-top p-3">
        <article class="container-custom my-3">
            <div class="container-fluid">
                <div class="fv-title-normal fvSlideOn">
                    <h3 class="text-fv-primary"><span class="dbslash">//</span> &nbsp; NOS SERVICES</h3>
                </div>
                <div class="row row-cols-3 my-3 fv-f-direc-col-sm">
                    <div class="col fvSlideOn fv-w-100-sm my-2" v-for="sv in data.services" :key="sv.id">
                        <div class="container-fluid p-3 border rounded-3 fv-hov bg-light">
                            <router-link :to="{ name: 'service', params: { id: sv.id ?? 0, title: $url(sv.name) } }"
                                class="text-decoration-none">
                                <div class="row">
                                    <div class="col col-auto">
                                        <img v-if="sv.logo" :src="$loadImage(sv.logo)" :alt="sv.name" :title="sv.name"
                                            style="width:34px; max-height:40px;">
                                        <i v-if="sv.icon" :class="`mdi ${sv.icon} mdi-36px text-fv-primary`"></i>
                                    </div>
                                    <div class="px-2 col">
                                        <div class="fv-title-big">
                                            <h6 class="fw-bold oswald-bold text-dark"> {{ sv.name }} </h6>
                                        </div>
                                        <div class="fv-title-normal">
                                            <h6 class="text-black-50"> {{ $reduce(sv.content, 100) }} </h6>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs></ContactUs>
        </article>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$animate();
    },
    updated() {
        this.$animate();
    },
}
</script>