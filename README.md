The simple Rest API application example build on [Symfony 4](https://symfony.com/) framework.

## api Installation
### 1. Clone repository
```bash
git clone https://github.com/zeuros/angularEtApiRest
```
### 2. Dependencies installation
Install project dependencies with composer using the following command in the project folder
```bash
composer install
```
### 3. Configuration
Use this command to copy the environment variables settings file.
```bash
cp .env.dist .env
```
Then, open .env file and enter database credentials.

### Run 
```bash
php bin/console doctrine:schema:create
```
 to create necessary database structure.


### Create app client
Un-comment the create-client section in SecurityController@AuthenticationAction()
Then
```bash
curl --request POST \
  --url https://localhost:8000/createClient \
  --header 'content-type: application/json' \
  --data '{"redirect-uri":"free.fr","grant-type":"password"}'
```
And save your client tokens you just created to the front app at authentication.service.ts@constructor() --> clientID & clientSecret

### Create users 
Insert them in database with 
```bash
php bin/console fos:user:create testuser
```

### test obtaining a session token with
```bash
curl --request POST \
  --url https://localhost:8000/oauth/v2/token \
  --header 'content-type: application/json' \
  --data '{
  	"client_id": "your client id",
  	"client_secret": "your client secret",
	"grant_type":"password",
	"username":"username",
	"password":"userpass"
}'
```

### test using your session token with
```bash
curl --request GET \
  --url https://localhost:8000/api/movies \
  --header 'authorization: Bearer [the session token you got with previous request]'
```
Which should return 5 movies json formatted.


### try
Visit [doc url](https://localhost:8000/api/doc) to check out the auto-generated docs


## front Installation

...



## Resources

[back tuto oauth](https://github.com/romfizz898/SF4REST)
[front auth](https://blog.eleven-labs.com/fr/angular2-symfony3-comment-creer-rapidement-systeme-dauthentification/)