 

document.addEventListener("DOMContentLoaded", function() {

    const encabezado = document.getElementById("encabezado");
    const menu = llamandoMenu.menu;
   
  
    const ul = document.createElement("ul");
  
    menu.items.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = item.value;
      a.href = "#";
      if (item.onclick) {
        a.setAttribute("onclick", item.onclick);
      }
      li.appendChild(a);
  
      if (item.submenu) {
        const submenuUl = document.createElement("ul");
        item.submenu.forEach(subitem => {

          const subLi = document.createElement("li");
          const subA = document.createElement("a");

          subA.textContent = subitem.value;
          subA.href = "#";

          if (subitem.onclick) {
            subA.setAttribute("onclick", subitem.onclick);
          }
          subLi.appendChild(subA);
          submenuUl.appendChild(subLi);
        });
        li.appendChild(submenuUl);
      }
  
      ul.appendChild(li);
    });
  
    encabezado.appendChild(ul);
  });
  
  //document.write("<h1><center>Bienvenidos al Banco Garcia</cente></h1>");

  
  
 
  
  function miBanco() {
    //me dirige a
    //document.write("<h1><center>Bienvenidos al Banco Garcia</cente></h1>");
    document.body.style.background="lightgray";

   // alert("mi Banco");
  }
  
  function Cuentacorriente() {
    document.body.style.background="lightgreen";
   // alert("Cuenta Corriente");
  }
  
  function CuentadeCredito() {
    alert("Cuenta de Credito");
  }
  
  function CuentadeDebito() {
    alert("Cuenta de Debito");
  }
  
  function Segurosauto() {
    alert("Seguro de Auto");
  }
  
  function prestamoauto() {
    alert("Prestamos de Auto");
  }
  function prestamoCasa() {
    alert("Prestamo de Casa");

  } function prestamoNegocio() {
    alert("Prestamo de Negocio");
 }
  function prestamoPersonal(){
        alert("Prestamo Personal");   
  }
  function SobreNosotros() {
    alert("Sobre Nosotros");
  }
  function Contacto() {
    alert("Contacto");
  }
  function SegurodeNegocio() {
    alert("Seguro de Negocio");
  }
 

  
