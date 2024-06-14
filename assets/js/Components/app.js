import { buildLandingLoginView } from "./landing/landingLoginPage.js";
import { getArtistData } from "./artist/getArtistData.js";
import { getTrackData } from "./tracks/getTrackData.js";
import { getAlbumData } from "./albums/getAlbumData.js";

export const initPage = () => {
  buildLandingLoginView();
  getArtistData();
  getTrackData();
  getAlbumData();
};
