<script setup lang="ts">
import DropdownSelect from '../components/DropdownSelect.vue'
import HeaderS from '../components/HeaderS.vue'
import SearchInput from '../components/SearchInput.vue'
import SideBar from '../components/SideBar.vue'
import EmployeeTable from '../components/EmployeeTable.vue'
import PaginationE from '../components/PaginationE.vue'
import { onMounted, ref } from 'vue'
import { useHttpApi } from '@/stores/useApiWeb';
import CommonConsts from '@/constants'

let loading = ref(true);
let page = ref(1);
let pageSize = ref(CommonConsts.PAGE_SIZE);
let employees = ref([]);

const api = useHttpApi();

const getEmployees = async () => {

  const dataObject = JSON.stringify("");

  const link = `${CommonConsts.API_URL}/empleados?limit=${pageSize.value}&page=${page.value}`;

  const bearerToken = localStorage.getItem('token') as string;

  console.log(bearerToken);

  try {
    const response = await api.createGetQuery(link, bearerToken, dataObject);
    console.log(response);
    employees.value = response.data;
    console.log(employees.value);
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(getEmployees)
</script>

<template>
  <section class="flex bg-[#F8F8F8]">
    <side-bar />
    <div class="w-full md:h-screen">
      <header-s />
      <div class="pt-8 px-6 pb-8 md:pb-0 max-h-[calc(100vh-111px)] overflow-auto">
        <div v-if="!loading" class="bg-white p-6 rounded-2xl">
          <div class="flex flex-col md:flex-row gap-5 md:items-center justify-between mb-6">
            <div>
              <h3 class="text-[#111827] font-['Manrope'] text-2xl font-bold mb-2">Empleados</h3>
              <p class="text-[#687588] font-['Manrope'] text-sm font-medium">
                Gestiona tus empleados
              </p>
            </div>
            <div class="flex items-center gap-[20px]">
              <div class="flex items-center gap-[20px] w-full md:w-fit">
                <button
                  class="h-[48px] w-full md:w-fit px-6 border text-[#111827] border-[#111827] flex items-center justify-center gap-2 rounded-[10px] text-sm font-bold"
                >
                  <span class="material-icons text-[20px]">insert_drive_file</span>
                  <span class="font-['Manrope']">Descargar</span>
                </button>
                <button
                  class="h-[48px] w-full md:w-fit text-white px-6 bg-[#111827] flex items-center justify-center gap-2 rounded-[10px] text-sm font-bold"
                >
                  <span class="material-icons text-[20px]">add</span>
                  <span class="font-['Manrope']">Nuevo</span>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <div class="flex md:items-center flex-col md:flex-row gap-5">
              <div class="w-full md:w-8/12">
                <search-input />
              </div>
              <div class="w-full md:w-4/12">
                <dropdown-select />
              </div>
            </div>
          </div>
          <div>
            <div class="overflow-auto">
              <div class="min-w-[800px]">
                <EmployeeTable />
                
              </div>
            </div>
            <div class="flex flex-col gap-5 md:flex-row items-center justify-between pt-6">
              <pagination-e />
            </div>
          </div>
        </div>
        <div v-else class="bg-white p-6 rounded-2xl">
          <div class="flex flex-col md:flex-row gap-5 md:items-center justify-between mb-6">
            <div>
              <h3 class="text-[#111827] font-['Manrope'] text-2xl font-bold mb-2">Empleados</h3>
            </div>
            <div class="flex items-center gap-[20px]">
              <div class="w-[100px] h-[34px] bg-[#F8F8F8] animate-pulse rounded-full loading"></div>
            </div>
          </div>
          <div class="mb-6">
            <div class="flex items-center gap-4 loading">
              <div class="w-full h-[34px] bg-[#F8F8F8] animate-pulse rounded-full"></div>
              <div class="w-full h-[34px] bg-[#F8F8F8] animate-pulse rounded-full"></div>
              <div class="w-full h-[34px] bg-[#F8F8F8] animate-pulse rounded-full"></div>
            </div>
          </div>
          <div>
            <div class="overflow-auto">
              <div class="min-w-[800px]">
                <div>
                  <div class="flex items-center h-[56px] bg-[#FAFAFA] rounded-[10px] loading">
                    <div class="w-2/12 h-full flex items-center px-4">
                      <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                    </div>
                    <div class="w-2/12 h-full flex items-center px-4">
                      <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                    </div>
                    <div class="w-2/12 h-full flex items-center px-4">
                      <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                    </div>
                    <div class="w-2/12 h-full flex items-center px-4">
                      <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                    </div>
                    <div class="w-2/12 h-full flex items-center px-4">
                      <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                    </div>
                    <div class="w-2/12 h-full flex items-center justify-end gap-[10px] px-4">
                      <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div class="overflow-auto max-h-[calc(100vh-499px)]">
                  <div>
                    <div class="flex items-center h-[56px] border-b border-[#F1F2F4] loading">
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center justify-end gap-[10px] px-4">
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center h-[56px] border-b border-[#F1F2F4] loading">
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center justify-end gap-[10px] px-4">
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center h-[56px] border-b border-[#F1F2F4] loading">
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center px-4">
                        <div class="w-full h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                      <div class="w-2/12 h-full flex items-center justify-end gap-[10px] px-4">
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                        <div class="w-[20px] h-[20px] bg-[#F1F2F4] animate-pulse rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>