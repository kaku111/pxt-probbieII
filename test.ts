// tests go here; this will not be compiled when this package is used as a library
basic.forever(function () {
    ProbbieII.forward()
    basic.pause(1000)
    ProbbieII.stopWalk()
    basic.pause(1000)
    ProbbieII.backward()
    basic.pause(1000)
    ProbbieII.stopWalk()
})
