import axios from 'axios';
export default axios.create({
    baseURL:'https:///www.googleapis.com/youtube/v3 '
    params: {
        parts:'snippet',
        maxResults:10,
        key:'AIzaSyCTCP10Ln4tJgx1VjvgDHZhPTQok6cC2pE'
        
    }

})