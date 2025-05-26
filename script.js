let students = [];

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value);
    let major = document.getElementById("major").value;
    let languages = Array.from(document.querySelectorAll("input[name='languages']:checked")).map(lang => lang.value);

    // Form validation
    if (!name) return alert("Please enter your name.");
    if (!age || age <= 0) return alert("Please enter a valid age.");
    if (!major) return alert("Please select a major.");
    if (languages.length === 0) return alert("Please select at least one programming language.");

    // Store student data
    let student = { name, age, major, languages };
    students.push(student);

    // Display registered students
    updateStudentList();
    this.reset();
});

function updateStudentList() {
    let studentsList = document.getElementById("studentsList");
    studentsList.innerHTML = students.length ? "" : "<p>No students registered yet!</p>";

    students.forEach((student, index) => {
        let entry = document.createElement("p");
        entry.innerHTML = `<strong>${student.name}</strong>, Age: ${student.age}, Major: ${student.major}, Languages: ${student.languages.join(", ")} 
        <button onclick="removeStudent(${index})">Remove</button>`;
        studentsList.appendChild(entry);
    });
}

function removeStudent(index) {
    students.splice(index, 1);
    updateStudentList();
}