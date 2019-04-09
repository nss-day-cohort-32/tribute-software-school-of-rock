
const discography = document.getElementById('discography');

addAlbum("Santana", 1969, "2x Platinum", 'santana-1969.png');
addAlbum("Abraxas",1970, "5x Platinum", 'abraxas.jpg');
addAlbum("Santana", 1971, "2x Platinum","Santana-1971.jpg");
addAlbum("Caravanserai", 1972, "Platinum","Caravanserai.jpg");
addAlbum("Welcome", 1973, "Gold", "Welcome_Album.jpg");
addAlbum("Borboletta", 1974, "Gold", "Borboletta.jpg");
addAlbum("Amigos", 1976, "Gold", "Santana_Amigos.png");
addAlbum("Festival", 1977, "Gold", "FestivalAlbum.jpg");
addAlbum("Moonflower", 1977, "2x Platinum", "MoonflowerAlbum.jpg");
addAlbum("Inner Secrets", 1978, "Gold", "InnerSecretsAlbum.jpg");
addAlbum("Marathon", 1979, "Gold", "SantanaMarathonAlbum.jpg");
addAlbum("Zebop!", 1981, "Platinum", "SantanaZebopAlbum.jpg");
addAlbum("Shangó", 1982, "Gold", "SantanaShangoAlbum.jpg");
addAlbum("Beyond Appearances", 1985, "Billboard #50", "Beyond_Appearances.jpg");
addAlbum("Freedom", 1987, "#95 on charts", "Freedom.jpg");
addAlbum("Spirits Dancing in the Flesh", 1990, "#85 in Billboard top 200", "Santana_Spirits_Dancing_in_the_Flesh.jpg");
addAlbum("Supernatural", 1999, "15x Platinum", "Supernatural.jpg");
addAlbum("Shaman", 2002, "2x Platinum", "Shaman.jpg");
addAlbum("All That I Am", 2005, "Gold", "AllthatIam.jpg");
addAlbum("Guitar Heaven", 2010, "#5 in Billboard top 200", "Guitarheaven.jpg");
addAlbum("Shape Shifter", 2012, "#2 in Hungary", "Santana_Shape_Shifter.jpg");
addAlbum("Corazón", 2014, "2x Platinum", "Corazonsantana.jpg");
addAlbum("Santana IV", 2016, "#5 in Billboard top 200", "Santana_IV.png");






function addAlbum(albumTitle, releaseYear, sales, imgName) {
  let albumDiv = addHTMLElement('div', discography, '', ['disc-item']);
  let imgDiv = addHTMLElement('div', albumDiv, '', ['disc-img']);
  let img = document.createElement('img');
  img.src = './img/albums/'.concat(imgName);
  img.alt = `Santana Album: ${albumTitle} (${releaseYear})`;
  imgDiv.appendChild(img);
  let txtDiv = addHTMLElement('div',albumDiv,'',['disc-text']);
  addHTMLElement('h4', txtDiv, albumTitle, []);
  addHTMLElement('p', txtDiv, `Released: ${releaseYear}`);
  addHTMLElement('p', txtDiv, `Album Status: ${sales}`);


}


