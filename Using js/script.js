window.onload = function() {
    var current=0;
    slider = document.getElementById('slider')
    slider_images = slider.querySelectorAll('.slide')
    slider_images_array = Array.from(slider_images)
    console.log(slider_images)
    slider_images_array[current].classList.add('active');

    left_button = document.createElement('button')
    right_button = document.createElement('button')

    left_button.setAttribute('class', 'left-button')
    right_button.setAttribute('class', 'right-button')

    left_button.innerText = '<'
    right_button.innerText = '>'

    left_button.addEventListener('click', function() {
        slider_images_array[current].classList.remove('active');
        if (current != 0) {
            current = current - 1;
        }
        else {
            current = slider_images_array.length - 1;
        }
        slider_images_array[current].classList.add('active');
        console.log(slider_images_array[current])
    
    })

    right_button.addEventListener('click', function() {
        slider_images_array[current].classList.remove('active');
        if (current != slider_images_array.length - 1) {
            current = current + 1;
        }
        else {
            current = 0;
        }
        slider_images_array[current].classList.add('active');


    })

    slider.append(left_button)
    slider.append(right_button)

}