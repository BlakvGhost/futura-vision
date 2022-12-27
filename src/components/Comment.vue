<script setup>
import Paginate from './Paginate.vue';
import PostReaction from './PostReaction.vue';
import Alert from './Alert.vue';
defineProps({
  model: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  currentUser: Object | Boolean,
  pagineUri: String,
});
</script>
<template>
  <div class="my-3 border-top" style="font-size: 22px">
    <div class="fv-title-normal fvSlideOn my-3">
      <h3 class="text-fv-primary">
        <span class="dbslash">//</span>
        &nbsp; Reaction au Poste
      </h3>
    </div>
    <div class="my-2">
      <PostReaction :data="post" :model="model" :can="true" :user="currentUser ? currentUser : {}">
      </PostReaction>
    </div>
    <div class="my-3">
      <form method="POST" class="py-2" v-if="currentUser" @submit.prevent="submit" id="postComment">
        <Alert :data="notifs" :state="state"></Alert>
        <input type="hidden" name="model" :value="model">
        <input type="hidden" name="post_id" :value="$route.params.id">
        <div class="form-group">
          <label for="message" class="form-text">Commentaire* : </label>
          <textarea name="content" id="message" placeholder="Entrer votre Message" class="form-control form-control-lg"
            cols="40" rows="5" v-model="message"></textarea>
        </div>
        <div class="text-center my-2">
          <button type="submit" class="btn btn-success w-50 m-auto">
            ENVOYER
          </button>
        </div>
      </form>
      <div class="alert alert-dismissible alert-warning" role="alert" id="liveAlertWarn" v-if="!currentUser">
        <div class="msg-alert text-center">
          <h3>
            Connectez-Vous avant d'effectuer des commentaires sur cette
            Publication
          </h3>
          <router-link style="font-size: 22px" :to="{ name: 'login' }" class="btn btn-link">Connexion</router-link>
          <router-link style="font-size: 22px" :to="{ name: 'register' }" class="btn btn-link">Creation de Compte
          </router-link>
        </div>
      </div>
    </div>
    <div class="my-2">
      <div v-for="comment in post.comments.data" :key="comment.id">
        <div class="card my-2 p-2 fvSlideOn">
          <div class="row justify-content-between fv-f-direc-col-sm">
            <div class="col">
              <div class="card-header bg-transparent row border-0">
                <div class="text-white col col-auto">
                  <img :src="$loadImageFV(comment.user.avatar)" class="rounded-circle img-trumbnail"
                    style="width: 72px; height: 72px" />
                </div>
                <div class="col text-dark align-self-center">
                  <div class="fv-title-big">
                    <h6 class="fw-bolder oswald-bold">
                      {{ $avoid(comment.user, 'first_name') + " " + $avoid(comment.user, 'last_name') }}
                    </h6>
                  </div>
                  <div class="fv-title-normal fvSlideOn">
                    <h6 class="text-fv-primary">
                      {{ comment.created_at }}
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="fv-title-normal">
                  <h6 class="text-dark" style="font-size: 22px">
                    {{ comment.content }}
                  </h6>
                </div>
              </div>
            </div>
            <div class="col text-end">
              <div class="m-2">
                <PostReaction :data="comment" model="comment" :comment="true" :user="currentUser ? currentUser : {}">
                </PostReaction>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Paginate :uri="pagineUri" :data="post.comments" @pagine="updateDataPost">
      </Paginate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifs: false,
      state: false,
      message: null,
      post: { comments: { data: [] } },
    }
  },
  methods: {
    submit: function (e) {
      let data = new FormData(e.target);

      if (!this.message) {
        this.state = false;
        return this.notifs = this.$emptyFieldsErrorMessage;
      }
      this.$Progress.start();
      this.$http.post('comment',
        data, this.$token()).then(res => {
          this.post = res.data.data;
          this.notifs = res.data.message;
          this.state = res.data.success;
          this.$toastr("COMMENTAIRE", this.notifs, "success");
          this.$Progress.finish();
          e.target.reset();
        }).catch((error) => {
          this.notifs = error.response.data.message;
          this.state = error.response.data.success;
          this.$toastr("COMMENTAIRE", this.$BadFieldsErrorMessage, "error");
          this.$Progress.fail();
        })
    },
    updateDataPost: function (data) {
      this.post = data['post'];
    }
  },
  updated() {
    this.$animate();
  },
  watch: {
    data: function (data) {
      this.post = data;
    }
  }
}
</script>
