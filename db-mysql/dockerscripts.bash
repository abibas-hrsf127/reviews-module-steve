# https://phoenixnap.com/kb/mysql-docker-container
docker pull mysql/mysql-server:5.7
docker images
docker run --name=mysqldb -d mysql/mysql-server:5.7
docker ps -a
docker logs mysqldb
usocikJixOHupd4kk0jawUPOgONN
docker exec -it mysqldb mysql -uroot -pexamplepw
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'examplepw';



docker run \
--detach \
--name=mysqldb2 \
--env="MYSQL_ROOT_PASSWORD=examplepw MYSQL_DATABASE=adidas_fec" \
--publish 6603:3306 \
--volume=$(pwd)/db-mysql/storage/docker/mysql-data:/var/lib/mysql \
mysql/mysql-server:5.7

docker ps -a
open http://localhost:6603
docker logs mysqldb
docker exec -it mysqldb2 mysql -uroot -pexamplepw
docker exec -it mysqldb bash
cd /etc/conf.d
cd /var/lib/mysql
docker exec mysqldb npm run seed
docker inspect mysqldb



mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
mkdir -p /storage/docker/mysql-data

docker ps -a
docker rm -f mysqldb
docker rmi mysql alexzhaohong/reviewsfecserver 
