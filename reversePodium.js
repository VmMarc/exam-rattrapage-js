const reversePodium = (tab) => {
  tab.sort((a, b) => a - b);
  console.log(`${tab[0]}\n${tab[1]}\n${tab[2]}`);
}

reversePodium([15, 10, 40, 5, 70])


