function fetchData() {
  fetch("https://reqres.in/api/users")
    .then(function (res) {
      return res.json();
    })
    .then((details) => {
      console.log(details.data);
      let ary = details.data;
      showData(ary);
    });
}
let fetchBtn = document.getElementById("Fetch-Users");
fetchBtn.addEventListener("click", fetchData);

function showData(ary) {
  let operation = "";
  ary.forEach((element) => {
    operation += `
    <div class="card"> 
        <img src ="${element.avatar}" alt="Avatar" id = "avatar"/>
        <div class="names">
            <span class="fName"> ${element.first_name} </span>
            <span class="lName"> ${element.last_name} </span>
        </div>
        <p class="email"> ${element.email} </p>
        <p class="id"> ID : ${element.id} </p>
    </div>
    `;
  });
  document.getElementById("container").innerHTML = operation;
}
