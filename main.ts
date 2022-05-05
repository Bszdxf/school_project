/**
 * 국어-1
 * 
 * 수학-2
 * 
 * 사회-3
 * 
 * 과학-4
 * 
 * 영어-5
 * 
 * 역사-6
 * 
 * 체육-7
 * 
 * 일어-8
 * 
 * 음악-9
 * 
 * 기가-10
 * 
 * 미술-11
 * 
 * 그외-12
 */
input.onButtonPressed(Button.A, function () {
    if (setting == 1) {
        setting = 2
    }
    if (setting == 3) {
        if (set_change <= 4) {
            set_change += 1
            basic.showNumber(set_change)
        } else {
            set_change = 1
            basic.showNumber(set_change)
        }
    }
    if (setting == 4) {
        if (set_change <= 22) {
            set_change += 1
            basic.showNumber(set_change)
        } else {
            set_change = 0
            basic.showNumber(set_change)
        }
    }
    if (setting == 5) {
        if (set_change <= 4) {
            set_change += 1
            basic.showNumber(set_change)
        } else {
            set_change = 0
            basic.showNumber(set_change)
        }
    }
    if (setting == 6) {
        if (set_change <= 8) {
            set_change += 1
            basic.showNumber(set_change)
        } else {
            set_change = 0
            basic.showNumber(set_change)
        }
    }
    if (setting == 8) {
        if (set_change <= 6) {
            set_change += 1
            basic.showNumber(set_change)
        } else {
            set_change = 1
            basic.showNumber(set_change)
        }
    }
    if (setting == 9) {
        if (set_change <= 11) {
            set_change += 1
            basic.showNumber(set_change)
        } else {
            set_change = 0
            basic.showNumber(set_change)
        }
    }
})
function pres_con () {
    if (hour == 9 && (5 <= min && min < 55)) {
        now = sch[0]
        light2()
    }
    if (hour == 9 && min >= 55 || hour == 10 && min < 50) {
        now = sch[1]
        light2()
    }
    if (hour == 10 && min >= 50 || hour == 11 && min < 45) {
        now = sch[2]
        light2()
    }
    if (hour == 11 && min >= 45 || hour == 12 && min < 40) {
        now = sch[3]
        light2()
    }
    if (hour == 12 && min >= 40 || hour == 13 && min < 35) {
        now = 0
        light2()
    }
    if (hour == 13 && min >= 35 || hour == 14 && min < 25) {
        now = sch[4]
        light2()
    }
    if (hour == 14 && min >= 25 || hour == 15 && min < 20) {
        now = sch[5]
        light2()
    }
    if (hour == 15 && min >= 20 || hour == 16 && min < 15) {
        now = sch[6]
        light2()
    }
}
function schedule () {
    if (1 == date) {
        sch = [
        1,
        6,
        7,
        2,
        8,
        9,
        0
        ]
    }
    if (2 == date) {
        sch = [
        11,
        1,
        3,
        10,
        4,
        5,
        6
        ]
    }
    if (3 == date) {
        sch = [
        5,
        2,
        10,
        7,
        11,
        12,
        0
        ]
    }
    if (4 == date) {
        sch = [
        4,
        5,
        8,
        1,
        7,
        3,
        10
        ]
    }
    if (5 == date) {
        sch = [
        9,
        4,
        12,
        2,
        1,
        6,
        0
        ]
    }
}
input.onButtonPressed(Button.AB, function () {
    if (setting == 0) {
        setting = 1
    } else if (setting == 2) {
        setting = 3
        set_change = 1
        basic.showNumber(set_change)
    } else if (setting == 3) {
        date = set_change
        setting = 4
        set_change = 0
        basic.showNumber(set_change)
    } else if (setting == 4) {
        hour = set_change
        setting = 5
        set_change = 0
        basic.showNumber(set_change)
    } else if (setting == 5) {
        min = set_change * 10
        setting = 6
        set_change = 0
        basic.showNumber(set_change)
    } else if (setting == 7) {
        setting = 8
        set_change = 1
        basic.showNumber(set_change)
    } else if (setting == 8) {
        ex_set_change = set_change
        setting = 9
        set_change = 0
    } else if (setting == 9) {
        sch[ex_set_change - 1] = set_change
        ex_set_change = 0
        set_change = 0
        setting = 0
        basic.clearScreen()
    } else if (setting == 6) {
        min += set_change
        setting = 0
        set_change = 0
        basic.clearScreen()
    } else {
        setting = 0
        set_change = 0
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (setting == 1) {
        setting = 7
    }
    if (setting == 3) {
        if (set_change >= 2) {
            set_change += -1
            basic.showNumber(set_change)
        } else {
            set_change = 5
            basic.showNumber(set_change)
        }
    }
    if (setting == 4) {
        if (set_change >= 1) {
            set_change += -1
            basic.showNumber(set_change)
        } else {
            set_change = 23
            basic.showNumber(set_change)
        }
    }
    if (setting == 5) {
        if (set_change >= 1) {
            set_change += -1
            basic.showNumber(set_change)
        } else {
            set_change = 5
            basic.showNumber(set_change)
        }
    }
    if (setting == 6) {
        if (set_change >= 1) {
            set_change += -1
            basic.showNumber(set_change)
        } else {
            set_change = 9
            basic.showNumber(set_change)
        }
    }
    if (setting == 8) {
        if (set_change >= 2) {
            set_change += -1
            basic.showNumber(set_change)
        } else {
            set_change = 7
            basic.showNumber(set_change)
        }
    }
    if (setting == 9) {
        if (set_change >= 1) {
            set_change += -1
            basic.showNumber(set_change)
        } else {
            set_change = 12
            basic.showNumber(set_change)
        }
    }
})
function light2 () {
    if (now == 1) {
        basic.showNumber(now)
    } else if (now == 2) {
        basic.showNumber(now)
    } else if (now == 3) {
        basic.showNumber(now)
    } else if (now == 4) {
        basic.showNumber(now)
    } else if (now == 5) {
        basic.showNumber(now)
    } else if (now == 6) {
        basic.showNumber(now)
    } else if (now == 7) {
        basic.showNumber(now)
    } else if (now == 8) {
        basic.showNumber(now)
    } else if (now == 9) {
        basic.showNumber(now)
    } else if (now == 10) {
        basic.showNumber(now)
    } else if (now == 11) {
        basic.showNumber(now)
    } else if (now == 12) {
        basic.showNumber(now)
    } else {
        basic.clearScreen()
    }
}
let ex_set_change = 0
let sch: number[] = []
let setting = 0
let set_change = 0
let now = 0
let date = 0
let min = 0
let hour = 0
hour = 0
let sec = 0
min = 0
date = 1
now = 0
set_change = 0
setting = 0
schedule()
basic.forever(function () {
    basic.pause(1000)
    sec += 1
    pres_con()
    if (60 <= sec) {
        min += 1
        sec = 0
    }
    if (60 <= min) {
        hour += 1
        min = 0
    }
    if (24 <= hour) {
        date += 1
        hour = 0
        schedule()
    }
    if (7 < date) {
        date = 1
    }
})
