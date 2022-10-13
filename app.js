// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
let meme = document.querySelector('.meme');

const memes = [
  {title: "flat earthers",
meme: "https://i.redd.it/h7t08fko82941.jpg"},
{title: "most interesting man",
meme: "https://external-preview.redd.it/z4WnPvQGeFc5qySHPFa5Qwwue1edJcC0bv375Ej_vxg.jpg?auto=webp&s=ef57751c23619ae8e1977a930afa412cbdd29fe3"},
{title: "Charles meme",
meme: "https://preview.redd.it/kpnxisxregq91.jpg?width=640&crop=smart&auto=webp&s=9e37259c59f6faadbf30844adc5dc1ac7c703d1b"},
{title: "first world problem",
meme: "https://i.redd.it/4ybkhq09itl21.jpg"},
{title: "doge meme",
meme: "https://preview.redd.it/uc9s933bpcs91.jpg?width=640&crop=smart&auto=webp&s=434424e92303b257be9c0be033057a5c03ba4422"},
{title: "corona meme",
meme: "https://preview.redd.it/x4s2e60m7vm41.jpg?width=640&crop=smart&auto=webp&s=ae2a2b50646adce4fc8a800bac1c09a75c6ea52d"},
{title: "Elmo meme",
meme: "https://preview.redd.it/p0gjntu90ls91.jpg?width=640&crop=smart&auto=webp&s=9b662ef9fd8f6ce1e035b37acf0607ea086f7eba"},
{title: "harvard wants to know your location",
meme: "https://preview.redd.it/417scqf5ivc21.png?auto=webp&s=307f915e222d9d62f9c3a5d8f28fe4ab4b1a7380"},
{title: "The Rock Johnson",
meme: "https://preview.redd.it/5vo656mg9w481.jpg?width=640&crop=smart&auto=webp&s=3676d8cc63ff731eec18f8d43714d46e94ca3c70"},
{title: "meme art",
meme: "https://preview.redd.it/qtmo4imk5ry41.jpg?width=640&crop=smart&auto=webp&s=86c1d1d886d4851a9dc395ac75f617f9b25b70da"}
]

modalBtn.addEventListener('click', function(){
  modalOverlay.classList.add('open-modal')
  let random = Math.floor(Math.random() * memes.length);
  meme.src = memes[random].meme;
})

closeBtn.addEventListener('click', function(){
  modalOverlay.classList.remove('open-modal')
})
