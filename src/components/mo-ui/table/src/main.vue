<template>
  <el-table
    size="middle"
    v-bind="$attrs"
    v-on="$listeners"
    border
    header-row-class-name="mo-table-header-row"
    header-cell-class-name="mo-table-header-cell"
    class="mo-table"
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
    return {}
  },

  computed: {},

  methods: {},

  created() {},
}
</script>

<style lang="scss">
.mo-table {
  width: 100%;
}

/* 表头背景颜色 */
.mo-table-header-row {
  th.mo-table-header-cell {
    background-color: #fafafa;
  }
}
</style>
