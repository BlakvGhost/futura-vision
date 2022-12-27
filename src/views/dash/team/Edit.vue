<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="Team">
                <template #form="data">
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="Nom" id="title" placeholder="Entrer le nom :"
                            class="form-control form-control-lg" v-model="data.post.first_name">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Prenom *</label>
                        <input type="text" name="Prenom" id="title2" placeholder="Entrer le Prenom :"
                            class="form-control form-control-lg" v-model="data.post.last_name">
                    </div>
                    <div class="form-group my-2">
                        <label for="title4" class="form-text">Role *</label>
                        <input type="text" name="Role" id="title4" placeholder="Entrer son Role :"
                            class="form-control form-control-lg" v-model="data.post.role">
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Image *</label>
                        <input type="file" name="Photo" id="cover" class="form-control form-control-lg">
                        <a :href="$storage_url + data.post.avatar" target="_blank" v-if="data.post.avatar"> Visualiser l'image </a>
                    </div>
                    <div class="form-group my-2">
                        <label for="editor" class="form-text">Biographie *</label>
                        <textarea name="Biographie" id="editor" cols="30" rows="6" class="form-control form-control-lg" v-model="data.post.bio">

                        </textarea>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>