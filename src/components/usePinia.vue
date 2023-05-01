<template>
  <div>{{ userStore.name }}</div>
  <button @click="edit">修改</button>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const edit = () => {
  userStore.updateName('李四')
}
</script>
