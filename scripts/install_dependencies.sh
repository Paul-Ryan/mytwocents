#!/bin/bash

DIR=$1
DARWIN="Darwin"
LINUX="Linux"
INSTALL_BREW_COMMAND="/usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\""

OS="`uname`"
echo "You are running $OS ..."

if [ "$OS" == "$LINUX" ]; then
  echo "Run Linux instructions ..."
  # if apt-get
    # install python3
  # if dnf
    # install python3
  # if yum
    # install python3
fi


if [ "$OS" == "$DARWIN" ]; then
  echo "Run Darwin instructions ..."

  if [ "`brew --version`" == "" ]; then
    eval INSTALL_BREW_COMMAND
    echo "Brew has been installed ..."
  else
    brew update
    echo "Brew has been updated ..."
  fi

  if [ "`python3 --version`" == "" ]; then
    brew install python3
    echo "Python3 has been installed ..."
  else
    echo "Python3 is already installed ..."
  fi

  if [ "`psql --version`" == "" ]; then
    brew install psql
    echo "PostgreSQL has been installed ..."
  else
    echo "PostgreSQL is already installed ..."
  fi
fi

npm init -y --prefix $DIR
npm install --prefix $DIR --save-dev webpack react react-dom react-router-dom react-modal redux react-redux redux-logger babel-core babel-loader babel-preset-react babel-preset-env
echo "React, Redux, Webpack, and Babel have been installed ..."
