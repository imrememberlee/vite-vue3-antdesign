<template>
  <div>登录页面</div>
  <button @click="login">登录</button>
</template>
<script setup lang="ts">
import { inject, Ref, ref } from 'vue'
import { login as userLogin } from '@/api/user'

const login = async () => {
  const LoginParams = { username: '111', password: '123' }
  const res = await userLogin(LoginParams)
  console.log(res)
}

const theme = inject<Ref<string>>('theme', ref('dark'))
console.log('theme', theme)
</script>
