<?php


if (!function_exists('convertDollarsToCents')) {
    function convertDollarsToCents($value): int
    {
        $dollars = str_replace('$', '', $value);
        $dollars = (float)str_replace(',', '', $dollars);
        $cents = bcmul($dollars, 100);
        return $cents;
    }
}
