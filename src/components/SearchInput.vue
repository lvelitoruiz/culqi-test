<template>
  <div class="h-[54px] border border-[#E9EAEC] rounded-[10px] px-[20px] flex items-center justify-between">
    <input
      class="font-['Manrope'] w-full text-[#111827] outline-none text-sm font-medium placeholder:font-normal placeholder:text-[#A0AEC0]"
      type="text" :placeholder="CommonConsts.searchComponent.placeholder" />
    <span class="material-icons text-[#111827] text-[20px] ml-2">{{ CommonConsts.searchComponent.searchIcon }}</span>
  </div>
</template>
  
<script setup lang="ts">
import CommonConsts from '@/constants';

</script>
  
<style></style>