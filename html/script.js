document.getElementById('calculateButton').addEventListener('click', function() {
    const tvHours = parseFloat(document.getElementById('tvHours').value) || 0;
    const computerHours = parseFloat(document.getElementById('computerHours').value) || 0;
    const ledCount = parseFloat(document.getElementById('ledCount').value) || 0;

    const tvEmission = tvHours * 2.28;
    const computerEmission = computerHours * 5.27;
    const ledEmission = ledCount * 2.37;

    const totalEmission = tvEmission + computerEmission + ledEmission;

    document.getElementById('totalEmission').innerText = totalEmission.toFixed(2);
    document.getElementById('tvEmission').innerText = tvEmission.toFixed(2);
    document.getElementById('computerEmission').innerText = computerEmission.toFixed(2);
    document.getElementById('ledEmission').innerText = ledEmission.toFixed(2);
});
