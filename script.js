// Пароль администратора (можно изменить)
const ADMIN_PASSWORD = "12345";

// Проверка пароля
function checkAdmin() {
  const input = document.getElementById("adminPassword").value;
  const message = document.getElementById("loginMessage");
  if (input === ADMIN_PASSWORD) {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("productFormSection").style.display = "block";
  } else {
    message.textContent = "Неверный пароль. Попробуйте снова.";
  }
}

// Добавление товара
document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const price = document.getElementById("price").value.trim();
  const imageInput = document.getElementById("image");

  if (!title || !description || !price || !imageInput.files[0]) return;

  const reader = new FileReader();
  reader.onload = function () {
    const brochure = document.createElement("div");
    brochure.className = "brochure";
    brochure.innerHTML = `
      <img src="${reader.result}" alt="${title}" />
      <h3>${title}</h3>
      <p>${description}</p>
      <p class="price">${price} BYN</p>
    `;
    document.getElementById("brochureContainer").appendChild(brochure);
    document.getElementById("productForm").reset();
  };
  reader.readAsDataURL(imageInput.files[0]);
});
