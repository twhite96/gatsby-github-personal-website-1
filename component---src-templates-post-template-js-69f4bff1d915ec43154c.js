(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return u});var r=t(0),l=t.n(r),n=t(148),c=t(150),s=t(151),i=t(153),m=t(145),o=t(54),d=t(156);a.default=function(e){var a=e.data,t=Object(r.useContext)(o.a).state.style,u=Object(m.a)().layout,f=a.markdownRemark;return l.a.createElement(s.a,null,"stacked"===u?l.a.createElement("div",{className:"container-lg py-6 p-responsive text-center"},l.a.createElement(i.a,{metaData:!1}),l.a.createElement("div",{className:"container-md f4 text-left border rounded-2 bg-white p-3 p-sm-5 mt-6"},l.a.createElement("p",{className:"f5"},l.a.createElement("span",{className:"d-flex flex-items-center",style:{color:"#0366d6"}},l.a.createElement(c.e,{icon:c.a,size:16,verticalAlign:"middle",ariaLabel:"Home",className:"mr-2"}),l.a.createElement(n.a,{to:"/"},"Home"))),l.a.createElement("h1",{className:"f00-light lh-condensed"},f.frontmatter.title),l.a.createElement("p",{className:"mb-5 "+("dark"===t?"text-white":"text-gray")},"Published"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:f.html}}))):l.a.createElement("div",{className:"d-md-flex "+("dark"!==t?"border-md-bottom":"")},l.a.createElement("div",{className:"flex-self-stretch "+("dark"===t?"bg-gray-dark":"border-md-right border-gray-light bg-white")+" col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6"},l.a.createElement(i.a,{metaData:!0})),l.a.createElement("div",{className:"col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0",style:{backgroundColor:"dark"===t?"#2f363d":"#fafbfc"}},l.a.createElement("div",{className:"mx-auto",style:{maxWidth:"900px"}},l.a.createElement("div",{className:"f4 "+("dark"===t?"text-white":"")+" mb-6"},l.a.createElement("div",{className:"f4 "+("dark"===t&&"text-white")},l.a.createElement("p",{className:"f5"},l.a.createElement("span",{className:"d-flex flex-items-center",style:{color:"#0366d6"}},l.a.createElement(n.a,{to:"/",className:"d-flex flex-items-center "+("dark"===t&&"text-white")},l.a.createElement(c.e,{icon:c.a,size:16,verticalAlign:"middle",ariaLabel:"Home",className:"mr-2"}),"Home"))),l.a.createElement("h1",{className:"f00-light lh-condensed"},f.frontmatter.title),l.a.createElement("p",{className:("dark"===t?"text-white":"text-gray")+" mb-5"},"Published ",Object(d.b)(""+f.fields.postDate)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:f.html}})))))))};var u="1001958473"},145:function(e,a,t){"use strict";var r=t(152);a.a=function(){return r.data.site.siteMetadata}},146:function(e,a,t){var r;e.exports=(r=t(149))&&r.default||r},148:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(4),c=t.n(n),s=t(32),i=t.n(s);t.d(a,"a",function(){return i.a});t(146),l.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},149:function(e,a,t){"use strict";t.r(a);t(33);var r=t(0),l=t.n(r),n=t(4),c=t.n(n),s=t(56),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},151:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(145),c=t(54);t(157);a.a=function(e){var a=e.children,t=Object(n.a)().style,s=Object(r.useContext)(c.a),i=s.state,m=i.style,o=i.theme,d=s.dispatch;return m!==t&&d({type:"CHANGE_THEME",value:t}),Object(r.useEffect)(function(){document.body.style.backgroundColor=o.background},[o.background]),l.a.createElement("main",null,a)}},152:function(e){e.exports={data:{site:{siteMetadata:{style:"light",layout:"sidebar"}}}}},153:function(e,a,t){"use strict";t(147);var r=t(154),l=t(0),n=t.n(l),c=t(155),s=t.n(c),i=t(150),m=t(145),o=t(54);a.a=function(e){var a=e.metaData,t=Object(l.useContext)(o.a).state,c=t.style,d=t.theme,u=Object(m.a)().layout,f=r.data.github.viewer,b="stacked"===u?"d-md-inline-block mr-3":"d-flex flex-items-center mb-3";return n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:f.avatarUrl,alt:"user-avatar",className:"circle mb-3",style:{maxWidth:"150px"}}),n.a.createElement("h1",{className:"dark"===c?"text-white":"mb-2 lh-condensed"},f.name?f.name:f.login),n.a.createElement("p",{className:"mb-3 f4 "+("dark"===c?"text-white":"text-gray")},n.a.createElement(s.a,{text:f.bio||""})),a&&n.a.createElement("div",{className:"f4 mb-6"},f.name&&n.a.createElement("div",{className:b},n.a.createElement("span",{style:{color:d.iconColor}},n.a.createElement(i.e,{icon:i.d,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"GitHub"})),n.a.createElement("a",{href:"https://github.com/"+f.login,className:"dark"===c?"text-white":""},"@",f.login)),f.email&&n.a.createElement("div",{className:b},n.a.createElement("span",{style:{color:d.iconColor}},n.a.createElement(i.e,{icon:i.c,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"email"})),n.a.createElement("a",{href:"mailto:"+f.email,className:"dark"===c?"text-white":""},f.email)),f.location&&n.a.createElement("div",{className:b+" "+("dark"===c&&"text-white")},n.a.createElement("span",{style:{color:d.iconColor}},n.a.createElement(i.e,{icon:i.b,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"Location"})),f.location),f.isHireable&&n.a.createElement("span",{title:"Hire me",className:"d-inline-block f5 rounded-2 text-white bg-green py-1 px-2"},"Available for hire")))}},154:function(e){e.exports={data:{github:{viewer:{name:"Yash Thakkar",email:"thakkaryash94@gmail.com",bio:"🎯Coder",login:"thakkaryash94",url:"https://github.com/thakkaryash94",avatarUrl:"https://avatars3.githubusercontent.com/u/7349778?v=4",isHireable:!0,location:"Surat, Gujarat, India"}}}}},156:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var r=t(0),l=t.n(r),n=t(148),c=t(54);function s(e){var a=new Date(e);return a.toLocaleDateString("en-GB",{month:"short"})+" "+a.toLocaleDateString("en-GB",{day:"numeric"})+", "+a.toLocaleDateString("en-GB",{year:"numeric"})}a.a=function(e){var a=e.post,t=Object(r.useContext)(c.a).state.style;return l.a.createElement("div",{className:"height-full text-left "+("dark"===t?"box-shadow":"border border - gray - light")+" bg-white rounded-1 p-3"},l.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},l.a.createElement("h1",{className:"f4 lh-condensed mb-1"},l.a.createElement(n.a,{to:a.fields.slug},a.frontmatter.title))),l.a.createElement("div",{className:"text-gray mb-2 ws-normal"},s(""+a.fields.postDate)))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-69f4bff1d915ec43154c.js.map