import React from "react";
import "jsdom-global/register";
import { mount } from "enzyme";
import LeftJumpBtn from "../../../components/Atoms/ArtistMusicPlayer/LeftJumpBtn";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("when LeftJumpBtn clicked, backMusic call ?", () => {
  const backMusic = jest.fn();
  const wrapper = mount(<LeftJumpBtn backMusic={backMusic} />);
  const GoJumpLeft = wrapper.find(
    ".ArtistMusicPlayerOperationCenter-GoJumpLeft"
  );
  GoJumpLeft.debug();
  GoJumpLeft.simulate("click");
  expect(backMusic).toBeCalledWith(1);
});
