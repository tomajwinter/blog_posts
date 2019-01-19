import React from "react";
import { mount } from "enzyme";
import UserAPI from "../../api/UserAPI";
import UserDetails from "./UserDetails";

const mockedApiRequest = jest.fn(() =>
  Promise.resolve({
    name: "Username"
  })
);

const props = {
  userId: "1"
};

afterEach(() => {
  jest.clearAllMocks();
});

it("fetches from external API successfully", async () => {
  UserAPI.getDataForUser = mockedApiRequest;
  const wrapper = mount(<UserDetails {...props} />);
  expect(mockedApiRequest).toBeCalledTimes(1);
  expect(mockedApiRequest).toBeCalledWith("1");
  await mockedApiRequest;
  expect(
    wrapper
      .find("span")
      .last()
      .text()
  ).toEqual("Hello Username!");
});
