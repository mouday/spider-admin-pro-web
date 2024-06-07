<template>
  <div>
    <el-upload
      :action="uploadUrl"
      list-type="picture-card"
      name="image"
      accept="image/*"
      :data="extraData"
      :on-preview="handlePictureCardPreview"
      :on-success="uploadSuccess"
      :file-list="_fileList"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog
      :visible.sync="dialogVisible"
      append-to-body
    >
      <img
        width="100%"
        :src="dialogImageUrl"
        alt=""
      >
    </el-dialog>
  </div>
</template>

<script>
import dataApi from '@/api/dataApi.js';

/**
 * 名片上传组件
 */
export default {
  name: '',

  props: {
    /**
    字段 { url }
     */
    fileList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  components: {},

  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: '',

      // 上传地址
      uploadUrl: process.env.VUE_APP_BASE_API + dataApi.UploadUploadImage,

      // 携带参数
      extraData: {
        // uid: this.$store.getters['user/token'],
        // type: 'annex',
      },
    };
  },

  computed: {
    _fileList() {
      return this.fileList;
    },
  },

  methods: {
    uploadSuccess(response, file, fileList) {
      console.log(response, file);
      file.url = response.data;

      this.fileList.push(file);

      // this.cover_icons.push(res.data);
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);

      let index = this.fileList.findIndex((item) => {
        return item.url == file.url;
      });

      this.fileList.splice(index, 1);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.file-list {
  .file-item {
    display: flex;
    justify-content: space-between;
  }
  a {
    color: #4568c5;
    display: block;
  }
}

// 通用样式
@mixin el-picture-card() {
  width: 64px;
  height: 40px;
}

::v-deep .el-upload--picture-card {
  @include el-picture-card;
  border-radius: 0;
  line-height: 48px;
}

::v-deep .el-upload-list--picture-card .el-upload-list__item {
  @include el-picture-card;
  border: 1px solid #eeeeee;
}

::v-deep .el-upload-list--picture-card .el-upload-list__item-thumbnail {
  object-fit: contain;
}

// ::v-deep.el-upload-list__item.is-ready {
//   display: none;
// }
</style>
