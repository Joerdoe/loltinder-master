# loltinder


Dit betreft de Nederlandse versie van LolTinder.
(onderstaande tekst is tevens vertaald)

Ik maakte dit scriptje, omdat ik moe werd van het swipen -- het is gemakkelijker om na de tijd pas te bepalen wie je echt leuk vindt. Mijn eerste experiment was erg vermoeiend, want ik had negen dates achter elkaar.

## Motivation

Ik vind het gewoon echt heel erg leuk om met vrouwen af te spreken en dan samen de bijbel te lezen. Het is zo vredig en lief. Seks?! Bah.


## Installatie

* Install node
* Clone this repo
* npm install
* Get your numeric Facebook ID from: http://findmyfacebookid.com
* Get access token from the following URL:

```sh
https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token
```

* Quickly copy the url, then paste it after your Facebook numeric ID like so:

```sh
node app.js 305102211 "https://www.facebook.com/connect/login_success.html#access_token=CAAGm0PX4ZCpsc3npjYuZASBBIwGz8rS1aQcnjn2cThwpwVVJ9QNqlejhICzkharwvX56IIw5hEsebHIaxSXAs4RvoSBLhsCaKTgQAZBGny1EICA7orRtiuhHVjspFXZBs2GT6JpHUKtlAZD&expires_in=6902"
```

* Be attractive
* Get dates
* Have fun
