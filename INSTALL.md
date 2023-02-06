## Installation

1. `docker-compose up -d`
2. Make sure there are no errors and both containers (`mediawiki` and `mysql`) are up and running. In case of any errors or containers crashing, see `docker logs <container id>`
3. Open `http://localhost:8080` and complete a fresh install of Mediawiki.
4. Once completed you will be prompted to download a file called `LocalSettings.php`. Download it and mount it into the `mediawiki` container by uncommenting this line 
```yaml
      # - ./LocalSettings.php:/var/www/html/LocalSettings.php:ro
```
in your `docker-compose.yaml`. Where `./LocalSettings.php` is the path to the downloaded file on your host machine.
5. Add 
```php
wfLoadExtension( 'ExchangeRates' );
```
to the bottom of `LocalSettings.php`.


6. `docker-compose down && docker-sompose up -d`