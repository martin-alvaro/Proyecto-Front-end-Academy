 const datos = '{"edad":25, "pais":"Estados Unidos", "email": "eugene.crawford@example.com"}'
 const obj = JSON.parse(datos)

let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');
  document.getElementById('dato1').innerHTML= obj.edad;
  document.getElementById('dato2').innerHTML= obj.pais;
  document.getElementById('dato3').innerHTML= obj.email;
  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Menos info'
  }
  else {
    readMore_btn.innerHTML = 'Mas info'
  }
}


  function obtenerDatos(){
    fetch('habilidades.json')
      .then((resp) => resp.json() )
      .then((data)=>{
      // console.log(data)
      data.forEach(hab => {
        document.getElementById("hab").innerHTML+=`
        <article data-aos="flip-up">
          <div>
            <div>
              <img src="${hab.img}"</img>
            </div>     
              <h3>${hab.titulo}</h3>
          </div>  
          <p>${hab.conocimiento}</p>
        </article>`
      });
    })

  }

  obtenerDatos()


  function menuResponsive(){
    let x = document.getElementById("nav")
    if(x.className==""){
      x.className = "responsive"
    } else{
      x.className = ""
    }
  }