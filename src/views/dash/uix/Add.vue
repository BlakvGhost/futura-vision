<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Post">
                <template #form>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Pourquoi nous choisir</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#pnsh">
                            </span>
                        </h4>
                        <section id="pnsh">
                            <div class="form-group my-2">
                                <label for="title" class="form-text">Titre</label>
                                <input type="text" name="sub_title" id="title" placeholder="Entrer le titre: "
                                            class="form-control" required>
                            </div>
                            <div class="row row-cols-2 my-2 fv-f-direc-col-sm">
                                <div class="form-group fv-w-100-sm">
                                    <label for="cover" class="form-text">Bg Image 1*</label>
                                    <input type="file" name="img" id="cover" class="form-control" required>
                                    <div>
                                        <div class="form-group my-2">
                                            <label for="title" class="form-text">Valeur</label>
                                            <input type="text" name="sub_title" id="title"
                                            placeholder="Entrer le titre: " class="form-control" required>        
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="title" class="form-text">Titre</label>
                                            <input type="text" name="sub_title" id="title"
                                            placeholder="Entrer le titre: " class="form-control" required>        
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="title" class="form-text">Description</label>
                                            <textarea name="content" id="ed"
                                            cols="30" rows="4" class="form-control">
                                            </textarea>      
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group fv-w-100-sm">
                                    <label for="cover" class="form-text">Bg Image 1*</label>
                                    <input type="file" name="img" id="cover" class="form-control" required>
                                    <div>
                                        <div class="form-group my-2">
                                            <label for="title" class="form-text">Valeur</label>
                                            <input type="text" name="sub_title" id="title"
                                            placeholder="Entrer le titre: " class="form-control" required>        
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="title" class="form-text">Titre</label>
                                            <input type="text" name="sub_title" id="title"
                                            placeholder="Entrer le titre: " class="form-control" required>        
                                        </div>
                                        <div class="form-group my-2">
                                            <label for="title" class="form-text">Description</label>
                                            <textarea name="content" id="ed"
                                            cols="30" rows="4" class="form-control">
                                            </textarea>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Nos Services</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#svs">
                            </span>
                        </h4>
                        <section id="svs" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div>
                        </section>
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Nous Contactez</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#nct">
                            </span>
                        </h4>
                        <section id="nct" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title*</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div>
                            <div class="row row-cols-2 my-2 fv-f-direc-col-sm">
                                <div class="form-group fv-w-100-sm">
                                    <label for="cover" class="form-text">Bg Image</label>
                                    <input type="file" name="img" id="cover" class="form-control" required>
                                </div>
                                <div class="form-group fv-w-100-sm">
                                    <label for="title2" class="form-text">Title *</label>
                                    <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                                </div>
                            </div>
                        </section>                     
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Derniers Projects</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#dpr">
                            </span>
                        </h4>
                        <section id="dpr" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title *</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="ed" class="form-text">Contenu*</label>
                                <textarea name="content" id="ed" cols="30" rows="6" class="form-control"></textarea>
                            </div>
                        </section>
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Technologies</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#tech">
                            </span>
                        </h4>
                        <section id="tech" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title *</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div>
                        </section>    
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Client</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#cln">
                            </span>
                        </h4>
                        <section id="cln" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title *</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div>
                        </section>   
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Notre Equipe</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#nepq">
                            </span>
                        </h4>
                        <section id="nepq" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title *</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div> 
                        </section>    
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Notre Blog</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#nblog">
                            </span>
                        </h4>
                        <section id="nblog" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title *</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div> 
                        </section>
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Notre Forum</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#nforu">
                            </span>
                        </h4>
                        <section id="nforu" class="collapse">
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Title *</label>
                                <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre "
                                        class="form-control" required>
                            </div> 
                        </section>    
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>