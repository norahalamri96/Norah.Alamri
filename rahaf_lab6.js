function showCity(city) {
			switch(city) {
				case "Riyadh":
					alert("Riyadh is Saudi Arabia's largest city and country's administrative capital. The name Riyadh was derived from the plural form of the Arabic word 'rawḍah' meaning gardens or meadows.");
					break;
				case "Jeddah":
					alert("Jeddah is the 100th largest city in the world by land area. It is situated on a coastal plain in the lower Hijaz mountains.");
					break;
				case "Mecca":
					alert("Mecca is the holiest city in Islam and the capital of Mecca Province in the Hejaz region of western Saudi Arabia.");
					break;
				case "Medina":
					alert("Medina is one of Islam’s two holiest cities, making it a key destination for millions of pilgrims traveling to Saudi Arabia for Hajj or Umrah.");
					break;
				default:
					alert("Please select a valid city.");
			}

		}		 function changeText(){
                document.getElementById('select').innerHTML = 'Change heading';
            }
        
            function onclickChange(){
  document.getElementById('cityHeading').innerHTML='I like this city:';
    event.preventDefault();


            }