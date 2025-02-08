
function menuOptions() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block"; 
  }
}


function addItem(element) {
  const container = element.parentNode;
  const input = container.querySelector('input[type="number"]');
  if (input) {
    let currentValue = parseInt(input.value) || 0;
    input.value = currentValue + 1;
  }
}


function removeItem(element) {
  const container = element.parentNode;
  const input = container.querySelector('input[type="number"]');
  if (input) {
    let currentValue = parseInt(input.value) || 0;
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
  }
}


async function fetchFoodData(category) {
  const data = await fetch("meals.json");
  const responseJson = await data.json();
  const filterCategory = responseJson.filter((data) => data.categoria === category);

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
  
      <div class="food-item flex flex-row mt-4  md:min-w-[33.33%] md:max-w-[40%]">
        <div class="item produto bg-gray-800 shadow-lg rounded-xl overflow-hidden mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 w-full flex"> 
          <img src="${item.imagem}" class="w-[160px] h-[150px] object-cover rounded-l-xl">
          <span class="flex flex-col justify-between md:justify-center w-full px-4 py-2">
            <p class="text-lg font-semibold text-white text-center">${item.nome}</p>
            <p class="text-sm text-gray-300 mt-2 text-center">${item.descricao}</p>
            <p class="text-xl font-semibold text-green-400 mt-2 mb-2 text-center">R$ ${item.valor}</p>
        <div class=" flex flex-row py-1 md:mx-auto">
             <img src="../icons/plusIcons.svg" class="ml-12 md:ml-2 cursor-pointer" @click="addItem()" alt="adicionar"/>
               <input type="number" class="mx-2 w-14 text-center bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-black" />
            <img src="../icons/subtract.svg" class="cursor-pointer" @click="removeItem("/>
        </div>
            <button class="bg-green-500 hover:bg-green-600 text-base text-white    font-bold py-2 px-2 rounded-lg mt-2 md:flex md:px-8 md:mx-auto"
              onclick="saveItem('${item.nome}', '${item.valor}', '${item.imagem}')">
              Comprar
            </button>
        </div>

   
  
   
      `;
    }
  } else {
    console.log("Nenhum item encontrado para essa categoria.");
  }
}



function saveItem(nome, valor, imagem) {
  const saveItem = JSON.parse(localStorage.getItem("saveItem")) || [];
  saveItem.push({ nome, valor, imagem });
  localStorage.setItem("saveItem", JSON.stringify(saveItem));
  
  fetch('https://cdn.jsdelivr.net/npm/sweetalert2@11')
.then(response => response.text())
.then(script => {
    const scriptTag = document.createElement('script');
    scriptTag.textContent = script;
    document.body.appendChild(scriptTag);
  Swal.fire({
    title: "Item adicionado",
    icon: "success",
    confirmButtonColor: "#22c55e",
    timer: 1000, 
    timerProgressBar: true
  });
  })
}



document.addEventListener("DOMContentLoaded", function () {
  fetchFoodData("carne");
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("carnesTab").classList.add("tab-active");
  fetchFoodData("carnes");
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('carnesTab').classList.add('tab-active');
  fetchFoodData('carnes');
});

