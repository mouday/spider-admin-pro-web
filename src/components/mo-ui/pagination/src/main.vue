<template>
  <el-pagination background
    hide-on-single-page
    v-bind="$attrs"
    v-on="$listeners"
    :page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    :current-page="currentPage"
    :layout="layout"
    :total="innerTotal"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
</template>

<script>
/**
 *
 * hide-on-single-page  只有一页时是否隐藏
 */
export default {
  name: "MoPagination",

  /**
   * 传入 0 或 1
   *
   * sync: currentPage
   * emit: change
   */
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number | String,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    layout: {
      type: String,
      default: "total, prev, pager, next"
    }
  },

  computed: {
    // 兼容后端传过来的字符串
    innerTotal() {
      if (typeof this.total == "string") {
        return parseInt(this.total);
      } else {
        return this.total;
      }
    }
  },

  methods: {
    handleSizeChange(size) {
      this.$emit("update:pageSize", size);
      this.$emit("size-change", size);
      this.$emit("change", size);
    },

    handleCurrentChange(page) {
      this.$emit("update:currentPage", page);
      this.$emit("current-change", page);
      this.$emit("change", page);
    }
  }
};
</script>


<style lang="scss" scoped>
.el-pagination {
  margin-top: 20px;
  text-align: center;
}
</style>
