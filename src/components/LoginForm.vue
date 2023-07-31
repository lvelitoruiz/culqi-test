<template>
  <div
    class="w-full lg:h-screen flex flex-col lg:flex-row items-center justify-center relative p-6 md:p-0"
  >
    <div class="w-full md:w-[480px] pt-10 lg:pt-0">
      <h3 class="mb-8 text-center font-['Manrope'] text-2xl font-bold text-[#111827]">
        Inicia sesión
      </h3>
      <form>
        <div class="flex flex-col gap-[10px] w-full mb-6">
          <label class="text-[#111827] text-sm font-['Manrope'] font-medium" for=""
            >Correo electrónico <span class="text-[#E03137]">*</span></label
          >
          <input
            class="w-full font-['Manrope'] text-sm py-4 px-5 border border-[#E9EAEC] rounded-[10px] text-[#111827] font-medium placeholder:text-[#A0AEC0] placeholder:font-normal outline-[#0CAF60]"
            placeholder="Ingresa el correo electrónico"
            type="email"
          />
        </div>
        <div class="flex flex-col gap-[10px] w-full mb-6">
          <label class="text-[#111827] text-sm font-['Manrope'] font-medium" for=""
            >Contraseña <span class="text-[#E03137]">*</span></label
          >
          <input
            class="w-full font-['Manrope'] text-sm py-4 px-5 border border-[#E9EAEC] rounded-[10px] text-[#111827] font-medium placeholder:text-[#A0AEC0] placeholder:font-normal outline-[#0CAF60]"
            placeholder="Ingresa la contraseña"
            type="password"
          />
        </div>
        <div class="flex items-center gap-1">
          <span class="material-icons text-lg text-[#E03137]">error_outline</span>
          <p class="text-xs text-[#E03137] font-['Manrope']">Correo o contraseña incorrectos</p>
        </div>
        <button
          class="font-['Manrope'] font-medium my-8 bg-[#111827] text-white h-[56px] flex items-center justify-center w-full rounded-[10px]"
        >
          Iniciar sesión
        </button>
        <div class="text-center">
          <p class="text-[#A0AEC0] font-['Manrope'] text-sm">
            ¿Eres nuevo aquí? <a href="" class="text-[#27A376]">Crea una cuenta</a>
          </p>
        </div>
      </form>
    </div>
    <footer-g />
  </div>
</template>

<script setup lang="ts">

import FooterG from './FooterG.vue';

</script>

<style>
</style>