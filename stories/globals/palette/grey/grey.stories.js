import grey from '@sb/globals/palette/grey/grey.vue'

export default {
  title: 'Globals/Palette/Grey',
  component: grey,
}

const Template = (args) => ({
  components: { grey },
  setup () {
    return { args }
  },
  template: '<grey v-bind="args" />',
})

export const Grey = Template.bind({})
