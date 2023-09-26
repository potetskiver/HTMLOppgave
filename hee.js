async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let canRoll = true;
rollURL = "";
rollName = "";
previousRolls = [];
function r(){
  if(canRoll === true){
    const element = document.getElementById("rollDiv");
    var e = formatRoll();
    rollURL = e;
    element.classList.remove("spinning")
    element.classList.remove("k");
    void element.offsetWidth;
    timeoutt();
    element.addEventListener("animationend",timeinn);
    element.classList.add("spinning");
    element.style.backgroundImage=e;
    console.log(e);
  } else {
    //console.log("nuhuh");
  }
}

function prevRolls(rolly){
  previousRolls.push(rolly);
  $.cookie('prevRolls', JSON.stringify(previousRolls));
  drawPreviousRolls();
}

function drawFromCookies(){
  previousRolls = JSON.parse($.cookie('prevRolls'));
  drawPreviousRolls();
}

function drawPreviousRolls(){
  var prev = document.getElementById("previous");
  prev.innerHTML = "";
  prev.innerHTML += "<p>Tidligere resultat</p>" + "<br>";
  for(var i = 0; i < previousRolls.length; i++){
    //drawName(i);
    prev.innerHTML += "<p>" + previousRolls[i] + "</p>"+"<br>";
  }
}

function drawName(i){
  var prev = document.getElementById("previous");
  if(previousRolls[i] == ''){
    prev.innerHTML += "<p>" + "Glock-18 | Gamma Doppler" + "</p>"+"<br>";
  }else if(previousRolls[i] == 'url(./images/talondoppler.png)'){
    prev.innerHTML += "<p>" + "★ Talon Knife | Doppler" + "</p>"+"<br>";
  }else if(previousRolls[i] == 'url(./images/talondoppler.png)'){
    prev.innerHTML += "<p>" + "EMS Katowice 2014 Capsule" + "</p>"+"<br>";
  }else if(previousRolls[i] == 'url(./images/talondoppler.png)'){
    prev.innerHTML += "<p>" + "Paris 2023 Legends Sticker Capsule" + "</p>"+"<br>";
  }else if(previousRolls[i] == 'url(./images/talondoppler.png)'){
    prev.innerHTML += "<p>" + "★ Shadow Daggers | Safari Mesh" + "</p>"+"<br>";
  }else{
    prev.innerHTML += "Nope";
  }
}

function roll(){
  let rolle = Math.floor(Math.random() * 50000);
  if(rolle <= 5000){
    return "Glock-18 | Gamma Doppler";
  }else if(rolle > 5000 && rolle <= 7000){
    return "★ Talon Knife | Doppler";
  }else if(rolle > 7000 && rolle <= 9000){
    return "EMS Katowice 2014 Capsule";
  }else if(rolle > 9000 && rolle <= 35000){
    return "Paris 2023 Legends Sticker Capsule";
  }else if(rolle > 35000 && rolle <= 45000){
    //return "background-image: url('./images/fef.png')";
    return "EMS Katowice 2014 Capsule";
  }else if(rolle > 45000 && rolle <= 50000){
    return "★ Shadow Daggers | Safari Mesh";
  }
}

function formatRoll(){
  rolll = roll();
  rollName = rolll;
  if(rolll === 'Glock-18 | Gamma Doppler'){
    return "url('./images/gammadoppelerglock.png')";
  }else if(rolll === '★ Talon Knife | Doppler'){
    return "url('./images/talondoppler.png')";
  }else if(rolll === 'EMS Katowice 2014 Capsule'){
    return "url('./images/kato2014.png')";
  }else if(rolll === 'Paris 2023 Legends Sticker Capsule'){
    return "url('./images/paris2023.png')";
  }else if(rolll === '★ Shadow Daggers | Safari Mesh'){
    return "url('./images/safarimeshg.png')";
  }else{return "e";}
}

async function timeoutt(){
  canRoll = false;
  await sleep(5125);
  timeinnn();
}

function timeinn(){
  //canRoll = true;
  console.log("wait");
  document.getElementById("congratss").innerHTML = "Congrats!";
}

function timeinnn(){
    document.getElementById("rollDiv").style.backgroundImage = "url('./images/weaponcase1.png')";
    document.getElementById("congratss").innerHTML = "";
    void document.getElementById("rollDiv").offsetWidth;
    console.log("yea");
    rollYes();
    prevRolls(rollName);
}

async function rollYes(){
  await sleep(500);
  canRoll = true;
}

function alertr(){
  //alert("Alert");
  r();
}

function getInput(){
  let input = document.getElementById("inp").value;
  document.getElementById("inpp").innerHTML = input;
}
