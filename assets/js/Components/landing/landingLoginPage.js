import { clearContainer } from "../other/clearContainer.js";
import { buildLandingPage } from "./landingPage.js";

const app = document.getElementById("app");

export const buildLandingLoginView = () => {
  clearContainer(app);

  let landingView = `
    <div class="landing-login">
        <header class="landing-header">
            <img src="./assets/img/svg/Cloud Music Icon.svg" alt="Cloud Music Logo" />
            <h2>Cloud Music</h2>
        </header>

        <span class="about-text">
            <header>
                <hgroup>
                    <h3>Hear Music that you love</h3>
                    <h3>Discover new artists</h3>
                </hgroup>
            </header>
        </span>

        <span class="btn-container">
            <button id="create-account">Create an account</button>
            <button id="login-account">Login</button>
            <button id="anonymous-account">Continue anonymously</button>
        </span>
    </div>`;

  app.innerHTML += landingView;

  const anonBtn = document.getElementById("anonymous-account");
  anonBtn.addEventListener("click", () => {
    buildLandingPage();
  })
};
