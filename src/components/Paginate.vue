<script setup>
    defineProps({
        data: {
            required: true,
            type: Object,
        },
        uri: String,
    })
</script>

<template>
<div class="my-3 text-center w-100" v-if="data.last_page > 1">
    <ul class="pagination w-50 mx-auto">
        <li class="page-item previous" :class="can('prev_page_url', 'disabled')"
            @click="data.prev_page_url?paginateTo(data.current_page - 1): false">
            <a href="javascript:void(0)" class="page-link">Precedent</a>
        </li>
        <li class="page-item" v-for="u in data.last_page"
         :key="u" :class="data.current_page === u ? 'active': null"
          @click="paginateTo(u)">
            <a href="javascript:void(0)" class="page-link"> {{ u }} </a>
        </li>
        <li class="page-item next" :class="can('next_page_url', 'disabled')"
            @click="data.next_page_url?paginateTo(data.current_page + 1): false">
            <a href="javascript:void(0)" class="page-link">Suivant</a>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    data() {
        return {
            page: 1,
        }
    },
    methods: {
        paginateTo: function(page) {
            this.$Progress.start();
            this.$http.get(this.uri + '?page=' + page, this.$token())
            .then( res => {
                this.$emit("pagine", res.data.data);
                this.$Progress.finish();
            }).catch(error => {
                this.$Progress.fail();
            })
        },
        can: function(cond, callback) {
            return !this.data[cond]? callback : null;
        },
    },
}
</script>