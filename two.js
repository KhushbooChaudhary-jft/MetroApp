function selectStation() {
    let a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
    for (let i = 0; i <= a.length - 1; i++) {
        //console.log(a[i])
        document.getElementById("Source").innerHTML() += `<option>${a[i]}</option>`;
        document.getElementById('Destination').innerHTML() += `<option>${a[i]}</option>`;
    }

}
selectStation();



// let a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
// for (let i = 0; i <= a.length - 1; i++) {
//     document.getElementById("Source").innerHTML = `<option>${a[i]}</option>`;
//     document.getElementById('Destination').innerHTML = `<option>${a[i]}</option>`;
// }
// var option = document.createElement("option");
// option.text = "Text";
// option.value = "myvalue";
// var select = document.getElementById("id-to-my-select-box");
// select.appendChild(option);

//let a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
// const source = document.querySelector("#Source");
// const destination = document.getElementById('#Destination');

// for (let i = 1; i <= 28; i++) {
//     let option = document.createElement("option");
//     option.text = i;
//     option.value = i;
//     source.appendChild(option);
//     destination.appendChild(option);

// }
