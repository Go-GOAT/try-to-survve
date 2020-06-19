namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Bogey = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . . 2 f f f 2 2 2 . . . 
. . 2 2 2 2 2 f 2 f 2 2 2 . . . 
. 2 2 2 2 2 2 2 2 f f f 2 . . . 
. 2 2 2 2 2 f f f f f 2 2 2 . . 
. 2 2 2 2 f f f f f f 2 2 2 . . 
. 2 2 2 2 f f f f f f 2 2 2 . . 
. 2 2 2 2 f f f f f f 2 2 2 . . 
. 2 2 2 f 2 f f f f f 2 2 2 . . 
. 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
. . . . . 2 2 2 2 2 2 . 2 2 . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite2, 200, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Date = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 f f f 9 9 9 . . . 
. . 9 9 9 9 9 f 9 f 9 9 9 . . . 
. 9 9 9 9 9 9 9 9 f f f 9 . . . 
. 9 9 9 9 9 f f f f f 9 9 9 . . 
. 9 9 9 9 f f f f f f 9 9 9 . . 
. 9 9 9 9 f f f f f f 9 9 9 . . 
. 9 9 9 9 f f f f f f 9 9 9 . . 
. 9 9 9 f 9 f f f f f 9 9 9 . . 
. 9 9 9 9 9 9 f 9 9 9 9 9 9 . . 
9 9 9 9 9 9 9 f 9 9 9 9 9 9 . . 
. . . . . 9 9 9 9 9 9 . 9 9 . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 200, 0)
})
let Date: Sprite = null
let Bogey: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . 5 5 5 5 5 5 5 4 4 4 4 4 
. . . . 4 4 4 4 4 4 5 7 7 7 7 7 
. . . . 4 4 4 4 4 4 5 7 7 7 7 7 
. . . . 5 5 5 5 5 5 5 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 
. . . . 4 4 4 4 4 4 4 4 4 4 4 5 
. . . . 4 4 4 4 4 4 4 4 4 4 4 5 
. . . . 4 4 4 4 4 4 4 4 4 4 4 5 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Player)
mySprite2 = sprites.create(img`
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 5 5 5 5 5 5 5 7 7 7 7 7 
. . . . 7 7 7 7 7 7 5 4 4 4 4 4 
. . . . 7 7 7 7 7 7 5 4 4 4 4 4 
. . . . 5 5 5 5 5 5 5 4 4 4 4 4 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . 5 5 5 5 5 4 5 5 5 5 5 5 
. . . . 7 7 7 7 7 7 7 7 7 7 7 5 
. . . . 7 7 7 7 7 7 7 7 7 7 7 5 
. . . . 7 7 7 7 7 7 7 7 7 7 7 5 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite2.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(mySprite, 200, 200)
controller.moveSprite(mySprite2, 201, 201)
