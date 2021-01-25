<template>
  <div class="app-container">
    <div
      class="log-content"
      v-loading="listLoading"
    >
      <pre>{{content}}</pre>
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
      project: '',
      spider: '',
      job: '',

      listLoading: true,

      content: '',
    };
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true;

      const res = await this.$Http.scrapydJobLog({
        project: this.project,
        spider: this.spider,
        job: this.job,
      });

      this.content = res;

      this.listLoading = false;
    },
  },

  created() {
    this.project = this.$route.params.project;
    this.spider = this.$route.params.spider;
    this.job = this.$route.params.job;
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.log-content {
  overflow: auto;

  pre {
    margin: 0;
  }
}
</style>