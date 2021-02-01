let show1 = document.querySelectorAll(".show1");
show1.forEach(function(item) {
    item.addEventListener("mouseover", function(e) {
        e.target.addEventListener("mouseover", function(e) {
            if (this.children.length == 0) {
                this.classList.add("colorff5d3d");
            }

        })
        e.target.addEventListener("mouseout", function(e) {
            this.classList.remove("colorff5d3d");
        })
    })
});

//城市选择
let arrcity1 = ["北京", "杭州", "苏州", "上海", "重庆", "广州", "宁波", "成都", "桂林", "南京", "厦门", "金华", "青岛", "黄山", "无锡", "三亚", "大连", "西安", "天津", "深圳", "哈尔滨", "合肥", "台北", "香港"];

let arrcity2 = ["阿克苏", "阿拉尔", "安庆", "澳门", "巴中", "白山", "宝鸡", "保定", "北京", "亳州", "滨州", "沧州", "常州", "成都", "长沙", "达州", "大连", "德州", "长春", "东营", "鄂州", "佛山", "福州", "阜阳"];

let arrcity3 = ["广州", "贵阳", "桂林", "哈尔滨", "海口", "杭州", "合肥", "衡阳", "怀化", "淮安", "黄冈", "吉林", "金华", "九江", "酒泉", "开封", "昆明", "拉萨", "丽江", "六安", "马鞍山", "牡丹江", "茂名", "眉山"];

let arrcity4 = ["南昌", "南京", "宁波", "南通", "攀枝花", "盘锦", "濮阳", "齐齐哈尔", "黔南", "秦皇岛", "青岛", "泉州", "日照", "三亚", "汕头", "上海", "深证", "庆阳", "随州", "苏州", "宿迁", "苏州", "韶关", "商丘"];

let arrcity5 = ["台北", "泰安", "天津", "桃园", "唐山", "铜川", "温州", "无锡", "武汉", "芜湖", "厦门", "咸阳", "香港", "徐州", "延安", "银川", "盐城", "扬州", "运城", "张家界", "镇江", "珠海", "驻马店", "遵义"];

let citytotal = document.querySelector(".citytotal");
let cityname = document.querySelectorAll(".cityname_first");
let citychoose = document.querySelector(".citychoose");

function changespancolor() {

    citychoose = document.querySelector(".citychoose");
    let span = document.querySelectorAll(".one span");
    span.forEach((item) => {
        item.addEventListener("mouseenter", function() {
            this.style = "color:#ff5d3d";
        });
        item.addEventListener("mouseleave", function() {
            this.style.color = "";
        });
        item.addEventListener("click", function() {
            if (item.parentElement.parentElement.classList.contains("one2")) {
                item.parentElement.parentElement.previousElementSibling.value = item.innerHTML;
            } else {
                citychoose.innerHTML = item.innerHTML;
            }

        })
    });
}
changespancolor();


function removeonecolr() {
    cityname = document.querySelectorAll(".cityname_first");
    cityname.forEach((item) => {
        item.children[0].classList.remove("onecolor")
    })
}

cityname.forEach((item) => {
    item.addEventListener("click", function(e) {
        removeonecolr();
        if (e.target.innerHTML == "热门城市") {
            e.target.classList.add("onecolor");
            let one = this.parentElement.parentElement.querySelector(".one");
            one.remove();
            let oneadd = document.createElement("div");
            oneadd.classList.add("one");
            let html = ``;
            arrcity1.forEach((item) => {
                html += `<span>${item}</span>`;
            });
            oneadd.innerHTML = html;
            this.parentElement.parentElement.appendChild(oneadd);
            changespancolor();
        }

        if (e.target.innerHTML == "ABCDEF") {
            e.target.classList.add("onecolor");
            let one = this.parentElement.parentElement.querySelector(".one");
            // let one = document.querySelector(".one");
            one.remove();
            let oneadd = document.createElement("div");
            oneadd.classList.add("one");
            let html = "";
            arrcity2.forEach((item) => {
                html += `<span>${item}</span>`
            });
            oneadd.innerHTML = html;
            this.parentElement.parentElement.appendChild(oneadd);
            // citytotal.appendChild(oneadd);
            changespancolor();
        }

        if (e.target.innerHTML == "GHJKLM") {
            e.target.classList.add("onecolor");
            let one = this.parentElement.parentElement.querySelector(".one");
            one.remove();
            let oneadd = document.createElement("div");
            oneadd.classList.add("one");
            let html = ``;
            arrcity3.forEach((item) => {
                html += `<span>${item}</span>`
            });
            oneadd.innerHTML = html;
            this.parentElement.parentElement.appendChild(oneadd);
            changespancolor();
        }

        if (e.target.innerHTML == "NOPQRS") {
            e.target.classList.add("onecolor");
            let one = this.parentElement.parentElement.querySelector(".one");
            one.remove();
            let oneadd = document.createElement("div");
            oneadd.classList.add("one");
            let html = ``;
            arrcity4.forEach((item) => {
                html += `<span>${item}</span>`
            });
            oneadd.innerHTML = html;
            this.parentElement.parentElement.appendChild(oneadd);
            changespancolor();
        }

        if (e.target.innerHTML == "TUWXYZ") {
            e.target.classList.add("onecolor");
            let one = this.parentElement.parentElement.querySelector(".one");
            one.remove();
            let oneadd = document.createElement("div");
            oneadd.classList.add("one");
            let html = ``;
            arrcity5.forEach((item) => {
                html += `<span>${item}</span>`
            });
            oneadd.innerHTML = html;
            this.parentElement.parentElement.appendChild(oneadd);
            changespancolor();
        }
    });
});

function citynamefun() {
    cityname = document.querySelectorAll(".cityname");
    cityname.forEach((item) => {
        item.addEventListener("click", function(e) {
            removeonecolr();
            if (e.target.innerHTML == "热门城市") {
                e.target.classList.add("onecolor");
                let one = this.parentElement.querySelector(".one");
                console.log(one);
                one.remove();
                let oneadd = document.createElement("div");
                oneadd.classList.add("one");
                let html = ``;
                arrcity1.forEach((item) => {
                    html += `<span>${item}</span>`;
                });
                oneadd.innerHTML = html;
                this.parentElement.appendChild(oneadd);
                changespancolor();
            }

            if (e.target.innerHTML == "ABCDEF") {
                e.target.classList.add("onecolor");
                let one = this.parentElement.querySelector(".one");
                // let one = document.querySelector(".one");
                one.remove();
                let oneadd = document.createElement("div");
                oneadd.classList.add("one");
                let html = "";
                arrcity2.forEach((item) => {
                    html += `<span>${item}</span>`
                });
                oneadd.innerHTML = html;
                this.parentElement.appendChild(oneadd);
                // citytotal.appendChild(oneadd);
                changespancolor();
            }

            if (e.target.innerHTML == "GHJKLM") {
                e.target.classList.add("onecolor");
                let one = this.parentElement.querySelector(".one");
                one.remove();
                let oneadd = document.createElement("div");
                oneadd.classList.add("one");
                let html = ``;
                arrcity3.forEach((item) => {
                    html += `<span>${item}</span>`
                });
                oneadd.innerHTML = html;
                this.parentElement.appendChild(oneadd);
                changespancolor();
            }

            if (e.target.innerHTML == "NOPQRS") {
                e.target.classList.add("onecolor");
                let one = this.parentElement.querySelector(".one");
                one.remove();
                let oneadd = document.createElement("div");
                oneadd.classList.add("one");
                let html = ``;
                arrcity4.forEach((item) => {
                    html += `<span>${item}</span>`
                });
                oneadd.innerHTML = html;
                this.parentElement.appendChild(oneadd);
                changespancolor();
            }

            if (e.target.innerHTML == "TUWXYZ") {
                e.target.classList.add("onecolor");
                let one = this.parentElement.querySelector(".one");
                one.remove();
                let oneadd = document.createElement("div");
                oneadd.classList.add("one");
                let html = ``;
                arrcity5.forEach((item) => {
                    html += `<span>${item}</span>`
                });
                oneadd.innerHTML = html;
                this.parentElement.appendChild(oneadd);
                changespancolor();
            }
        });
    });
}

//隐藏菜单文字颜色改变
let submenu = document.querySelectorAll(".submenu-bg span");
submenu.forEach((item) => {
    item.addEventListener("mouseenter", function(e) {
        this.style = "color:#ff5d3d";
    });
    item.addEventListener("mouseleave", function() {
        this.style.color = "";
    });
});

let menuNavItem = document.querySelectorAll(".menuNavItem");
menuNavItem.forEach((item) => {
    item.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "rgba(255,255,255,.26)";
    });
    item.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "";
    });

});
////显示菜单文字颜色改变
let menuBottomNavWrapper = document.querySelectorAll(".menuBottomNavWrapper li");
menuBottomNavWrapper.forEach((item) => {
    item.addEventListener("mouseenter", function() {
        this.style.color = "#0fb375";
    });
    item.addEventListener("mouseleave", (e) => {
        e.target.style.color = "";
    })
});

//轮播图
let count = 2;
let sliderConchange = document.querySelector(".sliderConchange");
let userNav = document.querySelectorAll(".userNav i");
let userNa = document.querySelector(".userNav");
let timer;

function showInterva() {
    timer = setInterval(function() {
        circlechange1();
        let srcpath = "./images/banner" + count + ".jpg";
        sliderConchange.src = srcpath;
        circlechange2();
        count++;
        if (count == 5) {
            count = 1;
        }
    }, 3000);
}

showInterva();


function circlechange1() {
    userNav.forEach((item, index) => {
        item.style.backgroundColor = "";
    })
}

function circlechange2() {
    userNav[count - 1].style.backgroundColor = "#fff";
}

userNa.addEventListener("mouseenter", function() {
    userNav.forEach((item, index) => {
        item.addEventListener("click", function() {
            clearInterval(timer);
            this.style.backgroundColor = "#fff";
            sliderConchange.src = "./images/banner" + Number(index + 1) + ".jpg";
        });
    });
});

userNa.addEventListener("mouseleave", function() {
    showInterva();
});

//文本框显示，与隐藏
function inputcityfun() {
    let inputcity = document.querySelectorAll(".inputcity");
    inputcity.forEach((item) => {
        item.addEventListener("click", function() {
            let one2 = this.querySelector(".one2");
            one2.classList.add("one3");
        });

        item.addEventListener("mouseleave", function() {
            let one2 = this.querySelector(".one2");
            one2.classList.remove("one3");
        });
    });

}
inputcityfun();


function removecolor_left_li(){
    let search_box_left_li = document.querySelectorAll(".search_box_left_li");
    search_box_left_li.forEach((item)=>{
        item.style.backgroundColor = "";
        item.style.color = "";
    })
}

function removecolor_left_item(){
    let flighta = document.querySelectorAll(".flighta");
    flighta.forEach(item=>{
        item.querySelector("a").style.color = "#666";
    })
}

//左侧盒子
let search_box_left_li = document.querySelectorAll(".search_box_left_li");
let search_box_left_content = document.querySelector(".search_box_left_content");
let li_first = document.querySelector(".li_first");
search_box_left_li.forEach((item) => {
    item.addEventListener("click", function() {
        li_first.classList.remove("li_first");

        if (item.innerHTML == "机票") {
            removecolor_left_li();
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
            search_box_left_content.innerHTML = `
            <div class="flight">
                <div class="flighta flightb">
                    <a href="#">国内机票</a>
                </div>
                <div class="flighta">
                    <a href="#">国际机票</a>
                </div>
            </div>
            <div class="detailcontain">
            <div class="detailcontain1">
            <span>行程类型</span>
            <input type="radio" value="单程" name="traveltype" checked>单程
            <input type="radio" value="往返" name="traveltype">往返
        </div>
        <div class="detailcontain2">
            <span>出发城市</span>
            <span class="incitytext">到达城市</span>
            <br>
            <div class="inputcity">
                <input type="text" class="outcity cityinput">
                <div class="citytotal one2">
                    <ul class="cityname">
                        <li class="cityname_first">
                            <a href="#" class="onecolor">热门城市</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">ABCDEF</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">GHJKLM</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">NOPQRS</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">TUWXYZ</a>
                        </li>
                    </ul>
                    <div class="one">
                        <span>北京</span>
                        <span>杭州</span>
                        <span>苏州</span>
                        <span>上海</span>
                        <span>重庆</span>
                        <span>广州</span>
                        <span>宁波</span>
                        <span>成都</span>
                        <span>桂林</span>
                        <span>南京</span>
                        <span>厦门</span>
                        <span>金华</span>
                        <span>青岛</span>
                        <span>黄山</span>
                        <span>无锡</span>
                        <span>三亚</span>
                        <span>大连</span>
                        <span>西安</span>
                        <span>天津</span>
                        <span>深圳</span>
                        <span>哈尔滨</span>
                        <span>合肥</span>
                        <span>台北</span>
                        <span>香港</span>
                    </div>
                </div>
            </div>
            <i class="reversecity"></i>
            <div class="inputcity">
                <input type="text" class="incity cityinput">
                <div class="citytotal one2">
                    <ul class="cityname">
                        <li class="cityname_first">
                            <a href="#" class="onecolor">热门城市</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">ABCDEF</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">GHJKLM</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">NOPQRS</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">TUWXYZ</a>
                        </li>
                    </ul>
                    <div class="one">
                        <span>北京</span>
                        <span>杭州</span>
                        <span>苏州</span>
                        <span>上海</span>
                        <span>重庆</span>
                        <span>广州</span>
                        <span>宁波</span>
                        <span>成都</span>
                        <span>桂林</span>
                        <span>南京</span>
                        <span>厦门</span>
                        <span>金华</span>
                        <span>青岛</span>
                        <span>黄山</span>
                        <span>无锡</span>
                        <span>三亚</span>
                        <span>大连</span>
                        <span>西安</span>
                        <span>天津</span>
                        <span>深圳</span>
                        <span>哈尔滨</span>
                        <span>合肥</span>
                        <span>台北</span>
                        <span>香港</span>
                    </div>
                </div>
            </div>

            <br>
            <button class="search_city">搜索</button>
        </div>
            </div>
            `
            inputcityfun();
            flightafun1();
            changespancolor();
            citynamefun();
            reversecityfun();

        } else if (item.innerHTML == "火车票") {
            removecolor_left_li();
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
            search_box_left_content.innerHTML = `
            <div class="detailcontain">
            <div class="detailcontain2">
                <span>出发城市</span>
                <span class="incitytext">到达城市</span>
                <br>
                <div class="inputcity">
                    <input type="text" class="outcity cityinput">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <i class="reversecity"></i>
                <div class="inputcity">
                    <input type="text" class="incity cityinput">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <div class="detailcontain4">
                    <p>出发日期</p>
                    <input type="text" class="latestedDate">
                </div>

                <br>
                <button class="search_city">搜索</button>
            </div>
        </div>
            `
            inputcityfun();
            lastDate();
            changespancolor();
            citynamefun();
            reversecityfun();
        }else if (item.innerHTML == "酒店") {
            removecolor_left_li();
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
            search_box_left_content.innerHTML = `
            <div class="flight">
            <div class="flighta flightb">
                <a href="#">国内酒店</a>
            </div>
            <div class="flighta">
                <a href="#">海外酒店</a>
            </div>
        </div>
        <div class="detailcontain">
            <div class="detailcontain2">
                <div class="inputcity">
                    <span class="longcitytext">目的地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <br>
                    <span class="longcitytext">入住日期</span>
                    <input type="text" class="longcity latestedDate" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <br>
                    <span class="longcitytext">离店日期</span>
                    <input type="text" class="longcity latestedDate latestedDateTom" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <br>
                    <span class="longcitytext">关键字</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                <br>
                <button class="search_city_long">搜索</button>
            </div>
        </div>
            `
            inputcityfun();
            flightafun1();
            changespancolor();
            citynamefun();
            lastDate();
            lastDatetom();
        }else if (item.innerHTML == "景点" ||item.innerHTML == "周边游") {
            removecolor_left_li();
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
            search_box_left_content.innerHTML = `
            <div class="flight">
            <div class="flighta flightb">
                <a href="#">景点</a>
            </div>
            <div class="flighta">
                <a href="#">酒店+景点</a>
            </div>
            <div class="flighta">
                <a href="#">周边跟团游</a>
            </div>
        </div>
        <div class="detailcontain">
            <div class="detailcontain2">
                    <span class="longcitytext">关键词</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    
                <br>
                <button class="search_city_long">搜索</button>
                <div class="recom_list">
                    <p class="recom_item recom_item_total">精选主题</p>
                    <span>水上世界</span>
                    <span>主题乐园</span>
                    <span>自然风光</span>
                    <span>更多主题</span>
                    <p class="recom_item">热搜城市</p>
                    <span>苏州</span>
                    <span>常州</span>
                    <span>无锡</span>
                    <span>南京</span>
                    <span>扬州</span>
                    <p class="recom_item">热搜活动</p>
                    <span>乘高铁</span>
                    <span>游相城</span>
                </div>
            </div>
        </div>
            `
            flightafun1();
            recomspan();
        
        }else if (item.innerHTML == "境内游") {
            removecolor_left_li();
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
            search_box_left_content.innerHTML = `
            <div class="flight">
                    <div class="flighta flightb">
                        <a href="#">全部</a>
                    </div>
                    <div class="flighta">
                        <a href="#">跟团游</a>
                    </div>
                    <div class="flighta">
                        <a href="#">自由行</a>
                    </div>
                </div>
                <div class="detailcontain">
                    <div class="detailcontain2">
                        <div class="inputcity">
                            <span class="longcitytext">出发地</span>
                            <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                            <div class="citytotal one2">
                                <ul class="cityname">
                                    <li class="cityname_first">
                                        <a href="#" class="onecolor">热门城市</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">ABCDEF</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">GHJKLM</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">NOPQRS</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">TUWXYZ</a>
                                    </li>
                                </ul>
                                <div class="one">
                                    <span>北京</span>
                                    <span>杭州</span>
                                    <span>苏州</span>
                                    <span>上海</span>
                                    <span>重庆</span>
                                    <span>广州</span>
                                    <span>宁波</span>
                                    <span>成都</span>
                                    <span>桂林</span>
                                    <span>南京</span>
                                    <span>厦门</span>
                                    <span>金华</span>
                                    <span>青岛</span>
                                    <span>黄山</span>
                                    <span>无锡</span>
                                    <span>三亚</span>
                                    <span>大连</span>
                                    <span>西安</span>
                                    <span>天津</span>
                                    <span>深圳</span>
                                    <span>哈尔滨</span>
                                    <span>合肥</span>
                                    <span>台北</span>
                                    <span>香港</span>
                                </div>
                            </div>
                        </div>
                        <div class="inputcity">
                            <span class="longcitytext">目的地</span>
                            <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                            <div class="citytotal one2">
                                <ul class="cityname">
                                    <li class="cityname_first">
                                        <a href="#" class="onecolor">热门城市</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">ABCDEF</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">GHJKLM</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">NOPQRS</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">TUWXYZ</a>
                                    </li>
                                </ul>
                                <div class="one">
                                    <span>北京</span>
                                    <span>杭州</span>
                                    <span>苏州</span>
                                    <span>上海</span>
                                    <span>重庆</span>
                                    <span>广州</span>
                                    <span>宁波</span>
                                    <span>成都</span>
                                    <span>桂林</span>
                                    <span>南京</span>
                                    <span>厦门</span>
                                    <span>金华</span>
                                    <span>青岛</span>
                                    <span>黄山</span>
                                    <span>无锡</span>
                                    <span>三亚</span>
                                    <span>大连</span>
                                    <span>西安</span>
                                    <span>天津</span>
                                    <span>深圳</span>
                                    <span>哈尔滨</span>
                                    <span>合肥</span>
                                    <span>台北</span>
                                    <span>香港</span>
                                </div>
                            </div>
                        </div>
                        <br>
                        <button class="search_city_long">搜索</button>
                        <div class="recom_list">
                            <p class="recom_item recom_item_total">热门活动</p>
                            <!-- <span>灵山大佛</span>
                            <span>横店影视城</span>
                            <span>常州中华恐龙园</span>
                            <span>东部华侨城</span> -->
                            <p class="recom_item">热搜城市</p>
                            <span>云南</span>
                            <span>绍兴</span>
                            <span>无锡</span>
                            <span>南京</span>
                            <span>广州</span>
                            <span>三亚</span>
                            <span>西安</span>
                            <span>张家界</span>
                            <span>九寨沟</span>
                            <span>厦门</span>
                            <!-- <p class="recom_item">热搜活动</p>
                            <span>乘高铁</span>
                            <span>游相城</span> -->
                        </div>
                    </div>
                </div>
            `
            inputcityfun();
            flightafun1();
            changespancolor();
            citynamefun();
            recomspan();
        }else if (item.innerHTML == "出境游") {
            removecolor_left_li();
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
            search_box_left_content.innerHTML = `
            <div class="flight">
            <div class="flighta flightb">
                <a href="#">跟团游</a>
            </div>
            <div class="flighta">
                <a href="#">自由行</a>
            </div>
            <div class="flighta">
                <a href="#">签证</a>
            </div>
            <div class="flighta">
                <a href="#">玩乐WIFI</a>
            </div>
        </div>
        <div class="detailcontain">
            <div class="detailcontain2">
                <div class="inputcity">
                    <span class="longcitytext">出发地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <div class="inputcity">
                    <span class="longcitytext">目的地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <br>
                <button class="search_city_long">搜索</button>
                <div class="recom_list">
                    <p class="recom_item recom_item_total">热门活动</p>
                    <span>处境定制</span>
                    <p class="recom_item">热门目的地</p>
                </div>
            </div>
        </div>
            `
            inputcityfun();
            flightafun1();
            changespancolor();
            citynamefun();
            recomspan();
        }else if (item.innerHTML == "邮轮") {
            removecolor_left_li();
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
            search_box_left_content.innerHTML = `
            <div class="detailcontain">
            <div class="detailcontain2">
                <span class="longcitytext">出发地</span>
                <select class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <option value="">不限</option>
                    <option value="">三峡</option>
                    <option value="">莱茵河</option>
                    <option value="">日本</option>
                    <option value="">多瑙河</option>
                    <option value="">东南亚</option>
                    <option value="">地中海</option>
                    <option value="">加勒比海</option>
                    <option value="">北极</option>
                </select>
                <span class="longcitytext">出发城市</span>
                <select class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <option value="">不限</option>
                    <option value="">上海</option>
                    <option value="">北京</option>
                    <option value="">盐城</option>
                    <option value="">苏州</option>
                    <option value="">西安</option>
                    <option value="">郑州</option>
                    <option value="">三亚</option>
                    <option value="">卢沟桥</option>
                    <option value="">九寨沟</option>
                    <option value="">昆明</option>
                    <option value="">厦门</option>
                </select>
                <br>
                <span class="longcitytext">邮轮公司</span>
                <select class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <option value="">不限</option>
                    <option value="">皇家加勒比邮轮</option>
                    <option value="">星梦邮轮</option>
                    <option value="">歌诗达邮轮</option>
                    <option value="">和平之船</option>
                    <option value="">公主邮轮</option>
                    <option value="">和平之船</option>
                    <option value="">维京邮轮公司</option>
                    <option value="">世纪游轮</option>
                </select>
                <button class="search_city_long">搜索</button>
                <div class="recom_list">
                    <p class="recom_item recom_item_total">热门活动</p>
                    <p class="recom_item">热门目的地</p>
                    <span>地中海</span>
                    <span>中南亚</span>
                    <span>日本</span>
                </div>
            </div>
        </div>
            `
            recomspan();
        }
    })
})

function detailcontainrem() {
    let detailcontain = document.querySelector(".detailcontain");
    console.log(detailcontain);
    detailcontain.remove();
}

function flightafun1() {
    let flighta = document.querySelectorAll(".flighta");
    flighta.forEach((item) => {
        item.addEventListener("click", function(e) {
            detailcontainrem();
            if (e.target.innerHTML == "国内机票") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
            <div class="detailcontain1">
            <span>行程类型</span>
            <input type="radio" value="单程" name="traveltype" checked>单程
            <input type="radio" value="往返" name="traveltype">往返
        </div>
        <div class="detailcontain2">
            <span>出发城市</span>
            <span class="incitytext">到达城市</span>
            <br>
            <div class="inputcity">
                <input type="text" class="outcity cityinput">
                <div class="citytotal one2">
                    <ul class="cityname">
                        <li class="cityname_first">
                            <a href="#" class="onecolor">热门城市</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">ABCDEF</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">GHJKLM</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">NOPQRS</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">TUWXYZ</a>
                        </li>
                    </ul>
                    <div class="one">
                        <span>北京</span>
                        <span>杭州</span>
                        <span>苏州</span>
                        <span>上海</span>
                        <span>重庆</span>
                        <span>广州</span>
                        <span>宁波</span>
                        <span>成都</span>
                        <span>桂林</span>
                        <span>南京</span>
                        <span>厦门</span>
                        <span>金华</span>
                        <span>青岛</span>
                        <span>黄山</span>
                        <span>无锡</span>
                        <span>三亚</span>
                        <span>大连</span>
                        <span>西安</span>
                        <span>天津</span>
                        <span>深圳</span>
                        <span>哈尔滨</span>
                        <span>合肥</span>
                        <span>台北</span>
                        <span>香港</span>
                    </div>
                </div>
            </div>
            <i class="reversecity"></i>
            <div class="inputcity">
                <input type="text" class="incity cityinput">
                <div class="citytotal one2">
                    <ul class="cityname">
                        <li class="cityname_first">
                            <a href="#" class="onecolor">热门城市</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">ABCDEF</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">GHJKLM</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">NOPQRS</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">TUWXYZ</a>
                        </li>
                    </ul>
                    <div class="one">
                        <span>北京</span>
                        <span>杭州</span>
                        <span>苏州</span>
                        <span>上海</span>
                        <span>重庆</span>
                        <span>广州</span>
                        <span>宁波</span>
                        <span>成都</span>
                        <span>桂林</span>
                        <span>南京</span>
                        <span>厦门</span>
                        <span>金华</span>
                        <span>青岛</span>
                        <span>黄山</span>
                        <span>无锡</span>
                        <span>三亚</span>
                        <span>大连</span>
                        <span>西安</span>
                        <span>天津</span>
                        <span>深圳</span>
                        <span>哈尔滨</span>
                        <span>合肥</span>
                        <span>台北</span>
                        <span>香港</span>
                    </div>
                </div>
            </div>

            <br>
            <button class="search_city">搜索</button>
        </div>
            `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                inputcityfun();
                changespancolor();
                citynamefun();
                reversecityfun();
            } else if (e.target.innerHTML == "国际机票") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
            <div class="detailcontain1">
            <span>行程类型</span>
            <input type="radio" value="单程" name="traveltype" checked>单程
            <input type="radio" value="往返" name="traveltype">往返
        </div>
        <div class="detailcontain2">
            <span>出发城市</span>
            <span class="incitytext">到达城市</span>
            <br>
            <div class="inputcity">
                <input type="text" class="outcity cityinput">
                <div class="citytotal one2">
                    <ul class="cityname">
                        <li class="cityname_first">
                            <a href="#" class="onecolor">热门城市</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">ABCDEF</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">GHJKLM</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">NOPQRS</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">TUWXYZ</a>
                        </li>
                    </ul>
                    <div class="one">
                        <span>北京</span>
                        <span>杭州</span>
                        <span>苏州</span>
                        <span>上海</span>
                        <span>重庆</span>
                        <span>广州</span>
                        <span>宁波</span>
                        <span>成都</span>
                        <span>桂林</span>
                        <span>南京</span>
                        <span>厦门</span>
                        <span>金华</span>
                        <span>青岛</span>
                        <span>黄山</span>
                        <span>无锡</span>
                        <span>三亚</span>
                        <span>大连</span>
                        <span>西安</span>
                        <span>天津</span>
                        <span>深圳</span>
                        <span>哈尔滨</span>
                        <span>合肥</span>
                        <span>台北</span>
                        <span>香港</span>
                    </div>
                </div>
            </div>
            <i class="reversecity"></i>
            <div class="inputcity">
                <input type="text" class="incity cityinput">
                <div class="citytotal one2">
                    <ul class="cityname">
                        <li class="cityname_first">
                            <a href="#" class="onecolor">热门城市</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">ABCDEF</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">GHJKLM</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">NOPQRS</a>
                        </li>
                        <li class="cityname_first">
                            <a href="#">TUWXYZ</a>
                        </li>
                    </ul>
                    <div class="one">
                        <span>北京</span>
                        <span>杭州</span>
                        <span>苏州</span>
                        <span>上海</span>
                        <span>重庆</span>
                        <span>广州</span>
                        <span>宁波</span>
                        <span>成都</span>
                        <span>桂林</span>
                        <span>南京</span>
                        <span>厦门</span>
                        <span>金华</span>
                        <span>青岛</span>
                        <span>黄山</span>
                        <span>无锡</span>
                        <span>三亚</span>
                        <span>大连</span>
                        <span>西安</span>
                        <span>天津</span>
                        <span>深圳</span>
                        <span>哈尔滨</span>
                        <span>合肥</span>
                        <span>台北</span>
                        <span>香港</span>
                    </div>
                </div>
            </div>
            <div class="detailcontain2">
                <span>乘客类型</span>
                <span class="incitytext">舱位等级</span>
            </div>
            <div class="detailcontain3">
                <!-- <input type="text"> -->
                <select class="three">
                    <option value="">儿童</option>
                    <option value="">小孩</option>
                    <option value="">成人</option>
                    <option value="">老人</option>
                </select>
                <!-- <input type="text" class="two"> -->
                <select class="two">
                    <option value="">经济/超级经济舱</option>
                    <option value="">公务舱/头等舱</option>
                    <option value="">公务舱</option>
                    <option value="">头等舱</option>
                </select>
            </div>
            <br>
            <button class="search_city">搜索</button>
        </div>
            `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                inputcityfun();
                changespancolor();
                citynamefun();
                reversecityfun();
            }else if (e.target.innerHTML == "国内酒店") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
                <div class="detailcontain2">
                <div class="inputcity">
                    <span class="longcitytext">目的地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <br>
                    <span class="longcitytext">入住日期</span>
                    <input type="text" class="longcity latestedDate" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <br>
                    <span class="longcitytext">离店日期</span>
                    <input type="text" class="longcity latestedDate latestedDateTom" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <br>
                    <span class="longcitytext">关键字</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                <br>
                <button class="search_city_long">搜索</button>
            </div>
                `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                inputcityfun();
                changespancolor();
                citynamefun();
                lastDate();
                lastDatetom();
            }else if (e.target.innerHTML == "海外酒店") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
                <div class="detailcontain2">
                        <div class="inputcity">
                            <span class="longcitytext">目的地</span>
                            <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                            <div class="citytotal one2">
                                <ul class="cityname">
                                    <li class="cityname_first">
                                        <a href="#" class="onecolor">热门城市</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">ABCDEF</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">GHJKLM</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">NOPQRS</a>
                                    </li>
                                    <li class="cityname_first">
                                        <a href="#">TUWXYZ</a>
                                    </li>
                                </ul>
                                <div class="one">
                                    <span>北京</span>
                                    <span>杭州</span>
                                    <span>苏州</span>
                                    <span>上海</span>
                                    <span>重庆</span>
                                    <span>广州</span>
                                    <span>宁波</span>
                                    <span>成都</span>
                                    <span>桂林</span>
                                    <span>南京</span>
                                    <span>厦门</span>
                                    <span>金华</span>
                                    <span>青岛</span>
                                    <span>黄山</span>
                                    <span>无锡</span>
                                    <span>三亚</span>
                                    <span>大连</span>
                                    <span>西安</span>
                                    <span>天津</span>
                                    <span>深圳</span>
                                    <span>哈尔滨</span>
                                    <span>合肥</span>
                                    <span>台北</span>
                                    <span>香港</span>
                                </div>
                            </div>
                        </div>
                        <br>
                            <span class="longcitytext">入住日期</span>
                            <input type="text" class="longcity latestedDate" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                            <br>
                            <span class="longcitytext">离店日期</span>
                            <input type="text" class="longcity latestedDate latestedDateTom" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                            
                        <br>
                        <button class="search_city_long">搜索</button>
                    </div>
                `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                inputcityfun();
                changespancolor();
                citynamefun();
                lastDate();
                lastDatetom();
            }else if (e.target.innerHTML == "景点") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
                <div class="detailcontain2">
                    <span class="longcitytext">关键词</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    
                <br>
                <button class="search_city_long">搜索</button>
                <div class="recom_list">
                    <p class="recom_item recom_item_total">精选主题</p>
                    <span>水上世界</span>
                    <span>主题乐园</span>
                    <span>自然风光</span>
                    <span>更多主题</span>
                    <p class="recom_item">热搜城市</p>
                    <span>苏州</span>
                    <span>常州</span>
                    <span>无锡</span>
                    <span>南京</span>
                    <span>扬州</span>
                    <p class="recom_item">热搜活动</p>
                    <span>乘高铁</span>
                    <span>游相城</span>
                </div>
            </div>
                `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                recomspan();

            }else if (e.target.innerHTML == "酒店+景点") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
                <div class="detailcontain2">
                <span class="longcitytext">关键词</span>
                <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                
            <br>
            <button class="search_city_long">搜索</button>
            <div class="recom_list">
                <p class="recom_item recom_item_total">热搜关键词</p>
                <span>灵山大佛</span>
                <span>横店影视城</span>
                <span>常州中华恐龙园</span>
                <span>东部华侨城</span>
                <p class="recom_item">热搜城市</p>
                <span>苏州</span>
                <span>绍兴</span>
                <span>无锡</span>
                <span>南京</span>
                <span>广州</span>
            </div>
        </div>
                `

                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                recomspan();
            }else if (e.target.innerHTML == "周边跟团游") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
                <div class="detailcontain2">
                <span class="longcitytext">关键词</span>
                <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                
            <br>
            <button class="search_city_long">搜索</button>
            <div class="recom_list">
                <p class="recom_item">热搜城市</p>
                <span>苏州</span>
                <span>绍兴</span>
                <span>无锡</span>
                <span>南京</span>
                <span>广州</span>
                <p class="recom_item">热搜活动</p>
                <span>乘高铁</span>
                <span>游相城</span>
            </div>
        </div>
                `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                recomspan();
            }else if (e.target.innerHTML == "全部"||e.target.innerHTML == "跟团游"||e.target.innerHTML == "自由行") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
                <div class="detailcontain2">
                <div class="inputcity">
                    <span class="longcitytext">出发地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <div class="inputcity">
                    <span class="longcitytext">目的地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <br>
                <button class="search_city_long">搜索</button>
                <div class="recom_list">
                    <p class="recom_item recom_item_total">热门活动</p>
                    <!-- <span>灵山大佛</span>
                    <span>横店影视城</span>
                    <span>常州中华恐龙园</span>
                    <span>东部华侨城</span> -->
                    <p class="recom_item">热搜城市</p>
                    <span>云南</span>
                    <span>绍兴</span>
                    <span>无锡</span>
                    <span>南京</span>
                    <span>广州</span>
                    <span>三亚</span>
                    <span>西安</span>
                    <span>张家界</span>
                    <span>九寨沟</span>
                    <span>厦门</span>
                    <!-- <p class="recom_item">热搜活动</p>
                    <span>乘高铁</span>
                    <span>游相城</span> -->
                </div>
            </div>
                `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                inputcityfun();
                flightafun1();
                changespancolor();
                citynamefun();
            }else if (e.target.innerHTML == "签证"||e.target.innerHTML == "玩乐WIFI") {
                removecolor_left_item();
                e.target.style.color = "#00c777";
                let detailcontain = document.createElement("div");
                detailcontain.classList.add("detailcontain");
                let html = `
                <div class="detailcontain2">
                <div class="inputcity">
                    <span class="longcitytext">出发地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <div class="inputcity">
                    <span class="longcitytext">目的地</span>
                    <input type="text" class="longcity" style="width: 234px; height: 30px;border: 1px solid #ddd;outline: none;padding: 5px; ">
                    <div class="citytotal one2">
                        <ul class="cityname">
                            <li class="cityname_first">
                                <a href="#" class="onecolor">热门城市</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">ABCDEF</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">GHJKLM</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">NOPQRS</a>
                            </li>
                            <li class="cityname_first">
                                <a href="#">TUWXYZ</a>
                            </li>
                        </ul>
                        <div class="one">
                            <span>北京</span>
                            <span>杭州</span>
                            <span>苏州</span>
                            <span>上海</span>
                            <span>重庆</span>
                            <span>广州</span>
                            <span>宁波</span>
                            <span>成都</span>
                            <span>桂林</span>
                            <span>南京</span>
                            <span>厦门</span>
                            <span>金华</span>
                            <span>青岛</span>
                            <span>黄山</span>
                            <span>无锡</span>
                            <span>三亚</span>
                            <span>大连</span>
                            <span>西安</span>
                            <span>天津</span>
                            <span>深圳</span>
                            <span>哈尔滨</span>
                            <span>合肥</span>
                            <span>台北</span>
                            <span>香港</span>
                        </div>
                    </div>
                </div>
                <br>
                <button class="search_city_long">搜索</button>
                <div class="recom_list">
                    <p class="recom_item recom_item_total">热门活动</p>
                    <span>处境定制</span>
                    <p class="recom_item">热门目的地</p>
                </div>
            </div>
                `
                detailcontain.innerHTML = html;
                item.parentElement.parentElement.appendChild(detailcontain);
                inputcityfun();
                flightafun1();
                changespancolor();
                citynamefun();
            }
        });
    });
}

flightafun1();

function recomspan(){
    let span = document.querySelectorAll(".recom_list span")
        span.forEach((item)=>{
            item.addEventListener("mouseenter",function(){
                this.style.color = "#ff6257";
            });

            item.addEventListener("mouseleave",function(){
                this.style.color = "";
            })
        });
}

function reversecityfun(){
    let reversecity = document.querySelector(".reversecity");
    let one = reversecity.previousElementSibling.querySelector(".outcity");
    let two = reversecity.nextElementSibling.querySelector(".incity");
    reversecity.addEventListener("click",()=>{
        [one.value,two.value] = [two.value,one.value];
    })
}
reversecityfun();
