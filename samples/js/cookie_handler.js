

document.addEventListener('DOMContentLoaded', () => {
  // console.log(decodeURIComponent(document.cookie));
  addModalWindow();
});


const showModal = () => {
  const modal = document.getElementById('modal');
  modal.classList.add('is-open');
};

const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('is-open');
};


const addButton = (parentElementId,func) => {
  const article = document.getElementById(parentElementId);
  const button = document.createElement("button");
  button.onclick = func;
  button.innerHTML = '2¢';
  button.classList.add("my2cents-button");
  button.classList.add("js-modal-open");
  button.id = parentElementId + '-bt';
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

const setLocalStorage = () =>{
  localStorage.setItem("lastname", "Smith");
};

const getUserCookie = (reviewId) => {
  const sessionKey = getCookie('sessionKey');
  if (sessionKey) {
    console.log('Your session_token: ' + sessionKey);
    console.log("You're trying to pay for article: " + reviewId);
    disableWidgetButton(reviewId+'-bt');
  } else {
    clearError();
    showModal();
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
  span.onclick =  closeModal;
  form.appendChild(span);
  const about = document.createElement('div');
  about.classList.add('about');
  form.appendChild(about);
  const img = document.createElement('img');
  img.src = './assets/my2cents-logo.svg';
  about.appendChild(img);
  const paragraph = document.createElement('p');
  paragraph.innerHTML = "My 2 Cents is an embeddable widget that will allow readers to offer authors small amounts of money, or tips, in an easy, low friction way."+
  "The My 2 Cents widget will be JavaScript code generated on a per-article bases."+
  "Authors or publications will embed that generated widget on their article pages."+
  "Logged in users will then be able to provide a small contribution to register"+
  "their appreciation for the article by clicking on the widget."
  about.appendChild(paragraph);
  const input = document.createElement('div');
  input.classList.add('input');
  form.appendChild(input);
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Please sign in to continue';
  input.appendChild(h1);
  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.placeholder = 'Email';
  emailInput.id = 'username';
  input.appendChild(emailInput);
  
  const PasswordInput = document.createElement('input');
  PasswordInput.type = 'Password';
  PasswordInput.placeholder = 'Password';
  PasswordInput.id = 'password';
  input.appendChild(PasswordInput);
  const errorMessage = document.createElement('p');
  errorMessage.innerHTML = 'Wrong login name or password';
  errorMessage.id = 'error_message';
  errorMessage.classList.add('error');
  input.appendChild(errorMessage);
  
  const submitDiv = document.createElement('div');
  submitDiv.classList.add('submit');
  form.appendChild(submitDiv);
  const question = document.createElement('p');
  question.innerHTML = "Doesn't have an account?&nbsp;";
  submitDiv.appendChild(question);
  const signup = document.createElement('p');
  signup.classList.add('signup');
  signup.innerHTML = 'Sign Up';
  submitDiv.appendChild(signup);
  const signIn = document.createElement('button');
  signIn.onclick = sendUserData;
  signIn.innerHTML = 'Sign In';
  submitDiv.appendChild(signIn);
  // const closeDiv = document.createElement('div');
  // closeDiv.classList.add('modal-screen');
};

const sendUserData = (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = {username,password};
  loginRequest(user);
};

// const postUser = user => (
//   $.ajax({
//     url: '/api/users',
//     method: 'POST',
//     data: {user}
//   })
// );

const loginRequest = user => {
  console.log(JSON.stringify({user}));
  $.ajax({
    url: 'http://localhost:8000/api/session/',
    method: 'POST',
    data:  JSON.stringify({user})  
  }).then(userResponse => (handleResponse(userResponse)), err => (
      console.log('Error:' + err.responseJSON))
  );
};

const handleResponse = userResponse => {
  // const userCredentials = Object.values(userResponse['user']);
  const sessionKey =  userResponse["user"]['sessionKey'];
  if (sessionKey) {
    setCookie('sessionKey',sessionKey,1);
    closeModal();    
  } else {
    handleError();
  }
};

const handleError = () => {
  const errorMessage = document.getElementById('error_message');
  errorMessage.style.display = 'block';
};

const clearError = () => {
  const errorMessage = document.getElementById('error_message');
  errorMessage.style.display = 'none';
};

const disableWidgetButton = id => {
  const button = document.getElementById(id);
  button.disabled = true;
  button.classList.add('paid-botton');
  button.classList.remove('my2cents-button');
};

// const login = () => loginRequest(userdata)
//   .then(user => (console.log(user)), err => (
//     console.log(err.responseJSON))
//   );

// const logout = () => (
//   $.ajax({
//     url: '/api/session',
//     method: 'DELETE',
//   })
// );
