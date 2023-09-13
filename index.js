let heroi = 'Enzo'
let xp = 9000

switch (true) {
  case xp >= 1000 && xp <= 2000:
    console.log('Esse merda ainda é bronze')
    break

  case xp >= 2001 && xp <= 5000:
    console.log('Esse merda acha que é alguma coisa pratinha ')
    break

  case xp >= 6001 && xp <= 7000:
    console.log('Continua sendo inutil, ourinho')
    break

  case xp >= 70001 && xp <= 8000:
    console.log(
      'Platina voce so veio de uma familia rica, meritocracia que fala né'
    )
    break

  case xp >= 8001 && xp <= 9000:
    console.log(
      'Certeza que arranjou primeiro emprego aos 30 anos como gerente ja ne Ascendente'
    )
    break

  case xp >= 9001 && xp <= 10000:
    console.log(
      'Tu é um pai de familia com casa propria, 3 filhos, 2 divorcios e viaja no fim de ano Imortal'
    )
    break
  case xp >= 10001:
    console.log(
      'Tu ficou rico na fora do odio, pandemia te faliu e voce voltou mais rico ainda e Radiante'
    )
    break

  default:
    console.log(
      'Tu usa twitter para reclamar da sua familia , tu nao merece ser classificado'
    )
}

console.log('O Heroi de nome ' + heroi + ' esta no nivel de ' + xp)
