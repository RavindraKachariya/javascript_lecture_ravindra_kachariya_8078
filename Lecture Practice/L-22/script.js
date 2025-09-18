// Array.prototype.at()
{
  let colors = ["red", "green", "blue", "yellow", "purple"];
  console.log(colors.at(2));
  console.log(colors.at(-1));
}

// Array.prototype.copyWithin()
{
  let fruits = ["🍎", "🍊", "🍌", "🍉", "🍇", "🥭", "🍓"];
  console.log(fruits);
  console.log(fruits.copyWithin(2));
  console.log(fruits.copyWithin(1, 4));
  console.log(fruits.copyWithin(0, 3, 5));
}

// Array.prototype.entries()
{
  let animals = ["🐶", "🐱", "🐭", "🐹"];
  let iterator = animals.entries();

  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
}

// Array.prototype.every()
{
  let numbers = [12, 18, 25, 30];
  let allEven = numbers.every(num => num % 2 === 0);
  console.log(allEven);
}

// Array.prototype.fill()
{
  let scores = [10, 20, 30, 40, 50];
  console.log(scores.fill(0));
  console.log(scores.fill(9, 2));
  console.log(scores.fill(7, 1, 3));
}

// Array.prototype.filter()
{
  let players = [
    { name: "Virat", runs: 120 },
    { name: "Rohit", runs: 85 },
    { name: "Dhoni", runs: 45 },
    { name: "Sachin", runs: 200 },
    { name: "Hardik", runs: 60 },
  ];

  let topPlayers = players.filter(p => p.runs > 80).map(p => p.name);
  console.log(topPlayers);
}
