<template>
  <div class="flex items-center">
    <button :disabled="firstPage" @click="previous"
      class="mr-6 w-[32px] h-[32px] border border-[#F1F2F4] flex items-center justify-center rounded-lg text-[#111827] disabled:text-[#A0AEC0]">
      <span class="material-icons">{{ CommonConsts.pagination.prev }}</span>
    </button>
    <button v-for="n in numberOfPages" :disabled="n === page"
      class="font-['Manrope'] w-[32px] h-[32px] flex items-center justify-center rounded-lg disabled:bg-[#F8F8F8]"
      @click="sendNewPage(n)">
      <span>{{ n }}</span>
    </button>
    <button :disabled="lastPage" @click="next"
      class="ml-6 w-[32px] h-[32px] border border-[#F1F2F4] flex items-center justify-center rounded-lg text-[#111827] disabled:text-[#A0AEC0]">
      <span class="material-icons">{{ CommonConsts.pagination.next }}</span>
    </button>
  </div>
  <div class="flex items-center gap-4">
    <p class="text-[#687588] text-xs font-['Manrope']" v-html="recordsText"></p>
    <select
      class="outline-none font-['Manrope'] h-[32px] border border-[#E9EAEC] rounded-[10px] px-[10px] text-sm font-medium text-[#111827]"
      name="limit" id="limit" v-model="selectedValue" @change="handleSelectChange">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
  
<script setup lang="ts">
import CommonConsts from '@/constants';
import { computed, ref } from 'vue';

const props = defineProps({
  page: Number,
  perPage: Number,
  pages: Number,
  total: Number,
})

let numberOfPages = props.pages;
let firstPage = computed( () => props.page !== undefined && props.page <= 1 );
let lastPage = computed( () => props.page !== undefined && props.pages !== undefined && props.page >= props.pages );

const selectedValue = ref(props.perPage?.toString() || '10');

const recordsText = computed(() => {
  return CommonConsts.pagination.control(props.perPage?.toString() || "", props.total?.toString() || "");
});

const options = [
  { value: 10, text: '10' },
  { value: 20, text: '20' },
  { value: 30, text: '30' }
];

const handleSelectChange = () => {
  sendNewOffset(parseInt(selectedValue.value));
}

const previous = () => {
  if(props.page!== undefined && props.page > 1) {
    sendNewPage(props.page - 1);
  }
}

const next = () => {
  if(props.page!== undefined && props.pages !== undefined && props.page < props.pages) {
    sendNewPage(props.page + 1);
  }
}

const emit = defineEmits(['custom-event','new-limit']);

const sendNewPage = (numberPage: number) => {
  emit('custom-event', numberPage);
};

const sendNewOffset = (resultsPer: number) => {
  emit('new-limit', resultsPer);
};

</script>
  
<style></style>