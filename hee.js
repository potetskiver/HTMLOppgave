async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let canRoll = true;
rollURL = "";
rollName = "";
rollNum = "";
previousRolls = [];

function r(){
  if(canRoll === true){ //sjekk om man kan spinne
    const element = document.getElementById("rollDiv"); //korte ned litt
    var e = formatRoll(); //hent rollURL fra roll, med hjelp av formatRoll()
    rollURL = e; // gi rollURL verdien fra forrige
    document.getElementById("spintextt").innerHTML = "";
    element.classList.remove("spinning") //reset spinning animasjon
    element.classList.remove("case"); //fjern kassebilde.
    void element.offsetWidth; //force DOM reset
    timeoutt();
    element.addEventListener("animationend",timeinn); //fortell rollDiv at den skal kjøre timeinn() når spinning animasjonen er ferdig.
    element.classList.add("spinning"); //start spin
    element.style.backgroundImage=e; //sett bilde til spinnresultat
    console.log(e); // debug
  } else {
    //console.log("nuhuh");
  }
}

function prevRolls(rolly){
  previousRolls.push(rolly);
  Cookies.set('prevRolls',JSON.stringify(previousRolls));
  drawPreviousRolls();
}

function resetCookies(){
  Cookies.remove('prevRolls');
}

function drawFromCookies(){
  var prevRolls = JSON.parse(Cookies.get('prevRolls'));
  if(Cookies.get('prevRolls') != null){
    previousRolls = prevRolls;
    drawPreviousRolls();
  } else {
    document.getElementById("prevText").innerHTML = "Spinn for å se tidligere resultater!";
  }
}

function drawPreviousRolls(){
  var prev = document.getElementById("previous");
  prev.innerHTML = "";
  prev.innerHTML += "<p>Tidligere resultater</p>" + "<br>";
  for(var i = 0; i < previousRolls.length; i++){
    prev.innerHTML += "<p>" + previousRolls[i] + "</p>"+"<br>";
  }
}

function roll(){
  let rolle = Math.floor(Math.random() * 50000);
  rollNum = rolle;
  if(rolle <= 3000){
    return "Glock-18 | Gamma Doppler";
  }else if(rolle > 3000 && rolle <= 4500){
    return "★ Talon Knife | Doppler";
  }else if(rolle > 4500 && rolle <= 5000){
    return "EMS Katowice 2014 Capsule";
  }else if(rolle > 5000 && rolle <= 35000){
    return "Paris 2023 Legends Sticker Capsule";
  }else if(rolle > 35000 && rolle <= 47500){
    return "Paris 2023 Legends Sticker Capsule";
  }else if(rolle > 47500 && rolle <= 50000){
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
  await sleep(10500);
  timeinnn();
}

function timeinn(){
  //canRoll = true;
  console.log("wait");
  document.getElementById("congratss").innerHTML = "Congrats!";
  document.getElementById("rollNumText").innerHTML = rollNum;
}

function timeinnn(){
    document.getElementById("rollDiv").style.backgroundImage = "url('./images/weaponcase1.png')";
    document.getElementById("congratss").innerHTML = "";
    document.getElementById("spintextt").innerHTML = "SPIN!";
    void document.getElementById("rollDiv").offsetWidth;
    console.log("yea");
    rollYes();
    prevRolls(rollName);
}

async function rollYes(){
  await sleep(500);
  canRoll = true;
}
