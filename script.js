function convert() {
    var input = document.getElementById("input").value;
    var result = document.getElementById("result");
  
    if (input === "") {
      result.innerHTML = "Masukkan suhu terlebih dahulu!";
      return;
    }
  
    var celcius = parseFloat(input);
    var fahrenheit = celcius * 9/5 + 32;
    var kelvin = celcius + 273.15;
  
    result.innerHTML = "Hasil Konversi:<br>"
      + "Fahrenheit: " + fahrenheit.toFixed(2) + " &#8457;<br>"
      + "Kelvin: " + kelvin.toFixed(2) + " K";
  }
  