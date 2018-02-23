#!/bin/bash

DATABASE="my_two_cents"
USER="my_two_cents_user"

# drop django database and user
psql postgres -c "DROP DATABASE ${DATABASE};"
psql postgres -c "DROP USER ${USER};"
