# Probbie-II

Extension for Probbie-II
The Probbie-II robot is a STEAMP DIY kit for BBC micro:bit. The Probbie-II extends the micro:bit's several GPIO ports for motor driver and IR sensors. The extension includes forward walking, backward walking, left turn and right turn, and reads the infrared sensing states on the left and right sides. In addition, it also provides functions such as shaking the head, shaking and dancing.

## Code Example
```JavaScript
basic.forever(function () {
    ProbbieII.forward()
    if (ProbbieII.RBlock(512)) {
        ProbbieII.stopWalk()
    }
})
```
## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


Product information-->https://science.prokits.com.tw/

