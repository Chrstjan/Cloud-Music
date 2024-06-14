import { myFetchData } from "../../Utils/apiUtils.js";

export const getTrackData = async () => {
    const trackEndpoint = `https://cloud-music-crud-api.vercel.app/tracks`;
    const data = await myFetchData(trackEndpoint);
    receivedTrackData(data);
}

const receivedTrackData = async (tracks) => {
    console.log(tracks);
}