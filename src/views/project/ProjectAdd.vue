<template>
  <div class="">
    <el-button
      size="mini"
      @click="dialogVisible = true"
      icon="el-icon-document-add"
      >添加</el-button
    >

    <el-dialog
      title="添加项目"
      :visible.sync="dialogVisible"
      width="500px"
      center
    >
      <el-form :model="form" status-icon label-width="80px" size="small">
        <el-form-item label="项目名称" prop="project" required>
          <ProjectSearch
            style="width: 360px;"
            :value.sync="form.project"
            :disabled="project != null"
          />
        </el-form-item>

        <el-form-item label="项目文件" prop="egg" required>
          <el-upload
            drag
            action=""
            ref="upload"
            accept=".egg"
            :auto-upload="false"
            :multiple="false"
            :show-file-list="false"
            :on-change="handleChange"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              <span>只能上传egg文件。</span><span>推荐使用：</span
              ><a
                href="https://pypi.org/project/scrapyd-client/"
                class="mo-link"
                target="_blank"
                >scrapyd-client</a
              >
            </div>
          </el-upload>
          <span>{{ form.egg.name }}</span>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="addVersion"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ProjectSearch from './ProjectSearch.vue'

export default {
  name: '',

  props: {
    project: { type: String, default: null },
  },

  components: { ProjectSearch },

  data() {
    return {
      dialogVisible: false,

      form: {
        project: '',
        egg: '',
      },
    }
  },

  computed: {},

  watch: {
    dialogVisible(val) {
      if (val) {
        this.form.project = this.project
      }
    },
  },

  methods: {
    async addVersion() {
      let form = new FormData()
      form.append('project', this.form.project)
      form.append('egg', this.form.egg)

      const res = await this.$Http.scrapydAddVersion(form)

      if (res.code == 0) {
        this.$message.success('上传成功')
        this.$emit('success')
        this.dialogVisible = false
      } else {
        this.$message.error(res.msg)
      }
    },

    handleChange(file, fileList) {
      this.form.egg = file.raw
    },
  },

  created() {},
}
</script>

<style lang="scss" scoped></style>
