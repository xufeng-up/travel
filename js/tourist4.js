let myslider1item = document.querySelectorAll(".myslider1item");
let sixthul = document.querySelectorAll(".sixthul");
myslider1item.forEach((item,index)=>{
    item.addEventListener("mouseenter",function(){
        if(index == 0){
            myslider1itemfun();
            item.style = "width:24px;background-color:#00c777";
            sixthul[index].style = "z-index:2"
            sixthul[index+1].style = "z-index:1;opacity:0"
        }else if (index == 1) {
            myslider1itemfun();
            item.style = "width:24px;background-color:#00c777";
            sixthul[index].style = "z-index:2"
            sixthul[index-1].style="z-index:1;opacity:0";
        }
    })
})

function myslider1itemfun(){
    myslider1item.forEach(item=>{
        item.style = "width:12px;background-color:#e1e1e1";
    })
}

let h2 = document.querySelectorAll(".tab_title h2");
h2.forEach(item=>{
    item.addEventListener("click",function(){
        console.log(document.documentElement.scrollTop)
    })
})

console.log(document.documentElement.scrollTop);

let stairslist = document.querySelector(".stairslist");
let stairslistli = stairslist.querySelectorAll(".stairslistli");
let stairslistlia = stairslist.querySelectorAll("a");
let search_box_hidden = document.querySelector(".search_box_hidden");

function stairslistlifun(){
    stairslistli.forEach(item=>{
        item.style.backgroundColor = "";
    })
}

function stairslistliafun(){
    stairslistlia.forEach(item=>{
        item.style="";
    })
}
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>=500){
        stairslistlifun();
        stairslistliafun();
        stairslist.style.display = "block";
        search_box_hidden.style.display = "block";
        stairslistli[0].style = "background-color: #00c777;"
        stairslistlia[0].style = "height: 42px;color: #fff";
    }
    if (document.documentElement.scrollTop>=1150) {
        stairslistlifun();
        stairslistliafun();
        stairslistli[1].style = "background-color: #00c777;"
        stairslistlia[1].style = "height: 42px;color: #fff";
    }

    if (document.documentElement.scrollTop>=1900) {
        stairslistlifun();
        stairslistliafun();
        stairslistli[2].style = "background-color: #00c777;"
        stairslistlia[2].style = "height: 42px;color: #fff";
    }

    if (document.documentElement.scrollTop>=2550) {
        stairslistlifun();
        stairslistliafun();
        stairslistli[3].style = "background-color: #00c777;"
        stairslistlia[3].style = "height: 42px;color: #fff";
    }

    if (document.documentElement.scrollTop>=3200) {
        stairslistlifun();
        stairslistliafun();
        stairslistli[4].style = "background-color: #00c777;"
        stairslistlia[4].style = "height: 42px;color: #fff";
    }

    if (document.documentElement.scrollTop>=3680) {
        stairslistlifun();
        stairslistliafun();
        stairslistli[5].style = "background-color: #00c777;"
        stairslistlia[5].style = "height: 42px;color: #fff";
    }

    if (document.documentElement.scrollTop>=4245) {
        stairslistlifun();
        stairslistliafun();
        stairslistli[6].style = "background-color: #00c777;"
        stairslistlia[6].style = "height: 42px;color: #fff";
    }
    
    if(document.documentElement.scrollTop<500) {
        stairslist.style.display = "none";
        search_box_hidden.style.display = "none";
    }
})

let appxbcon = document.querySelector(".appxb-con");
let appxbheaderfirstimg = document.querySelector(".appxb-headerfirstimg");
appxbheaderfirstimg.addEventListener("click",function(){
    appxbheaderfirstimg.classList.add("appxb-headershow");
    setTimeout(() => {
        appxbcon.classList.add("appxb-conshow");
    }, 500);
    
});

let buttondeleted = document.querySelector(".buttondeleted");
buttondeleted.addEventListener("click",function(){
    appxbcon.classList.remove("appxb-conshow");
    setTimeout(() => {
        appxbheaderfirstimg.classList.remove("appxb-headershow");
    }, 500);
})


