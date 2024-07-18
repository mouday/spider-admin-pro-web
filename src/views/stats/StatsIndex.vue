<template>
  <div class="app-container">

    <StatsTool
      :scrapydServerId.sync="scrapydServerId"
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
      @sort-change="handleSortChange"
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

      // 查询参数
      project: '',
      spider: '',
      // 排序
      orderProp: '',
      orderType: '',
      scrapydServerId: ''
    };
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true;

      const res = await this.$Http.statsCollectionListItem({
        page: this.page,
        size: this.size,

        scrapydServerId: this.scrapydServerId,
        project: this.project,
        spider: this.spider,

        order_prop: this.orderProp,
        order_type: this.orderType,
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

    handleSortChange({ column, prop, order }) {
      console.log(column, prop, order);

      this.orderType = order;
      
      // 如果有排序方式再给排序字段
      if (this.orderType) {
        this.orderProp = prop;
      } else {
        this.orderProp = null;
      }

      this.page = 1;
      this.getData();
    },
  },

  created() {
    this.scrapydServerId = this.$route.query.scrapydServerId
    this.project = this.$route.query.project;
    this.spider = this.$route.query.spider;

    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>