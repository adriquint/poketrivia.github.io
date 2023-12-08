"use strict";

const send = document.getElementById('send')
const reload = document.getElementById('reload')

reload.onclick = () => restart()

send.onclick = () => { resultado();
    sessionStorage.setItem("acertados", cantidadAcertados),
    sessionStorage.setItem("encuestados", cantidadEncuestados)    
  }