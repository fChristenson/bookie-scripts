setTimeout(() => {
  Array.prototype.slice.call(
    document.querySelectorAll('.ppm_list_content tr'))
    .filter(e => Array.prototype.slice.call(e.children)
      .find(e => parseInt(e.getAttribute('column')) >= 8))
      .map(e => {return {text: e.children[7].innerText, input: e.children[9].firstChild};})
    .forEach(e => {
      const time = Bookie.store.stories
        .find(i => new RegExp(i.story, 'ig').test(e.text)).time;
        e.input.value = time;
    });
}, 5000);