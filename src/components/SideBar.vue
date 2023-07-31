<template>
  <div>
    <div
      class="h-screen hidden lg:block max-w-[280px] bg-white min-w-[280px] p-6 border-r border-[#E9EAEC]"
    >
      <div class="flex flex-col justify-between h-full">
        <div>
          <img class="mx-auto h-[36px] mb-[30px]" src="../assets/img/logo-2.svg" alt="" />
          <nav>
            <ul>
              <li>
                <a class="py-4 flex items-center gap-2" href="">
                  <span class="text-[#00A19B] material-icons text-[20px]">people_outline</span>
                  <span class="text-[#00A19B] font-bold font-['Manrope'] text-sm">Empleados</span>
                </a>
              </li>
              <li>
                <a class="py-4 flex items-center gap-2" href="">
                  <span class="text-[#A0AEC0] material-icons text-[20px]">work_outline</span>
                  <span class="text-[#111827] font-bold font-['Manrope'] text-sm"
                    >Reclutamiento</span
                  >
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button
            class="h-[48px] w-full border border-[#111827] font-['Manrope'] rounded-[10px] text-sm font-bold"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>

</style>