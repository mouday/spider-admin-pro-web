<template>
  <span>{{innerText}}</span>
</template>

<script>
/**
 * 处理空白内容
 */
export default {
  name: "MoText",

  props: {
    // 传入的字符
    text: {
      type: String,
      default: ""
    },

    // 如果text为空显示的内容
    empty: {
      type: String,
      default: "-"
    }
  },

  computed: {
    innerText() {
      if (this.text) {
        return this.text;
      } else {
        return this.empty;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>