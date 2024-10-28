let x = 2
let y = 2
basic.forever(function on_forever2() {
    
    led.plot(x, y)
    basic.pause(50)
    basic.clearScreen()
    let accX = input.acceleration(Dimension.X)
    let accY = input.acceleration(Dimension.Y)
    if (accX <= 150 && x > 0) {
        x = x - 1
    }
    
    if (accX > 150 && x < 4) {
        x = x + 1
    }
    
    if (accY <= 150 && y > 0) {
        y = y - 1
    }
    
    if (accY > 150 && y < 4) {
        y = y + 1
    }
    
})
/** 
def on_forever():
    temperature = input.temperature()
    led.plot_bar_graph(temperature, 50)

basic.forever(on_forever)

 */
