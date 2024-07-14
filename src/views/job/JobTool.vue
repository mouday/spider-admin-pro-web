<template>
  <div class="">
    <el-radio-group
      v-model="_status"
      size="small"
    >
      <el-radio-button label="">全部 {{ statusInfo.total }}</el-radio-button>
      <el-radio-button label="pending"
        >等待中 {{ statusInfo.pending }}</el-radio-button
      >
      <el-radio-button label="running"
        >运行中 {{ statusInfo.running }}</el-radio-button
      >
      <el-radio-button label="finished"
        >已结束 {{ statusInfo.finished }}</el-radio-button
      >
    </el-radio-group>

    <SelectScrapydServer
      class="ml-sm"
      :value.sync="_scrapydServerId"
      @on-init="handleSelectScrapydServerInit"
      @change="handleScrapydServerChange"
    ></SelectScrapydServer>

    <ProjectSelect
      ref="ProjectSelect"
      class="ml-sm"
      size="small"
      :scrapydServerId="scrapydServerId"
      :value.sync="_project"
      @on-init="handleProjectSelectInit"
    />

    <JobCancelAll
      class="ml-sm"
      :project="project"
      size="small"
    />

    <AutoRefresh
      class="ml-sm"
      @refresh="$emit('success')"
    />
  </div>
</template>

<script>
import AutoRefresh from '@/views/commom/AutoRefresh.vue'
import JobCancelAll from './JobCancelAll.vue'
import ProjectSelect from '@/components/SelectProject.vue'
import SelectScrapydServer from '@/components/SelectScrapydServer.vue'

export default {
  name: '',

  components: { AutoRefresh, JobCancelAll, SelectScrapydServer, ProjectSelect },

  props: {
    status: { type: String },

    scrapydServerId: { type: String, default: '' },
    project: { type: String, default: '' },

    // {total、finished、pending、running}
    statusInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },

  data() {
    return {}
  },

  computed: {
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

    _scrapydServerId: {
      get() {
        return this.scrapydServerId
      },

      set(val) {
        this.$emit('update:scrapydServerId', val)
        this.$emit('scrapydServerId-change', val)
      },
    },
  },

  methods: {
    handleProjectSelectInit(data) {
      this.$emit('on-init', data)
    },

    handleScrapydServerChange() {
      this.$nextTick(() => {
        this.$refs.ProjectSelect.resetData()
      })
    },

    handleSelectScrapydServerInit(data) {
      if (!this._scrapydServerId) {
        if (data.list && data.list.length > 0) {
          this._scrapydServerId = data.list[0].value

          this.$nextTick(() => {
            this.$refs.ProjectSelect.resetData()
          })
        }
      }
    },
  },

  created() {},
}
</script>

<style lang="scss" scoped></style>
