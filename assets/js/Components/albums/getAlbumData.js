import { myFetchData } from "../../Utils/apiUtils.js";

export const getAlbumData = async () => {
    const albumEndpoint = `https://cloud-music-crud-api.vercel.app/albums`;
    const data = await myFetchData(albumEndpoint);
    receivedAlbumData(data);
}

const receivedAlbumData = async (albums) => {
    console.log(albums);
}