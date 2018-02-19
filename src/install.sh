OS = "`uname`"

if $OS == "Linux"
  # if apt-get
    # install python3
  # if dnf
    # install python3
  # if yum
    # install python3
fi

# if mac
if $OS == "Darwin"
  if brew -v
    # update brew
    brew update
  else
    # install homebrew
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  fi

  # install python3
  brew install python3
fi
