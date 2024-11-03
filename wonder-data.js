const selected = JSON.parse(localStorage.getItem('selected'));
//document.body.style.backgroundColor='beige';
if(selected){
    document.getElementById('name').textContent = selected.name;
    document.getElementById('year').textContent = selected.build_year;
    document.getElementById('categories').textContent = selected.categories;
    document.getElementById('links').textContent = selected.links;    
    document.getElementById('summary').textContent = selected.summary;
    document.getElementById('location').textContent = selected.location;
    //document.getElementById('time-period').textContent = selected.time_period;
    
    cont=document.getElementById('cont');
        let img = document.createElement('img');
        container = document.getElementById('image-container');
        container.innerHTML = '';
        img.src = selected.links.images[1]; 
        img.style.width = '100%';
        img.style.height = '300px';
        
        img.style.margin='10px';
        
        container.appendChild(img);
        cont.appendChild(container);
        let img2 = document.createElement('img');
        container2 = document.getElementById('image-container2');
        container2.innerHTML = '';
        img2.src = selected.links.images[2]; 
        img2.style.width = '100%';
        img2.style.height = '300px';
        
        img2.style.margin='10px';
        container2.appendChild(img2);
        cont.appendChild(container2);


        

    
} 


