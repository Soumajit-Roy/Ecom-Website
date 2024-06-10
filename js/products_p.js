$(document).ready(function() {
    // Update price range labels
    $('#priceRange').on('input', function() {
        var price = $(this).val();
        $('#priceMax').text(price);
    });

    // Filter products
    $('#categoryFilter, #colorFilter, #sizeFilter, #priceRange').on('change input', function() {
        filterProducts();
    });

    // Sort products
    $('#sortOptions').on('change', function() {
        sortProducts();
    });

    function filterProducts() {
        var category = $('#categoryFilter').val();
        var color = $('#colorFilter').val();
        var size = $('#sizeFilter').val();
        var price = $('#priceRange').val();

        $('#productList .col-md-4').each(function() {
            var productCategory = $(this).data('category');
            var productColor = $(this).data('color');
            var productSize = $(this).data('size');
            var productPrice = $(this).data('price');

            if ((category === '' || category === productCategory) &&
                (color === '' || color === productColor) &&
                (size === '' || size === productSize) &&
                (price === '' || productPrice <= price)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    function sortProducts() {
        var sortOption = $('#sortOptions').val();
        var products = $('#productList .col-md-4');

        products.sort(function(a, b) {
            var an = $(a).find('.card-title').text();
            var bn = $(b).find('.card-title').text();
            var ap = parseInt($(a).find('.card-text').text().replace('$', ''));
            var bp = parseInt($(b).find('.card-text').text().replace('$', ''));
            var ar = $(a).find('.fas.fa-star').length;
            var br = $(b).find('.fas.fa-star').length;

            if (sortOption === 'az') {
                return an > bn ? 1 : -1;
            } else if (sortOption === 'mostRated') {
                return br - ar;
            } else if (sortOption === 'priceLowHigh') {
                return ap - bp;
            } else if (sortOption === 'priceHighLow') {
                return bp - ap;
            }
        });

        $('#productList').html(products);
    }
});
