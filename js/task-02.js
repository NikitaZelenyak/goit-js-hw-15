const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

textSpan.style.fontSize = fontSizeControl.value + "px";

fontSizeControl.addEventListener("input", function () {
  const fontSize = this.value + "px";
  textSpan.style.fontSize = fontSize;
});
