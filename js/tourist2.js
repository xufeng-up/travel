function lastDate() {
    let latestedDate = document.querySelectorAll(".latestedDate");
    let date = new Date();
    //设置出发时间
    latestedDate.forEach((item) => {
        item.value = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();
    });
}
lastDate();

function lastDatetom(){
    let latestedDateTom = document.querySelectorAll(".latestedDateTom");
    let date = new Date();
    date.setDate(date.getDate()+1);
    if(date.getDate()==31){
        date.setDate(1); 
        date.setMonth(date.getMonth()+1);
        if(date.getMonth()==12){
            date.setMonth(0);
            date.setFullYear(date.getFullYear()+1);
        }
    }
    //设置出发时间
    latestedDateTom.forEach((item) => {
        item.value = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();
    });
}

lastDatetom();
