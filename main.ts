let short_jump_now = 0
let high_or_short = 0
let jump_now = 0
let score = 0
let start = 0
let hard = 0
input.onPinPressed(TouchPin.P0, function () {
    short_jump_now = 0
    high_or_short = 0
    jump_now = 0
    score = 0
    start = 0
    basic.showString("Game crashed, force crash triggerd by P0+GND")
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (short_jump_now == 1) {
        for (let index = 0; index < 2147483647; index++) {
            basic.showNumber(score)
        }
    } else if (jump_now == 1) {
        jump_now = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    start = 1
})
input.onButtonPressed(Button.B, function () {
    if (jump_now == 1) {
        for (let index = 0; index < 2147483647; index++) {
            basic.showNumber(score)
        }
    } else if (short_jump_now == 1) {
        short_jump_now = 0
    } else {
    	
    }
})
basic.forever(function () {
    if (start == 1) {
        hard = 1000
        for (let index = 0; index < 2147483647; index++) {
            high_or_short = randint(1, 2)
            if (high_or_short == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . #
                    . . . . #
                    # . . . #
                    `)
                basic.pause(hard)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . # .
                    . . . # .
                    # . . # .
                    `)
                basic.pause(hard)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . # . .
                    # . # . .
                    `)
                basic.pause(hard)
                jump_now = 1
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . # . . .
                    . # . . .
                    # # . . .
                    `)
                basic.pause(hard)
                if (jump_now == 1) {
                    for (let index = 0; index < 2147483647; index++) {
                        basic.showNumber(score)
                    }
                } else {
                    basic.showLeds(`
                        # . . . .
                        . . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        # . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        . . . . .
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        `)
                    score = score + 1
                }
            } else if (high_or_short == 2) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . #
                    `)
                basic.pause(hard)
                basic.showLeds(`
                    . . . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . # .
                    `)
                basic.pause(hard)
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # . # . .
                    `)
                basic.pause(hard)
                short_jump_now = 1
                basic.showLeds(`
                    . # . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
                basic.pause(hard)
                if (short_jump_now == 1) {
                    for (let index = 0; index < 2147483647; index++) {
                        basic.showNumber(score)
                    }
                } else {
                    basic.showLeds(`
                        # . . . .
                        . . . . .
                        # . . . .
                        . . . . .
                        # . . . .
                        `)
                    basic.pause(500)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        . . . . .
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        `)
                }
            } else {
                for (let index = 0; index < 2147483647; index++) {
                    basic.showString("Game crashed, error:random interger not funtioning properly")
                }
            }
            hard = hard - 10
        }
    }
})
