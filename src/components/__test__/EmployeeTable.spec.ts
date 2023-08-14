import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from "vitest";
import EmployeeTable from '@/components/EmployeeTable.vue';
import CommonConsts from '@/constants';

describe('EmployeeTable', () => {
  let wrapper: VueWrapper<any>;
  const mockEmployees = [
    {
      id: 1,
      active: true,
      nombre: 'John Doe',
      correo: 'john@example.com',
      cargo: 'Manager',
      departamento: 'HR',
      oficina: 'Main Office',
      estadoCuenta: 'Active',
    },
    {
      id: 2,
      active: false,
      nombre: 'Jane Smith',
      correo: 'jane@example.com',
      cargo: 'Engineer',
      departamento: 'IT',
      oficina: 'Branch Office',
      estadoCuenta: 'Inactive',
    },
  ];

  beforeEach(() => {
    wrapper = mount(EmployeeTable, {
      props: {
        employeeList: mockEmployees,
      },
    });
  });

  it('renders employee details correctly', () => {
    expect(wrapper.findAll('tbody > tr').length).toBe(2);
    expect(wrapper.find('tbody > tr:nth-child(1) td:nth-child(1) p').text()).toBe('John Doe');
  });

  it('sets the correct text for column headers', () => {
    expect(wrapper.find('thead > tr > th:nth-child(1)').text()).toBe(CommonConsts.table.name);
  });

  it('sets the correct background color for active employees', () => {
    expect(wrapper.find('tbody > tr:nth-child(1)').classes()).toContain('bg-blue-200');
  });

  it('emits the sorting-list event with correct parameter on header click', async () => {
    await wrapper.find('thead > tr > th:nth-child(1)').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('sorting-list');
    expect(wrapper.emitted('sorting-list')![0]).toEqual(['nombre']);
  });

  it('renders correct action buttons for each employee', () => {
    const firstRowButtons = wrapper.findAll('tbody > tr:nth-child(1) td:last-child button');
    expect(firstRowButtons[0].find('span.material-icons').text()).toBe(CommonConsts.table.visibility);
  });
});
