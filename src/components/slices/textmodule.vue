<template>
  <div class="textmodule" v-html="getText">
  </div>
</template>

<script>
import PrimsicDom from 'prismic-dom';

export default {
    props: ['slice'],
    name: 'textmodule',
    computed: {
        getText: function() {
            return PrimsicDom.RichText.asHtml(this.slice.primary.text, this.$prismic.linkResolver);
        }
    }
}
</script>

<style>

</style>