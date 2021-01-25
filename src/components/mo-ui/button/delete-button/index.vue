<template>
  <el-popconfirm title="确定删除？"
    v-bind="$attrs"
    v-on="$listeners">
    <el-button slot="reference"
      type="danger">
      <i class="el-icon-delete"></i>
    </el-button>
  </el-popconfirm>
</template>

<script>
/**
 * Events
 * onConfirm	点击确认按钮时触发
 * onCancel	点击取消按钮时触发
 */
export default {
  name: "BaseDeleteButton"
};
</script>

<style lang="scss" scoped>
</style>