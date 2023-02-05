( function ( mw, $ ) {
    'use strict';

    function updateExchangeRates() {
        let url = 'https://api.exchangerate-api.com/v4/latest/USD';
        $.ajax({
            url: url,
            dataType: 'json',
            success: function ( data ) {
                let exchangeRates = data.rates;
                let czk = exchangeRates.CZK;
                let eur = exchangeRates.EUR;
                let gbp = exchangeRates.GBP;
                $('#exchange_rates').html(
                    '<table><tr><td>USD/CZK:</td><td>' + (1/czk).toFixed(4) + '</td></tr>' +
                    '<tr><td>EUR/CZK:</td><td>' + (eur/czk).toFixed(4) + '</td></tr>' +
                    '<tr><td>GBP/CZK:</td><td>' + (gbp/czk).toFixed(4) + '</td></tr></table>'
                );
            }
        });
    }

    $( document ).ready( function () {
        updateExchangeRates();
        setInterval(updateExchangeRates, 60 * 1000);
    });

}( mediaWiki, jQuery ) );
