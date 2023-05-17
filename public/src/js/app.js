let button = document.querySelector('#start-button');
let main = document.querySelector('#main');
let cards = document.querySelector('#cards');

button.addEventListener('click', () => {  
    let data = [];
    const backendUrl = 'http://localhost:3000';
    fetch(backendUrl + '/posts')
    .then( response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then( 
    /*
    - die Response sollte ein Array von Post-Dokumenten sein --> befuellen Sie damit data
    - durchlaufen Sie dieses Array und rufen jeweils die Funktion createCard(id, title, location, image_id) auf
    - id sollten Sie sich selbst erzeugen (index)
    - diese gibt ein card-div zurueck
    - haengen Sie dieses an folgendes cell-div: <div class = "mdl-cell"></div>
    - dieses cell-div muessen Sie sich mit JavaScript erzeugen (siehe unten)
    - setzen Sie das main-Div (siehe oben) auf unsichtbar, wenn die Cards erscheinen (z.B. display:none oder visibility:hidden)
    */
    )
    .catch( err => console.log('Fehler!!!'))
});

/*
see: https://getmdl.io/components/index.html#cards-section

<div class="mdl-card">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">title Text Goes Here</h2>
  </div>
  <div class="mdl-card__media">
    <img src="photo.jpg" width="220" height="140" border="0" alt="" style="padding:20px;">
  </div>
  <div class="mdl-card__supporting-text">
    This text might describe the photo and provide further information, such as where and
    when it was taken.
  </div>
  <div class="mdl-card__actions">
    <a href="(URL or function)">Related Action</a>
  </div>
</div>
*/

function createCard(id, title, location, image_id) {
    let card_div = document.createElement('div');
    card_div.classList.add(['mdl-card']);

    let title_div = document.createElement('div');
    title_div.classList.add(['mdl-card__title']);

    let title_h2 = document.createElement('h2');
    title_h2.classList.add(['mdl-card__title-text']);
    title_h2.textContent = title;

    title_div.appendChild(title_h2);
    card_div.appendChild(title_div);

    let media_div = document.createElement('div');
    media_div.classList.add(['mdl-card__media']);

    let media_img = document.createElement('img');
    media_img.style.width = '220px';
    media_img.style.height = '140px';
    media_img.style.border = '0';
    media_img.style.padding = '20px';
    media_img.alt = title;
    media_img.src = image_id;

    media_div.appendChild(media_img);
    card_div.appendChild(media_div);

    let text_div = document.createElement('div');
    text_div.classList.add(['mdl-card__supporting-text']);
    text_div.textContent = location;

    card_div.appendChild(text_div);

    let action_div = document.createElement('div');
    action_div.classList.add(['mdl-card__actions']);
    
    let currentLocation = window.location;
    let action_href = document.createElement('a');
    action_href.href = currentLocation + '/' + id;
    action_href.textContent = 'Details';

    action_div.appendChild(action_href);

    card_div.appendChild(action_div);
    return card_div;
}