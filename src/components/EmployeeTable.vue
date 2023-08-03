 <template>
  <div>
    <table class="w-full">
      <thead>
        <tr class="h-[56px] bg-[#FAFAFA] rounded-[10px]">
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start">Nombre</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start">Nombre cargo</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start">Departamento</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start">Oficina</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-start">Cuenta</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold px-4 text-end">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr class="h-[56px] border-b border-[#F1F2F4]" v-for="employee in employeeList" :key="employee.id">
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
              <span class="material-icons !text-base">visibility</span>
            </button>
            <button
              class="w-[30px] h-[30px] bg-[#2F78EE] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons !text-base">mode_edit</span>
            </button>
            <button
              class="w-[30px] h-[30px] bg-[#E03137] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons !text-base">delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, watchEffect } from 'vue';

const props = defineProps({
  employeeList: {
    type: Array as () => any[], // Add type assertion for the prop
    required: true,
  },
});

let employees: any[];

watch(props, ()=> {
  employees = props.employeeList;
})

</script>
 
  
 