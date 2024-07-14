<template>
  <div class="">
      <ProjectAdd @success="$emit('success')"/>
  </div>
</template>

<script>
import ProjectAdd from './ProjectAdd.vue';

export default {
  name: '',

  props: [],

  components: {
    ProjectAdd,
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