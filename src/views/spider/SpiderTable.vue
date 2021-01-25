<template>
  <mo-table
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-table-column
      align="center"
      label="序号"
      width="60"
    >
      <template slot-scope="scope">
        {{ scope.$index + 1}}
      </template>
    </el-table-column>

    <el-table-column
      label="Spider名称"
      align="center"
    >
      <template slot-scope="scope">
        {{scope.row.spider }}
      </template>
    </el-table-column>

    <el-table-column
      label="查看日志"
      align="center"
    >
      <template slot-scope="scope">
        <router-link :to="{'name': 'logs-project-spider', params: {project: project, spider: scope.row.spider }}">
          <i class="el-icon-document"></i>查看</router-link>
      </template>
    </el-table-column>

    <el-table-column
      label="添加任务"
      align="center"
    >
      <template slot-scope="scope">
        <ScheduleAdd
          :spider="scope.row.spider"
          :project="project"
        />
      </template>
    </el-table-column>

    <el-table-column
      label="运行Spider"
      align="center"
    >
      <template slot-scope="scope">
        <SpiderSchedule
          :spider="scope.row.spider"
          :project="project"
        />
      </template>
    </el-table-column>

  </mo-table>
</template>

<script>
import SpiderSchedule from './SpiderSchedule.vue';
import ScheduleAdd from '@/views/schedule/ScheduleAdd.vue';

export default {
  name: '',

  props: [],

  components: { SpiderSchedule, ScheduleAdd },

  data() {
    return {
      project: '',
    };
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.project = this.$route.params.project;
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>