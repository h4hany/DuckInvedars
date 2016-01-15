window.onload = loaded;


function loaded() {

    setTimeout(function () {
        viewmenu();

    }, 1000);

}

var MainMenuFlag = true;
var menuIndex = 0;
var MaxMenuIndex = 3;
var MaxMainMenu = 3;
var MaxLevel = 2;
var Maxsetting=1 ;
var settingflag=false;
var menulevelflage=false;
var mainmenu=true;

var mute = false;
function Mute(){

alert("mute");
mute = true;

ReViewMenu();
}

function UnMute(){
alert("unmute");
mute = false;
ReViewMenu();
}

function MarkCurrMenu() {
if(mainmenu){MaxMenuIndex = MaxMainMenu;}
if(menulevelflage){MaxMenuIndex = MaxLevel;}
if(settingflag){MaxMenuIndex = Maxsetting;}

    for (var i = 0; i <= MaxMenuIndex; i++) {

//main menu
if(mainmenu){
        if (i == menuIndex  ) {
            var a = document.getElementById("" + i);
            a.style.background = "orange";
        }
        else {
            var a = document.getElementById("" + i);
            a.style.background = "black";
        }}

//level
if(menulevelflage){
        if (i == menuIndex ) {
            var a = document.getElementById("lev" + i);
            a.style.background = "orange";
        }
        else {
            var a = document.getElementById("lev" + i);
            a.style.background = "black";
        }}

//setting
if(settingflag){
        if (i == menuIndex ) {
            var a = document.getElementById("set" + i);
            a.style.background = "orange";
        }
        else {
            var a = document.getElementById("set" + i);
            a.style.background = "black";
        }}


    }
}
function EnterMenu() {
    

if(mainmenu){document.getElementById("" + menuIndex).click();}
else if(menulevelflage){document.getElementById("lev" + menuIndex).click();}
else if(settingflag){document.getElementById("set" + menuIndex).click();ReViewMenu();}
}


function MenuSelection(evt) {

    if (evt.keyCode == 38) {



//main menu
if(mainmenu){
        if (menuIndex == 0) {
            menuIndex = MaxMenuIndex;
        }
        else {
            menuIndex--;
        }}
//level menu
if(menulevelflage){
        if (menuIndex == 0) {
            menuIndex = MaxLevel;
        }
        else {
            menuIndex--;
        }
}
//setting menu
if(settingflag){
        if (menuIndex == 0) {
            menuIndex = Maxsetting;
        }
        else {
            menuIndex--;
        }
}

        MarkCurrMenu();
    }


    if (evt.keyCode == 40) {



//main menu
if(mainmenu){
        if (menuIndex == MaxMenuIndex) {
            menuIndex = 0;
        }
        else {
            menuIndex++;
        }}
//level menu
if(menulevelflage){
        if (menuIndex == MaxLevel) {
            menuIndex = 0;
        }
        else {
            menuIndex++;
        }}

//setting menu
if(settingflag){
        if (menuIndex == Maxsetting) {
            menuIndex = 0;
        }
        else {
            menuIndex++;
        }}


        MarkCurrMenu();
    }
    if (evt.keyCode == 27) {
        ReViewMenu();


    }


    if (evt.keyCode == 13) {
        EnterMenu();


    }
}


window.addEventListener('keydown', MenuSelection);


function viewmenu() {
    var loading = document.getElementById("loading");
    loading.style.display = "none";

    var vid = document.getElementById("vid");
    vid.style.display = "block";

    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "block";
menuIndex = 0;
    MarkCurrMenu();

}


function viewinstruction() {


    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "none";
    var inst = document.getElementById("inst");
    inst.style.display = "block";

}


function viewabout() {

    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "none";


    var about = document.getElementById("about");
    about.style.display = "block";

}

function viewSettings() {

    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "none";


    var settings = document.getElementById("settings");
    settings.style.display = "block";

settingflag=true;
mainmenu=false;

menuIndex = 0;
    MarkCurrMenu();

}


function ReViewMenu() {

 menulevelflage=false;
settingflag=false;
mainmenu=true;

    window.addEventListener('keydown', MenuSelection);

    var loading = document.getElementById("loading");
    loading.style.display = "none";

    var vid = document.getElementById("vid");
    vid.style.display = "block";

    var another = document.getElementById("another");
    another.style.display = "none";

    var about = document.getElementById("about");
    about.style.display = "none";

    var inst = document.getElementById("inst");
    inst.style.display = "none";

    var settings = document.getElementById("settings");
    settings.style.display = "none";



 var winner = document.getElementById("winner");
    winner.style.display = "none";

    var loser = document.getElementById("loser");
    loser.style.display = "none";

   var menudivLevel = document.getElementById("menudivLevel");
    menudivLevel.style.display = "none";

    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "block";
   

menuIndex = 0;
    MarkCurrMenu();

}


function ViewLoser() {

    window.addEventListener('keydown', MenuSelection);

    var loading = document.getElementById("loading");
    loading.style.display = "none";

    var vid = document.getElementById("vid");
    vid.style.display = "block";

    var another = document.getElementById("another");
    another.style.display = "none";

    var about = document.getElementById("about");
    about.style.display = "none";

    var inst = document.getElementById("inst");
    inst.style.display = "none";

    var settings = document.getElementById("settings");
    settings.style.display = "none";

    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "none";
   var menudivLevel = document.getElementById("menudivLevel");
    menudivLevel.style.display = "none";



    var loser = document.getElementById("loser");
    loser.style.display = "block";

}



function ViewWinner() {

    window.addEventListener('keydown', MenuSelection);

    var loading = document.getElementById("loading");
    loading.style.display = "none";

    var vid = document.getElementById("vid");
    vid.style.display = "block";

    var another = document.getElementById("another");
    another.style.display = "none";

    var about = document.getElementById("about");
    about.style.display = "none";

    var inst = document.getElementById("inst");
    inst.style.display = "none";

    var settings = document.getElementById("settings");

    settings.style.display = "none";

    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "none";

    var loser = document.getElementById("loser");
    loser.style.display = "none";
   var menudivLevel = document.getElementById("menudivLevel");
    menudivLevel.style.display = "none";

    var winner = document.getElementById("winner");
    winner.style.display = "block";

}


function newgame() {
    var menudivLevel = document.getElementById("menudivLevel");
    menudivLevel.style.display = "block";

    var menudiv = document.getElementById("menudiv");
    menudiv.style.display = "none";
 menulevelflage=true;
mainmenu=false;

menuIndex = 0;
    MarkCurrMenu();

}



function newgameEasy() {

var menudivLevel = document.getElementById("menudivLevel");
    menudivLevel.style.display = "none";


    var another = document.getElementById("another");
    another.style.display = "block";
    window.removeEventListener('keydown', MenuSelection);
    level(1,1,1,1,2,1,2,70000,3000,1000,3,0,0);

}


function newgameMid() {
    var menudivLevel = document.getElementById("menudivLevel");
    menudivLevel.style.display = "none";

    var another = document.getElementById("another");
    another.style.display = "block";
    window.removeEventListener('keydown', MenuSelection);
    level(2,2,5,1,2,2,3,70000,2000,2000,3,0,0);

}


function newgameHard() {
   var menudivLevel = document.getElementById("menudivLevel");
    menudivLevel.style.display = "none";

    var another = document.getElementById("another");
    another.style.display = "block";
    window.removeEventListener('keydown', MenuSelection);
    level(3,3,10,1,2,3,6,70000,1000,3000,3,0,0);

}




function level(levelnum , duckdeath , monsterdeth , duckcolor1, duckcolor2 , monstercolor1 , monstercolor2 , ducktime , EGGGENTIME, GIFTGENTIME, GunLifesLevel, BIGSHOT , coinCounterprev) {

soundMutecheckin();
    soundPlayjak();


var levelID=levelnum;
var lifeOfDuck=duckdeath;
var lifeOfMonster=monsterdeth;
var chgDuckColor1=duckcolor1;
var chgDuckColor2=duckcolor2;
var chgMonsterColor1=monstercolor1;
var chgMonsterColor2=monstercolor2;
var leveltime =ducktime;
var EGGtime =EGGGENTIME;
var Gifttime =GIFTGENTIME;
var LoseGame =false;


var StillGeneratingDucks=true;


    var maxD = window.innerHeight;
    var maxR = window.innerWidth;

    var anotherdiv = document.getElementById("another");


    var gun = document.getElementById("ship");
    gun.style.display = 'block';
    //gun.focus();
    var gunPosTop = 0;
    var gunPosLeft = 0;
    var gunwidth = gun.offsetWidth;
    var gunheight = gun.offsetHeight;
    var shotIDs = [];
    var shotIDsCounter = 0;
    var shotIntervals = [];
    var Ducks = [];
    var DucksIDsCounter = 0;
    var glopalIntervals = [];
    var glopalTimeouts = [];
    var restflag = false;
    gun.style.left = maxR / 2 - 40 + 'px';
    gun.style.top = maxD - gunheight + 'px';
    gunPosTop = maxD - gunheight;
    gunPosLeft = maxR / 2 - 40;

    var GunLiveCounter = GunLifesLevel;
    var GunCollisionFlag = true;
    var GunSuperPower = BIGSHOT;
    var life = document.getElementById('lifeNo');
    life.innerHTML = '' + GunLiveCounter;
    var superGun = document.getElementById('supergun');
    superGun.innerHTML = '' + GunSuperPower;
    var coinCounter =coinCounterprev;
    var coins = document.getElementById('dcoin');
    coins.innerHTML = '' + coinCounter;


    var eggcounter = 0;


    var newduckrow = 0;
    var newduckcell = 0;
    var stopgenrating = 0;
    var giftcounter = 0;
	var monsterIN = false;
function removeusedbyclean(myElemm){setTimeout(function(){myElemm.parentNode.removeChild(myElemm);win();},1200);}

function cleanzerolife()
{

 for (var i = 25; i >= 0; i--) {
            var myElemm = document.getElementById('duckID' + i);
            if (myElemm === null) {

            }
            else {

var duckLIFECOUNTER = myElemm.getAttribute('life');
if(duckLIFECOUNTER<=0){
                

removeusedbyclean(myElemm);
}
            }


}

myElem = document.getElementById('duckID6000');
 if (myElem === null) {

            }
            else {

var duckLIFECOUNTER = myElemm.getAttribute('life');
if(duckLIFECOUNTER<=0){
                removeusedbyclean(myElemm);}
            }


}
    function levelMonster() {


monsterIN = true;
        var body = document.getElementById('body');
        var div = document.getElementById('maindiv');
        div.innerHTML = '<img name="duckarr" id="duckID6000" life="'+ lifeOfMonster +'" src="assets/img/2.png"  style="display:block;position:absolute; top:0px; left:0px;width:200px;height:193px;"  >';
        var mons = document.getElementById('duckID6000');
        var width =  window.innerWidth;//window.innerWidth;
        var height = window.innerHeight;
        mons.style.left = window.innerWidth/2 + 'px';
        mons.style.top = -100 + 'px';
        div.appendChild(mons);

        var step = 2;

        function GetRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        function SetRandomStep(currentLoc,nxtLoc){
            if(nxtLoc < currentLoc)
                return -parseInt(GetRandomArbitrary(1,10));
            else
                return parseInt(GetRandomArbitrary(1,10));
        }

        function MoveMonester(){
DuckCollisionWithGunRect();
            var y = mons.offsetTop;
            var x = mons.offsetLeft;
            var signX = stepX/Math.abs(stepX);
            var signY = stepX/Math.abs(stepY);
            var doneX = false;
            var doneY = false;
            if(signX*x < signX*nxtDestX){
                x += stepX;
                mons.style.left = x + 'px';
            }
            else {
                doneX = true;
            }
            if(signY*y < signY*nxtDestY){
                y += stepY;
                mons.style.top = y +'px';
            }
            else {
                doneY = true;
            }
            if(doneX && doneY){
                clearInterval(monsInterval);
                var currY = parseInt(mons.style.top);
                var currX = parseInt(mons.style.left);
                nxtDestY = parseInt(GetRandomArbitrary(20,height));
                nxtDestX = parseInt(GetRandomArbitrary(20,width));
                stepY = SetRandomStep(currY,nxtDestY);
                stepX = SetRandomStep(currX,nxtDestX);
                monsInterval = setInterval(MoveMonester,1);

glopalIntervals.push(monsInterval);
            }
        }

        function MonesterEntry(){
DuckCollisionWithGunRect();
            var boundry = parseInt(parseInt(window.innerHeight)/2);
            var top = parseInt(mons.style.top);
            if(top < boundry){
                top += 2;
                mons.style.top = top +'px';

            }
            else
            {
                clearInterval(monsInterval);
                monsInterval = setInterval(MoveMonester,100);
		glopalIntervals.push(monsInterval);
            }
        }




        TurnOnEggGenerate();
	
        var nxtDestX = parseInt(GetRandomArbitrary(20,width));
        var nxtDestY = parseInt(GetRandomArbitrary(20,height));
        var monsInterval = setInterval(MonesterEntry,20);
	glopalIntervals.push(monsInterval);
        var stepX;
        var stepY;
        


    }
    function removeelments() {

        
        for (var i = 0; i <= glopalTimeouts.length; i++) {


            clearTimeout(glopalTimeouts[i]);

        }

        for (var i = 0; i <= glopalIntervals.length; i++) {


            clearInterval(glopalIntervals[i]);

        }

//remove all kebt eggs

        for (var i = eggcounter; i >= 0; i--) {
            var myElem = document.getElementById('egg' + i);
            if (myElem === null) {
                //break;
            }
            else {
                myElem.parentNode.removeChild(myElem);
            }
        }
//remove all kebt gifts

        for (var i = giftcounter; i >= 0; i--) {
            var myElem = document.getElementById('gift' + i);
            if (myElem === null) {
                //break;
            }
            else {
                myElem.parentNode.removeChild(myElem);
            }
        }
//remove all kebt shots

        for (var i = shotIDsCounter; i >= 0; i--) {
            var myElem = document.getElementById('shot' + i);
            if (myElem === null) {
              //  break;
            }
            else {
                myElem.parentNode.removeChild(myElem);
            }
        }

//remove monster
	var myElem = document.getElementById('duckID6000');
            if (myElem === null) {
               
            }
            else {
                myElem.parentNode.removeChild(myElem);
            }

    }


    function reset(level) {


        TurnOffEggGenerate();
        TurnOffDuckMovement();
        TurnOffgiftGenerate();
        restflag = true;
        removeelments();

        for (var i = 25; i >= 0; i--) {
            var myElem = document.getElementById('duckID' + i);
            if (myElem === null) {

            }
            else {
                myElem.parentNode.removeChild(myElem);
            }


        }
        window.removeEventListener('keydown', moveSelection);

        if (level == 0) {//loser
            ViewLoser();
        }
	else if(level == 2)
	{
	ViewWinner();
	}
        else if (level != -1) {

            ReViewMenu();soundMute();
        }


    }

    function giftaction(type) {


        if (type == 0) {
            GunLiveCounter++;
            life.innerHTML = '' + GunLiveCounter;

        }
        if (type == 1) {
            GunLiveCounter++;
            life.innerHTML = '' + GunLiveCounter;

        }
        if (type == 2) {
            var randomgift = Math.floor(Math.random() * 3);
            GunLiveCounter++;
            life.innerHTML = '' + GunLiveCounter;

        }

        if (type == 3) {
            GunSuperPower++;
            superGun.innerHTML = '' + GunSuperPower;

        }


    }

    function giftCollisionWithGun(interID, giftid, type) {


        giftIdSelector = document.getElementById(giftid);

        var GunRect = gun.getBoundingClientRect();
        var giftRect = giftIdSelector.getBoundingClientRect();
        if (giftRect.left >= GunRect.left && giftRect.left <= GunRect.right && giftRect.top <= GunRect.bottom && giftRect.top >= GunRect.top) {
            giftSound();
            clearInterval(interID);

            giftIdSelector.parentNode.removeChild(giftIdSelector);

            giftaction(type);


        }

    }


    function gift() {
        var id = 1;
        var laser_div = document.getElementById("las");
        var flagout = 0;
        var duckid = "";
        var randomgifttype = Math.floor(Math.random() * 4);
var duckarrgiftbefore = document.getElementsByName("duckarr");

if(duckarrgiftbefore.length >0){
        do {
            var randomduck = Math.floor(Math.random() * DucksIDsCounter);

            var duckarrgift = document.getElementsByName("duckarr");
            //var duckIdgift=[];

            var strcond = 'duckID' + randomduck;
            if (duckarr != null) {
                for (var i = 0; i < duckarrgift.length; i++) {

                    duckid = '' + duckarrgift[i].id;
                    if (duckid == strcond) {
                        flagout = 1;
                        break;
                    }

                }
            }

        } while (flagout == 0);

        var gun = document.getElementById(duckid);//+randomduck);
        var gunrect = gun.getBoundingClientRect();
        var posBottom = gunrect.top + (gunheight / 2);//parseInt(gun.style.top)+(gunheight/2)-20;
        var posLeft = gunrect.left + (gunwidth / 2);//parseInt(gun.style.left)+(gunwidth/2)-5;

        laser_div.innerHTML = laser_div.innerHTML + '<img id="gift' + giftcounter + '" src="assets/img/gift' + randomgifttype + '.png"  style="position:absolute;left:' + posLeft + 'px;top:' + posBottom + 'px"  height = "45">';


      

        var giftiddd = 'gift' + giftcounter;


        var loop = setInterval(function () {
            glopalIntervals.push(loop);

            var laser = document.getElementById(giftiddd);
            if (laser === null) {
                clearInterval(loop);
            }
            else {
                laser.style.top = parseInt(laser.style.top) + 5 + 'px';

                giftCollisionWithGun(loop, giftiddd, randomgifttype);

                if (parseInt(laser.style.top) > maxD) {
                    clearInterval(loop);
                    laser.parentNode.removeChild(laser);
                }
            }

        }, 50);


        giftcounter++;}
    }

    var newgift = null;

    function TurnOngiftGenerate() {
        var randomtime = 0;
        newgift = setInterval(function () {
            glopalIntervals.push(newgift);
            randomtime = Math.floor(Math.random() * 1000) + 500;

        

            var gifttimeout = setTimeout(gift, randomtime);
            glopalTimeouts.push(gifttimeout);

        }, Gifttime);
    }

    function TurnOffgiftGenerate() {

        clearInterval(newgift);
    }

    function MoveDuckOutMovement(duckidselect) {
        var clearintervalflag1 = 0;
        var clearintervalflag2 = 0;

        var duck_selctor = duckidselect;//document.getElementById('duckID'+duckidselect);


        var duckrect = duck_selctor.getBoundingClientRect();
        var ducktop = duckrect.top;
        var duckleft = duckrect.left;




        duck_selctor.style.position = 'absolute';
        duck_selctor.style.top = ducktop + 'px';
        duck_selctor.style.left = duckleft + 'px';
        duck_selctor.setAttribute('src', 'assets/img/leftduck.gif');
        var duckmoveout = setInterval(function () {

            glopalIntervals.push(duckmoveout);

            var topp = parseInt(duck_selctor.style.top);
            var leff = parseInt(duck_selctor.style.left);

            if (leff >= 0) {
                duck_selctor.style.left = parseInt(duck_selctor.style.left) - 8 + 'px';
            }
            else {
                clearintervalflag1 = 1;
            }

            if (topp <= maxD) {
                duck_selctor.style.top = parseInt(duck_selctor.style.top) + 8 + 'px';
            }
            else {
                clearintervalflag2 = 1;
            }

            if (clearintervalflag1 == 1 && clearintervalflag2 == 1) {


                clearInterval(duckmoveout);
                var toppp = parseInt(duck_selctor.style.top);
                var lefff = parseInt(duck_selctor.style.left);



                duck_selctor.parentNode.removeChild(duck_selctor);


                var duckarr = document.getElementsByName("duckarr");
                if (typeof duckarr != "undefined" && duckarr != null && duckarr.length > 0) {

                }
                else {
                    win();

                }

                //duck_selctor.style.display="none";
            }


        }, 50);
    }

    function MoveDuckOutTimeOut(duckidselect, time) {
        var moveduckouttime = setTimeout(function () {
            MoveDuckOutMovement(duckidselect);
        }, time);

        glopalTimeouts.push(moveduckouttime);
    }

    function EndDucksLevel() {

        var icounter = 0;
        var time = 1000;
        for (var i = 25; i >= 0; i--) {
            time = 1000 * icounter;
            var myElem = document.getElementById('duckID' + i);
            if (myElem === null) {

            }
            else {
                icounter++;
                MoveDuckOutTimeOut(myElem, time);
            }


        }


    }

    var leveltimeout = setTimeout(function () {

        if (!restflag) {
            removeelments();
            TurnOffEggGenerate();
            TurnOffDuckMovement();
            TurnOffgiftGenerate();


            EndDucksLevel();


        }
    }, leveltime);

    glopalTimeouts.push(leveltimeout);

    var duckgenerate = setInterval(function () {

        glopalIntervals.push(duckgenerate);

        var duck_div = document.getElementById("duck-div");
        var table = document.getElementById("ducktable");
        if (newduckrow >= table.rows.length) {
            var turnonmovements = setTimeout(function () {

                soundMute();
                chikenSound();
                TurnOnDuckMovement();
                TurnOnEggGenerate();
                TurnOngiftGenerate();
StillGeneratingDucks=false;
win();
            }, 6000);

            glopalTimeouts.push(turnonmovements);

            clearInterval(duckgenerate);
        }


        if (newduckcell <= table.rows[newduckrow].cells.length - 1) {

            table.rows[newduckrow].cells[newduckcell].innerHTML = '<img life="'+ lifeOfDuck +'" name="duckarr" id="duckID' + DucksIDsCounter + '" src="assets/img/moving.gif"  style="display:block;position:absolute;top:' + maxD + 'px;left:' + maxR + 'px" width="100" height = "100" >';


            var duckselctor = 'duckID' + DucksIDsCounter;
            Ducks.push(duckselctor);
            var duck_selctor = document.getElementById(duckselctor);
            var celvar = table.rows[newduckrow].cells[newduckcell];
            var celrect = celvar.getBoundingClientRect();
            var clearintervalflag1 = 0;
            var clearintervalflag2 = 0;


            var duckmove = setInterval(function () {

                glopalIntervals.push(duckmove);
                if (parseInt(duck_selctor.style.left) > celrect.left && clearintervalflag1 == 0) {
                    duck_selctor.style.left = parseInt(duck_selctor.style.left) - 8 + 'px';
                }

                else {
                    clearintervalflag1 = 1;
                }

                if (parseInt(duck_selctor.style.top) > celrect.top && clearintervalflag2 == 0) {
                    duck_selctor.style.top = parseInt(duck_selctor.style.top) - 8 + 'px';
                }
                else {
                    clearintervalflag2 = 1;
                }

                if (clearintervalflag1 == 1 && clearintervalflag2 == 1) {
                    duck_selctor.style.position = 'relative';
                    duck_selctor.style.top = '0px';
                    duck_selctor.style.left = '0px';
                    clearInterval(duckmove);

                    var duckLIFECOUNTER = duck_selctor.getAttribute('life');

                    if(duckLIFECOUNTER == chgDuckColor1){duck_selctor.setAttribute('src',"assets/img/dead-duck1.png");}
                    else if(duckLIFECOUNTER == chgDuckColor2){duck_selctor.setAttribute('src',"assets/img/dead-duck2.png");}
                    else {duck_selctor.setAttribute('src', 'assets/img/dead-duck.png');}}
                DuckCollisionWithGunRect();
            }, 50);


            newduckcell++;

        }
        else {

            newduckcell = 0;
            newduckrow++;
        }


        DucksIDsCounter++;

    }, 1000);

    function win() {


			var duckarr = document.getElementsByName("duckarr");
			if (typeof duckarr != "undefined" && duckarr != null && duckarr.length > 0) {


console.log("False");

			}
			else {
console.log("true");


				if(monsterIN && !LoseGame)
					{
removeelments();
reset(-1);



if(levelID==1)
	{
    alert("Press Ok to start Level 2");
    level(2,2,5,1,2,2,3,70000,2000,2000,GunLiveCounter,GunSuperPower,coinCounter);
}
		
else if(levelID==2){
alert("Press Ok to start Level 3");
 level(3,3,10,1,2,3,6,70000,1000,3000,GunLiveCounter,GunSuperPower,coinCounter);
}
else {reset(2);}
			}

				else if(!monsterIN && !LoseGame &&!StillGeneratingDucks ) {


TurnOffEggGenerate();
        TurnOffDuckMovement();
        TurnOffgiftGenerate();removeelments();
			levelMonster();
					}
			    }



    }


    


    function loser() {

LoseGame =true;
        reset(0);


    }


    function RemoveGun() {
        gun.style.display = 'none';
        GenerateGun();
    }

    function GenerateGun() {


        if (GunLiveCounter > 0) {
            GunLiveCounter--;
            life.innerHTML = '' + GunLiveCounter;

            GunCollisionFlag = false;
            var time1 = setTimeout(function () {
                gun.style.display = 'block';
            }, 1000);

var Blink=true;
var gunBlink = setInterval(function(){
if(Blink)
{gun.style.display = 'block';Blink=false;}
else
{gun.style.display = 'none';Blink=true;}
},100);
glopalIntervals.push(gunBlink);

            var time2 = setTimeout(function () {
                
gun.style.display = 'block';
GunCollisionFlag = true;
clearInterval(gunBlink);
            }, 3000);
            glopalTimeouts.push(time1);
            glopalTimeouts.push(time2);

        }
        else {
            loser();
        }


    }

    function DuckCollisionWithGunRect() {

        if (GunCollisionFlag) {

            duckarr = document.getElementsByName("duckarr");

            if (duckarr != null) {
                for (var i = 0; i < duckarr.length; i++) {
                    duckId = duckarr[i];
                    var GunRectRect = gun.getBoundingClientRect();

                    var duckrect = duckId.getBoundingClientRect();

                    if (GunRectRect.left >= duckrect.left && GunRectRect.left <= duckrect.right && GunRectRect.top <= duckrect.bottom && GunRectRect.top >= duckrect.top) {

var duckLIFECOUNTER = duckId.getAttribute('life');
                    duckLIFECOUNTER--;
                    duckId.setAttribute('life',duckLIFECOUNTER);

            


                    if(duckLIFECOUNTER == chgDuckColor1 && !monsterIN ){duckId.setAttribute('src',"assets/img/dead-duck1.png");}
                    if(duckLIFECOUNTER == chgDuckColor2 && !monsterIN ){duckId.setAttribute('src',"assets/img/dead-duck2.png");}
		    
		    if(duckLIFECOUNTER == chgMonsterColor1 && monsterIN ){duckId.setAttribute('src',"assets/img/4.png");}
                    if(duckLIFECOUNTER == chgMonsterColor2 && monsterIN ){duckId.setAttribute('src',"assets/img/3.png");}

		if(duckLIFECOUNTER <=0)
{
                        PlaySound();

                        duckId.parentNode.removeChild(duckId);

                        var index = Ducks.indexOf(duckId.id);
 coinCounter=coinCounter+100;
                        coins.innerHTML = '' + coinCounter;
                        deleteFromArray(Ducks, index);
}
                        RemoveGun();
win();

                    }
                }


            }

        }


    }

    function EggCollisionWithGun(interID, eggid) {


        if (GunCollisionFlag) {

            EggIdSelector = document.getElementById(eggid);

            var GunRect = gun.getBoundingClientRect();
            var EggRect = EggIdSelector.getBoundingClientRect();
            if (EggRect.left >= GunRect.left && EggRect.left <= GunRect.right && EggRect.top <= GunRect.bottom && EggRect.top >= GunRect.top) {
                PlaySound();
                clearInterval(interID);

                EggIdSelector.parentNode.removeChild(EggIdSelector);

                RemoveGun();

            }
        }
    }

    function egg() {
        var id = 1;
        var laser_div = document.getElementById("las");
        var flagout = 0;
        var duckid = "";
var duckarrEggBeforeLoop = document.getElementsByName("duckarr");
if(duckarrEggBeforeLoop.length > 0){
        do {
            

            var duckarrEgg = document.getElementsByName("duckarr");
var randomduck =1;

if(!monsterIN)
randomduck = Math.floor(Math.random() * DucksIDsCounter);
else{
randomduck =6000;
}            

            var strcond = 'duckID' + randomduck;
            if (duckarr != null) {
                for (var i = 0; i < duckarrEgg.length; i++) {

                    duckid = '' + duckarrEgg[i].id;
                    if (duckid == strcond) {
                        flagout = 1;
                        break;
                    }

                }
            }

        } while (flagout == 0);

        var gun = document.getElementById(duckid);//+randomduck);
        var gunrect = gun.getBoundingClientRect();
        var posBottom = gunrect.top + (gunheight / 2);//parseInt(gun.style.top)+(gunheight/2)-20;
        var posLeft = gunrect.left + (gunwidth / 2);//parseInt(gun.style.left)+(gunwidth/2)-5;

        laser_div.innerHTML = laser_div.innerHTML + '<img id="egg' + eggcounter + '" src="assets/img/egg.png"  style="position:absolute;left:' + posLeft + 'px;top:' + posBottom + 'px"  height = "45">';

        var eggiddd = 'egg' + eggcounter;

        var loop = setInterval(function () {
            glopalIntervals.push(loop);

            var laser = document.getElementById(eggiddd);
            if (laser === null) {
                clearInterval(loop);
            }
            else {
                laser.style.top = parseInt(laser.style.top) + 5 + 'px';

                EggCollisionWithGun(loop, eggiddd);

                if (parseInt(laser.style.top) > maxD) {
                    clearInterval(loop);
                    laser.parentNode.removeChild(laser);
                }
            }

        }, 50);


        eggcounter++;}
    }

    var moooveducks = null;

    function TurnOnDuckMovement() {

        moooveducks = setInterval(function () {

            glopalIntervals.push(moooveducks);
            moveduckdiv();
            DuckCollisionWithGunRect();
        }, 50);

    }

    function TurnOffDuckMovement() {

        clearInterval(moooveducks);

    }

    var newegg = null;

    function TurnOnEggGenerate() {
        var randomtime = 0;
        newegg = setInterval(function () {

            glopalIntervals.push(newegg);
            randomtime = Math.floor(Math.random() * 20000);

            var eggtimeout = setTimeout(egg, randomtime);
            glopalTimeouts.push(eggtimeout);


        }, EGGtime);
    }

    function TurnOffEggGenerate() {

        clearInterval(newegg);
    }


    flagtoright = 0;

    function soundMute() {
        var audio = document.getElementById('mik');
        audio.innerHTML = '';

    }

    function soundMutecheckin() {
        var Chicken = document.getElementById('Chicken');
        Chicken.innerHTML = '';

    }

    function soundPlayjak() {
if(!mute){
        var audio = document.getElementById('mik');
        audio.innerHTML = '		<audio autoplay ><source src="assets/sound/jakson.mp3"></audio>';
}
    }

    function chikenSound() {
if(!mute){
        var audio = document.getElementById('Chicken');
        audio.innerHTML = '<audio autoplay ><source src="assets/sound/Chicken.mp3"></audio>';
   } }

    function moveduckdiv() {

        var duck_div = document.getElementById("duck-div");
        var duck_div_width = duck_div.offsetWidth;
        if (parseInt(duck_div.style.left) > 30 && flagtoright == 0) {
            duck_div.style.left = parseInt(duck_div.style.left) - 8 + 'px';
        }
        else {
            flagtoright = 1;
        }
        if (flagtoright == 1 && parseInt(duck_div.style.left) < maxR - duck_div_width) {
            duck_div.style.left = parseInt(duck_div.style.left) + 8 + 'px';
        }
        else {
            flagtoright = 0;
        }

    }

//sound effect
    function PlaySound() {
if(!mute){
        var audio = document.getElementById('dummy');
        audio.innerHTML = '<audio autoplay ><source src="assets/sound/duck.mp3"></audio>';}
    }




    function PlaySoundshot() {
if(!mute){
        var shot = document.getElementById('Shot');
        shot.innerHTML = '<audio autoplay ><source src="assets/sound/shot.mp3"></audio>';}
    }



    function PlaySoundbigshot() {
if(!mute){
        var shot = document.getElementById('BigShot');
        shot.innerHTML = '<audio autoplay ><source src="assets/sound/bigshot.mp3"></audio>';}
    }


    function giftSound() {
if(!mute){
        var audio = document.getElementById('dummy');
        audio.innerHTML = '<audio autoplay ><source src="assets/sound/gift.mp3"></audio>';}
    }

// ship movement
    function leftArrowPressed() {
        var ship = document.getElementById('ship');

        if (gunPosLeft > 0) {
            gunPosLeft = gunPosLeft - 20;
            gun.style.left = gunPosLeft + 'px';
        }
        ship.setAttribute('src', 'assets/img/ship3dL.png');

    }

    function rightArrowPressed() {
        var ship = document.getElementById('ship');
        if ((gunPosLeft + 25 + gunwidth) < maxR) {
            gunPosLeft = gunPosLeft + 20;
            gun.style.left = gunPosLeft + 'px';
        }
        ship.setAttribute('src', 'assets/img/ship3dR.png');

    }

    function upArrowPressed() {

        if ((gunPosTop - 10) > 0) {
            gunPosTop -= 5;
            gun.style.top = gunPosTop + 'px';
        }
    }

    function downArrowPressed() {

        if ((gunPosTop + gunheight) < maxD) {
            gunPosTop += 5;
            gun.style.top = gunPosTop + 'px';
        }


    }

//collision
    function collision(laserId, interID) {
        var duckarr = document.getElementsByName("duckarr");
        if (duckarr != null) {
            for (var i = 0; i < duckarr.length; i++) {

                var duckId = duckarr[i];

                var duckLIFECOUNTER = duckId.getAttribute('life');



                var laserrect = laserId.getBoundingClientRect();
                var duckrect = duckId.getBoundingClientRect();
                if (laserrect.left >= duckrect.left && laserrect.left <= duckrect.right && laserrect.top <= duckrect.bottom && laserrect.top >= duckrect.top)
                {   clearInterval(interID);
                    laserId.parentNode.removeChild(laserId);
                    PlaySound();

                    duckLIFECOUNTER--;
                    duckId.setAttribute('life',duckLIFECOUNTER);
                 
                    if(duckLIFECOUNTER == chgDuckColor1 && !monsterIN ){duckId.setAttribute('src',"assets/img/dead-duck1.png");}
                    if(duckLIFECOUNTER == chgDuckColor2 && !monsterIN ){duckId.setAttribute('src',"assets/img/dead-duck2.png");}
		    
		            if(duckLIFECOUNTER == chgMonsterColor1 && monsterIN ){duckId.setAttribute('src',"assets/img/4.png");}
                    if(duckLIFECOUNTER == chgMonsterColor2 && monsterIN ){duckId.setAttribute('src',"3.png");}

                    if(duckLIFECOUNTER <= 0){



                    duckId.setAttribute('src', 'assets/img/dead-duck.gif');

                    var newduckid = duckId.id;
                    var newduckselector = document.getElementById(newduckid);
                    newduckselector.setAttribute('name', 'anothername');
                    newduckselector.setAttribute('id', 'anotherid');
                    function deleteduckimg() {
                        newduckselector.parentNode.removeChild(newduckselector);
                    }
                    setTimeout(deleteduckimg, 1200);
                    var index = Ducks.indexOf(duckId.id);
                    deleteFromArray(Ducks, index);
                        coinCounter=coinCounter+100;
                        coins.innerHTML = '' + coinCounter;

                    win();
                    }
                   }
            }

        }


        }



    function deleteFromArray(array, indexToDelete) {
        var remain = [];
        for (var i in array) {
            if (array[i] == indexToDelete) {
                continue;
            }
            remain.push(array[i]);
        }
        return remain;
    }


//fire
    function fire(evt) {
        if (evt.keyCode == 32) {
PlaySoundshot();

            var duck = document.getElementById("duck");
            var afterExp = document.getElementById('remove-duck');

            var id = 1;
            var laser_div = document.getElementById("las");
            var gun = document.getElementById("ship");

            var posTop = gunPosTop + (gunheight / 2) - 20;
            var posLeft = gunPosLeft + (gunwidth / 2) - 5;

            laser_div.innerHTML = laser_div.innerHTML + '<img id="shot' + shotIDsCounter + '" src="assets/img/las.png"  style="position:absolute;left:' + posLeft + 'px;top:' + posTop + 'px"  height = "45">';

            shotIDs.push('shot' + shotIDsCounter);

            var shotiddd = 'shot' + shotIDsCounter;

            var loop = setInterval(function () {

                glopalIntervals.push(loop);

                var laser = document.getElementById(shotiddd);

                laser.style.top = parseInt(laser.style.top) - 20 + 'px';


                collision(laser, loop);

                if (parseInt(laser.style.top) < 0) {
                    clearInterval(loop);
                    laser.parentNode.removeChild(laser);
                }

            }, 5);


            shotIDsCounter++;
        }

    }

    function EscPuase() {
        var strconfirm = confirm("Do you want to EXIT?");
        if (strconfirm == true) {
		
            reset(1);
        }
        

    }

    function destroyAll(evt) {
        if (GunSuperPower > 0) {
            if (evt.keyCode == 32) {
                var duck = document.getElementById("duck");
                var id = 1;
                var laser_div = document.getElementById("las");
                var posTop = gunPosTop + (gunheight / 2) - 20;
                var posLeft = gunPosLeft + (gunwidth / 2) - 5;
                laser_div.innerHTML = laser_div.innerHTML + '<img id="shot' + shotIDsCounter + '" src="assets/img/Rocket.png"  style="position:absolute;left:' + posLeft + 'px;top:' + posTop + 'px"  height = "45">';
                shotIDs.push('shot' + shotIDsCounter);
                var shotiddd = 'shot' + shotIDsCounter;
                var loop = setInterval(function () {
                    glopalIntervals.push(loop);
                    var laser = document.getElementById(shotiddd);
                    laser.style.top = parseInt(laser.style.top) - 20 + 'px';
                    collisionAll(laser, loop);
                    if (parseInt(laser.style.top) < 0) {
                        clearInterval(loop);
                        laser.parentNode.removeChild(laser);
                    }

                }, 5);
                shotIDsCounter++;
            }
            GunSuperPower--;
            superGun.innerHTML = '' + GunSuperPower;
        }
        else{}
    }



    function destroyAll(evt) {

        if (GunSuperPower > 0) {
            if (evt.keyCode == 17) {
PlaySoundbigshot();
                //removeelments();
                var duck = document.getElementById("duck");

                var id = 1;
                var laser_div = document.getElementById("las");
                var posTop = gunPosTop + (gunheight / 2) - 20;
                var posLeft = gunPosLeft + (gunwidth / 2) - 5;

                laser_div.innerHTML = laser_div.innerHTML + '<img id="shot' + shotIDsCounter + '" src="assets/img/Rocket.png"  style="position:absolute;left:' + posLeft + 'px;top:' + posTop + 'px"  height = "45">';

                shotIDs.push('shot' + shotIDsCounter);
                var shotiddd = 'shot' + shotIDsCounter;

                var loop = setInterval(function () {
                    glopalIntervals.push(loop);
                    var laser = document.getElementById(shotiddd);

                    laser.style.top = parseInt(laser.style.top) - 20 + 'px';


                    

                    if (parseInt(laser.style.top) < 0) {
                        clearInterval(loop);
                        laser.parentNode.removeChild(laser);collisionAll();
                    }

                }, 5);


                shotIDsCounter++;
            }


            GunSuperPower--;
            superGun.innerHTML = '' + GunSuperPower;

        }
        else {


        }
        //removeelments();

    }




    function collisionAll(laserId, interID) {

        var duckarr = document.getElementsByName("duckarr");
        var ducktable = document.getElementById('ducktable');

        if (duckarr != null) {
            for (var i = 0; i < duckarr.length; i++) {
                duckId = duckarr[i];
                var duckrect = duckId.getBoundingClientRect();

               
                    PlaySound();
                    clearInterval(interID);

                  
                        var myElem = document.getElementById(duckId.id);
                        if (myElem === null) {

                        }
                        else {




 var duckLIFECOUNTER = myElem.getAttribute('life');
                    duckLIFECOUNTER--;


                    myElem.setAttribute('life',duckLIFECOUNTER);
                 
 if(duckLIFECOUNTER == chgDuckColor1 && !monsterIN ){myElem.setAttribute('src',"assets/img/dead-duck1.png");}
                    if(duckLIFECOUNTER == chgDuckColor2 && !monsterIN ){myElem.setAttribute('src',"assets/img/dead-duck2.png");}
		    
		    if(duckLIFECOUNTER == chgMonsterColor1 && monsterIN ){myElem.setAttribute('src',"assets/img/4.png");}
                    if(duckLIFECOUNTER == chgMonsterColor2 && monsterIN ){myElem.setAttribute('src',"assets/img/3.png");}

                    if(duckLIFECOUNTER <= 0){


cleanzerolife();
duckId.src="assets/img/dead-duck.gif";
coinCounter=coinCounter+10;
                        coins.innerHTML = '' + coinCounter;
                           win();
                          }

                        }


                    

               
                   // laserId.parentNode.removeChild(laserId);

                    


                
            }


        }

    }





    function moveSelection(evt) {
        //gun.focus();
        DuckCollisionWithGunRect();
        if (evt.keyCode == 37) {
            leftArrowPressed();

        }

        if (evt.keyCode == 39) {
            rightArrowPressed();

        }


        if (evt.keyCode == 38) {
            upArrowPressed();

        }


        if (evt.keyCode == 40) {
            downArrowPressed();


        }
        if (evt.keyCode == 32) {
            fire(evt);

        }
        if (evt.keyCode == 27) {
            EscPuase();


        }
        if (evt.keyCode == 17) {
            destroyAll(evt);
        }

    }


    function docReady() {

        //window.removeEventListener('keydown', moveSelection);
        window.addEventListener('keydown', moveSelection);


        // window.addEventListener('keypress', fire);
        window.addEventListener('keyup', function () {
            var ship = document.getElementById('ship');
            ship.setAttribute('src', 'assets/img/ship3d.png');
        });

        restflag = false;

    }

    docReady();
}
