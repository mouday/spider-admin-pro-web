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
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column
        v-if="false"
        label="服务名称"
        header-align="center"
        align="left"
        width="150px"
      >
        <template slot-scope="scope">
          {{ scope.row.scrapyd_server_label || '-' }}
        </template>
      </el-table-column>

      <el-table-column
        label="项目名"
        header-align="center"
        align="left"
        width="150px"
      >
        <template slot-scope="scope">
          {{ scope.row.kwargs.project }}
        </template>
      </el-table-column>

      <el-table-column
        label="Spider"
        header-align="center"
        align="left"
        prop="spider"
        min-width="100px"
        sortable
      >
        <template slot-scope="scope">
          {{ scope.row.kwargs.spider }}
        </template>
      </el-table-column>

      <el-table-column
        label="Cron"
        align="center"
        width="120px"
      >
        <template slot-scope="scope">
          {{ scope.row.kwargs.cron }}
        </template>
      </el-table-column>

      <el-table-column
        label="调度方式"
        align="center"
        width="120px"
      >
        <template slot-scope="scope">
          <span
            :class="{
              'font-medium':
                scope.row.kwargs.schedule_type == ScheduleTypeEnum.RANDOM_SERVER,
            }"
            >{{ scope.row.schedule_type_label || '-' }}</span
          >
        </template>
      </el-table-column>

      <el-table-column
        label="下次执行时间"
        align="center"
        width="170px"
      >
        <template slot-scope="scope">
          {{ scope.row.next_run_time || '-' }}
        </template>
      </el-table-column>

      <el-table-column
        label="日志"
        align="center"
        width="120px"
      >
        <template slot-scope="scope">
          <!-- 调度日志 -->
          <router-link
            :to="{
              name: 'schedule-log-list',
              query: {
                project: scope.row.kwargs.project,
                spider: scope.row.kwargs.spider,
                scrapydServerId: scope.row.kwargs.scrapyd_server_id,
                job: scope.row.id,
              },
            }"
            target="_blank"
            >调度</router-link
          >

          <!-- 运行日志 -->
          <router-link
            :to="{
              name: 'logs-project-spider',
              query: {
                project: scope.row.kwargs.project,
                spider: scope.row.kwargs.spider,
                scrapydServerId: scope.row.kwargs.scrapyd_server_id,
              },
            }"
            target="_blank"
            >运行</router-link
          >

          <!-- 运行统计 -->
          <router-link
            :to="{
              name: 'stats-list',
              query: {
                project: scope.row.kwargs.project,
                spider: scope.row.kwargs.spider,
                scrapydServerId: scope.row.kwargs.scrapyd_server_id,
              },
            }"
            target="_blank"
            >统计</router-link
          >
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        align="center"
        width="65"
      >
        <template slot-scope="scope">
          <ScheduleJobStatus
            :job_id="scope.row.id"
            v-model="scope.row.status"
          />
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <SpiderSchedule
            :project="scope.row.kwargs.project"
            :spider="scope.row.kwargs.spider"
            :scrapydServerId="scope.row.kwargs.scrapyd_server_id"
            :options="scope.row.kwargs.options"
          />

          <ScheduleAdd
            class="ml-sm"
            :job_id="scope.row.id"
            @on-success="$emit('success')"
          />

          <ScheduleRemoveJob
            class="ml-sm"
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
import ScheduleJobStatus from './ScheduleJobStatus.vue'
import SpiderSchedule from '@/views/spider/SpiderSchedule.vue'
import ScheduleRemoveJob from './ScheduleRemoveJob.vue'
import ScheduleAdd from './ScheduleAdd.vue'
import {
  ScheduleTypeOptions,
  ScheduleTypeEnum,
} from '@/enums/schedule-type-enum.js'

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
    return {
      ScheduleTypeEnum,
    }
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
