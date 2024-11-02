const response = fetch("https://www.world-wonders-api.org/v0/wonders");
response
  .then((resolved) => {
    const json = resolved.json();

    return json;
  })
  .then((data) => {
    data.forEach(element => {
        console.log(element);
    });
    const wonder_list=data.map(element=>({
        name:element.name,
    build_year:element.build_year,
    categories:element.categories,
    links:element.links,
    location:element.location,
    summary:element.summary,
    time_period:element.time_period,

    }),
    
);
//wonder_name=wonder_list[0].name;
container =document.getElementById('world-wonders');
container.innerHtml='';
///
counter=0;
wonder_list.forEach(element=>{
    const li = document.createElement('world-wonder');
    li.style.color='beige';
    li.style.padding = '20px';
    li.style.border='2px solid beige'  
    li.style.borderRadius = '10px'
    li.style.margin = '10px'; 
    //li.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    console.log(element.name);
    li.textContent = element.name;
    container.appendChild(li);
    counter++;
    if(counter%5===0){
        const br=document.createElement('li');
        br.textContent="";
        container.appendChild(br);
    }
    
        let img = document.createElement('img');
        img.src = element.links.images[0]; 
        img.style.width = '300px';
        img.style.height = 'auto';
       container.appendChild(img);
/*let col=document.createElement('on-col');
    col.appendChild(container);*/

        li.addEventListener('click',()=>{
        localStorage.setItem('selected',JSON.stringify(element));
        window.location.href = "data.html"; 
    })

})


})
  .catch((error) => {
    console.log(error);
  });
  
