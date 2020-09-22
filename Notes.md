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
  