// ask for data & go to clarity
const data = prompt('What have you worked on?') || '';
const strings = data.split(',').map(str => str.trim());
const stories = strings.reduce((acc, str) =>{
  const array = str.split(':');
  acc.push({story: array[0].trim(), time: array[1].trim()});
  return acc;
}, []);
Bookie.set('stories', stories);
document.location.href = 'https://cppm1035.ondemand.ca.com/niku/nu#action:homeActionId';