temp = False
x = 2
y = 2

def on_button_pressed_a():
    global temp
    if (temp):
        temp = False
    else:
        temp = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever2():
    global temp
    if (temp == False):
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

def on_forever():
    global temp
    if (temp):
        temperature = input.temperature()
        led.plot_bar_graph(temperature, 50)
basic.forever(on_forever)