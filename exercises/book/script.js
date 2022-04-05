// ---- Text 2 ----

  let text2Div = document.getElementById('text-2')
  let text2Content = text2Div.firstElementChild
  let distance = 0

  text2Div.addEventListener('mousemove', (e) => {
    let distanceX = Math.abs(e.offsetX - text1Div.offsetWidth / 9) - text2Content.offsetWidth / 2
    let distanceY = Math.abs(e.offsetY - text1Div.offsetHeight / 9) - text2Content.offsetHeight / 2

    if (distanceX * distanceY < 0) {
      distance = Math.max(distanceX, distanceY)
    } else if (distanceX > 0 && distanceY > 0) {
      distance = calcHypotenuse(distanceX, distanceY)
    } else if (distanceX < 0 && distanceY < 0) {
      distance = 0
    }
    // console.log(distanceX + "," + distanceY)
    // console.log(distance)
    text2Content.style.filter = `blur(${distance / 20}px)`
  })

  function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
  }
