let temp = false
let x = 2
let y = 2
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (temp) {
        temp = false
    } else {
        temp = true
    }
    
})
basic.forever(function on_forever2() {
    let accX: number;
    let accY: number;
    
    if (temp == false) {
        
        led.plot(x, y)
        basic.pause(50)
        basic.clearScreen()
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
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
        
    }
    
})
basic.forever(function on_forever() {
    let temperature: number;
    
    if (temp) {
        temperature = input.temperature()
        led.plotBarGraph(temperature, 50)
    }
    
})
