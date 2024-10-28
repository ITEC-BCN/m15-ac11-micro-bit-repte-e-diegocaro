basic.forever(function on_forever() {
    let temperature = input.temperature()
    led.plotBarGraph(temperature, 50)
})
