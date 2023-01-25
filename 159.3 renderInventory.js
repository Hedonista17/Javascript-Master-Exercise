let inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function renderInventory(shoeList) {

let newArr = []

shoeList.map((a) => {

    a.shoes.map((b) => {

      let color = b.name.search(/black/i)
      if (color != -1) {
        newArr.push([a.name, b.name, b.price])
      }
})
})

return newArr   
}
console.log(renderInventory(inventory))
