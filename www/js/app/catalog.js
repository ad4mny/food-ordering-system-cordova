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
                    '     <div class="col border-bottom pb-2">' +
                    '                        <div class="row px-3">' +
                    '                            <div class="col-3"' +
                    '                                style="background-image: url(\'' + img + '\'); background-size: cover;">' +
                    '                            </div>' +
                    '                            <div class="col position-relative">' +
                    '                                <p class="text-capitalize mb-0 fw-bold">' + data[i].cd_name + '</p>' +
                    '                                <small class="text-capitalize text-muted">' + data[i].cd_name + '\'s Shop</small><br>' +
                    '                                <small class="text-truncate">' + data[i].cd_desc + '</small><br>' +
                    '                                <small class="text-success">RM ' + data[i].cd_price + '</small><br>' +
                    '                                <div class="position-absolute top-0 end-0 me-1 mt-1">' +
                    '                                    <button class="btn btn-success btn-sm" id="addOrder" value="' + data[i].cd_id + '">' +
                    '                                        <i class="fas fa-plus fa-fw"></i>' +
                    '                                    </button>' +
                    '                                </div>' +
                    '                            </div>' +
                    '                        </div>' +
                    '                    </div>'
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