<?php
/**
 * Conference room class
 *
 * @copyright (c) 2018, Saatva
 * @author Evan Huston <ehuston@saatva.com>
 */

namespace Saatva\Inventorysaver;

class StorageSpaceManager
{
    private $spaces;

    /**
     *
     * @param \Saatva\Inventorysaver\Storable $storageSpace
     */
    public function registerStorageSpace(Storable $storageSpace) {
        $this->spaces[$storageSpace->getName()] = $storageSpace;
    }

    /**
     * @return array <Storable>
     */
    public function getAllStorageSpaces() {
        return $this->spaces;
    }

    public function getSpacesForRegion($region)
    {
        $results = [];
        foreach($this->spaces as $space) {
            if ($space->getRegion() === $region) {
                $results[] = $space;
            }
        }

        return $results;
    }

    public function getMattressesForRegion($region, $size)
    {
        $results = [];
        foreach ($this->spaces as $space) {
            if ($space->getRegion() === $region) {
                $results[] = $space->getInventory()->getMattressesBySize($size);
            }
        }

        return $results;
    }

    /**
     *
     * @param type $spaceName
     * @param \Saatva\Inventorysaver\Mattress $mattress
     * @return \Saatva\Inventorysaver\StorageSpace
     * @throws \Exception
     */
    public function storeMattress($spaceName, Mattress $mattress) {
        if (!isset($this->spaces[$spaceName])) {
            throw new \Exception("Storage space requested does not exist");
        }

        //attempt to store a mattress
        $this->spaces[$spaceName]->store($mattress);

		//idea: catch & try other storage spaces?

        return $this->spaces[$spaceName];
    }

}
