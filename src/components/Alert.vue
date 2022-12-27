<script setup>
    defineProps({
        state: Boolean,
        data: Object | String | Boolean,
    })
</script>
<template>
    <div class="alert alert-dismissible my-2" :class="`alert-${state?'success':'danger'}`"
        role="alert" id="liveAlert" v-if="data">
        <div class="msg-alert">
            <h4 v-if="typeof data === 'string'">
                {{ data }}
            </h4>
            <h4 v-for="notif in errors" :key="notif">
                <span class="d-block" v-for="n in notif" :key="n">
                    <span class="d-block">{{ n }}</span>
                </span>
            </h4>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>
<script>
export default {
    computed: {
        errors: function() {
            return typeof this.data === 'object'? this.data: [] 
        }
    },
}
</script>