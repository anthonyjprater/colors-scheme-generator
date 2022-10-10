/* https://www.thecolorapi.com

/scheme{?hex,rgb,hsl,cmyk,format,mode,count}
*/
var colorPicker;
var defaultColor = "#0000ff";
let seedColor
const header = document.querySelector('h1');
let palette = document.querySelector("#palette");
// const schemeSelect = document.getElementById("scheme-select").value;
// let scheme = schemeSelect.options[schemeSelect.selectedIndex].value;
const btnSubmit = document.getElementById('btn-submit');


// window.addEventListener("load", startup, false);

// function update() {
//     let schemeSelect = document.getElementById("scheme-select");
//     let scheme = schemeSelect.options[schemeSelect.selectedIndex].value;
//     console.log(scheme)
// }

btnSubmit.addEventListener('click', function() {
    
    let schemeSelect = document.getElementById("scheme-select");
    let scheme = schemeSelect.options[schemeSelect.selectedIndex].value;
    console.log(scheme)
    console.log(document.getElementById("colorPicker").value)
    
    let seedColor = document.getElementById("colorPicker").value;
    let newColor = seedColor.split('')
    let pick = newColor.shift();
    let hexCode = newColor.join('')
    let schemeId = ""
    console.log(hexCode)
    
    fetch(`https://www.thecolorapi.com/scheme/?hex=${hexCode}&mode=${scheme}`, {method:"GET"})
    .then( res => res.json())
    .then( data => {
        // console.log(data)
        let colors = data.colors;
        colors.forEach((color) => { 
        // console.log(color)
        // console.log(color.hex)
        // console.log(header)
        let value = color.hex.value;
        let swatch = document.querySelector(".swatch");
        palette.appendChild(swatch);
        swatch.innerHTML = `
        ${value}
        `;
        swatch.style.backgroundColor = value;
        })
        
    })
    event.preventDefault();

})

