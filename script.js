let spaceship = {
  Velocity: 0,
  MaxVelocity: 200,
  name: "Raznate",
  type: "Combate"

}


function showMenu() {
  while(true) {
    x = prompt("1.Acelerar \n2.Parar")
    switch(x) {
      case "1":
        Acelerar()
      case "2":
        Parar()
    }
  }
}

function Acelerar(spaceship) {
  newSpeed = prompt("Quanto deseja acelerar: ")
  if (spaceship.Velocity <= spaceship.MaxVelocity) {
    spaceship.Velocity += newSpeed
  } else {
    alert("Velocidade maxima atingida")

  }
}
