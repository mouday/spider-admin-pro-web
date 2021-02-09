<template>
  <mo-switch
    v-bind="$attrs"
    v-on="$listeners"
    active-value="running"
    active-text="继续"
    inactive-text="暂停"
    inactive-value="paused"
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
      // running、paused
      state: '',
    };
  },

  computed: {},

  methods: {
    async handleChange(val) {
      let res;

      if (val == 'paused') {
        res = await this.$Http.schedulePause();
      } else {
        res = await this.$Http.scheduleResume();
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