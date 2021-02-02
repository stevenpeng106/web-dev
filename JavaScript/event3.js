const form = document.querySelector('form');
const formContainer = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
   
  const productInput = form.elements.product;
  const quantityInput = form.elements.qty;

  const newProduct = document.createElement('li');

  newProduct.innerText = `${quantityInput.value}  ${productInput.value}`;
  formContainer.appendChild(newProduct);
   
  productInput.value = '';
  quantityInput.value = '';
});
