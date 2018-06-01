import { YOUTUBEAPI } from "../../ENV";
import axios from "axios";

export default function fetchYoutubeAPI(keyword) {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=15&q=${keyword}&key=${YOUTUBEAPI}`
  );
}
