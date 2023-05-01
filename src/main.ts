import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
// VEX
import VXETable from 'vxe-table'
import VXETablePluginAntd from 'vxe-table-plugin-antd'
import 'vxe-table-plugin-antd/dist/style.css'

import { setupAntDesignComponents } from './plugins/ant-design'
import 'ant-design-vue/dist/antd.css'
import { setupVxeTableComponents } from './plugins/vxe-table'

// 创建vue实例
const app = createApp(App)

// 挂载pinia
app.use(store)

// 注册 UI
setupAntDesignComponents(app)
// app.use(setupAntDesignComponents)
// VEX
VXETable.use(VXETablePluginAntd)
setupVxeTableComponents(app)
// app.use(setupVxeTableComponents)

// 挂载实例
app.mount('#app')
