<template>
  <div class="">
    <SelectScrapydServer
      :value.sync="_scrapydServerId"
      @on-init="handleSelectScrapydServerInit"
      @change="handleScrapydServerChange"
    ></SelectScrapydServer>

    <ProjectSelect
      class="ml-sm"
      :key="scrapydServerId"
      v-if="scrapydServerId"
      :value.sync="_project"
      :clearable="true"
      :filterable="true"
      :allow-create="true"
    />

    <SpiderSearch
      class="ml-sm"
      size="small"
      :project="_project"
      :value.sync="_spider"
      :clearable="true"
      @change="handleSpiderChange"
    />

    <StatsRemove
      style="margin-left: 20px"
      :status="status"
      :project="project"
      :spider="spider"
      :schedule_job_id="schedule_job_id"
      @success="$emit('success')"
    />
    <!-- <ScheduleAdd @success="$emit('success')"/>
      
      <ScheduleState style="margin-left:20px" @success="$emit('success')"/>
      
      <ScheduleRemoveAllJob style="margin-left:20px" @success="$emit('success')"/> -->
    <AutoRefresh
      class="ml-sm"
      :frequency="5000"
      @refresh="$emit('success')"
    />

    <el-tooltip
      effect="dark"
      content=""
      placement="top-start"
    >
      <div slot="content">
        使用
        <a
          href="https://github.com/mouday/scrapy-util"
          target="_blank"
          >scrapy-util</a
        >
        收集运行日志
      </div>
      <i
        class="el-icon-warning-outline"
        style="color: #808080"
      ></i>
    </el-tooltip>
  </div>
</template>

<script>
// import ScheduleAdd from './ScheduleAdd.vue';
// import ScheduleState from './ScheduleState.vue';
// import ScheduleRemoveAllJob from './ScheduleRemoveAllJob.vue';
import ProjectSelect from '@/components/SelectProject.vue'
import SpiderSearch from '@/views/spider/SpiderSearch.vue'
import StatsRemove from './StatsRemove.vue'
import AutoRefresh from '@/views/commom/AutoRefresh.vue'
import SelectScrapydServer from '@/components/SelectScrapydServer.vue'

export default {
  name: '',

  props: {
    status: { type: String },
    project: { type: String, default: '' },
    spider: { type: String, default: '' },
    schedule_job_id: { type: String, default: '' },
    scrapydServerId: { type: String, default: '' },

    // {total、success、error}
    statusInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },

  components: {
    SelectScrapydServer,
    ProjectSelect,
    SpiderSearch,
    StatsRemove,
    AutoRefresh,

    // ScheduleAdd,
    // ScheduleState,
    // ScheduleRemoveAllJob
  },

  data() {
    return {}
  },

  computed: {
    _scrapydServerId: {
      get() {
        return this.scrapydServerId
      },
      set(val) {
        this.$emit('update:scrapydServerId', val)
      },
    },
    _status: {
      get() {
        return this.status
      },
      set(val) {
        this.$emit('update:status', val)
        this.$emit('status-change', val)
      },
    },

    _project: {
      get() {
        return this.project
      },

      set(val) {
        this.$emit('update:project', val)
        this.$emit('project-change', val)
      },
    },
    _spider: {
      get() {
        return this.spider
      },
      set(val) {
        this.$emit('update:spider', val)
      },
    },
  },

  methods: {
    async getData() {},

    handleSpiderChange(val) {
      this.$emit('spider-change', val)
    },

    handleSelectScrapydServerInit(data) {
      // if (!this.scrapydServerId) {
      //   if (data.list && data.list.length > 0) {
      //     this.scrapydServerId = data.list[0].value
      //   }
      // }
      // this.hasScrapydServerIdInit = true
    },

    handleScrapydServerChange(val) {
      console.log(val)

      this._scrapydServerId = val
      this._project = null

      // this.$nextTick(() => {
      //   if (this.$refs.ProjectSelect) {
      //     this.$refs.ProjectSelect.resetData()
      //   }
      // })
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
