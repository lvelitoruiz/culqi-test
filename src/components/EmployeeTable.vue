 <template>
  <div>
    <table class="w-full">
      <thead>
        <tr class="h-[56px] bg-[#FAFAFA] rounded-[10px]">
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold">Nombre</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold">Nombre cargo</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold">Departamento</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold">Oficina</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold">Cuenta</th>
          <th class="text-xs text-[#687588] font-['Manrope'] font-bold">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr class="h-[56px]" v-for="employee in employees" :key="employee.id">
          <td class=" h-full flex flex-col justify-center px-4">
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
            <p class="text-xs text-[#111827] font-['Manrope'] font-medium">{{ employee.cuenta }}</p>
          </td>
          <td class="h-full flex items-center justify-end gap-[10px] px-4">
            <button
              class="w-[30px] h-[30px] bg-[#27A376] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons text-base">visibility</span>
            </button>
            <button
              class="w-[30px] h-[30px] bg-[#2F78EE] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons text-base">mode_edit</span>
            </button>
            <button
              class="w-[30px] h-[30px] bg-[#E03137] text-white rounded-lg flex items-center justify-center"
            >
              <span class="material-icons text-base">delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const employees = [
  {
    id: 1,
    nombre: 'Pristia Candra',
    correo: 'lincoln@unpixel.com',
    cargo: 'UI UX Designer',
    departamento: 'Team Product',
    oficina: 'Unpixel Office',
    cuenta: 'Activada'
  },
  {
    id: 2,
    nombre: 'Pristia Candra',
    correo: 'lincoln@unpixel.com',
    cargo: 'UI UX Designer',
    departamento: 'Team Product',
    oficina: 'Unpixel Office',
    cuenta: 'Activada'
  }
]
</script>
 
  
 