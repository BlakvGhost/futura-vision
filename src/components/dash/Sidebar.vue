<template>
    <ul class="list-group">
    <li class="list-group-item" v-for="list in lists" :key="list" :class="activeLink(list)">
        <router-link :to="{name: 'view' + list}" class="oswald-bold text-decoration-none"> {{ list }}s </router-link>
        <router-link :to="{name: 'add' + list}" class="oswald-bold float-end"><i class="mdi mdi-plus-circle-outline"></i></router-link>
    </li>
</ul>
</template>
<script>
export default {
    data() {
        return {
            lists: ['Post', 'Service', 'Project', 'Customer', 'Team', 'Technology',
            'Partner', 'Exploit', 'Category', 'Blog', 'Forum',].sort(),
        }
    },
    methods: {
        activeLink: function(e) {
            return this.$route.href.includes(e.toLowerCase())?
                'list-group-item-light':
                'list-group-item-dark'
        }
    }
}
</script>