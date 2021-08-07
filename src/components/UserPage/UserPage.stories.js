import UserPage from './UserPage.vue'

export default {
  title: 'UserPage',
  component: UserPage
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserPage },
  template: `<UserPage />`
})

export const Default = Template.bind({})
Default.args = {}
