input.onButtonPressed(Button.A, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.YELLOW)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
