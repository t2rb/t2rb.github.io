let button = document.getElementById('mode');
let body = document.body;
let mode = localStorage.getItem('mode');

button.addEventListener('click', () => {
  body.classList.toggle('dark')
  if (body.classList.contains('dark')) {
    button.innerHTML = 'light_mode'
    localStorage.setItem('nightmode', 'enabled')
  } else {
    button.innerHTML = 'dark_mode'
    localStorage.setItem('nightmode', null)
  }
})

if (localStorage.getItem("nightmode") === "enabled") {
  body.classList.add("dark");
  button.innerHTML = 'light_mode'
}