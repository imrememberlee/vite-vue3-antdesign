<template>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </a-config-provider>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import 'dayjs/locale/zh-cn'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
import dayjs from 'dayjs'

const locale = ref(enUS.locale)
watch(locale, (val: string) => {
  dayjs.locale(val)
})
</script>
<style scoped></style>
