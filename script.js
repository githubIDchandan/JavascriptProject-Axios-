
   
   let val="Electronic Item";

    function myfunction(e){
         val=e.target.value;
    }
  

document.getElementById("form").addEventListener("submit",addItem);

function addItem(event){
    event.preventDefault();
    console.log(event.target.value)
    const price=document.getElementById("sp").value;
    const name=document.getElementById("pname").value;
    console.log(price);
    console.log(name)
    axios.post("https://crudcrud.com/api/c0868ecd1fa244beaf40b5685900a7d4/userItem5",{
        price:price,
        name:name,
        val:val
    }).then((res)=>{
        console.log("hii")
        console.log(res.data)
        getcall()
        
    }).catch((err)=>{
        console.log(err)
    })
    document.getElementById("sp").value="";
    document.getElementById("pname").value="";
  
       
}
const listContainer=document.getElementById("listContainer")
function deleteUser(id){
    console.log(id)
    axios.delete(`https://crudcrud.com/api/c0868ecd1fa244beaf40b5685900a7d4/userItem5/${id}`)
    .then((res)=>{
        console.log(res)
        getcall()
    })
    .catch((err)=>{
        console.log(err)
    })
}

function showData(item){
    console.log("getting stuck")
    console.log(item)
    let e1=0;
    let s1=0;
    let f1=0;
    let eItemData="";
    let sItemData="";
    let fItemData="";
    item.map((value)=>{
        console.log(value.val)
        console.log(value)
        if(value.val=="Electronic Item"){
            eItemData+= `<div class="df"><li class="pli">${value.name}-${"₹"}${value.price}${" "}</li><button class="delete-btn" onclick=deleteUser('${value._id}')>${"X"}</button></div>`
            e1++;
        }
        else if(value.val=="Food Item"){
            fItemData+= `<div class="df"><li class="pli">${value.name}-${value.price}</li><button class="delete-btn" onclick=deleteUser('${value._id}')>${"X"}</button></div>`
            f1++;
        }
        else{
            sItemData+= `<div class="df"><li class="pli">${value.name}-${value.price}</li><button class="delete-btn" onclick=deleteUser('${value._id}')>${"X"}</button></div>`
            s1++
        }

    })
    console.log(e1);
    console.log(eItemData)
    console.log(s1);
    console.log(sItemData)
    console.log(f1)
    console.log(fItemData)
    const ulist1=document.getElementById("Electronic Item");
    const ulist2=document.getElementById("Skincare Item");
    const ulist3=document.getElementById("Food Item");
    ulist1.innerHTML="";
    ulist2.innerHTML="";
    ulist3.innerHTML="";
    if(e1){
        ulist1.innerHTML=eItemData;
    }
    if(s1){
        ulist2.innerHTML=sItemData;
    }
    if(f1){
        ulist3.innerHTML=fItemData;
    }
}

function getcall(){
axios.get("https://crudcrud.com/api/c0868ecd1fa244beaf40b5685900a7d4/userItem5").then((res)=>{
    console.log(res.data)
    showData(res.data)  
}).catch((err)=>{
    console.log(err)
})
}
getcall()