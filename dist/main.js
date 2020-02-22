!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=e=>({getName:()=>e}),r=(e,t,o,n,r=!1)=>({getTodo:()=>({title:e,description:t,dueDate:o,priority:n,completed:r})});const l=()=>{let e=document.getElementById("new-project"),t=document.getElementById("new-todo"),o=document.getElementById("projects"),n=document.getElementById("todos"),r=document.querySelector('input[name="project-title"]');return{newProject:e,newTodo:t,projects:o,todos:n,title:document.querySelector('input[name="title"]'),description:document.querySelector('input[name="description"]'),dueDate:document.querySelector('input[name="due-date"]'),select:document.querySelector('select[name="priority"]'),projectTitle:r}};function i(e){const t=l().newTodo.rel?l().newTodo.rel:"defaultProject",o=l().todos,n=document.createElement("li"),r=document.createElement("div"),i=document.createElement("button"),c=document.createElement("span");i.addEventListener("click",e=>{let o=JSON.parse(localStorage.getItem(t)).filter(t=>t.title!==e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);d(),a(o),localStorage.setItem(t,JSON.stringify(o)),e.preventDefault()});const s=document.createElement("h2");s.classList.add("todo-title"),s.textContent=e.title;const u=document.createElement("p");u.classList.add("todo-description"),u.textContent=e.description,i.classList.add("remove"),i.textContent="Delete";const p=document.createElement("button");p.addEventListener("click",e=>{let o,n=JSON.parse(localStorage.getItem(t));n.forEach((t,n)=>{t.title===e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent&&(o=n)}),n[o].completed=!0,d(),a(n),localStorage.setItem(t,JSON.stringify(n)),e.preventDefault()}),p.classList.add("status"),p.textContent="done";const m=document.createElement("div");m.classList.add("todo-details");const g=document.createElement("span");g.classList.add("due-date"),g.textContent=e.dueDate;const f=document.createElement("span");c.classList.add("completed"),f.classList.add("priority"),f.textContent=e.priority,m.appendChild(g),m.appendChild(f),e.completed?c.textContent="Done":c.textContent="Missing",m.appendChild(c),r.appendChild(i),r.appendChild(p),n.appendChild(s),n.appendChild(u),n.appendChild(m),n.appendChild(r).classList.add("todo-item"),o.appendChild(n)}const d=()=>{if(l().todos.childNodes){let e=l().todos.lastElementChild;for(;e;)l().todos.removeChild(e),e=l().todos.lastElementChild}},a=e=>{e.forEach(e=>{e&&i(e)})};var c={domComponents:l,renderObject:function(e){const t=document.createElement("li");t.classList.add("project-title");const o=l().projects;t.textContent=e,t.addEventListener("click",e=>{console.log(e.target.textContent);let t=e.target.textContent;l().newTodo.rel=t;let o=JSON.parse(localStorage.getItem(t));d(),a(o),e.preventDefault()}),o.appendChild(t).classList.add("project-item")},renderTodos:i,clearList:d,renderTodoList:a};var s=e=>{n(e),c.renderObject(e),localStorage.setItem(e,JSON.stringify([]))},u=e=>{const t=c.domComponents(),o=t.newTodo.rel,n=JSON.parse(localStorage.getItem(o)),l=t.title.value,i=t.description.value,d=t.dueDate.value,a=t.select.options[t.select.options.selectedIndex].value,s=r(l,i,d,a).getTodo();n.push(s),localStorage.setItem(o,JSON.stringify(n)),c.renderTodos(s)};!function(){if(!localStorage.getItem("defaultProject")){let e=[{title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",dueDate:Date(Date.now()),priority:"low",completed:!1},{title:"Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",dueDate:Date(Date.now()),priority:"medium",completed:!1},{title:"dolor",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",dueDate:Date(Date.now()),priority:"low",completed:!0}];localStorage.setItem("defaultProject",JSON.stringify(e))}const e=localStorage;for(var t=0;t<e.length;t++){let o=e.key(t);c.renderObject(o)}let o=JSON.parse(localStorage.getItem("defaultProject"));c.renderTodoList(o)}();const p=c.domComponents();p.newProject.addEventListener("click",e=>{let t=p.projectTitle.value;t?(s(t),p.projectTitle.value="",p.newTodo.rel=t,c.clearList(),e.preventDefault()):alert("You should provide a project title"),e.preventDefault()}),p.newTodo.addEventListener("click",e=>{u(e),e.preventDefault()})}]);