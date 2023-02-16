input.onButtonPressed(Button.A, function () {
    发射点.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    子弹 = game.createSprite(发射点.get(LedSpriteProperty.X), 发射点.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        子弹.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
        if (子弹.isTouching(变量)) {
            game.addScore(1)
            music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
            子弹.delete()
            变量.delete()
        }
    }
    if (子弹.get(LedSpriteProperty.Y) <= 0) {
        子弹.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    发射点.move(1)
})
let 变量: game.LedSprite = null
let 子弹: game.LedSprite = null
let 发射点: game.LedSprite = null
发射点 = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    变量 = game.createSprite(randint(0, 4), 0)
    basic.pause(200)
    变量.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        变量.move(1)
        basic.pause(1000)
    }
    if (变量.isTouching(发射点)) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        game.gameOver()
    } else if (变量.isTouchingEdge()) {
        变量.delete()
    }
})
