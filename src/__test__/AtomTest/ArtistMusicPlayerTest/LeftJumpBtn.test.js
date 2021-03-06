import React from "react";
import "jsdom-global/register";
import { shallow } from "enzyme";
import LeftJumpBtn from "../../../components/Atoms/ArtistMusicPlayer/LeftJumpBtn";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("when LeftJumpBtn clicked, backMusic call ?", () => {
  const backMusic = jest.fn();
  const wrapper = shallow(<LeftJumpBtn backMusic={backMusic} />);
  const subject = wrapper.find(".ArtistMusicPlayerOperationCenter-GoJumpLeft");
  subject.simulate("click");
  expect(backMusic).toHaveBeenCalled();
});
