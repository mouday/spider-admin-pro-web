<template>
  <div class="sidebar-info">
    <div>{{ spider_admin.version || '-' }}</div>

    <div style="margin-top: 10px">
      <a
        href="https://pypi.org/project/spider-admin-pro/"
        target="_blank"
      >
        <img
          alt="Version"
          src="https://img.shields.io/pypi/v/spider-admin-pro.svg"
      /></a>
    </div>

    <div style="margin-top: 10px">
      <a
        href="https://github.com/mouday/spider-admin-pro"
        target="_blank"
      >
        <img
          alt="GitHub stars"
          src="https://img.shields.io/github/stars/mouday/spider-admin-pro.svg?style=social"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  props: [],

  components: {},

  data() {
    return {
      spider_admin: {},
    }
  },

  computed: {},

  methods: {
    async getData() {
      const res = await this.$Http.systemSystemConfig()
      this.scrapyd = res.data.scrapyd
      this.spider_admin = res.data.spider_admin
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped>
.sidebar-info {
  color: #c1c6c8;
  font-size: 14px;


  margin-bottom: 20px;
  text-align: center;
}
</style>
