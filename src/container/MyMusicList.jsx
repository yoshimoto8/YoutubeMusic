import React from "react";
import AmeirImg from "../images/aimer.jpeg";
import { connect } from "react-redux";
import { setPlayList } from "../actions/index";

class MyMusicList extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultMusic: [
        {
          playListImg: AmeirImg,
          playListName: "Aimer",
          musciList: musicList1
        }
      ]
    };
  }

  render() {
    const { defaultMusic } = this.state;
    return (
      <div className="main">
        {defaultMusic.map((data, index) => {
          const { playListImg, playListName } = data;
          return (
            <div
              key={index}
              className="musicPlayBox"
              onClick={() => {
                this.props.setPlayList(data.musciList);
              }}
            >
              <img src={playListImg} alt="" />
              <div>{playListName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const musicList1 = [
  {
    id: 1,
    name: "After Dark",
    artists: "Aimer",
    time: 278,
    src: "https://www.youtube.com/watch?v=hIQeXJxWMi4"
  },
  {
    id: 2,
    name: "Aimer Premier Live 2012.06.08 DIGEST",
    artists: "Aimer",
    time: 478,
    src: "https://www.youtube.com/watch?v=zxvLA7xepGA"
  },
  {
    id: 3,
    name: "Re:pray",
    artists: "Aimer",
    time: 317,
    src: "https://www.youtube.com/watch?v=cPB-ijSzEMk"
  },
  {
    id: 4,
    name: "六等星の夜",
    artists: "Aimer",
    time: 341,
    src: "https://www.youtube.com/watch?v=jgSyul7n-8M"
  },
  {
    id: 5,
    name: "Kataomoi",
    artists: "Aimer",
    time: 600,
    src: "https://www.youtube.com/watch?v=2H36K1Hi72s"
  },
  {
    id: 6,
    name: "ONE",
    artists: "Aimer",
    time: 341,
    src: "https://www.youtube.com/watch?v=GOurhX0YAPQ"
  }
];

const mapDispatchToProps = dispatch => ({
  setPlayList: defaultMusic => dispatch(setPlayList(defaultMusic))
});

export default connect(null, mapDispatchToProps)(MyMusicList);
