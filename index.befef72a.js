var e=document.querySelector(".logo"),t=document.body,n=new Promise(function(t,n){e.addEventListener("click",function(){var e=document.createElement("div");e.classList.add("message"),e.textContent="Promise was resolved!",t(e)})}),o=new Promise(function(e,t){setTimeout(function(){var e=document.createElement("div");e.classList.add("message","error-message"),e.textContent="Promise was rejected!",t(e)},3e3)});n.then(function(e){t.append(e)}),o.catch(function(e){t.append(e)});
//# sourceMappingURL=index.befef72a.js.map
