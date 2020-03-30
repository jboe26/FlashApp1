import axios from 'axios';
const KEY = 'AIzaSyAUBKBi3a8_o51_qE-yiRbj_RexsYRQElA';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/vs/',
    parama: {
        part: 'snippet',
        maxResults: 7,
        key: KEY
    }
})