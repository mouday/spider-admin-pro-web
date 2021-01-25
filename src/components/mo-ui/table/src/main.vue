<template>
    <el-table v-bind="$attrs"
        v-on="$listeners"
        border
        header-row-class-name="table-header-row"
        header-cell-class-name="table-header-cell"
        class="base-table"
        style="width: 100%;">
        <slot></slot>
    </el-table>
</template>

<script>
/**
 *
 * https://element.eleme.cn/#/zh-CN/component/table
 */
export default {
  name: "MoTable",

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

/deep/ .table-header-cell {
  background-color: #fafafa;
  height: 40px;
}
</style>