import aButton from '@sb/components/atoms/a-button/a-button.vue'

export default {
  title: 'Components/Atoms/Button',
  component: aButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['base', 'sm'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = (args) => ({
  components: { aButton },
  setup() {
    return { args }
  },
  template: '<a-button v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false,
}

export const Outline = Template.bind({})
Outline.args = {
  outline: true,
  label: 'Button',
  disabled: false,
}
