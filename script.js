// // ===> Get all the countries from the Asia continent /region using the Filter function
 
var res=new XMLHttpRequest()
    res.open("GET","https://restcountries.com/v3.1/all",true)
    res.send()
    res.onload=function(){
        var data=res.response
        var result=JSON.parse(data)
       var ans=result.filter((ele)=>ele.continents =="Asia")
      var ans1=ans.map((ele)=>`continent : ${ele.continents} - region : ${ele.region} - country : ${ele.name.common}`) 
      console.log(ans1)
    }

//==>o/p ['continent : Asia - region : Asia - country : Maldives', 'continent : Asia - region : Asia - country : Pakistan', 'continent : Asia - region : Asia - country : Malaysia', 'continent : Asia - region : Asia - country : Uzbekistan', 'continent : Asia - region : Oceania - country : Christmas Island', 'continent : Asia - region : Asia - country : Singapore', 'continent : Asia - region : Asia - country : Qatar', 'continent : Asia - region : Asia - country : Kazakhstan', 'continent : Asia - region : Africa - country : British Indian Ocean Territory', 'continent : Asia - region : Asia - country : Bahrain', 'continent : Asia - region : Asia - country : India', 'continent : Asia - region : Asia - country : Macau', 'continent : Asia - region : Asia - country : Syria', 'continent : Asia - region : Asia - country : Kyrgyzstan', 'continent : Asia - region : Asia - country : Palestine', 'continent : Asia - region : Asia - country : Taiwan', 'continent : Asia - region : Asia - country : South Korea', 'continent : Asia - region : Asia - country : Iraq', 'continent : Asia - region : Asia - country : Cambodia', 'continent : Asia - region : Oceania - country : Cocos (Keeling) Islands', 'continent : Asia - region : Asia - country : Sri Lanka', 'continent : Asia - region : Asia - country : Israel', 'continent : Asia - region : Asia - country : Tajikistan', 'continent : Asia - region : Asia - country : Azerbaijan', 'continent : Asia - region : Asia - country : Georgia', 'continent : Asia - region : Asia - country : China', 'continent : Asia - region : Asia - country : Thailand', 'continent : Asia - region : Asia - country : Indonesia', 'continent : Asia - region : Asia - country : Turkmenistan', 'continent : Asia - region : Asia - country : Turkey', 'continent : Asia - region : Asia - country : Iran', 'continent : Asia - region : Asia - country : Lebanon', 'continent : Asia - region : Asia - country : Philippines', 'continent : Asia - region : Asia - country : Kuwait', 'continent : Asia - region : Asia - country : Oman', 'continent : Asia - region : Asia - country : Afghanistan', 'continent : Asia - region : Asia - country : Armenia', 'continent : Asia - region : Asia - country : Bangladesh', 'continent : Asia - region : Asia - country : Laos', 'continent : Asia - region : Asia - country : Nepal', 'continent : Asia - region : Asia - country : Myanmar', 'continent : Asia - region : Asia - country : United Arab Emirates', 'continent : Asia - region : Asia - country : Bhutan', 'continent : Asia - region : Asia - country : Jordan', 'continent : Asia - region : Asia - country : Vietnam', 'continent : Asia - region : Asia - country : Brunei', 'continent : Asia - region : Asia - country : Japan', 'continent : Asia - region : Asia - country : Hong Kong', 'continent : Asia - region : Asia - country : Saudi Arabia', 'continent : Asia - region : Asia - country : North Korea', 'continent : Asia - region : Asia - country : Mongolia', 'continent : Asia - region : Asia - country : Yemen']

// //  Get all the countries with a population of less than 2 lakhs using Filter function

var res=new XMLHttpRequest()
    res.open("GET","https://restcountries.com/v3.1/all",true)
    res.send()
    res.onload=function(){
        var data=res.response
        var result=JSON.parse(data)
       var ans=result.filter((ele)=>ele.population<200000)
      var ans1=ans.map((ele)=>`In ${ele.name.common} Population is : ${ele.population}`) 
      console.log(ans1)
    }

// ==>o/p(62) ['In Aruba Population is : 106766', 'In Wallis and Futuna Population is : 11750', 'In Åland Islands Population is : 29458', 'In Pitcairn Islands Population is : 56', 'In Seychelles Population is : 98462', 'In French Southern and Antarctic Lands Population is : 400', 'In Christmas Island Population is : 2072', 'In Saint Martin Population is : 38659', 'In Heard Island and McDonald Islands Population is : 0', 'In Antarctica Population is : 1000', 'In Greenland Population is : 56367', 'In British Indian Ocean Territory Population is : 3000', 'In Saint Lucia Population is : 183629', 'In Niue Population is : 1470', 'In Saint Barthélemy Population is : 4255', 'In Grenada Population is : 112519', 'In Isle of Man Population is : 85032', 'In Curaçao Population is : 155014', 'In Dominica Population is : 71991', 'In Faroe Islands Population is : 48865', 'In Montserrat Population is : 4922', 'In Cook Islands Population is : 18100', 'In Bermuda Population is : 63903', 'In San Marino Population is : 33938', 'In Cayman Islands Population is : 65720', 'In Cocos (Keeling) Islands Population is : 544', 'In United States Virgin Islands Population is : 106290', 'In Norfolk Island Population is : 2302', 'In Nauru Population is : 10834', 'In Bouvet Island Population is : 0', 'In Micronesia Population is : 115021', 'In American Samoa Population is : 55197', 'In Anguilla Population is : 13452', 'In Marshall Islands Population is : 59194', 'In Kiribati Population is : 119446', 'In Northern Mariana Islands Population is : 57557', 'In Guam Population is : 168783', 'In Gibraltar Population is : 33691', 'In Vatican City Population is : 451', 'In Jersey Population is : 100800', 'In Tuvalu Population is : 11792', 'In Saint Helena, Ascension and Tristan da Cunha Population is : 53192', 'In Samoa Population is : 198410', 'In Guernsey Population is : 62999', 'In Tonga Population is : 105697', 'In Saint Kitts and Nevis Population is : 53192', 'In Falkland Islands Population is : 2563', 'In Palau Population is : 18092', 'In Turks and Caicos Islands Population is : 38718', 'In British Virgin Islands Population is : 30237', 'In Liechtenstein Population is : 38137', 'In Andorra Population is : 77265', 'In Tokelau Population is : 1411', 'In Sint Maarten Population is : 40812', 'In United States Minor Outlying Islands Population is : 300', 'In Antigua and Barbuda Population is : 97928', 'In Saint Pierre and Miquelon Population is : 6069', 'In Saint Vincent and the Grenadines Population is : 110947', 'In South Georgia Population is : 30', 'In Caribbean Netherlands Population is : 25987', 'In Monaco Population is : 39244', 'In Svalbard and Jan Mayen Population is : 2562']

//===>Print the following details name, capital, flag using forEach function
var req=new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v3.1/all",true)
    req.send()
    req.onload=function(){
        var data=req.response
        var ans=JSON.parse(data)
        //var ans1=ans.forEach((ele)=>{console.log(ele)})
        var ans1=ans.forEach((ele)=>{console.log(`${ele.flag} - ${ele.name.common} - ${ele.capital}`)})
    }
//==>o/p 🇲🇷 - Mauritania - Nouakchott
// script.js:39 🇦🇼 - Aruba - Oranjestad
// script.js:39 🇦🇷 - Argentina - Buenos Aires
// script.js:39 🇸🇪 - Sweden - Stockholm
// script.js:39 🇲🇻 - Maldives - Malé
// script.js:39 🇲🇽 - Mexico - Mexico City
// script.js:39 🇳🇿 - New Zealand - Wellington
// script.js:39 🇪🇨 - Ecuador - Quito
// script.js:39 🇼🇫 - Wallis and Futuna - Mata-Utu
// script.js:39 🇦🇽 - Åland Islands - Mariehamn
// script.js:39 🇲🇪 - Montenegro - Podgorica
// script.js:39 🇵🇰 - Pakistan - Islamabad
// script.js:39 🇵🇳 - Pitcairn Islands - Adamstown
// script.js:39 🇿🇲 - Zambia - Lusaka
// script.js:39 🇸🇨 - Seychelles - Victoria
// script.js:39 🇲🇾 - Malaysia - Kuala Lumpur
// script.js:39 🇳🇴 - Norway - Oslo
// script.js:39 🇺🇿 - Uzbekistan - Tashkent
// script.js:39 🇻🇺 - Vanuatu - Port Vila
// script.js:39 🇹🇫 - French Southern and Antarctic Lands - Port-aux-Français
// script.js:39 🇨🇽 - Christmas Island - Flying Fish Cove
// script.js:39 🇸🇬 - Singapore - Singapore
// script.js:39 🇸🇷 - Suriname - Paramaribo
// script.js:39 🇪🇭 - Western Sahara - El Aaiún
// script.js:39 🇲🇫 - Saint Martin - Marigot
// script.js:39 🇨🇷 - Costa Rica - San José
// script.js:39 🇭🇲 - Heard Island and McDonald Islands - undefined
// script.js:39 🇮🇪 - Ireland - Dublin
// script.js:39 🇦🇶 - Antarctica - undefined
// script.js:39 🇦🇺 - Australia - Canberra
// script.js:39 🇱🇾 - Libya - Tripoli
// script.js:39 🇶🇦 - Qatar - Doha
// script.js:39 🇬🇱 - Greenland - Nuuk
// script.js:39 🇲🇺 - Mauritius - Port Louis
// script.js:39 🇰🇿 - Kazakhstan - Nur-Sultan
// script.js:39 🇮🇴 - British Indian Ocean Territory - Diego Garcia
// script.js:39 🇦🇱 - Albania - Tirana
// script.js:39 🇧🇭 - Bahrain - Manama
// script.js:39 🇵🇬 - Papua New Guinea - Port Moresby
// script.js:39 🇧🇮 - Burundi - Gitega
// script.js:39 🇮🇳 - India - New Delhi
// script.js:39 🇺🇾 - Uruguay - Montevideo
// script.js:39 🇱🇨 - Saint Lucia - Castries
// script.js:39 🇧🇧 - Barbados - Bridgetown
// script.js:39 🇳🇨 - New Caledonia - Nouméa
// script.js:39 🇱🇻 - Latvia - Riga
// script.js:39 🇪🇪 - Estonia - Tallinn
// script.js:39 🇳🇺 - Niue - Alofi
// script.js:39 🇧🇱 - Saint Barthélemy - Gustavia
// script.js:39 🇵🇷 - Puerto Rico - San Juan
// script.js:39 🇬🇩 - Grenada - St. George's
// script.js:39 🇲🇴 - Macau - undefined
// script.js:39 🇨🇾 - Cyprus - Nicosia
// script.js:39 🇮🇲 - Isle of Man - Douglas
// script.js:39 🇬🇷 - Greece - Athens
// script.js:39 🇸🇾 - Syria - Damascus
// script.js:39 🇱🇹 - Lithuania - Vilnius
// script.js:39 🇨🇼 - Curaçao - Willemstad
// script.js:39 🇩🇲 - Dominica - Roseau
// script.js:39 🇳🇪 - Niger - Niamey
// script.js:39 🇰🇬 - Kyrgyzstan - Bishkek
// script.js:39 🇹🇹 - Trinidad and Tobago - Port of Spain
// script.js:39 🇹🇬 - Togo - Lomé
// script.js:39 🇵🇸 - Palestine - Ramallah,Jerusalem
// script.js:39 🇲🇬 - Madagascar - Antananarivo
// script.js:39 🇭🇷 - Croatia - Zagreb
// script.js:39 🇫🇴 - Faroe Islands - Tórshavn
// script.js:39 🇭🇹 - Haiti - Port-au-Prince
// script.js:39 🇲🇸 - Montserrat - Plymouth
// script.js:39 🇨🇰 - Cook Islands - Avarua
// script.js:39 🇹🇱 - Timor-Leste - Dili
// script.js:39 🇲🇶 - Martinique - Fort-de-France
// script.js:39 🇨🇺 - Cuba - Havana
// script.js:39 🇹🇼 - Taiwan - Taipei
// script.js:39 🇸🇿 - Eswatini - Mbabane
// script.js:39 🇺🇦 - Ukraine - Kyiv
// script.js:39 🇧🇲 - Bermuda - Hamilton
// script.js:39 🇰🇷 - South Korea - Seoul
// script.js:39 🇵🇪 - Peru - Lima
// script.js:39 🇮🇶 - Iraq - Baghdad
// script.js:39 🇲🇩 - Moldova - Chișinău
// script.js:39 🇸🇲 - San Marino - City of San Marino
// script.js:39 🇻🇪 - Venezuela - Caracas
// script.js:39 🇬🇾 - Guyana - Georgetown
// script.js:39 🇰🇾 - Cayman Islands - George Town
// script.js:39 🇰🇭 - Cambodia - Phnom Penh
// script.js:39 🇨🇨 - Cocos (Keeling) Islands - West Island
// script.js:39 🇲🇹 - Malta - Valletta
// script.js:39 🇱🇰 - Sri Lanka - Sri Jayawardenepura Kotte
// script.js:39 🇮🇱 - Israel - Jerusalem
// script.js:39 🇸🇩 - Sudan - Khartoum
// script.js:39 🇻🇮 - United States Virgin Islands - Charlotte Amalie
// script.js:39 🇪🇷 - Eritrea - Asmara
// script.js:39 🇲🇱 - Mali - Bamako
// script.js:39 🇸🇴 - Somalia - Mogadishu
// script.js:39 🇳🇫 - Norfolk Island - Kingston
// script.js:39 🇰🇲 - Comoros - Moroni
// script.js:39 🇳🇮 - Nicaragua - Managua
// script.js:39 🇷🇺 - Russia - Moscow
// script.js:39 🇺🇬 - Uganda - Kampala
// script.js:39 🇳🇷 - Nauru - Yaren
// script.js:39 🇨🇭 - Switzerland - Bern
// script.js:39 🇵🇹 - Portugal - Lisbon
// script.js:39 🇹🇯 - Tajikistan - Dushanbe
// script.js:39 🇸🇸 - South Sudan - Juba
// script.js:39 🇧🇻 - Bouvet Island - undefined
// script.js:39 🇫🇲 - Micronesia - Palikir
// script.js:39 🇦🇸 - American Samoa - Pago Pago
// script.js:39 🇨🇿 - Czechia - Prague
// script.js:39 🇧🇼 - Botswana - Gaborone
// script.js:39 🇹🇳 - Tunisia - Tunis
// script.js:39 🇦🇮 - Anguilla - The Valley
// script.js:39 🇬🇼 - Guinea-Bissau - Bissau
// script.js:39 🇸🇰 - Slovakia - Bratislava
// script.js:39 🇲🇭 - Marshall Islands - Majuro
// script.js:39 🇩🇿 - Algeria - Algiers
// script.js:39 🇯🇲 - Jamaica - Kingston
// script.js:39 🇲🇿 - Mozambique - Maputo
// script.js:39 🇪🇸 - Spain - Madrid
// script.js:39 🇭🇳 - Honduras - Tegucigalpa
// script.js:39 🇳🇱 - Netherlands - Amsterdam
// script.js:39 🇿🇦 - South Africa - Pretoria,Bloemfontein,Cape Town
// script.js:39 🇦🇿 - Azerbaijan - Baku
// script.js:39 🇲🇰 - North Macedonia - Skopje
// script.js:39 🇬🇲 - Gambia - Banjul
// script.js:39 🇱🇷 - Liberia - Monrovia
// script.js:39 🇱🇺 - Luxembourg - Luxembourg
// script.js:39 🇨🇻 - Cape Verde - Praia
// script.js:39 🇧🇸 - Bahamas - Nassau
// script.js:39 🇬🇪 - Georgia - Tbilisi
// script.js:39 🇰🇮 - Kiribati - South Tarawa
// script.js:39 🇹🇿 - Tanzania - Dodoma
// script.js:39 🇨🇳 - China - Beijing
// script.js:39 🇬🇹 - Guatemala - Guatemala City
// script.js:39 🇸🇹 - São Tomé and Príncipe - São Tomé
// script.js:39 🇩🇪 - Germany - Berlin
// script.js:39 🇸🇱 - Sierra Leone - Freetown
// script.js:39 🇹🇩 - Chad - N'Djamena
// script.js:39 🇬🇧 - United Kingdom - London
// script.js:39 🇸🇮 - Slovenia - Ljubljana
// script.js:39 🇹🇭 - Thailand - Bangkok
// script.js:39 🇮🇩 - Indonesia - Jakarta
// script.js:39 🇲🇵 - Northern Mariana Islands - Saipan
// script.js:39 🇬🇺 - Guam - Hagåtña
// script.js:39 🇫🇮 - Finland - Helsinki
// script.js:39 🇾🇹 - Mayotte - Mamoudzou
// script.js:39 🇬🇮 - Gibraltar - Gibraltar
// script.js:39 🇹🇲 - Turkmenistan - Ashgabat
// script.js:39 🇽🇰 - Kosovo - Pristina
// script.js:39 🇨🇮 - Ivory Coast - Yamoussoukro
// script.js:39 🇲🇦 - Morocco - Rabat
// script.js:39 🇩🇴 - Dominican Republic - Santo Domingo
// script.js:39 🇬🇭 - Ghana - Accra
// script.js:39 🇻🇦 - Vatican City - Vatican City
// script.js:39 🇯🇪 - Jersey - Saint Helier
// script.js:39 🇹🇷 - Turkey - Ankara
// script.js:39 🇹🇻 - Tuvalu - Funafuti
// script.js:39 🇮🇷 - Iran - Tehran
// script.js:39 🇪🇬 - Egypt - Cairo
// script.js:39 🇩🇰 - Denmark - Copenhagen
// script.js:39 🇰🇪 - Kenya - Nairobi
// script.js:39 🇧🇬 - Bulgaria - Sofia
// script.js:39 🇿🇼 - Zimbabwe - Harare
// script.js:39 🇦🇴 - Angola - Luanda
// script.js:39 🇳🇬 - Nigeria - Abuja
// script.js:39 🇵🇱 - Poland - Warsaw
// script.js:39 🇸🇳 - Senegal - Dakar
// script.js:39 🇸🇭 - Saint Helena, Ascension and Tristan da Cunha - Jamestown
// script.js:39 🇱🇧 - Lebanon - Beirut
// script.js:39 🇼🇸 - Samoa - Apia
// script.js:39 🇵🇭 - Philippines - Manila
// script.js:39 🇬🇬 - Guernsey - St. Peter Port
// script.js:39 🇸🇻 - El Salvador - San Salvador
// script.js:39 🇰🇼 - Kuwait - Kuwait City
// script.js:39 🇹🇴 - Tonga - Nuku'alofa
// script.js:39 🇴🇲 - Oman - Muscat
// script.js:39 🇦🇫 - Afghanistan - Kabul
// script.js:39 🇰🇳 - Saint Kitts and Nevis - Basseterre
// script.js:39 🇨🇫 - Central African Republic - Bangui
// script.js:39 🇷🇸 - Serbia - Belgrade
// script.js:39 🇦🇲 - Armenia - Yerevan
// script.js:39 🇧🇩 - Bangladesh - Dhaka
// script.js:39 🇱🇦 - Laos - Vientiane
// script.js:39 🇨🇱 - Chile - Santiago
// script.js:39 🇵🇫 - French Polynesia - Papeetē
// script.js:39 🇵🇦 - Panama - Panama City
// script.js:39 🇺🇸 - United States - Washington, D.C.
// script.js:39 🇳🇵 - Nepal - Kathmandu
// script.js:39 🇲🇲 - Myanmar - Naypyidaw
// script.js:39 🇫🇰 - Falkland Islands - Stanley
// script.js:39 🇭🇺 - Hungary - Budapest
// script.js:39 🇵🇼 - Palau - Ngerulmud
// script.js:39 🇬🇶 - Equatorial Guinea - Malabo
// script.js:39 🇬🇳 - Guinea - Conakry
// script.js:39 🇦🇪 - United Arab Emirates - Abu Dhabi
// script.js:39 🇹🇨 - Turks and Caicos Islands - Cockburn Town
// script.js:39 🇻🇬 - British Virgin Islands - Road Town
// script.js:39 🇱🇮 - Liechtenstein - Vaduz
// script.js:39 🇧🇦 - Bosnia and Herzegovina - Sarajevo
// script.js:39 🇲🇼 - Malawi - Lilongwe
// script.js:39 🇧🇹 - Bhutan - Thimphu
// script.js:39 🇨🇲 - Cameroon - Yaoundé
// script.js:39 🇦🇩 - Andorra - Andorra la Vella
// script.js:39 🇬🇵 - Guadeloupe - Basse-Terre
// script.js:39 🇨🇬 - Republic of the Congo - Brazzaville
// script.js:39 🇷🇪 - Réunion - Saint-Denis
// script.js:39 🇧🇫 - Burkina Faso - Ouagadougou
// script.js:39 🇯🇴 - Jordan - Amman
// script.js:39 🇨🇩 - DR Congo - Kinshasa
// script.js:39 🇹🇰 - Tokelau - Fakaofo
// script.js:39 🇻🇳 - Vietnam - Hanoi
// script.js:39 🇸🇽 - Sint Maarten - Philipsburg
// script.js:39 🇧🇪 - Belgium - Brussels
// script.js:39 🇺🇲 - United States Minor Outlying Islands - Washington DC
// script.js:39 🇧🇷 - Brazil - Brasília
// script.js:39 🇧🇿 - Belize - Belmopan
// script.js:39 🇦🇬 - Antigua and Barbuda - Saint John's
// script.js:39 🇵🇾 - Paraguay - Asunción
// script.js:39 🇧🇯 - Benin - Porto-Novo
// script.js:39 🇧🇳 - Brunei - Bandar Seri Begawan
// script.js:39 🇧🇴 - Bolivia - Sucre
// script.js:39 🇩🇯 - Djibouti - Djibouti
// script.js:39 🇬🇫 - French Guiana - Cayenne
// script.js:39 🇨🇦 - Canada - Ottawa
// script.js:39 🇵🇲 - Saint Pierre and Miquelon - Saint-Pierre
// script.js:39 🇯🇵 - Japan - Tokyo
// script.js:39 🇷🇼 - Rwanda - Kigali
// script.js:39 🇻🇨 - Saint Vincent and the Grenadines - Kingstown
// script.js:39 🇮🇸 - Iceland - Reykjavik
// script.js:39 🇧🇾 - Belarus - Minsk
// script.js:39 🇭🇰 - Hong Kong - City of Victoria
// script.js:39 🇱🇸 - Lesotho - Maseru
// script.js:39 🇫🇯 - Fiji - Suva
// script.js:39 🇦🇹 - Austria - Vienna
// script.js:39 🇨🇴 - Colombia - Bogotá
// script.js:39 🇬🇦 - Gabon - Libreville
// script.js:39 🇸🇦 - Saudi Arabia - Riyadh
// script.js:39 🇬🇸 - South Georgia - King Edward Point
// script.js:39 🇪🇹 - Ethiopia - Addis Ababa
// script.js:39 🇧🇶 - Caribbean Netherlands - Kralendijk
// script.js:39 🇲🇨 - Monaco - Monaco
// script.js:39 🇰🇵 - North Korea - Pyongyang
// script.js:39 🇮🇹 - Italy - Rome
// script.js:39 🇳🇦 - Namibia - Windhoek
// script.js:39 🇲🇳 - Mongolia - Ulan Bator
// script.js:39 🇸🇧 - Solomon Islands - Honiara
// script.js:39 🇾🇪 - Yemen - Sana'a
// script.js:39 🇷🇴 - Romania - Bucharest
// script.js:39 🇸🇯 - Svalbard and Jan Mayen - Longyearbyen
// script.js:39 🇫🇷 - France - Paris
// //Print the total population of countries using reduce function
// var req=new XMLHttpRequest()
//     req.open("GET","https://restcountries.com/v3.1/all",true)
//     req.send()
//     req.onload=function(){
//         var data=req.response
//         var ans=JSON.parse(data)
//        var ans1=ans.reduce((ac,c)=>ac+c.population,0)
//        console.log(ans1)
//     }

    //==>o/p 7777721563
// //Print the country which uses US Dollars as currency.
var req=new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v2/all",true)
    req.send()
    req.onload=function(){
        var data=req.response
        var ans=JSON.parse(data)
   var ans1=ans.filter((ele)=>{
     for(let key in ele.currencies)
     {
        if(ele.currencies[key].code=="USD")
		{
          console.log(ele.name)
        }
     }
   })
    }

    //==>o/p 
//  American Samoa
// script.js:315 Bonaire, Sint Eustatius and Saba
// script.js:315 British Indian Ocean Territory
// script.js:315 Virgin Islands (British)
// script.js:315 Virgin Islands (U.S.)
// script.js:315 Cambodia
// script.js:315 Ecuador
// script.js:315 El Salvador
// script.js:315 Guam
// script.js:315 Marshall Islands
// script.js:315 Micronesia (Federated States of)
// script.js:315 Northern Mariana Islands
// script.js:315 Palau
// script.js:315 Panama
// script.js:315 Puerto Rico
// script.js:315 Timor-Leste
// script.js:315 Turks and Caicos Islands
// script.js:315 United States of America 