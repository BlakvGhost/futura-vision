<script setup>
import DashBaseVue from '@/components/dash/DashBase.vue';
import Alert from '@/components/Alert.vue'
defineProps({
    data: Object,
})
</script>
<template>
    <DashBaseVue>
        <template #main>
            <form action="/" method="POST" enctype="multipart/form-data" id="form" @submit.prevent="submit">
                <Alert :data="notifs" :state="state"></Alert>
                <slot name="form" :config="config"></slot>
                <div class="form-group my-3 text-center">
                    <button class="btn btn-success w-50 m-auto fv-w-75-sm">Enregistré</button>
                </div>
            </form>
        </template>
    </DashBaseVue>
</template>
<script>
export default {
    data() {
        return {
            notifs: null,
            state: false,
            config: {}
        }
    },
    methods: {
        submit: function (e) {
            $('html, body').animate(
                { scrollTop: 0 }, 600);
            let data = new FormData(e.target);

            this.$http.post('setting', data, this.$token()).then(res => {
                this.config = res.data.data;
                this.notifs = res.data.message;
                this.state = res.data.success
                this.$toastr("POST", this.notifs, "success");
                this.$Progress.finish();
            }).catch(error => {
                this.notifs = error.response.data.message;
                this.state = error.response.data.success;
                this.$toastr("POST", this.$BadFieldsErrorMessage, "error");
                this.$Progress.fail();
            })
        }
    },
    mounted() {
        this.config = this.data.config ?? {};
    },
    watch: {
        data: function(d) {
            this.config = d.config;
        }
    }
}
</script>