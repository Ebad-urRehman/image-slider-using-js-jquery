$(document).ready(function() {
    var current = 0;
    var slider = $('#slider')
    var slider_images = slider.find('.slide')
    var slider_images_array = slider_images.toArray()

    $(slider_images_array[current]).addClass('active')

    var left_button = $('<button>')
        .addClass('left-button')
        .text('<')
        .on('click', function() {
            $(slider_images_array[current]).removeClass('active');
            current = (current - 1 + slider_images_array.length) % slider_images_array.length;
            $(slider_images_array[current]).addClass('active');
        });

        var right_button = $('<button>')
        .addClass('right-button')
        .text('>')
        .on('click', function() {
            $(slider_images_array[current]).removeClass('active');
            current = (current + 1) % slider_images_array.length;
            $(slider_images_array[current]).addClass('active');
        });

        slider.append(left_button);
    slider.append(right_button);
})