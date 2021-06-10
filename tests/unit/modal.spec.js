import { shallowMount } from "@vue/test-utils";
import Login from "@/components/Login";

const factory = (values = {}) => {
  return shallowMount(Login, {
    data() {
      return {
        ...values,
      };
    },
  });
};
describe("modal show test", () => {
  it("dont display modal if isShow false", () => {
    const wrapper = factory({
      isShow: false,
    });

    expect(wrapper.find(".modal").exists()).toBeFalsy();
  });

  it("display modal if isShow true", () => {
    const wrapper = factory({
      isShow: true,
    });

    expect(wrapper.find(".modal").exists()).toBeTruthy();
  });
});
