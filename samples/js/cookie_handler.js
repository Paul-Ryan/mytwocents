

document.addEventListener('DOMContentLoaded', () => {
  console.log(decodeURIComponent(document.cookie));
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

const getUserCookie = (reviewId) => {
  const sessionToken = getCookie('session_token');
  console.log(sessionToken);
  if (sessionToken) {
    console.log('Your session_token: ' + sessionToken);
    console.log("You're trying to pay for reivew: " + reviewId);
    // alert("You're trying to pay for reivew: " + reviewId);
  } else {
    console.log('Trying to fetch user data..');
    setCookie('session_token',1234567890,1);
  }
};


// When user hits the widget button 
// 1. check if there is a saved session_token
// if session_token => pay money
// else show modal window with information about the service
// and let user to sign in
