<template>
  <img class="mo-image"
    v-bind="$attrs"
    v-on="$listeners"
    :src="src || defaultImage"
    @error="handleError">
</template>

<script>
/**
 * img图片：
 *   src 默认值 错误值
 *
 * img标签的onerror事件
 * https://www.cnblogs.com/willingtolove/p/9544576.html
 */
export default {
  name: "MoImage",

  props: {
    src: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      // 默认值
      defaultImage: require("./img/default.png")
    };
  },

  methods: {
    // 错误值处理
    handleError(event) {
      event.target.src = this.defaultImage;
      // 控制不要一直跳动
      event.target.onerror = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.mo-image {
  width: 22px;
  height: 22px;
  border: 1px solid #eeeeee;
  flex-shrink: 0;
  object-fit: contain;
}
</style>