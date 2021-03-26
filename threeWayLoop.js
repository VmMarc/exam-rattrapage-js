const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = tab[tab.length -1]; i > tab[0]; ++i) {
  console.log(`${tab[i]}, length: ${tab[i].length}, index: ${tab.indexOf(tab[i])}`)
}

/*
for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})
*/