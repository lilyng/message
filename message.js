var message = []
message[0] = "you will get the winning lottery ticket...then lose it";
message[1] = "you will have a very average day tomorrow";
message[2] = "you will find eighty hypoallergenic puppies!";
message[3] = "you will turn into a giant stalk of celery";
message[4] = "stop picking your nose silly :)";
message[5] = "you will wake up billingual tomorrow";


function randomFortune() {
  var randomMessage = Math.floor(Math.random()*(message.length));
  document.getElementById('fortune').innerHTML = message[randomMessage];
}
