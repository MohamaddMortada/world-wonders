const selected = JSON.parse(localStorage.getItem('selected'));
if(selected){
    document.getElementById('name').textContent = selected.name;
    document.getElementById('year').textContent = selected.build_year;
    document.getElementById('categories').textContent = selected.categories;
    document.getElementById('links').textContent = selected.links;    
    document.getElementById('summary').textContent = selected.summary;
    document.getElementById('location').textContent = selected.location;
    //document.getElementById('time-period').textContent = selected.time_period;
    
    
        
        img = document.createElement('img');
        img.src = selected.links.images[0]; 
        img.style.width = '300px';
        img.style.height = '100px';
        container = document.getElementById('image-container');
        container.innerHTML = ''; 
        container.appendChild(img);
    
} 


