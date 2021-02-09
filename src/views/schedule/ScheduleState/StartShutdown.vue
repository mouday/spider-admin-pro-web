<template>
  <mo-switch
    v-bind="$attrs"
    v-on="$listeners"
    active-value="running"
    active-text="开启"
    inactive-text="停止"
    inactive-value="stopped"
    @change="handleChange"
  >
  </mo-switch>
</template>

<script>
export default {
  name: '',

  props: {},

  components: {},

  data() {
    return {
      // stopped、running
      state: '',
    };
  },

  computed: {},

  methods: {
    async handleChange(val) {
      let res;

      if (val == 'stopped') {
        res = await this.$Http.scheduleShutdown();
      } else {
        res = await this.$Http.scheduleStart();
      }

      if (res.code == 0) {
        this.$msg.success('操作成功');
        this.$emit('success');
      } else {
        this.$msg.error(res.msg);
      }
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>