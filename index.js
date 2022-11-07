const colorChoiceEl = document.querySelector("#color-choice");
const colorOptionsEl = document.querySelector("#color-options");
document.querySelector("#color-generator").addEventListener("submit", function(e) {
  e.preventDefault();
  let val = colorChoiceEl.value;
  val = val.split("").slice(1,7).join("");
  const selectedMode = colorOptionsEl.options[colorOptionsEl.selectedIndex].value;
  const generatedColorsEl = document.querySelector(".color-wrapper");
  fetch(`https://www.thecolorapi.com/scheme?hex=${val}&mode=${selectedMode}&count=5`)
  .then(res=> res.json())
  .then(data => {
    let s = '';
    let t = '';
    console.log(data);
    for(let i of data.colors) {
      s += `
      <div class="color">
        <div class="color-strip" style=" background-color: ${i.hex.value}"></div>
        <p class="hex-value">${i.hex.value}</p>
      </div>
      `;
    }
    generatedColorsEl.innerHTML = s;
  });
});