<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Team">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="Nom" id="title" placeholder="Entrer le nom :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Prenom *</label>
                        <input type="text" name="Prenom" id="title2" placeholder="Entrer le Prenom :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title4" class="form-text">Role *</label>
                        <input type="text" name="Role" id="title4" placeholder="Entrer son Role :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Image *</label>
                        <input type="file" name="Photo" id="cover" class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="editor" class="form-text">Biographie *</label>
                        <textarea name="Biographie" id="editor" cols="30" rows="6" class="form-control form-control-lg">

                        </textarea>
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>