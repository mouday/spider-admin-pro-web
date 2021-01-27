<template>
  <div class="app-container">

    <StatsTool
      :project.sync="project"
      :spider.sync="spider"
      @project-change="handleProjectChange"
      @spider-change="handleSpiderChange"
      @success="handleSuccess"
    />

    <div style="height:20px;"></div>

    <StatsTable
      :data="list"
      v-loading="listLoading"
    />

    <mo-pagination
      :current-page.sync="page"
      :page-size="size"
      :total="total"
      @change="getData"
    />
  </div>
</template>

<script>
import StatsTable from './StatsTable.vue';
import StatsTool from './StatsTool.vue';

export default {
  name: '',

  props: [],

  components: {
    StatsTable,
    StatsTool,
  },

  data() {
    return {
      list: [],
      total: 0,

      page: 1,
      size: 20,
      listLoading: false,

      project: '',
      spider: '',
    };
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true;

      const res = await this.$Http.statsCollectionListItem({
        page: this.page,
        size: this.size,

        project: this.project,
        spider: this.spider,
      });

      if (res.code == 0) {
        this.list = res.data.list;
        this.total = res.data.total;
      }

      this.listLoading = false;
    },

    handleProjectChange() {
      this.page = 1;
      this.getData();
    },
    handleSpiderChange() {
      this.page = 1;
      this.getData();
    },

    handleSuccess() {
      this.page = 1;
      this.getData();
    },
  },

  created() {
    this.project = this.$route.query.project;
    this.spider = this.$route.query.spider;

    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>