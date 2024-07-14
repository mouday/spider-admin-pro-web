<template>
  <span class="">
    <!-- 修改 -->
    <el-button
      v-if="job_id"
      size="mini"
      @click="handleDialogVisibleClick"
      icon="el-icon-edit-outline"
      v-bind="$attrs"
    ></el-button>

    <!-- 添加 -->
    <el-button
      v-else
      size="mini"
      type="primary"
      @click="handleDialogVisibleClick"
      icon="el-icon-document-add"
      v-bind="$attrs"
      >添加</el-button
    >

    <el-dialog
      :title="btnText + '任务'"
      :visible.sync="dialogVisible"
      width="500px"
      center
    >
      <ScheduleForm
        v-if="dialogVisible"
        :scrapydServerId="scrapydServerId"
        :job_id="job_id"
        :project="project"
        :spider="spider"
        @on-success="handleFormSuccess"
        @on-cancel="handleDialogClose"
      ></ScheduleForm>
    </el-dialog>
  </span>
</template>

<script>
import ScheduleForm from './ScheduleForm.vue'

export default {
  name: '',

  props: {
    job_id: { type: String, default: null },
    scrapydServerId: { type: String, default: null },
    project: { type: String, default: null },
    spider: { type: String, default: null },
  },

  components: {
    ScheduleForm,
  },

  data() {
    return {
      dialogVisible: false,
    }
  },

  computed: {
    btnText() {
      if (this.job_id) {
        return '修改'
      } else {
        return '添加'
      }
    },

    // icon() {
    //   if (this.job_id) {
    //     return 'el-icon-edit-outline'
    //   } else {
    //     return 'el-icon-document-add'
    //   }
    // },
  },

  watch: {
    dialogVisible(val) {
      if (val) {
      }
    },
  },

  methods: {
    handleDialogVisibleClick() {
      this.dialogVisible = true
    },

    handleDialogClose() {
      this.dialogVisible = false
    },

    handleFormSuccess() {
      this.dialogVisible = false
      this.$emit('on-success')
    },
  },

  created() {},
}
</script>

<style lang="scss" scoped></style>
