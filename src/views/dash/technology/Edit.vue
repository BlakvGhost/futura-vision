<script setup>
import DashBaseVue from '@/components/dash/DashBase.vue';
import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="Technology">
                <template #form="data">
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="name" id="title" placeholder="Entrer le nom :"
                            class="form-control form-control-lg" v-model="data.post.name">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Icon *</label>
                        <input type="text" name="icon" id="title2" placeholder="Entrer la classe mdi de l'icon :"
                            class="form-control form-control-lg" v-model="data.post.icon">
                    </div>
                    <div class="form-group my-2">
                        <label for="editor" class="form-text">Description *</label>
                        <textarea name="content" id="editor" cols="30" rows="6" class="form-control form-control-lg"
                            v-model="data.post.content"></textarea>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>