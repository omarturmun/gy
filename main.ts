let atal_3 = 0
DFRobotMaqueenPlus.I2CInit()
let atal_1 = 1
let atal_2 = 0
basic.forever(function () {
    if (atal_2 == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 140)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            }
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 140)
            }
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
            atal_2 = 0
            atal_3 = 1
        }
    }
})
basic.forever(function () {
    if (atal_3 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
        basic.pause(350)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 80)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
        basic.pause(1000)
    }
    atal_3 = 0
})
basic.forever(function () {
    if (atal_1 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        basic.pause(200)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        basic.pause(200)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        basic.pause(200)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        basic.pause(200)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        basic.pause(200)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        basic.pause(200)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        atal_1 = 0
        atal_2 = 1
    }
})
basic.forever(function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.pause(200)
})
basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.showIcon(IconNames.Duck)
    basic.pause(500)
})
