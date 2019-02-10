var user = {
  "user": {
 "name": "mfbhimani",
 "image": "https://pixel.nymag.com/imgs/daily/science/2015/12/07/07-the-fonz.w700.h700.jpg",
 "full-name" : "Mohammed Bhimani",
 "phone" : "555-121-1234",
 "city" : " Vaughan, ON",
 "email" : "mfbhimani@gmail.com",
 "address" : "10 Cleverdale St, Vaughan, ON",
 "description" : "I am a Senior web developer specializing in the development of customized WordPress sites for York University. I gradauted in Computer Science from York University and have interest in web development since high school. I really enjoy it. My other hobbies are in astronomy exploring the night sky looking at stars and constellations. I also like to study meteorology and have done various studies on weather patterns. I have interest in various sports. Soccer is my favourite sport and I play a lot during the weekend. I am part of a team that is currently gearing for a tournament in the summer. The other sport I really enjoy  is tennis and whenever I get chance at the end of my work day, I go to a tennis club and play."
 }
};

document.getElementById( "user-name" ).innerHTML = user.user['full-name'];
document.getElementById( "user-handle" ).innerHTML = user.user.name;
document.getElementById( "user-image" ).setAttribute( 'src' , user.user.image );
document.getElementById( "user-location" ).innerHTML = user.user['city'];
document.getElementById( "user-description" ).innerHTML = user.user['description'];
document.getElementById( "user-phone" ).innerHTML = user.user['phone'];
document.getElementById( "user-address" ).innerHTML = user.user['address'];
document.getElementById( "user-email" ).innerHTML = user.user['email'];
