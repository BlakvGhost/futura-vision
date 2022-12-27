<script setup>
defineProps({
    model: String,
})
</script>
<template>
    <div class="my-3" style="font-size:22px">
        <form method="POST" class="fv-w-50-lg" @submit.prevent="false">                    
            <div class="form-group my-2 fvSlideOn position-relative" style="z-index:5">
                <label for="q" class="form-text d-none">Rechercher : </label>
                <input type="text" name="q" id="q" 
                 placeholder="Entrer un mot clé pour rechercher" class="form-control"
                 autocomplete="off" v-model="q" @keyup="search">
                <div class="position-absolute start-0 w-100 bg-white border" v-if="data">
                    <h4 class="p-2">Meilleurs Resultats de recherche pour 
                        <strong> {{ q }}</strong> 
                        dans notre "{{ model }}"
                    </h4>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action
                         border animate__animated animate__fadeInDown" v-for="post in data" :key="post.id">
                            <router-link :to="{name: model + 'Detail', 
                                params: {id: post.id??0, category: $url(post.category.name), 
                                title: $url(post.title ?? post.content)}}" 
                                class="nav-link">
                                    {{ $reduce(post.title ?? post.content, 20) }}  | 
                                    <span :style="`color:${post.category.bg}`">
                                        {{ post.category.name }}
                                    </span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>            
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            q: '',
            data: null,
        }
    },
    methods: {
        search: function() {
            if (this.q.trim().length > 0) {
                this.$http.get(`filter/word/${this.model}/${this.q}`,
                 this.$token()).then( res => {
                    this.data = res.data.data
                });
            }else{
                this.data = null;
            }
        }
    },
}
</script>