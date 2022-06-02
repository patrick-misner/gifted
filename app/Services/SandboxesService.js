import { ProxyState } from "../AppState.js";
import { Gif } from "../Models/Gif.js";


const SandApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 10000
})

class SandboxesService {
  constructor() {

  }
  async getGifts() {
   const res = await SandApi.get();
   console.log('Getting sandbox gifts ', res.data);
   ProxyState.gifts = res.data.map(gf => new Gif(gf));
   console.log('list of existing gifts',ProxyState.gifts); 
   
    
  }

  async createGift(gift) {

   const res = await SandApi.post('',gift);
   console.log('please work : ', res.data); 
   ProxyState.gifts = [...ProxyState.gifts, new Gif(res.data)]
    
  }

  async updateGift(id) {
    // console.log("got to service, open attaempt",id); 
    let found = ProxyState.gifts.find(g => g.id == id)
    found.opened = true;
    console.log(found.opened, found); 
    
    const res = await SandApi.put(found.id, found);
    console.log(' attempting open ', res.data);
    ProxyState.gifts = ProxyState.gifts
    
    
  }
}

export const sandboxesService = new SandboxesService()