import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import SideBar from "@/components/SideBar.vue";
import CommonConsts from "@/constants";

describe("Sidebar", () => {
  it("calls clearToken on logout", async () => {
    const mockClearToken = vi.fn();

    const wrapper = shallowMount(SideBar, {
      global: {
        provide: {
          authStore: {
            use: () => ({ clearToken: mockClearToken }),
          },
        },
      },
    });

    expect(wrapper).toBeTruthy();

    expect(wrapper.text()).toContain(CommonConsts.sidebar.logout);
  });
});
