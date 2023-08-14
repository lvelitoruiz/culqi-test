import { VueWrapper, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from "vitest";
import PaginationE from '@/components/PaginationE.vue'  // adjust the import path if needed

describe('PaginationE', () => {
    let wrapper: VueWrapper<any>;
  
    beforeEach(() => {
      // Basic props for the component
      const propsData = {
        page: 1,
        perPage: 10,
        pages: 5,
        total: 50
      };
      wrapper = shallowMount(PaginationE, { propsData });
    });
  
    it('disables the previous button on the first page', () => {
      const prevButton = wrapper.find('button:nth-child(1)');
      expect(prevButton.attributes('disabled')).toBe("");
    });
  
    it('disables the next button on the last page', async () => {
      await wrapper.setProps({ page: 5 });
      const nextButton = wrapper.find('button:last-child');
      expect(nextButton.attributes('disabled')).toBe("");
    });
  
    it('emits custom-event with correct page number when a pagination number is clicked', async () => {
      const pageButton = wrapper.findAll('button')[2]; // e.g., selects the third button which is for page 2
      await pageButton.trigger('click');
      expect(wrapper.emitted()['custom-event'][0]).toEqual([2]);
    });
  
    it('emits new-limit event with new limit when select dropdown changes', async () => {
      const select = wrapper.find('select');
      await select.setValue('20');
      await select.trigger('change');
      expect(wrapper.emitted()['new-limit'][0]).toEqual([20]);
    });
  
    it('handles previous button correctly', async () => {
      await wrapper.setProps({ page: 2 });
      const prevButton = wrapper.find('button:nth-child(1)');
      await prevButton.trigger('click');
      expect(wrapper.emitted()['custom-event'][0]).toEqual([1]);
    });
  
    it('handles next button correctly', async () => {
      const nextButton = wrapper.find('button:last-child');
      await nextButton.trigger('click');
      expect(wrapper.emitted()['custom-event'][0]).toEqual([2]);
    });
  });