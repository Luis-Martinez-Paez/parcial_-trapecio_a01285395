input.onButtonPressed(Button.AB, function () {
    basic.showString("Base menor =")
    basic.showNumber(base_menor)
    basic.showString("Base mayor =")
    basic.showNumber(base_mayor)
    basic.showString("Altura =")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    area_trapecio = (base_mayor + base_menor) / 2 * altura
    basic.showString("Area del trapecio =")
    basic.showNumber(area_trapecio)
})
let area_trapecio = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
base_mayor = 20
base_menor = base_mayor * (3 / 5)
altura = randint(0, 200)
basic.forever(function () {
	
})
