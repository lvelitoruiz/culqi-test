<template>
  <select
    class="outline-none font-['Manrope'] h-[54px] border border-[#E9EAEC] rounded-[10px] px-[20px] w-full text-sm font-medium text-[#111827]"
    name="" id="" v-model="selectedValueCarriers" @change="changedValue">
    <option :value="CommonConsts.table.charge">{{ CommonConsts.table.charge }}</option>
    <option v-for="charge in charges" :key="charge" :value="charge">
      {{ charge }}
    </option>
  </select>
</template>
  
<script setup lang="ts">
import CommonConsts from '@/constants';
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';
import { nextTick } from 'vue';

const store = useAuthStore();

const emit = defineEmits(['activate-cargo']);

const charges = store.charges;

const selectedValueCarriers = ref(CommonConsts.table.charge);

const changedValue = () => {
  nextTick(() => {
    emit('activate-cargo',selectedValueCarriers.value);
  });
}

</script>
  
<style></style>