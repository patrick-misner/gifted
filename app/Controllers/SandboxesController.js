import { ProxyState } from "../AppState.js";
import { sandboxesService } from "../Services/SandboxesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawGifts() {
  console.log('draw gifts'); 
  
  let template = ''
  ProxyState.gifts.forEach(gf => template += gf.GiftTemplate)
  document.getElementById('gifts').innerHTML = template
}

export class SandboxesController {
  constructor() {
    console.log('i am working sandbox');
    ProxyState.on('gifts', this.getGifts)
    ProxyState.on('gifts', _drawGifts)
    this.getGifts()
  }

  async getGifts() {
    try {
      await sandboxesService.getGifts()
    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error);
    }
  }

  async createGift() {
    window.event.preventDefault()
    let form = window.event.target;

    let gift = {
      tag: form.tag.value,
      url: form.url.value,
      opened: false
    }

   try {
     await sandboxesService.createGift(gift) 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
  }

  async updateGift(id) {
    let clicked = window.event.target
    // console.log(clicked, id); 
   try {
     await sandboxesService.updateGift(id) 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
    
  }
}