import { myFetchData } from "../../Utils/apiUtils.js";

export const getArtistData = async () => {
    const artistEndpoint = `https://cloud-music-crud-api.vercel.app/artists`
    const data = await myFetchData(artistEndpoint);
    receivedArtistData(data);
}

const receivedArtistData = async (artists) => {
    console.log(artists);
}