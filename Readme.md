# Home Assignment
This guide will list down resources and various links as per requirement of assignment.

## Links of deliverables

- [Code Repository ](https://github.com/ranamanoj114/Kubernetes_micro_service)
- [Docker hub URL](https://hub.docker.com/repository/docker/manojrana114/kubernetes_micro_service/general)
- Service API URL: This will be available when we deploy app on GCP or at some other cloud provider. Please contact me if app needs to be verified.
- [Screen Recording]()

## Installation Steps
Apply yml files supplied in k8s directory as mentioned below.

```sh
1. kubectl apply -f config_map.yml
2. kubectl apply -f secrets.yml
3. kubectl apply -f storage.yml
4. kubectl apply -f pvc.yml
5. kubectl apply -f db.yml
6. kubectl apply -f db_service.yml
7. kubectl apply -f app_deployment.yml
8. kubectl apply -f app_service.yml
```

Once above steps are executed, find the public url from GCP or used cloud provider.



<img width="1421" alt="Screenshot 2023-06-19 at 10 58 57 AM" src="https://github.com/ranamanoj114/Kubernetes_micro_service/assets/114919655/1baa92bc-8da8-4cb2-869d-48a85fbb465d">

There are two service exposed in app to test the assignment.
1. To create table and insert data into it (/create)
2. Get data from table (/)

