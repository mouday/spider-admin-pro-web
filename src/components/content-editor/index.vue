<template>
  <div id="ck-editer">
    <ckeditor :editor="editor"
      @ready="onReady"
      v-model="editorData"
      :config="editorConfig">
    </ckeditor>
  </div>
</template>

<script>
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn";
import MyUploadAdapter from "./MyUploadAdapter.js";

export default {
  components: {
    ckeditor: CKEditor.component,
  },

  props: {
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      //   editor: ClassicEditor,
      editor: DecoupledEditor,
      editorConfig: {
        // The configuration of the editor.
        language: "zh-cn",
        // ckfinder: {
        //   // 后端处理上传逻辑返回json数据, 包括uploaded 上传的字节数 和url两个字段
        //   uploadUrl: process.env.VUE_APP_BASE_URL + `/upload`
        // }
      },
    };
  },

  computed: {
    editorData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },

  methods: {
    onReady(editor) {
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );

      // 自定义上传图片插件
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
      };
    },
  },
};
</script>

<style lang="scss">
/* 全局修改生效 */
#ck-editer {
  .ck-editor__editable_inline {
    font-size: 15px;

    p {
      margin: 0;
      line-height: 2;
    }
    min-height: 400px;
    border: 1px solid #ccc !important;
  }
}
</style>
