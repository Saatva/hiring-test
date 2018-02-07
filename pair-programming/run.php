<?php
namespace Saatva\Inventorysaver;

/* Bootstrap autoloader */
require "vendor/autoload.php"; 

$manager = new StorageSpaceManager();

//create storage spaces
$spaces = array(
    new StorageSpace('PurpleRoom', 3, 1),
    new StorageSpace('GreenRoom', 3, 2),
    new StorageSpace('BlueRoom', 3, 1)
);

foreach($spaces as $space) {
    $manager->registerStorageSpace($space);
}

//create mattresses
$mattress0 = new Mattress("INV-0", 'queen', 1);
$mattress1 = new Mattress("INV-1", 'queen', 1);
$mattress2 = new Mattress("INV-2", 'king', 2);
$mattress3 = new Mattress("INV-3", 'queen', 1);
$mattress4 = new Mattress("INV-4", 'twin', 3);

//store mattresses in spaces
$space = $manager->storeMattress('PurpleRoom', $mattress0);
//print_r($space->getInventory());

$space = $manager->storeMattress('PurpleRoom', $mattress1);
//print_r($space->getInventory());
//
$space = $manager->storeMattress('PurpleRoom', $mattress2);
//print_r($space->getInventory());

$space = $manager->storeMattress('BlueRoom', $mattress3);

print_r($manager->getMattressesForRegion(1, 'queen'));

//print_r($manager->getSpacesForRegion(1));

//$space = $manager->storeMattress('PurpleRoom', $mattress3);
//print_r($space->getInventory());

// $space = $manager->storeMattress('PurpleRoom', $mattress4);
// print_r($space->getInventory());
