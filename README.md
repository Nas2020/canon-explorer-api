# canon-explorer-api

Block Explorer API for Canon Network

# containerization

docker build -t ghcr.io/nas2020/canon-explorer-api:v0.0.5 .
docker push ghcr.io/nas2020/canon-explorer-api:v0.0.5

docker pull ghcr.io/nas2020/canon-explorer-api:v0.0.5

docker run \
 --env MONGO_URI="mongodb://host.docker.internal:27017/canon" \
 --env PORT_NUMBER="8000" \
 -p 8000:8000 \
 ghcr.io/nas2020/canon-explorer-api:v0.0.5

docker run -d \
 --env MONGO_URI="mongodb://host.docker.internal:27017/canon" \
 --env PORT_NUMBER="8000" \
 -p 8000:8000 \
 ghcr.io/nas2020/canon-explorer-api:v0.0.5
