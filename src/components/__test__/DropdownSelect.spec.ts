import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import DropdownSelect from "@/components/DropdownSelect.vue";
import CommonConsts from "@/constants";


vi.mock('@/stores/authStore', () => ({
  useAuthStore: vi.fn(() => ({
    charges: ["mockedCharge1", "mockedCharge2"]
  }))
}));

describe('DropdownSelect', () => {

  it('renders without crashing', () => {
    const wrapper = shallowMount(DropdownSelect);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('displays the default charge option from CommonConsts', () => {
    const wrapper = shallowMount(DropdownSelect);
    const defaultOption = wrapper.find('option').text();
    expect(defaultOption).toBe(CommonConsts.table.charge);
  });

  it('displays charges from the store', () => {
    const wrapper = shallowMount(DropdownSelect);
    const options = wrapper.findAll('option');
    expect(options[1].text()).toBe("mockedCharge1");
    expect(options[2].text()).toBe("mockedCharge2");
  });

  it('emits activate-cargo event with the correct value on change', async () => {
    const wrapper = shallowMount(DropdownSelect);
    await wrapper.find('select').trigger('change');
    expect(wrapper.emitted('activate-cargo')![0]).toEqual([CommonConsts.table.charge]);
  });

});
