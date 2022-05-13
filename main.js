const limit = 3;

const API_KEY = '6bbe5462-9f3e-4b18-aace-f61ba127da3a';
//URLs
const API_URL_RAMDOM =`https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${API_KEY}`;
const API_URL_FAVORITES =`https://api.thecatapi.com/v1/favourites?api_key=${API_KEY}`;
const API_URL_FAVORITES_DELETE =(id)=>`https://api.thecatapi.com/v1/favourites/${id}?api_key=${API_KEY}`;



// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.getElementById('bannerImage');
//         img.src = data[0].url; 
//     })


const spanError = document.getElementById('error')


//wiht promises

///MICHIS RAMDOMS
const loadRamdomMichis = async() =>{
    
    const response = await fetch(API_URL_RAMDOM);
    const data = await response.json();

    if(response.status !==200){
        spanError.innerHTML = `Hubo un error ${response.status}`
    }else{
        const img = document.querySelectorAll('.banner-image');
        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");

        btn1.onclick = ()=> saveFavoritesMichis(data[0].id)
        btn2.onclick = ()=> saveFavoritesMichis(data[1].id)
        btn3.onclick = ()=> saveFavoritesMichis(data[2].id)

        img.forEach((item, index) => {

            item.src = data[index].url;
        });
    }
    
}
//Codigo para Ejecutar loadRamdomMichis() sin onClick
//const input = document.getElementById('buttoRefresh');
//input.onclick = loadRamdomMichis;

///MICHIS FAVORITOS

const imgFav = document.querySelectorAll('.favorite-image');
const loadFavoriteMichis = async() =>{
    
    const response = await fetch(API_URL_FAVORITES);
    const data = await response.json();

    if(response.status !==200){
        spanError.innerHTML = `Hubo un error ${response.status}`
    }else{
        const section = document.getElementById('favoriteMichis');
        section.innerHTML = "";

        
        console.log(data)
        data.forEach((item)=>{
            
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Eliminar michis de favoritos');

            btn.className = 'btn-favorite'
            btn.onclick = () => deleteFavoriteMichi(item.id)
            btn.appendChild(btnText);
            article.className = 'target-favorites'
            
            img.className = 'favorite-image'
            img.src = item.image.url;


            article.appendChild(img);
            article.appendChild(btn);

            section.appendChild(article);
        })
    }
}


//GUARDA MICHIS EN FAVORITOS
const saveFavoritesMichis = async(id)=>{
    const response = await fetch(API_URL_FAVORITES,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        })
    })

    if(response.status !==200){
        spanError.innerHTML = `Hubo un error ${response.status}`
    }else{
        console.log('Michi Guardado en Favoritos');
        loadFavoriteMichis();
    }
    console.log('fav',response)
}


///BORRAR MICHIS DE FAVORITOS

const deleteFavoriteMichi = async(id)=>{
    const response = await fetch(API_URL_FAVORITES_DELETE(id),{
        method: 'DELETE',
    })
    const data = await response.json()
    if(response.status !==200){
        spanError.innerHTML = `Hubo un error ${response.status}`
    }else{
        console.log('Michi borrado de Favoritos');
        loadFavoriteMichis();
    }
    console.log('fav',response)
}



loadRamdomMichis();
loadFavoriteMichis()