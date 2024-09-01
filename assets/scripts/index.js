// Only replacing values, will use entire json file with react
fetch('assets/scripts/data.json')
    .then((response) => response.json())
    .then((json) => {
        let gradeValues = json;
        let categoriesGrades = document.querySelectorAll('.results__category-grade-value');
        gradeValues.forEach((grade, index) => {
            categoriesGrades[index].textContent = grade.score.toString();
        });
    })
    .catch((error) => {
        console.error('Error fetching the data:', error);
    });
