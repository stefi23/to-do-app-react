(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(3),c=a.n(s),l=(a(15),a(1)),r=a(4),i=a(5),m=a(6),d=a(8),u=a(7),h=a(9),p=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){console.log("here"),a.setState(Object(r.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("pressed"),e.preventDefault();var t=Object(l.a)(a.state.toDoList);t.push(a.state.newTask),a.setState({toDoList:t,newTask:""})},a.handleDelete=function(e){var t=Object(l.a)(a.state.toDoList);t.pop(a.state.newTask),a.setState({toDoList:t,newTask:""})},a.completedTask=function(){console.log("checked"),a.setState({done:!0})},a.state={toDoList:["Wake up!","Brush teeth!","Code"],newTask:"",done:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"text-center col-8 offset-2 mt-3 bg-danger p-3 rounded"},o.a.createElement("h3",{style:{color:"silver"},className:"mb-4"},"To Do List"),o.a.createElement("hr",null),o.a.createElement("form",{className:"text-center"},o.a.createElement("div",{className:"row text-center"},o.a.createElement("div",{className:"col-9"},o.a.createElement("input",{type:"text",name:"newTask",value:this.state.newTask,placeholder:"Add New Task",onChange:this.handleChange,className:"form-control"})),o.a.createElement("div",{className:"col-3 text-left noPadding"},o.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:"btn btn-secondary"},"Add!")))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8 offset-2 p-3 bg-info rounded"},o.a.createElement("ul",{className:"list-group"},this.state.toDoList.map((function(t,a){return o.a.createElement("li",{className:"list-group-item float-left",key:a,onClick:e.completedTask},t,o.a.createElement("input",{type:"checkbox",onChange:e.Taskchecked,className:"loat-left"}))}))),o.a.createElement("button",{type:"submit",onClick:this.handleDelete,className:"btn btn-secondary mt-3"},"Delete Last Task!"))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.ae4d8afa.chunk.js.map