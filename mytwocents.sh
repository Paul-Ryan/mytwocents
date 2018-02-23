#!/bin/bash

DIR=`pwd`

function find_task() {
  case $1 in
    "create_database")
      source ./scripts/create_database.sh $2
      ;;
    "create_venv")
      source ./scripts/create_venv.sh $2
      ;;
    "install_dependencies")
      source ./scripts/install_dependencies.sh $2
      ;;
    "drop_database")
      source ./scripts/drop_database.sh $2
      ;;
  esac
}


for var in $@;
do
  find_task $var $DIR
done
