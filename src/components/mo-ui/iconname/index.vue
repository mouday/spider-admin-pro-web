<template>
  <span class="iconname">

    <span class="icon">
      <mo-image :src="src" />
    </span>

    <span class="name">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import MoImage from "../image/index.vue";

export default {
  name: "MoIconName",

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
.iconname {
  display: flex;
  height: 24px;
  line-height: 24px;

  span {
    display: inline-block;

    &.name {
      margin-left: 5px;
    }
  }
}
</style>