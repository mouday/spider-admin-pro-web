<template>
  <el-switch
    class="mo-switch"
    v-bind="$attrs"
    v-on="$listeners"
  ></el-switch>
</template>

<script>
export default {
  name: 'MoSwitch',
};
</script>

<style lang="scss">
.mo-switch .el-switch__label span{
  font-size: 12px;
  font-weight: normal;
}
</style>
