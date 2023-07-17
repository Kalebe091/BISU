// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

// Quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    const btnVoltarAoTopo = document.getElementById('btnVoltarAoTopo');
  
    // Mostra o botão quando o usuário rolar para baixo
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        btnVoltarAoTopo.style.display = 'block';
      } else {
        btnVoltarAoTopo.style.display = 'none';
      }
    });
  
    // Scroll suave ao clicar no botão
    btnVoltarAoTopo.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  