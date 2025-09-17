import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';
('./shoppingCart.js');

import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

addToCart('bread', 5);
console.log(totalPrice, totalQuantity);
console.log(price);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

lastPost.then(last => console.log(last));
