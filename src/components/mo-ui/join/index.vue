<template>
  <span>{{innerList}}</span>
</template>

<script>
/**
 * 类似 list.join(separator)
 */
export default {
  name: "MoJoin",

  props: {
    // 传入的 字符串 列表
    list: {
      type: Array,
      default: () => []
    },
    // 分隔符
    separator: {
      type: String,
      default: "·"
    },
    // 如果list为空显示的内容
    empty: {
      type: String,
      default: "-"
    }
  },

  computed: {
    innerList() {
      // 过滤空数据
      let list = this.list.filter(item => {
        return Boolean(item);
      });

      // 传入的地址列表 中间使用点连接，如果没有返回-
      if (list.length > 0) {
        return list.join(this.separator);
      } else {
        return this.empty;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>