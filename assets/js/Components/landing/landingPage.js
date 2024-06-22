import { clearContainer } from "../other/clearContainer.js";
import { buildLandingLoginView } from "./landingLoginPage.js";

const app = document.getElementById("app");
const header = document.querySelector(".main-header");
const footer = document.querySelector(".main-footer");

export const buildLandingPage = async (tracks) => {
  console.log(tracks);
  clearContainer(app);
  header.classList.remove("hide-navigation");
  footer.classList.remove("hide-navigation");

  tracks.map((track) => {
    let tracks = `
        <span class="hit-songs-container">
          <figure class="track-figure">
            <img src="${track.image}"/>
            <header>
                <hgroup>
                    <h4>${track.title}</h4>
                    <h4>${track.artist.name}</h4>
                </hgroup>
            </header>
          </figure>
        </span>`;

    app.innerHTML += tracks;
  });
};
