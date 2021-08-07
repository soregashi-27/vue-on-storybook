import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large']
      }
    },
    backgroundColor: {
      control: 'color'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button v-bind="$props" />`
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  secondary: false,
  label: 'プライマリーボタン'
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  secondary: true,
  label: 'セカンダリーボタン'
}

// vue-docgen-apiによってvue fileからwebpack経由でcomponentsのmeta dataをcomponent内に出力していることの確認
// console.log(JSON.stringify(Button.__docgenInfo, null, 2));
