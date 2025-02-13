# Intro
![load_balaning](resources/ecs_load_balancing.jpg)  

![K8s_overview](resources/k8s_overview.jpg)  

![K8s_wat](resources/k8s_wat.jpg)  
  
![K8s_dev_prod](resources/k8s_dev_prod.jpg)  

![K8s_local](resources/k8s_local.jpg)  

![K8s_local_2](resources/k8s_local_2.jpg)

# Goal: run the [**multi-container app**](./https://github.com/AndLydakis/FibCalc) with K8s

![K8s_goal_1](resources/k8s_goal.jpg)   

![K8s_goal_2](resources/k8s_goal_2.jpg)
    
![K8s_goal_2](resources/k8s_goal_3.jpg)   

# Object Types  

![K8s_object_types](resources/k8s_config_types.jpg)
  
![K8s_object_types_2](resources/k8s_object_types_2.jpg)  

![K8s_object_types_2](resources/k8s_object_types_3.jpg)  

![K8s_object_deplo](resources/k8s_deployment.jpg)  

# Pods  
  
* For grouping containers that are required to be deployed together/have similar purpose  

![K8s_pods_1](resources/k8s_pod_1.jpg)    

**Good Example**

![K8s_pods_good_example](resources/k8s_pod_good.jpg)

# Services  

![K8s_services_1](resources/k8s_services_1.jpg)  

# Deployments

![K8s_deploy](resources/k8s_deployment_2.jpg)

### Node Port Service Config  

![K8s_nodeport](resources/k8s_nodeport_service.jpg)  

![K8s_nodeport_ports](resources/k8s_nodeport_ports.jpg)  

### Sample App

![K8s_full_app](resources/k8s_full_app.jpg)  

# Api Versions  

![K8s_api_version](resources/k8s_api_version.jpg)   
 
### Feed config to kubectl
 ```bash
kubectl apply -f <path to file>
 ```

### Get status of object
 ```bash
kubectl get <type of objects <pods, services>>
 ```

### Object Introspection
 ```bash
kubectl describe <object type> <opional object name>
 ```

### Object Deletion
 ```bash
kubectl delete -f <path to config file>
 ```

### Update Deployment version
 ```bash
kubectl set image <object type>/<object name> <container name>=<new image to use>
 ```

### Create a secret
 ```bash
kubectl create secret generic <secret_name> --from-literal key=value
 ```

### Get IP of cluster
```bash
minikube ip
```

### Connect Local Docker to docker in nodes
```bash
eval $(minikube docker-env)
```  

![K8s_docker_env](resources/k8s_docker_env.jpg)   