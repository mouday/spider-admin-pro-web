<template>
  <div class="app-container">

    <!-- <StatsTool
      :project.sync="project"
      :spider.sync="spider"
      @project-change="handleProjectChange"
      @spider-change="handleSpiderChange"
      @success="handleSuccess"
    /> -->

    <!-- <div style="height:20px;"></div> -->

    <LoginTable
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
import LoginTable from './LoginTable.vue';
import StatsTool from './StatsTool.vue';

export default {
  name: '',

  props: [],

  components: {
    LoginTable,
    StatsTool,
  },

  data() {
    return {
      list: [],
      total: 0,

      page: 1,
      size: 20,
      listLoading: false,
    };
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true;

      const res = await this.$Http.actionHistoryLoginHistoryList({
        page: this.page,
        size: this.size,
      });

      if (res.code == 0) {
        this.list = res.data.list;
        this.total = res.data.total;
      }

      this.listLoading = false;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>