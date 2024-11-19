const landmarks = [
    { name: 'Eiffel Tower', year: 1889 },
    { name: 'Taj Mahal', year: 1632 },
    { name: 'Colosseum', year: 80 },
    { name: 'Notre-Dame Cathedral', year: 1163 },
    { name: 'Sagrada Familia', year: 1882 }
];

function sortLandmarks(ascending) {
    const sortedLandmarks = [...landmarks];
    sortedLandmarks.sort((a, b) => ascending ? a.year - b.year : b.year - a.year);

    const landmarksList = document.getElementById('landmarksList');
    landmarksList.innerHTML = '';

    sortedLandmarks.forEach(landmark => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${landmark.name} (Built in ${landmark.year})`;
        landmarksList.appendChild(li);
    });
}
