const ENDPOINT = "https://www.googleapis.com/youtube/v3/videos"
const KEY = "AIzaSyBHmeTDFPADL3uz3kHps4NjMr7N-tZj9ZA";
const chart = "mostPopular";
const results = 20;

let finalURL = `${ENDPOINT}?key=${KEY}&part=snippet,statistics&chart=${chart}&maxResults=${results}`;

export default finalURL;