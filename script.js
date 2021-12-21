function randomHex() {
    var hexArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var result = [];
    for (var i = 0; i < 6; i++) {
        result.push(hexArr[Math.floor(Math.random() * 16)]);
    }
    return '#' + result.join('');
}

function getBrightness(hex) {
    hex = hex.substring(1);
    var rgb = parseInt(hex, 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >> 8) & 0xff;
    var b = (rgb >> 0) & 0xff;

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luma < 128; //false item, true putih
}

$(document).ready(function() {
    var color = randomHex();
    $('.container').css('background-color', color);
    $('.color-hex').html(color.toUpperCase());

    if (getBrightness(color)) {
        $('.text').css('color', '#ffffff');
    } else {
        $('.text').css('color', '#000000');
    }
});

$(document).ready(function() {
    $(this).on('keydown', function() {
        if (event.which == 32 || event.which == 13) {
            var color = randomHex();
            $('.container').css('background-color', color);
            $('.color-hex').html(color.toUpperCase());

            if (getBrightness(color)) {
                $('.text').css('color', '#ffffff');
            } else {
                $('.text').css('color', '#000000');
            }
        }
    });
});
