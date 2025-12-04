# 📘 **Encapsulation in JavaScript**

*“Hide the data, expose only what is required.”*
Encapsulation का मतलब है **data को protect करना** और **methods के through access देना**.

---

# 🟦 **1. What is Encapsulation?**

Encapsulation =
✔ Data (properties) + Functions (methods) को एक unit में बांधना
✔ Internal details को hide रखना
✔ बाहर से direct access को रोकना
✔ सिर्फ limited access allow करना (controlled access)

👉 इसे सोचो: आपकी कार में engine है, लेकिन you cannot directly open engine code.
You only get: **Start, Stop, Accelerate, Brake**
→ यही Encapsulation है।

---

# 🟦 **2. Why Encapsulation Is Needed?**

✔ Data को गलत तरीके से change होने से रोकना
✔ Code को secure और clean बनाना
✔ Modify करने पर बाकी system break न हो
✔ Real-world systems जैसे Bank, ATM में ‘controlled access’ implement करना

**Example:**
कोई भी user अपने bank balance को direct `-5000` कर दे — ऐसा नहीं होना चाहिए।

---

# 🟩 **3. Encapsulation in JavaScript – 3 Ways**

JavaScript में Encapsulation achieve करने के 3 तरीके हैं:

---

## 🟨 **(A) Using Private Fields (#variable)**

Modern JS का सबसे powerful तरीका।

### Syntax:

```js
class BankAccount {
  #balance = 0;   // private

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

✔ `#balance` outside access नहीं कर सकते
❌ `account.#balance` → error

---

## 🟨 **(B) Using Closures (Old JS but Important)**

```js
function createUser() {
  let password = "secret123"; // private

  return {
    getPassword() {
      return password;
    }
  };
}

const user = createUser();
console.log(user.password); // ❌ undefined
console.log(user.getPassword()); // ✔ returns password
```

---

## 🟨 **(C) Getters and Setters (Controlled Access)**

Getters → read value
Setters → validate then set value

```js
class Student {
  #marks = 0;

  get marks() {
    return this.#marks;
  }

  set marks(value) {
    if (value < 0) return;
    this.#marks = value;
  }
}

const s = new Student();
s.marks = 90; // setter
console.log(s.marks); // getter
```

---

# 🟦 **4. Real-Life Example – Bank Account (Full Encapsulation)**

```js
class BankAccount {
  #balance = 0;

  constructor(name) {
    this.name = name;
  }

  deposit(amount) {
    if (amount <= 0) return "Invalid Amount";
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) return "Insufficient Funds";
    this.#balance -= amount;
  }

  getBalance() {
    return `Balance: ₹${this.#balance}`;
  }
}

const acc = new BankAccount("DK");

acc.deposit(1000);
acc.withdraw(200);

console.log(acc.getBalance());   // ₹800

console.log(acc.#balance);       // ❌ ERROR – Private
```

✔ Private
✔ Protected
✔ Safe
✔ Controlled Access

---

# 🟦 **5. Encapsulation के Benefits**

| Benefit          | Meaning                                      |
| ---------------- | -------------------------------------------- |
| Data Protection  | बाहरी code balance/marks change नहीं कर सकता |
| Access Control   | getter/setter से safe access                 |
| Cleaner Code     | logic एक जगह                                 |
| Easy Maintenance | change internal code; outer system safe      |
| Real Security    | banking, finance, login systems में must     |

---

# 🟩 **6. Simple Example – Car**

```js
class Car {
  #fuel = 0;

  addFuel(liters) {
    this.#fuel += liters;
  }

  drive() {
    if (this.#fuel <= 0) return "No fuel!";
    this.#fuel -= 1;
    return "Car is moving";
  }

  get fuelLevel() {
    return `${this.#fuel} liters`;
  }
}
```

---

# 🟦 **7. When to Use Encapsulation?**

Use it when you want to **protect your data**:

✔ Bank Balance
✔ Password
✔ Marks / Grade systems
✔ Inventory stock
✔ API keys
✔ Game player health

---

आपने सीख लिया:

✔ Private Fields
✔ Closures
✔ Getters & Setters
✔ Secure Class Design
✔ Real-Life Bank Example