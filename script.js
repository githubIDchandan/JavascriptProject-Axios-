
   
   let val="Electronic Item";

   function myfunction(e){
        val=e.target.value;
   }
 

document.getElementById("form").addEventListener("submit",addItem);

function addItem(event){
   event.preventDefault();
   console.log(event.target.value)
   const price=document.getElementById("price").value;
   const name=document.getElementById("name").value;
   // const ulist= document.getElementById(val);
   // console.log(val)
   // console.log(ulist)

   axios.post("https://crudcrud.com/api/b3090d737a634c8ca08e53d7898a12c0/userItem3",{
       price:price,
       name:name,
       val:val
   }).then((res)=>{
       console.log("hii")
       console.log(res.data)
       // showData(res.data)
       getcall()
       
   }).catch((err)=>{
       console.log(err)
   })
   

      
}
const listContainer=document.getElementById("listContainer")
function deleteUser(id){
   console.log(id)
   axios.delete(`https://crudcrud.com/api/b3090d737a634c8ca08e53d7898a12c0/userItem3/${id}`)
   .then((res)=>{
       console.log(res)
       getcall()
   })
   .catch((err)=>{
       console.log(err)
   })
}

// listContainer.addEventListener("click",(event)=>{
//     // console.log(event.target.classList.contains("delete-btn"))
//     if(event.target.classList.contains("delete-btn")){
//         axios
//         event.target.parentElement.remove();
//         axios.delete("https://crudcrud.com/api/a9c7fa255e2545b6a187e39ef070fe54/userItem2/")
//     }
// })

// const temp=document.getElementsByClassName("item");
// console.log(temp)

// window.addEventListener("DOMContentLoaded",()=>{
//     const price=document.getElementById("price").value;
//     const name=document.getElementById("name").value;
//     const ulist= document.getElementById(val);
   
//     const div=document.createElement("div");
//     const li=document.createElement("li");
//     li.innerHTML=`${price}-${name}`+'<button class="delete-btn">X</button>'
//     ulist.appendChild(li)

// })

function showData(item){
   // const price=document.getElementById("price").value;
   // const name=document.getElementById("name").value;
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
        
       //  const div=document.createElement("div");
       //  const li=document.createElement("li");
       //  const livalue=document.createTextNode(`${value.name}-${value.price}`);
       //  li.appendChild(livalue)
       //  const btn=document.createElement("button")
       //  const btnValue=document.createTextNode("X");
       //  btn.appendChild(btnValue);
       //  btn.className="delete-btn";
       //  li.appendChild(btn);
       //  div.appendChild(li)
       //  const ulist=document.getElementById(value.val);
       //  ulist.appendChild(div)
       console.log(value)
       if(value.val=="Electronic Item"){
           eItemData+= `<div><li id>${value.name}-${value.price}<button class="delete-btn" onclick=deleteUser('${value._id}')>${"X"}</button></li></div>`
           e1++;
       }
       else if(value.val=="Food Item"){
           fItemData+= `<div><li>${value.name}-${value.price}<button class="delete-btn" onclick=deleteUser('${value._id}')>${"X"}</button></li></div>`
           f1++;
       }
       else{
           sItemData+= `<div><li>${value.name}-${value.price}<button class="delete-btn" onclick=deleteUser('${value._id}')>${"X"}</button></li></div>`
           s1++
       }

   })
   // console.log(ItemData)
   // ulist.innerHTML=ItemData
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
       // const ulist=document.getElementById("Electronic Item");
       ulist1.innerHTML=eItemData;
       // console.log(ulist)
   }
   if(s1){
       // const ulist=document.getElementById("Skincare Item");
       ulist2.innerHTML=sItemData;
       // console.log(ulist)
   }
   if(f1){
       // const ulist=document.getElementById("Food Item");
       ulist3.innerHTML=fItemData;
       // console.log(ulist)
   }
}

function getcall(){
axios.get("https://crudcrud.com/api/b3090d737a634c8ca08e53d7898a12c0/userItem3").then((res)=>{
  
// console.log(res.data.length)
//   if(res.data.length){
   console.log(res.data)
   showData(res.data)
//   }
  
  
}).catch((err)=>{
   console.log(err)
})
}
getcall()