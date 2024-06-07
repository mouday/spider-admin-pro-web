<template>
    <el-input v-bind="$attrs"
        v-on="$listeners">
        <slot slot-scope="{append}"></slot>
    </el-input>
</template>

<script>
/**
 *
 * https://element.eleme.cn/#/zh-CN/component/table
 */
export default {
  name: "BaseInput",

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {}
};
</script>

<style lang="scss" scoped>
.table-header-row {
  background-color: #e3e3e3;
}

::v-deep .table-header-cell {
  background-color: #fafafa;
  height: 40px;
}
</style>