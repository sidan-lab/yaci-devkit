#!/bin/bash
CMD="docker-compose"
if ! command -v docker-compose &> /dev/null
then
    echo "docker-compose not found, let's try 'docker compose'"
    CMD="docker compose"
fi

$CMD --env-file env up -d

source ./info.sh
