import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HeaderS from "@/components/HeaderS.vue";

describe("The User", () => {
  it("Mounts properly", async () => {
    const mockAuthStore = {
      user: JSON.stringify({
        nombre: "John Doe",
      }),
    };

    const wrapper = shallowMount(HeaderS, {
      global: {
        provide: {
          authStore: mockAuthStore,
        },
      },
    });

    expect(wrapper).toBeTruthy();

    expect(wrapper.text()).toContain('JD');
    expect(wrapper.text()).toContain('John Doe');

  });
});
