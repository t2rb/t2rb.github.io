function ImgError(source){
  source.setAttribute('class', 'hide');
}

fetch('https://raw.githubusercontent.com/gattsuchan/lainchan-webring/main/webring.json')
  .then(response => response.json())
  .then(data => {
    const website = data.items;
    for (let i = 0; i < website.length; i++) {
      let webringImg = '../assets/img/banner/' + website[i].img;
      let webring = document.getElementById('webring');
      let webringList = document.createElement('li');
      let webringLink = document.createElement('a');
      webringLink.setAttribute('href', website[i].url);
      webringLink.setAttribute('target', '_blank');
      webringLink.setAttribute('rel', 'noopener noreferrer');
      webring.appendChild(webringList);
      webringList.appendChild(webringLink);
      webringLink.innerHTML = '<img src="' + webringImg + '" alt="' + website[i].title + '" onerror="ImgError(this)" />';
    }
  });