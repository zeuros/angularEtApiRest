<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Form\MovieType;
use Doctrine\Common\Persistence\ObjectManager;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\Model;
use Nelmio\ApiDocBundle\Annotation\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Swagger\Annotations as SWG;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Movie controller.
 * @Route("/api", name="api_")
 * @SWG\Tag(name="Les flims")
 */
class MovieController extends FOSRestController
{   
   /**
    * Lists all Movies.
    *
    * This thing is not really a comment but something alike
    * 
    * @Rest\Get("/movies")
    * @SWG\Response(
    *     response=200,
    *     description="",
    *     @SWG\Schema(
    *         type="array",
    *         @SWG\Items(ref=@Model(type=Movie::class, groups={"full"}))
    *     )
    * )
    * 
    * @return Response
    */
    public function getMovieAction()
    {
        $repository = $this->getDoctrine()->getRepository(Movie::class);
        $movies = $repository->findall();

        return $this->handleView($this->view($movies));
    }

   /**
    * Create Movie.
    * 
    * @Route("/movies/new", methods="POST")
    * 
    * @SWG\Response(
    *     response=200,
    *     description=""
    * )
    *
    *  @return Response
    */
    public function create(Request $request, ObjectManager $manager)
    {
        $movieRepository = $this->getDoctrine()->getRepository(Movie::class);
        $request = $this->transformJsonBody($request);

        if (! $request) {
            return $this->respondValidationError('Please provide a valid request!');
        }

        // validate the title
        if (! $request->get('title')) {
            return $this->respondValidationError('Please provide a title!');
        }

        // persist the new movie
        $movie = new Movie;
        $movie->setTitle($request->get('title'));
        $movie->setDescription($request->get('description') ?? null);
        $movie->setCount(0);
        $manager->persist($movie);
        $manager->flush();

        return $this->respondCreated($movieRepository->transform($movie));
    }
}
