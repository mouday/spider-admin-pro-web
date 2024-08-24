<template>
  <div class="app-container">
    <AutoRefresh
      size="small"
      @refresh="getData"
    />

    <el-divider></el-divider>

    <div
      class="log-content"
      v-loading="listLoading"
    >
      <pre v-if="content">{{ content }}</pre>
      <div v-else>暂无数据</div>
    </div>
  </div>
</template>

<script>
import AutoRefresh from '@/views/commom/AutoRefresh.vue'

export default {
  name: '',

  props: [],

  components: {
    AutoRefresh,
  },

  data() {
    return {
      scrapydServerId: '',
      project: '',
      spider: '',
      job: '',

      listLoading: true,

      content: '',
    }
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true

      const res = await this.$Http.scrapydJobLog({
        scrapydServerId: this.scrapydServerId,
        project: this.project,
        spider: this.spider,
        job: this.job,
      })

      this.content = res

      this.listLoading = false
    },
  },

  created() {
    this.project = this.$route.query.project
    this.spider = this.$route.query.spider
    this.job = this.$route.query.job
    this.scrapydServerId = this.$route.query.scrapydServerId

    this.getData()
  },
}
</script>

<style lang="scss" scoped>
.log-content {
  overflow: auto;

  pre {
    margin: 0;
  }
}
</style>
