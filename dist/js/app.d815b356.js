(function(e){function t(t){for(var n,a,u=t[0],i=t[1],l=t[2],b=0,f=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2fc1":function(e,t){e.exports="data:image/png;base64,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"},"2fda":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("2fc1"),c=r.n(o),a={id:"app"},u=Object(n["e"])("div",null,[Object(n["e"])("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},[Object(n["e"])("a",{class:"navbar-brand",href:"/"},[Object(n["e"])("img",{src:c.a,width:"30",height:"30",class:"d-inline-block align-top",alt:""}),Object(n["d"])(" CoffeeMV ")])])],-1),i={class:"container"},l=Object(n["e"])("h2",null,"Cadastro",-1),s={class:"alert alert-danger",role:"alert"},b=Object(n["d"])(" Campo: "),f={class:"row"},p={class:"col"},d={class:"form-group"},O=Object(n["e"])("label",{for:"inputNome"},"Nome completo:",-1),j={class:"col"},h={class:"form-group"},v=Object(n["e"])("label",{for:"inputCpf"},"CPF:",-1),m=Object(n["e"])("div",{class:"alert alert-info",role:"alert"},"Itens para o Café.",-1),g={class:"row"},A={class:"col"},F={class:"form-group"},y=Object(n["e"])("label",{for:"inputItem"},"Item:",-1),C=Object(n["e"])("input",{type:"submit",value:"Cadastrar",class:"btn btn-info mt-2"},null,-1),E=Object(n["e"])("hr",null,null,-1),D=Object(n["e"])("h2",{class:"mt-4"},"Listagem",-1),x={class:"table table-striped"},k=Object(n["e"])("thead",null,[Object(n["e"])("tr",null,[Object(n["e"])("th",{scope:"col"},"ID"),Object(n["e"])("th",{scope:"col"},"Nome"),Object(n["e"])("th",{scope:"col"},"CPF"),Object(n["e"])("th",{scope:"col"},"Itens"),Object(n["e"])("th",{scope:"col"},"Ações")])],-1),S={scope:"row"};function N(e,t,r,o,c,N){return Object(n["f"])(),Object(n["c"])("div",a,[u,Object(n["e"])("div",i,[l,Object(n["e"])("ul",null,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(c.errors,(function(e,t){return Object(n["f"])(),Object(n["c"])("li",{key:t},[Object(n["e"])("div",s,[b,Object(n["e"])("b",null,Object(n["h"])(e.field),1),Object(n["d"])(" - "+Object(n["h"])(e.defaultMessage),1)])])})),128))]),Object(n["e"])("form",{onSubmit:t[4]||(t[4]=Object(n["k"])((function(){return N.salvar&&N.salvar.apply(N,arguments)}),["prevent"]))},[Object(n["e"])("div",f,[Object(n["e"])("div",p,[Object(n["e"])("div",d,[O,Object(n["j"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"inputNome",placeholder:"Digite seu nome","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.usuario.nome=e})},null,512),[[n["i"],c.usuario.nome]])])]),Object(n["e"])("div",j,[Object(n["e"])("div",h,[v,Object(n["j"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"inputCpf",placeholder:"Digite seu CPF","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.usuario.cpf=e})},null,512),[[n["i"],c.usuario.cpf]])])])]),m,Object(n["e"])("div",g,[Object(n["e"])("div",A,[Object(n["e"])("div",F,[y,Object(n["j"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"inputItem",placeholder:"Digite seu item","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.usuario.item=e})},null,512),[[n["i"],c.usuario.item]])])])]),C],32),E,D,Object(n["e"])("table",x,[k,Object(n["e"])("tbody",null,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(c.usuarios,(function(e){return Object(n["f"])(),Object(n["c"])("tr",{key:e.id},[Object(n["e"])("th",S,Object(n["h"])(e.id),1),Object(n["e"])("td",null,Object(n["h"])(e.nome),1),Object(n["e"])("td",null,Object(n["h"])(e.cpf),1),Object(n["e"])("td",null,Object(n["h"])(e.item),1),Object(n["e"])("td",null,[Object(n["e"])("button",{onClick:function(t){return N.editar(e)},type:"button",class:"btn btn-info"}," Editar ",8,["onClick"]),Object(n["e"])("button",{onClick:function(t){return N.remover(e)},type:"button",class:"btn btn-danger ml-3"},"Excluir",8,["onClick"])])])})),128))])])])])}var I=r("bc3a"),P=r.n(I),w=P.a.create({baseURL:"https://apirest-coffeemv.herokuapp.com/api/"}),M={listar:function(){return w.get("usuarios")},salvar:function(e){return w.post("usuario",e)},atualizar:function(e){return w.put("usuario",e)},deletar:function(e){return w.delete("usuario",{data:e})}},V=r("3d20"),Y=r.n(V),H={data:function(){return{usuario:{id:"",nome:"",cpf:"",item:""},usuarios:[],errors:[]}},mounted:function(){this.listar()},methods:{listar:function(){var e=this;M.listar().then((function(t){e.usuarios=t.data}))},salvar:function(){var e=this;this.usuario.id?M.atualizar(this.usuario).then((function(t){e.usuario={},Y.a.fire("Atualizado com sucesso!",t),e.listar(),e.errors={}})).catch((function(t){e.errors=t.response.data.errors})):M.salvar(this.usuario).then((function(t){e.usuario={},Y.a.fire("Cadastrado com sucesso!",t),e.listar(),e.errors={}})).catch((function(t){e.errors=t.response.data.errors,console.log(t.response)}))},editar:function(e){this.usuario=e},remover:function(e){var t=this;confirm("Deseja excluir o usuario?")&&M.deletar(e).then((function(e){Y.a.fire("Excluido com sucesso!",e),t.listar()})).catch((function(e){t.errors=e.response.data.errors}))}}};r("7507");H.render=N;var J=H;Object(n["b"])(J).mount("#app")},7507:function(e,t,r){"use strict";r("2fda")}});
//# sourceMappingURL=app.d815b356.js.map