<template>
  <div>
    <el-config-provider :locale="zhCn">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </el-config-provider>
  </div>
</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
