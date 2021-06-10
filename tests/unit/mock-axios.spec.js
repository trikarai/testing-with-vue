// var MockAdapter = require("axios-mock-adapter");
// This sets the mock adapter on the default instance
// var mock = new MockAdapter(axios);

import { shallowMount } from "@vue/test-utils";
import Login from "../../src/components/Login";
import axios from "axios";

let url = "";
let body = {};

// jest.mock("axios", () => ({
//   post: jest.fn((_url, _body) => {
//     return new Promise((resolve) => {
//       url = _url;
//       body = _body;
//       resolve(true);
//     });
//   }),
// }));

jest.mock("axios", () => ({
  post: () => Promise.resolve({ status: 200, data: { token: "xxx" } }),
}));

const factory = (values = {}) => {
  return shallowMount(Login, {
    data() {
      return {
        ...values,
      };
    },
  });
};

describe("call axios on click", () => {
  it("Calls axios", () => {
    const wrapper = factory();
    const resp = { token: "xxx" };

    wrapper.find("button").trigger("click");

    wrapper.vm.$nextTick(() => {
      // axios.post.mockResolvedValue(resp);
      // wrapper.setData({ result: resp });
      // expect(axios.post).toHaveBeenCalledTimes(1);
      expect(wrapper.vm.result).toEqual(resp);
    });

    // const formData = {
    //   email: "example@gmail.com",
    //   password: "111111",
    // };
    // const fakeData = { result: "OK", user: formData };
    // mock.onPost(`/login`, formData).reply(200, fakeData);

    // axios.post("/login").then((response) => {
    //   wrapper.vm.result = response;
    // });

    // expect(mock.history.post.length).toBe(1);
    // expect(mock.history.post[0].data).toBe(JSON.stringify(formData));
    // await expect(wrapper.vm.result).toBe(fakeData.result);
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
