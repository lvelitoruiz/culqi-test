import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HeaderSection from "@/components/HeaderSection.vue";
import CommonConsts from "@/constants";


describe('LoginImageComponent', () => {

  it('renders without crashing', () => {
    const wrapper = shallowMount(HeaderSection);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('displays the correct title from CommonConsts', () => {
    const wrapper = shallowMount(HeaderSection);
    const title = wrapper.find('h2').text();
    expect(title).toBe(CommonConsts.header.title);
  });

  it('displays the correct subtitle from CommonConsts', () => {
    const wrapper = shallowMount(HeaderSection);
    const subtitle = wrapper.find('p').text();
    expect(subtitle).toBe(CommonConsts.header.subtitle);
  });

});
