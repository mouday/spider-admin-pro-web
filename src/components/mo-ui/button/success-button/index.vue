<template>
  <el-button type="text"
    v-bind="$attrs"
    v-on="$listeners">
    <i class="el-icon-circle-check"></i>
  </el-button>
</template>

<script>
export default {
  name: "MoSuccessButton"
};
</script>

<style lang="scss" scoped>
.el-icon-circle-check {
  color: #67c23a;
}
</style>