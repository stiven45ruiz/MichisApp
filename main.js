const limit = 3;

const API_KEY = '6bbe5462-9f3e-4b18-aace-f61ba127da3a'
const API_URL_RAMDOM =`https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${API_KEY}`;
const API_URL_FAVORITES =`https://api.thecatapi.com/v1/favourites?limit=${limit}&api_key=${API_KEY}`;

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.getElementById('bannerImage');
//         img.src = data[0].url; 
//     })


const spanError = document.getElementById('error')


//wiht promises
const img = document.querySelectorAll('.banner-image');
const imgex = document.getElementsByClassName('banner-image');

const loadRamdomMichis = async() =>{
    
    const response = await fetch(API_URL_RAMDOM);
    const data = await response.json();

    if(response.status !==200){
        spanError.innerHTML = `Hubo un error ${response.status}`
    }else{
        img.forEach((item, index) => {
        item.src = data[index].url;
        });
    }
    
}
//Codigo para Ejecutar loadRamdomMichis() sin onClick
//const input = document.getElementById('buttoRefresh');
//input.onclick = loadRamdomMichis;


const loadFavoritesMichis = async() =>{
    
    const response = await fetch(API_URL_FAVORITES);
    const data = await response.json();

    if(response.status !==200){
        spanError.innerHTML = `Hubo un error ${response.status}`
    }
}

loadRamdomMichis();
loadFavoritesMichis()