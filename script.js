const inputBerat = document.getElementById("input-berat");
const inputTinggi = document.getElementById("input-tinggi");
const hasil = document.getElementById("hasil-bmi");

function hitungBMI() {
    let berat = parseFloat(inputBerat.value);
    let tinggi = parseFloat(inputTinggi.value);

    if (berat <= 0 || tinggi <= 0 || isNaN(berat) || isNaN(tinggi)) {
        alert("Mohon masukkan nilai berat dan tinggi yang valid.");
        return;
    }

    let hasilBMI = berat / ((tinggi / 100) ** 2);
    hasilBMI = hasilBMI.toFixed(1);

    if (hasilBMI < 18.5) {
        hasil.innerHTML = `<p>Your BMI is <strong>${hasilBMI}</strong> which means you are <strong>Underweight</strong></p>`;
    } else if (hasilBMI >= 18.5 && hasilBMI <= 24.9) {
        hasil.innerHTML = `<p>Your BMI is <strong>${hasilBMI}</strong> which means you are <strong>Normal</strong></p>`;
    } else if (hasilBMI >= 25 && hasilBMI <= 29.9) {
        hasil.innerHTML = `<p>Your BMI is <strong>${hasilBMI}</strong> which means you are <strong>Overweight</strong></p>`;
    } else if (hasilBMI >= 30) {
        hasil.innerHTML = `<p>Your BMI is <strong>${hasilBMI}</strong> which means you are <strong>Obesity</strong></p>`;
    }
}

function hapusBMI() {
    inputBerat.value = "";
    inputTinggi.value = "";
    hasil.innerHTML = "";
}
