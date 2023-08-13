<template>
  <div class="w-full lg:h-screen overflow-hidden">
    <div class="w-full" style="height: calc(100% - 304px);">
      <img
        class="w-full h-full object-cover hidden lg:block"
        src="../assets/img/login.png"
        alt=""
      />
    </div>
    <div
      class="bg-[#111827] border-t-[5px] border-[#27A376] p-6 md:px-[50px] md:pt-[50px] md:pb-[80px]"
    >
      <img class="h-[36px]" src="../assets/img/logo.svg" alt="" />
      <h2
        class="text-3xl md:text-5xl text-white font-['Manrope'] font-bold tracking-[-0.5px] md:leading-[57.6px] py-6"
      >
        {{ CommonConsts.header.title }}
      </h2>
      <p class="text-white md:text-lg font-['Manrope']">
        {{ CommonConsts.header.subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommonConsts from '@/constants';
</script>

<style>
</style>