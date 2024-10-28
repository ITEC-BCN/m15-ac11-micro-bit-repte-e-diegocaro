x = 2
y = 2
def on_forever2():
    global x,y
    led.plot(x, y)
    basic.pause(50)
    basic.clear_screen()
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)

    if(accX <= 150 and  x>0):
        x = x-1
    if(accX>150 and x<4):
        x=x+1
    if(accY<= 150 and y>0):
        y=y-1
    if(accY> 150 and y<4):
        y=y+1
basic.forever(on_forever2)

"""
def on_forever():
    temperature = input.temperature()
    led.plot_bar_graph(temperature, 50)

basic.forever(on_forever)
"""