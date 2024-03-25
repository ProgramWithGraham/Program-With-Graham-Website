document.getElementsByTagName("button")[0].onclick = function () {
  let i = 0;

  while (i < 3) {
    i = Math.floor(Math.random() * 3);
    if (i === 0) {
      confirm(
        "I was adopted from Romania at the age of 6" + "\n Fun Fact #1 of 3"
      );
      break;
    } else if (i === 1) {
      confirm(
        "I am an Eagle Scout, my Eagle project was a children's book for the sick kids at a local hospital" +
          "\n Fun Fact #2 of 3"
      );
      break;
    } else if (i === 2) {
      confirm(
        "Turned the children's book i made for my Eagle project into a fully published book" +
          "\n Fun Fact #3 of 3"
      );
      break;
    }
  }
};
