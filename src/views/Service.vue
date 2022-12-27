<script setup>
import UniqueBase from "@/components/UniqueBase.vue";
</script>
<template>
    <UniqueBase uri="service" title-string="NOS SERVICES ?">
        <template #post="data">
            <div class="fv-title-big">
                <h3 class="text-dark fw-bolder oswald-bold">
                    <img v-if="data.post.logo" :src="$loadImage(data.post.logo)" :alt="$avoid(data.post, 'name')"
                        :title="$avoid(data.post, 'name')" style="width:55px; max-height:40px;" class="align-middle">
                    <i v-if="data.post.icon"
                        :class="`mdi ${$avoid(data.post, 'icon')} mdi-36px text-fv-primary align-middle`"></i>
                    | <span class="align-middle">{{ $avoid(data.post, 'name') }}</span>
                </h3>
            </div>
            <div class="fv-title-normal fvSlideOn">
                <blockquote class="text-black-50 p-2">
                    <div style="font-size:22px" v-html="$avoid(data.post, 'content')">

                    </div>
                </blockquote>
            </div>
        </template>
    </UniqueBase>
</template>