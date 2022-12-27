<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="Post">
                <template #form="data">
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Title Inferieur*</label>
                        <input type="text" name="sub_title" id="title" placeholder="Entrer le titre Inferieur"
                            class="form-control" required v-model="data.post.sub_title">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Title Superieur*</label>
                        <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre Superieur"
                            class="form-control" required v-model="data.post.sup_title">
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Image de Couverture*</label>
                        <input type="file" name="img" id="cover" class="form-control">
                        <a :href="$storage_url + data.post.cover" target="_blank"> Visualiser l'image </a>
                    </div>
                    <div class="form-group my-2">
                        <label for="editorCu" class="form-text">Contenu*</label>
                        <textarea name="content" id="editorCu" cols="30" rows="6" class="form-control" v-model="data.post.content">

                        </textarea>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>