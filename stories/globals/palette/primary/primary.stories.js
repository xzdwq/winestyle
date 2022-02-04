import primary from '@sb/globals/palette/primary/primary.vue'

export default {
  title: 'Globals/Palette/Primary',
  component: primary,
}

const Template = (args) => ({
  components: { primary },
  setup() {
    return { args }
  },
  template: '<primary v-bind="args" />',
})

export const Primary = Template.bind({})
