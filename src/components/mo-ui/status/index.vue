<template>
  <i :class="clazz"></i>
</template>

<script>
export default {
  name: 'MoStatus',

  props: {
    value: { type: Boolean },
  },

  components: {},

  data() {
    return {};
  },

  computed: {
    clazz() {
      if (this.value) {
        return 'el-icon-circle-check success';
      } else {
        return 'el-icon-circle-close error';
      }
    },
  },

  methods: {},

  created() {},
};
</script>

<style lang="scss" scoped>
.success {
  color: #67c23a;
}

.error {
  color: #f56c6c;
}
</style>