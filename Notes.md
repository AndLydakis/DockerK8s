### Notes

* **Useful Commands**
    * **List docker containers**
     ```bash
    docker ps --all
    ```  
  
    * **Create container**
    ```bash
    docker create <container_id>
    ```  
  
    * **Start container**
    ```bash
    docker start -a <container_id>
    ```
  
    * **Create and Start container**
    ```bash
    docker run <container_id>
    ```  
  
    * **Run command in running container**
    ```bash
    docker exec -it <container_id> <command>
    ```  
  
    * **Get shell access in running container**
    ```bash
    docker exec -it <container_id> sh
    ```  
  
    * **Start container with shell access**
    ```bash
    docker run -it <container_id> sh
    ```  
    
    * **Start detached container**
    ```bash
    docker run -d <container_id>
    ```  
      
    * **Build image**
    ```bash
    docker build <build context>
    ```  
  
    * **Build image with tag**
    ```bash
    docker build -t <docker_id/project:version> <build context>
    ```  

    * **Save modified container **
    ```bash
    docker commit -c 'CMD ["<default_command>"]' <running_container_id>
    ```
  
    * **Docker Port forwarding**
    ```bash
    docker run -p <local port>:<container port> <image id>
    ```   
  
    * **Avoid unnecessary rebuilds**
    ```bash
    # add build directories
    COPY ./ ./
    # install dependencies
    RUN npm install
    ```   
    can change to
    ```bash
    # add build directories
    COPY ./<unmodified> file ./
    # install dependencies
    RUN npm install
    # copy modified files
    COPY ./ ./
    ``` 
    * Nodes created with docker compose are by default on the same network. Port mapping specified is for host network
    
    * **docker-compose commands**
        * docker-compose up --build: docker build . && docker run <my_image> 
        * docker-compose up: docker run <my_image> 
        * docker-compose up -d : run detached 
        * docker-compose down: stop docker compose container
        
    * **Restart Container Automatically**
        * Restart Policies - add to docker-compose.yaml per service:
            * no: never restart
            * always: always restart
            * on-failure: restart if container stops with error code (exit code!=0)
            * unless-stopped: always restart unless we forcibly stop it
    ```yaml
    service_name:
      restart: always
    ```