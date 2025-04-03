const myCanvas = document.querySelector('canvas')


let ctx = myCanvas.getContext("2d")


let size = 10

myCanvas.addEventListener('mousedown', (e) => {
    const x = e.offsetX
    const y = e.offsetY
    drawCircle(x, y)
})

function drawCircle(x, y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI*2)
    // ctx.fillStyle = "red"
    ctx.fill()
    ctx.stroke()
}

// drawCircle(50, 50)

