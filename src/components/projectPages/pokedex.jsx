import * as React from "react";
import pokeGUIMainImage from "../../resources/projects/pokeguicard.PNG";

const Pokedex = props => {
  return (
    <>
      <div style={{ fontSize: "1.5em" }}>Pokedex UWP App</div>
      <div>
        <img src={pokeGUIMainImage} alt=""></img>
      </div>
      <div style={{ fontSize: "1em" }}>Page content to come soon!</div>
      <div style={{ margin: "1em" }}>
        For now feel free to visit this project on my Github!
      </div>
      <div>
        <button
          className="githubButton"
          onClick={() => {
            window.open("https://github.com/mexvance/PokeGUI", "_blank");
          }}
        >
          PokeGui on Github
        </button>
      </div>
    </>
  );
};

export default Pokedex;
