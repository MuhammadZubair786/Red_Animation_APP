import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {

//======================°°°°°°°°°°°°°°°°°°=========================
//                           use ref
//======================°°°°°°°°°°°°°°°°°°=========================

  const aliceSprite = useRef(null);
  const clouds = useRef(null);
  const sun = useRef(null);
  const tree = useRef(null);
  const bottle = useRef(null);

  useEffect(() => {

//======================°°°°°°°°°°°°°°°°°°=========================
//                          alice
//======================°°°°°°°°°°°°°°°°°°=========================

    var alice = aliceSprite.current.animate(
      [{ transform: "translateY(0)" }, 
      { transform: "translateY(-100%)" }],
      {
        easing: "steps(7, end)",
        duration: 500,
        iterations: Infinity,
      }
    );

    setInterval( function() {
      if (alice.playbackRate > .4) {
        alice.playbackRate -= .1;
      } 
    }, 3000);

//======================°°°°°°°°°°°°°°°°°°=========================
//                            clouds
//======================°°°°°°°°°°°°°°°°°°=========================

    var skyClouds = clouds.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-3000px, 0)" },
      ],

      {
        duration: 60000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );

//======================°°°°°°°°°°°°°°°°°°=========================
//                            Trees
//======================°°°°°°°°°°°°°°°°°°=========================

    var earthTree = tree.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-2200px, 0)" },
      ],
      {
        duration: 50000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
    
//======================°°°°°°°°°°°°°°°°°°=========================
//                            bottles
//======================°°°°°°°°°°°°°°°°°°=========================

    var earthBottle = bottle.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-3200px, 0)" },
      ],
      {
        duration: 50000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    )


    const goFaster = () => {
      alice.playbackRate += 0.1;
      earthTree.playbackRate += 0.01;
      earthBottle.playbackRate+= 0.01
    }

    window.addEventListener("click", goFaster);

  });





  return (
    <div className="container">
      <div className="sky">
        <div className="sun" ref={sun}>
          <img src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.15752-0/p280x280/122406348_355335675712536_6513236887405474853_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=k_i0uSGtM1UAX_qtMyZ&_nc_ht=scontent.fisb7-1.fna&_nc_tp=30&oh=44d6a41be67dc3eb9679410cd00ce953&oe=5FFBA0FD" />
        </div>
        <div ref={clouds}>
          <img
            className="cloud1"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud2"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud2"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud3"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud2"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
        </div>
      </div>

      <div className="earth">
        <div className="alice">
          <img
            className="alicesprite"
            ref={aliceSprite}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            alt=" "
          />
        </div>
      </div>
      <div ref={tree} className="tree">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" />
      </div>
      <div ref={bottle} className="bottle">
        <img className="bottle1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
        <img className="bottle2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
        <img className="bottle3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
      </div>
    </div>
  );
}

export default App;