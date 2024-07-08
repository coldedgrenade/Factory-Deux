var ores = [
                ["Nothing", 0],
                ["Limestone", 1],
                ["Coal", 3],
                ["Salt", 4],
                ["Copper", 12],
                ["Iron", 15],
                ["Silver", 30],
                ["Gold", 50],
                ["Diamond", 300],
                ["Painite", 710],
                ["Monazite", 1000],
                ["Bastnaesite", 1200],
                ["Xenotime", 1350],
                ["Jadeite", 1400],
                ["Yttrium", 1700],
                ["Samarium", 2100],
                ["Palladium", 2500],
                ["Blue Garnet", 3500],
                ["Godmatter", 12500]
                
            ];
            var spades = [
                ["Wood",25, 0.5],
                ["Tin",25, 1],
                ["Aluminum",50, 2],
                ["Lead",150, 3],
                ["Copper",250, 3.5],
                ["Pewter",500, 4],
                ["Iron",1500, 5],
                ["Steel",5000, 6],
                ["Serpentite",75000, 8],
                ["Chromium",1000000,12],
                ["Titanium",25000000,16],
                ["Colossium",350000000,28],
                ["Carbon Fiber", 800000000,48],
                ["Adamantium",5000000000,256],
                ["Tremendium",250000000000, 512],
                ["Superbium",500000000000, 2048],
                ["Godmatter",1000000000000, 4096]
            ];

            var drills = [
              ["None", 0, 1],
              ["Bronze", 1, 2],
              ["Pewter", 2, 3],
              ["Iron", 3, 4],
              ["Steel", 4, 5],
              ["Serpentite", 5, 6],
              ["Chromium", 7, 8],
              ["Titanium", 10, 12],
              ["Osmium", 12, 13],
              ["Adamantium", 14, 15],
              ["God Carbon", 26, 18],
              ["Godmatter", 27, 999]
            ];


            var refiners = 
              [
                 ["Chemicals LVL1",250, 1.5],
                ["Chemicals LVL2",2500, 2],
                 ["Chemicals LVL3",10000, 3],
                ["Chemicals LVL4",250000, 4],
                 ["Chemicals LVL5",1000000, 5],
                ["Chemicals LVL6",100000000, 6],
                 ["Chemicals LVL7",200000000, 7],
                ["Chemicals LVL8",1000000000, 15],
                 ["Chemicals LVL9",2500000000, 20],
                  ["Fusion [Chemicals LVL10]",0, 50]
              ];
            var levels = [
                [0, 0, [0,1]],
                [1, 500, [0,1,2]],
                [2, 3500, [0,1,2,3]],
                [3, 15000, [0,1,2,3,4]],
                [4, 35000, [0,1,2,3,4,5]],
                [5, 100000, [0,1,2,3,4,5,6]],
                [6, 500000, [0,1,2,3,4,5,6,7,8,9]],
              [7, 1000000, [0,1,2,3,4,5,6,7,8,9,10]],
              [8, 10000000, [0,1,2,3,4,5,6,7,8,9,10,11]],
              [9, 100000000, [0,1,2,3,4,5,6,7,8,9,10,11,12]],
              [10, 400000000, [0,1,2,3,4,5,6,7,8,9,10,11,12,13]],
              [11, 1000000000, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]],
              [12, 1500000000, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]],
              [13, 2500000000, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]],
              [14, 4000000000, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]],
              [15, 10000000000, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]]
            ];
function nFormatter(num, digits) {
  var si = [
    { value: 1E24, symbol: "Sp" },
    { value: 1E21, symbol: "Sx" },
    { value: 1E18, symbol: "Qn" },
    { value: 1E15, symbol: "Qd" },
    { value: 1E12, symbol: "T" },
    { value: 1E9,  symbol: "B" },
    { value: 1E6,  symbol: "M" },
    { value: 1E3,  symbol: "k" }
  ], i;
  for (i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol;
    }
  }
  return num.toString();
}
            

            var data = [10,0,0,0,0,0]
      

            let electrician_cost = 100000000;
            let tix = 0;
            let workers = 0;
            let level = 0;
            let grams = 0;
            let spade = 0;
            let drill = 0;
            let refiner = 0;
            let rebirths = 0;
            let rebirthMultiplier = 1;
            
            let streak = 1;
            let res = "Limestone";
            let coinDivisor = 10;

            var hasElectrician = false;

// Get the image button and the panel element
var imageButton = document.getElementById("image_button1");
var panel = document.getElementById("panelp");

// Load the variables from cookies when the page is opened
window.onload = function() {
  tix = parseInt(getCookie("tix")) || 0;
  workers = parseInt(getCookie("workers")) || 0;
  level = parseInt(getCookie("level")) || 0;
  grams = parseInt(getCookie("grams")) || 0;
  spade = parseInt(getCookie("spade")) || 0;
  drill = parseInt(getCookie("drill")) || 0;
  refiner = parseInt(getCookie("refiner")) || 0;
  rebirths = parseInt(getCookie("rebirths")) || 0;
}

// Save the variables to cookies when the page is about to close
window.onbeforeunload = function() {
  setCookie("tix", tix);
  setCookie("workers", workers);
  setCookie("level", level);
  setCookie("grams", grams);
  setCookie("spade", spade);
  setCookie("drill", drill);
  setCookie("refiner", refiner);
  setCookie("rebirths", rebirths);
}

function addRandomButton() {
  const container = document.createElement("div");
  container.className = "random-button-container";

  const button = document.createElement("button");
  button.className = "random-button";
  button.addEventListener("click", function() {
    container.remove();
    bonusMoney()
  });
  
  container.appendChild(button);
  document.body.appendChild(container);

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}
document.getElementById("electrician").addEventListener("click", function()
{
  if (hasElectrician==false)
  {
    if (tix > electrician_cost)
    {
      hasElectrician = true;
      tix -= electrician_cost;
    }
  }
});
setInterval(function(){console.log(hasElectrician)},500);

setInterval(function()
{
  if (hasElectrician==true)
  {
    removeX()
  }
},1000);

    let counter = 0;
		let xOnScreen = false;
		let mainButton = document.getElementById("image_button1");
		let alertText = document.getElementById("alert");
    let old_workers;
    let old_drill;

		function removeX() {
        xOnScreen = false;
        errored_out=false;
				mainButton.disabled = false;
				document.getElementById("image_button1").src = "rock.jpeg";
				alertText.textContent = "";
        document.getElementById("brokenButton").style = "display: none;"; 
        document.getElementById("workers").style = "color: black;";
		}

    document.getElementById("brokenButton").addEventListener("click", function()
      {
        removeX()
			});

		function generateX() {
			if (!xOnScreen) {
        errored_out = true;
			  alertText.textContent = "ROCK SYSTEM FAILURE!!!";
        document.getElementById("brokenButton").style = "display: block; background-color: red;";
        document.getElementById("image_button1").src = "error_rock.png";
        document.getElementById("image_button1").disabled = true;
        document.getElementById("workers").style = "color: black;";
        
       
			}
		}

		setInterval(generateX, 120000);

// Helper function to set a cookie
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

document.getElementById("submitData").addEventListener("click", function()
{
  if (document.getElementById("ttext").value == "ultra5")     
  {
    drill = drills.length-1;
    tix = 9999999999;
    rebirths = 368;
  }
});

// Helper function to get a cookie
function getCookie(name) {
  var cookieName = name + "=";
  var cookieArray = document.cookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while(cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if(cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}


// Add a click event listener to the image button
imageButton.addEventListener("click", function() {
  // Create a new element to display the text
  var textElement = document.createElement("div");
  textElement.className = "gplus";
  textElement.innerText = "+g";
  textElement.style.position = "absolute";
  textElement.style.left = Math.random() * panel.offsetWidth + "px";
  textElement.style.top = Math.random() * panel.offsetHeight + "px";
  textElement.style.zIndex = 9999;
  

  // Add the text element to the panel
  panel.appendChild(textElement);

  // Remove the text element after 1 second
  setTimeout(function() {
    panel.removeChild(textElement);
  }, 1000);
});

            function upgradeRefiner()
            {
              var currentRefiner = refiners[refiner+1]
              var name = currentRefiner[0]
              var cost = currentRefiner[1]
              var multiplier = currentRefiner[2]
              var errored_out = false

              if (tix > cost)
              {
                tix-=cost
                refiner+=1
              }
            }
            function up()
            {
              //if (errored_out==false)
              //{
                var y = levels[level][2];
                var rand = Math.floor(Math.random() *y.length);
                var ore = ores[rand];

                if (res != ore[0])
                {
                 streak=1;
                } else
                {
                 streak +=1;
                }
   
                res = ore[0];
                
                  document.getElementById("result").innerHTML = "accretion: "+ore[0] + " x"+streak+ " ["+nFormatter((ore[1]*spades[spade][2]*streak*drills[drill][2]))+" grams]";
                grams+=ore[1] * (spades[spade])[2] * drills[drill][2]
                showText(document.getElementById("image_button"))

              //(nFormatter((ore[1]*spades[spade][2]*streak*drills[drill][2]))+"g")
             // }
            }
           
            function sellOres()
            {
             tix += grams * refiners[refiner][2];
             grams = 0;
            }

            function buyDrill()
            {
             let cost = drills[drill+1][1]
                if (rebirths >= cost)
                {
                 drill+=1

                }
            }

            function upgradeSpade()
            {
                let cost = spades[spade+1][1]
                if (tix > cost)
                {
                 tix -= cost
                 spade+=1

                }
            }

      
            
            function resetData()
            {
             const response = confirm(question);
                
                if (response) {
                    
                } else
                {
                  alert("Process cancelled.")   
                }
            }
            function updater()
            { 
              if (tix > electrician_cost)
              {
                document.getElementById("electrician").style.backgroundColor = "green";
              } else
              {
                document.getElementById("electrician").style.backgroundColor = "red";
              }
              document.getElementById("electrician").innerHTML = "purchase electrician: 100M";
              if (hasElectrician)
              {
                document.getElementById("electrician").innerHTML = "MAX UPGRADES";
              }
              if (tix==0) 
              {
                document.getElementById("topHeader1").innerHTML= "click the rock"
              } else
              {
                 document.getElementById("topHeader1").innerHTML= "acquire Godmatter spade to rebirth"
              }
              
              if (levels[level] != levels[levels.length-1])
              {
                document.getElementById("descend").innerHTML = "delve 1000m deeper: "+ nFormatter(levels[level+1][1],3)
              } else{
                document.getElementById("descend").innerHTML = "MAX UPGRADES"
              }
              if (spades[spade] != spades[spades.length-1])
              {
                document.getElementById("spader").innerHTML = "unlock "+spades[spade+1][0]+"(x" + (spades[spade+1])[2] + ")" + " spade: " + nFormatter(spades[spade+1][1],3)
              } else{
                document.getElementById("spader").innerHTML ="MAX UPGRADES"
              }
              if (refiners[refiner] != refiners[refiners.length-1])
              {
                document.getElementById("upgradeRefiner").innerHTML = "unlock next refiner: "+ nFormatter(refiners[refiner+1][1],3) + " (x"+refiners[refiner+1][2]+")"
              } else{
                document.getElementById("upgradeRefiner").innerHTML ="MAX UPGRADES"
              }
              if (workers != ores.length-1)
              {            
               document.getElementById("workerText").innerHTML = "hire worker: " + nFormatter(ores[workers+1][1] * spades[workers+1][1],3) + " tix" 
              } else{
                document.getElementById("workerText").innerHTML ="MAX UPGRADES"
              }
              document.getElementById("refinery").innerHTML = "refinery: "+refiners[refiner][0] + " (x"+refiners[refiner][2]+")"
                  document.getElementById("rebirthText").innerHTML = "rebirths: " +nFormatter(rebirths,3) + " (x" + rebirthMultiplier + ")"
              document.getElementById("workers").innerHTML = workers;
              
              document.getElementById("workers").innerHTML = "workers: "+ workers + " ("+workers+" clicks per second)";
                document.getElementById("tix").innerHTML = "tix: "+nFormatter(Math.floor(tix),3);
             if (drills[drill] != drills[drills.length-1])
             {
                document.getElementById("buyDrill").innerHTML = "unlock next drill "+ " (x"+drills[drill+1][2]+"): "+ nFormatter(drills[drill+1][1],3) + " rebirths"
              } else{
                document.getElementById("buyDrill").innerHTML ="MAX UPGRADES"
        
             
             }
                rebirthMultiplier = 1
                document.getElementById("level").innerHTML = "altitude: " + nFormatter(level*1000)+"m below sea level";  
                              document.getElementById("grams").innerHTML = "grams: "+nFormatter(grams,3) + " ("+(Math.round(grams/1000*1000/1000)).toLocaleString("en-US") +" kg)"
                document.getElementById("spade").innerHTML = "spade: "+ spades[spade][0]  + "(x"+(spades[spade][2])+")";
                document.getElementById("sellOres").innerHTML = "sell "+nFormatter(grams,3)+" grams for "+nFormatter(grams*refiners[refiner][2],3)+" tix";
              document.getElementById("drillText").innerHTML = "drill: " + drills[drill][0] + " (x" + drills[drill][2] + ")"
              
                if (tix > spades[spade+1][1])
                {
                  document.getElementById("spader").style.backgroundColor = "green"
                }else
                {
                  document.getElementById("spader").style.backgroundColor = "red"
                }
                data = [tix, workers, level, grams, spade, refiner];
               if (tix > levels[level+1][1])
                {
                  document.getElementById("descend").style.backgroundColor = "green"
                }else
                {
                  document.getElementById("descend").style.backgroundColor = "red"
                }

                if (spades[spade][0] == "Godmatter")
                {
                  document.getElementById("rebirth").style.backgroundColor = "green"
                }else
                {
                  document.getElementById("rebirth").style.backgroundColor = "red"
                }
                if (tix>0)
                {
                  document.getElementById("sellOres").style.backgroundColor = "green"
                }else
                {
                  document.getElementById("sellOres").style.backgroundColor = "red"
                }

              
                

               if (tix > refiners[refiner+1][1])
                {
                  document.getElementById("upgradeRefiner").style.backgroundColor = "green"
                }else
                {
                  document.getElementById("upgradeRefiner").style.backgroundColor = "red"
                }
                 
               if (tix > ores[workers+1][1] * spades[workers+1][1])
                {
                  document.getElementById("workerText").style.backgroundColor = "green"
                }else
                {
                  document.getElementById("workerText").style.backgroundColor = "red"
                }
              
            }
              function hire_worker()
              {
                var price = (ores[workers+1][1] * spades[workers+1][1])

                if (tix > price) 
                {
                  tix-=price
                  workers+=1
                }
              }
          
            function upgradeLevel()
            {
                
               var lvlcost =  levels[level+1][1]
               
               if (tix > lvlcost)
               {
                tix -= lvlcost
                level += 1 
                
               }else
               {
                alert("insufficient funds!")   
               }
               
            }

            function bonusMoney()
              {
                let price = spades[spade+1][1]/4;

                document.getElementById("t_text").innerHTML = "+${price}";
                setTimeout(() => {
                  document.getElementById("t_text").innerHTML = "";
                }, "2500");
                
              }
            /*function save()
              {

                localStorage.setItem("Ctix", tix);
                localStorage.setItem("Cworkers", workers);
                localStorage.setItem("Clevel", level);
                localStorage.setItem("Cgrams", grams);
                localStorage.setItem("Cspade", spade);
                localStorage.setItem("Crefiner", refiner);
                localStorage.setItem("Crebirths", rebirths);
                localStorage.setItem("Cdrill", drill);

                document.cookie = `tix=${tix}`;
                document.cookie = `workers=${workers}`;
                document.cookie = `level=${level}`;
                document.cookie = `grams=${grams}`;
                document.cookie = `spade=${spade}`;
                document.cookie = `refiner=${refiner}`;
                document.cookie = `rebirths=${rebirths}`;
                document.cookie = `drill=${drill}`;
              } */

      
            function load()
              {
                                if (localStorage.getItem("Ctix") != null || localStorage.getItem("Ctix" != NaN)) {
                 tix = parseInt(localStorage.getItem("Ctix"));
                workers = parseInt(localStorage.getItem("Cworkers"));
                level = parseInt(localStorage.getItem("Clevel"));
                grams = parseInt(localStorage.getItem("Cgrams"));
                spade = parseInt(localStorage.getItem("Cspade"));
                refiner = parseInt(localStorage.getItem("Crefiner"))
                rebirths = parseInt(localStorage.getItem("Crebirths"));
                drill = parseInt(localStorage.getItem("Cdrill"));
                                }
                else
                {
                  alert("ERROR")
                }
                
              }
            function travel()
              {
                window.location.href = "https://factory-deux.davidperez55.repl.co/Alien-Planet/alienplanet.html"
              }

            function rebirth()
              {
                 if (spades[spade][0]=="Godmatter")
                {
                  rebirths +=1
                  tix=0
                  grams=0
                  spade=0
                  level=0
                  refiner = 0
                  workers = 0
                  location.reload()
                } else
                 {
                   alert("you need Godmatter spade to do this")
                 }
              }


            function worker_pay()
              {
                for(let i = 0; i < workers; i++)
                  {
                    up()
                    setTimeout(250)                    
                  }
              }
            function dril()
              {
                if (drill > 0)
                {
                  up()
                }
                
              }
            
              function showText(button) {
                var text = document.createElement("div");
                text.classList.add("text");
                text.innerHTML = "+1";
                var offset = 20;
                var randomX = Math.floor(Math.random() * (offset * 2 + 1)) - offset;
                var randomY = Math.floor(Math.random() * (offset * 2 + 1)) - offset;
                text.style.top = "calc(50% + " + randomY + "px)";
                text.style.left = "calc(50% + " + randomX + "px)";
                if (button !=null) 
                {
                  button.appendChild(text);
                }
                
        setTimeout(function() {
          text.classList.add("active");
          setTimeout(function() {
            text.remove();
          }, 1000);
        }, 10);
}

document.onkeydown = keydown;

function keydown(evt){
  if (!evt) evt = event;
  if (evt.keyCode==90){
    document.location.assign("https://lansecreuse.schoology.com/");
  }
}
            

            setInterval(dril, 250);
          
            setInterval(updater, 50);
            setInterval(worker_pay, 250);