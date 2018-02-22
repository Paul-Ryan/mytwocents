

document.addEventListener('DOMContentLoaded', () => {
  console.log(decodeURIComponent(document.cookie));
  addModalWindow();
  
});

// const showModal = () => {
//   document.querySelector(".js-modal-open").onClick = () => {
//     const modal = document.getElementById('modal');
//     modal.classList.add('is-open');
//     console.log(modal);
//   };
// };
const closeModal = () => {
  document.querySelector(".js-modal-close").onClick = () => {
    const modal = document.getElementById('modal');
    modal.classList.removeClass('is-open');
  };
};


const addButton = (parentElementId,func) => {
  const article = document.getElementById(parentElementId);
  const button = document.createElement("button");
  button.onclick = func;
  button.innerHTML = '2¢';
  button.classList.add("my2cents-button");
  button.classList.add("js-modal-open");
  article.appendChild(button); 
};

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
  const modal = document.getElementById('modal');
  const sessionToken = getCookie('session_token');
  console.log(sessionToken);
  if (sessionToken) {
    console.log('Your session_token: ' + sessionToken);
    console.log("You're trying to pay for article: " + reviewId);
  } else {
    modal.classList.add('is-open');
    // console.log('Trying to fetch user data..');
    setCookie('session_token',1234567890,1);
  }
};

const addModalWindow = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = 'modal';
  document.body.appendChild(modal);
  const form = document.createElement("form");
  form.classList.add("modal-form");
  modal.appendChild(form);
  const span = document.createElement('span');
  span.classList.add('modal-close');
  span.classList.add('js-modal-close">');
  span.innerHTML = '&times;';
  form.appendChild(span);
  const about = document.createElement('div');
  about.classList.add('about');
  form.appendChild(about);
  const img = document.createElement('img');
  img.src = './assets/my2cents-logo.svg';
  about.appendChild(img);
};
