import blue from '@sb/globals/palette/blue/blue.vue'

export default {
  title: 'Globals/Palette/Blue',
  component: blue,
}

const Template = (args) => ({
  components: { blue },
  setup () {
    return { args }
  },
  template: '<blue v-bind="args" />',
})

export const Blue = Template.bind({})
