// Topic: Constructor Functions + Closures

// Constructor Function
{
    console.log("1. Constructor Function");

    function Person() {
        this.name = "Ravindra";
        this.age = 18;
    }

    let p1 = new Person();
    console.log(p1);
    console.log(p1.name);
    console.log(p1.age);
}

// Constructor Function with Method
{
    console.log("2. Constructor Function with Method");

    function People() {
        this.name = "Parth";
        this.age = 18;

        this.greet = function () {
            console.log("Hello " + this.name);
        }
    }

    let p1 = new People();

    console.log(p1.name);
    console.log(p1.age);
    p1.greet();
}

// Constructor Function with Parameters
{
    console.log("3. Constructor Function with Parameters");

    function Student(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;

        this.greet = function () {
            console.log("Hello " + this.name);
        }
    }

    let s1 = new Student("Ravindra", 18, "Full Stack Stack");
    let s2 = new Student("Parth", 18, "Full Stack Stack");

    console.log(s1);
    console.log(s2);
    s1.greet();
    s2.greet();
}

// JavaScript Function Closure (Outer + Inner)
{
    console.log("4. JavaScript Function Closure (Outer + Inner)");

    function outer(name) {
        function inner() {
            console.log("Hi, " + name);
        }

        return inner;
    }

    let res = outer("Ravindra");
    res();

    function outer2(num) {
        function inner2() {
            console.log(num * num);
        }
        return inner2;
    }

    let r2 = outer2(5);
    r2();
}

// Closure with Counter
{
    console.log("5. Closure with Counter");
    let count = 0;

    function counter() {
        function increment() {
            return count = count + 1;
        }

        return increment;
    }

    let c1 = counter();
    console.log(c1());
    console.log(c1());
    console.log(c1());
    console.log(c1());
}