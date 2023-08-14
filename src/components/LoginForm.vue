<template>
  <div class="w-full lg:h-screen flex flex-col lg:flex-row items-center justify-center relative p-6 md:p-0">
    <div class="w-full md:w-[480px] pt-10 lg:pt-0">
      <h3 class="mb-8 text-center font-['Manrope'] text-2xl font-bold text-[#111827]">
        {{ CommonConsts.login.init }}
      </h3>
      <form>
        <div class="flex flex-col gap-[10px] w-full mb-6">
          <label class="text-[#111827] text-sm font-['Manrope'] font-medium" for="">{{ CommonConsts.login.mail }} <span
              class="text-[#E03137]">*</span></label>
          <input
            class="w-full font-['Manrope'] text-sm py-4 px-5 border border-[#E9EAEC] rounded-[10px] text-[#111827] font-medium placeholder:text-[#A0AEC0] placeholder:font-normal outline-[#0CAF60]"
            v-model="user" placeholder="Ingresa el correo electrónico" type="email" />
        </div>
        <div class="flex flex-col gap-[10px] w-full mb-6">
          <label class="text-[#111827] text-sm font-['Manrope'] font-medium" for="">{{ CommonConsts.login.password }} <span
              class="text-[#E03137]">*</span></label>
          <input
            class="w-full font-['Manrope'] text-sm py-4 px-5 border border-[#E9EAEC] rounded-[10px] text-[#111827] font-medium placeholder:text-[#A0AEC0] placeholder:font-normal outline-[#0CAF60]"
            v-model="pswd" placeholder="Ingresa la contraseña" type="password" />
        </div>
        <div v-if="hasError" class="flex items-center gap-1">
          <span class="material-icons text-lg text-[#E03137]">{{ CommonConsts.login.errorIcon }}</span>
          <p class="text-xs text-[#E03137] font-['Manrope']">{{ CommonConsts.login.error }}</p>
        </div>
        <button
          class="font-['Manrope'] font-medium my-8 bg-[#111827] text-white h-[56px] flex items-center justify-center w-full rounded-[10px]"
          @click="login">
          {{ CommonConsts.login.login }}
        </button>
        <div class="text-center">
          <p class="text-[#A0AEC0] font-['Manrope'] text-sm" v-html="CommonConsts.login.register"></p>
        </div>
      </form>
    </div>
    <footer-g />
  </div>
</template>

<script setup lang="ts">

import { useHttpApi } from '@/stores/useApiWeb';
import FooterG from './FooterG.vue';
import { ref } from 'vue';
import CommonConsts from '../constants'
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';

const store = useAuthStore();

const hasError = ref(false);

const api = useHttpApi();
let user = ref("");
let pswd = ref("");

const login = async (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  const dataObject = JSON.stringify({
    "correo": user.value,
    "password": pswd.value
  });

  const link = `${CommonConsts.API_URL}/auth/login`;


  try {
    const response = await api.createPostQuery(link, dataObject);
    hasError.value = false;
    router.push('/about');
    store.setToken(response.data.token);
    store.setUser(JSON.stringify(response.data.user));
    
  } catch (error) {
    hasError.value = true;
  }
};

</script>

<style></style>