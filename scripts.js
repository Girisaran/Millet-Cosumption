let surveyData = [];

function showForm() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('survey-form').style.display = 'block';
}

function goBack() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}

document.getElementById('survey').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const frequency = document.getElementById('frequency').value;
    const Name = document.getElementById('Name').value;
    surveyData.push({ Name ,age, gender, frequency });

    analyzeData();
    console.log(surveyData)
});

function analyzeData() {
    let totalFrequency = 0;
    let maleCount = 0;
    let femaleCount = 0;

    surveyData.forEach(data => {
        totalFrequency += parseInt(data.frequency);
        if (data.gender === 'male') maleCount++;
        else if (data.gender === 'female') femaleCount++;
    });

    const averageFrequency = (totalFrequency / surveyData.length).toFixed(2);
    const malePercentage = ((maleCount / surveyData.length) * 100).toFixed(2);
    const femalePercentage = ((femaleCount / surveyData.length) * 100).toFixed(2);

    document.getElementById('results-content').innerHTML = `
        <p>Number of respondents: ${surveyData.length}</p>
        <p>Average frequency of millet consumption: ${averageFrequency} times per week</p>
        <p>Percentage of male respondents: ${malePercentage}%</p>
        <p>Percentage of female respondents: ${femalePercentage}%</p>
    `;

    suggestMillets(averageFrequency);

    document.getElementById('survey-form').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

function suggestMillets(averageFrequency) {
    let suggestions = '';

    if (averageFrequency < 2) {
        suggestions = 'We recommend increasing the consumption of millets. Try including millet porridge or pancakes for breakfast.';
    } else if (averageFrequency >= 2 && averageFrequency <= 4) {
        suggestions = 'Good job! You have a balanced consumption of millets. Keep including millet salads and khichdi in your meals.';
    } else {
        suggestions = 'Excellent! You have a high millet consumption. Continue enjoying a variety of millet dishes like stir fry and soups.';
    }

    document.getElementById('suggestions-content').innerHTML = `<p>${suggestions}</p>`;
}

function notifyWater() {
    alert("It's time to drink water!");
}

// Notify to drink water every hour (3600000 milliseconds)
setInterval(notifyWater, 3600000);

// For demo purposes, notify to drink water every 10 seconds
// setInterval(notifyWater, 10000)
