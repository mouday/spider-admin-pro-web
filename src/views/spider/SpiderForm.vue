<template>
  <el-form
    :model="form"
    ref="form"
    label-width="100px"
    size="small"
    :rules="rules"
  >
    <el-form-item
      label="服务名称"
      prop="scrapyd_server_id"
      width="300px"
    >
      <SelectScrapydServer
        ref="SelectScrapydServer"
        style="width: 300px"
        :value.sync="form.scrapyd_server_id"
        :disabled="scrapydServerId !=null"
        @on-init="handleSelectScrapydServerInit"
        @change="handleSelectScrapydServerChange"
      ></SelectScrapydServer>
    </el-form-item>

    <el-form-item
      label="项目名称"
      prop="project"
      width="300px"
    >
      <ProjectSelect
        ref="ProjectSelect"
        style="width: 300px"
        :scrapydServerId="form.scrapyd_server_id"
        :value.sync="form.project"
        :disabled="project != null"
        @on-init="handleProjectSelectInit"
      />
    </el-form-item>

    <el-form-item
      label="Spider名称"
      prop="spider"
      width="300px"
    >
      <SpiderSearch
        style="width: 300px"
        ref="SpiderSearch"
        :scrapydServerId="form.scrapyd_server_id"
        :project="form.project"
        :value.sync="form.spider"
        :disabled="spider != null"
        @on-init="handleSpiderSearchInit"
      />
    </el-form-item>

    <el-form-item
      label="其他参数"
      prop="options"
    >
      <el-input
        style="width: 300px"
        type="textarea"
        rows="3"
        v-model="form.options"
        placeholder='any parameter is passed as spider args eg:{"setting": "DOWNLOAD_DELAY=2"}'
      ></el-input>
    </el-form-item>

    <el-form-item label="">
      <el-button
        size="small"
        @click="handleCancel"
        >取 消</el-button
      >
      <el-button
        type="primary"
        size="small"
        @click="submit"
        >立即执行</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import ProjectSelect from '@/components/SelectProject.vue'
import SpiderSearch from '@/views/spider/SpiderSearch.vue'
import SelectScrapydServer from '@/components/SelectScrapydServer.vue'

export default {
  name: '',

  props: {
    scrapydServerId: { type: String, default: null },
    project: { type: String, default: null },
    spider: { type: String, default: null },
    options: { type: String, default: null },
  },

  components: { ProjectSelect, SelectScrapydServer, SpiderSearch },

  data() {
    var validateOptions = (rule, value, callback) => {
      if (value) {
        try {
          JSON.parse(value)
        } catch (e) {
          return callback(new Error('参数不是json字符串'))
        }
      }
      callback()
    }

    return {
      dialogVisible: false,

      form: {
        scrapyd_server_id: '',
        project: '',
        spider: '',
        options: '',
      },

      rules: {
        scrapyd_server_id: {
          required: true,
          message: '服务器必须填写',
          trigger: 'blur',
        },

        project: {
          required: true,
          message: '项目名称必须填写',
          trigger: 'blur',
        },
        spider: {
          required: true,
          message: 'Spider名称必须填写',
          trigger: 'change',
        },
        options: {
          required: false,
          validator: validateOptions,
          trigger: 'blur',
        },
      },
    }
  },

  computed: {
  },

  watch: {
    dialogVisible(val) {
      if (val) {
      }
    },
  },

  methods: {
    handleCancel() {
      this.$emit('on-cancel')
    },

    async getData() {
      this.form.scrapyd_server_id = this.scrapydServerId
      this.form.project = this.project
      this.form.spider = this.spider
      this.form.options = this.options
    },

    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.execute()
        }
      })
    },

    async execute() {
      const res = await this.$Http.scrapydSchedule({
        scrapydServerId: this.form.scrapyd_server_id,
        project: this.form.project,
        spider: this.form.spider,
        options: this.form.options,
      });

      if (res.code == 0) {
        this.$message.success('执行成功')
        this.$emit('on-success')
      } else {
        this.$message.error(res.msg);
      }
    },

    handleSelectScrapydServerChange() {
      this.$nextTick(() => {
        this.$refs.ProjectSelect.resetData()
      })
    },

    handleSelectScrapydServerInit(data) {
      if (data.list && data.list.length > 0) {
        if (!this.form.scrapyd_server_id) {
          this.form.scrapyd_server_id = data.list[0].value
        }
      }

      this.$nextTick(() => {
        this.handleSelectScrapydServerChange()
      })
    },

    handleProjectSelectInit(data) {
      if (data && data.length > 0) {
        if (data.findIndex((item) => item.project == this.form.project) == -1) {
          this.form.project = data[0].project
        }
      } else {
        this.form.project = ''
      }

      this.$nextTick(() => {
        this.$refs.SpiderSearch.resetData()
      })
    },

    handleSpiderSearchInit(data) {
      if (!this.form.spider) {
        if (data && data.length > 0) {
          this.form.spider = data[0].spider
        }
      } else {
        if (data.findIndex((item) => item.spider == this.form.spider) == -1) {
          this.form.spider = ''
        }
      }
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
