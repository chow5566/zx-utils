<script setup>
  import logoPath from '~/assets/logo/logo.svg'
</script>

<template>
  <div>
    <header class="h-[50px] border-b border-gray-200 flex items-center justify-between px-4">
      <RouterLink to="/">
        <a href="#" class="flex items-center">
          <img :src="logoPath" class="h-[30px]">
          <div class="ml-[10px]">
            <div class="text-bold">智心内部测试工具</div>
            <div class="text-[12px] text-gray-500">仅供内部测试使用，请勿外传</div>
          </div>
        </a>
      </RouterLink>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
