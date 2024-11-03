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
img.alt = 'Placeholder Image';
img.style.Width = '500px';
img.style.height = '200px';
img.style.borderRadius = '5px';
img.style.margin = '5px';


let name = document.createElement('p');
name.textContent = element.name; 
name.style.margin = '10px 0 0';
name.style.fontSize = '18px';
name.style.color = '#072e37';
name.style.backgroundColor='beige'


box.appendChild(img);
box.appendChild(name);


container.appendChild(box);
box.addEventListener('click',()=>{
        localStorage.setItem('selected',JSON.stringify(element));
        window.location.href = "data.html"; })
    
})
  /*container =document.getElementById('on-col');
  let img = document.createElement('img');
        img.src = element.links.images[0]; 
        img.style.width = '300px';
        img.style.height = 'auto';
       
    let li = document.createElement('name');
    li.style.color='beige';
    li.style.padding = '20px';
    li.style.border='2px solid beige'  
    li.style.borderRadius = '10px'
    li.style.margin = '10px'; 
    //li.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    console.log(element.name);
    li.textContent = element.name;
    
    counter++;
    /*if(counter%3  ===0){
        const br=document.createElement('li');
        br.textContent="";
        container.appendChild(br);
    }
    container.appendChild(img);
    container.appendChild(li);
    
    
        
/*let col=document.createElement('on-col');
    col.appendChild(container);*/

       /*li.addEventListener('click',()=>{
        localStorage.setItem('selected',JSON.stringify(element));
        window.location.href = "data.html"; 
    })*/




})
  .catch((error) => {
    console.log(error);
  });
  
