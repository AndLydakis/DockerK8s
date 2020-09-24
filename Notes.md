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
    
    ```bash
    docker build -t <docker_id/project:version> -f <dockerfile_path> <build context>
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
    
    * **Attaching**:
        * docker attach attaches to stdin of the first running process (id=1)
        
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
    
* Docker Volumes
    * **Set mapping from folder in host to folder in container**
    ```bash
    docker run - p 3000:3000 -v <folder in container> -v $(pwd):/app <image_id>    
    ```
    first -v bookmarks folder in container so it doesn't look for it in host
    second -v takes working directory and maps it to container "/app" directory
    
    * It's good practice to still COPY in dockerfiles in case you no longer use docker-compose even though volumes      do the same thing
  
* **npm related**
    * **npm run start**: Start dev server
    * **npm run test**: Run tests 
    * **npm run build**: Build production version oof app
    
* [**Nginx for production env**](https://www.nginx.com/)