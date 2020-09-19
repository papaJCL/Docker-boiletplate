# Docker-boilerplate
A react full stack boilerplate login application deployed with Docker. 

![Image of Login](https://raw.githubusercontent.com/papaJCL/Docker-boiletplate/master/loginpic.png)


# Getting Started
1. Install requirements & checkout repo
2. Build devbox container 
- ```~cd dev -./build```
3. Build docker containers 
- ```cd launch``` 
- ```docker-compose-up```
    - add the -d flag if you want to detach from the output
        - <ctrl + c> if you didn't detach
        - "docker-compose down" if you did detach
        
## Additional Comments
Hot-loading currently not supported. To load new changes do:
- ```docker exec -it node1 sh ```
- ```npm run build```
- Then refresh page
- You can just do ```npm run build``` everytime after you are loading into the docker container

To open mySQL terminal:
- ``` docker exec -it roach1 ./cockroach sql --insecure```
- Once in SQL terminal to view table do:
- ```use login;```
- ```select * from users;```




# Requirements
- Install docker
    - https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04
 - Install docker-compose
    - https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04

