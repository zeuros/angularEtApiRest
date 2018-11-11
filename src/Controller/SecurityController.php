<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations as FOSRest;
use Symfony\Component\HttpFoundation\Response;
use FOS\OAuthServerBundle\Model\ClientManagerInterface;
use Swagger\Annotations as SWG;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Security managment controller.
 * @SWG\Tag(name="Babedouwah eh wey")
 */
class SecurityController extends FOSRestController
{

  private $client_manager;

  public function __construct(ClientManagerInterface $client_manager)
  {
    $this->client_manager = $client_manager;
  }

  /** 
   * login un user
   * @FOSRest\Post("/api/login") 
   *
   * @return Response
   */ 
   public function loginAction(Request $request) 
   {

      $data = json_decode($request->getContent(), true);

      return $this
        ->container
        ->get('myproject_user.user_service') 
        ->login($data['username'], $data['password']); 
   }


  /**
   * Create Client.
   * @FOSRest\Post("/createClient")
   *
   * @return Response
   */
  public function AuthenticationAction(Request $request)
  {

    $data = json_decode($request->getContent(), true);

    if (empty($data['redirect-uri']) || empty($data['grant-type'])) {
      return $this->handleView($this->view($data));
    }

    $clientManager = $this->client_manager;
    $client = $clientManager->createClient();
    $client->setRedirectUris([$data['redirect-uri']]);
    $client->setAllowedGrantTypes([$data['grant-type']]);
    $clientManager->updateClient($client);

    $rows = [
      'client_id' => $client->getPublicId(), 'client_secret' => $client->getSecret()
    ];
    return $this->handleView($this->view($rows));
  }

}
