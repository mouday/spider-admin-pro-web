<template>
  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    border
    header-row-class-name="table-header-row"
    header-cell-class-name="table-header-cell"
    class="base-table"
    style="width: 100%;"
  >
    <slot></slot>
  </el-table>
</template>

<script>
/**
 *
 * https://element.eleme.cn/#/zh-CN/component/table
 */
export default {
  name: 'MoTable',

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},
};
</script>

<style lang="scss">
// 表头颜色
.table-header-row {
  .table-header-cell {
    background-color: #fafafa;
  }
}
</style>