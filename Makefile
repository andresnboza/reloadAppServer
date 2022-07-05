REPO = reload-app-server

buildDockerImage:
	docker build -t reload-app-server .
	docker tag reload-app-server andresnboza/reload-app-server
	docker push andresnboza/reload-app-server

serverDeployment:
	kubectl apply -f server-deployment.yaml
	kubectl apply -f server-service.yaml

docker_run:
	docker build -t andresnboza/${REPO} .
	docker run --env-file=.env --rm -p 3000:3000 andresnboza/${REPO}

push:
	git add .
	git commit -m "update"
	git push || true