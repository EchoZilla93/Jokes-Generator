import axios from 'axios';


const cors ='https://cors-anywhere.herokuapp.com/';

export default axios.create({
     baseURL:`${cors}https://api.chucknorris.io/jokes`
});