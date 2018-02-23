#!/bin/bash

ENV="mtc_venv"

python3 -m venv "$1/$ENV"
source "$1/$ENV/bin/activate"

pip3 install django
pip3 install --no-binary psycopg2 psycopg2
