onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('I know I am surrounded by many flowers, but my heart desires only you. ').split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 300); // 1000ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };
