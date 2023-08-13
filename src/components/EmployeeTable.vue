 <template>
  <div>
    <table class="w-full">
      <thead>
        <tr class="h-[56px] bg-[#FAFAFA] rounded-[10px]">
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start" @click="sortingEmployees('nombre')">{{ CommonConsts.table.name }}</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start" @click="sortingEmployees('cargo')">{{ CommonConsts.table.charge }}</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start" @click="sortingEmployees('departamento')">{{ CommonConsts.table.dept }}</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start" @click="sortingEmployees('oficina')">{{ CommonConsts.table.office }}</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start" @click="sortingEmployees('estadoCuenta')">{{ CommonConsts.table.account }}</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-end">{{ CommonConsts.table.actions }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="h-[56px] border-b border-[#F1F2F4]" :class="{ ' bg-blue-200': employee.active }" v-for="employee in employeeList" :key="employee.id">
          <td class="px-4">
            <p class="text-xs text-[#111827] font-['Manrope'] font-medium">
              {{ employee.nombre }}
            </p>
            <p class="text-[10px] text-[#A0AEC0] font-['Manrope'] font-medium">
              {{ employee.correo }}
            </p>
          </td>
          <td class="h-full px-4">
            <p class="text-xs text-[#111827] font-['Manrope'] font-medium">{{ employee.cargo }}</p>
          </td>
          <td class=" h-full px-4">
            <p class="text-xs text-[#111827] font-['Manrope'] font-medium">
              {{ employee.departamento }}
            </p>
          </td>
          <td class=" h-full px-4">
            <p class="text-xs text-[#111827] font-['Manrope'] font-medium">
              {{ employee.oficina }}
            </p>
          </td>
          <td class=" h-full px-4">
            <p class="text-xs text-[#111827] font-['Manrope'] font-medium">{{ employee.estadoCuenta }}</p>
          </td>
          <td class="h-full flex items-center justify-end gap-[10px] px-4 pt-3">
            <button
              class="w-[30px] h-[30px] bg-[#27A376] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons !text-base">{{ CommonConsts.table.visibility }}</span>
            </button>
            <button
              class="w-[30px] h-[30px] bg-[#2F78EE] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons !text-base">{{ CommonConsts.table.edit }}</span>
            </button>
            <button
              class="w-[30px] h-[30px] bg-[#E03137] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons !text-base">{{ CommonConsts.table.delete }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import CommonConsts from '@/constants';

const props = defineProps({
  employeeList: {
    type: Array as () => any[], 
    required: true,
  },
});

const emit = defineEmits(['sorting-list']);

const sortingEmployees = (parameter: string) => {
  emit('sorting-list',parameter);
};

</script>
 
  
 