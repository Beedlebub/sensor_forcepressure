pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    led.setBrightness(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 255))
    serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
    serial.writeLine("")
    basic.pause(500)
})
