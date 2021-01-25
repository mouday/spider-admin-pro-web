<template>
  <el-button type="text"
    v-bind="$attrs"
    v-on="$listeners">
    <i class="el-icon-edit-outline"></i>
  </el-button>
</template>

<script>
export default {
  name: "MoEditButton"
};
</script>

<style lang="scss" scoped>
</style>