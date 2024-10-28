def on_forever():
    temperature = input.temperature()
    led.plot_bar_graph(temperature, 50)

basic.forever(on_forever)