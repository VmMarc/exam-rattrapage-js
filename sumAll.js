const sumAll = (tab) => {
  let sum = 0

for (let i = 0; i < tab.length; ++i) {
    sum += tab[i]
  }
  console.log(sum)
}
sumAll([1, 2, 3, 4])
