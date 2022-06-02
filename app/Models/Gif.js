

export class Gif {
  constructor(obj) {
    this.id = obj.id
    this.images = obj.images // is an object when pulled from giphy
    // sandbox stuff
    this.tag = obj.tag
    this.opened = obj.opened
    this.url = obj.url
  }

  get GiftTemplate() {
    return this.checkOpened()
  }

  get SearchTemplate() {
    console.log('accessed search template');
    return `
    <div class="col-12 my-1">

    <div class="m-1 p-1 bg-light">
      <img onclick="app.gifsController.urlAutofill()" class="img-fluid selectable" src="${this.images.downsized.url}" alt="">
    </div>

  </div>
    
    ` 
    
  }

  checkOpened() {
    if (this.opened) {
      console.log('has been opened'); 
      
      return `
      <div class="col-4">
                <div class="bg-light rounded shadow m-3 p-2 text-center">
                  <img class="img-fluid " src="${this.url}" alt="">
                  <p>${this.tag}</p>
                </div>
              </div>
      `
    }
    else {
      console.log('not opened'); 
      return `
      <div class="col-4">
              <div class="bg-light rounded shadow m-3 p-2">
                <h1>${this.tag}</h1>
                <p class="selectable" onclick="app.sandboxesController.updateGift('${this.id}')">click to open</p>
              </div>
            </div>
      `
    }
  }
}