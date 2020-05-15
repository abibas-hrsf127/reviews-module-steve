#! /bin/bash

docker-compose up -d
chmod +x seed/seed.sh
docker exec reviews-module_mysql_1 /seed/seed.sh
