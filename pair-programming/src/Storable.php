<?php
/**
 * Storable interface
 *
 * @copyright (c) 2018, Saatva
 * @author Evan Huston <ehuston@saatva.com>
 */

namespace Saatva\Inventorysaver;

Interface Storable
{
    public function getCapacity();
    public function getName();
}
