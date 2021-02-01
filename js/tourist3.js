let first_tab_title = document.querySelector(".first_tab_title");
let jinxuan = document.querySelector(".jingxuan");
let greenchangecolorfirst = document.querySelectorAll(".first_tab_title a");

function deletedtabli(){
    let first_table_list = document.querySelector(".first_table_list");
    first_table_list.remove();
}

function greencolorfun(){
    greenchangecolorfirst.forEach(item=>{
        if(item.classList.contains("greenchangecolor")){
            item.classList.remove("greenchangecolor");
        }
    });
}


first_tab_title.addEventListener("mouseover",function(e){
    if(e.target.innerHTML == "热门推荐"){
        deletedtabli();
        greencolorfun();
        e.target.classList.add("greenchangecolor");
        let first_table_list = document.createElement("div");
        first_table_list.classList.add("first_table_list");
        first_table_list.innerHTML = `
        <ul class="table_list_content">
        <li class="table_list_imgbig">
            <img src="./images/item1.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>五年畅销亚雪销冠+深度雪乡+3H滑雪【4钻】混合交通自选5日私家团</p>
                    <em>
                        国内游
                        <i></i>
                        苏州出发
                    </em>
                </div>
                
                <div class="intro_box_right">
                    <i>￥</i>
                    <em>2657</em>
                    起
                </div>
            </div>
            <div class="table_hidden_boxbig"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item2.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>2185</em>
                起
            </span>
            <div class="detai_box">
                <p>放心订地接提前2天无损退+欢乐五星北京 双高 5日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item3.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>1713</em>
                起
            </span>
            <div class="detai_box">
                <p>上海迪士尼乐园+杭州+苏州+上海+乌镇西栅火车/双动6日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item4.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>3878</em>
                起
            </span>
            <div class="detai_box">
                <p>上海迪士尼乐园+苏州+杭州+上海+乌镇双飞5日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>运城出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item5.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>1967</em>
                起
            </span>
            <div class="detai_box">
                <p>梦幻川渝+成都一地双飞3/4/5/6日自由行</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>张掖出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img table_list_imgmove">
            <img src="./images/item6.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>677</em>
                起
            </span>
            <div class="detai_box">
                <p>春节预售三亚+亚龙湾沙滩+天堂森林公园+蜈支洲+天涯海角+南山文化苑双飞5日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>运城出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
    </ul>
        `
        jinxuan.appendChild(first_table_list);
    }else if (e.target.innerHTML == "周边更团") {
        deletedtabli();
        greencolorfun();
        e.target.classList.add("greenchangecolor");
        let first_table_list = document.createElement("div");
        first_table_list.classList.add("first_table_list");
        first_table_list.innerHTML = `
        <ul class="table_list_content">
        <li class="table_list_imgbig">
            <img src="./images/item11.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>灵山大佛+日夜游拈花湾纯玩1日跟团游  禅意祈福 夜观水幕灯光秀 亮塔仪式  踏青赏花</p>
                    <em>
                        周边跟团游
                        <i></i>
                        苏州出发
                    </em>
                </div>
                
                <div class="intro_box_right">
                    <i>￥</i>
                    <em>278</em>
                    起
                </div>
            </div>
            <div class="table_hidden_boxbig"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item12.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>558</em>
                起
            </span>
            <div class="detai_box">
                <p>海岛祈福普陀山观音道场+祈福跟团特卖2日跟团游 住岛上渔家或酒店  下单酒店套餐自选</p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>无锡出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item13.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>498</em>
                起
            </span>
            <div class="detai_box">
                <p>扬州瘦西湖+大明寺+个园+东关街汽车2日跟团游   全程无自理景点 大门票全含 人文古扬州 诗画扬州烟雨江南</p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item14.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>189</em>
                起
            </span>
            <div class="detai_box">
                <p>无锡三国城+水浒城+鼋头渚+太湖游船1日跟团游 品质纯玩 双5A精华景点 门票全含  汉文化 导游深入讲解 </p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item15.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>329</em>
                起
            </span>
            <div class="detai_box">
                <p>宁国水上川藏线青龙湾+夏霖九天银瀑+大龙潭+赠送大巴2日跟团游 入住夏霖景区内原始森林农家1晚   成人占床赠送1早2正餐</p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>无锡出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item16.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>898</em>
                起
            </span>
            <div class="detai_box">
                <p>马仁奇峰+绝壁天梯玻璃栈道+美食航空母舰2餐扶墙自助餐+绝壁爆裂冰河+芜湖方特2选一3日跟团游 百种自助菜品全天候供应 扶墙 自助餐狂吃2餐 体验高空双玻璃栈道   纯玩0购物 方特2选一</p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>无锡出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item17.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>718</em>
                起
            </span>
            <div class="detai_box">
                <p>魅力黄山全景+水墨宏村+船游新安江+塔川秋色汽车3日跟团游   登名山 观宏村古镇  景点大门票全含 2晚住宿标准可自选 升级酒店在升级方案里  占床赠送2早餐   纯玩0购物</p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>无锡出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item18.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>808</em>
                起
            </span>
            <div class="detai_box">
                <p>缙云仙都鼎湖峰+朱潭山+云和梯田+古堰画乡+小赤壁+仙都观汽车3日跟团游 全程无自理景点 纯玩无购物 农家占床者含2早4正餐 品质休闲游 游览花千骨 道士下山拍摄基地</p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>无锡出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item19.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>698</em>
                起
            </span>
            <div class="detai_box">
                <p>江西三清山+婺源篁岭+水墨上河旅游大巴3日跟团游 纯玩 全程无自理景点</p>
                <div class="detail_button_box">
                    <span>周边跟团游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
    </ul>
        `
        jinxuan.appendChild(first_table_list);
    }else if (e.target.innerHTML == "境内游") {
        deletedtabli();
        greencolorfun();
        e.target.classList.add("greenchangecolor");
        let first_table_list = document.createElement("div");
        first_table_list.classList.add("first_table_list");
        first_table_list.innerHTML = `
        <ul class="table_list_content">
        <li class="table_list_imgbig">
            <img src="./images/item21.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>重庆双飞/双动4日自由行</p>
                    <em>
                        国内游
                        <i></i>
                        苏州出发
                    </em>
                </div>
                
                <div class="intro_box_right">
                    <i>￥</i>
                    <em>278</em>
                    起
                </div>
            </div>
            <div class="table_hidden_boxbig"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item22.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>558</em>
                起
            </span>
            <div class="detai_box">
                <p>西安+推荐4钻鼓楼金茂酒店+可加购1日游双飞4/5/6日自由行</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item23.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>498</em>
                起
            </span>
            <div class="detai_box">
                <p>上海迪士尼乐园+苏州+杭州+上海+乌镇西栅火车/双动5日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item24.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>189</em>
                起
            </span>
            <div class="detai_box">
                <p>济南+趵突泉+泰山+曲阜三孔火车3日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item25.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>329</em>
                起
            </span>
            <div class="detai_box">
                <p>济南+趵突泉+泰山+曲阜三孔双高3日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item26.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>898</em>
                起
            </span>
            <div class="detai_box">
                <p>杭州+乌镇西栅+西湖+西塘+西溪湿地双动3日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item27.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>718</em>
                起
            </span>
            <div class="detai_box">
                <p>兵马俑+华清池+华山+明城墙+大慈恩寺+回民街火车4-6日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item28.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>808</em>
                起
            </span>
            <div class="detai_box">
                <p>梦幻川渝+成都+九寨沟+黄龙+熊猫乐园或都江堰交通自选5日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>苏州出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img">
            <img src="./images/item29.jpg" alt="">
            <span class="table_list_price">
                <i>￥</i>
                <em>698</em>
                起
            </span>
            <div class="detai_box">
                <p>双成人减300元+向往厦门+鼓浪屿+菽庄花园+胡里山炮台+赠鹭江夜游双飞4/5日跟团游</p>
                <div class="detail_button_box">
                    <span>国内游</span>
                    <span>阜阳出发</span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
    </ul>
        `
        jinxuan.appendChild(first_table_list);
    }else if (e.target.innerHTML == "邮轮") {
        deletedtabli();
        greencolorfun();
        e.target.classList.add("greenchangecolor");
        let first_table_list = document.createElement("div");
        first_table_list.classList.add("first_table_list");
        jinxuan.appendChild(first_table_list);
    }
});


let hotel = document.querySelector(".hotel");
let second_tab_title = document.querySelectorAll(".second_tab_title a");
let second_table_list = document.querySelector(".second_table_list");

function deletedtablisecond(){
    let second_table_list = document.querySelector(".second_table_list");
    second_table_list.remove();
}

function greencolorfunsecond(){
    second_tab_title.forEach(item=>{
        if(item.classList.contains("greenchangecolor")){
            item.classList.remove("greenchangecolor");
        }
    })
}

second_tab_title.forEach(item=>{
    item.addEventListener("mouseenter",function(){
        if(this.innerHTML == "苏州"){
        deletedtablisecond();
        greencolorfunsecond();
        item.classList.add("greenchangecolor");
        let second_table_list = document.createElement("div");
        second_table_list.classList.add("second_table_list");
        second_table_list.innerHTML = `
        <ul class="table_list_content">
        <li class="table_list_img2">
            <img src="./images/item31.jpg" alt="">
            <div class="detai_box">
                <p>锦江之星品尚(苏州园区独墅湖高教区4s店)</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>323</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item32.jpg" alt="">
            <div class="detai_box">
                <p>红璞礼遇酒店(苏州淮海街体育中心店)</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>296</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item33.jpg" alt="">
            <div class="detai_box">
                <p>H酒店(苏州留园寒山寺西环路地铁站店)</p>
                <div class="detail_button_box">
                    <span>客栈名宿</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>233</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item34.jpg" alt="">
            <div class="detai_box">
                <p>苏州工业园区智选假日酒店</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>644</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item35.jpg" alt="">
            <div class="detai_box">
                <p>苏州世豪国际大酒店</p>
                <div class="detail_button_box">
                    <span>客栈名宿</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>588</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item36.jpg" alt="">
            <div class="detai_box">
                <p>苏州相城希尔顿欢朋酒店</p>
                <div class="detail_button_box">
                    <span>客栈名宿</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>473</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item37.jpg" alt="">
            <div class="detai_box">
                <p>苏州辅特戴斯酒店</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>279</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item38.jpg" alt="">
            <div class="detai_box">
                <p>锦江都城酒店(昆山昆剧院店)</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>322</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
    </ul>
    <div class="srpnel">
        <p class="srpnelp">热门商圈</p>
        <div class="srpenlcontent">
            <div class="spancontent">
                <span class="spanleft">观前街地区（市中心）</span>
                <div class="spancentre"></div>
                <span class="spanright">太湖风景区</span>
            </div>
            <div class="spancontent">
                <span class="spanleft">苏州新区</span>
                <div class="spancentre"></div>
                <span class="spanright">同里古镇内</span>
            </div>
            <div class="spancontent">
                <span class="spanleft">苏州工业园区</span>
                <div class="spancentre"></div>
                <span class="spanright">金鸡湖开发区</span>
            </div>
            <div class="spancontent">
                <span class="spanleft">石路商业区</span>
                <div class="spancentre"></div>
                <span class="spanright">相城经济开发区</span>
            </div>
            <div class="spancontent">
                <span class="spanleft"></span>
                <div class="spancentrelast"></div>
                <span class="spanright"></span>
            </div>
        </div>

        <div class="srpnelpimg">
            <img src="./images/19.png" alt="">
            <div class="srpnelpimgright">
                <p>名宿客栈</p>
                <em>品质住宿</em>
            </div>
        </div>

        <div class="srpnelpimg">
            <img src="./images/20.png" alt="">
            <div class="srpnelpimgright">
                <p>更多国内酒店</p>
                <em>超值特惠品质舒适</em>
            </div>
        </div>
    </div>
        `
        hotel.appendChild(second_table_list);
    }else if (this.innerHTML == "无锡") {
        deletedtablisecond();
        greencolorfunsecond();
        item.classList.add("greenchangecolor");
        let second_table_list = document.createElement("div");
        second_table_list.classList.add("second_table_list");
        second_table_list.innerHTML= `
        <ul class="table_list_content">
        <li class="table_list_img2">
            <img src="./images/item41.jpg" alt="">
            <div class="detai_box">
                <p>江阴飞马水城酒店</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>272</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item42.jpg" alt="">
            <div class="detai_box">
                <p>?锡长江北路宜尚PLUS酒店</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>415</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item43.jpg" alt="">
            <div class="detai_box">
                <p>无锡瑞廷西郊酒店</p>
                <div class="detail_button_box">
                    <span>客栈名宿</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>893</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item44.jpg" alt="">
            <div class="detai_box">
                <p>无锡苏宁凯悦酒店</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>757</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item45.jpg" alt="">
            <div class="detai_box">
                <p>无锡金陵大饭店</p>
                <div class="detail_button_box">
                    <span>客栈名宿</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>458</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item46.jpg" alt="">
            <div class="detai_box">
                <p>麗枫酒店(无锡太湖大道店)</p>
                <div class="detail_button_box">
                    <span>客栈名宿</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>221</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item47.jpg" alt="">
            <div class="detai_box">
                <p>无锡国际饭店</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>328</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
        <li class="table_list_img2">
            <img src="./images/item48.jpg" alt="">
            <div class="detai_box">
                <p>维也纳酒店(无锡火车站店)</p>
                <div class="detail_button_box">
                    <span>国内酒店</span>
                    <span class="table_list_price2">
                        <i>￥</i>
                        <em>245</em>
                        起
                    </span>
                </div>
            </div>
            <div class="table_hidden_box"></div>
        </li>
    </ul>
    <div class="srpnel">
        <p class="srpnelp">热门商圈</p>
        <div class="srpenlcontent">
            <div class="spancontent">
                <span class="spanleft">三阳广场(市中心)及火车站地区</span>
                <div class="spancentre"></div>
                <span class="spanright">惠山风景区</span>
            </div>
            <div class="spancontent">
                <span class="spanleft">太湖风景区</span>
                <div class="spancentre"></div>
                <span class="spanright">市中心区域</span>
            </div>
            <div class="spancontent">
                <span class="spanleft">宜兴市中心区域</span>
                <div class="spancentre"></div>
                <span class="spanright">高新开发区</span>
            </div>
            <div class="spancontent">
                <span class="spanleft">汽车西站区</span>
                <div class="spancentre"></div>
                <span class="spanright">灵山大佛-拈花湾景区</span>
            </div>
            <div class="spancontent">
                <span class="spanleft"></span>
                <div class="spancentrelast"></div>
                <span class="spanright"></span>
            </div>
        </div>

        <div class="srpnelpimg">
            <img src="./images/19.png" alt="">
            <div class="srpnelpimgright">
                <p>名宿客栈</p>
                <em>品质住宿</em>
            </div>
        </div>

        <div class="srpnelpimg">
            <img src="./images/20.png" alt="">
            <div class="srpnelpimgright">
                <p>更多国内酒店</p>
                <em>超值特惠品质舒适</em>
            </div>
        </div>
    </div>
        `
        hotel.appendChild(second_table_list);
    } else if (this.innerHTML == "嘉兴") {
        deletedtablisecond();
        greencolorfunsecond();
        item.classList.add("greenchangecolor");
        let second_table_list = document.createElement("div");
        second_table_list.classList.add("second_table_list");
        second_table_list.innerHTML= `
        <ul class="table_list_content">
                    <li class="table_list_img2">
                        <img src="./images/item51.jpg" alt="">
                        <div class="detai_box">
                            <p>乌镇民宿</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>590</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item52.jpg" alt="">
                        <div class="detai_box">
                            <p>乌镇通安客栈</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>710</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item53.jpg" alt="">
                        <div class="detai_box">
                            <p>欢乐颂酒店(嘉兴中关村万丽广场店)</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>237</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item54.jpg" alt="">
                        <div class="detai_box">
                            <p>锦江之星品尚(嘉兴南湖会展中心嘉兴学院银泰店)</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>218</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item55.jpg" alt="">
                        <div class="detai_box">
                            <p>桐乡美高大酒店</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>229</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item56.jpg" alt="">
                        <div class="detai_box">
                            <p>嘉兴富悦大酒店</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>388</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item57.jpg" alt="">
                        <div class="detai_box">
                            <p>嘉兴龙之梦大酒店</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>398</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item58.jpg" alt="">
                        <div class="detai_box">
                            <p>麗枫酒店(嘉兴中山东路八佰伴店)</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>299</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                </ul>
                <div class="srpnel">
                    <p class="srpnelp">热门商圈</p>
                    <div class="srpenlcontent">
                        <div class="spancontent">
                            <span class="spanleft">西塘景区外</span>
                            <div class="spancentre"></div>
                            <span class="spanright">西塘景区内</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">西塘</span>
                            <div class="spancentre"></div>
                            <span class="spanright">乌镇</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">市区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">桐乡市区</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">嘉善市区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">南湖市区</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft"></span>
                            <div class="spancentrelast"></div>
                            <span class="spanright"></span>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/19.png" alt="">
                        <div class="srpnelpimgright">
                            <p>名宿客栈</p>
                            <em>品质住宿</em>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/20.png" alt="">
                        <div class="srpnelpimgright">
                            <p>更多国内酒店</p>
                            <em>超值特惠品质舒适</em>
                        </div>
                    </div>
                </div>
        `
        hotel.appendChild(second_table_list);
    }else if (this.innerHTML == "上海") {
        deletedtablisecond();
        greencolorfunsecond();
        item.classList.add("greenchangecolor");
        let second_table_list = document.createElement("div");
        second_table_list.classList.add("second_table_list");
        second_table_list.innerHTML= `
        <ul class="table_list_content">
                    <li class="table_list_img2">
                        <img src="./images/item61.jpg" alt="">
                        <div class="detai_box">
                            <p>上海裕景大饭店</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>849</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item62.jpg" alt="">
                        <div class="detai_box">
                            <p>上海徐汇瑞峰酒店</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>387</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item63.jpg" alt="">
                        <div class="detai_box">
                            <p>莫泰168(上海高科西路新国际博览中心店)</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>246</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item64.jpg" alt="">
                        <div class="detai_box">
                            <p>锦江都城酒店(上海徐家汇南华亭宾馆)</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>440</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item65.jpg" alt="">
                        <div class="detai_box">
                            <p>宿适轻奢酒店(上海交通大学店)</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>329</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item66.jpg" alt="">
                        <div class="detai_box">
                            <p>上海徐汇云睿酒店</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>339</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item67.jpg" alt="">
                        <div class="detai_box">
                            <p>上海延安饭店</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>486</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item68.jpg" alt="">
                        <div class="detai_box">
                            <p>如家酒店(上海外滩外白渡桥四川北路店)</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>220</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                </ul>
                <div class="srpnel">
                    <p class="srpnelp">热门商圈</p>
                    <div class="srpenlcontent">
                        <div class="spancontent">
                            <span class="spanleft">迪士尼度假区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">佘山,松江大学城</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">七浦路</span>
                            <div class="spancentre"></div>
                            <span class="spanright">淮海路</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">奉贤开发区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">人民广场</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">浦东陆家嘴金融贸易区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">虹桥地区</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft"></span>
                            <div class="spancentrelast"></div>
                            <span class="spanright"></span>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/19.png" alt="">
                        <div class="srpnelpimgright">
                            <p>名宿客栈</p>
                            <em>品质住宿</em>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/20.png" alt="">
                        <div class="srpnelpimgright">
                            <p>更多国内酒店</p>
                            <em>超值特惠品质舒适</em>
                        </div>
                    </div>
                </div>
        `
        hotel.appendChild(second_table_list);
    }else if (this.innerHTML == "杭州") {
        deletedtablisecond();
        greencolorfunsecond();
        item.classList.add("greenchangecolor");
        let second_table_list = document.createElement("div");
        second_table_list.classList.add("second_table_list");
        second_table_list.innerHTML= `
        <ul class="table_list_content">
                    <li class="table_list_img2">
                        <img src="./images/item71.jpg" alt="">
                        <div class="detai_box">
                            <p>浙江赞成宾馆</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>268</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item72.jpg" alt="">
                        <div class="detai_box">
                            <p>杭州瑞立江河汇酒店</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>668</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item73.jpg" alt="">
                        <div class="detai_box">
                            <p>浙江维多利亚丽嘉酒店</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>439</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item74.jpg" alt="">
                        <div class="detai_box">
                            <p>如家精选酒店(杭州西湖吴山广场河坊街店)</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>222</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item75.jpg" alt="">
                        <div class="detai_box">
                            <p>杭州西湖慢享主题酒店</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>378</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item76.jpg" alt="">
                        <div class="detai_box">
                            <p>杭州广银大酒店</p>
                            <div class="detail_button_box">
                                <span>客栈名宿</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>378</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item77.jpg" alt="">
                        <div class="detai_box">
                            <p>杭州新延安饭店</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>248</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                    <li class="table_list_img2">
                        <img src="./images/item78.jpg" alt="">
                        <div class="detai_box">
                            <p>昊颐酒店(杭州转塘西湖美院店)</p>
                            <div class="detail_button_box">
                                <span>国内酒店</span>
                                <span class="table_list_price2">
                                    <i>￥</i>
                                    <em>279</em>
                                    起
                                </span>
                            </div>
                        </div>
                        <div class="table_hidden_box"></div>
                    </li>
                </ul>
                <div class="srpnel">
                    <p class="srpnelp">热门商圈</p>
                    <div class="srpenlcontent">
                        <div class="spancontent">
                            <span class="spanleft">西湖风景区及灵隐度假区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">西湖湖滨</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">武林广场（市中心）</span>
                            <div class="spancentre"></div>
                            <span class="spanright">富阳地区</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">富阳区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">火车东站</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">下沙开发区及高教园区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">火车城站及西湖大道周边</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft"></span>
                            <div class="spancentrelast"></div>
                            <span class="spanright"></span>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/19.png" alt="">
                        <div class="srpnelpimgright">
                            <p>名宿客栈</p>
                            <em>品质住宿</em>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/20.png" alt="">
                        <div class="srpnelpimgright">
                            <p>更多国内酒店</p>
                            <em>超值特惠品质舒适</em>
                        </div>
                    </div>
                </div>
        `
        hotel.appendChild(second_table_list);
    }else if (this.innerHTML == "国际/港澳台酒店") {
        deletedtablisecond();
        greencolorfunsecond();
        item.classList.add("greenchangecolor");
        let second_table_list = document.createElement("div");
        second_table_list.classList.add("second_table_list");
        second_table_list.innerHTML= `
        <ul class="table_list_content">
                    <li class="table_list_img3">
                        <img src="./images/81.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>巴黎</p>
                                <em>
                                    牵手在塞纳河畔
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3">
                        <img src="./images/82.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>清迈</p>
                                <em>
                                    北国玫瑰之都
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3">
                        <img src="./images/83.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>苏梅岛</p>
                                <em>
                                    纯净自然的海岛
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3">
                        <img src="./images/84.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>新加坡</p>
                                <em>
                                    夏天百花盛开
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3">
                        <img src="./images/85.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>芭提雅</p>
                                <em>
                                    东南亚不夜城
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3">
                        <img src="./images/86.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>冲绳</p>
                                <em>
                                    花样海边玩法
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3">
                        <img src="./images/87.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>河内市</p>
                                <em>
                                    越南历史上著名的城市
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3">
                        <img src="./images/88.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>曼谷</p>
                                <em>
                                    东方威尼斯
                                </em>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="srpnel" style="visibility: hidden;">
                    <p class="srpnelp">热门商圈</p>
                    <div class="srpenlcontent">
                        <div class="spancontent">
                            <span class="spanleft">西湖风景区及灵隐度假区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">西湖湖滨</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">武林广场（市中心）</span>
                            <div class="spancentre"></div>
                            <span class="spanright">富阳地区</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">富阳区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">火车东站</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft">下沙开发区及高教园区</span>
                            <div class="spancentre"></div>
                            <span class="spanright">火车城站及西湖大道周边</span>
                        </div>
                        <div class="spancontent">
                            <span class="spanleft"></span>
                            <div class="spancentrelast"></div>
                            <span class="spanright"></span>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/19.png" alt="">
                        <div class="srpnelpimgright">
                            <p>名宿客栈</p>
                            <em>品质住宿</em>
                        </div>
                    </div>

                    <div class="srpnelpimg">
                        <img src="./images/20.png" alt="">
                        <div class="srpnelpimgright">
                            <p>更多国内酒店</p>
                            <em>超值特惠品质舒适</em>
                        </div>
                    </div>
                </div>
        `
        hotel.appendChild(second_table_list);
    }

    });
});
    


let around = document.querySelector(".around");
let third_tab_title = document.querySelectorAll(".third_tab_title a");
let third_table_list = document.querySelector(".third_table_list");

function deletedtablithird(){
    let third_table_list = document.querySelector(".third_table_list");
    third_table_list.remove();
}

function greencolorfunthird(){
    third_tab_title.forEach(item=>{
        if(item.classList.contains("greenchangecolor")){
            item.classList.remove("greenchangecolor");
        }
    })
}

third_tab_title.forEach(item=>{
    item.addEventListener("mouseenter",function(){
        if(this.innerHTML == "热推"){
            deletedtablithird();
            greencolorfunthird();
            this.classList.add("greenchangecolor");
            let third_table_list = document.createElement("div");
            third_table_list.classList.add("third_table_list");
            third_table_list.innerHTML = `
            <ul class="table_list_content">
            <li class="table_list_imgbig">
                <img src="./images/101.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>灵山大佛+日夜游拈花湾纯玩1日跟团游  禅意祈福 夜观水幕灯光秀 亮塔仪式  踏青赏花</p>
                        <em>
                            苏州-无锡
                        </em>
                    </div>
                    
                    <div class="intro_box_right">
                        <i>￥</i>
                        <em>278</em>
                        起
                    </div>
                </div>
                <div class="table_hidden_boxbig"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/102.jpg" alt="">
                <div class="detai_box">
                    <p>安吉藏龙百瀑+天下银坑+天荒坪观音堂滑雪汽车2日跟团游 纯玩无购物 无自理景点 体验滑雪乐趣 江南冰雪乡村风味的  亲子等元素为一体的乐园</p>
                    <div class="detail_button_box">
                        <span>苏州-湖州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>688</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/103.jpg" alt="">
                <div class="detai_box">
                    <p>常州天目湖+南山竹海+御水温泉汽车2日跟团游 一票全含 全程0购物 无自理景点 放松身心 休闲度假之旅</p>
                    <div class="detail_button_box">
                        <span>苏州-常州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>748</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/104.jpg" alt="">
                <div class="detai_box">
                    <p>增城白水寨天然氧吧+9999级天梯+栈道+瀑布纯玩1日游 生态纯玩 游山赏瀑 随心出行</p>
                    <div class="detail_button_box">
                        <span>广州-广州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>68</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/105.jpg" alt="">
                <div class="detai_box">
                    <p>都江堰景区+青城山+赠送川剧1日跟团游 分餐制熊猫小吃套餐 三环路内上门接  可选头等舱 赠矿泉水 0自费0购物 晚出发</p>
                    <div class="detail_button_box">
                        <span>成都-成都</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>229</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/106.jpg" alt="">
                <div class="detai_box">
                    <p>达古冰川+奶子沟双汽2日跟团游 真纯玩0购物 含氧气瓶 品特色餐 观冰川雪山彩林 体验高原民俗风情 错峰游</p>
                    <div class="detail_button_box">
                        <span>成都-阿坝藏族羌族自治州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>303</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/107.jpg" alt="">
                <div class="detai_box">
                    <p>二环内免费接+兵马俑+华清池+骊山兵谏亭一日游汽车1日跟团游 升级陕菜午餐  冰峰饮品   免费使用双景区耳麦  二环内上门接</p>
                    <div class="detail_button_box">
                        <span>西安-西安</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>249</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
        </ul>

        <div class="srpnel" style="height: 540px;">
            <p style="color: #333;font-weight: bold;">热门城市</p>
            <ul class="clearfix">
                <li>无锡</li>
                <li>嘉兴</li>
                <li>湖州</li>
                <li>常州</li>
                <li>南通</li>
                <li>上海</li>
                <li>杭州</li>
                <li>泰州</li>
                <li>绍兴</li>
                <li>镇江</li>
                <li>扬州</li>
                <li>宣城</li>
            </ul>

            <div class="srpnelpimg">
                <img src="./images/22.png" alt="">
                <div class="srpnelpimgright">
                    <p>快乐童心</p>
                    <em>陪孩子看世界</em>
                </div>
            </div>
        </div>
            `
            around.appendChild(third_table_list);
        }else if (this.innerHTML == "无锡") {
            deletedtablithird();
            greencolorfunthird();
            this.classList.add("greenchangecolor");
            let third_table_list = document.createElement("div");
            third_table_list.classList.add("third_table_list");
            third_table_list.innerHTML = `
            <ul class="table_list_content">
            <li class="table_list_imgbig">
                <img src="./images/101.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>灵山大佛+日夜游拈花湾纯玩1日跟团游  禅意祈福 夜观水幕灯光秀 亮塔仪式  踏青赏花</p>
                        <em>
                            苏州-无锡
                        </em>
                    </div>
                    
                    <div class="intro_box_right">
                        <i>￥</i>
                        <em>278</em>
                        起
                    </div>
                </div>
                <div class="table_hidden_boxbig"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/112.jpg" alt="">
                <div class="detai_box">
                    <p>苏州出发无锡三国城+水浒城+鼋头渚+太湖游船纯玩1日跟团游 高铁往返 赠特色小礼 天天发班 </p>
                    <div class="detail_button_box">
                        <span>苏州-无锡</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>259</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/113.jpg" alt="">
                <div class="detai_box">
                    <p>无锡三国水浒城+古战船+日夜游拈花湾纯玩1日跟团游  坐古战船 汉文化历史 亲子优选 看大型实景演出 夜赏水幕灯光秀</p>
                    <div class="detail_button_box">
                        <span>苏州-无锡</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>218</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/114.jpg" alt="">
                <div class="detai_box">
                    <p>鼋头渚+日夜游拈花湾纯玩1日跟团游 赏太湖风光 夜赏水幕灯光秀  梵天花海 </p>
                    <div class="detail_button_box">
                        <span>苏州-无锡</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>218</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/114.jpg" alt="">
                <div class="detai_box">
                    <p>三国城+水浒城+太湖鼋头渚+太湖游船+太湖仙岛纯玩1日跟团游 门票全含  含双游船 </p>
                    <div class="detail_button_box">
                        <span>苏州-无锡</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>198</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/115.jpg" alt="">
                <div class="detai_box">
                    <p>苏州出发+灵山大佛+九龙灌浴+五印坛城祈福纯玩1日游 门票全含 含去程高铁 送至景区 行程自由 </p>
                    <div class="detail_button_box">
                        <span>苏州-无锡</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>198</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/116.jpg" alt="">
                <div class="detai_box">
                    <p>苏州出发灵山大佛+梵宫+鼋头渚+太湖仙岛纯玩往返高铁1日跟团游 祈福还愿 双5A景点 太湖游船 登太湖仙岛 踏青赏花</p>
                    <div class="detail_button_box">
                        <span>苏州-无锡</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>318</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
        </ul>

        <div class="srpnel" style="height: 540px;">
            <p style="color: #333;font-weight: bold;">热门城市</p>
            <ul class="clearfix">
                <li>无锡</li>
                <li>嘉兴</li>
                <li>湖州</li>
                <li>常州</li>
                <li>南通</li>
                <li>上海</li>
                <li>杭州</li>
                <li>泰州</li>
                <li>绍兴</li>
                <li>镇江</li>
                <li>扬州</li>
                <li>宣城</li>
            </ul>

            <div class="srpnelpimg">
                <img src="./images/22.png" alt="">
                <div class="srpnelpimgright">
                    <p>快乐童心</p>
                    <em>陪孩子看世界</em>
                </div>
            </div>
        </div>
            `
            around.appendChild(third_table_list);
        }else if (this.innerHTML == "湖州") {
            deletedtablithird();
            greencolorfunthird();
            this.classList.add("greenchangecolor");
            let third_table_list = document.createElement("div");
            third_table_list.classList.add("third_table_list");
            third_table_list.innerHTML = `
            <ul class="table_list_content">
            <li class="table_list_imgbig">
                <img src="./images/121.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>安吉云上草原星空滑雪场畅滑一日1日跟团游 网红打卡地</p>
                        <em>
                            嘉兴-湖州
                        </em>
                    </div>
                    
                    <div class="intro_box_right">
                        <i>￥</i>
                        <em>418</em>
                        起
                    </div>
                </div>
                <div class="table_hidden_boxbig"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/122.jpg" alt="">
                <div class="detai_box">
                    <p>湖州龙之梦动物世界+十里银杏长廊+图影湿地+太湖古镇大型灯光水舞秀大巴2日跟团游 住龙之梦雅仕湖畔酒店</p>
                    <div class="detail_button_box">
                        <span>嘉兴-湖州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>478</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/123.jpg" alt="">
                <div class="detai_box">
                    <p>江南奇山莫干山，纯玩无购物1日跟团游 上海出发</p>
                    <div class="detail_button_box">
                        <span>嘉兴-湖州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>99</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/124.jpg" alt="">
                <div class="detai_box">
                    <p>增城白水寨天然氧吧+9999级天梯+栈道+瀑布纯玩1日游 生态纯玩 游山赏瀑 随心出行</p>
                    <div class="detail_button_box">
                        <span>广州-广州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>68</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/125.jpg" alt="">
                <div class="detai_box">
                    <p>海天佛国普陀山+紫竹林+南海观音+慧济寺+法雨寺+普济禅寺2日跟团游 住景区内渔家或酒店  可自选酒店套餐</p>
                    <div class="detail_button_box">
                        <span>苏州-舟山</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>528</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/126.jpg" alt="">
                <div class="detai_box">
                    <p>福建土楼+永定高北土楼+南靖云水谣+看饱7个小景点含接送1日游 赠鹭岛夜游 博物馆免费登楼 游玩5小时以上 纯玩无购物</p>
                    <div class="detail_button_box">
                        <span>厦门-龙岩</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>258</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/127.jpg" alt="">
                <div class="detai_box">
                    <p>西塘+乌镇西栅半自助2日游  宿乌镇直营酒店 可多次进出西栅景区 免费使用景区内电瓶车 含1早1正 日赏西塘 夜赏西栅 轻松游</p>
                    <div class="detail_button_box">
                        <span>上海-嘉兴</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>499</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
        </ul>

        <div class="srpnel" style="height: 540px;">
            <p style="color: #333;font-weight: bold;">热门城市</p>
            <ul class="clearfix">
                <li>无锡</li>
                <li>嘉兴</li>
                <li>湖州</li>
                <li>常州</li>
                <li>南通</li>
                <li>上海</li>
                <li>杭州</li>
                <li>泰州</li>
                <li>绍兴</li>
                <li>镇江</li>
                <li>扬州</li>
                <li>宣城</li>
            </ul>

            <div class="srpnelpimg">
                <img src="./images/22.png" alt="">
                <div class="srpnelpimgright">
                    <p>快乐童心</p>
                    <em>陪孩子看世界</em>
                </div>
            </div>
        </div>
            `
            around.appendChild(third_table_list);
        }else if (this.innerHTML == "常州") {
            deletedtablithird();
            greencolorfunthird();
            this.classList.add("greenchangecolor");
            let third_table_list = document.createElement("div");
            third_table_list.classList.add("third_table_list");
            third_table_list.innerHTML=`
            <ul class="table_list_content">
            <li class="table_list_imgbig">
                <img src="./images/131.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>常州天目湖+南山竹海+御水温泉汽车2日跟团游 一票全含 全程0购物 无自理景点 放松身心 休闲度假之旅</p>
                        <em>
                            苏州-常州
                        </em>
                    </div>
                    
                    <div class="intro_box_right">
                        <i>￥</i>
                        <em>748</em>
                        起
                    </div>
                </div>
                <div class="table_hidden_boxbig"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/132.jpg" alt="">
                <div class="detai_box">
                    <p>常州恐龙园梦幻庄园主题乐园大巴1日跟团游 嘉兴出发  恐龙主题</p>
                    <div class="detail_button_box">
                        <span>苏州-常州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>318</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/133.jpg" alt="">
                <div class="detai_box">
                    <p>增城白水寨天然氧吧+9999级天梯+栈道+瀑布纯玩1日游 生态纯玩 游山赏瀑 随心出行</p>
                    <div class="detail_button_box">
                        <span>苏州-常州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>68</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/134.jpg" alt="">
                <div class="detai_box">
                    <p>都江堰景区+青城山+赠送川剧1日跟团游 分餐制熊猫小吃套餐 三环路内上门接  可选头等舱 赠矿泉水 0自费0购物 晚出发</p>
                    <div class="detail_button_box">
                        <span>成都-成都</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>229</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/135.jpg" alt="">
                <div class="detai_box">
                    <p>达古冰川+奶子沟双汽2日跟团游 真纯玩0购物 含氧气瓶 品特色餐 观冰川雪山彩林 体验高原民俗风情 错峰游</p>
                    <div class="detail_button_box">
                        <span>成都-阿坝藏族羌族自治州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>303</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/136.jpg" alt="">
                <div class="detai_box">
                    <p>九寨沟风景区+黄龙风景区双汽2日跟团游 真纯玩 0购物店0车销0餐购0自费推荐 含九寨沟观光车 A线为1排4座舒适舱旅游车 B线为1排3坐头等舱旅游车 2日即可畅游两大经典美景</p>
                    <div class="detail_button_box">
                        <span>成都-阿坝藏族羌族自治州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>578</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/137.jpg" alt="">
                <div class="detai_box">
                    <p>二环内免费接+兵马俑+华清池+骊山兵谏亭一日游汽车1日跟团游 升级陕菜午餐  冰峰饮品   免费使用双景区耳麦  二环内上门接</p>
                    <div class="detail_button_box">
                        <span>西安-西安</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>249</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
        </ul>

        <div class="srpnel" style="height: 540px;">
            <p style="color: #333;font-weight: bold;">热门城市</p>
            <ul class="clearfix">
                <li>无锡</li>
                <li>嘉兴</li>
                <li>湖州</li>
                <li>常州</li>
                <li>南通</li>
                <li>上海</li>
                <li>杭州</li>
                <li>泰州</li>
                <li>绍兴</li>
                <li>镇江</li>
                <li>扬州</li>
                <li>宣城</li>
            </ul>

            <div class="srpnelpimg">
                <img src="./images/22.png" alt="">
                <div class="srpnelpimgright">
                    <p>快乐童心</p>
                    <em>陪孩子看世界</em>
                </div>
            </div>
        </div>
            `
            around.appendChild(third_table_list);
        }else if (this.innerHTML == "南通") {
            deletedtablithird();
            greencolorfunthird();
            this.classList.add("greenchangecolor");
            let third_table_list = document.createElement("div");
            third_table_list.classList.add("third_table_list");
            third_table_list.innerHTML = `
            <ul class="table_list_content">
            <li class="table_list_imgbig">
                <img src="./images/141.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>常州天目湖+南山竹海+御水温泉汽车2日跟团游 一票全含 全程0购物 无自理景点 放松身心 休闲度假之旅</p>
                        <em>
                            苏州-常州
                        </em>
                    </div>
                    
                    <div class="intro_box_right">
                        <i>￥</i>
                        <em>748</em>
                        起
                    </div>
                </div>
                <div class="table_hidden_boxbig"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/142.jpg" alt="">
                <div class="detai_box">
                    <p>常州恐龙园梦幻庄园主题乐园大巴1日跟团游 嘉兴出发  恐龙主题</p>
                    <div class="detail_button_box">
                        <span>苏州-常州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>318</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
            <li class="table_list_img">
                <img src="./images/143.jpg" alt="">
                <div class="detai_box">
                    <p>增城白水寨天然氧吧+9999级天梯+栈道+瀑布纯玩1日游 生态纯玩 游山赏瀑 随心出行</p>
                    <div class="detail_button_box">
                        <span>苏州-常州</span>
                        <span class="table_list_price2">
                            <i>￥</i>
                            <em>68</em>
                            起
                        </span>
                    </div>
                </div>
                <div class="table_hidden_box"></div>
            </li>
        </ul>

        <div class="srpnel" style="height: 540px;">
            <p style="color: #333;font-weight: bold;">热门城市</p>
            <ul class="clearfix">
                <li>无锡</li>
                <li>嘉兴</li>
                <li>湖州</li>
                <li>常州</li>
                <li>南通</li>
                <li>上海</li>
                <li>杭州</li>
                <li>泰州</li>
                <li>绍兴</li>
                <li>镇江</li>
                <li>扬州</li>
                <li>宣城</li>
            </ul>

            <div class="srpnelpimg">
                <img src="./images/22.png" alt="">
                <div class="srpnelpimgright">
                    <p>快乐童心</p>
                    <em>陪孩子看世界</em>
                </div>
            </div>
        </div>
            `
            around.appendChild(third_table_list);
        }
    })
});


let world = document.querySelector(".world");
let forth_tab_title = document.querySelectorAll(".forth_tab_title a");
let forth_table_list = document.querySelector(".forth_table_list");

function deletedtabliforth(){
    let forth_table_list = document.querySelector(".forth_table_list");
    forth_table_list.remove();
}

function greencolorfunforth(){
    forth_tab_title.forEach(item=>{
        if(item.classList.contains("greenchangecolor")){
            item.classList.remove("greenchangecolor");
        }
    });
}

forth_tab_title.forEach(item=>{
    item.addEventListener("mouseenter",function(){
        if(this.innerHTML == "热推"){
            deletedtabliforth();
            greencolorfunforth();
            this.classList.add("greenchangecolor");
            let forth_table_list = document.createElement("div");
            forth_table_list.classList.add("forth_table_list");
            forth_table_list.innerHTML = `
            <div class="table_list_img3 forthfirstimg">
                    <img src="./images/167.jpg" alt="">
                    <div class="intro_box">
                        <div class="intro_box_left">
                            <p>奥克兰</p>
                            <em>
                                新西兰富庶地
                            </em>
                        </div>
                    </div>
                </div>
                <ul class="table_list_content3">
                    <li class="table_list_img3 ulbigimg" style="align-self: flex-start;">
                        <img src="./images/162.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>悉尼</p>
                                <em>
                                    阳光自由之都
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3 ulsmallimg" style="align-self: flex-start;">
                        <img src="./images/163.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>曼谷</p>
                                <em>
                                    东方威尼斯
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3 ulsmallimg">
                        <img src="./images/164.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>新加坡</p>
                                <em>
                                    夏天欣赏百花盛开
                                </em>
                            </div>
                        </div>
                    </li>
                    <li class="table_list_img3 ulbigimg">
                        <img src="./images/165.jpg" alt="">
                        <div class="intro_box">
                            <div class="intro_box_left">
                                <p>长滩岛</p>
                                <em>
                                    浪漫白沙滩
                                </em>
                            </div>
                        </div>
                    </li>
                </ul>

                <div class="srpneled" style="height: 436px;width: 222px;">
                    <img src="./images/166.jpg" alt="">
                </div>
            `
            world.appendChild(forth_table_list);
        }else if (this.innerHTML == "东南亚") {
            deletedtabliforth();
            greencolorfunforth();
            this.classList.add("greenchangecolor");
            let forth_table_list = document.createElement("div");
            forth_table_list.classList.add("forth_table_list");
            forth_table_list.innerHTML = `
            <div class="table_list_img3 forthfirstimg">
            <img src="./images/171.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>曼谷</p>
                    <em>
                        东方威尼斯
                    </em>
                </div>
            </div>
        </div>
        <ul class="table_list_content3">
            <li class="table_list_img3 ulbigimg" style="align-self: flex-start;">
                <img src="./images/172.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>新加坡</p>
                        <em>
                            夏天欣赏百花盛开
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg" style="align-self: flex-start;">
                <img src="./images/173.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>亚庇</p>
                        <em>
                            马来半岛的童话
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg">
                <img src="./images/174.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>清迈</p>
                        <em>
                            北国玫瑰之都
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulbigimg">
                <img src="./images/175.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>暹粒</p>
                        <em>
                            梦回吴哥
                        </em>
                    </div>
                </div>
            </li>
        </ul>

        <div class="srpneled" style="height: 436px;width: 222px;">
            <img src="./images/166.jpg" alt="">
        </div>
            `
            world.appendChild(forth_table_list);
        }else if (this.innerHTML =="日本") {
            deletedtabliforth();
            greencolorfunforth();
            this.classList.add("greenchangecolor");
            let forth_table_list = document.createElement("div");
            forth_table_list.classList.add("forth_table_list");
            forth_table_list.innerHTML = `
            <div class="table_list_img3 forthfirstimg">
            <img src="./images/181.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>东京</p>
                    <em>
                        霓虹下的怀旧地
                    </em>
                </div>
            </div>
        </div>
        <ul class="table_list_content3">
            <li class="table_list_img3 ulbigimg" style="align-self: flex-start;">
                <img src="./images/182.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>大阪</p>
                        <em>
                            关西的多元文化
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg" style="align-self: flex-start;">
                <img src="./images/183.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>名古屋</p>
                        <em>
                            古迹之城
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg">
                <img src="./images/184.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>札幌</p>
                        <em>
                            浓烈的北欧风情
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulbigimg">
                <img src="./images/185.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>冲绳</p>
                        <em>
                            花样海边玩法
                        </em>
                    </div>
                </div>
            </li>
        </ul>

        <div class="srpneled" style="height: 436px;width: 222px;">
            <img src="./images/166.jpg" alt="">
        </div>
            `
            world.appendChild(forth_table_list);
        }else if (this.innerHTML == "欧洲") {
            deletedtabliforth();
            greencolorfunforth();
            this.classList.add("greenchangecolor");
            let forth_table_list = document.createElement("div");
            forth_table_list.classList.add("forth_table_list");
            forth_table_list.innerHTML = `
            <div class="table_list_img3 forthfirstimg">
            <img src="./images/191.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>巴黎</p>
                    <em>
                        牵手在塞纳河畔
                    </em>
                </div>
            </div>
        </div>
        <ul class="table_list_content3">
            <li class="table_list_img3 ulbigimg" style="align-self: flex-start;">
                <img src="./images/192.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>莫斯科</p>
                        <em>
                            森林中的首都
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg" style="align-self: flex-start;">
                <img src="./images/193.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>维也纳</p>
                        <em>
                            音乐之都
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg">
                <img src="./images/194.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>雅典</p>
                        <em>
                            震撼的雅典卫城
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulbigimg">
                <img src="./images/195.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>圣托里尼</p>
                        <em>
                            去希腊拍甜蜜写真
                        </em>
                    </div>
                </div>
            </li>
        </ul>

        <div class="srpneled" style="height: 436px;width: 222px;">
            <img src="./images/166.jpg" alt="">
        </div>
            `
            world.appendChild(forth_table_list);
        }else if (this.innerHTML == "美洲") {
            deletedtabliforth();
            greencolorfunforth();
            this.classList.add("greenchangecolor");
            let forth_table_list = document.createElement("div");
            forth_table_list.classList.add("forth_table_list");
            forth_table_list.innerHTML = `
            <div class="table_list_img3 forthfirstimg">
            <img src="./images/201.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>塞班岛</p>
                    <em>
                        玻璃般的海水
                    </em>
                </div>
            </div>
        </div>
        <ul class="table_list_content3">
            <li class="table_list_img3 ulbigimg" style="align-self: flex-start;">
                <img src="./images/202.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>洛杉矶</p>
                        <em>
                            迷情好莱坞
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg" style="align-self: flex-start;">
                <img src="./images/203.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>拉斯维加斯</p>
                        <em>
                            四大赌城之首
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg">
                <img src="./images/204.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>芝加哥</p>
                        <em>
                            世界屠猪城
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulbigimg">
                <img src="./images/205.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>纽约</p>
                        <em>
                            时尚新地标
                        </em>
                    </div>
                </div>
            </li>
        </ul>

        <div class="srpneled" style="height: 436px;width: 222px;">
            <img src="./images/166.jpg" alt="">
        </div>
            `
            world.appendChild(forth_table_list);
        }else if (this.innerHTML == "澳洲") {
            deletedtabliforth();
            greencolorfunforth();
            this.classList.add("greenchangecolor");
            let forth_table_list = document.createElement("div");
            forth_table_list.classList.add("forth_table_list");
            forth_table_list.innerHTML = `
            <div class="table_list_img3 forthfirstimg">
            <img src="./images/211.jpg" alt="">
            <div class="intro_box">
                <div class="intro_box_left">
                    <p>奥克兰</p>
                    <em>
                        新西兰富庶地
                    </em>
                </div>
            </div>
        </div>
        <ul class="table_list_content3">
            <li class="table_list_img3 ulbigimg" style="align-self: flex-start;">
                <img src="./images/212.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>悉尼</p>
                        <em>
                            阳光自由之都
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg" style="align-self: flex-start;">
                <img src="./images/213.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>墨尔本</p>
                        <em>
                            考拉的乐园
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulsmallimg">
                <img src="./images/214.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>布里斯班</p>
                        <em>
                            浪漫海湾
                        </em>
                    </div>
                </div>
            </li>
            <li class="table_list_img3 ulbigimg">
                <img src="./images/215.jpg" alt="">
                <div class="intro_box">
                    <div class="intro_box_left">
                        <p>罗托鲁瓦</p>
                        <em>
                            温泉圣地
                        </em>
                    </div>
                </div>
            </li>
        </ul>

        <div class="srpneled" style="height: 436px;width: 222px;">
            <img src="./images/166.jpg" alt="">
        </div>
            `
            world.appendChild(forth_table_list);
        }
    })
})

