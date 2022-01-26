function lerp (a, b, u) {
    return Math.floor((1 - u) * a + u * b)
}

/**
 * 
 */
function getRGBForFactor (factor, startColor, endColor) {
    return {
        r: lerp(startColor.r, endColor.r, factor),
        g: lerp(startColor.g, endColor.g, factor),
        b: lerp(startColor.b, endColor.b, factor)
    } 
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex
}



module.exports = {

   /**
    * Converts RGB object to hex.
    */
    RGBToHex(rgb = { r : 0, g : 0, b : 0 }) {
        return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(rgb.b)}`
    },


    /** 
     * Determines the  midpoint between two RGB colors based on a factor between 0 and 1.
     *
     * from https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage/7128796
     */
    factorToRGB (factor, startColor = { r : 0, g : 250, b : 0 }, endColor = { r : 250, g : 0, b : 0 }) {
        if (factor < 0)
            factor = 0

        if (factor > 1)
            factor = 1
        
        return getRGBForFactor(factor, startColor, endColor)
    },
    
    factorToHex(factor, startColor = { r : 0, g : 250, b : 0 }, endColor = { r : 250, g : 0, b : 0 }){
        const rgb = this.factorToRGB(factor, startColor, endColor)
        return this.RGBToHex(rgb)
    }
}
