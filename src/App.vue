<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <a-radio-group v-model:value="locale">
    <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
    <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
  </a-radio-group>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <HelloWorld msg="Vite + Vue" />
    <usePinia />
    <VxeTable />
    <a-popconfirm title="Question?">
      <a href="#">Click to confirm</a>
    </a-popconfirm>
  </a-config-provider>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import HelloWorld from './components/HelloWorld.vue'
import usePinia from './components/usePinia.vue'
import VxeTable from './components/VxeTable.vue'
import 'dayjs/locale/zh-cn'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
import dayjs, { Dayjs } from 'dayjs'
// dayjs.locale('zh-cn')

const locale = ref(enUS.locale)
watch(locale, (val: string) => {
  dayjs.locale(val)
});
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
