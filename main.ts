input.onButtonPressed(Button.A, function () {
    show += 1
    basic.showNumber(show)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (show >= 25) {
        show = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < show) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈(a + 1)
        }
    }
})
function 燈 (num: number) {
    if (num % 5 == 0) {
        X = 4
        Y = num / 5 - 1
    } else {
        X = num % 5 - 1
        Y = Math.floor(num / 5)
    }
    led.plot(X, Y)
}
input.onButtonPressed(Button.B, function () {
    show += -1
    basic.showNumber(show)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (show <= 0) {
        show = 0
    }
})
let Y = 0
let X = 0
let a = 0
let n = 0
let list: number[] = []
let show = 0
show = 0
led.setBrightness(100)
