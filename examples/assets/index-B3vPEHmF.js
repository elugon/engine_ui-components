import{h as T,g as S,_ as U,q,t as k,r as P,k as _,o as M,A as K,u as Q,j as X,v as Y,C as j,P as V,w as L,S as O,x as Z,D as ee,y as te,f as R,d as ne}from"./template-D_pw7qg9.js";const oe=n=>{const{components:i}=n,s=n.schemaTag??!0,l=n.viewDefinitionTag??!0,c=i.get(T),r=document.createElement("bim-table");r.addEventListener("cellcreated",({detail:f})=>{const{cell:u}=f;u.style.padding="0.25rem 0"}),r.hiddenColumns=["modelID"],r.headersHidden=!0;const m=[];for(const[,f]of c.groups){if(!f)continue;const u={data:{Name:f.name||f.uuid,modelID:f.uuid}};m.push(u)}return r.dataTransform={Name:(f,u)=>{const{modelID:p}=u;if(typeof p!="string")return f;const y=c.groups.get(p);if(!y)return p;const I={};for(const t of y.items)I[t.id]=t.ids;let e;const{schema:o}=y.ifcMetadata;s&&o&&(e=S`
          <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${o}</bim-label>
          `);let b;if(l&&"viewDefinition"in y.ifcMetadata){const t=y.ifcMetadata.viewDefinition;b=S`
          ${t.split(",").map(a=>S`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${a}</bim-label>`)}
        `}return S`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${f}</bim-label>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
            ${e}
            ${b}
          </div>
        </div>
        <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
          <bim-button @click=${()=>{const t=document.createElement("input");t.type="file",t.accept=".ifc",t.multiple=!1,t.addEventListener("change",async()=>{if(!(t.files&&t.files.length===1))return;const a=t.files[0],d=await a.arrayBuffer(),N=await i.get(q).saveToIfc(y,new Uint8Array(d)),E=new File([N],a.name),$=document.createElement("a");$.href=URL.createObjectURL(E),$.download=E.name,$.click(),URL.revokeObjectURL($.href)}),t.click()}} icon="flowbite:download-solid"></bim-button>
          <bim-button @click=${t=>{const a=i.get(U),d=t.target;a.set(d.hasAttribute("data-model-hidden"),I),d.toggleAttribute("data-model-hidden"),d.icon=d.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>
          <bim-button @click=${()=>c.disposeGroup(y)} icon="mdi:delete"></bim-button>
        </div>
       </div>
      `}},r.data=m,S`
    <div>
      ${m.length===0?S`<bim-label>No models has been loaded yet</bim-label>`:r}
    </div>
  `},ie=(n,i=!0)=>{const s=k.create(oe,n);if(i){const{components:l}=n,c=l.get(T),[,r]=s;c.onFragmentsLoaded.add(()=>setTimeout(()=>r())),c.onFragmentsDisposed.add(()=>r())}return s},re=Object.freeze(Object.defineProperty({__proto__:null,modelsList:ie},Symbol.toStringTag,{value:"Module"})),F=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",n=>n.includes("Value"),n=>n.startsWith("Material"),n=>n.startsWith("Relating"),n=>{const i=["IsGroupedBy","IsDecomposedBy"];return n.startsWith("Is")&&!i.includes(n)}];async function W(n,i,s,l=F,c=!1){const r=n.get(_),m=await i.getProperties(s);if(!m)return{data:{Entity:`${s} properties not found...`}};const f=r.relationMaps[i.uuid],u={data:{}};for(const p in m){const y=l.map(e=>typeof e=="string"?p===e:e(p)).includes(!0);if(!(p==="type"||y))continue;const I=m[p];if(I)if(I.type===5){u.children||(u.children=[]);const e=await W(n,i,I.value,l,c);u.children.push(e)}else if(typeof I=="object"&&!Array.isArray(I)){const{value:e,type:o}=I;if(c)o===1||o===2||o===3||(u.data[p]=e);else{const b=typeof e=="number"?Number(e.toFixed(3)):e;u.data[p]=b}}else if(Array.isArray(I))for(const e of I){if(e.type!==5)continue;u.children||(u.children=[]);const o=await W(n,i,e.value,l,c);u.children.push(o)}else if(p==="type"){const e=M[I];u.data.Entity=e}else u.data[p]=I}if(f&&f.get(m.expressID)){const p=f.get(m.expressID);for(const y of l){const I=[];if(typeof y=="string"){const e=r._inverseAttributes.indexOf(y);e!==-1&&I.push(e)}else{const e=r._inverseAttributes.filter(o=>y(o));for(const o of e){const b=r._inverseAttributes.indexOf(o);I.push(b)}}for(const e of I){const o=p.get(e);if(o)for(const b of o){const C=await W(n,i,b,l,c);u.children||(u.children=[]),u.children.push(C)}}}}return u}const se=n=>{const{components:i,fragmentIdMap:s,attributesToInclude:l,editable:c,tableDefinition:r}=n,m=i.get(T);let f;return typeof l=="function"?f=l(F):f=l,S`<bim-table ${P(async p=>{if(!p)return;const y=p,I=[],e=[];for(const o in s){const b=m.list.get(o);if(!(b&&b.group))continue;const C=b.group,x=e.find(h=>h.model===C);if(x)for(const h of s[o])x.expressIDs.add(h);else{const h={model:C,expressIDs:new Set(s[o])};e.push(h)}}for(const o of e){const{model:b,expressIDs:C}=o;for(const x of C){const h=await W(i,b,x,f,c);I.push(h)}}y.dataTransform=r,y.data=I,y.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},ae=n=>k.create(se,n),ce=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:ae},Symbol.toStringTag,{value:"Module"}));function le(n){const i=Object.keys(n).pop();return i&&n[i].length>0?n[i][0]:""}function H(n){return n.map(i=>{const s={data:{System:le(i.filter)}};return i.children&&i.children.length>0&&(s.children=H(i.children)),s})}const ue=n=>{const{components:i,classifications:s}=n,l=i.get(K),c=r=>{if(!r)return;const m=r;m.dataTransform={Actions:p=>p};const f=(p,y={})=>{const I=l.list,e=p[0],o=I[e],b=[];if(!e||!o)return b;for(const C in o){const x={...y,[e]:[C]},h=l.find(x);if(Object.keys(h).length>0){const a={filter:x};a.children=f(p.slice(1),x),b.push(a)}}return b},u=[];for(const p in s){const y=s[p],I=f(y),e=H(I);u.push({data:{System:p},children:e})}m.data=u};return S`
  <div>
    ${Object.keys(s).length===0?S`<bim-label label="No classifications to show"></bim-label>`:S`<bim-table ${P(c)} headers-hidden expanded></bim-table>`}
  </div>
  `},de=(n,i=!0)=>{const s=k.create(ue,n);if(i){const{components:l}=n,c=l.get(T),[,r]=s;c.onFragmentsDisposed.add(()=>r())}return s},fe=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:de},Symbol.toStringTag,{value:"Module"})),me=n=>k.create(Q,n),pe=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:me},Symbol.toStringTag,{value:"Module"})),v=async(n,i,s,l)=>{var p;const c=[],r=n.get(_),m=await i.getProperties(s);if(!m)return c;const{type:f}=m,u={data:{Entity:M[f],Name:(p=m.Name)==null?void 0:p.value,modelID:i.uuid,expressID:s}};for(const y of l){const I=r.getEntityRelations(i,s,y);if(!I)continue;u.children||(u.children=[]),u.data.relations=JSON.stringify(I);const e={};for(const o of I){const b=await v(n,i,o,l);for(const C of b)if(C.data.relations)u.children.push(C);else{const x=i.data.get(o);if(!x){u.children.push(C);continue}const h=x[1][1],t=M[h];t in e||(e[t]=[]),C.data.Entity=C.data.Name,delete C.data.Name,e[t].push(C)}}for(const o in e){const b=e[o],C=b.map(h=>h.data.expressID),x={data:{Entity:o,modelID:i.uuid,relations:JSON.stringify(C)},children:b};u.children.push(x)}}return c.push(u),c},ge=async(n,i,s,l)=>{const c=n.get(_),r=[];for(const m of i){let f;if(l)f={data:{Entity:m.name!==""?m.name:m.uuid},children:await v(n,m,l,s)};else{const u=c.relationMaps[m.uuid],p=await m.getAllPropertiesOfType(Y);if(!(u&&p))continue;const{expressID:y}=Object.values(p)[0];f={data:{Entity:m.name!==""?m.name:m.uuid},children:await v(n,m,y,s)}}r.push(f)}return r};let D;const he=(n,i)=>{const s=n.get(T),{modelID:l,expressID:c,relations:r}=i.data;if(!l)return null;const m=s.groups.get(l);return m?m.getFragmentMap([c,...JSON.parse(r??"[]")]):null},be=n=>{const{components:i,models:s,expressID:l}=n,c=n.selectHighlighterName??"select",r=n.hoverHighlighterName??"hover";D||(D=document.createElement("bim-table"),D.hiddenColumns=["modelID","expressID","relations"],D.columns=["Entity","Name"],D.headersHidden=!0,D.addEventListener("cellcreated",({detail:f})=>{const{cell:u}=f;u.column==="Entity"&&!("Name"in u.rowData)&&(u.style.gridColumn="1 / -1")})),D.addEventListener("rowcreated",f=>{f.stopImmediatePropagation();const{row:u}=f.detail,p=i.get(X),y=he(i,u);y&&Object.keys(y).length!==0&&(u.onmouseover=()=>{r&&(u.style.backgroundColor="var(--bim-ui_bg-contrast-20)",p.highlightByID(r,y,!0,!1,p.selection[c]??{}))},u.onmouseout=()=>{u.style.backgroundColor="",p.clear(r)},u.onclick=()=>{c&&p.highlightByID(c,y,!0,!0)})});const m=n.inverseAttributes??["IsDecomposedBy","ContainsElements"];return ge(i,s,m,l).then(f=>D.data=f),S`${D}`},ye=(n,i=!0)=>{const s=k.create(be,n);if(i){const[,l]=s,{components:c}=n,r=c.get(T),m=c.get(_),f=()=>l({models:r.groups.values()});m.onRelationsIndexed.add(f),r.onFragmentsDisposed.add(f)}return s},Ce=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:ye},Symbol.toStringTag,{value:"Module"})),G=(n,i)=>[...n.get(ne).list.values()].find(c=>c.world===i),Ie=(n,i)=>S`
    <bim-color-input @input=${l=>{const c=l.target;n.color=new R(c.color)}} color=${i}></bim-color-input>
  `,xe=(n,i)=>{const{postproduction:s}=n,l=s.n8ao.configuration;return S`
    <bim-color-input @input=${r=>{const m=r.target;l.color=new R(m.color)}} color=${i}></bim-color-input>
  `},we=(n,i)=>{const{color:s,opacity:l}=JSON.parse(i),{postproduction:c}=n,{customEffects:r}=c;return S`
    <bim-color-input @input=${f=>{const{color:u,opacity:p}=f.target;r.lineColor=new R(u).getHex(),p&&(r.opacity=p/100)}} color=${s} opacity=${l*100}></bim-color-input>
  `},Se=(n,i)=>S`
    <bim-color-input @input=${l=>{const c=l.target,r=new R(c.color);n.material.uniforms.uColor.value=r}} color=${i}></bim-color-input>
  `,Ne=(n,i)=>{const{postproduction:s}=n;return S`
    <bim-checkbox @change=${c=>{const r=c.target;s.setPasses({ao:r.checked})}} .checked=${i}></bim-checkbox>
  `},Oe=(n,i)=>{const{postproduction:s}=n;return S`
    <bim-checkbox @change=${c=>{const r=c.target;s.setPasses({gamma:r.checked})}} .checked=${i}></bim-checkbox>
  `},De=(n,i)=>{const{postproduction:s}=n;return S`
    <bim-checkbox @change=${c=>{const r=c.target;s.setPasses({custom:r.checked})}} .checked=${i}></bim-checkbox>
  `},A=(n,i,s,l=()=>{})=>S`
    <bim-checkbox .checked="${s}" @change="${r=>{const f=r.target.checked;n[i]=f,l(f)}}"></bim-checkbox> 
  `,w=(n,i,s,l)=>{const c={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...l},{slider:r,min:m,max:f,step:u,suffix:p,prefix:y,onInputSet:I}=c;return S`
    <bim-number-input
      .pref=${y}
      .suffix=${p}
      .slider=${r} 
      min=${m} 
      value="${s}" 
      max=${f} 
      step=${u} 
      @change="${o=>{const C=o.target.value;n[i]=C,I(C)}}"
    ></bim-number-input> 
  `},Ee=n=>{const{components:i}=n,s=i.get(j);return S`<bim-table ${P(async c=>{var f,u,p,y,I;if(!c)return;const r=c;r.preserveStructureOnFilter=!0,r.dataTransform={Value:(e,o)=>{const b=o.World,C=s.list.get(b);if(!C)return e;const{scene:x,camera:h,renderer:t}=C,a=o.Name;if(a==="Grid"&&o.IsGridConfig&&typeof e=="boolean"){const d=G(i,C);return d?A(d,"visible",e):e}if(a==="Color"&&o.IsGridConfig&&typeof e=="string"){const d=G(i,C);return d?Se(d,e):e}if(a==="Distance"&&o.IsGridConfig&&typeof e=="number"){const d=G(i,C);return d?w(d.material.uniforms.uDistance,"value",e,{slider:!0,min:300,max:1e3}):e}if(a==="Size"&&o.IsGridConfig&&typeof e=="string"){const d=G(i,C);if(!d)return e;const{x:g,y:N}=JSON.parse(e),E=w(d.material.uniforms.uSize1,"value",g,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),$=w(d.material.uniforms.uSize2,"value",N,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return S`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${E}${$}</div>
          `}if(a==="Near Frustum"&&h.three instanceof V&&typeof e=="number"){const d=h.three;return w(h.three,"near",e,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>d.updateProjectionMatrix()})}if(a==="Far Frustum"&&h.three instanceof V&&typeof e=="number"){const d=h.three;return w(h.three,"far",e,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>d.updateProjectionMatrix()})}if(a==="Field of View"&&h.three instanceof V&&typeof e=="number"){const d=h.three;return w(h.three,"fov",e,{slider:!0,min:10,max:120,onInputSet:()=>d.updateProjectionMatrix()})}if(a==="Invert Drag"&&h.hasCameraControls()&&typeof e=="boolean")return A(h.controls,"dollyDragInverted",e);if(a==="Dolly Speed"&&h.hasCameraControls()&&typeof e=="number")return w(h.controls,"dollySpeed",e,{slider:!0,min:.5,max:3,step:.1});if(a==="Truck Speed"&&h.hasCameraControls()&&typeof e=="number")return w(h.controls,"truckSpeed",e,{slider:!0,min:.5,max:6,step:.1});if(a==="Smooth Time"&&h.hasCameraControls()&&typeof e=="number")return w(h.controls,"smoothTime",e,{slider:!0,min:.01,max:2,step:.01});if(a==="Intensity"&&typeof e=="number"){if(o.Light&&typeof o.Light=="string"){const d=x.three.children.find(g=>g.uuid===o.Light);return d&&d instanceof L?w(d,"intensity",e,{slider:!0,min:0,max:10,step:.1}):e}if(o.IsAOConfig&&t instanceof O)return w(t.postproduction.n8ao.configuration,"intensity",e,{slider:!0,max:16,step:.1})}if(a==="Color"&&typeof e=="string"){const d=o.Light,g=x.three.children.find(N=>N.uuid===d);if(g&&g instanceof L)return Ie(g,e);if(o.IsAOConfig&&t instanceof O)return xe(t,e)}if(a==="Ambient Oclussion"&&typeof e=="boolean"&&o.IsAOConfig&&t instanceof O)return Ne(t,e);if(a==="Half Resolution"&&o.IsAOConfig&&t instanceof O&&typeof e=="boolean")return A(t.postproduction.n8ao.configuration,"halfRes",e);if(a==="Screen Space Radius"&&o.IsAOConfig&&t instanceof O&&typeof e=="boolean")return A(t.postproduction.n8ao.configuration,"screenSpaceRadius",e);if(a==="Radius"&&o.IsAOConfig&&t instanceof O&&typeof e=="number")return w(t.postproduction.n8ao.configuration,"aoRadius",e,{slider:!0,max:2,step:.1});if(a==="Denoise Samples"&&o.IsAOConfig&&t instanceof O&&typeof e=="number")return w(t.postproduction.n8ao.configuration,"denoiseSamples",e,{slider:!0,min:1,max:16});if(a==="Samples"&&o.IsAOConfig&&t instanceof O&&typeof e=="number")return w(t.postproduction.n8ao.configuration,"aoSamples",e,{slider:!0,min:1,max:16});if(a==="Denoise Radius"&&o.IsAOConfig&&t instanceof O&&typeof e=="number")return w(t.postproduction.n8ao.configuration,"denoiseRadius",e,{slider:!0,min:0,max:16,step:.1});if(a==="Distance Falloff"&&o.IsAOConfig&&t instanceof O&&typeof e=="number")return w(t.postproduction.n8ao.configuration,"distanceFalloff",e,{slider:!0,min:0,max:4,step:.1});if(a==="Directional Light"&&o.Light&&typeof o.Light=="string"&&typeof e=="boolean"){const d=x.three.children.find(g=>g.uuid===o.Light);return d&&d instanceof L?A(d,"visible",e):e}if(a==="Ambient Light"&&o.Light&&typeof o.Light=="string"&&typeof e=="boolean"){const d=x.three.children.find(g=>g.uuid===o.Light);return d&&d instanceof L?A(d,"visible",e):e}if(a==="Position"&&o.Light&&typeof o.Light=="string"&&typeof e=="string"){const d=x.three.children.find(J=>J.uuid===o.Light);if(!(d&&d instanceof L))return e;const{x:g,y:N,z:E}=JSON.parse(e),$=w(d.position,"x",g,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),z=w(d.position,"y",N,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),B=w(d.position,"z",E,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return S`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${$}${z}${B}</div>
          `}return a==="Custom Effects"&&o.IsCEConfig&&t instanceof O&&typeof e=="boolean"?De(t,e):a==="Color"&&o.IsOutlineConfig&&t instanceof O&&typeof e=="string"?we(t,e):a==="Tolerance"&&o.IsOutlineConfig&&t instanceof O&&typeof e=="number"?w(t.postproduction.customEffects,"tolerance",e,{slider:!0,min:0,max:6,step:.01}):a==="Outline"&&o.IsOutlineConfig&&t instanceof O&&typeof e=="boolean"?A(t.postproduction.customEffects,"outlineEnabled",e):a==="Gloss"&&o.IsGlossConfig&&t instanceof O&&typeof e=="boolean"?A(t.postproduction.customEffects,"glossEnabled",e):a==="Min"&&o.IsGlossConfig&&t instanceof O&&typeof e=="number"?w(t.postproduction.customEffects,"minGloss",e,{slider:!0,min:-.5,max:.5,step:.01}):a==="Max"&&o.IsGlossConfig&&t instanceof O&&typeof e=="number"?w(t.postproduction.customEffects,"maxGloss",e,{slider:!0,min:-.5,max:.5,step:.01}):a==="Exponent"&&o.IsGlossConfig&&t instanceof O&&typeof e=="number"?w(t.postproduction.customEffects,"glossExponent",e,{slider:!0,min:0,max:5,step:.01}):a==="Gamma Correction"&&o.IsGammaConfig&&t instanceof O&&typeof e=="boolean"?Oe(t,e):e}},r.addEventListener("cellcreated",({detail:e})=>{const o=e.cell.parentNode;if(!o)return;const b=o.querySelector("bim-table-cell[column='Name']"),C=o.querySelector("bim-table-cell[column='Value']");b&&!C&&(b.style.gridColumn="1 / -1")});const m=[];for(const[,e]of s.list){const{scene:o,camera:b,renderer:C}=e,x=G(i,e),h={data:{Name:e instanceof Z&&e.name||e.uuid},children:[]};if(o){const t={data:{Name:"Scene"}};if(x){const g={data:{Name:"Grid",Value:x.three.visible,World:e.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",get Value(){return`#${x.material.uniforms.uColor.value.getHexString()}`},World:e.uuid,IsGridConfig:!0}},{data:{Name:"Size",get Value(){const N=x.material.uniforms.uSize1.value,E=x.material.uniforms.uSize2.value;return JSON.stringify({x:N,y:E})},World:e.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:x.material.uniforms.uDistance.value,World:e.uuid,IsGridConfig:!0}}]};t.children||(t.children=[]),t.children.push(g)}const a=o.three.children.filter(g=>g instanceof ee);for(const g of a){const N={data:{Name:"Directional Light",Value:g.visible,World:e.uuid,Light:g.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(g.position),World:e.uuid,Light:g.uuid}},{data:{Name:"Intensity",Value:g.intensity,World:e.uuid,Light:g.uuid}},{data:{Name:"Color",Value:`#${g.color.getHexString()}`,World:e.uuid,Light:g.uuid}}]};t.children||(t.children=[]),t.children.push(N)}const d=o.three.children.filter(g=>g instanceof te);for(const g of d){const N={data:{Name:"Ambient Light",Value:g.visible,World:e.uuid,Light:g.uuid},children:[{data:{Name:"Intensity",Value:g.intensity,World:e.uuid,Light:g.uuid}},{data:{Name:"Color",Value:`#${g.color.getHexString()}`,World:e.uuid,Light:g.uuid}}]};t.children||(t.children=[]),t.children.push(N)}t.children&&((f=t.children)==null?void 0:f.length)>0&&((u=h.children)==null||u.push(t))}if(b.three instanceof V){const t={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:b.three.near,World:e.uuid}},{data:{Name:"Far Frustum",Value:b.three.far,World:e.uuid}},{data:{Name:"Field of View",Value:b.three.fov,World:e.uuid}}]};if(b.hasCameraControls()){const{controls:a}=b,d={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const g in d){const N=a[g];N!=null&&((p=t.children)==null||p.push({data:{Name:d[g],Value:N,World:e.uuid}}))}}(y=h.children)==null||y.push(t)}if(C instanceof O){const{postproduction:t}=C,a=t.n8ao.configuration,d={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:t.settings.gamma??!1,World:e.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:t.settings.ao??!1,World:e.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:a.aoSamples,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${a.color.getHexString()}`,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:a.halfRes,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:a.screenSpaceRadius,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:a.aoRadius,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:a.intensity,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:a.distanceFalloff,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:a.denoiseSamples,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:a.denoiseRadius,World:e.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:t.settings.custom??!1,World:e.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:t.customEffects.glossEnabled,World:e.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:t.customEffects.minGloss,World:e.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:t.customEffects.maxGloss,World:e.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:t.customEffects.glossExponent,World:e.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:t.customEffects.outlineEnabled,World:e.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const g=new R(t.customEffects.lineColor),N=t.customEffects.opacity;return JSON.stringify({color:`#${g.getHexString()}`,opacity:N})},World:e.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:t.customEffects.tolerance,World:e.uuid,IsOutlineConfig:!0}}]}]}]};(I=h.children)==null||I.push(d)}m.push(h)}r.columns=[{name:"Name",width:"11rem"}],r.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],r.data=m})} headers-hidden expanded></bim-table>`},$e=(n,i=!0)=>{const s=k.create(Ee,n);if(i){const[l]=s,c=()=>s[1](),{components:r}=n,m=r.get(j);m.onDisposed.add(l.remove);for(const[,f]of m.list)f.onDisposed.add(c);l.addEventListener("disconnected",()=>{m.onDisposed.remove(l.remove);for(const[,f]of m.list)f.onDisposed.remove(c)})}return s},Ae=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:$e},Symbol.toStringTag,{value:"Module"})),ke={...re,...ce,...fe,...pe,...Ce,...Ae};export{ke as t};