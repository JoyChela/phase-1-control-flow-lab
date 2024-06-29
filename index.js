function scuberGreetingForFeet(feet){
  // Write your code here!
  let outcome
  if (feet <= 400){
    outcome = 'This one is on me!';
  } else if(feet >=400 && feet <= 2000){
    outcome = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500){
    outcome = 'I will gladly take your thirty bucks.';
  } else {
    outcome = 'No can do.';
  }
  return outcome;
}


let ternaryCheckCity = function(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
};

  
  function switchOnCharmFromTip(tip) {

    let response;

    switch (tip) {
      case 'generous':
        response = 'Thank you so much.';
        break;
      case 'not as generous':
        response = 'Thank you.';
        break;
      default:
        response = 'Bye.';
        break;
    }
    return response;
  }
