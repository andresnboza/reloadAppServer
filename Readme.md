# Backend

## To access the mongo service use

```bash
mongodb.default.svc
```

## To coonect to the mongo database use

```bash
kubectl port-forward svc/mongodb 27017 & mongo -u root -p'LaVidaesBella'
```