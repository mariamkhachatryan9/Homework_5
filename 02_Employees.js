fetch("./src/Homework5-employees.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let employees = data;

    let html = '';
    employees.forEach(employee => {
      if (employee.status === true) {
        let htmlSegment = `<div class="employee">
                          <h2>${employee.name}</h2>
                          <div>${employee.status}</div>
                      </div> `;

        html += htmlSegment;
      };
    })
    let container = document.querySelector('.container');
    container.innerHTML = html;
  })


