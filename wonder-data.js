const selected = JSON.parse(localStorage.getItem('selected'));
if(selected){
    
    document.getElementById('name').textContent = selected.name;
    document.getElementById('year').textContent ='Year of Origin: '+selected.build_year;
    document.getElementById('categories').textContent ='Categories: '+ selected.categories;
    let wiki=document.getElementById('links-wiki');
    wiki.textContent = '🇼 for more Info';
    wiki.style.cursor = 'pointer'; 
    wiki.addEventListener('click', () => {
        window.open(selected.links.wiki, "");  
    });
    wiki.style.justifyContent='flex-end';
    ///selected.links.wiki;    
    let maps=document.getElementById('links-maps')
    maps.textContent = '🌎 Check on Google Maps';
    ///selected.links.google_maps; 
    maps.style.cursor = 'pointer'; 
    maps.addEventListener('click', () => {
        window.open(selected.links.google_maps, "");  
    });
    maps.style.justifyContent='flex-end';
    document.getElementById('summary').textContent ='Summary: '+selected.summary;
    document.getElementById('location').textContent ='Location: ' +selected.location;
    document.getElementById('time-period').textContent = 'Time Period: '+selected.time_period;
    
    cont=document.getElementById('cont');
        let img = document.createElement('img');
        container = document.getElementById('image-container');
        container.innerHTML = '';
        img.src = selected.links.images[1]; 
        img.style.width = '100%';
        //img.style.minWidth='250px'
        img.style.height = '250px';
        
        img.style.margin='2px';
        
        container.appendChild(img);
        cont.appendChild(container);
        let img2 = document.createElement('img');
        container2 = document.getElementById('image-container2');
        container2.innerHTML = '';
        img2.src = selected.links.images[2]; 
        img2.style.width = '100%';
        //img2.style.minWidth='250px'
        img2.style.height = '250px';
        
        img2.style.margin='2px';
        container2.appendChild(img2);
        cont.appendChild(container2);
} 


