input.onButtonPressed(Button.A, function () {
    radio.sendString("LF")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("BR")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("BF")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("RF")
})
radio.setGroup(1)
