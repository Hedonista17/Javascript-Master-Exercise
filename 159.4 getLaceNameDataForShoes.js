let inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function getLaceNameDataForShoes(inventory) {
  let newArr = []

  inventory.map((a) => {
  
      a.shoes.map((b) => {
  
        let laced = b.name.search(/lace/i)

        if (laced != -1) {

          let nameSplit = b.name.split(' ');
          let contador = 0
          nameSplit.map((c) => {
            if (c.startsWith('lace')) 
            newArr.push({ nameWords: nameSplit, targetWordIndex: contador });
            else contador ++      
        })
      }
  })
})
return newArr  
}

console.log(getLaceNameDataForShoes(inventory))