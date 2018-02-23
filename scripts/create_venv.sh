#!/bin/bash

python3 -m venv "$1/mtc_venv"
source "$1/mtc_venv/bin/activate"

pip3 install django
pip3 install --no-binary psycopg2 psycopg2
