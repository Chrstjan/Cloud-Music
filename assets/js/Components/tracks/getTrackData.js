import { myFetchData } from "../../Utils/apiUtils.js";
import { receivedTrackData } from "./receivedTrackData.js";

export const getTrackData = async () => {
  const trackEndpoint = `https://cloud-music-crud-api.vercel.app/tracks`;
  const data = await myFetchData(trackEndpoint);
  receivedTrackData(data);
};
