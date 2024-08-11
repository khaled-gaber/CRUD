var Name = document.querySelector("#name")
var category = document.querySelector("#category")
var count = document.querySelector("#count")
var price = document.querySelector("#price")
var descount = document.querySelector("#descount")
var form = document.querySelector("form")

var btn_mood = "creat"
var event_update 

var data = []

form.onsubmit = function(e){
    e.preventDefault()
    var product = {
        name:Name.value,
        category:category.value,
        count:count.value,
        price:price.value,
        descount:descount.value,
    }
    if(btn_mood == "creat"){

        if( Name.value != "" && category.value != "" && count.value != "" && count.value < 50 && count.value != "0" && price.value != "" && descount.value !="" )
        if(product.count > 1){
            for (let i = 0; i < product.count ; i++) {
                data.push(product)
            }
        }else{
    
            data.push(product)
        }
        console.log(data);
    }else{
        data[event_update] = product

        count.style.display = "block"
        document.querySelector(".label_count").style.display="block"
        document.querySelector("form button").innerHTML = "Add Product"
        document.querySelector("form button").style.backgroundColor = " rgb(211, 209, 209)"
        btn_mood = "creat"
    }
    displayProduct()

}


function displayProduct(){

    var item = ``
    var id = 0
    for( var i=0 ; i<data.length ; i++ ){
        item += `
        <tr>
            <td>${++id}</td>
            <td>${data[i].name}</td>
            <td class='cat'>${data[i].category}</td>
            <td>${data[i].count}</td>
            <td>${data[i].price}</td>
            <td>${data[i].descount}</td>
            <td> <button class="update" onclick="UpdatePro(${i})" > Update </button> </td>
            <td> <button class="delete" onclick="deletePro(${i})" > Delete </button> </td>
        </tr>
        `
    }
    document.querySelector(".row").innerHTML = item

    clearInputs()
    delete_all()

}



function clearInputs(){
    Name.value = ""
    category.value = ""
    price.value = ""
    descount.value = ""
}

function deletePro(ahmed){
    data.splice(ahmed , 1)
    displayProduct()
}

function delete_all(){
    if(data.length > 0){
        document.querySelector(".delete_all").style.display= "block"
    }else{
        document.querySelector(".delete_all").style.display= "none"
    }

    document.querySelector(".delete_all").onclick = function(){
        data.splice(0)
        displayProduct()
    }
}

function UpdatePro(i){
    Name.value = data[i].name
    category.value = data[i].category
    price.value = data[i].price
    descount.value = data[i].descount
    count.style.display = "none"
    document.querySelector(".label_count").style.display="none"

    document.querySelector("form button").innerHTML = "UPDATING.."
    document.querySelector("form button").style.backgroundColor = "orange"
    btn_mood = "update"

    event_update = i
}



var search_inpt = document.querySelector(".search")
search_inpt.onkeyup = function(){

    var item = ``
    var id = 0
    for (let i = 0; i < data.length; i++) {

        console.log( data[i].category.toLowerCase().includes(search_inpt.value.toLowerCase()) );

        if(data[i].category.toLowerCase().includes(search_inpt.value.toLowerCase()) ){
            item += `
            <tr>
                <td>${++id}</td>
                <td>${data[i].name}</td>
                <td class='cat'>${data[i].category}</td>
                <td>${data[i].count}</td>
                <td>${data[i].price}</td>
                <td>${data[i].descount}</td>
                <td> <button class="update" onclick="UpdatePro(${i})" > Update </button> </td>
                <td> <button class="delete" onclick="deletePro(${i})" > Delete </button> </td>
            </tr>
        `
        }
    }
    document.querySelector(".row").innerHTML = item

}


