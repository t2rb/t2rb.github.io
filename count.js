let src = "https://api.countapi.xyz/hit/trrb.xyz/f1442b08-ea88-4664-9cb4-21f217fb3d6f?callback=websiteVisits";
let script = document.createElement('script');

script.setAttribute('async', '');
script.setAttribute('src', src)

document.body.appendChild(script);

function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}