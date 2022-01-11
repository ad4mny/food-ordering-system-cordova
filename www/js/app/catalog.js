window.addEventListener('load', (event) => {

    $.ajax({
        type: "POST",
        url: web_links + "api/get_catalog",
        dataType: 'json',
        beforeSend: function () {
            $('#loadGif').show();
        },
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                if (data[i].cd_img != null) {
                    var img = web_links + 'assets/catalog/' + data[i].cd_img;
                } else {
                    var img = 'img/catalog_placeholder.png';
                }

                $('#display').append(
                    '                <div class="col border-top pt-2 ">' +
                    '                   <a href="#" class="text-decoration-none text-reset" id="addOrder" value="' + data[i].cd_id + '">' +
                    '                        <div class="row px-3">' +
                    '                            <div class="col-3"' +
                    '                                style="background-image: url(\'' + img + '\'); background-size: cover;">' +
                    '                            </div>' +
                    '                            <div class="col position-relative">' +
                    '                                <h5 class="text-capitalize mb-0 fw-bold">' + data[i].cd_name + '</h5>' +
                    '                                <p class="text-muted text-wrap">' + data[i].cd_desc + '</p>' +
                    '                                <div class="d-flex justify-content-between">' +
                    '                                   <small class="text-capitalize text-muted fw-lighter">' +
                    data[i].ud_full_name + '\'s Shop</small><br>' +
                    '                                   <h5 class="text-success fw-bold mb-0">' +
                    '                                        RM ' + data[i].cd_price +
                    '                                   </h5>' +
                    '                                </div>' +
                    '                            </div>' +
                    '                        </div>' +
                    '                    </a>' +
                    '                </div>'
                );
            }
        },
        error: function () {
            $('#display').html('<div class="row"><div class="col"><p class="my-3 text-muted">Internal server error, please reload.</p></div></div>');
        },
        complete: function () {
            $('#loadGif').hide();
        }

    });



})