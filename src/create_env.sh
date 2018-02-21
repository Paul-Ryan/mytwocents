#!/bin/bash

ENV="mtc_venv"
DIR="`dirname ${BASH_SOURCE[0]} && pwd`"
PARENT_DIR="`cd $DIR && cd .. && pwd && cd $DIR`"
ENV_DIR="$PARENT_DIR/$ENV"

cd "$PARENT_DIR"

# create frontend and create react project

if [ ! -d "$PARENT_DIR/frontend" ]; then
  mkdir "$PARENT_DIR/frontend"
fi

echo "Installing React, Redux, Webpack, and Babel ..."
npm init -y
npm install --save webpack react react-dom react-router-dom redux react-redux babel-core babel-loader babel-preset-react babel-preset-env
echo "React, Redux, Webpack, and Babel have been installed ..."


# create virtual environment and install django

echo "Creating virtual environment ..."
python3 -m venv "$ENV_DIR"
echo "Virtual environment has been created ..."

echo "Activate virtual environment ..."
cd "mtc_venv"
source "$ENV_DIR/bin/activate"
echo "Virtual environment has been activated ..."

echo "Installing Django, psycop2, dependencies ..."
# do something
pip3 install django
pip3 install --no-binary psycopg2 psycopg2
echo "Django and dependencies have been installed to the virtual environment ..."



#create backend and create django project
echo "Creating backend ..."
if [ ! -d "$PARENT_DIR/backend" ]; then
  mkdir "$PARENT_DIR/backend"
fi

cd "$PARENT_DIR/backend"
django-admin startproject config
django-admin startapp cms
django-admin startapp api
echo "Backed has been created ..."

cd "$PARENT_DIR"

echo "Creating PostgreSQL databases through Django ..."

echo "PostgreSQL databases have been created ..."

echo "Make migrations ..."
python3 "./backend/config/manage.py" makemigrations
echo "Migrate ..."
python3 "./backend/config/manage.py" migrate

echo "Setup complete!"
