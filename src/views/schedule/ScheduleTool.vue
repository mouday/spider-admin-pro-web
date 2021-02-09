<template>
  <div style="display: flex;">
    <ScheduleAdd @success="handleSuccess" />

    <ScheduleRemoveAllJob
      style="margin-left:20px"
      @success="handleSuccess"
    />

    <ScheduleState
      style="margin-left:20px"
      @success="handleSuccess"
    />

  </div>
</template>

<script>
import ScheduleAdd from './ScheduleAdd.vue';
import ScheduleState from './ScheduleState';
import ScheduleRemoveAllJob from './ScheduleRemoveAllJob.vue';

export default {
  name: '',

  props: [],

  components: {
    ScheduleAdd,
    ScheduleState,
    ScheduleRemoveAllJob,
  },

  data() {
    return {};
  },

  computed: {},

  methods: {
    handleSuccess() {
      this.$emit('success');
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>