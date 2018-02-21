#!/bin/bash

DARWIN="Darwin"
LINUX="Linux"
INSTALL_BREW_COMMAND="/usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\""

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
