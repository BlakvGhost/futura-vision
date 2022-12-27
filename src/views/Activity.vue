<script setup>
   import UniqueBase from "@/components/UniqueBase.vue";
</script>
<template>
    <UniqueBase uri="exploit" title-string="POURQUOI NOUS ?">
        <template #post="data">
            <div class="fv-title-big">
                <h3 class="text-dark fw-bolder oswald-bold">
                    <i :class="`mdi ${$avoid(data.post, 'icon')} mdi-36px align-middle opacity-50`"></i> |
                     {{ $avoid(data.post, 'name') }} | 
                     <sup style="font:inherit" data-fv-anim='countdown'
                      :data-fv-data="$avoid(data.post, 'value')">
                    </sup>
                </h3>
            </div>
            <div class="fv-title-normal fvSlideOn">
                <blockquote class="text-black-50 p-2">
                    <div style="font-size:22px">
                        {{ $avoid(data.post, 'content') }}
                    </div>
                </blockquote>
            </div>
        </template>
    </UniqueBase>
</template>
<script>
export default {
    mounted() {
        new fJs.NumberAutoCount();      
    },
}
</script>