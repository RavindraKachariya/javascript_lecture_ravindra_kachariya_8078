// Array.prototype.find() & findLast()
{
  let prices = [120, 80, 200, 50, 30];

  let cheap = prices.find(p => p < 100);

  let cheapLast = prices.findLast(p => p < 100);

  console.log("First cheap item:", cheap);
  console.log("Last cheap item:", cheapLast);
}

// Array.prototype.findIndex() & findLastIndex()
{
  let scores = [40, 55, 28, 70, 30];

  let firstFailIndex = scores.findIndex(s => s < 35);

  let lastFailIndex = scores.findLastIndex(s => s < 35);

  console.log("First fail index:", firstFailIndex);
  console.log("Last fail index:", lastFailIndex);
}

// Array.prototype.forEach()
{
  let tasks = ["Login Page", "Dashboard", "Checkout"];

  console.log("Task List:");
  tasks.forEach(t => console.log("➡️", t));
}

// Array.prototype.indexOf() & lastIndexOf()
{
  let tech = ["HTML", "CSS", "JS", "React", "CSS", "Node"];

  let firstCSS = tech.indexOf("CSS");     
  let cssAfter2 = tech.indexOf("CSS", 2); 
  let lastCSS = tech.lastIndexOf("CSS"); 
  let cssBefore4 = tech.lastIndexOf("CSS", 4); 

  console.log("First CSS:", firstCSS);
  console.log("CSS after index 2:", cssAfter2);
  console.log("Last CSS:", lastCSS);
  console.log("CSS before index 4:", cssBefore4);
}
