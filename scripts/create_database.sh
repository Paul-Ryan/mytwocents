#!/bin/bash

DATABASE="my_two_cents"
USER="my_two_cents_user"
PASSWORD="russell"
TIME_ZONE="America/Los_Angeles"

# create django database and user
psql postgres -c "CREATE DATABASE ${DATABASE};"
psql postgres -c "CREATE USER ${USER} WITH PASSWORD '${PASSWORD}';"
psql postgres -c "ALTER ROLE ${USER} SET client_encoding TO 'utf8';"
psql postgres -c "ALTER ROLE ${USER} SET default_transaction_isolation TO 'read committed';"
psql postgres -c "ALTER ROLE ${USER} SET timezone TO '${TIME_ZONE}';"
psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE ${DATABASE} TO ${USER};"
