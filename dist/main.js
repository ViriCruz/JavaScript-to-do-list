!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);n(0);var o=e=>({getName:()=>e}),r=(e,t,n,o,r=!1)=>{const l=()=>({title:e,description:t,dueDate:n,priority:o,completed:r});return{getTodo:l,changeStatus:()=>l().completed=!l().completed}};const l=()=>{let e=document.getElementById("new-project"),t=document.getElementById("new-todo"),n=document.getElementById("projects"),o=document.getElementById("todos"),r=document.querySelector('input[name="project-title"]');return{newProject:e,newTodo:t,projects:n,todos:o,title:document.querySelector('input[name="title"]'),description:document.querySelector('input[name="description"]'),dueDate:document.querySelector('input[name="due-date"]'),select:document.querySelector('select[name="priority"]'),projectTitle:r}};function d(e){const t=l().newTodo.rel,n=l().todos,o=document.createElement("li"),r=document.createElement("div"),d=document.createElement("button"),a=document.createElement("span");d.addEventListener("click",e=>{let n=JSON.parse(localStorage.getItem(t)).filter(t=>t.title!==e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);c(),i(n),localStorage.setItem(t,JSON.stringify(n)),e.preventDefault()});const s=document.createElement("h2");s.classList.add("todo-title"),s.textContent=e.title;const u=document.createElement("p");u.classList.add("todo-description"),u.textContent=e.description,d.classList.add("remove"),d.textContent="Delete";const p=document.createElement("button");p.addEventListener("click",e=>{let n,o=JSON.parse(localStorage.getItem(t));o.forEach((t,o)=>{t.title===e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent&&(n=o)}),o[n].completed=!0,c(),i(o),localStorage.setItem(t,JSON.stringify(o)),e.preventDefault()}),p.classList.add("status"),p.textContent="done";const m=document.createElement("div");m.classList.add("todo-details");const f=document.createElement("span");f.classList.add("due-date"),f.textContent=e.dueDate;const g=document.createElement("span");a.classList.add("completed"),g.classList.add("priority"),g.textContent=e.priority,m.appendChild(f),m.appendChild(g),e.completed?a.textContent="Done":a.textContent="Missing",m.appendChild(a),r.appendChild(d),r.appendChild(p),o.appendChild(s),o.appendChild(u),o.appendChild(m),o.appendChild(r).classList.add("todo-item"),n.appendChild(o)}const c=()=>{if(l().todos.childNodes){let e=l().todos.lastElementChild;for(;e;)l().todos.removeChild(e),e=l().todos.lastElementChild}},i=e=>{e.forEach(e=>{e&&d(e)})};var a={domComponents:l,renderObject:function(e){const t=document.createElement("li");t.classList.add("project-title");const n=l().projects;t.textContent=e,t.addEventListener("click",e=>{console.log(e.target.textContent);let t=e.target.textContent;l().newTodo.rel=t;let n=JSON.parse(localStorage.getItem(t));c(),i(n),e.preventDefault()}),n.appendChild(t).classList.add("project-item")},renderTodos:d,clearList:c,renderTodoList:i};const s=e=>{o(e),a.renderObject(e),localStorage.setItem(e,JSON.stringify([]))};var u=s,p=e=>{const t=a.domComponents(),n=t.newTodo.rel,o=JSON.parse(localStorage.getItem(n)),l=t.title.value,d=t.description.value,c=t.dueDate.value,i=t.select.options[t.select.options.selectedIndex].value,s=r(l,d,c,i).getTodo();o.push(s),localStorage.setItem(n,JSON.stringify(o)),a.renderTodos(s)},m=()=>{const e=localStorage.getItem("default");if(e){console.log("exists");const t=JSON.parse(e);a.renderObject("default"),a.renderTodoList(t)}else s("default");var t;t="default",a.domComponents().newTodo.rel=t};const f=a.domComponents();m(),f.newProject.addEventListener("click",e=>{let t=f.projectTitle.value;t?(u(t),f.projectTitle.value="",f.newTodo.rel=t,a.clearList(),e.preventDefault()):alert("You should provide a project title"),e.preventDefault()}),f.newTodo.addEventListener("click",e=>{p(e),e.preventDefault()})}]);