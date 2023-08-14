import { shallowMount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from "vitest";
import SearchInput from '@/components/SearchInput.vue';
import CommonConsts from '@/constants';

describe('SearchInput', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(SearchInput);
  });

  it('renders an input and an icon', () => {
    const input = wrapper.find('input');
    const iconSpan = wrapper.find('span.material-icons');
    
    expect(input.exists()).toBe(true);
    expect(iconSpan.exists()).toBe(true);
  });

  it('sets the correct placeholder in the input', () => {
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe(CommonConsts.searchComponent.placeholder);
  });

  it('sets the correct search icon', () => {
    const iconSpan = wrapper.find('span.material-icons');
    expect(iconSpan.text()).toBe(CommonConsts.searchComponent.searchIcon);
  });
});
