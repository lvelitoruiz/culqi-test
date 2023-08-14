import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FooterG from "@/components/FooterG.vue";
import CommonConsts from "@/constants";

describe("The Footer", () => {
    it("Mounts properly", async () => {
  
      const wrapper = shallowMount(FooterG);
  
      expect(wrapper).toBeTruthy();
  
      expect(wrapper.text()).toContain(CommonConsts.footer.legal);
  
    });
  });