#!/bin/bash

DARWIN="Darwin"
LINUX="Linux"
INSTALL_BREW_COMMAND="/usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\""
DIR="`dirname ${BASH_SOURCE[0]} && pwd`"
PARENT_DIR="`cd $DIR && cd .. && pwd && cd $DIR`"

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
      echo "Brew updated ..."
    else
      /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      echo "Installing Brew ..."
      eval INSTALL_BREW_COMMAND
      echo "Brew installed ..."
    fi

    # install python3
    echo "Installing Python3 ..."
    brew install python3
  fi
fi

echo "Creating virtual environment ..."
# python3 -m venv ../my_two_cents
