<template>
    <div class="postpage">
        <div class="container">
            <div class="back">
            <router-link to="/" >back to list</router-link>
            </div>
            <h1>{{ $prismic.richTextAsPlain(fields.title) }}</h1>
            <p>
                <span class="create-at">
                    {{ Intl.DateTimeFormat('en-US', dateOptions).format(new Date(fields.date)) }}
                </span>
            </p>
            <component
            v-for="(slice, index) in slices"
            :key="index"
            :is="slice.slice_type + 'module'"
            :slice="slice">
            </component>
            </div>
    </div>
</template>

<script>
export default {
    name: 'post',
    data() {
        return {
            uid: '',
            fields: {
                title: null,
                date: null
            },
            slices: [],
            dateOptions: {
                year: 'numeric',
               month: 'short',
               day: '2-digit' 
            },
        }
    },
    methods: {
        getContent (uid) {
            this.$prismic.client.getByUID("post", uid)
            .then((document) => {
                if (document) {
                    this.fields.title = document.data.title,
                    this.fields.date = document.data.date,
                    this.slices = document.data.body
                }else{
                    this.$router.push({name: 'not-found'})
                }
            })
        }
    },
    created() {
        this.getContent(this.$route.params.uid)
    },
}
</script>