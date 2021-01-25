<template>
  <div class="">
    <el-radio-group
      v-model="_status"
      size="small"
    >
      <el-radio-button label="">全部 {{statusInfo.total}}</el-radio-button>
      <el-radio-button label="pending">等待中 {{statusInfo.pending}}</el-radio-button>
      <el-radio-button label="running">运行中 {{statusInfo.running}}</el-radio-button>
      <el-radio-button label="finished">已结束 {{statusInfo.finished}}</el-radio-button>
    </el-radio-group>

    <JobCancelAll
      style="margin-left:20px;"
      :project="project"
      size="small"
    />

    <AutoRefresh
      style="margin-left:20px;"
      @refresh="$emit('success')"
    />

  </div>
</template>

<script>
import AutoRefresh from '@/views/commom/AutoRefresh.vue';
import JobCancelAll from './JobCancelAll.vue';

export default {
  name: '',

  components: { AutoRefresh, JobCancelAll },

  props: {
    status: { type: String },

    // {total、finished、pending、running}
    statusInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      project: '',
    };
  },

  computed: {
    _status: {
      get() {
        return this.status;
      },
      set(val) {
        this.$emit('update:status', val);
        this.$emit('status-change', val);
      },
    },
  },

  methods: {},

  created() {
    this.project = this.$route.params.project;
  },
};
</script>

<style lang="scss" scoped>
</style>