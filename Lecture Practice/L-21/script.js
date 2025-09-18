// JavaScript Array Object Methods Examples

// 1. Array creation and references
{
  let nums = [10, 20, 30, 40];

  let refArray = nums;       
  let copyArray = [...nums];  

  console.log("nums : ", nums);
  console.log("refArray : ", refArray);
  console.log("copyArray : ", copyArray);

  console.log("nums === refArray : ", nums === refArray); 
  console.log("nums === copyArray : ", nums === copyArray);

  let emptyArr = [];
  console.log("emptyArr === refArray : ", emptyArr === refArray);
  console.log("typeof [] : ", typeof []);
  console.log("typeof nums : ", typeof nums);

  let arrConstructor = new Array(5, 6, 7, 8);
  console.log("arrConstructor : ", arrConstructor);

  console.log("arrConstructor === refArray : ", arrConstructor === refArray);
}

// 2. Arrays with empty slots (sparse arrays)
{
  let sparseArr = [5, , 6, , 7];
  console.log("sparseArr : ", sparseArr);
  console.log("Length : ", sparseArr.length);
  console.log("Keys : ", Object.keys(sparseArr));
}

// 3. Changing length property
{
  let cars = [];
  console.log("Initial length : ", cars.length);

  cars.length = 3;    
  cars[3] = "Tesla"; 

  console.log("cars : ", cars);
  console.log("Keys : ", Object.keys(cars));
}

// 4. Array.isArray()
{
  let checkArr = [100, 200];
  let checkObj = { a: 1 };

  console.log("Is array?", Array.isArray(checkArr));
  console.log("Is array?", Array.isArray(checkObj));
}

// 5. Array.of()
{
  let arrOf = Array.of("apple", "banana", "cherry");
  console.log("Array.of : ", arrOf);
}
