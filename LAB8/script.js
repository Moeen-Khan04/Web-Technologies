function changeColor(element) {
  element.style.backgroundColor = "orange";
}

function grow(element) {
  element.style.transform = "scale(1.5)";
}

function shrink(element) {
  element.style.transform = "scale(1)";
}

function toggleText(element) {
  if (element.innerText === "Click to Toggle Text") {
    element.innerText = "Text Changed!";
  } else {
    element.innerText = "Click to Toggle Text";
  }
}

function rotate(element) {
  element.style.transform = "rotate(150deg)";
}