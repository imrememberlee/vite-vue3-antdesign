/**
 * 手动引入组件注册
 */
import {
  Alert as AAlert,
  Avatar as AAvatar,
  Breadcrumb as ABreadcrumb,
  Button as AButton,
  Card as ACard,
  Col as ACol,
  DatePicker as ADatePicker,
  Divider as ADivider,
  Dropdown as ADropdown,
  Form as AForm,
  Input as AInput,
  Layout as ALayout,
  Menu as AMenu,
  Popconfirm as APopconfirm,
  Row as ARow,
  Select as ASelect,
  Space as ASpace,
  Spin as ASpin,
  Table as ATable,
  ConfigProvider as AConfigProvider,
  TimePicker as ATimePicker
} from 'ant-design-vue'

import type { App } from 'vue'

// import Icon from './components/Icon/index.vue'
// import Modal from './components/Modal/index.vue'
// import Table from './components/Table/index.vue'
// import TableFilter from './components/TableFilter/index.vue'
// import Upload from './components/Upload/index.vue'

export function setupAntDesignComponents(app: App<Element>) {
  // app.component('Icon', Icon)
  // app.component('Modal', Modal)
  // app.component('Table', Table)
  // app.component('TableFilter', TableFilter)
  // app.component('Upload', Upload)

  app
    .use(AAlert)
    .use(AAvatar)
    .use(ABreadcrumb)
    .use(AButton)
    .use(ACard)
    .use(ACol)
    .use(ADatePicker)
    .use(ADivider)
    .use(ADropdown)
    .use(AForm)
    .use(AInput)
    .use(ALayout)
    .use(AMenu)
    .use(APopconfirm)
    .use(ARow)
    .use(ASelect)
    .use(ASpace)
    .use(ASpin)
    .use(ATable)
    .use(AConfigProvider)
    .use(ATimePicker)
}
