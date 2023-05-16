import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import store from './store'
import router from './router/index'
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

// 挂载路由
app.use(router)

// 注册 UI
setupAntDesignComponents(app)
// VEX
VXETable.use(VXETablePluginAntd)
setupVxeTableComponents(app)

// 挂载实例
app.mount('#app')
