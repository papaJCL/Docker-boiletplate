#!/bin/bash
# https://www.cockroachlabs.com/docs/stable/start-a-local-cluster-in-docker-linux.html
: ${NETWORK:=dbnet}
: ${TYPE:=bridge}
#Create the network, switch to overlay when we use swarm
docker network create -d $TYPE --attachable $NETWORK

#Create first node
docker run -d --name=roachdata1	--hostname=roachdata1 --net=$NETWORK -p 26257:26257 -p 8080:8080 -v "${PWD}/cockroach-data/roachdata1:/cockroach/cockroach-data" cockroachdb/cockroach:v20.1.3 	start --insecure --join=roachdata1,roachdata2,roachdata3 

docker run -d --name=roachdata2 --hostname=roachdata2 --net=$NETWORK -v "${PWD}/cockroach-data/roachdata2:/cockroach/cockroach-data" cockroachdb/cockroach:v20.1.3 start --insecure --join=roachdata1,roachdata2,roachdata3
docker run -d --name=roachdata3 --hostname=roachdata3 --net=$NETWORK -v "${PWD}/cockroach-data/roachdata3:/cockroach/cockroach-data" cockroachdb/cockroach:v20.1.3 start --insecure --join=roachdata1,roachdata2,roachdata3

#init cluster by executing a command into the leader
docker exec -it roachdata1 ./cockroach init --insecure
