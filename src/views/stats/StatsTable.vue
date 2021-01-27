<template>
  <div class="">
    <mo-table
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-table-column
        align="center"
        label="ID"
        width="60"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1}}
        </template>
      </el-table-column>

      <el-table-column
        label="项目名"
        align="center"
      >
        <template slot-scope="scope">
          {{scope.row.project || '-'}}
        </template>
      </el-table-column>

      <el-table-column
        label="Spider"
        align="center"
      >
        <template slot-scope="scope">

          {{scope.row.spider}}

        </template>
      </el-table-column>

      <el-table-column
        label="收集数量"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.item_scraped_count + ''"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="丢弃数量"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.item_dropped_count + ''"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="错误日志"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.log_error_count + ''"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="持续时间"
        align="right"
        width="90px"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.duration_str"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="开始时间"
        align="center"
        width="180px"
      >
        <template slot-scope="scope">

          {{scope.row.start_time}}

        </template>
      </el-table-column>

      <el-table-column
        label="结束时间"
        align="center"
        width="180px"
      >
        <template slot-scope="scope">

          {{scope.row.finish_time}}

        </template>
      </el-table-column>

      <el-table-column
        label="结束原因"
        align="center"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.finish_reason"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="运行日志"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">

          <router-link
            :to="{'name': 'logs-project-spider-job', params: {project: scope.row.project, spider: scope.row.spider, job :scope.row.spider_job_id}}"
            target="_blank"
          ><i class="el-icon-document"></i> 日志</router-link>

        </template>
      </el-table-column>
    </mo-table>
  </div>
</template>

<script>
// import ProjectDelete from "./ProjectDelete.vue";
// import ScheduleJobStatus from './ScheduleJobStatus.vue';
// import SpiderSchedule from '@/views/spider/SpiderSchedule.vue';
// import ScheduleRemoveJob from './ScheduleRemoveJob.vue';
// import ScheduleAdd from './ScheduleAdd.vue';

export default {
  name: '',

  props: [],

  components: {
    // ScheduleAdd,
    // ScheduleJobStatus,
    // SpiderSchedule,
    // ScheduleRemoveJob,
  },

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
</style>