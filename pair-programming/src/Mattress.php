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
    private $size;
    private $region;

    public function __construct($name, $size, $region) {
        $this->name = $name;
        $this->size = $size;
        $this->region = $region;
    }

    public function getName() {
        return $this->name;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function getRegion()
    {
        return $this->region;
    }

 }
