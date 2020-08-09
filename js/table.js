
//      <tr class="table-success">
//      <th scope="row">1</th>
//      <td>Mark</td>
//      <td>Otto</td>
//      <td>@mdo</td>
//      <td>
//          <div class="btn-group btn">
//              <button class="btn-primary btn"><i class="fas fa-sync-alt"></i></button>
//              <button class="btn-danger btn">törlés  <i class="fas fa-trash-alt"></i></button>
//          </div>
//      </td>
//    </tr>
let users = [
    { surname: "Berger", firstname: "White", age: 22 },
    { surname: "László", firstname: "Nagy", age: 33 },
    { surname: "Géza", firstname: "Kiss", age: 44 },
    { surname: "John", firstname: "Doe", age: 55 },
    { surname: "Ilonka", firstname: "Piros", age: 32 },
    { surname: "Péter", firstname: "Kolos", age: 27 },
    { surname: "János", firstname: "Wéber", age: 29 },
];
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

let createBtnGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);

}
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createBtnGroup(tr);
    tableBody.appendChild(tr);
}
