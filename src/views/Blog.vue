<template>
  <div class="blog">
    <div class="container">
      <component
      v-for="(slice, index) in slices"
      :key="index"
      :is="slice.slice_type + 'module'"
      :slice="slice">
      </component>
      <blog-posts/>
    </div>
  </div>
</template>

<script>
import BlogPosts from '@/components/parts/BlogPosts.vue'

export default {
  name: 'Blog',
  components: {
    BlogPosts
  },
  data() {
    return {
      documentId: "",
      slices: {}
    }
  },
  methods: {
    getContent(){
      this.$prismic.client.getByUID("pages","blog")
      .then((document) => {
        if (document) {
          this.documentId = document.id;
          this.slices = document.data.body;

        } else {
          this.$router.push({name: 'not-found'})
        }
      })
    }
  },
  created() {
    this.getContent()
  },
}
</script>