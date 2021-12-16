window.addEventListener('load', (event) => {

    $.ajax({
        type: "POST",
        url: web_links + "api/get_table",
        dataType: 'json',
        beforeSend: function () {
            $('#loadGif').show();
        },
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                if (data[i]['td_ud_id'] == null) {
                    $('#display').append(
                        '<div class="col-6">' +
                        '  <button class="btn btn-outline-success p-3 w-100" value="' + data[i]["td_id"] + '" id="bookTable">' +
                        '     <h4> Table ' + data[i]["td_name"] + ' </h4>' +
                        '     <h6> Available </h6>' +
                        '   </button>' +
                        '</div>'
                    );
                } else if (user_token != null && data[i]['td_ud_id'] == user_token.ud_id) {
                    $('#display').append(
                        '<div class="col-6">' +
                        '  <button class="btn btn-success p-3 w-100" value="' + data[i]["td_id"] + '" id="removeTable">' +
                        '     <h4> Table ' + data[i]["td_name"] + ' </h4>' +
                        '     <h6> Your table </h6>' +
                        '   </button>' +
                        '</div>'
                    );
                } else {
                    $('#display').append(
                        '<div class="col-6">' +
                        '  <button class="btn btn-danger p-3 w-100" disabled>' +
                        '     <h4> Table ' + data[i]["td_name"] + ' </h4>' +
                        '     <h6> Unavailable </h6>' +
                        '   </button>' +
                        '</div>'
                    );
                }
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

$(document).on('click', '#bookTable', function () {

    var table_id = this.value;

    if (user_token !== null) {
        $.ajax({
            type: "POST",
            url: web_links + "api/set_booking_table",
            data: {
                table_id: table_id,
                uid: user_token.ud_id
            },
            dataType: 'json',
            success: function (data) {
                if (data == false) {
                    alert(data);
                } else {
                    location.replace("table.html");
                }
            }

        });
    } else {
        alert('Please login first!')
    }

});

$(document).on('click', '#removeTable', function () {

    var table_id = this.value;

    if (user_token !== null) {
        $.ajax({
            type: "POST",
            url: web_links + "api/set_remove_table",
            data: {
                table_id: table_id,
                uid: user_token.ud_id
            },
            dataType: 'json',
            success: function (data) {
                if (data == false) {
                    alert(data);
                } else {
                    location.replace("table.html");
                }
            }

        });
    } else {
        alert('Please login first!')
    }

});