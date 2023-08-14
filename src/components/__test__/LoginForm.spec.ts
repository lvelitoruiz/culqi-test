// LoginForm.spec.ts
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from "vitest";
import LoginForm from '@/components/LoginForm.vue'
import { nextTick } from 'vue'

vi.mock('@/stores/useApiWeb', () => ({
  useHttpApi: vi.fn().mockReturnValue({
    createPostQuery: vi.fn()
  })
}));

vi.mock('@/stores/authStore', () => ({
  useAuthStore: vi.fn().mockReturnValue({
    setToken: vi.fn(),
    setUser: vi.fn()
  })
}));

vi.mock('@/router', () => ({
  push: vi.fn()
}));

describe('LoginForm.vue', () => {
  it('renders without crashing', () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('calls the login method when button is clicked', async () => {
    const wrapper = mount(LoginForm);
    const mockEvent = { preventDefault: vi.fn() };
    const loginBtn = wrapper.find('button');
    await loginBtn.trigger('click.prevent', mockEvent);
  });
  
});
