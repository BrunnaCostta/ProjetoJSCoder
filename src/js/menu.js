


function menuOptions() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block"; 
  }
}

async function fetchFoodData(category) {
  console.log(category,"categorias")
  const data = await fetch("meals.json");
  const responseJson = await data.json();
  const filterCategory = responseJson.filter((data)=>data.categoria===category)
  console.log("items, ", filterCategory);

  const container = document.getElementById("foodContainer");
  
  if (!container) {
      console.error("Elemento foodContainer não encontrado!");
      return;
    }

  if (filterCategory.length > 0) {
    container.innerHTML = ""; 

    for (let i = 0; i < filterCategory.length; i++) {
      const item = filterCategory[i];

      container.innerHTML += `
<div class="food-item flex flex-row mt-4 md:w-2/3">
  <div class="item produto bg-gray-800 shadow-lg rounded-xl overflow-hidden mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 w-full flex">
    <img src="${item.imagem}" class="w-[160px] h-[150px] object-cover rounded-l-xl">
    <span class="flex flex-col justify-between md:justify-center w-full">
      <p class="text-lg font-semibold text-white ml-4 md:text-center">${item.nome}</p>
      <p class="text-sm text-gray-300 mt-2 ml-2 md:text-center">${item.descricao}</p>
      <p class="text-xl font-semibold text-green-400 mt-2 mb-2 md:text-center">R$ ${item.valor}</p>
    </span>
  </div>
</div>

      ` ;
    }
  } else {
    console.log("Nenhum item encontrado para essa categoria.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchFoodData("carne");
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('carnesTab').classList.add('tab-active');
  fetchFoodData('carnes');
});

