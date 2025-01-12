document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function updateColorInfo(color) {
        colorDisplay.style.backgroundColor = color;
        hexValue.value = color.toUpperCase();
        
        const rgb = hexToRgb(color);
        if (rgb) {
            rgbValue.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        }
    }

    colorInput.addEventListener('input', function(e) {
        updateColorInfo(e.target.value);
    });

    // Initialize with default color
    updateColorInfo(colorInput.value);
});