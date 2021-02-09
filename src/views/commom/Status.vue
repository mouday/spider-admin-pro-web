<template>
  <span>
    <i
      v-if="value"
      class="el-icon-circle-check"
      style="color:#67C23A;"
    ></i>
    <i
      v-else
      class="el-icon-circle-close"
      style="color:#F56C6C;"
    ></i>
  </span>
</template>

<script>
export default {
  name: '',

  props: {
    value: { type: Boolean },
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},
};
</script>

<style lang="scss" scoped>
</style>