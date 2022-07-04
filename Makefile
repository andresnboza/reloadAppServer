


buildDockerImage:
	docker build -t reload-app-server .
	docker tag reload-app-server andresnboza/reload-app-server
	docker push andresnboza/reload-app-server


serverDeployment:
	kubectl apply -f server-deployment.yaml
	kubectl apply -f server-service.yaml

push:
	git add .
	git commit -m "update"
	git push