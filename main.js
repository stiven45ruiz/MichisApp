console.log('hola')
let limit = 3;
const API_KEY = '6bbe5462-9f3e-4b18-aace-f61ba127da3a'


const API_URL =`https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${API_KEY}`;

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.getElementById('bannerImage');
//         img.src = data[0].url; 
//     })


//wiht promises

// for (let i = 0; i < limit; i++) {
//     const image = document.createElement("img");
    

//     var currentDiv = document.getElementById("container");
//     document.body.insertBefore(image, currentDiv);
// }



const img = document.querySelectorAll('.banner-image');
const imgex = document.getElementsByClassName('banner-image');

const refresh = async() =>{
    
    const response = await fetch(API_URL);
    const data = await response.json();


    img.forEach((item, index) => {
        item.src = data[index].url;
    });
    
}
const input = document.getElementById('buttoRefresh');
input.onclick = refresh;
refresh()