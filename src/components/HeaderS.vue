<template>
  <header class="py-6 px-8 border-b border-[#E9EAEC] bg-white">
    <div class="flex items-center justify-end gap-2">
      <div
        class="bg-[#EB6F25] h-[32px] w-[32px] flex items-center justify-center text-white font-['Manrope'] rounded-full">
        <span class="text-sm font-bold uppercase">{{ brev }}</span>
      </div>
      <p class="text-xs text-[#111827] font-bold font-['Manrope']">{{ user.nombre }}</p>
    </div>
  </header>
</template>
  
<script setup lang="ts">

import { inject } from 'vue';
import { useAuthStore } from '../stores/authStore';

interface AuthStoreType {
  user: string;
}

// const authStore = useAuthStore();

const injectedAuthStore: AuthStoreType | null = inject('authStore',null);

const authStore = injectedAuthStore ? injectedAuthStore : useAuthStore();

let brev: string;

const getFirstLetters = (input: string): string => {
  const words = input.split(' ');
  const firstLetters = words.map(word => word.charAt(0));
  return firstLetters.join('');
}

let user = JSON.parse(authStore.user);

if(user.nombre !== null && user.nombre!== undefined) {
  brev = getFirstLetters(user.nombre);
}



</script>
  
<style></style>