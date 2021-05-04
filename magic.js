const limit = 10;
const circleRadius = 60;
const marginPercentageBtwnCircles = 1.5;

document.title = `Count To ${limit}`;
const circle = document.querySelectorAll('.circle');
circle.forEach((element) => {
  element.style.height = `${2 * circleRadius}px`;
  element.style.width = `${2 * circleRadius}px`;
  element.style.marginLeft = `${marginPercentageBtwnCircles}%`;
});

const dial = document.querySelectorAll('.dial');
dial.forEach((element) => {
  //element.style.width = `${circleRadius}px`;
  // element.classList.add('dial-45');
  element.classList.add('dial-45');
});
