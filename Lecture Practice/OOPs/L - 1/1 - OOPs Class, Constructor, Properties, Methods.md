# 🎯 JavaScript OOPs - Class, Constructor, Properties, Methods

### Made By Ravindra Kachariya

---

## 🧱 Step 1: Class — Blueprint of Object

JavaScript में Class एक **Template या Design** होती है,

जो बताती है कि किसी Object में कौन-कौन से Data (Properties) और Behaviors (Methods) होंगे

---

### 📘 Example:

```jsx
class Car {
  constructor(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }

  stop() {
    console.log(`${this.brand} stopped.`);
  }
}

const car1 = new Car("BMW", "Black", 8000000);
car1.start();
car1.stop();
```

---

## 🧩 Step-by-Step Explanation (Line-by-Line)

---

### 🧠 Line 1:

```jsx
class Car {
```

🔹 यह एक **Class Declaration** है —

यह बताता है कि हम एक “Car” नाम की Blueprint बना रहे हैं

💬 मतलब: “Car” नाम का Object असली दुनिया में क्या-क्या करेगा, अब हम define करेंगे

---

### 🧠 Line 2-6:

```jsx
constructor(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;
}
```

🔹 `constructor()` एक **special function** है जो **हर बार Object बनाते समय अपने आप चलता है**।

🔹 यह **Object की properties को initialize (सेट)** करता है

**`this` keyword** वर्तमान Object को दर्शाता है

मतलब — जो Object बन रहा है, उसी के अंदर ये डेटा जाएगा

💬 Example:

> अगर कोई बोले “BMW Car बनाओ”,
>
> तो brand = "BMW", color = "Black", price = 8000000
>
> ये तीनों उसी Car के अंदर सेट हो जाएँगे

**Real-Life Analogy:**

जैसे कोई Car फैक्ट्री में बनती है, तो उसका Engine, Color, और Price वहीं set किया जाता है

---

### 🧠 Line 8-10:

```jsx
start() {
  console.log(`${this.brand} is starting...`);
}
```

🔹 यह एक **Method** है — Object का Behavior बताता है

🔹 जब हम `car1.start()` चलाते हैं, तो ये Method “start” action perform करता है

💬 मतलब: Car चालू हो रही है — उसके अंदर की Functionality यही Method संभालता है

---

### 🧠 Line 12-14:

```jsx
stop() {
  console.log(`${this.brand} stopped.`);
}
```

🔹 दूसरा Method — जो Car को रोकता है।

🔹 दोनों Methods एक ही Class के अंदर हैं — यानी Behavior एक जगह manage हो रहा है

---

### 🧠 Line 16:

```jsx
const car1 = new Car("BMW", "Black", 8000000);
```

🔹 यहाँ हमने **Class से एक Object बनाया है।**

🔹 `new` keyword JavaScript को बताता है कि “Car” का नया Object बनाओ

🔹 इसके अंदर constructor अपने आप call हो जाता है

💬 Real Life Example:

> जैसे आपने Showroom में बोला — “मुझे BMW Black Car चाहिए”
>
> अब System उसी blueprint से एक असली Car (Object) बना देता है

---

### 🧠 Line 17-18:

```jsx
car1.start();
car1.stop();
```

🔹 अब हम Object के अंदर के Functions को चला रहे हैं

🔹 हर Object अपने डेटा के साथ काम करता है

💬 Output:

```
BMW is starting...
BMW stopped.
```

---

## 🧩 Step 2: Real-Life Example (Restaurant System 🍽️)

अब वही Concept “Restaurant” Example से समझो 👇

```jsx
class Chef {
  constructor(name, speciality) {
    this.name = name;
    this.speciality = speciality;
  }

  cook(dish) {
    console.log(`${this.name} is cooking ${dish} 🍲`);
  }
}

class Waiter {
  constructor(name, chef) {
    this.name = name;
    this.chef = chef; // Relation between Objects
  }

  takeOrder(dish) {
    console.log(`${this.name} took order for ${dish}`);
    this.chef.cook(dish);
  }
}

// Object Creation
const chef1 = new Chef("Raj", "Italian");
const waiter1 = new Waiter("Aman", chef1);

// Real Interaction
waiter1.takeOrder("Pasta");
```

---

### 🧠 Explanation (Step-by-Step)

## 📜 Code और उसका Explanation

### **Line 1–5: Chef Class**

```jsx
class Chef {
  constructor(name, speciality) {
    this.name = name;
    this.speciality = speciality;
  }
```

### क्या हो रहा है:

- `class Chef` → “Chef” नाम का एक **Blueprint** बनाना
  जैसे रेस्टोरेंट में Chef बनने का एक plan/idea तैयार करना
- `constructor(name, speciality)` → जब नया Chef बनाया जाएगा, तो उसका नाम और speciality (विशेष डिश) set किया जाएगा
  यह constructor function **हर बार Chef बनाते समय अपने आप चलता है**
- `this.name = name;` और `this.speciality = speciality;` → Chef object के अंदर उसका नाम और speciality save करता है

💬 **Real-Life Example:**

सोचिए, आप Chef Raj को हायर करते हैं — Raj Italian खाना बनाने में expert है। तो हम Chef का object बनाते समय उसका नाम और speciality सेट करते हैं

---

### **Line 7–10: cook Method**

```jsx
cook(dish) {
    console.log(`${this.name} is cooking ${dish} 🍲`);
}
```

### क्या हो रहा है:

- `cook(dish)` → यह Chef का काम है
  हर Chef object इस method को इस्तेमाल कर सकता है
- `${this.name} is cooking ${dish}` → Chef अपना नाम और जिस डिश को बना रहा है, वो दिखाता है।

💬 **Real-Life Example:**

Chef Raj को Pasta बनाने के लिए कहा गया। तो यह method यह output देगा:

> Raj is cooking Pasta 🍲

---

### **Line 12: Waiter Class**

```jsx
class Waiter {
```

यह एक नया **Blueprint** है — Waiter के लिए

जैसे Restaurant में एक Waiter होता है जो ऑर्डर लेता है और Chef को भेजता है

---

### **Line 13–16: Waiter Constructor**

```jsx
  constructor(name, chef) {
    this.name = name;
    this.chef = chef; // Relation between Objects
  }
```

### क्या हो रहा है:

- Waiter बनाते समय उसका नाम और एक Chef object देना ज़रूरी है
- `this.chef = chef;` → यह बताता है कि Waiter के पास एक Chef है जिससे वो बात करेगा

💬 **Real-Life Example:**

Waiter Aman का नाम है और उसके पास Chef Raj है जो खाना बनाता है

---

### **Line 18–22: takeOrder Method**

```jsx
  takeOrder(dish) {
    console.log(`${this.name} took order for ${dish}`);
    this.chef.cook(dish);
  }
```

### क्या हो रहा है:

- `takeOrder(dish)` → Waiter का काम है ऑर्डर लेना
- `console.log(...)` → यह message देता है कि Waiter ने ऑर्डर लिया
- `this.chef.cook(dish);` → Waiter Chef को ऑर्डर भेजता है
  यानी, Chef का cook method call होता है

💬 **Real-Life Example:**

Customer: “Pasta लाओ”

Waiter Aman → Chef Raj को कहता है: “Pasta बनाओ”

Chef Raj → Pasta बनाना शुरू करता है

---

### **Line 25–26: Object Creation**

```jsx
const chef1 = new Chef("Raj", "Italian");
const waiter1 = new Waiter("Aman", chef1);
```

### क्या हो रहा है:

- `new Chef("Raj", "Italian")` → Chef का एक असली object बनता है, जिसका नाम Raj है और speciality Italian खाना है
- `new Waiter("Aman", chef1)` → Waiter का एक असली object बनता है, जिसका नाम Aman है और उसका Chef object chef1 है

💬 **Real-Life Example:**

यह वैसा है जैसे Restaurant में Aman (Waiter) और Raj (Chef) असली में मौजूद हैं और काम कर रहे हैं

---

### **Line 29: Interaction**

```jsx
waiter1.takeOrder("Pasta");
```

### क्या हो रहा है:

- Waiter Aman “Pasta” का ऑर्डर लेता है
- Waiter अपने Chef Raj को बताता है कि Pasta बनाना है
- Chef Raj Pasta बनाना शुरू करता है

💬 **Real-Life Output:**

```
Aman took order for Pasta
Raj is cooking Pasta 🍲
```

---

## 🧠 **Real-Life Analogy**

| Concept      | Real-Life Example                                  |
| ------------ | -------------------------------------------------- |
| Class        | Blueprint / Design (Chef या Waiter की job का plan) |
| Object       | असली Chef Raj या Waiter Aman                       |
| Property     | name, speciality, chef                             |
| Method       | cook(), takeOrder()                                |
| Relationship | Waiter और Chef का काम एक दूसरे से जुड़ता है        |

---

## 📌 **Real Project में इसका Use**

यह तरीका हम किसी भी **Restaurant Management System**, **E-commerce Order System**, या **Hotel Management Software** में use कर सकते हैं

**Example:**

- Chef → Product Manufacturer Class
- Waiter → Order Processing Class
- Customer → User Interface
- Interaction → User Order → System Process → Output

---

**Real-Life Comparison:**

- Chef और Waiter दो अलग Objects हैं
- दोनों का काम अलग है
- दोनों एक दूसरे से बात कर रहे हैं
  👉 यही OOPs का असली फायदा है — Responsibility अलग-अलग, लेकिन System साथ चलता है

---

## 🧠 Step 3: Real-World Project Use Cases (Where We Use This in Real Projects)

| Project Type              | Where We Use OOPs              | Example Classes                  |
| ------------------------- | ------------------------------ | -------------------------------- |
| 🛒 **E-commerce Website** | Product, Cart, Order, Payment  | `class Product`, `class Order`   |
| 💰 **Banking System**     | Account, Customer, Transaction | `class Account`, `class Loan`    |
| 🏫 **School Management**  | Student, Teacher, Exam         | `class Student`, `class Teacher` |
| 🚗 **Car Simulation App** | Car, Engine, Driver            | `class Car`, `class Driver`      |
| 🎮 **Game Development**   | Player, Enemy, Weapon          | `class Player`, `class Weapon`   |

---

### 💡 Example – Real Project (E-commerce Product System)

```jsx
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  showDetails() {
    console.log(`🛍️ ${this.name} | ₹${this.price} | In stock: ${this.stock}`);
  }

  buy(quantity) {
    if (quantity > this.stock) {
      console.log(`❌ Not enough stock for ${this.name}`);
    } else {
      this.stock -= quantity;
      console.log(
        `✅ You bought ${quantity} ${this.name}(s). Remaining stock: ${this.stock}`
      );
    }
  }
}

// Objects
const p1 = new Product("Laptop", 60000, 10);
const p2 = new Product("Phone", 25000, 5);

// Using Methods
p1.showDetails();
p1.buy(3);
p2.buy(6);
```

---

### 🧠 Line-by-Line Breakdown

### **Line 1–3: Product Class**

```jsx
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
```

### क्या हो रहा है:

- `class Product` → “Product” नाम का एक **Blueprint** बनाना
  जैसे एक ई-कॉमर्स कंपनी का प्रोडक्ट बनाने का डिज़ाइन
- `constructor(name, price, stock)` → जब नया Product बनाया जाएगा, तो उसका नाम, price और stock set किया जाएगा
  यह constructor function **हर बार Product object बनाते समय अपने आप चलता है।**
- `this.name = name;` और `this.price = price;`, `this.stock = stock;` → Product object के अंदर उसका डेटा save करता है

💬 **Real-Life Example:**

सोचिए Amazon में एक Laptop है, उसका नाम "Laptop", price ₹60,000 और stock 10 है

तो हम Product class से इसका object बनाते हैं

---

### **Line 5–7: showDetails Method**

```jsx
showDetails() {
  console.log(`🛍️ ${this.name} | ₹${this.price} | In stock: ${this.stock}`);
}
```

### क्या हो रहा है:

- `showDetails()` → यह Product का behavior है
  इसका काम Product की जानकारी दिखाना है

💬 **Real-Life Example:**

जब आप Amazon पर Laptop खोलते हैं, तो आपको उसका नाम, कीमत और स्टॉक दिखाई देता है

ये method वही काम कर रहा है

---

### **Line 9–16: buy Method**

```jsx
buy(quantity) {
  if (quantity > this.stock) {
    console.log(`❌ Not enough stock for ${this.name}`);
  } else {
    this.stock -= quantity;
    console.log(`✅ You bought ${quantity} ${this.name}(s). Remaining stock: ${this.stock}`);
  }
}
```

### क्या हो रहा है:

- `buy(quantity)` → Product खरीदने का process

**Step-by-Step:**

1. `if (quantity > this.stock)` → चेक करता है कि जो quantity खरीदी जा रही है, वह stock में available है या नहीं।
2. अगर stock कम है → error message देता है
3. अगर stock है → stock से quantity घटा देता है (`this.stock -= quantity;`) और success message देता है।

💬 **Real-Life Example:**

आप Amazon पर Laptop खरीदना चाहते हैं — अगर स्टॉक में पर्याप्त quantity नहीं है, तो आपको error message मिलेगा

अगर स्टॉक है, तो आपका ऑर्डर कन्फ़र्म होगा और स्टॉक कम हो जाएगा

---

### **Line 18–21: Object Creation**

```jsx
const p1 = new Product("Laptop", 60000, 10);
const p2 = new Product("Phone", 25000, 5);
```

### क्या हो रहा है:

- `new Product(...)` → Product का एक असली object बनाना
- `p1` → Laptop product object
- `p2` → Phone product object

💬 **Real-Life Example:**

Amazon में अलग-अलग products होते हैं — Laptop, Phone आदि

हर product अलग object है जिसकी अपनी details होती हैं

---

### **Line 23–25: Using Methods**

```jsx
p1.showDetails();
p1.buy(3);
p2.buy(6);
```

### क्या हो रहा है:

1. `p1.showDetails();` → Laptop की जानकारी दिखाता है
2. `p1.buy(3);` → Laptop की 3 quantity खरीदता है। Stock कम हो जाएगा
3. `p2.buy(6);` → Phone की 6 quantity खरीदना चाहता है

   लेकिन stock केवल 5 है → error message मिलेगा।

💬 **Real-Life Example:**

आप Amazon पर Laptop देखते हैं → details दिखती हैं

फिर आप खरीदते हैं → stock कम हो जाता है

अगर आप phone खरीदना चाहेंगे लेकिन stock कम है → आपको “Not enough stock” message मिलेगा।

---

### 💬 Output:

```
🛍️ Laptop | ₹60000 | In stock: 10
✅ You bought 3 Laptop(s). Remaining stock: 7
❌ Not enough stock for Phone
```

---

### 💼 Real-Life Use Case:

> ऐसा Code किसी भी E-commerce Website (Amazon, Flipkart, Meesho) के “Backend Logic” में होता है —
>
> जहाँ हर Product एक Object है
>
> और उसका डेटा और Functionality Class के अंदर manage होता है।

---

## 💡 Step 4: Why Companies Love OOPs

1. **Reusable Code:**

   एक बार Class बना दो — हर Product, User, या Account उसी से बन सकता है

2. **Secure & Organized:**

   हर Data अपने Object में सुरक्षित रहता है

3. **Maintainable:**

   अगर “Product” की logic बदलनी है, तो बस एक Class बदलनी होगी

4. **Scalable:**

   नए Feature जोड़ने में System नहीं टूटता

---

## 🧭 Step 5: Quick Summary

| Concept     | Code                       | Real Meaning           |
| ----------- | -------------------------- | ---------------------- |
| Class       | `class Car {}`             | Design या Template     |
| Constructor | `constructor()`            | Object बनते ही चलता है |
| Property    | `this.name`                | Object का Data         |
| Method      | `start()`                  | Object का Behavior     |
| Object      | `new Car()`                | Class का Instance      |
| Use Case    | Banking, E-commerce, Games | Real Projects          |
|             |                            |                        |

---

## 🧠 Final Thought

> “OOPs सिखाता है कि सॉफ्टवेयर को वैसे सोचो जैसे असली दुनिया चलती है”
>
> हर चीज़ — इंसान, कार, अकाउंट, या प्रोडक्ट —
>
> **सब एक Object है**,
>
> और हर Object अपनी जिम्मेदारी खुद संभालता है

---

<footer style="text-align:center; font-size:medium; color:gray;">
    © 2025 All Rights Reserved | Made By Ravindra Kachariya
</footer>
