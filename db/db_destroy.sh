#!/bin/bash
docker stop roachdata1
docker container rm roachdata1
docker stop roachdata2
docker container rm roachdata2
docker stop roachdata3
docker container rm roachdata3
docker network rm dbnet

echo Now delete all of the data directories in cocroach-data
echo sudo rm -r $(pwd)/cocroach-data/*
