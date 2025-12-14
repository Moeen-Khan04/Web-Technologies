let students = [];

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const cgpa = parseFloat(document.getElementById("cgpa").value);

  if (name && roll && !isNaN(cgpa)) {
    students.push({ name, roll, cgpa });
    displayStudents();
    this.reset();
  }
});

document.getElementById("search").addEventListener("input", function () {
  displayStudents(this.value.toLowerCase());
});

function displayStudents(filter = "") {
  const table = document.getElementById("studentTable");
  table.innerHTML = "";

  const sorted = [...students].sort((a, b) => b.cgpa - a.cgpa);
  const topCGPA = sorted.length ? sorted[0].cgpa : null;

  sorted.forEach((student, index) => {
    if (student.name.toLowerCase().includes(filter)) {
      const row = document.createElement("tr");
      if (student.cgpa === topCGPA) row.classList.add("highlight");

      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.cgpa.toFixed(2)}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      `;
      table.appendChild(row);
    }
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("roll").value = student.roll;
  document.getElementById("cgpa").value = student.cgpa;
  deleteStudent(index);
}