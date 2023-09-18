let heroi = 'Enzo'
let xp = 9000

switch (true) {
  case xp >= 1000 && xp <= 2000:
    console.log('bronze')
    break

  case xp >= 2001 && xp <= 5000:
    console.log('pratinha ')
    break

  case xp >= 6001 && xp <= 7000:
    console.log('ourinho')
    break

  case xp >= 70001 && xp <= 8000:
    console.log('Platina')
    break

  case xp >= 8001 && xp <= 9000:
    console.log('Ascendente')
    break

  case xp >= 9001 && xp <= 10000:
    console.log('Imortal')
    break
  case xp >= 10001:
    console.log('Radiante')
    break

  default:
    console.log('Voce ainda é ajudandte do ajudante')
}

console.log('O Heroi de nome ' + heroi + ' esta no nivel de ' + xp)
