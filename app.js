/**
  * Wat je nodig hebt: node.js
  * 1. Installeer node.js
  * 2. Open je 'Terminal' of 'Command Prompt'
  * 3. Navigeer met hehulp van het commando 'cd' naar de bestandslocatie van app.js
  * 4. Voer het commando 'npm install' uit
  * 5. Verkrijg je numerieke Facebook ID: http://findmyfacebookid.com/
  * 6. Verkrijg je Access Token via onderstaande url. LET OP! De url in de adres balk verandert snel, dus kopieer de url snel naar je klembord
  *
  * https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token 
  *
  * 7. Om de applicatie te draaien, voer je het volgende commando uit:'node app.js JE_FACEBOOK_ID DE_URL_DIE_JE_GEKOPIEERD_EN_GEPLAKT_HEBT'
  *
  * Voorbeeld: node app.js 305102211 "https://www.facebook.com/connect/login_success.html#access_token=CAAGm0PX4ZCpsc3npjYuZASBBIwGz8rS1aQcnjn2cThwpwVVJ9QNqlejhICzkharwvX56IIw5hEsebHIaxSXAs4RvoSBLhsCaKTgQAZBGny1EICA7orRtiuhHVjspFXZBs2GT6JpHUKtlAZD&expires_in=6902"
  */

var tinderbot = require('tinderbot');
var bot = new tinderbot();
var _ = require('underscore')

// Process URL and grab token
var url = process.argv[3];
url = url.split('access_token=');
url = url[1].split('&');


bot.access_token = url[0];
bot.facebook_id = process.argv[2];

console.log('###########################');
console.log('Token: ' + bot.access_token);
console.log('FB ID: ' + bot.facebook_id);
console.log('CURL: curl -X POST --data "facebook_token='+bot.access_token+'&facebook_id='+bot.facebook_id+'" https://api.gotinder.com/auth');
console.log('###########################');

var count = 0;
var interval;

bot.client.authorize(bot.access_token, bot.facebook_id, function(){
  interval = setInterval(function() {
    if (!bot.client.isAuthorized) {
      console.log('Je Token klopt niet. Probeer het nog een keer.');
      clearInterval(interval);
    }

    bot.client.getRecommendations(10, function(error, data){
      if (data && data.message === "recs timeout") {
        console.log('Geen mensen meer om te liken..');
        return;
      }

      _.chain(data.results)
      .each(function(v,k) {
        console.log(v.name);
        bot.client.like(v._id, function(error, data) {
          count++;
          console.log('Aantal: ' + count);
          if (data && data.matched) {
            console.log('JAHAAAAAA! Een match!');
            console.log(user);
          }
        //   if (data.matched) {
        //     bot.client.sendMessage(
        //       id,
        //       "Hee leukerd!"
        //     );
        //   }
        });
      });
    });
  }, 5000);
}); 

