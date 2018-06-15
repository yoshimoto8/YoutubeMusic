import React from "react";
import { shallow } from "enzyme";
import TabHelmet from "../../components/Atoms/TabHelmet";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<TabHelmet/> test", () => {
  it("should render TabHelmet title", () => {
    const wrapper = shallow(<TabHelmet title="アーティスト" />);
    expect(wrapper.find("title").contains("アーティスト")).toEqual(true);
    expect(wrapper.find("title").contains("アーティストゥ")).toEqual(false);
  });
});
