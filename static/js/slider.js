var slider = document.getElementById("yearSlider");
var year = document.getElementById("year");

year.innerHTML = slider.value;

slider.oninput = function() {
  year.innerHTML = this.value;
}
