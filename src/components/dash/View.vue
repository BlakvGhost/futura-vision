<script setup>
defineProps({
    urlPrefix: {
        type: String,
        required: true,
    },
    visibleTitle: String,
})
</script>
<template>
    <div class="row justify-content-end mb-3 w-100">
        <router-link :to="{name: 'add' + urlPrefix}" role="button" class="btn btn-success col col-auto mx-2 ">
        <i class="mdi mdi-plus align-middle"></i> 
        Ajouter Un <slot name="model"></slot>
    </router-link>
    </div>
    <div class="my-4">
        <div class="alert alert-dismissible alert-success" role="alert" id="OkliveAlert" v-if="notif">
            <div class="msg-alert">
                <p class="mb-0" v-for="n in notif" :key="n"> {{ n }} </p>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <form action="/" method="POST" @submit.prevent="submit">            
            <div class="row justify-content-between">
                <h3 class="text-fv-primary my-2 col">
                    <input type="checkbox" name="all" id="allselect" class="form-check-input mx-2 my-0" @click="selectAll">
                    <label for="allselect">{{ posts.length }} <slot name="model"></slot></label>
                </h3>
                <div class="my-2 col text-end">
                    <button type="submit" class="btn btn-danger">Supprimer {{ checked.length }} <slot name="model"></slot> Selectionner</button>
                </div>
            </div>
            <ul class="list-group">
                <li class="list-group-item list-group-item-action" v-for="post in posts" :key="post">
                    <input type="checkbox" :name="post.id" class="form-check-input ch" @click="check">
                    <router-link :to="{name: 'edit' + urlPrefix, params: {id: post.id}}" class="text-decoration-none mx-2">
                        {{ post[visibleTitle] }}
                    </router-link>
                </li>
            </ul>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            notif: null,
            posts: [],
            checked: [],
        }
    },
    methods: {
        getPost: function() {
            this.$http.get(this.urlPrefix.toLowerCase(),
            this.$token()).then( (response) => {
                this.posts = response.data.data;
            })
        },
        check: function(e) {
            $(e.target).is(':checked') ?
            this.checked.push(e.target.name):
            function(o)  {o.checked = o.checked.filter((t) => t !== e.target.name);}(this)
        },
        selectAll: function(e) {
            $('.ch').click();
        },
        submit: function() {
            if (this.checked.length >= 1) {
                this.notif = []; 
                this.checked.forEach((t) => {
                    this.$http.delete(this.urlPrefix.toLowerCase() + 
                    '/' + t, this.$token()).then( (response) => {
                        this.notif.push(response.data.message);
                        this.posts = this.posts.filter((y) => y.id != t);
                    });
                }) 
            } 
                       
        }
    },
    mounted() {
        this.getPost();
    },
}
</script>