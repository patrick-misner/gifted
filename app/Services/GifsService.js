import { ProxyState } from "../AppState.js";
import { Gif } from "../Models/Gif.js";
import { Pop } from '../Utils/Pop.js'
const GifApi = axios.create( {
  baseURL: 'https://api.giphy.com/v1/gifs',

  timeout: 5000

})


// api.giphy.com/v1/gifs/search?api_key=me2VACqCRakvNe6WmhhrkQu3dz8iEl6r&q=emma+stone&limit=25&offset=0&rating=g&lang=en
// api.giphy.com/v1/gifs/search?api_key=me2VACqCRakvNe6WmhhrkQu3dz8iEl6r&q=emma+stone&limit=25&offset=0&rating=g&lang=en

let obj = {
  api_key: 'me2VACqCRakvNe6WmhhrkQu3dz8iEl6r',
  q: 'search?api_key=me2VACqCRakvNe6WmhhrkQu3dz8iEl6r&q=' + 'emma+stone',
  rating: "g"
}

class GifsService {
  constructor() {

  }
  async getGif(search) {
    let term = search.replace(' ', '+')
    let query = 'search?api_key=me2VACqCRakvNe6WmhhrkQu3dz8iEl6r&q=' + search;
    console.log(search);

    try {
      const res = await GifApi.get(query + '&limit=8&offset=0&rating=g&lang=en');
      console.log('heres your list of gifs', res.data.data);
      ProxyState.gifs = res.data.data.map(g => new Gif(g));
      console.log('px state',ProxyState.gifs); 
      

    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error);

    }
  }
}

export const gifsService = new GifsService()