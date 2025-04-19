alert("bienvenido a la pagina de camioneros profesionales")

document.querySelector('#req1').innerHTML = (Number(document.querySelector('#age').innerHTML) > 18)
document.querySelector('#req2').innerHTML = (document.querySelector('#name').innerHTML == "Macri")
document.querySelector('#req3').innerHTML = (document.querySelector('#exp').innerHTML == "cortando pelo")
document.querySelector('#req4').innerHTML = ((Number(document.querySelector('#age').innerHTML) / 2) > 18)
