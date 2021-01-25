<template>
  <icon-name :src="src">
    <slot></slot>
  </icon-name>
</template>

<script>
import IconName from "../iconname/index.vue";

export default {
  name: "MoUserName",

  props: {
    src: {
      type: String,
      default: ""
    }
  },

  components: { IconName }
};
</script>

<style lang="scss" scoped>
/deep/ .mo-image {
  border-radius: 100%;
}
</style>