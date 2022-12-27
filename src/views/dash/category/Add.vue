<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Category">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="name" id="title" placeholder="Entrer le nom de la categorie :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Icon *</label>
                        <input type="text" name="icon" id="title" placeholder="Entrer la classe MDI du logo :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Couleur de fond *</label>
                        <input type="color" name="bg" id="title" class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="editorI" class="form-text">Contenu *</label>
                        <textarea name="desc" id="editorI" cols="30" rows="6" class="form-control form-control-lg"></textarea>
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>