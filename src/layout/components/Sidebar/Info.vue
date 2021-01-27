<template>
  <div class="sidebar-info">
    <div>
      <a href="https://pypi.org/project/spider-admin-pro/" target="_blank">
        <img
          alt="GitHub stars"
          src="https://img.shields.io/github/stars/mouday/spider-admin-pro.svg?style=social"
        ></a>
    </div>

    <div style="margin-top:10px;">
      <a href="https://github.com/mouday/spider-admin-pro" target="_blank">
        <img
          alt="Version"
          src="https://img.shields.io/pypi/v/spider-admin-pro.svg"
        ></a>
    </div>

  </div>
</template>

<script>
export default {
  name: '',

  props: [],

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.sidebar-info {
  margin-bottom: 20px;
  text-align: center;
}
</style>