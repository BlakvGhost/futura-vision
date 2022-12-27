<template>
    <nav class="navbar navbar-expand bg-light navbar-light justify-content-end border p-0 my-2">
        <router-link :to="{name: 'defaultDash'}" class="navbar-brand fv-hov-text">
        <i class="mdi mdi-home-outline align-middle"></i>
    </router-link>
    <router-link :to="{name: 'dashUser'}" class="navbar-brand fv-hov-text">
        <i class="mdi mdi-account-outline align-middle"></i>
    </router-link>
    <router-link :to="{name: 'dashAbout'}" class="navbar-brand fv-hov-text">
        <i class="mdi mdi-information-outline align-middle"></i>
    </router-link>
    <router-link :to="{name: 'setting'}" class="navbar-brand fv-hov-text">
        <i class="mdi mdi-cog-outline align-middle"></i>
    </router-link>
    <a href="javascript:void(0)" class="navbar-brand fv-hov-text">
        <i class="mdi mdi-brightness-4 align-middle"></i>
    </a>
    <div class="navbar-brand dropdown">
        <a href="javascript:void(0)" class="navbar-brand fw-bold dropdown-toggle fv-hov-text" data-bs-toggle="dropdown" id="bell">
            <i class="mdi mdi-bell-badge-outline align-middle"></i>
        </a>
        <div class="fv-list-group dropdown-menu fv-zd-5 end-0 shadow" aria-labelledby="bell" style="left:initial">
            <ul class="list-group animate__animated animate__fadeIn">
                <li class="list-group-item list-group-item-control disable text-center fw-bold">
                    <i class="mdi mdi-email-lock"></i>
                    &nbsp; Notifications
                </li>
                <li class="list-group-item list-group-item-control" v-for="c in contacts" :key="c">
                    <router-link to="/" class="nav-link">
                        <i class="mdi mdi-pound align-middle text-success"></i>
                        &nbsp; {{ c.first_name + ' ' + c.last_name }} sent you a message
                        <small class="text-danger fst-italic d-block">[ {{ new Date(c.created_at).toLocaleString() }} ]</small>
                    </router-link>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
</template>
<script>
export default {
    data() {
        return {
            contacts: [],
        }
    },
    methods: {
        getData: function() {
            this.$http.get('contact', this.$token()).then((res) => {
                this.contacts = res.data.data;
            })
        }
    },
    mounted() {
        this.getData();
    },
}
</script>