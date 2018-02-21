const addButton = (parentElementId,func) => {
  const article = document.getElementById(parentElementId);
  const button = document.createElement("button");
  button.onclick = func;
  button.innerHTML = '2¢';
  article.appendChild(button); 
};

addButton('12345', ()=>{
  alert('button is working');
});
