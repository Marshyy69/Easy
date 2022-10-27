let raceNumber = Math.floor(Math.random() * 1000);

const runnerRegisteredEarly = false;

const runnerAge = 18;

if (runnerRegisteredEarly === true && runnerAge > 18 ){
  raceNumber = raceNumber + 1000;

}

if (runnerRegisteredEarly === true && runnerAge > 18){
  console.log('you will race at 9:30 a.m. (' + raceNumber + ')!')
}

 else if (runnerRegisteredEarly === false && runnerAge >18){
  console.log('you will race at 11 a.m. (' + raceNumber + ')!')
}

else if (runnerAge < 18){
  console.log('You will be racing at 12:30 p.m. (' + raceNumber + ')!')
}

else{
  console.log('Please go to the registration desk!')
}
