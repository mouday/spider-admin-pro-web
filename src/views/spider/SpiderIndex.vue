<template>
  <div class="app-container">
    <SpiderTable :data="list" />
  </div>
</template>

<script>
import SpiderTable from './SpiderTable';

export default {
  name: '',

  props: [],

  components: { SpiderTable },

  data() {
    return {
      project: '',
      list: []
    };
  },

  computed: {},

  methods: {
    async getData() {
      const res = await this.$Http.scrapydlistSpiders({
        project: this.project,
      });
      this.list = res.data
    },
  },

  created() {
    this.project = this.$route.params.project;
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>