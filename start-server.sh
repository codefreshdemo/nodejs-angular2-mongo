#!/usr/bin/env bash
wait_for_db() {
  nslookup mongodb
  if ! nc -z mongodb 27017; then
    echo "Waiting for mongodb..."
    sleep 2
    wait_for_db
  fi
}

wait_for_db

node app.js