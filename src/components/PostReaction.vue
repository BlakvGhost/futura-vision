<script setup>
defineProps({
    data: {
        required: true,
        type: Object,
    },
    user: {
        required: true,
        type: Object,
    },
    model: String,
    can: Boolean,
    comment: Boolean,
})
</script>
<template>
    <div class="border rounded-3 bg-light">
        <a href="javascript:void(0)" class="btn btn-light" @click="!exist('likes') ? react('like') : false"
            :class="exist_class('likes')">
            <i class="mdi" :class="exist('likes') ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'"></i>
            <span> {{ $avoidr(post, 'likes').length }} </span>
        </a>
        <a href="javascript:void(0)" class="btn btn-light" @click="!exist('unlikes') ? react('unlike') : false"
            :class="exist_class('unlikes')">
            <i class="mdi" :class="exist('unlikes') ? 'mdi-thumb-down' : 'mdi-thumb-down-outline'"></i>
            <span> {{ $avoidr(post, 'unlikes').length }} </span>
        </a>
        <router-link v-if="!comment" href="#postComment" :to="{
            name: 'blogDetail',
            params: {
                id: $avoid(post, 'id') ?? 0, category:
                    $url($avoid(post ? post.category : {}, 'name') ?? ''),
                title: $url($avoid(post, 'title'))
            }
        }" class="btn btn-light" :class="exist_class('commentsAll')">
            <i class="mdi mdi-android-messages"></i>
            <span> {{ $avoidr(post, 'commentsAll').length }} </span>
        </router-link>
        <a href="javascript:void(0)" class="btn btn-light disabled" v-if="!comment">
            <i class="mdi mdi-eye-outline" :class="s ? 'text-danger' : false"></i>
            <span> {{ $avoidr(post, 'viewers').length }} </span>
        </a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            s: null,
            post: {},
        }
    },
    methods: {
        exist: function (key) {
            try {
                return this.post[key].filter(
                    l => l.user.id == this.user.id
                ).length;
            } catch (error) {
                return false
            }
        },
        exist_class: function (key) {
            if (!this.user['token']) {
                return 'disabled';
            }
            return this.exist(key) ? 'text-danger disabled' : null
        },
        react: function (type) {
            if (this.user['token']) {
                let data = {
                    post_id: this.post.id,
                    model: this.model,
                    type: type,
                }
                this.$http.post('react', data, this.$token())
                    .then(res => {
                        this.post = res.data.data;
                        this.$toastr("REACTION AU POSTE", res.data.message, "success");
                    })
            }
        },
        seen: function () {
            let data = {
                post_id: this.post.id ?? this.$route.params.id,
                model: this.model,
            }
            this.$http.post('seen', data, this.$token())
                .then(res => {
                    this.post = res.data.data;
                    this.s = true;
                })
        },
    },
    mounted() {
        this.post = this.data;
        this.can ? this.seen() : !1;
    },
    watch: {
        data: function (data) {
            this.post = data;
        }
    }
}
</script>
