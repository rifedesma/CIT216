function fade() {
  var colors = ["#00ffff", "#008080", "#0000ff", "#000080", "#FF0000",
"#00FF00", "#CD5C5C", "#F08080", "#FA8072", "#E9967A" ];
  var div = document.getElementById("box");
  var newColor = colors[Math.floor(Math.random()*10)];
  div.style.backgroundColor = newColor;
}
