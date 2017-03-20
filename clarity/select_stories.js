// select stories
setTimeout(() => {
  document.querySelectorAll('.ppm_button_bar button')[1].click();
  Array.prototype.slice.call(
    document.querySelectorAll('.ppm_grid tr'))
    .map(e => e.firstChild)
    .filter(e => e.className === 'tableContent')
    .filter(e => Bookie.store.stories.find(obj => new RegExp(obj.story, 'gi').test(e.title))).map(e => e.firstChild)
    .forEach(e => e.click());
  document.querySelectorAll('.ppm_button_bar')[1].firstChild.click(); 
  return Bookie.done();
}, 5000);
