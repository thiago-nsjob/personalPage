function setHeaderBackground() {

    var header = $('.headerBlock');
    var pattern = Trianglify({
        width: header.width() + (header.width() * 0.7),
        height: header.height() + (header.height() * 0.7),
        cell_size: 60,
        stroke_width: 1.60,
        x_colors: ["#011f4b", "#03396c", "#005b96", "#6497b1", "#b3cde0", "#be29ec", "#be29ec", "#800080", "#660066"]
            //http://www.color-hex.com/color-palette/1294 + http://www.color-hex.com/color-palette/1835
    });

    header.css("background-image", "url(" + pattern.png() + ")");
}

function setFooterBackground() {

    var footer = $('.page-footer');
    var pattern = Trianglify({
        width: footer.width() + (footer.width() * 0.7),
        height: footer.height() + (footer.height() * 0.7),
        cell_size: 60,
        x_colors: ["#3a2458", "#573b7a", "#6b528b", "#8e71b4", "#b3cde0", "#be29ec", "#be29ec", "#800080", "#660066"]
            //custom
    });

    footer.css("background-image", "url(" + pattern.png() + ")");
}

function setAboutBackground() {

    var block = $('.block>.pushpin-nav');
    var pattern = Trianglify({
        width: block.width() + (block.width() * 0.8),
        height: block.height() + (block.height() * 0.8),
        seed: "RdPu",
        cell_size: 5,
        //x_colors: ["#3a2458", "#573b7a", "#6b528b", "#8e71b4", "#b3cde0", "#be29ec", "#be29ec", "#800080", "#660066"]
        //custom
    });

    block.css("background-image", "url(" + pattern.png() + ")");
}

$(document).ready(function() {

    $(window).resize(function() {
        setFooterBackground();
        setHeaderBackground();
        //   setAboutBackground();
    });

    //  setAboutBackground();
    setFooterBackground();
    setHeaderBackground();
});