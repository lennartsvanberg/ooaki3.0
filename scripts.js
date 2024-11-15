function toggleSofaSelection() {
    const knowSofaName = document.getElementById('know-sofa-name').value;
    const sofaSelection = document.getElementById('sofa-selection');
    const sofaTypeSelection = document.getElementById('sofa-type-selection');
    
    if (knowSofaName === 'yes') {
        sofaSelection.style.display = 'block';
        sofaTypeSelection.style.display = 'none';
    } else if (knowSofaName === 'no') {
        sofaSelection.style.display = 'none';
        sofaTypeSelection.style.display = 'block';
    }
}

function updateSofaOptions() {
    const sofaSelect = document.getElementById('sofa-select');
    const sofaModelSelect = document.getElementById('sofa-model-select');
    
    const options = {
        dux: ["Dux Fredrik", "Dux Johan"],
        eilersen: ["Eilersen Ash", "Eilersen Lift"],
        fogia: ["Fogia Duni", "Fogia Morris"],
        "annan-soffa": ["Jag har en 3-sits soffa", "Jag har en 2-sits soffa"]
    };

    const selectedSofa = sofaSelect.value;

    if (selectedSofa && options[selectedSofa]) {
        sofaModelSelect.innerHTML = "";
        options[selectedSofa].forEach(model => {
            const option = document.createElement('option');
            option.value = model.toLowerCase().replace(/ /g, '-');
            option.textContent = model;
            sofaModelSelect.appendChild(option);
        });
        sofaModelSelect.style.display = "block";
    } else {
        sofaModelSelect.style.display = "none";
    }
}
