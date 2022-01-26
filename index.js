function lerp (a, b, u) {
    return Math.floor( (1 - u) * a + u * b)
}

function getColorForPercentage (pct, startColor, endColor) {
    return color = {
        r: lerp(startColor.r, endColor.r, pct),
        g: lerp(startColor.g, endColor.g, pct),
        b: lerp(startColor.b, endColor.b, pct)
    } 
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex
}

function rgbToHex(rgb) {
    return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(rgb.b)}`
}

module.exports = {

    /** 
     * from https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage/7128796
     */
    percentToHex (percent, startColor = {r : 0, g : 250, b : 0 }, endColor = { r : 250, g : 0, b : 0 }) {
        if (percent < 0)
            percent = 0

        if (percent > 100)
            percent = 100
        
        const rgb = getColorForPercentage(percent, startColor, endColor)
        return rgbToHex(rgb)
    
    }
    
}
