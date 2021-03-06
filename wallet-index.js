$(document).ready(function() {

    try {
        $('.slidedeck').slidedeck();
    } catch(err) {}

    try {
        //Popovers!
        $("a[rel=popover]")
            .popover({
                offset: 10
            })
            .click(function(e) {
                e.preventDefault()
            });
    } catch(err) {}

    $('#sms-depost-button').click(function() {
        loadScript('/Resources/wallet/deposit/deposit.js', function() {
            showDepositModal($('#sms-depost-address').val());
        });
    });

    $('#youtube-preview').click(function() {
        $('#youtube-preview').empty();

        $('#youtube-preview').append('<iframe width="100%" height="256" src="https://www.youtube.com/embed/Um63OQz3bjo?autohide=1&controls=0&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });

    $('#forgot-email-btn').click(function() {
        window.location = root + 'wallet/forgot-identifier?email='+ $('#forgot-email').val();
    });

    $('#download-instructions-btn').click(function () {
        $('#download-instructions').toggle(400);
    });

    if ($('#slideshow').length > 0) {
        var i = 0;
        var changeImage = function() {
            ++i;

            if (i == 3)
                i = 0;

            $('#slideshow img').hide();

            $('#slideshow img').eq(i).fadeIn();
        };

        setInterval(changeImage, 7000);
    }
});