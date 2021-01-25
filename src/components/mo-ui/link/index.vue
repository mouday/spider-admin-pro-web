<template>
  <a v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "MoLink"
};
</script>

<style lang="scss" scoped>
a {
  color: #606266;
  &:hover {
    color: #4568c5;
  }
}
</style>