document.getElementById("footprintForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from the form
    var electricity = parseFloat(document.getElementById("electricity").value);
    var car = parseFloat(document.getElementById("car").value);
    var waste = parseFloat(document.getElementById("waste").value);

    // Carbon footprint calculation (simple example)
    var footprint = (electricity * 0.92) + (car * 0.411) + (waste * 0.2);

    // Display the result
    document.getElementById("footprint").textContent = footprint.toFixed(2);
    document.getElementById("result").style.display = "block";
});
