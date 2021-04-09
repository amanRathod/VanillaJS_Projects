const search = document.getElementById('search'),
submit = document.getElementById('submit'),
random = document.getElementById('random'),
meals = document.getElementById('meals'),
resultHeading = document.getElementById('result-heading'),
single_meal = document.getElementById('single-meal');


const searchMeal = (e) => {
    e.preventDefault();

    // Clear single meal
    single_meal.innerHTML = '';

    // get meal name
    const term = search.value;

    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            resultHeading.innerHTML = `<h1>Results for Meal: <strong style= "color: red">${term}</strong></h1>`
            if(data.meals === null){
                resultHeading.innerHTML = `<p>There is no such meal. Try Another from Store.</p>`
            }
            else {
               meals.innerHTML = data.meals.map(meal => 
                 `<div class="meal">
                    <img src="${meal.strMealThumb}" alt = "${meal.strMeal}">
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
                 </div>`
                ).join(' ');
            }
            
        })
    }
    else {
        alert('Please Enter  Meal Name!');
    }
};

// Event Listener
submit.addEventListener('submit', searchMeal);