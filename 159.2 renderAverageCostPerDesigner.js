let currentInventory = [
  { //inventory[0] = x
    name: 'Brunello Cucinelli', //x.name
    shoes: [ //x.shoes
    {name: 'tasselled black low-top lace-up', price: 1000}, //z
    {name: 'tasselled green low-top lace-up', price: 1100}, //z
    {name: 'plain beige suede moccasin', price: 950}, //z
    {name: 'plain olive suede moccasin', price: 1050} //z
    ],
  },
  { //inventory[1] = x
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {

  let arr = []

inventory.map(x=>{

  let suma = 0
  let numel = x.shoes.length

//console.log(numel)
  x.shoes.map (z=> {

    suma += z.price
  })

  let avg = suma / numel

  let obj = {} //se crea un obj nuevo donde insertar datos
  
obj.name =x.name //creamos property nueva llamada Name
obj.averagePrice = avg //creamos property nueva llamada averagePrice
arr.push(obj) //pusheamos el nuevo objeto al array

})
return arr
}
console.log(renderAverageCostPerDesigner(currentInventory))