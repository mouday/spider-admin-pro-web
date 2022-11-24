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

    <ProjectSelect
      style="margin-left: 20px"
      size="small"
      :value.sync="_project"
      @on-init="handleProjectSelectInit"
    />

    <JobCancelAll
      style="margin-left: 20px"
      :project="project"
      size="small"
    />

    <AutoRefresh
      style="margin-left: 20px"
      @refresh="$emit('success')"
    />
  </div>
</template>

<script>
import AutoRefresh from '@/views/commom/AutoRefresh.vue'
import JobCancelAll from './JobCancelAll.vue'
import ProjectSelect from '@/views/project/ProjectSelect.vue'

export default {
  name: '',

  components: { AutoRefresh, JobCancelAll, ProjectSelect },

  props: {
    status: { type: String },

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
  },

  methods: {
    handleProjectSelectInit(data) {
      this.$emit('on-init', data)
    },
  },

  created() {},
}
</script>

<style lang="scss" scoped></style>
