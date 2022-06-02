import { ProxyState } from "../AppState.js";
import { gifsService } from "../Services/GifsService.js";


function _drawSearch() {
  let template = ''
  let gifs = ProxyState.gifs
  gifs.forEach(g => template += g.SearchTemplate)
  document.getElementById('search-result').innerHTML = template
}

export class GifsController {
  constructor() {
    console.log('g contrller working');
    ProxyState.on('gifs', _drawSearch)

  }

  async getGif() {
    window.event.preventDefault()
    let form = window.event.target;
    let search = form.gifSearch.value;

    try {
      await gifsService.getGif(search)
    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error);
      form.reset()
    }
  }

  urlAutofill() {
    // console.log('hey its wokring'); 
    let imgUrl = window.event.target.src
    document.getElementById('url').value = imgUrl
  }
}