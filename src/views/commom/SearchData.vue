<template>
  <el-input placeholder="请输入内容"
    v-bind="$attrs"
    v-model="_keywords"
    @keypress.enter.native="handleClick">
    <el-button slot="append"
      icon="el-icon-search"
      @click="handleClick"></el-button>
  </el-input>
</template>

<script>
export default {
  name: "",

  props: {
    keywords: {
      type: String,
      default: "",
    },
  },

  components: {},

  data() {
    return {};
  },

  computed: {
    _keywords: {
      get() {
        return this.keywords;
      },
      set(val) {
        this.$emit("update:keywords", val);
      },
    },
  },

  methods: {
    handleClick() {
      this.$emit("click", this._keywords);
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>