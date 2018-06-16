import React from "react";
import "jsdom-global/register";
import { shallow } from "enzyme";
import LoopBtn from "../../../components/Atoms/ArtistMusicPlayer/LoopBtn";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("when LeftJumpBtn clicked, backMusic call ?", () => {
  const toggleLoop = jest.fn();
  const wrapper = shallow(<LoopBtn toggleLoop={toggleLoop} />);
  const subject = wrapper.find(".ArtistMusicPlayerOperationCenter-loop");
  subject.simulate("click");
  expect(toggleLoop).toHaveBeenCalled();
});
