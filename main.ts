input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    0,
    0
    )
    toggle = 0
    serial.writeValue("count", count)
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    5,
    5
    )
    toggle = 1
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue("count", count)
    count = 0
    xname = name
    if ("x" == xname) {
        x = value
    } else {
        y = value
        serial.writeValue("a.x", x)
        serial.writeValue("a.y", y)
        if (toggle == 1) {
            led.toggle(x, y)
        } else {
            led.plot(x, y)
        }
    }
})
let y = 0
let x = 0
let xname = ""
let count = 0
let toggle = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
toggle = 1
count = 0
let yname = 0
basic.showLeds(`
    # . # # #
    # . # . .
    # # # # #
    . . # . #
    # # # . #
    `)
basic.forever(function () {
    count += 1
})
