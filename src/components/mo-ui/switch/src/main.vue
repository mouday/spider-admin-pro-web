<template>
  <el-switch v-model="switchValue"
    active-color="#4568c5"
    inactive-color="#C0CCDA"
    v-bind="$attrs"></el-switch>
</template>

<script>
export default {
  name: "MoSwitch",

  /**
   * 传入 0 / 1 或者 false / true
   *
   * sync: value
   * emit: change 0/1
   */
  props: ["value"],

  computed: {
    switchValue: {
      // 1 => true; 0 => false
      get() {
        // console.log(this.value);
        if (typeof this.value == "boolean") {
          return this.value;
        } else {
          return this.value == 1 ? true : false;
        }
      },

      // true => 1; false => 0
      set(value) {
        // console.log(value);
        let realValue = value ? 1 : 0;

        this.$emit("update:value", realValue);
        this.$emit("change", realValue);
      }
    }
  }
};
</script>