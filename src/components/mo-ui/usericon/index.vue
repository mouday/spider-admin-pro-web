<template>
  <mo-image :src="src" />
</template>

<script>
import MoImage from "../image/index.vue";

export default {
  name: "MoUserIcon",

  components: { MoImage },

  props: {
    src: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.mo-image {
  border-radius: 100%;
}
</style>