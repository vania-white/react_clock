(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),l=a.n(o),r=a(1),i=a(2),s=a(4),m=a(3),u=(a(12),a(13),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()}),console.log(e.state.time)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"clock__time"},"Current time:"," ",this.state.time),c.a.createElement("br",null),c.a.createElement("span",{className:"clock__name"},"Current name:"," ",this.props.name))}}]),a}(c.a.Component)),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={clockVisible:!0,clockName:Math.ceil(100*Math.random())},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.name!==this.state.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.state.name))}},{key:"render",value:function(){var e=this,t=this.state,a=t.clockVisible,n=t.clockName,o=t.date;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__title"},"React clock"),c.a.createElement("p",{className:"app__description"},a&&c.a.createElement(u,{name:n,time:o})),c.a.createElement("div",{className:"app__buttons"},c.a.createElement("button",{type:"button",className:"app__button",onClick:function(){e.setState({clockVisible:!0})}},"Show Clock"),c.a.createElement("button",{type:"button",className:"app__button",onClick:function(){e.setState({clockVisible:!1})}},"Hide Clock"),c.a.createElement("button",{type:"button",className:"app__button",onClick:function(){e.setState({clockName:Math.ceil(100*Math.random())})}},"Random Name"))))}}]),a}(c.a.Component);l.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0af1d3b6.chunk.js.map