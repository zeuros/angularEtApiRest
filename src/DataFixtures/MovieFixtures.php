<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use \App\Entity\Movie;

class MovieFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create();

        for ($i=0; $i < 5; $i++) { 
            $movie = new Movie();
            $movie->setName($faker->name);
            $movie->setDescription($faker->sentence());

            $manager->persist($movie);
        }

        $manager->flush();
    }
}
