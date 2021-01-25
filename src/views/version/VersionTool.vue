<template>
  <div class="">
      <ProjectAdd @success="$emit('success')" :project="project"/>
  </div>
</template>

<script>
import ProjectAdd from '@/views/project/ProjectAdd.vue';

export default {
  name: '',

  props: [],

  components: {
    ProjectAdd,
  },

  data() {
    return {
      project: ''
    };
  },

  computed: {},

  methods: {
    
  },

  created() {
    this.project = this.$route.params.project;
    
  },
};
</script>

<style lang="scss" scoped>
</style>