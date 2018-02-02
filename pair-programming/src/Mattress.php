<?php
/**
 * Mattress class
 *
 * @copyright (c) 2018, Saatva
 * @author Evan Huston <ehuston@saatva.com>
 */

namespace Saatva\Inventorysaver;

class Mattress
{
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }

 }
