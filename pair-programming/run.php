<?php
namespace Saatva\Inventorysaver;

/* Bootstrap autoloader */
require "vendor/autoload.php"; 

$manager = new StorageSpaceManager();

//create storage spaces
$spaces = array(
    new StorageSpace('PurpleRoom', 3),
    new StorageSpace('GreenRoom', 3)
);

foreach($spaces as $space) {
    $manager->registerStorageSpace($space);
}

//create mattresses
$mattress0 = new Mattress("INV-0");
$mattress1 = new Mattress("INV-1");
$mattress2 = new Mattress("INV-2");
$mattress3 = new Mattress("INV-3");
$mattress4 = new Mattress("INV-4");

//store mattresses in spaces
$space = $manager->storeMattress('PurpleRoom', $mattress0);
print_r($space->getInventory());

$space = $manager->storeMattress('PurpleRoom', $mattress1);
print_r($space->getInventory());

$space = $manager->storeMattress('PurpleRoom', $mattress2);
print_r($space->getInventory());

$space = $manager->storeMattress('PurpleRoom', $mattress3);
print_r($space->getInventory());

$space = $manager->storeMattress('PurpleRoom', $mattress4);
print_r($space->getInventory());
