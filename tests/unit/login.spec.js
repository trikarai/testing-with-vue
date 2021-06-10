import { shallowMount } from "@vue/test-utils";
import Login from "../../src/components/Login";

const factory = (values = {}) => {
  return shallowMount(Login, {
    data() {
      return {
        ...values,
      };
    },
  });
};

describe("Foo", () => {
  it("renders a welcome message", () => {
    const wrapper = factory();

    expect(wrapper.find(".message").text()).toEqual(
      "Welcome to the Vue.js cookbook"
    );
  });

  it("renders an error when username is less than 7 characters", () => {
    const wrapper = factory({ username: "" });

    expect(wrapper.find(".error").exists()).toBeTruthy();
  });

  it("renders an error when username is whitespace", () => {
    const wrapper = factory({ username: " ".repeat(7) });

    expect(wrapper.find(".error").exists()).toBeTruthy();
  });

  it("does not render an error when username is 7 characters or more", () => {
    const wrapper = factory({ username: "Lachlan" });

    expect(wrapper.find(".error").exists()).toBeFalsy();
  });

  it("button click sasasa", () => {
    const wrapper = factory();

    const button = wrapper.find("button");

    button.trigger("click");

    expect(wrapper.vm.username).toBe("");
  });
});

// describe("username", () => {
//   it("render messaage and respon", () => {
//     const wrapper = shallowMount(Username, {
//       data() {
//         return {
//           message: "Hello World",
//           username: "",
//         };
//       },
//     });
//     // see if message rendered
//     expect(wrapper.find(".message").text()).toEqual("Hello World");
//     // assert the error if rendered
//     expect(wrapper.find(".error").exists()).toBeTruthy();
//     // update   the username and assert error is no longer rendered
//     expect(wrapper.find(".error").exists()).toBeFalsy();
//   });
// });
