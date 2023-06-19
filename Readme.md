# Home Assignment
This guide will list down resources and various links as per requirement of assignment.

## Links of deliverables

- [Code Repository ](https://github.com/ranamanoj114/Kubernetes_micro_service)
- [Docker hub URL](https://hub.docker.com/repository/docker/manojrana114/kubernetes_micro_service/general)
- Service API URL: This will be available when we deploy app on GCP or at some other cloud provider. Please contact me if app needs to be verified.
- [Screen Recording]()

## Installation Steps
Apply yml files as mentioned below.

```sh
1. Kubectl apply -f config_map.yml
2. Kubectl apply -f secrets.yml
3. Kubectl apply -f storage.yml
4. Kubectl apply -f pvc.yml
5. Kubectl apply -f db.yml
6. Kubectl apply -f db_services.yml
7. Kubectl apply -f app.yml
8. Kubectl apply -f app_service.yml
```

One above steps are executed, find the public url from GCP or used cloud provider.



<img width="1421" alt="Screenshot 2023-06-19 at 10 58 57 AM" src="https://github.com/ranamanoj114/Kubernetes_micro_service/assets/114919655/1baa92bc-8da8-4cb2-869d-48a85fbb465d">

There are two service exposed in app to test the assignment.
1. To create table and insert data into it (/insert)
2. Get data from table (/)

