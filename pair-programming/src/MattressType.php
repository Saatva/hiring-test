<?php
/**
 * Mattress class
 *
 * @copyright (c) 2018, Saatva
 * @author Evan Huston <ehuston@saatva.com>
 */

namespace Saatva\MattressType;

class MattressType
{

    public function __construct($name, $size) {

        $this->size = $size;
    }

    public function getSize()
    {
        return $this->size;
    }

 }
