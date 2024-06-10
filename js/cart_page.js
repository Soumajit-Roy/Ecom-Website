$(document).ready(function() {
    // Increment quantity
    $('.quantity-control .btn-light').click(function() {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val());
        if ($(this).text() === '+') {
            count += 1;
        } else {
            if (count > 1) {
                count -= 1;
            }
        }
        $input.val(count);
    });

    // Remove item
    $('.btn-danger').click(function() {
        $(this).closest('.cart-item').remove();
    });
});
