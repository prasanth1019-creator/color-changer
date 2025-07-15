function changeColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#f1c40f', '#8e44ad'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }