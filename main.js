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
const container = document.getElementById('container');
document.body.appendChild(container);
wonder_list.forEach(element=>{


    let box = document.createElement('box');
    const img = document.createElement('img');
    img.src = element.links.images[0]; 
    img.style.width = '100%';
    img.style.height = '200px';
    img.style.borderRadius = '0 px';
    img.style.margin = '5 px';


    let name = document.createElement('p');
    name.textContent = element.name; 
    name.style.margin = '10px 0 0';
    name.style.fontSize = 'x-large';
    name.style.color = '#072e37';
    name.style.fontFamily = 'cursive';
    name.style.backgroundColor='beige'


    box.appendChild(img);
    box.appendChild(name);


    container.appendChild(box);
    box.addEventListener('click',()=>{
            localStorage.setItem('selected',JSON.stringify(element));
            window.location.href = "data.html"; })
    
    })
  
})
  .catch((error) => {
    console.log(error);
  });
  
