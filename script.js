const btn = document.getElementById("btn");

const wrapper = document.getElementById("wrapper");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});

/* fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
        wrapper.innerHTML += `<div>
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.title}" width="100"/>
        </div>`
        }
    );
    console.log(data);
  }) */

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.map((product) => {
        console.log(product);
      });
      
    });

    const arraya = [1, 2, 3, 4, 5];

    const arrayb = arraya.map((num) => num * 2);

   console.log(arrayb);

   const  arrayc = arraya.forEach((num) => console.log(num * 2));


