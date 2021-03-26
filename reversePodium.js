const reversePodium = (tab) => {
  tab.sort((a, b) => a - b);
  return (`${tab[0]}\n${tab[1]}\n${tab[2]}`);
}

console.log(reversePodium([15, 10, 40, 5, 70]))


