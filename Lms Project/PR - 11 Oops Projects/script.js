// Encapsulation
// Using private properties (#) inside Vehicle class
class Vehicle {
    #number;
    #type;
    #plateColor;
    constructor(number, type, plateColor) {
        this.#number = number;
        this.#type = type;
        this.#plateColor = plateColor;
        this.entryTime = new Date();
    }

    get details() {
        return {
            number: this.#number,
            type: this.#type,
            plateColor: this.#plateColor,
            entryTime: this.entryTime.toLocaleTimeString()
        };
    }
}

// Inheritance
// Car and Bike classes extend Vehicle
class Car extends Vehicle { }
class Bike extends Vehicle { }

// Abstraction
// ParkingLot handles complex logic internally
class ParkingLot {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
        this.display();
    }

    // Polymorphism
    // removeVehicle works for Car or Bike without changing code
    removeVehicle(index) {
        this.vehicles.splice(index, 1);
        this.display();
    }

    display() {
        const table = document.getElementById("parkingTable");
        table.innerHTML = "";

        this.vehicles.forEach((v, index) => {
            // Number Plate UI Styling Logic
            let bg = v.details.plateColor;
            let textColor = (bg === "yellow" || bg === "white") ? "black" : "yellow";

            const row = `
            <tr class="text-center border">
              <td class="border p-2">
                <span class="px-3 py-1 rounded font-bold tracking-widest inline-block"
                  style="background:${bg}; color:${textColor}; border:2px solid black;">
                  ${v.details.number}
                </span>
              </td>
              <td class="border p-2">${v.details.type}</td>
              <td class="border p-2">${v.details.entryTime}</td>
              <td class="border p-2">
                <button onclick="parkingLot.removeVehicle(${index})"
                  class="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700">Remove</button>
              </td>
            </tr>
          `;
            table.innerHTML += row;
        });
    }
}

const parkingLot = new ParkingLot();

document.getElementById("addBtn").addEventListener("click", () => {
    const number = document.getElementById("vehicleNumber").value;
    const type = document.getElementById("vehicleType").value;
    const plateColor = document.getElementById("plateColor").value;

    if (!number.trim()) return alert("Please enter vehicle number");

    let vehicle = type === "Car"
        ? new Car(number, type, plateColor)
        : new Bike(number, type, plateColor);

    parkingLot.addVehicle(vehicle);
    document.getElementById("vehicleNumber").value = "";
});
