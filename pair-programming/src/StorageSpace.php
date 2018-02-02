<?php
/**
 * Conference Room class
 *
 * @copyright (c) 2018, Saatva
 * @author Evan Huston <ehuston@saatva.com>
 */

namespace Saatva\Inventorysaver;

class StorageSpace implements Storable
{
    private $capacity;
    private $name;
    private $inventory;

    public function __construct($name, $capacity) {
        $this->capacity = $capacity;
        $this->name = $name;
        $this->inventory = new Inventory($capacity);
    }

    public function checkAvailability() {

        if (count($this->inventory) < $this->capacity) {
            return true;
        }
        
        return false;
    }
    
    public function getCapacity() {
        return $this->capacity;
    }

    public function getName() {
        return $this->name;
    }

    //attempt to store a mattress in this space
    public function store(Mattress $mattress) {

        //block off this inventory slot
        $this->inventory->store($mattress);
    }

    public function getInventory() {
        return $this->inventory;
    }

    public function __toString() {
        return "Name: " . $this->name . " Capacity: " . $this->capacity . "\nInventory:\n" . $this->inventory;
    }
}
