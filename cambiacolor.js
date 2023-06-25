 function cargarNavbar() {
        fetch("navbar.html")
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.getElementById("navbar").innerHTML = data;
            resaltarEnlaceActivo();
        })
        .catch(function(error) {
            console.log('Error al cargar el navbar:', error);
     });}
    


     function resaltarEnlaceActivo() {
        var currentURL = window.location.href;
      
        if (currentURL.endsWith('index.html')) {
          document.getElementById('inicio').classList.add('active');
        } else if (currentURL.endsWith('about.html')) {
          document.getElementById('nosotros').classList.add('active');
        } else if (currentURL.endsWith('service.html') || currentURL.endsWith('IERA.html') || currentURL.endsWith('APE.html')) {
          document.getElementById('servicios').classList.add('active');
        } else if (currentURL.endsWith('news.html')) {
          document.getElementById('noticias').classList.add('active');
        } else if (currentURL.endsWith('contact.html')) {
          document.getElementById('contacto').classList.add('active');
        }
      }