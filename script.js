const secondsHand= document.querySelector('.second-hand');
const minutesHand=document.querySelector('.min-hand');
const hoursHand=document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  const seconds=  now.getSeconds();
  const mins= now.getMinutes();
  const hours= now.getHours();

  const minsDegrees= (( mins / 60 )*360+90);
  const secondsDegrees= (( seconds / 60 ) * 360 + 90);
  const hoursDegrees=((hours/12)*360+90);

  secondsHand.style.transform=`rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform=`rotate(${minsDegrees}deg)`;
  hoursHand.style.transform= `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);