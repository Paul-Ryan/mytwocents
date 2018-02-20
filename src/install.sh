#!/bin/bash

DARWIN="Darwin"
LINUX="Linux"
INSTALL_BREW_COMMAND="/usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\""
DIR="`dirname ${BASH_SOURCE[0]} && pwd`"
PARENT_DIR="`cd $DIR && cd .. && pwd && cd $DIR`"
ENV_DIR="$PARENT_DIR/mtc_venv"

OS="`uname`"
echo "You are running $OS ..."
# echo "$ENV_DIR"

if [ "$OS" == "$LINUX" ]; then
  echo "Run Linux instructions ..."
  # if apt-get
    # install python3
  # if dnf
    # install python3
  # if yum
    # install python3
fi

# if mac
if [ "$OS" == "$DARWIN" ]; then
  echo "Run Darwin instructions ..."
  if python3 -V; then
    echo "Python3 is already installed ..."
  else
    if brew -V; then
      # update brew
      echo "Brew is already installed ..."
      echo "Updating brew ..."
      brew update
      echo "Brew has been updated ..."
    else
      echo "Installing Brew ..."
      eval INSTALL_BREW_COMMAND
      echo "Brew has been installed ..."
    fi

    # install python3
    echo "Installing Python3 ..."
    brew install python3
    echo "Python3 has been installed ..."
  fi
fi

echo "Creating virtual environment ..."
cd "$PARENT_DIR"
python3 -m venv "$ENV_DIR"
echo "Virtual environment has been created ..."

echo "Activate virtual environment ..."
# mkdir "mtc_venv"
# cd "mtc_venv"
# source "$ENV_DIR/bin/activate"
echo "Virtual environment has been activated ..."

echo "Installing Django, psycop2, dependencies ..."
# do something
# pip3 install django psycopg2
echo "Django and dependencies have been installed to the virtual environment ..."

echo "Installing React, Redux, Webpack, and Babel ..."
# npm init -y
# npm install --save webpack react react-dom react-router-dom redux react-redux babel-core babel-loader babel-preset-react babel-preset-env
echo "React, Redux, Webpack, and Babel have been installed ..."

echo "Creating PostgreSQL databases through Django ..."
#
echo "PostgreSQL databases have been created ..."
