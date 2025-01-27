
function menuOptions() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block"; 
  }
}






const apiURL = './menu.json';

async function fetchPicanhaData() {
  try {
    const response = await fetch(apiURL); 
    if (!response.ok) {
      throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
    }

    const data = await response.json(); 
    console.log("prato:", data); 
  } catch (error) {
    console.error("Erro:", error);
  }
}


fetchPicanhaData();
