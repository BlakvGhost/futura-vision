<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="Forum">
                <template #form="data">
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Categorie *</label>
                        <select name="category_id" id="title2" class="form-select">>
                            <option v-for="cat in $reverse(categories)" :value="cat.id" :key="cat.id"
                             :selected="cat.id??0 === data.post.category.id">
                                {{ cat.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group my-2">
                        <label for="editor" class="form-text">Contenu *</label>
                        <textarea name="content" id="editor" cols="30" rows="6" class="form-control form-control-lg" v-model="data.post.content">

                        </textarea>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>
<script>
export default {
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        getPost: function() {
            this.$http.get('category',
            this.$token()).then( (response) => {
                this.categories = response.data.data;
            })
        },
    },
    created() {
        this.getPost();
    }
}
</script>