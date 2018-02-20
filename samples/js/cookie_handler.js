

document.addEventListener('DOMContentLoaded', () => {
  // console.log(decodeURIComponent(document.cookie));
  
  setCookie('session_token',1234567890,1);
});


const setCookie = (name,value,days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    console.log(name + "=" + (value || "")  + expires + "; path=/");
};
const getCookie = (cookieName) => {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

const setUserCookie = () => {
  setCookie('session_token',1234567890,1);
};

const setLocalStorage = () =>{
  localStorage.setItem("lastname", "Smith");
};

const getUserCookie = () => {
  // console.log(getCookie('sessionToken'));
  const sessionToken = getCookie('session_token');
  console.log(sessionToken);
  if (sessionToken) {
    alert('You already logged in');
  } else {
    alert('Please login');
  }
};
