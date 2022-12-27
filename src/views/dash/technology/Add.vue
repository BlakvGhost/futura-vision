<script setup>
import DashBaseVue from '@/components/dash/DashBase.vue';
import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Technology">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="name" id="title" placeholder="Entrer le nom :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Icon *</label>
                        <input type="text" name="icon" id="title2" placeholder="Entrer la classe mdi de l'icon :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="editor" class="form-text">Description *</label>
                        <textarea name="content" id="editor" cols="30" rows="6"
                            class="form-control form-control-lg"></textarea>
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>