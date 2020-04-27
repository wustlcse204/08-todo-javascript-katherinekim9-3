var apiKey = "aa121d-107b52-b09275-299044-f4f58d";

$(document).ready(function () {

    $('#list-items').html(localStorage.getItem('listItems')); //list function

    sortList();

    $('.add-items').submit(function (event) {
        event.preventDefault();

        var item = $('#todo-list-item').val();

        if (item) {
            $('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");

            localStorage.setItem('listItems', $('#list-items').html());
            sortList();
            $('#todo-list-item').val("");

        }

    });

    $(document).on('change', '.checkbox', function () {
        if ($(this).attr('checked')) {
            $(this).removeAttr('checked');
        } else {
            $(this).attr('checked', 'checked');
        }

        $(this).parent().toggleClass('completed');

        localStorage.setItem('listItems', $('#list-items').html());
        sortList();
    });

    $(document).on('click', '.remove', function () {
        $(this).parent().remove();

        localStorage.setItem('listItems', $('#list-items').html());
        sortList();
    });

//Assignment9assignmentsort
    function sortList() {
        var list, i, switching, b, shouldSwitch;
        list = document.getElementById("list-items");
        switching = true;
        while (switching) {
            switching = false;
            b = list.getElementsByTagName("LI");
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
    }

});
