import React from "react";
import { shallow } from "enzyme";
import CenterPlayButton from "../../../components/Atoms/ArtistMusicPlayer/CenterPlayButton";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

test("when CenterPlayButton clicked, play call", () => {
  const play = jest.fn();
  const wrapper = shallow(<CenterPlayButton play={play} buttonType="stop" />);
  const subject = wrapper.find("button");
  subject.simulate("click");
  expect(play).toHaveBeenCalled();
});
