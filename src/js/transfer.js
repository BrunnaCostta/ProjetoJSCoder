document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("transferHeader").innerHTML = `
      <header class="w-full md:pt-2 pt-1 flex bg-gray-800 justify-between items-center md:pb-2">
        <div class="md:mr-4 mr-0 ml-2 text-white md:mt-1">
          <a href="home.html" class="text-small">Mu Restaurante</a>
        </div>
        <nav class="flex items-center">
          <div class="flex navbar">
            <input
              class="border-white text-black outline-none rounded-2xl mt-1"
              type="text"
              placeholder="Pesquise aqui"
            />
            <a href="#">
              <img
                src="../icons/search.svg"
                alt="search"
                class="size-6 ml-2 mr-4 mt-1 cursor-pointer hidden md:block"
              />
            </a>
            <a href="./cart.html">          
              <img src="../icons/cart4.svg" class="md:mt-2 mt-2 mx-4"/>
            </a>
          </div>
          <div class="text-white block md:hidden mr-6 mt-2 cursor-pointer" onclick="menuOptions()">
            <img src="../icons/list.svg" class="size-6" />
          </div>
          <div class="hidden md:flex md:mr-10 text-white justify-between">
            <div class="cursor-pointer mr-4">
              <a href="menu.html" class="hover:text-orange-400">Menu</a>
            </div>
            <div class="cursor-pointer mr-4">
              <a href="home.html" class="hover:text-orange-400 navegation">Home</a>
            </div>
          </div>
          <ul
            class="text-white block md:hidden bg-gray-800"
            id="menu"
            style="display: none; position: absolute; right:5px; z-index: 999; top:4%; margin-right: 18px; border-radius:8px"
          >
            <li class="cursor-pointer mr-6 hover:text-orange-400 itens_list">
              <a href="menu.html">Menu</a>
            </li>
            <li class="cursor-pointer mr-6 hover:text-orange-400 itens_list">
              <a href="home.html">Home</a>
            </li>
          </ul>
        </nav>
      </header>
    `;
});








document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("transferFooter").innerHTML = `

<footer class="footer text-white flex md:grid md:grid-cols-1 md:grid-cols-2 md:gap-4 text-base">
<div class="flex-col ml-6 hidden md:block ">
<p class="subTittle text-center mt-3 ">Continue conectado</p>
<div class="mt-3">Desde 1997, somos apaixonados por carnes de qualidade. Cada prato é preparado com cortes selecionados, combinando tradição e sabores únicos para proporcionar uma experiência inesquecível aos amantes da boa gastronomia.</div>
</div>
<div class="flex-1 md:ml-8 sm:flex-col ml-2">
  <p class="subTittle text-center mt-3 ml-9">Siga-nos nas Redes Sociais</p>
  <span class="flex  ml-32 md:mt-2 mt-3">
  <img src="../icons/instagram.svg" class="md:mb-2 "/>
  <p class="ml-2 ">muRestaurante</p>
  </span>

  <span class="flex ml-32  mt-3">
  <img src="../icons/whatsapp.svg" class="md:mt-4 mt-2 pb-4 "/>
  <p class="ml-2 md:mt-3 mt-0 ">(21) 91234-5678</p>
</span>
</div>
</footer>   `;
});

