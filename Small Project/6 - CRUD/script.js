const STUDENT_API = "http://localhost:3000/students";

let editId = null;

// Get students (READ)
async function getStudents() {
    const res = await fetch(STUDENT_API);
    return await res.json();
}

// Display students
async function displayStudents() {
    const students = await getStudents();
    const tbody = document.getElementById("studentList");
    tbody.innerHTML = "";

    students.forEach(student => {
        tbody.innerHTML += `
        <tr class="border-b hover:bg-gray-50">
          <td class="px-3 py-2"><input type="checkbox"></td>
          <td class="px-3 py-2 font-medium">${student.name}</td>
          <td class="px-3 py-2">${student.email}</td>
          <td class="px-3 py-2">${student.age}</td>
          <td class="px-3 py-2">${student.grid}</td>
          <td class="px-3 py-2">${student.gender}</td>
          <td class="px-3 py-2">${student.course}</td>
          <td class="px-3 py-2">${student.department}</td>
          <td class="px-3 py-2">${student.contact}</td>
          <td class="px-3 py-2 text-right">
            <i onclick="editStudent('${student.id}')" class="fa-solid fa-pen text-blue-500 mr-3 cursor-pointer"></i>
            <i onclick="deleteStudent('${student.id}')" class="fa-solid fa-trash text-red-500 cursor-pointer"></i>
          </td>
        </tr>
      `;
    });
}

// Add / Update student (CREATE / UPDATE)
async function saveStudent() {
    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        grid: document.getElementById("grid").value,
        gender: document.getElementById("gender").value,
        course: document.getElementById("course").value,
        department: document.getElementById("department").value,
        contact: document.getElementById("contact").value,
    };

    if (editId === null) {
        // CREATE (POST)
        await fetch(STUDENT_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student),
        });
    } else {
        // UPDATE (PUT)
        await fetch(`${STUDENT_API}/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student),
        });
        editId = null;
    }

    closeForm();
    displayStudents();
    document.getElementById("studentForm").reset();
}

// Edit student (GET data and fill form)
async function editStudent(id) {
    openForm();
    editId = id;

    const res = await fetch(`${STUDENT_API}/${id}`);
    const student = await res.json();

    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("age").value = student.age;
    document.getElementById("grid").value = student.grid;
    document.getElementById("gender").value = student.gender;
    document.getElementById("course").value = student.course;
    document.getElementById("department").value = student.department;
    document.getElementById("contact").value = student.contact;
}

// Delete student (DELETE)
async function deleteStudent(id) {
    await fetch(`${STUDENT_API}/${id}`, { method: "DELETE" });
    displayStudents();
}

// Load on start
window.onload = displayStudents;
