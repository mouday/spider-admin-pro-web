<template>
  <div class="">
      <ScheduleAdd @success="$emit('success')"/>
      
      <ScheduleState style="margin-left:20px" @success="$emit('success')"/>
      
      <ScheduleRemoveAllJob style="margin-left:20px" @success="$emit('success')"/>
  </div>
</template>

<script>
import ScheduleAdd from './ScheduleAdd.vue';
import ScheduleState from './ScheduleState.vue';
import ScheduleRemoveAllJob from './ScheduleRemoveAllJob.vue';

export default {
  name: '',

  props: [],

  components: {
    ScheduleAdd,
    ScheduleState,
    ScheduleRemoveAllJob
  },

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>