<?php
/**
 * Inventory class
 *
 */

namespace Saatva\Inventorysaver;

class Inventory
{
    private $slots; 
    private $mattresses;

    public function __construct($capacity) {
    	//array of mattresses stored here so far
        $this->mattresses = array();
        
        $this->slots = array();
        for($i = 0; $i < $capacity; $i++) {
            $this->slots[$i] = false;
        }
    }

    public function getMattresses() {
        return $this->mattresses;
    }
    
    //check specific slots
    public function checkSlot($slotNum) {
        if($this->slots[$slotNum] !== false) {
               return false;
         }
        
        return true;
    }

    //put mattress in this slot
    public function store(Mattress $mattress) {

        for($i=0; $i < count($this->slots); $i++) {

            if(!is_object($this->slots[$i])) {

                $this->slots[$i] = $mattress;
                $this->mattresses[$mattress->getName()] = $mattress;
                return;
            }
            
            
        }
        throw new \Exception("No more slots available at this space, cannot store " . $mattress->getName() . "\n");
    }

    public function __toString() {
        return print_r($this->slots, true);
    }
}
