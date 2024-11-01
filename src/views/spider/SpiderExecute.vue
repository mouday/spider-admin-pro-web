<template>
  <span class="">
    <el-button
      size="mini"
      type="text"
      icon="el-icon-video-play"
      @click="handleDialogVisibleClick"
      v-bind="$attrs"
    ></el-button>

    <el-dialog
      :title="'运行一次'"
      :visible.sync="dialogVisible"
      width="500px"
      center
    >
       <SpiderForm
         v-if="dialogVisible"
         :spider="spider"
         :project="project"
         :scrapydServerId="scrapydServerId"
         :options="options"
         @on-success="handleFormSuccess"
         @on-cancel="handleDialogClose"
       ></SpiderForm>
     </el-dialog>
  </span>
</template>

<script>
import SpiderForm from './SpiderForm.vue'

export default {
  name: '',

  props: {
    scrapydServerId: { type: String, default: null },
    project: { type: String, default: null },
    spider: { type: String, default: null },
    options: { type: String, default: "" },
  },

  components: {
    SpiderForm,
  },

  data() {
    return {
      dialogVisible: false,
    }
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
