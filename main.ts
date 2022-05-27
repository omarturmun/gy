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
    }
})
basic.forever(function () {
    if (atal_1 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        basic.pause(2000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        atal_1 = 0
        atal_2 = 1
    }
})
