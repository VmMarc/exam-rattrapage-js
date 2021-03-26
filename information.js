const information = (prenom, nom, age, sexe) => {
console.log(`prenom: ${prenom}`)
console.log(`nom: ${nom}`)
console.log(`age: ${age}`)
  if (age >= 18 && sexe === '?') {
    console.log(`Vous êtes majeur depuis ${age - 18} ans.`)
  } else if (age < 18 && sexe === '?'){
    console.log(`Vous serez majeur dans ${18 - age} ans.`)
  }

  if (age >= 18 && sexe === 'M') {
    console.log(`Monsieur, vous êtes majeur depuis ${age - 18} ans.`)
  } else if (age < 18 && sexe === 'M') {
    console.log(`Monsieur, vous serez majeur dans ${18 - age} ans.`)
  }

  if (age >= 18 && sexe === 'F') {
    console.log(`Madame, vous êtes majeur depuis ${age - 18} ans.`)
  } else if (age < 18 && sexe === 'F'){
    console.log(`Madame, vous serez majeur dans ${18 - age} ans.`)
  }
}
information('Sofiane', 'Akermoun', 17, 'M')