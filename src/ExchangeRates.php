<?php
/**
 * Main extension class
 *
 * @file
 * @ingroup Extensions
 */
namespace MediaWiki\Extension\ExchangeRates;

use SpecialPage;

class ExchangeRates extends SpecialPage {
    public function __construct() {
        parent::__construct('ExchangeRates');
    }

    public function execute($subPage) {
        $output = $this->getOutput();
        $output->addModuleStyles("exchange.rates");
        $output->addModules("exchange.rates");

        $output->addHTML('<div id="exchange_rates"></div>');
    }
}
