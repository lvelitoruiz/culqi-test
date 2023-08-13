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
                  <span class="text-[#00A19B] material-icons text-[20px]">{{ CommonConsts.sidebar.employeeIcon }}</span>
                  <span class="text-[#00A19B] font-bold font-['Manrope'] text-sm">{{ CommonConsts.sidebar.employee }}</span>
                </a>
              </li>
              <li>
                <a class="py-4 flex items-center gap-2" href="">
                  <span class="text-[#A0AEC0] material-icons text-[20px]">{{ CommonConsts.sidebar.recruitmentIcon }}</span>
                  <span class="text-[#111827] font-bold font-['Manrope'] text-sm"
                    >{{ CommonConsts.sidebar.recruitment }}</span
                  >
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button
            class="h-[48px] w-full border border-[#111827] font-['Manrope'] rounded-[10px] text-sm font-bold"
            @click="closeSession"
          >
            {{ CommonConsts.sidebar.logout }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '../stores/authStore';
import CommonConsts from '@/constants';

const store = useAuthStore();


  const closeSession = () => { 
    // sessionStorage.clear();
    store.clearToken();
    router.push('/');
  }
</script>

<style>

</style>