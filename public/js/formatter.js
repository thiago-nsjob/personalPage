function setHeaderBackground() {

    var header = $('header');
    var pattern = Trianglify({
        width: header.width() + (header.width() * 1),
        height: header.height() + (header.height() * 1),
        cell_size: 120,
        variance: "2",
        //x_colors: ["#999999", "#777777", "#555555", "#333333", "#111111", "#000000", "#333333", "#555555", "#777777", "#999999"]
        //x_colors: ["#011f4b", "#03396c", "#005b96", "#6497b1", "#b3cde0", "#be29ec", "#be29ec", "#800080", "#660066"]
        //x_colors: ["#220046", "#925cb5", "#3d0a47", "#9108d7", "#470e79", "#925cb5", "#800080", "#925cb5"]
        x_colors: ["#143850", "#02403d", "#3949ab", "#02403d", "#00838f", "#143850", "#02403d"]
            //http://www.color-hex.com/color-palette/1294 + http://www.color-hex.com/color-palette/1835
            //x_colors: ["#364f38", "#925cb5", "#bebf6f", "#925cb5", "#925cb5", "#925cb5"]

    });

    header.css("background-image", "url(" + pattern.png() + ")");
}

function setFooterBackground() {

    var footer = $('footer');
    var pattern = Trianglify({
        width: footer.width() + (footer.width() * 0.7),
        height: footer.height() + (footer.height() * 0.7),
        cell_size: 60,

        x_colors: ["#143850", "#02403d", "#3949ab", "#02403d", "#00838f", "#143850", "#02403d"]
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
        //hide unecessary logos and brands 

    });
    setFooterBackground();
    setHeaderBackground();
});