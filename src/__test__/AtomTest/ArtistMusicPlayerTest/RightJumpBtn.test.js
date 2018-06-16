import React from "react";
import { shallow } from "enzyme";
import RightJumpBtn from "../../../components/Atoms/ArtistMusicPlayer/RightJumpBtn";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

test("when RightJumpBtn clicked, nextMusic call ?", () => {
  const nextMusic = jest.fn();
  const wrapper = shallow(<RightJumpBtn nextMusic={nextMusic} />);
  const subject = wrapper.find(".ArtistMusicPlayerOperationCenter-GoJumpRight");
  subject.simulate("click");
  expect(nextMusic).toHaveBeenCalled();
});
