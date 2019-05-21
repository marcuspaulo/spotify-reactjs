import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
// import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}
    <Current>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Michaeljacksondangerous.jpg/220px-Michaeljacksondangerous.jpg"
        alt="Cover"
      />

      <div>
        <span>Time like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />{" "}
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />{" "}
        </button>
        <button>
          <img src={PlayIcon} alt="Shuffle" />{" "}
        </button>
        <button>
          <img src={ForwardIcon} alt="Shuffle" />{" "}
        </button>
        <button>
          <img src={RepeatIcon} alt="Shuffle" />{" "}
        </button>
      </Controls>

      <Time>
        <span>01:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED768" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:25</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
