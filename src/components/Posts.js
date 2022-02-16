import React from "react";

import fushigi from "../images/fushigi.jpg";
import crystal from "../images/crystal.jpg";
import cube from '../images/cube.jpg';

const Posts = [
  {
    name: "Fushigi Shojo - Chiemi Manabe",
    text: (
      <span>
        Harry Hosono&apos;s quirky production shines through in this romp
        through space with the Mystery Girl idol Chiemi Manabe.
      </span>
    ),
    image: fushigi,
    alt: 'Fushigi Shojo',
    id: 1,
  },
  {
    name: "So Crystal - Akiko Mizuhara",
    text: (
      <span>
        Masatoshi Nishimura of Friend of Earth joins Akiko Mizuhara for an
        underrated banger of a synth/city pop album.
      </span>
    ),
    image: crystal,
    alt: 'So Crystal',
    id: 2,
  },
  {
    name: "Psychotic Cube - Vizion",
    text: (
      <span>
        Infectious basslines and ear wormingly catchy choruses are offered on
        this very funky album from Vizion.
      </span>
    ),
    image: cube,
    alt: 'Psychotic Cube',
    id: 3,
  },
];

export default Posts;
