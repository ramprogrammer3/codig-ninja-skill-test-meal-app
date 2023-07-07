

// fetching food card container
let foodCardContainer = document.querySelector("#food-card-container");

// creating a function to call api
async function AllFoodData() {
    let content = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let foodData = await content.json();

    let foodDataArray = foodData.meals;

    foodDataArray.forEach(food => {
        foodCardContainer.innerHTML += `
                
        <div class="food-card">
                <img src= ${food.strMealThumb}
                    alt="" class="img-thumbnail">
                <div class="p-2">
                    <p > <b>Name : </b> ${food.strMeal}  </p>
                    <p><b> Category : </b>  ${food.strCategory} </p>
                    <p><b> Country : </b> ${food.strArea} </p>
                    <p> ${food.strInstructions.substring(0,50)}...  </p>
                </div>
        </div> 

        `
    });


}


AllFoodData();
