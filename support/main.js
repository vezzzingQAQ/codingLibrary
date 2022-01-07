var dataURL="./store.json";
var initPage=()=>{
    /**初始化页面 */
    getStore(function(store){
        /**读取文档信息 */
        let {lessonList,displayLessonIndex,projectName}=store;
        //编辑左侧课程列表
        for(let i of lessonList){
            addLesson(i);
        }
        //设置首页课程
        openLesson(`../main/${lessonList[displayLessonIndex].identifier}/main.html`);
        //注册动作
        registerAction();   
        //填写标题
        document.querySelector(".leftPan .title").innerHTML=projectName; 
        document.getElementsByTagName("title")[0].innerText=projectName;
    });
}
var registerAction=()=>{
    /**注册动作 */
    //单击选择课程
    var lessonsDiv=document.querySelectorAll(".leftPan ul>li>p");
    for(let currentDiv of lessonsDiv){
        currentDiv.onclick=()=>{
            openLesson(currentDiv.getAttribute("data-path"));
        }
    }
}

var getStore=(f/*传入的函数:function(store){}可以操作store对象*/)=>{
    /**获取全局储存对象 */
    let requestURL=dataURL;
    let request=new XMLHttpRequest();
    request.open("GET",requestURL);
    request.responseType="text";
    request.send();
    request.onload = function(){
        var store=JSON.parse(request.response);
        f(store);
    };
}
var addLesson=({identifier,name})=>{
    /**添加左侧列表 */
    let container=document.querySelector(".leftPan ul");
    let textTemp;
    textTemp=`<li><p data-path="../main/${identifier}/main.html">${name}</p></li>`;
    container.innerHTML+=textTemp;
}
var openLesson=(path)=>{
    /**切换iframe路径 */
    let iframeBox=document.querySelector(".rightPan iframe");
    iframeBox.src=path;
}
