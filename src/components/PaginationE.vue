<template>
  <div class="flex items-center">
    <button
      disabled
      class="mr-6 w-[32px] h-[32px] border border-[#F1F2F4] flex items-center justify-center rounded-lg text-[#111827] disabled:text-[#A0AEC0]"
    >
      <span class="material-icons">chevron_left</span>
    </button>
    <button
      disabled
      class="font-['Manrope'] w-[32px] h-[32px] flex items-center justify-center rounded-lg disabled:bg-[#F8F8F8]"
    >
      <span>1</span>
    </button>
    <button class="font-['Manrope'] w-[32px] h-[32px] flex items-center justify-center rounded-lg">
      <span>2</span>
    </button>
    <button class="font-['Manrope'] w-[32px] h-[32px] flex items-center justify-center rounded-lg">
      <span>3</span>
    </button>
    <button class="font-['Manrope'] w-[32px] h-[32px] flex items-center justify-center rounded-lg">
      <span>...</span>
    </button>
    <button class="font-['Manrope'] w-[32px] h-[32px] flex items-center justify-center rounded-lg">
      <span>10</span>
    </button>
    <button
      class="ml-6 w-[32px] h-[32px] border border-[#F1F2F4] flex items-center justify-center rounded-lg text-[#111827] disabled:text-[#A0AEC0]"
    >
      <span class="material-icons">navigate_next</span>
    </button>
  </div>
  <div class="flex items-center gap-4">
    <p class="text-[#687588] text-xs font-['Manrope']">Mostrando 1 a 8 de 50 registros</p>
    <select
      class="outline-none font-['Manrope'] h-[32px] border border-[#E9EAEC] rounded-[10px] px-[10px] text-sm font-medium text-[#111827]"
      name=""
      id=""
    >
      <option value="">Mostrar 10</option>
      <option value="">Mostrar 20</option>
      <option value="">Mostrar 30</option>
    </select>
  </div>
</template>
  
  <script setup lang="ts">
</script>
  
  <style>
</style>