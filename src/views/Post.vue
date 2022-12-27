<script setup>
   import UniqueBase from "../components/UniqueBase.vue";
</script>
<template>
    <UniqueBase uri="post" title="sub_title">
        <template #post="data">
            <div class="fv-title-big fvSlideOn">
                <h3 class="text-dark fw-bolder oswald-bold">
                    {{ data.post.sup_title }}
                </h3>
            </div>
            <div class="fv-title-normal">
                <div class="text-black-50 fv-p-2-lg">
                    <div style="font-size:22px" v-html="data.post.content">
                        
                    </div>
                    <div style="height:500px; width:100%;" class="my-3 w300">
                        <img :src="$loadImage(data.post.cover)" :alt="data.post.sup_title" style="height:100%; width:100%;">
                    </div>
                </div>
            </div>
        </template>
    </UniqueBase>
</template>