$(document).ready(function () {
 
    //function to load sounds, via Jquery Playsound module ..
    function loadSounds(sb_array, sb_folder) {
        for (i = 0; i < sb_array.length; i++) {
            var ins_string = "<div onclick='$.playSound(\"sound_files/" + sb_folder + "/" + sb_array[i] + "\")' class=\"sbButton\"></div>";
            $('#sbContainer').append(ins_string);

        }
    }
	
	
	//options MENU...
    $("#menu").hide();
    var menu = '<div id="hi" ' +
          'style="position:absolute; top:0;left:0;width:1%;height:1%;">'+
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>'+
          '</div>';
          
          
          
    $('body').append(menu);
      
		//make menu toggle...
    $("#hi").on("click", function () {
        $("#menu").fadeToggle();
    });
          

	
   


    // var for every soundboard folder pack...
    var LarryFolderFiles = ["kungfumasterlarrrrryy.mp3", "kungfumasterlarryfull.mp3", "larryareyouok.mp3", "larryretreats.mp3", "ssjlarry.mp3", "takehimout.mp3", "whatisthis.mp3", "whatsupwiththat.mp3", "workitlarry.mp3"];
    var soundBank2 = ["Akarakaraka.mp3", "Alzarath free.mp3", "Alzarath reacts to garbage mixups.mp3", "Arturo does the Lee Chung.mp3", "Arturo flirting.mp3", "Arturo Get fucked HyperHal.mp3", "Arturo get hype.mp3", "Arturo Now im a killer.mp3", "Arturo pop off.mp3", "Best match of Guilty Gear echo.mp3", "Best match of Guilty Gear.mp3", "Biscuits Blowing it up.mp3", "Biscuits y u mashing.mp3", "BiscuitsGasm short ver.mp3", "BOOLIT BOOLIT BOOLIT.mp3", "Bum laughs at Flux.mp3", "but what were gonna show you.mp3", "can you show them sanford.mp3", "Chris Hu Bullets.mp3", "ComboFiend Ooooh God Damn.mp3", "CombointoCombo.mp3", "Come see me in ST.mp3", "CYA L8R.mp3", "Danddystepper Footsies nigga.mp3", "Drunk Lordknight.mp3", "DS or Hase.mp3", "empire combo.mp3", "empire echo.mp3", "FATAL KO.mp3", "Gah liek.mp3", "Get fucked.mp3", "Gods Gift Praise Be v2.mp3", "Guilty Gear review.mp3", "gvmdlb.mp3", "Here comes the money.mp3", "HU HAH.mp3", "I am the king.mp3", "is love enough.mp3", "Jonio Guilty Gear Laugh.mp3", "Jonio laugh cropped.mp3", "Jonio.mp3", "joniolaugh.mp3", "JUSTIIIIN WONG.mp3", "Keits the Misogyinizer 2.mp3", "Keits the Misogyinizer 3.mp3", "Keits the Misogyinizer.mp3", "King Scrub.mp3", "knoccemdown.mp3", "Lee Chung Collusion.mp3", "Lets go justin.mp3", "Lets go to de Beach.mp3", "LK I aint no scrub.mp3", "Lordknight Blowing it up.mp3", "Lordknight I been had tournament wins.mp3", "Lordknight Roll up.mp3", "LordKnight Tweets.mp3", "Lordknight yo aaAAAaa.mp3", "MarlinPie Im a fucking Legend.mp3", "NBrown & CMatrix Its my BnB.mp3", "NeutrulGod.mp3", "nigga we made it short ver.mp3", "nigga we made it.mp3", "Noel Brown AWMAYGAWD.mp3", "Noel Brown oh ma gawd.mp3", "Noel Brown Owww my gawd.mp3", "Noel Brown Uh Oh.mp3", "OH SCOOPS.mp3", "P-Pick a top tier.mp3", "Phrekwenci on LI.mp3", "Pokchop Didnt I say no.mp3", "Pokchop Eat it nigga.mp3", "PokChop Im making a CMV.mp3", "Pokchop Ooooh.mp3", "Pokchop stop pushing buttons.mp3", "Pot monster DS.mp3", "Praise drop.mp3", "rcndib.mp3", "Reload Destroyed.mp3", "Reload Eddie Laugh.mp3", "Reload Faust Sayonara.mp3", "Reload Game over.mp3", "Reload Heaven or Hell.mp3", "Reload Here comes daredevil.mp3", "Reload Jam 1.mp3", "Reload Jam 2.mp3", "Reload Lets enjoy a great show time.mp3", "Reload Lets Rock.mp3", "Reload Perfect.mp3", "Reload Please Select your character.mp3", "Reload Time Up.mp3", "ResidentSleeper Flux & DansGame MarlinPie.mp3", "roll up.mp3", "Sanford The King is here Echo version.mp3", "Sanford The King is here ROCKY edition.mp3", "Sanford The King is here.mp3", "Sanford tired of working for the money.mp3", "Shinobi just wants his $15 back.mp3", "Skeletor Primal instincts.mp3", "SkeletorG Cuz Hes a bitch nigga.mp3", "SkeletorG doesnt play Fighting Games.mp3", "SkeletorG DONT PLAY WITH ME.mp3", "SkeletorG Im Just Sayin.mp3", "SkeletorG Just Ban him.mp3", "SkeletorG on Fuckboy Floe.mp3", "SkeletorG Ooooh Nigga.mp3", "SkeletorG Why are you fucking with me.mp3", "SkeletorGasm.mp3", "SkeletorGot Bail money.mp3", "SkeltorG Sub or Ban.mp3", "Skype Bros.mp3", "Sp00ky HAA.mp3", "Sp00ky pop off.mp3", "Spooky I guess smoking weed helps.mp3", "Spooky Marvel mixups.mp3", "St1ckbug Hes remixing you right now.mp3", "St1ckbug Man your soundboard WIP.mp3", "Steve Fucking H 2 [warning too loud].mp3", "Steve fucking H.mp3", "Tenstar Laugh 1.mp3", "Tenstar Laugh 2.mp3", "Tenstar Laugh 3.mp3", "The Wire Handle it like businessmen.mp3", "The Wire Happy now bitch.mp3", "The Wire Is you taking notes.mp3", "The Wire Its Baltimore.mp3", "The Wire Mishigushimothafucka.mp3", "The Wire Money be green.mp3", "The Wire the game is rigged.mp3", "The Wire Yaba daba doo.mp3", "Tinishi fuck outta here.mp3", "Triforce all the blood is running thru.mp3", "Triforce DONT COMPLAIN.mp3", "Triforce facts.mp3", "Triforce has had enough.mp3", "Triforce Holy dog shit.mp3", "Triforce i dont give a shit.mp3", "Triforce Its about to go down.mp3", "Triforce Lets go professional for a second.mp3", "Triforce No gives a rats ass.mp3", "Triforce of wisdom.mp3", "Triforce on Marvel.mp3", "Triforce on Street Fighter.mp3", "Triforce Other streams are trash.mp3", "Triforce R word.mp3", "Triforce says youre wrong.mp3", "Triforce Slavemaster.mp3", "Triforce They pulled out their dick.mp3", "Triforce yesssssss.mp3", "Triforce YOU ARE FIRED.mp3", "Trifroce I feel like Megatron right now.mp3", "Umehara ga KIMETAY.mp3", "What are you doing Arturo.mp3", "who bitch this is.mp3", "YIPES OOOH.mp3", "You are all free now.mp3", "YOU WANNA WIN YO.mp3", "Zidane A2 God DS.mp3", "Zidane Back in the neutral.mp3", "Zidane Hype.mp3", "Zidane Look at the neutral.mp3", "Zidane Neutral god 2.mp3", "Zidane Neutral god.mp3", "Zidane NUTROLL GOD.mp3", "Zidane omg the neutral.mp3", "Zidane triggered.mp3", "Zidane Yessss.mp3", "Zoop zoop zoop.mp3", "[BONUS] LordKnight cant drive.mp3", "[BONUS] SkeletorG goes in on Floe.mp3", "[BONUS] SkeletorG live real talk mixtape.mp3", "[BONUS] SkeletorG putting Triforce in a coffin.mp3", "[BONUS] Spooky Highway stories.mp3", "[BONUS] St1ckbug Interviews SkeletorG.mp3"];
    var soundbank3 = ["Too Easy no1.mp3", "Too Easy no2.mp3", "Too Easy no3.mp3", "Too Easy no4.mp3", "Unga soundeffect.mp3", "Unga soundeffect2.mp3", "[BONUS] Unga mix.mp3"];




    // menu buttons that ass sounds (loadSounds)
	
    $('#bOne').click(function(){
		$('#sbContainer').empty();
		loadSounds(LarryFolderFiles, 'Larry');
	});
	
	$('#bTwo').click(function(){
		$('#sbContainer').empty();
		loadSounds(soundBank2, 'Soundboard 2.0 loketest 2');
	});
	
	$('#bThree').click(function(){
		$('#sbContainer').empty();
		loadSounds(soundbank3, 'MiniSoundBoard');
	});
	
	







});
