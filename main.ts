input.onButtonPressed(Button.A, function () {
    pausa += 50
})
input.onButtonPressed(Button.B, function () {
    pausa += -50
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
        basic.pause(pausa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
        basic.pause(pausa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
let pausa = 0
DFRobotMaqueenPlus.I2CInit()
pausa = 1000
basic.forever(function () {
    basic.showNumber(pausa)
})
