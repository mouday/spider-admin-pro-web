<template>
  <div class="">
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
        label="项目名"
        align="center"
      >
        <template slot-scope="scope">
          {{scope.row.kwargs.project}}
        </template>
      </el-table-column>

      <el-table-column
        label="Spider"
        align="center"
      >
        <template slot-scope="scope">
          {{scope.row.kwargs.spider}}
        </template>
      </el-table-column>

      <el-table-column
        label="cron"
        align="center"
      >
        <template slot-scope="scope">
          {{scope.row.kwargs.cron}}
        </template>
      </el-table-column>

      <el-table-column
        label="下次执行时间"
        align="center"
        width="170px"
      >
        <template slot-scope="scope">
          {{scope.row.next_run_time || '-'}}
        </template>
      </el-table-column>

      <el-table-column
        label="调度日志"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">

          <router-link
            :to="{'name': 'schedule-log-list', query: {project: scope.row.kwargs.project, spider: scope.row.kwargs.spider, job :scope.row.id}}"
            target="_blank"
          ><i class="el-icon-document"></i> 日志</router-link>

        </template>
      </el-table-column>

      <el-table-column
        label="运行统计"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <router-link
            :to="{'name': 'stats-list', query: {project: scope.row.kwargs.project, spider: scope.row.kwargs.spider}}"
            target="_blank"
          ><i class="el-icon-document"></i> 日志</router-link>

        </template>
      </el-table-column>

      <el-table-column
        label="运行日志"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <router-link
            :to="{'name': 'logs-project-spider', params: {project: scope.row.kwargs.project, spider: scope.row.kwargs.spider}}"
            target="_blank"
          ><i class="el-icon-document"></i> 日志</router-link>

        </template>
      </el-table-column>

      <el-table-column
        label="任务状态"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <ScheduleJobStatus
            :job_id="scope.row.id"
            v-model="scope.row.status"
          />
        </template>
      </el-table-column>

      <el-table-column
        label="执行任务"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <SpiderSchedule
            :project="scope.row.kwargs.project"
            :spider="scope.row.kwargs.spider"
          />
        </template>

      </el-table-column>
      <el-table-column
        label="修改任务"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <ScheduleAdd
            :job_id="scope.row.id"
            @success="$emit('success')"
          />
        </template>

      </el-table-column>

      <el-table-column
        label="移除任务"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <ScheduleRemoveJob
            :job_id="scope.row.id"
            @success="$emit('success')"
          />
        </template>
      </el-table-column>

    </mo-table>
  </div>
</template>

<script>
// import ProjectDelete from "./ProjectDelete.vue";
import ScheduleJobStatus from './ScheduleJobStatus.vue';
import SpiderSchedule from '@/views/spider/SpiderSchedule.vue';
import ScheduleRemoveJob from './ScheduleRemoveJob.vue';
import ScheduleAdd from './ScheduleAdd.vue';

export default {
  name: '',

  props: [],

  components: {
    ScheduleAdd,
    ScheduleJobStatus,
    SpiderSchedule,
    ScheduleRemoveJob,
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