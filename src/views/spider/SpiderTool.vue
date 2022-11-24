<template>
  <div class="">
    <ProjectSelect
      size="small"
      :value.sync="_project"
      @on-init="handleProjectSelectInit"
    />
  </div>
</template>

<script>
import ProjectSelect from '@/views/project/ProjectSelect.vue'

export default {
  name: '',

  components: { ProjectSelect },

  props: {
    project: { type: String, default: '' },
  },

  data() {
    return {}
  },

  computed: {
    _project: {
      get() {
        return this.project
      },

      set(val) {
        this.$emit('update:project', val)
        this.$emit('project-change', val)
      },
    },
  },

  methods: {
    handleProjectSelectInit(data) {
      this.$emit('on-init', data)
    },
  },

  created() {},
}
</script>

<style lang="scss" scoped></style>
