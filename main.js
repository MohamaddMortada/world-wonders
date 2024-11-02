const response = fetch("https://www.world-wonders-api.org/v0/wonders");
response
  .then((resolved) => {
    const json = resolved.json();

    return json;
  })
  .then((data) => {
    data.forEach(element => {
        console.log(element.name);
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

})
  .catch((error) => {
    console.log(error);
  });
  
