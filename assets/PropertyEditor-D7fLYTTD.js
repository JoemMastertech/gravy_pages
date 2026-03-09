const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BK4cBDDl.js","assets/index-DtmOlEoJ.css","assets/AuthService-CSunz10s.js","assets/OptionsBuilderWidget-DIdJ6_zu.js","assets/jsxRuntime.module-DXxIPU_u.js","assets/useAdminStore-DbFH5Z0j.js","assets/SidebarManager-DmCFjbEU.js","assets/ProductFormWidget-C9ECliam.js","assets/MenuSheetEditorWidget-DRI30dkN.js","assets/BrandingWidget-ERroERfw.js","assets/HiddenProductsWidget-BY9n68Am.js","assets/MixerWidget-CTYvHpMu.js"])))=>i.map(i=>d[i]);
var Ot=Object.defineProperty;var Ht=(e,t,i)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Be=(e,t,i)=>Ht(e,typeof t!="symbol"?t+"":t,i);import{L as ye,_ as b,g as Nt,A as $,f as it,e as H,M as _e}from"./index-BK4cBDDl.js";import ge from"./SidebarManager-DmCFjbEU.js";const I=class I{constructor(t){this.config=t,this.container=document.createElement("div"),this.container.className="media-uploader",this.render()}render(){const{type:t,initialUrl:i}=this.config,s=t==="image"?"image/webp":"video/webm,image/webp",n=t==="image"?"Imagen (WebP)":"Video (WebM)",a="https://convertio.co/es/";this.container.innerHTML=`
            <div class="uploader-label">
                <span>${n}</span>
                <a href="${a}" target="_blank" class="help-link" title="Convertir archivos">?</a>
            </div>
            
            <div class="uploader-dropzone ${i?"has-file":""}" id="dropzone-${t}">
                <!-- Preview Layer -->
                ${this._renderPreview(t,i)}
                
                <!-- Action Layer (Hidden when has-file unless hover) -->
                <div class="uploader-actions">
                    <span class="icon">☁️</span>
                    <p class="instruction">Arrastra tu ${t==="image"?".webp":".webm"} aquí</p>
                    <button type="button" class="btn-micro">O selecciona</button>
                </div>

                <!-- Hidden Input -->
                <input type="file" accept="${s}" class="hidden-input">
                
                <!-- Loading Layer (Progress) -->
                <div class="uploader-loading hidden">
                    <div class="spinner"></div>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: 0%"></div>
                    </div>
                    <span class="progress-text">Subiendo... 0%</span>
                </div>
            </div>
            <div class="uploader-error hidden"></div>
        `,this._bindEvents()}_renderPreview(t,i){return i?i.toLowerCase().endsWith(".webp")||t==="image"?`<img src="${i}" class="preview-media" alt="Preview">`:`<video src="${i}" class="preview-media" muted loop autoplay></video>`:""}_bindEvents(){const t=this.container.querySelector(".uploader-dropzone"),i=this.container.querySelector(".hidden-input");this.container.querySelector("button"),t.addEventListener("click",()=>i.click()),["dragenter","dragover"].forEach(s=>{t.addEventListener(s,n=>{n.preventDefault(),n.stopPropagation(),t.classList.add("drag-active")})}),["dragleave","drop"].forEach(s=>{t.addEventListener(s,n=>{n.preventDefault(),n.stopPropagation(),t.classList.remove("drag-active")})}),i.addEventListener("change",s=>this._handleFiles(s.target.files)),t.addEventListener("drop",s=>this._handleFiles(s.dataTransfer.files))}async _handleFiles(t){if(!t||t.length===0)return;const i=t[0],{type:s}=this.config;if(!(s==="image"?["image/webp"]:["video/webm","image/webp"]).includes(i.type)){this._showError(`Formato incorrecto. Por favor usa ${s==="image"?".webp":".webm"} por velocidad.`);return}if(i.size>5*1024*1024){this._showError("El archivo es muy pesado (Max 5MB).");return}this._setLoading(!0),this._showError(null),I.activeUploadCount++,window.dispatchEvent(new CustomEvent("MEDIA_UPLOAD_PROGRESS",{detail:{active:!0,count:I.activeUploadCount}}));let a=0;const o=setInterval(()=>{a+=Math.random()*10,a>90&&(a=90),this._updateProgress(Math.floor(a))},300);try{ye.info(`[MediaUploader] Starting upload for ${i.name} (${(i.size/1024).toFixed(1)} KB)`);const r=await b(()=>import("./index-BK4cBDDl.js").then(_=>_.m),__vite__mapDeps([0,1])),c=new r.default,{category:d}=this.config,u=(d||"default").toLowerCase().trim().replace(/\s+/g,"_"),l=s==="image"?"webp":"webm",p=s==="image"?"imagenes":"videos",m=["pizzas","alitas","platos_fuertes","cortes_de_carne","ensaladas","sopas","snacks","postres","comida","cafe","cocteleria"].includes(u)?"comida":"bebidas",g=`${Date.now()}_${Math.random().toString(36).substring(7)}.${l}`,h=`${p}/${m}/${u}/${g}`,v=await c.uploadFile(i,h);if(clearInterval(o),this._updateProgress(100),v)setTimeout(()=>{this._handleSuccess(v)},500);else throw new Error("Upload returned null URL")}catch(r){clearInterval(o),console.error("MediaUploader Error:",r);const c=r.message||"Error desconocido";this._showError(`Error: ${c}`)}finally{I.activeUploadCount=Math.max(0,I.activeUploadCount-1),window.dispatchEvent(new CustomEvent("MEDIA_UPLOAD_PROGRESS",{detail:{active:I.activeUploadCount>0,count:I.activeUploadCount}})),this._setLoading(!1)}}_handleSuccess(t){const i=this.container.querySelector(".uploader-loading");i.innerHTML=`
            <div class="success-icon">✅</div>
            <span>¡Carga Exitosa!</span>
        `,setTimeout(()=>{this._setLoading(!1),i.innerHTML=`
                 <div class="spinner"></div>
                 <div class="progress-bar-container">
                    <div class="progress-bar" style="width: 0%"></div>
                 </div>
                 <span class="progress-text">Subiendo... 0%</span>
            `;const s=this.container.querySelector(".uploader-dropzone"),n=s.querySelector(".preview-media");n&&n.remove();const a=this._renderPreview(this.config.type,t);s.insertAdjacentHTML("afterbegin",a),s.classList.add("has-file"),this.config.onUploadSuccess&&this.config.onUploadSuccess(t)},1500)}_setLoading(t){const i=this.container.querySelector(".uploader-loading");t?i.classList.remove("hidden"):i.classList.add("hidden")}_updateProgress(t){const i=this.container.querySelector(".progress-bar"),s=this.container.querySelector(".progress-text");i&&(i.style.width=`${t}%`),s&&(s.textContent=`Subiendo... ${t}%`)}_showError(t){const i=this.container.querySelector(".uploader-error");t?(i.textContent=t,i.classList.remove("hidden")):i.classList.add("hidden")}getElement(){return this.container}};Be(I,"activeUploadCount",0);let N=I;const J={toEditor(e){if(!e)return null;const t=e.categoria||"default",i=Nt(t),s=(i.fields||[]).map(m=>typeof m=="object"?m.key:m),n=["thumbnail","imagen","ruta_archivo"],a=n.find(m=>e[m]!==void 0&&e[m]!==null&&e[m]!==""),o=s.find(m=>n.includes(m))||"imagen",r=a||o;i.tableName;const c={name:"nombre",description:s.includes("ingredientes")?"ingredientes":s.includes("descripcion")?"descripcion":null,imageColumn:r,videoColumn:s.includes("video")?"video":null,tableName:i.tableName||"products"},d={},u={};(i.priceFields||[]).forEach(m=>{const g=typeof m=="object"?m.key:m,h=typeof m=="object"?m.column:m;u[g]=h,e[h]!==void 0&&e[h]!==null?d[g]=e[h]:d[g]=null}),Object.keys(u).length===0&&s.includes("precio")&&(u.standard="precio",e.precio!==void 0&&e.precio!==null?d.standard=e.precio:d.standard=null);const p={},f={};return s.forEach(m=>{if(m.startsWith("mixers_")){const g=m.replace("mixers_","");f[g]=m,e[m]!==void 0&&(p[g]=this._normalizeMixersToStructured(e[m]))}}),{id:e.id,category:t,tableName:c.tableName,name:e[c.name]||"Sin Nombre",description:e[c.description]||"",opciones_personalizadas:e.opcionesPersonalizadas||e.opciones_personalizadas||[],prices:d,presentaciones:e.presentaciones||void 0,mixers:p,media:{image:this._resolveMediaUrl(e[c.imageColumn]),video:this._resolveMediaUrl(e[c.videoColumn])},flags:{isAvailable:e.disponible!==!1,isHidden:!!e.hidden},restaurantId:e.restaurant_id||e.restaurante_id||null,_isCustom:!!e.is_custom,_keysMap:{core:{...c,ownerColumn:e.restaurant_id!==void 0?"restaurant_id":"restaurante_id"},prices:u,mixers:f},_schema:i,_original:e}},toPersistence(e,t){const i={},s=t.core||t,n=t.prices||t,a=t.mixers||t;if(e.name!==void 0&&s.name&&(i[s.name]=e.name),e.description!==void 0&&s.description&&(i[s.description]=e.description),e.prices&&Object.keys(e.prices).forEach(o=>{const r=n[o];r&&(i[r]=e.prices[o])}),e.presentaciones&&(i.presentaciones=e.presentaciones),e.mixers&&Object.keys(e.mixers).forEach(o=>{if(a[o]){const r=e.mixers[o];Array.isArray(r)&&r.length>0&&typeof r[0]=="object"&&r[0].label!==void 0?i[a[o]]=r:Array.isArray(r)?i[a[o]]=r.map(c=>typeof c=="string"?c.trim():"").filter(c=>c!=="").map(c=>({id:c,label:c,default:!1})):typeof r=="string"?i[a[o]]=r.split(",").map(c=>c.trim()).filter(c=>c!=="").map(c=>({id:c,label:c,default:!1})):i[a[o]]=[]}}),e.media&&(e.media.image!==void 0&&s.imageColumn&&(i[s.imageColumn]=e.media.image),e.media.video!==void 0&&s.videoColumn&&(i[s.videoColumn]=e.media.video)),e.flags&&(e.flags.isAvailable!==void 0&&(i.disponible=e.flags.isAvailable),e.flags.isHidden!==void 0&&(i.hidden=e.flags.isHidden)),e.opciones_personalizadas!==void 0){let o=e.opciones_personalizadas;if(typeof o=="string"&&o.trim().startsWith("["))try{o=JSON.parse(o)}catch(r){console.warn("[ProductAdapter] Error parseando opciones_personalizadas para persistencia:",r)}i.opciones_personalizadas=o}return i},_normalizeMixersToStructured(e){return e?Array.isArray(e)&&e.length>0&&typeof e[0]=="object"&&e[0].label!==void 0?e:Array.isArray(e)?e.map(t=>typeof t=="string"?t.trim():"").filter(t=>t!=="").map(t=>({id:t,label:t,default:!1})):typeof e=="string"?e.split(",").map(t=>t.trim()).filter(t=>t!=="").map(t=>({id:t,label:t,default:!1})):[]:[]},_resolveMediaUrl(e){return e?e.startsWith("http")||e.startsWith("/assets")||e.startsWith("data:")?e:`${window.VITE_SUPABASE_URL||"https://paoisqasrqfujlqnzxow.supabase.co"}/storage/v1/object/public/productos/${e}`:null}},Re={templateShell(e){const t=[{id:"products",label:"Editar Productos"},{id:"menus",label:"Hojas del Menú"},{id:"branding",label:"Identidad del Menú"},{id:"hidden",label:"Productos Ocultos"}];return`
            <div class="admin-panel-container panel-glow">
                <div class="admin-viewport" id="admin-viewport">
                    <!-- 1. Header -->
                    <header class="admin-header">
                        <div class="header-title-block">
                            <div class="icon-box">
                                <span class="material-icons-round">settings_suggest</span>
                            </div>
                            <h1>Modo Administración</h1>
                        </div>
                        <div class="header-actions">
                            <button class="btn-icon-ghost wide-mode-btn" title="${e.isWide?"Restaurar":"Pantalla Completa"}">
                                <span class="material-icons-round">${e.isWide?"close_fullscreen":"fullscreen"}</span>
                            </button>

                            <button class="btn-logout exit-admin-btn">
                                <span class="material-icons-round">logout</span>
                                <span>Salir</span>
                            </button>
                        </div>
                    </header>

                    <!-- 2. Tabs -->
                    <nav class="admin-nav-tabs">
                        <div class="tabs-wrapper">
                            ${t.map(i=>`
                                <button class="tab-btn ${e.activeTab===i.id?"active-tab":""}" 
                                        data-tab="${i.id}">
                                    ${i.label}
                                </button>
                            `).join("")}
                        </div>
                    </nav>

                    ${e.activeTab==="products"?`
                    <!-- 2.5 Action Bar (Global + Nuevo) -->
                    <div class="global-action-bar" style="padding: 12px 20px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.05); display: flex; justify-content: flex-start;">
                        <button class="btn btn-primary btn-create-custom-product nav-button" 
                                style="
                                    width: auto; 
                                    padding: 0 24px; 
                                    height: 38px;
                                    border-radius: 8px; 
                                    font-size: 13px;
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                ">
                            <span class="material-icons-round" style="font-size: 18px; margin-right: 6px;">add_circle</span>
                            <span class="btn-text">Nuevo Producto</span>
                        </button>
                    </div>
                    `:""}

                    <!-- 3. Content Area -->
                    <main class="admin-main-content relative bg-grid" id="admin-dynamic-content">
                        <div class="background-effects">
                            <div class="grid-pattern"></div>
                            <div class="glow-orb"></div>
                        </div>
                        <!-- Dynamic Injection -->
                    </main>

                    <!-- Footer (Now Dynamic/Scrollable at the end of viewport) -->
                    <footer class="admin-footer">
                        <div class="footer-left">
                            <div class="status-indicator">
                                <span class="ping-dot">
                                    <span class="ping-wave"></span>
                                    <span class="ping-solid"></span>
                                </span>
                                <span>Conectado</span>
                            </div>
                            <div class="separator"></div>
                            <div class="metric">
                                <span class="material-icons-round small">speed</span>
                                <span>Latencia: <span class="value">24ms</span></span>
                            </div>
                        </div>
                        <div class="footer-right">
                            <div class="build-info">
                                Build Status: <span class="stable">STABLE</span>
                            </div>
                            <div class="version-badge">v3.0.0-modular</div>
                        </div>
                    </footer>
                </div> <!-- End admin-viewport -->
            </div>
        `},templateHub(e=null){return`
            <div class="admin-dashboard-view">
                <div class="central-content">
                    <div class="icon-halo-wrapper">
                        <div class="halo-bg"></div>
                        <div class="icon-circle">
                             <span class="material-icons-round big-icon">ads_click</span>
                             <div class="sub-icon-badge">
                                <span class="material-icons-round">touch_app</span>
                             </div>
                        </div>
                    </div>
                    
                    <h2>Selecciona un Producto</h2>
                    <p class="description">
                        Haz clic en cualquier tarjeta o fila del menú lateral para editar sus propiedades, precios y disponibilidad en tiempo real.
                    </p>
                    
                    <div class="system-tip-box">
                        <span class="material-icons-round info-icon">info</span>
                        <div class="tip-content">
                            <p class="tip-title">Sugerencia del sistema</p>
                            <p class="tip-text">Los cambios realizados se guardan como "Overrides" locales automáticamente en su sesión actual.</p>
                        </div>
                    </div>
                </div>
            </div>
        `},templatePlaceholder(e,t,i){return`
            <div class="admin-dashboard-view">
                 <div class="central-content">
                    <div class="hero-icon-wrapper">
                        <div class="icon-circle">
                             <span class="material-icons-round placeholder-icon">${e}</span>
                        </div>
                    </div>
                    <h3>${t}</h3>
                    <p>${i}</p>
                    <div class="pending-module-box">
                        <code class="pending-module-label">Module Pending Implementation</code>
                    </div>
                </div>
            </div>
        `}},st={render(e){const t=this._renderHeader(e),i=this._renderSection(e,["imagen","thumbnail","ruta_archivo","video"]),s=this._renderInstructions(e),n=this._renderSection(e,["mixers_botella","mixers_litro","mixers_copa"]);return`
            <style>
                /* Phase 13: Admin Mixer Grid Styles (Modal Parity using btn-primary) */
                .admin-mixer-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    margin-top: 10px;
                }
                @media (max-width: 768px) {
                    .admin-mixer-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 480px) {
                    .admin-mixer-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                /* Modifiers to adapt btn btn-primary correctly as a container */
                .admin-mixer-btn.btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    padding-right: 36px; /* Space for the absolute close button */
                    width: 100%;
                    cursor: default; /* Optional, makes it feel like an item, not an action */
                }
                .admin-mixer-label {
                    flex: 1;
                    text-align: center;
                    pointer-events: none; /* Passes clicks through */
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .admin-mixer-remove {
                    background: transparent;
                    border: none;
                    color: rgba(239, 68, 68, 0.7); /* muted red base */
                    cursor: pointer;
                    font-size: 20px;
                    padding: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: color 0.2s, transform 0.2s;
                }
                .admin-mixer-remove:hover {
                    color: rgba(239, 68, 68, 1); /* bright red */
                    transform: translateY(-50%) scale(1.15);
                }
            </style>
            <div class="admin-product-form-wrapper">
                ${t}

                <div class="form-body">
                    <form id="property-editor-form" class="editor-form">
                        <div class="editor-grid-layout">
                            
                            <!-- ROW 1: Basic & Prices -->
                            <!-- ROW 1: Basic Info (Full Width) -->
                            <div class="editor-full-width-column">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">info</span>
                                        <h5>Información Básica</h5>
                                    </div>
                                    ${this._renderField("nombre",e)}
                                    ${this._renderSection(e,["ingredientes","descripcion","opciones_personalizadas"])}
                                </div>
                            </div>

                            <!-- ROW 2: Prices (Full Width) -->
                            <div class="editor-full-width-column">
                                <div class="editor-section-card highlight">
                                    <div class="section-header">
                                        <span class="material-icons-round">monetization_on</span>
                                        <h5>Precios y Presentaciones</h5>
                                    </div>
                                    <div class="price-grid-layout">
                                        ${this._renderPriceInputs(e)}
                                    </div>
                                </div>
                            </div>

                            <!-- ROW 2: FULL WIDTH MULTIMEDIA & HELP -->
                            <div class="editor-full-width">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">camera</span>
                                        <h5>Multimedia y Optimización</h5>
                                    </div>
                                    <div class="multimedia-help-grid">
                                        <div class="uploaders-zone">
                                            ${i}
                                        </div>
                                        <div class="instructions-zone">
                                            <div class="helper-box">
                                                <p class="helper-intro">Para que tu menú cargue el contenido multimedia rapidamente, requerimos formatos de última generación:</p>
                                                
                                                ${s}

                                                <div class="converter-invite">
                                                    <p>¿Tus archivos no están listos?</p>
                                                    <a href="https://www.cloudconvert.com/" target="_blank" class="cloud-link">
                                                        Convertir archivos gratis en CloudConvert
                                                        <span class="material-icons-round">open_in_new</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- ROW 3: Visibility Toggle -->
                            <div class="editor-full-width-column">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">visibility</span>
                                        <h5>Estado de Visibilidad</h5>
                                    </div>
                                    ${this._renderVisibilityToggle(e)}
                                    <p class="field-hint">Al guardar, este cambio se aplicará al menú de tus clientes de forma inmediata.</p>
                                </div>
                            </div>

                            <!-- ROW 4: Mixers only (flags consolidated into Visibility Toggle above) -->
                            <div class="editor-full-width-column">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">liquor</span>
                                        <h5>Acompañantes (Mixers)</h5>
                                    </div>
                                    <div class="mixers-full-width-layout">
                                        ${n}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="editor-actions-end">
                            <button
                                type="button"
                                class="btn btn-ghost btn-reset-product"
                                data-is-custom="${e._isCustom?"true":"false"}"
                            >
                                <span class="material-icons-round">${e._isCustom?"delete_forever":"history"}</span>
                                <span>${e._isCustom?"Eliminar Producto":"Restaurar Original"}</span>
                            </button>
                            <button type="submit" class="btn btn-primary btn-save">
                                <span class="material-icons-round">save</span>
                                <span>Guardar Cambios</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `},_renderInstructions(e){const t=(e.category||"").toLowerCase().trim().replace(/\s+/g,"_"),i=["cocteleria","alitas","pizzas","ensaladas","sopas","cortes_de_carne","platos_fuertes","snacks","cafe","postres"].some(n=>t.includes(n));return["whisky","ron","vodka","ginebra","mezcal","espumosos","cognac","tequila","digestivos","brandy"].some(n=>t.includes(n))?`
                <div class="format-item">
                    <span class="format-icon">📷</span>
                    <div class="format-info">
                        <strong>Usa formato .WEBP ANIMADO</strong>
                        <span>1:1 Cuadrado - Más ligero que el MP4</span>
                    </div>
                </div>
            `:i?`
                <div class="format-item">
                    <span class="format-icon">📷</span>
                    <div class="format-info">
                        <strong>Fotos: Usa formato .WEBP</strong>
                        <span>Estático para el menú base</span>
                    </div>
                </div>
                <div class="format-item">
                    <span class="format-icon">🎥</span>
                    <div class="format-info">
                        <strong>Videos: Usa formato .WEBM</strong>
                        <span>16:9 Wide - Reproducción sin pausa</span>
                    </div>
                </div>
            `:`
            <div class="format-item">
                <span class="format-icon">📷</span>
                <div class="format-info">
                    <strong>Fotos: Usa formato .WEBP</strong>
                    <span>1:1 Cuadrado - Máxima nitidez</span>
                </div>
            </div>
        `},_renderSection(e,t){var a;const s=(((a=e._schema)==null?void 0:a.fields)||[]).map(o=>typeof o=="object"?o.key:o);let n="";return t.forEach(o=>{s.includes(o)&&(n+=this._renderField(o,e))}),n},_renderField(e,t){var a;const s=(((a=t._schema)==null?void 0:a.fields)||[]).map(o=>typeof o=="object"?o.key:o);if(!(e==="nombre"||s.includes(e)||e.startsWith("precio")))return"";switch(e){case"nombre":return this._inputText("name","Nombre Público",t.name,null);case"ingredientes":case"descripcion":return this._inputTextarea("description","Descripción / Ingredientes",t.description);case"precio":case"precios":case"precios_alitas":return this._renderPriceInputs(t);case"mixers_botella":case"mixers_litro":case"mixers_copa":return this._renderMixerInput(e,t);case"opciones_personalizadas":return console.log("[ProductFormView] Generating Preact root for: opciones_personalizadas"),`
                    <div class="form-section field-group u-mt-md">
                        <div class="section-header u-mb-sm">
                            <span class="material-icons-round">tune</span>
                            <h5>Constructor de Personalización</h5>
                        </div>
                        <!-- PREACT MOUNT POINT para OptionsBuilderWidget -->
                        <div id="preact-options-builder-root"></div>
                    </div>
                `;case"imagen":case"thumbnail":case"ruta_archivo":{const o=(t.category||"").toLowerCase().trim().replace(/\s+/g,"_"),r=["cocteleria","alitas","pizzas","ensaladas","sopas","cortes_de_carne","platos_fuertes","snacks","cafe","postres"].some(l=>o.includes(l)),c=e==="thumbnail";return`
                    <div class="form-section field-group">
                        <label class="field-label">${c?r?"Thumbnail (16:9)":"Thumbnail (1:1)":"Imagen (1:1)"}</label>
                        <div id="uploader-image-container" class="${c&&r?"uploader-wide":"uploader-square"}"></div>
                    </div>
                `}case"video":return`
                    <div class="form-section field-group">
                        <label class="field-label">Video (Premium)</label>
                        <div id="uploader-video-container" class="uploader-wide"></div>
                    </div>
                `;default:return""}},_renderHeader(e){var d;const t=!!e.restaurantId;let i=!1;if(e.mediaMeta&&e.mediaMeta.aspectRatio==="16:9")i=!0;else if(e._schema&&e._schema.fields&&e._schema.fields.includes("thumbnail"))i=!0;else if(e.category){const u=["alitas","pizzas","cocteleria","snacks","especialidades","cafe","ensaladas","sopas","cortes_de_carne","platos_fuertes","postres"],l=(e.category||"").toLowerCase().replace(/\s+/g,"_");i=u.some(p=>l.includes(p))}const s=i?"header-img-wide":"header-img-square",n=((d=e.media)==null?void 0:d.image)||"assets/placeholder_cocktail.webp",a=this._formatCategory(e.category),o=t?"● Personalizado":"● Menú Base",r=t?"custom":"base";return`
            <div class="form-header">
                <div class="header-flex-row">
                    <div class="header-content-left">
                        <img src="${n}" class="header-image-main ${s}" style="object-fit: cover; max-width: 140px; max-height: 80px; border-radius: 8px;">
                        <div>

                            <h4 class="header-title-text">${e.name}</h4>
                            <div class="header-metadata-row">
                                <span class="header-category-pill">${a}</span>
                                <span class="header-status-label ${r}">${o}</span>
                            </div>
                        </div>
                    </div>
                    ${t?`
                        <button type="button" class="btn-restore-product">
                            <span class="material-icons-round">history</span>
                            Restaurar
                        </button>`:""}
                </div>
            </div>
        `},_renderPriceInputs(e){const t=e._schema,i=e.prices||{};if(!t||!t.priceFields){const n=i.standard||0;return this._inputNumber("standard","Precio Público",n,"payments")}if(t.priceStrategy==="liquor"||t.priceStrategy==="dynamic_prices")return this._renderPresentationsInput(e,t,i);let s="";return t.priceFields.forEach(n=>{const a=typeof n=="object"?n.key:n,o=typeof n=="object"&&n.column?n.column:a,r=typeof n=="object"?n.label:a,c=r.toLowerCase().includes("precio")?r:"Precio "+r;s+=this._inputNumber(a,c,i[o],"payments")}),s},_renderPresentationsInput(e,t,i,s=null,n="",a=""){let o=Array.isArray(e.presentaciones)?[...e.presentaciones]:[];o.length===0&&t&&t.priceFields&&t.priceFields.forEach(l=>{const p=typeof l=="object"?l.key:l,f=typeof l=="object"&&l.column?l.column:p,m=i[f],g=typeof l=="object"&&l.label||p;m!=null&&o.push({id:p,label:g,precio:m})});const r=t.maxPresentations??(t.priceStrategy==="liquor"?3:5),c=o.length>=r,d=this._renderPresentationsGridHTML(o,s);let u="";return(!c||s)&&(u=`
                <div class="presentation-add-row" style="margin-top: 15px; display: flex; gap: 10px; align-items: center;">
                    <input type="text" id="presentation-label-input" name="presentation-label-input" class="editor-input presentation-add-label" placeholder="Nombre (Ej: Mini)" style="flex: 1; margin-bottom: 0;" maxlength="30" value="${s?n:""}">
                    <input type="number" id="presentation-price-input" name="presentation-price-input" class="editor-input presentation-add-price" placeholder="Precio ($)" style="flex: 1; margin-bottom: 0;" min="0" step="0.01" value="${s?a:""}">
                    <button type="button" class="btn btn-primary presentation-add-btn" aria-label="${s?"Actualizar":"Agregar"} presentación" style="flex: 1;">
                        ${s?'<span class="material-icons-round">check</span> Actualizar':'<span class="material-icons-round">add</span> Agregar'}
                    </button>
                </div>
            `),`
            <div class="form-section presentation-field-group" style="width: 100%;">
                <style>
                    /* Modifiers to adapt btn btn-primary correctly as a container for presentations */
                    .admin-presentation-btn.btn {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        padding: 12px 36px 12px 12px;
                        width: 100%;
                        cursor: default; /* Optional, makes it feel like an item, not an action */
                        gap: 2px;
                        transition: all 0.2s ease;
                    }
                    .admin-presentation-btn.is-editing {
                        outline: 2px solid var(--color-primary, #3b82f6);
                        outline-offset: 2px;
                        opacity: 0.85;
                        transform: scale(0.98);
                    }
                        height: 100%; /* Ensure uniform height in grid */
                    }
                    /* Inherit typography directly from client classes */
                    .admin-presentation-label {
                        pointer-events: none;
                    }
                    .admin-presentation-price {
                        pointer-events: none;
                    }
                    .admin-presentation-remove {
                        background: transparent;
                        border: none;
                        color: rgba(239, 68, 68, 0.7);
                        cursor: pointer;
                        font-size: 20px;
                        padding: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        right: 8px;
                        top: 50%;
                        transform: translateY(-50%);
                        transition: color 0.2s, transform 0.2s;
                    }
                    .admin-presentation-remove:hover {
                        color: rgba(239, 68, 68, 1);
                        transform: translateY(-50%) scale(1.15);
                    }
                    /* Styling the dropdown match the dark theme */
                    .admin-presentation-select {
                        background-color: var(--input-bg, rgba(15, 23, 42, 0.6)) !important;
                        color: var(--text-primary, #f1f5f9) !important;
                    }
                    .admin-presentation-select option {
                        background-color: #0f172a !important; /* Dark slate background */
                        color: #f1f5f9 !important; /* Light text */
                        padding: 8px; /* Adds a bit of breathing room to options */
                    }
                </style>
                <!--Oculto para persistencia en _collectOverrides-->
                <input type="hidden" name="presentaciones_json" class="presentation-json-value" value='${JSON.stringify(o).replace(/'/g,"&#39;")}'>
            <div class="admin-mixer-grid presentation-grid-container">
                ${d}
            </div>
            ${u}
            <small style="display: block; opacity: 0.6; margin-top: 8px;">Máximo ${r} presentaciones.</small>
        </div>
    `},_renderPresentationsGridHTML(e,t=null){if(!e||e.length===0)return'<div class="admin-mixer-empty" style="grid-column: 1 / -1; text-align: center; color: var(--text-muted, #94a3b8); padding: 15px; border: 1px dashed var(--border-color, #334155); border-radius: 8px;">No hay presentaciones configuradas.</div>';const i=s=>new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(s);return e.map(s=>`
            <div class="btn btn-primary btn-contrast admin-presentation-price-btn admin-presentation-btn ${t===s.id?"is-editing":""}" data-id="${s.id}">
                ${s.label?`<span class="admin-presentation-label">${s.label}</span>`:""}
                <span class="admin-presentation-price">${i(s.precio)}</span>
                <button type="button" class="admin-presentation-remove material-icons-round" aria-label="Eliminar" title="Eliminar presentación" data-id="${s.id}">close</button>
            </div>
    `).join("")},_renderMixerInput(e,t){const i=e.replace("mixers_",""),s=t.mixers[i],a=(Array.isArray(s)?s:[]).map(r=>typeof r=="object"&&r.label?r:{id:String(r),label:String(r),default:!1}),o=JSON.stringify(a).replace(/'/g,"&#39;");return`
            <div id="mixer-widget-root-${i}"
                 data-mixer-type="${i}"
                 data-initial='${o}'>
            </div>
            <input type="hidden" name="mixer_${i}" class="mixer-json-value" value='${o}'>
        `},_inputText(e,t,i,s){const n=i||"",a=s?`< span class="material-icons-round input-icon" > ${s}</span > `:"";return`
            <div class="form-section field-group">
                <label class="field-label">${t}</label>
                <div class="field-wrapper">
                    ${a}
                    <input type="text" name="${e}" value="${n}" class="editor-input ${s?"with-icon":""}" required>
                </div>
            </div>
    `},_inputNumber(e,t,i,s){const n=i??"",a=s?`<span class="material-icons-round input-icon">${s}</span>`:"";return`
            <div class="form-section field-group">
                <label class="field-label">${t} ($)</label>
                <div class="field-wrapper">
                    ${a}
                    <!-- BUG-HUNT: Explicit form bind -->
                    <input type="number" form="property-editor-form" name="${e}" value="${n}" class="editor-input ${s?"with-icon":""}" step="0.50">
                </div>
            </div>
    `},_inputTextarea(e,t,i){return`
            <div class="form-section field-group">
                <label class="field-label">${t}</label>
                <textarea name="${e}" class="editor-textarea" rows="6" placeholder="Escribe aquí los ingredientes o descripción detallada...">${i||""}</textarea>
            </div>
    `},_formatCategory(e){return e?e.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase()):"General"},_renderVisibilityToggle(e){var i;const t=!!((i=e._overrides)!=null&&i.hidden);return`
            <div class="visibility-switch-card ${t?"is-inactive":"is-active"}">
                <div class="switch-info">
                    <div class="icon-wrapper">
                        <span class="material-icons-round">${t?"visibility_off":"visibility"}</span>
                    </div>
                    <div class="text-block">
                        <span class="label">${t?"Producto Oculto":"Producto Activo"}</span>
                        <span class="status-desc">${t?"No visible para clientes":"Visible en el menú"}</span>
                    </div>
                </div>
                <label class="system-switch">
                    <input type="checkbox" name="hidden" ${t?"":"checked"}
                        data-field-type="boolean"
                        title="Ocultar o mostrar este producto en el menú público">
                    <span class="slider">
                        <span class="label-on">ON</span>
                        <span class="label-off">OFF</span>
                    </span>
                </label>
            </div>
    `}},jt=Object.freeze(Object.defineProperty({__proto__:null,ProductFormView:st},Symbol.toStringTag,{value:"Module"})),nt=[{id:"cocteleria",name:"Coctelería",icon:"local_bar",description:"Cócteles y mixología.",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/interfaces/cocteleria.webp"},{id:"refrescos",name:"Refrescos",icon:"local_drink",description:"Bebidas sin alcohol.",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/interfaces/refrescos.webp"},{id:"cervezas",name:"Cervezas",icon:"sports_bar",description:"Nacionales e importadas.",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/interfaces/cervezas.webp"},{id:"pizzas",name:"Pizzas",icon:"local_pizza",description:"Pizzas artesanales."},{id:"licores",name:"Licores",icon:"liquor",description:"Módulo con 10 subsecciones.",subsections:["Tequila","Mezcal","Whisky","Ron","Vodka","Ginebra","Brandy","Cognac","Digestivos","Espumosos"]}],Bt=[{id:"tequila",name:"Tequila",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/TequilaX3.webp",isSubcategory:!0},{id:"mezcal",name:"Mezcal",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/400conejosX3.webp",isSubcategory:!0},{id:"whisky",name:"Whisky",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/WhikysX3.webp",isSubcategory:!0},{id:"ron",name:"Ron",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/RonX2.webp",isSubcategory:!0},{id:"vodka",name:"Vodka",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/VodkaX3.webp",isSubcategory:!0},{id:"ginebra",name:"Ginebra",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/GinebraX3.webp",isSubcategory:!0},{id:"brandy",name:"Brandy",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Brandyx3.webp",isSubcategory:!0},{id:"cognac",name:"Cognac",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Cognac.webp",isSubcategory:!0},{id:"digestivos",name:"Digestivos",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Digestivo.webp",isSubcategory:!0},{id:"espumosos",name:"Espumosos",icon:"liquor",description:"Subsección de Licores",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Espumoso.webp",isSubcategory:!0}],Rt=Object.freeze(Object.defineProperty({__proto__:null,baseInterfaces:nt,liquorSubcategories:Bt},Symbol.toStringTag,{value:"Module"})),Ue={async render(e={},t=null){return`
            <div class="menu-sheets-container">
                <div class="view-header centered">
                    <div class="header-info">
                        <h2 style="font-size: clamp(13px, 2.2vw, 18px); margin: 0 0 4px;">Gestión de Secciones de tu Menú</h2>
                        <p>Diseña y organiza las diferentes presentaciones de tu menú.</p>
                    </div>
                </div>

                <div class="sheet-list">
                    ${(await this._getActualInterfaces(e,t)).map(s=>this._renderSheetButton(s)).join("")}
                </div>
            </div>
        `},_renderSheetButton(e){var n;const t=e.isHidden,s=(((n=$.interface_customizations)==null?void 0:n[e.id])||{}).name||e.name;return`
            <button class="btn btn-primary nav-button edit-sheet-btn ${t?"is-hidden":""}" data-id="${e.id}">
                <div class="nav-label-container">
                    <span class="nav-label">${s}</span>
                    <span class="nav-status-tag">${t?"Oculta":"Activa"}</span>
                </div>
                <span class="material-icons-round nav-arrow">chevron_right</span>
            </button>
        `},async _getActualInterfaces(e,t){const i=e.hidden_categories||[],s=$.interfaces&&$.interfaces.length>0?$.interfaces:[],n={cocteleria:{icon:"local_bar",description:"Cócteles y mixología."},cocteles:{icon:"local_bar",description:"Cócteles y mixología."},refrescos:{icon:"local_drink",description:"Bebidas sin alcohol."},cervezas:{icon:"sports_bar",description:"Nacionales e importadas."},pizzas:{icon:"local_pizza",description:"Pizzas artesanales."},alitas:{icon:"restaurant",description:"Alitas y boneless."},sopas:{icon:"soup_kitchen",description:"Sopas y caldos."},ensaladas:{icon:"eco",description:"Opciones saludables."},cortes_de_carne:{icon:"kebab_dining",description:"Cortes premium."},platos_fuertes:{icon:"flatware",description:"Especialidades del chef."},snacks:{icon:"fastfood",description:"Botanas y complementos."},postres:{icon:"icecream",description:"Dulces y repostería."},cafe:{icon:"coffee",description:"Cafetería y té."},licores:{icon:"liquor",description:"Módulo con 10 subsecciones.",subsections:["Tequila","Mezcal","Whisky","Ron","Vodka","Ginebra","Brandy","Cognac","Digestivos","Espumosos"]}};let a=s.map(c=>{const d=(c.categoria||"").trim().toLowerCase(),u=n[d]||{icon:"description",description:"Interfaz directa."};return{id:d||c.id,real_id:c.id,name:c.nombre,image:c.image,icon:u.icon,description:u.description,subsections:u.subsections||null,isHidden:i.includes(c.nombre)||i.includes(d)}}),o=[];if(t&&typeof t.getLicoresCategories=="function")try{o=await t.getLicoresCategories()}catch(c){console.error("[MenuSheetsView] Error fetching liquor categories:",c)}const r=o.map(c=>{const d=c.nombre||c.name,u=c.slug||it(d),l=c.imagen||c.image||c.icono;return{id:u,real_id:c.id||u,name:`${d} (Licores)`,image:l,icon:"liquor",description:"Subcategoría de Licores",subsections:null,isHidden:i.includes(d)||i.includes(u)}});return a=[...a,...r],a.length===0?(console.warn("[MenuSheetsView] Database interfaces empty or not loaded. Using fallback."),this._getLegacyFallback(i)):a},_getLegacyFallback(e){return nt.map(i=>({...i,isHidden:e.includes(i.name)||e.includes(i.id)}))}},Ve={async render(e,t={},i=null){var l,p;const s=$.interfaces||[];let n=s.find(f=>f.slug===e||f.id===e||f.categoria===e);if(!n&&i&&typeof i.getLicoresCategories=="function")try{const m=(await i.getLicoresCategories()).find(g=>(g.slug||it(g.nombre||g.name))===e);if(m){const g=m.nombre||m.name,h=m.imagen||m.image||m.icono;n={id:e,nombre:g,label:g,name:g,descripcion:"Subcategoría de Licores",image:h,thumbnailUrl:h}}}catch(f){console.error("[MenuSheetEditor] Error fetching dynamic liquor category:",f)}if(!n)return console.error("[MenuSheetEditor] Interface not found in AppConfig or Repository:",e),console.log("[MenuSheetEditor] Available interfaces:",s.map(f=>f.slug)),`<div class="error-panel">
                <span class="material-icons-round">error_outline</span>
                <p>No se pudo cargar la configuración de la interfaz <strong>${e}</strong>.</p>
                <button class="btn-back-sheets btn btn-secondary">Volver</button>
            </div>`;const a=((l=t.interface_customizations)==null?void 0:l[e])||{},o=!!((p=t.interface_customizations)!=null&&p[e]),r=t.hidden_categories||[],c=r.includes(e)||r.includes(n.nombre),d=a.name||n.label||n.nombre||n.name;return a.description||n.descripcion,`
            <div class="admin-product-form-wrapper menu-sheet-editor animate-fade-in">
                <div class="form-header">
                    <div class="header-flex-row">
                        <div class="header-content-left">
                            <img src="${a.thumbnail||n.thumbnailUrl||a.image||n.image||"assets/no-placeholder.png"}" class="header-image-main flexible-aspect-ratio" style="max-height: 180px; width: auto; object-fit: contain; background: white; border-radius: 8px;">
                            <div>
                                <div class="header-title-container">
                                    <h4 class="header-title-text">${d}</h4>
                                    ${o?`
                                        <button type="button" class="btn-restore-interface btn-restore-product btn-mini">
                                            <span class="material-icons-round">history</span>
                                            Restaurar Base
                                        </button>`:""}
                                </div>
                                <div class="header-metadata-row">
                                    <span class="header-category-pill">Interfaz / Hoja</span>
                                    <span class="header-status-label ${c?"base":"custom"}">
                                        ● ${c?"Oculta":"Activa"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-back-sheets top-nav-btn" title="Cerrar Editor">
                            <span class="material-icons-round">arrow_back</span>
                        </button>
                    </div>
                </div>

                <div class="form-body">
                    <form class="editor-form">
                        <div class="editor-grid-layout">

                            <!-- VISIBILIDAD (Full Width) -->
                            <div class="editor-full-width-column">
                                <div class="editor-section-card">
                                    <div class="section-header" style="--section-h5-size: 0.85em;">
                                        <span class="material-icons-round">settings</span>
                                        <h5 style="font-size: 0.85em;">Estado de Visibilidad</h5>
                                    </div>
                                    <div class="visibility-switch-card ${c?"is-inactive":"is-active"}">
                                        <div class="switch-info">
                                            <div class="icon-wrapper">
                                                <span class="material-icons-round">${c?"visibility_off":"visibility"}</span>
                                            </div>
                                            <div class="text-block">
                                                <span class="label">${c?"Sección Desactivada":"Sección Activa"}</span>
                                                <span class="status-desc">${c?"Oculta para clientes":"Visible en el menú"}</span>
                                            </div>
                                        </div>
                                        <label class="system-switch">
                                            <input type="checkbox" class="toggle-visibility-switch" 
                                                data-id="${e}" ${c?"":"checked"}>
                                            <span class="slider">
                                                <span class="label-on">ON</span>
                                                <span class="label-off">OFF</span>
                                            </span>
                                        </label>
                                    </div>
                                    <p class="field-hint">Al guardar los cambios, la visibilidad se actualizará en el menú público.</p>
                                </div>
                            </div>

                            <!-- NOMBRE & DESCRIPCIÓN (Full Width) -->
                            <div class="editor-full-width-column">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">badge</span>
                                        <h5 style="font-size: 0.85em;">Nombre en Menú</h5>
                                    </div>

                                    <div class="form-section field-group">
                                        <label class="field-label">Nombre de la Pestaña</label>
                                        <div class="field-wrapper">
                                            <span class="material-icons-round input-icon">label</span>
                                            <input type="text" id="sheet-custom-name" class="editor-input with-icon" 
                                                value="${a.name||n.label||n.nombre||n.name||""}">
                                        </div>
                                        <p class="field-hint">Este es el nombre que verán tus clientes.</p>
                                    </div>

                                    <div class="form-section field-group">
                                        <label class="field-label">Descripción de la Tarjeta</label>
                                        <div class="field-wrapper">
                                            <span class="material-icons-round input-icon">description</span>
                                            <textarea id="sheet-custom-desc" class="editor-textarea with-icon" rows="2" 
                                                placeholder="Descripción corta para la tarjeta del Home">${a.description||n.descripcion||""}</textarea>
                                        </div>
                                        <p class="field-hint">Esta descripción aparece en la tarjeta principal en la pantalla de inicio.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- MULTIMEDIA (Full Width) -->
                            <div class="editor-full-width">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">add_photo_alternate</span>
                                        <h5 style="font-size: 0.85em;">Multimedia y Estética</h5>
                                    </div>
                                    
                                    <div class="multimedia-help-grid">
                                        <div class="uploaders-zone">
                                            <div class="form-section field-group">
                                                <label class="field-label">Imagen de Pestaña</label>
                                                <div id="interface-thumbnail-container" class="uploader-flexible" style="min-height: 180px;"></div>
                                                <p class="field-hint">Esta imagen se adaptará automáticamente a su proporción original (sin recortarse).</p>
                                            </div>
                                        </div>

                                        <div class="instructions-zone">
                                            <div class="helper-box">
                                                <p class="helper-intro">Maximiza la velocidad de carga:</p>
                                                <div class="format-item">
                                                    <span class="format-icon">📷</span>
                                                    <div class="format-info">
                                                        <strong>Usa formato .WEBP</strong>
                                                        <span>Ideal para navegación rápida</span>
                                                    </div>
                                                </div>
                                                <div class="converter-invite">
                                                    <a href="https://www.cloudconvert.com/" target="_blank" class="cloud-link">
                                                        Convertir gratis en CloudConvert
                                                        <span class="material-icons-round">open_in_new</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="editor-actions-end">
                            <button type="button" class="btn btn-primary save-sheet-config" data-id="${e}">
                                <span class="material-icons-round">save</span>
                                <span>Guardar Cambios</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `}},Ut={render(e,t){var i;return`
            <div class="admin-product-form-wrapper">
                <div class="form-header centered">
                    <div class="header-info">
                        <h2>Identidad del Menú</h2>
                        <p>Personaliza el nombre, logo y estilo visual de tu establecimiento.</p>
                    </div>
                </div>

                <div class="form-body">
                    <form id="branding-editor-form" class="editor-form">
                        <div class="editor-grid-layout">
                            <!-- 1. Establecimiento -->
                            <div class="editor-col-left">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">business</span>
                                        <h5>Nombre del Establecimiento</h5>
                                    </div>
                                        <div class="form-section field-group">
                                            <label class="field-label">Nombre Comercial</label>
                                            <div class="field-wrapper">
                                                <span class="material-icons-round input-icon">edit</span>
                                                <input type="text" id="branding-name" value="${((i=t.establishmentName)==null?void 0:i.value)||""}" class="editor-input with-icon" placeholder="Ej: Mi Restaurante">
                                            </div>
                                            
                                            <!-- Toggle: Show/Hide Name -->
                                            <div class="field-toggle-wrapper" style="margin-top: var(--spacing-md-elastic); display: flex; align-items: center; gap: 16px; background: rgba(255, 255, 255, 0.02); padding: 16px; border-radius: 12px; border: 1px solid var(--editor-border);">
                                                <label class="system-switch">
                                                    <input type="checkbox" id="show-branding-name" ${t.showEstablishmentName!==!1?"checked":""}>
                                                    <span class="slider">
                                                        <span class="label-on">ON</span>
                                                        <span class="label-off">OFF</span>
                                                    </span>
                                                </label>
                                                <div style="display: flex; flex-direction: column;">
                                                    <span style="font-size: 0.9rem; font-weight: 700; color: #fff; letter-spacing: 0.02em;">Nombre en Pantalla</span>
                                                    <span class="field-hint" style="margin: 4px 0 0 0; font-size: 0.75rem;">Muestra el título debajo del logo principal.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="editor-section-card editor-section-card--spaced">
                                        <div class="section-header">
                                            <span class="material-icons-round">wallpaper</span>
                                            <h5>Tema de Fondo</h5>
                                        </div>
                                        <p class="field-hint">Selecciona la atmósfera visual para tu menú.</p>
                                        <div class="theme-selector-grid" id="theme-selector">
                                            ${this._renderThemeOptions(t)}
                                        </div>
                                    </div>
                                </div>

                                <!-- 2. Logo -->
                                <div class="editor-col-right">
                                    <div class="editor-section-card">
                                        <div class="section-header">
                                            <span class="material-icons-round">branding_watermark</span>
                                            <h5>Logo y Escalamiento</h5>
                                        </div>
                                        
                                        <div class="logo-config-layout split-50">
                                            <div class="uploader-column">
                                                <div id="branding-logo-container" class="uploader-square compact"></div>
                                                
                                                <div class="size-selector-wrapper" style="margin-top: 20px;">
                                                    <label class="field-label mini">Tamaño en Pantalla (Sensorial)</label>
                                                    <div class="size-pills" id="logo-size-selector">
                                                        <button type="button" class="size-pill ${!t.logoScaleType||t.logoScaleType==="small"?"active":""}" data-size="small">Chico</button>
                                                        <button type="button" class="size-pill ${t.logoScaleType==="medium"?"active":""}" data-size="medium">Médium</button>
                                                        <button type="button" class="size-pill ${t.logoScaleType==="large"?"active":""}" data-size="large">Grande</button>
                                                    </div>
                                                </div>
                                            </div>

                                        <div class="instructions-zone">
                                            <div class="helper-box">
                                                <p class="helper-intro">Optimización de Imagen:</p>
                                                <div class="format-item mini">
                                                    <span class="format-icon">📷</span>
                                                    <div class="format-info">
                                                        <strong>Usa formato .WEBP</strong>
                                                        <span>Transparente y ultraligero</span>
                                                    </div>
                                                </div>
                                                <div class="converter-invite mini">
                                                    <p>¿Tus archivos no son .webp?</p>
                                                    <a href="https://squoosh.app/" target="_blank" class="cloud-link">
                                                        Optimizar en Squoosh.app
                                                        <span class="material-icons-round">open_in_new</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 3. Acciones inferiores -->
                            <div class="editor-actions-end">
                                <button type="button" class="btn btn-primary btn-save save-branding-btn">
                                    <span class="material-icons-round">save</span>
                                    <span>Guardar Cambios</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        `},_renderThemeOptions(e){return[{id:"bg_light_blue",label:"Azul Claro",color:"#00d2ff"},{id:"bg_dark_blue",label:"Azul Obscuro",color:"#001a33"},{id:"bg_dark_red",label:"Rojo Obscuro",color:"#440000"},{id:"bg_white",label:"Blanco",color:"#ffffff"}].map(i=>{const s=e.activeTheme===i.id;return`
                <div class="theme-option ${s?"is-selected":""}" data-theme-id="${i.id}">
                    <div class="theme-preview" style="background-color: ${i.color}"></div>
                    <span class="theme-label">${i.label}</span>
                    ${s?'<span class="material-icons-round check-icon">check_circle</span>':""}
                </div>
            `}).join("")}},Vt={render(e={},t={},i=null){const s=this._extractHiddenProducts(e,t);if(s.length===0)return this._renderEmptyState();const n=this._groupProductsByCategory(s);return`
            <div class="hidden-products-container" style="padding: var(--spacing-lg-elastic);">
                <div class="view-header centered" style="margin-bottom: var(--spacing-xl-elastic);">
                    <div class="header-info">
                        <h2>Productos Ocultos</h2>
                        <p>Gestiona los productos que han sido retirados temporalmente del menú.</p>
                    </div>
                </div>

                <div class="hidden-products-body">
                    ${i?this._renderCategoryDetail(i,n[i]||[]):this._renderCategoriesGrid(n)}
                </div>
            </div>
        `},_renderCategoriesGrid(e){return`
            <div data-view="categories" class="categories-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
                ${Object.entries(e).filter(([i,s])=>s&&s.length>0).map(([i,s])=>{const n=i.split("_").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ");return`
                        <div class="hidden-category-card editor-section-card" data-category="${i}" style="
                            cursor: pointer;
                            transition: transform 0.2s ease, border-color 0.2s ease;
                            display: flex;
                            align-items: center;
                            gap: 16px;
                            padding: 20px;
                        " onmouseover="this.style.borderColor='var(--accent-primary)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'; this.style.transform='translateY(0)';">
                            <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 12px; display: flex;">
                                <span class="material-icons-round" style="color: var(--accent-primary); font-size: 28px;">folder_special</span>
                            </div>
                            <div style="flex-grow: 1;">
                                <h4 style="margin: 0; font-size: 16px; color: var(--text-primary);">${n}</h4>
                                <span style="font-size: 13px; color: var(--text-tertiary);">${s.length} productos ocultos</span>
                            </div>
                            <span class="material-icons-round text-tertiary">chevron_right</span>
                        </div>
                    `}).join("")}
            </div>
        `},_renderCategoryDetail(e,t){const i=e.split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ");return!t||t.length===0?`
                <div data-view="category-detail">
                    <button class="btn btn-primary btn-icon-text btn-back-hidden-categories" style="margin-bottom: 24px; display: inline-flex; align-items: center; justify-content: center; height: 38px; border-radius: 8px; padding: 0 16px; width: auto;">
                        <span class="material-icons-round" style="margin-right: 6px; font-size: 18px;">arrow_back</span>
                        <span style="font-size: 13px;">Todas las categorías</span>
                    </button>
                    <div style="text-align: center; color: var(--text-tertiary); padding: 40px;">
                        <span class="material-icons-round" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;">inventory_2</span>
                        <p>No hay productos ocultos en esta categoría.</p>
                    </div>
                </div>
            `:`
            <div data-view="category-detail">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
                    <button class="btn btn-primary btn-icon-text btn-back-hidden-categories" style="display: inline-flex; align-items: center; justify-content: center; height: 38px; border-radius: 8px; padding: 0 16px; width: auto;">
                        <span class="material-icons-round" style="margin-right: 6px; font-size: 18px;">arrow_back</span>
                        <span style="font-size: 13px;">Todas las categorías</span>
                    </button>
                    <div style="display: flex; align-items: center; gap: 8px; color: var(--text-secondary);">
                        <span class="material-icons-round" style="font-size: 18px;">folder_special</span>
                        <span style="font-weight: 500;">${i}</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 12px; font-size: 11px; margin-left: 8px;">${t.length}</span>
                    </div>
                </div>
                
                <div class="products-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
                    ${t.map(s=>this._renderProductCard(s,i)).join("")}
                </div>
            </div>
        `},_renderProductCard(e,t){return`
            <div class="hidden-product-card" id="hidden-card-${e.id}" style="
                background: rgba(255, 255, 255, 0.03); 
                border: 1px solid rgba(255, 255, 255, 0.08); 
                border-radius: 12px; 
                padding: 16px; 
                display: flex; 
                flex-direction: column; 
                gap: 12px;
                transition: opacity 0.3s ease;
            ">
                <div style="display: flex; align-items: start; gap: 12px;">
                    <div style="
                        width: 48px; 
                        height: 48px; 
                        border-radius: 8px; 
                        background: rgba(255,255,255,0.05);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        overflow: hidden;
                    ">
                        ${e.thumbnail?`<img src="${e.thumbnail}" style="width: 100%; height: 100%; object-fit: cover;" />`:'<span class="material-icons-round text-tertiary">image_not_supported</span>'}
                    </div>
                    
                    <div style="flex-grow: 1; overflow: hidden;">
                        <h4 style="margin: 0; font-size: 15px; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${e.nombre}</h4>
                        <span style="font-size: 12px; color: #94a3b8; display: inline-block; margin-top: 4px;">
                            ${e.isCustom?"⭐ Personalizado":"📖 Catálogo Base"}
                        </span>
                    </div>
                </div>

                <div style="display: flex; justify-content: flex-start; margin-top: 4px;">
                    <button class="btn btn-primary nav-button btn-restore-hidden" 
                            data-id="${e.id}" 
                            data-category="${t}"
                            data-tabla="${e.category}"
                            style="width: auto; padding: 0 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; height: 38px; border-radius: 8px;">
                        <span class="material-icons-round" style="font-size: 16px; margin-right: 6px;">visibility</span>
                        <span class="btn-text">Restaurar al Menú</span>
                    </button>
                </div>
            </div>
        `},_renderEmptyState(){return`
            <div class="empty-state-hub" style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                min-height: 400px;
                text-align: center;
                color: var(--text-tertiary);
            ">
                <div class="icon-circle" style="
                    width: 80px; height: 80px; 
                    background: rgba(255,255,255,0.05); 
                    border-radius: 50%; 
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 24px;
                ">
                    <span class="material-icons-round" style="font-size: 40px; color: rgba(255,255,255,0.4);">visibility</span>
                </div>
                <h3 style="color: var(--text-primary); margin-bottom: 8px; font-weight: 500;">No hay productos ocultos</h3>
                <p style="max-width: 300px; line-height: 1.5;">Todos los productos de tu catálogo están visibles o han sido eliminados por completo.</p>
            </div>
        `},_extractHiddenProducts(e,t){const i=[];return Object.entries(e||{}).forEach(([s,n])=>{if(n.hidden===!0||n.hidden==="true"||n.hidden===1){let o=n.tabla,r=n.nombre;if(!o||!r){for(const c of Object.keys(t))if(Array.isArray(t[c])){const d=t[c].find(u=>String(u.id)===String(s));if(d){o||(o=c),r||(r=d.nombre);break}}}i.push({id:s,nombre:r||"Producto Desconocido",category:o||"otros",thumbnail:n.thumbnail||n.imagen,isCustom:n.is_custom===!0})}}),i.forEach(s=>{if(!s.thumbnail&&!s.isCustom&&t[s.category]){const n=t[s.category].find(a=>String(a.id)===String(s.id));n&&(s.thumbnail=n.thumbnail||n.imagen)}}),i},_groupProductsByCategory(e){return e.reduce((t,i)=>{const s=i.category;return t[s]||(t[s]=[]),t[s].push(i),t},{})}};var fe,w,at,Ae,j,De,rt,ot,ct,$e,we,Se,re={},oe=[],Dt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,me=Array.isArray;function q(e,t){for(var i in t)e[i]=t[i];return e}function ke(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ee(e,t,i){var s,n,a,o={};for(a in t)a=="key"?s=t[a]:a=="ref"?n=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?fe.call(arguments,2):i),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return ne(e,o,s,n,null)}function ne(e,t,i,s,n){var a={type:e,props:t,key:i,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:n??++at,__i:-1,__u:0};return n==null&&w.vnode!=null&&w.vnode(a),a}function D(e){return e.children}function U(e,t){this.props=e,this.context=t}function V(e,t){if(t==null)return e.__?V(e.__,e.__i+1):null;for(var i;t<e.__k.length;t++)if((i=e.__k[t])!=null&&i.__e!=null)return i.__e;return typeof e.type=="function"?V(e):null}function Ft(e){if(e.__P&&e.__d){var t=e.__v,i=t.__e,s=[],n=[],a=q({},t);a.__v=t.__v+1,w.vnode&&w.vnode(a),Le(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[i]:null,s,i??V(t),!!(32&t.__u),n),a.__v=t.__v,a.__.__k[a.__i]=a,pt(s,a,n),t.__e=t.__=null,a.__e!=i&&lt(a)}}function lt(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),lt(e)}function Fe(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!ce.__r++||De!=w.debounceRendering)&&((De=w.debounceRendering)||rt)(ce)}function ce(){for(var e,t=1;j.length;)j.length>t&&j.sort(ot),e=j.shift(),t=j.length,Ft(e);ce.__r=0}function dt(e,t,i,s,n,a,o,r,c,d,u){var l,p,f,m,g,h,v,_=s&&s.__k||oe,C=t.length;for(c=Wt(i,t,_,c,C),l=0;l<C;l++)(f=i.__k[l])!=null&&(p=f.__i!=-1&&_[f.__i]||re,f.__i=l,h=Le(e,f,p,n,a,o,r,c,d,u),m=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&Te(p.ref,null,f),u.push(f.ref,f.__c||m,f)),g==null&&m!=null&&(g=m),(v=!!(4&f.__u))||p.__k===f.__k?c=ut(f,c,e,v):typeof f.type=="function"&&h!==void 0?c=h:m&&(c=m.nextSibling),f.__u&=-7);return i.__e=g,c}function Wt(e,t,i,s,n){var a,o,r,c,d,u=i.length,l=u,p=0;for(e.__k=new Array(n),a=0;a<n;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=ne(null,o,null,null,null):me(o)?o=e.__k[a]=ne(D,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=ne(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+p,o.__=e,o.__b=e.__b+1,r=null,(d=o.__i=Gt(o,i,c,l))!=-1&&(l--,(r=i[d])&&(r.__u|=2)),r==null||r.__v==null?(d==-1&&(n>u?p--:n<u&&p++),typeof o.type!="function"&&(o.__u|=4)):d!=c&&(d==c-1?p--:d==c+1?p++:(d>c?p--:p++,o.__u|=4))):e.__k[a]=null;if(l)for(a=0;a<u;a++)(r=i[a])!=null&&(2&r.__u)==0&&(r.__e==s&&(s=V(r)),mt(r,r));return s}function ut(e,t,i,s){var n,a;if(typeof e.type=="function"){for(n=e.__k,a=0;n&&a<n.length;a++)n[a]&&(n[a].__=e,t=ut(n[a],t,i,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=V(e)),i.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Gt(e,t,i,s){var n,a,o,r=e.key,c=e.type,d=t[i],u=d!=null&&(2&d.__u)==0;if(d===null&&r==null||u&&r==d.key&&c==d.type)return i;if(s>(u?1:0)){for(n=i-1,a=i+1;n>=0||a<t.length;)if((d=t[o=n>=0?n--:a++])!=null&&(2&d.__u)==0&&r==d.key&&c==d.type)return o}return-1}function We(e,t,i){t[0]=="-"?e.setProperty(t,i??""):e[t]=i==null?"":typeof i!="number"||Dt.test(t)?i:i+"px"}function te(e,t,i,s,n){var a,o;e:if(t=="style")if(typeof i=="string")e.style.cssText=i;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)i&&t in i||We(e.style,t,"");if(i)for(t in i)s&&i[t]==s[t]||We(e.style,t,i[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(ct,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=i,i?s?i.u=s.u:(i.u=$e,e.addEventListener(t,a?Se:we,a)):e.removeEventListener(t,a?Se:we,a);else{if(n=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&i==1?"":i))}}function Ge(e){return function(t){if(this.l){var i=this.l[t.type+e];if(t.t==null)t.t=$e++;else if(t.t<i.u)return;return i(w.event?w.event(t):t)}}}function Le(e,t,i,s,n,a,o,r,c,d){var u,l,p,f,m,g,h,v,_,C,T,G,je,ee,ve,z=t.type;if(t.constructor!==void 0)return null;128&i.__u&&(c=!!(32&i.__u),a=[r=t.__e=i.__e]),(u=w.__b)&&u(t);e:if(typeof z=="function")try{if(v=t.props,_="prototype"in z&&z.prototype.render,C=(u=z.contextType)&&s[u.__c],T=u?C?C.props.value:u.__:s,i.__c?h=(l=t.__c=i.__c).__=l.__E:(_?t.__c=l=new z(v,T):(t.__c=l=new U(v,T),l.constructor=z,l.render=Xt),C&&C.sub(l),l.state||(l.state={}),l.__n=s,p=l.__d=!0,l.__h=[],l._sb=[]),_&&l.__s==null&&(l.__s=l.state),_&&z.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=q({},l.__s)),q(l.__s,z.getDerivedStateFromProps(v,l.__s))),f=l.props,m=l.state,l.__v=t,p)_&&z.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),_&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(_&&z.getDerivedStateFromProps==null&&v!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,T),t.__v==i.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,T)===!1){t.__v!=i.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=i.__e,t.__k=i.__k,t.__k.some(function(R){R&&(R.__=t)}),oe.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&o.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,T),_&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,m,g)})}if(l.context=T,l.props=v,l.__P=e,l.__e=!1,G=w.__r,je=0,_)l.state=l.__s,l.__d=!1,G&&G(t),u=l.render(l.props,l.state,l.context),oe.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,G&&G(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++je<25);l.state=l.__s,l.getChildContext!=null&&(s=q(q({},s),l.getChildContext())),_&&!p&&l.getSnapshotBeforeUpdate!=null&&(g=l.getSnapshotBeforeUpdate(f,m)),ee=u!=null&&u.type===D&&u.key==null?ft(u.props.children):u,r=dt(e,me(ee)?ee:[ee],t,i,s,n,a,o,r,c,d),l.base=t.__e,t.__u&=-161,l.__h.length&&o.push(l),h&&(l.__E=l.__=null)}catch(R){if(t.__v=null,c||a!=null)if(R.then){for(t.__u|=c?160:128;r&&r.nodeType==8&&r.nextSibling;)r=r.nextSibling;a[a.indexOf(r)]=null,t.__e=r}else{for(ve=a.length;ve--;)ke(a[ve]);xe(t)}else t.__e=i.__e,t.__k=i.__k,R.then||xe(t);w.__e(R,t,i)}else a==null&&t.__v==i.__v?(t.__k=i.__k,t.__e=i.__e):r=t.__e=Jt(i.__e,t,i,s,n,a,o,c,d);return(u=w.diffed)&&u(t),128&t.__u?void 0:r}function xe(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(xe))}function pt(e,t,i){for(var s=0;s<i.length;s++)Te(i[s],i[++s],i[++s]);w.__c&&w.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){w.__e(a,n.__v)}})}function ft(e){return typeof e!="object"||e==null||e.__b>0?e:me(e)?e.map(ft):q({},e)}function Jt(e,t,i,s,n,a,o,r,c){var d,u,l,p,f,m,g,h=i.props||re,v=t.props,_=t.type;if(_=="svg"?n="http://www.w3.org/2000/svg":_=="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),a!=null){for(d=0;d<a.length;d++)if((f=a[d])&&"setAttribute"in f==!!_&&(_?f.localName==_:f.nodeType==3)){e=f,a[d]=null;break}}if(e==null){if(_==null)return document.createTextNode(v);e=document.createElementNS(n,_,v.is&&v),r&&(w.__m&&w.__m(t,a),r=!1),a=null}if(_==null)h===v||r&&e.data==v||(e.data=v);else{if(a=a&&fe.call(e.childNodes),!r&&a!=null)for(h={},d=0;d<e.attributes.length;d++)h[(f=e.attributes[d]).name]=f.value;for(d in h)f=h[d],d=="dangerouslySetInnerHTML"?l=f:d=="children"||d in v||d=="value"&&"defaultValue"in v||d=="checked"&&"defaultChecked"in v||te(e,d,null,f,n);for(d in v)f=v[d],d=="children"?p=f:d=="dangerouslySetInnerHTML"?u=f:d=="value"?m=f:d=="checked"?g=f:r&&typeof f!="function"||h[d]===f||te(e,d,f,h[d],n);if(u)r||l&&(u.__html==l.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(l&&(e.innerHTML=""),dt(t.type=="template"?e.content:e,me(p)?p:[p],t,i,s,_=="foreignObject"?"http://www.w3.org/1999/xhtml":n,a,o,a?a[0]:i.__k&&V(i,0),r,c),a!=null)for(d=a.length;d--;)ke(a[d]);r||(d="value",_=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[d]||_=="progress"&&!m||_=="option"&&m!=h[d])&&te(e,d,m,h[d],n),d="checked",g!=null&&g!=e[d]&&te(e,d,g,h[d],n))}return e}function Te(e,t,i){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(n){w.__e(n,i)}}function mt(e,t,i){var s,n;if(w.unmount&&w.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||Te(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(a){w.__e(a,t)}s.base=s.__P=null}if(s=e.__k)for(n=0;n<s.length;n++)s[n]&&mt(s[n],t,i||typeof e.type!="function");i||ke(e.__e),e.__c=e.__=e.__e=void 0}function Xt(e,t,i){return this.constructor(e,i)}function Kt(e,t,i){var s,n,a,o;t==document&&(t=document.documentElement),w.__&&w.__(e,t),n=(s=typeof i=="function")?null:i&&i.__k||t.__k,a=[],o=[],Le(t,e=(!s&&i||t).__k=Ee(D,null,[e]),n||re,re,t.namespaceURI,!s&&i?[i]:n?null:t.firstChild?fe.call(t.childNodes):null,a,!s&&i?i:n?n.__e:t.firstChild,s,o),pt(a,e,o)}fe=oe.slice,w={__e:function(e,t,i,s){for(var n,a,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,s||{}),o=n.__d),o)return n.__E=n}catch(r){e=r}throw e}},at=0,Ae=function(e){return e!=null&&e.constructor===void 0},U.prototype.setState=function(e,t){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q({},this.state),typeof e=="function"&&(e=e(q({},i),this.props)),e&&q(i,e),e!=null&&this.__v&&(t&&this._sb.push(t),Fe(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Fe(this))},U.prototype.render=D,j=[],rt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ot=function(e,t){return e.__v.__b-t.__v.__b},ce.__r=0,ct=/(PointerCapture)$|Capture$/i,$e=0,we=Ge(!1),Se=Ge(!0);const wi=Object.freeze(Object.defineProperty({__proto__:null,Component:U,Fragment:D,createElement:Ee,h:Ee,get isValidElement(){return Ae},get options(){return w},render:Kt},Symbol.toStringTag,{value:"Module"}));var K,E,be,Je,le=0,ht=[],x=w,Xe=x.__b,Ke=x.__r,Ye=x.diffed,Ze=x.__c,Qe=x.unmount,et=x.__;function Me(e,t){x.__h&&x.__h(E,e,le||t),le=0;var i=E.__H||(E.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({}),i.__[e]}function Si(e){return le=1,Yt(_t,e)}function Yt(e,t,i){var s=Me(K++,2);if(s.t=e,!s.__c&&(s.__=[_t(void 0,t),function(r){var c=s.__N?s.__N[0]:s.__[0],d=s.t(c,r);c!==d&&(s.__N=[d,s.__[1]],s.__c.setState({}))}],s.__c=E,!E.__f)){var n=function(r,c,d){if(!s.__c.__H)return!0;var u=s.__c.__H.__.filter(function(p){return p.__c});if(u.every(function(p){return!p.__N}))return!a||a.call(this,r,c,d);var l=s.__c.props!==r;return u.some(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(l=!0)}}),a&&a.call(this,r,c,d)||l};E.__f=!0;var a=E.shouldComponentUpdate,o=E.componentWillUpdate;E.componentWillUpdate=function(r,c,d){if(this.__e){var u=a;a=void 0,n(r,c,d),a=u}o&&o.call(this,r,c,d)},E.shouldComponentUpdate=n}return s.__N||s.__}function Ei(e,t){var i=Me(K++,3);!x.__s&&vt(i.__H,t)&&(i.__=e,i.u=t,E.__H.__h.push(i))}function ze(e,t){var i=Me(K++,7);return vt(i.__H,t)&&(i.__=e(),i.__H=t,i.__h=e),i.__}function xi(e,t){return le=8,ze(function(){return e},t)}function Zt(){for(var e;e=ht.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(ae),t.__h.some(Ce),t.__h=[]}catch(i){t.__h=[],x.__e(i,e.__v)}}}x.__b=function(e){E=null,Xe&&Xe(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),et&&et(e,t)},x.__r=function(e){Ke&&Ke(e),K=0;var t=(E=e.__c).__H;t&&(be===E?(t.__h=[],E.__h=[],t.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(t.__h.some(ae),t.__h.some(Ce),t.__h=[],K=0)),be=E},x.diffed=function(e){Ye&&Ye(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ht.push(t)!==1&&Je===x.requestAnimationFrame||((Je=x.requestAnimationFrame)||Qt)(Zt)),t.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),be=E=null},x.__c=function(e,t){t.some(function(i){try{i.__h.some(ae),i.__h=i.__h.filter(function(s){return!s.__||Ce(s)})}catch(s){t.some(function(n){n.__h&&(n.__h=[])}),t=[],x.__e(s,i.__v)}}),Ze&&Ze(e,t)},x.unmount=function(e){Qe&&Qe(e);var t,i=e.__c;i&&i.__H&&(i.__H.__.some(function(s){try{ae(s)}catch(n){t=n}}),i.__H=void 0,t&&x.__e(t,i.__v))};var tt=typeof requestAnimationFrame=="function";function Qt(e){var t,i=function(){clearTimeout(s),tt&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(i,35);tt&&(t=requestAnimationFrame(i))}function ae(e){var t=E,i=e.__c;typeof i=="function"&&(e.__c=void 0,i()),E=t}function Ce(e){var t=E;e.__c=e.__(),E=t}function vt(e,t){return!e||e.length!==t.length||t.some(function(i,s){return i!==e[s]})}function _t(e,t){return typeof t=="function"?t(e):t}var ei=Symbol.for("preact-signals");function he(){if(O>1)O--;else{for(var e,t=!1;X!==void 0;){var i=X;for(X=void 0,Pe++;i!==void 0;){var s=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&yt(i))try{i.c()}catch(n){t||(e=n,t=!0)}i=s}}if(Pe=0,O--,t)throw e}}function k(e){if(O>0)return e();O++;try{return e()}finally{he()}}var y=void 0;function gt(e){var t=y;y=void 0;try{return e()}finally{y=t}}var X=void 0,O=0,Pe=0,de=0;function bt(e){if(y!==void 0){var t=e.n;if(t===void 0||t.t!==y)return t={i:0,S:e,p:y.s,n:void 0,t:y,e:void 0,x:void 0,r:t},y.s!==void 0&&(y.s.n=t),y.s=t,e.n=t,32&y.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=y.s,t.n=void 0,y.s.n=t,y.s=t),t}}function P(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}P.prototype.brand=ei;P.prototype.h=function(){return!0};P.prototype.S=function(e){var t=this,i=this.t;i!==e&&e.e===void 0&&(e.x=i,this.t=e,i!==void 0?i.e=e:gt(function(){var s;(s=t.W)==null||s.call(t)}))};P.prototype.U=function(e){var t=this;if(this.t!==void 0){var i=e.e,s=e.x;i!==void 0&&(i.x=s,e.e=void 0),s!==void 0&&(s.e=i,e.x=void 0),e===this.t&&(this.t=s,s===void 0&&gt(function(){var n;(n=t.Z)==null||n.call(t)}))}};P.prototype.subscribe=function(e){var t=this;return Z(function(){var i=t.value,s=y;y=void 0;try{e(i)}finally{y=s}},{name:"sub"})};P.prototype.valueOf=function(){return this.value};P.prototype.toString=function(){return this.value+""};P.prototype.toJSON=function(){return this.value};P.prototype.peek=function(){var e=y;y=void 0;try{return this.value}finally{y=e}};Object.defineProperty(P.prototype,"value",{get:function(){var e=bt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Pe>100)throw new Error("Cycle detected");this.v=e,this.i++,de++,O++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{he()}}}});function L(e,t){return new P(e,t)}function yt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function wt(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function St(e){for(var t=e.s,i=void 0;t!==void 0;){var s=t.p;t.i===-1?(t.S.U(t),s!==void 0&&(s.n=t.n),t.n!==void 0&&(t.n.p=s)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=s}e.s=i}function B(e,t){P.call(this,void 0),this.x=e,this.s=void 0,this.g=de-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}B.prototype=new P;B.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===de))return!0;if(this.g=de,this.f|=1,this.i>0&&!yt(this))return this.f&=-2,!0;var e=y;try{wt(this),y=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return y=e,St(this),this.f&=-2,!0};B.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}P.prototype.S.call(this,e)};B.prototype.U=function(e){if(this.t!==void 0&&(P.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};B.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(B.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=bt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Y(e,t){return new B(e,t)}function Et(e){var t=e.u;if(e.u=void 0,typeof t=="function"){O++;var i=y;y=void 0;try{t()}catch(s){throw e.f&=-2,e.f|=8,Ie(e),s}finally{y=i,he()}}}function Ie(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Et(e)}function ti(e){if(y!==this)throw new Error("Out-of-order effect");St(this),y=e,this.f&=-2,8&this.f&&Ie(this),he()}function F(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}F.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};F.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Et(this),wt(this),O++;var e=y;return y=this,ti.bind(this,e)};F.prototype.N=function(){2&this.f||(this.f|=2,this.o=X,X=this)};F.prototype.d=function(){this.f|=8,1&this.f||Ie(this)};F.prototype.dispose=function(){this.d()};function Z(e,t){var i=new F(e,t);try{i.c()}catch(n){throw i.d(),n}var s=i.d.bind(i);return s[Symbol.dispose]=s,s}var xt,ie,ii=typeof window<"u"&&!!window.__PREACT_SIGNALS_DEVTOOLS__,Ct=[];Z(function(){xt=this.N})();function W(e,t){w[e]=t.bind(null,w[e]||function(){})}function ue(e){if(ie){var t=ie;ie=void 0,t()}ie=e&&e.S()}function Pt(e){var t=this,i=e.data,s=ni(i);s.value=i;var n=ze(function(){for(var r=t,c=t.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}var d=Y(function(){var f=s.value.value;return f===0?0:f===!0?"":f||""}),u=Y(function(){return!Array.isArray(d.value)&&!Ae(d.value)}),l=Z(function(){if(this.N=At,u.value){var f=d.value;r.__v&&r.__v.__e&&r.__v.__e.nodeType===3&&(r.__v.__e.data=f)}}),p=t.__$u.d;return t.__$u.d=function(){l(),p.call(this)},[u,d]},[]),a=n[0],o=n[1];return a.value?o.peek():o.value}Pt.displayName="ReactiveTextNode";Object.defineProperties(P.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Pt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});W("__b",function(e,t){if(typeof t.type=="string"){var i,s=t.props;for(var n in s)if(n!=="children"){var a=s[n];a instanceof P&&(i||(t.__np=i={}),i[n]=a,s[n]=a.peek())}}e(t)});W("__r",function(e,t){if(e(t),t.type!==D){ue();var i,s=t.__c;s&&(s.__$f&=-2,(i=s.__$u)===void 0&&(s.__$u=i=(function(n,a){var o;return Z(function(){o=this},{name:a}),o.c=n,o})(function(){var n;ii&&((n=i.y)==null||n.call(i)),s.__$f|=1,s.setState({})},typeof t.type=="function"?t.type.displayName||t.type.name:""))),ue(i)}});W("__e",function(e,t,i,s){ue(),e(t,i,s)});W("diffed",function(e,t){ue();var i;if(typeof t.type=="string"&&(i=t.__e)){var s=t.__np,n=t.props;if(s){var a=i.U;if(a)for(var o in a){var r=a[o];r!==void 0&&!(o in s)&&(r.d(),a[o]=void 0)}else a={},i.U=a;for(var c in s){var d=a[c],u=s[c];d===void 0?(d=si(i,c,u),a[c]=d):d.o(u,n)}for(var l in s)n[l]=s[l]}}e(t)});function si(e,t,i,s){var n=t in e&&e.ownerSVGElement===void 0,a=L(i),o=i.peek();return{o:function(r,c){a.value=r,o=r.peek()},d:Z(function(){this.N=At;var r=a.value.value;o!==r?(o=void 0,n?e[t]=r:r!=null&&(r!==!1||t[4]==="-")?e.setAttribute(t,r):e.removeAttribute(t)):o=void 0})}}W("unmount",function(e,t){if(typeof t.type=="string"){var i=t.__e;if(i){var s=i.U;if(s){i.U=void 0;for(var n in s){var a=s[n];a&&a.d()}}}t.__np=void 0}else{var o=t.__c;if(o){var r=o.__$u;r&&(o.__$u=void 0,r.d())}}e(t)});W("__h",function(e,t,i,s){(s<3||s===9)&&(t.__$f|=2),e(t,i,s)});U.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var i=this.__$u,s=i&&i.s!==void 0;for(var n in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var a=2&this.__$f;if(!(s||a||4&this.__$f)||1&this.__$f)return!0}else if(!(s||4&this.__$f)||3&this.__$f)return!0;for(var o in e)if(o!=="__source"&&e[o]!==this.props[o])return!0;for(var r in this.props)if(!(r in e))return!0;return!1};function ni(e,t){return ze(function(){return L(e,t)},[])}var ai=function(e){queueMicrotask(function(){queueMicrotask(e)})};function ri(){k(function(){for(var e;e=Ct.shift();)xt.call(e)})}function At(){Ct.push(this)===1&&(w.requestAnimationFrame||ai)(ri)}const pe=L(null),$t=L("products"),qe=L(null),Oe=L(null),M=L({}),kt=L([]),Lt=L([]),Tt=L(!1),S=L("idle"),A=L(null),Mt=L(!1),oi=Y(()=>M.value.hidden_categories||[]),ci=Y(()=>M.value.interface_customizations||{}),Q=Y(()=>pe.value!==null&&pe.value!==void 0);function zt(e,t){k(()=>{pe.value=e,M.value=t||{},Mt.value=!1,console.log("[AdminStore] ✅ Context initialized:",e)})}function li(e){k(()=>{$t.value=e,qe.value=null,Oe.value=null,S.value="idle",A.value=null})}function It(e){k(()=>{qe.value=e,S.value="idle",A.value=null})}function di(e){k(()=>{Oe.value=e,S.value="idle",A.value=null})}async function qt(e,t){if(!Q.value)return A.value="No hay un restaurante vinculado. Inicia sesión.",S.value="error",!1;S.value="loading",A.value=null;try{const i=JSON.parse(JSON.stringify(M.value));if(i.interface_customizations||(i.interface_customizations={}),i.interface_customizations[e]||(i.interface_customizations[e]={}),t.name!==void 0&&(i.interface_customizations[e].name=t.name),t.description!==void 0&&(i.interface_customizations[e].description=t.description),t.image&&(i.interface_customizations[e].image=t.image),t.thumbnail&&(i.interface_customizations[e].thumbnail=t.thumbnail),t.isVisible!==void 0){const s=i.hidden_categories||[];t.isVisible?i.hidden_categories=s.filter(n=>n!==e):s.includes(e)||(i.hidden_categories=[...s,e])}return await He(i),k(()=>{M.value=i,S.value="success"}),Ne(),setTimeout(()=>{S.value="idle"},2e3),!0}catch(i){return console.error("[AdminStore] ❌ Error saving sheet config:",i),k(()=>{S.value="error",A.value=i.message||"Error al guardar la configuración."}),!1}}async function ui(e){if(!Q.value)return A.value="No hay un restaurante vinculado.",S.value="error",!1;S.value="loading",A.value=null;try{const t=JSON.parse(JSON.stringify(M.value));return t.interface_customizations&&delete t.interface_customizations[e],t.hidden_categories&&(t.hidden_categories=t.hidden_categories.filter(i=>i!==e)),await He(t),k(()=>{M.value=t,S.value="success"}),Ne(),setTimeout(()=>{S.value="idle"},2e3),!0}catch(t){return console.error("[AdminStore] ❌ Error restoring sheet config:",t),k(()=>{S.value="error",A.value=t.message||"Error al restaurar la configuración."}),!1}}async function pi(e){if(!Q.value)return A.value="No hay un restaurante vinculado.",S.value="error",!1;S.value="loading",A.value=null;try{const t=new CustomEvent("SAAS_SAVE_OVERRIDE",{detail:{productId:e.id,payload:e,originalProduct:e._original||{}}});return window.dispatchEvent(t),k(()=>{S.value="success"}),setTimeout(()=>{S.value="idle"},2e3),!0}catch(t){return console.error("[AdminStore] ❌ Error saving product override:",t),k(()=>{S.value="error",A.value=t.message||"Error al guardar el producto."}),!1}}async function fi(e){var i,s,n,a,o,r;if(!Q.value)return A.value="No hay un restaurante vinculado.",S.value="error",!1;const t=["small","medium","large"];S.value="loading";try{const c={...M.value||{}};if(console.log("[AdminStore-Telemetría] Iniciando saveBranding. Data recibida:",e),console.log("[AdminStore-Telemetría] Configuración base (antes):",c),e.activeTheme&&(c.active_theme=e.activeTheme),e.logo&&(c.branding_logo_url=e.logo),e.businessName!==void 0&&(c.branding_establishment_name=e.businessName),e.showName!==void 0&&(c.show_establishment_name=e.showName),e.logoScale&&(console.log(`[AdminStore-Telemetría] Procesando logoScale: ${e.logoScale}`),c.logo_scale_type=t.includes(e.logoScale)?e.logoScale:c.logo_scale_type||"small"),console.log("[AdminStore-Telemetría] Configuración final a persistir:",c),await He(c),k(()=>{M.value=c,S.value="success"}),Ne(),e.activeTheme&&(document.documentElement.setAttribute("data-theme",e.activeTheme),document.body.setAttribute("data-theme",e.activeTheme),localStorage.setItem("selectedTheme",e.activeTheme),(i=window.SettingsManager)!=null&&i.changeTheme)){const d=((s=$)==null?void 0:s.resources)||{},l={bg_light_blue:((n=d.bg_light_blue)==null?void 0:n.url)||d.bg_light_blue,bg_dark_blue:((a=d.bg_dark_blue)==null?void 0:a.url)||d.bg_dark_blue,bg_dark_red:((o=d.bg_dark_red)==null?void 0:o.url)||d.bg_dark_red,bg_white:((r=d.bg_white)==null?void 0:r.url)||d.bg_white}[e.activeTheme]||"";window.SettingsManager.changeTheme(e.activeTheme,l)}return setTimeout(()=>{S.value="idle"},2e3),!0}catch(c){return console.error("[AdminStore] ❌ Error saving branding:",c),k(()=>{S.value="error",A.value=c.message||"Error al guardar la identidad."}),!1}}function mi(e){Tt.value=e}function hi(e){kt.value=e||[]}function vi(e){Lt.value=e||[]}async function He(e){var n;const{default:t}=await b(async()=>{const{default:a}=await import("./AuthService-CSunz10s.js");return{default:a}},__vite__mapDeps([2,0,1])),i=t.profile;if(!i)throw new Error("No session profile found");const s=JSON.parse(JSON.stringify(e));try{const{default:a}=await b(async()=>{const{default:f}=await import("./index-BK4cBDDl.js").then(m=>m.j);return{default:f}},__vite__mapDeps([0,1])),o=a.getAll(),r=o.database.supabaseUrl,c=o.database.supabaseKey,d=((n=t.session)==null?void 0:n.access_token)||c;console.log("🔴 BUG-HUNT: [AdminStore _persistConfig] USANDO API REST DIRECTA. ID:",i.restaurant_id);const u=`${r}/rest/v1/perfil_restaurante?id=eq.${i.restaurant_id}`,l=await fetch(u,{method:"PATCH",headers:{"Content-Type":"application/json",apikey:c,Authorization:`Bearer ${d}`,Prefer:"return=representation"},body:JSON.stringify({configuracion_json:s})});if(!l.ok){const f=await l.text();throw new Error(`Error de Red Supabase (${l.status}): ${f}`)}const p=await l.json();console.log("🔴 BUG-HUNT: [AdminStore _persistConfig] Respuesta REST Exitosa:",p),p&&p.length>0?t.profile.configuracion_json=p[0].configuracion_json:console.warn("🔴 BUG-HUNT: El update no retornó filas. Posible error de RLS o ID inexistente.")}catch(a){throw console.error("🔴 BUG-HUNT: [AdminStore _persistConfig] fallo crítico en persistencia:",a),a}try{const{default:a}=await b(async()=>{const{default:o}=await import("./index-BK4cBDDl.js").then(r=>r.j);return{default:o}},__vite__mapDeps([0,1]));a.applyInterfaceOverrides(t.profile)}catch(a){console.warn("[AdminStore] AppConfig sync skipped:",a)}}function Ne(){window.dispatchEvent(new CustomEvent("admin:config-changed",{detail:{config:M.value}})),window.AppInit&&typeof window.AppInit.loadContent=="function"&&window.AppInit.loadContent("home")}const se=Object.freeze(Object.defineProperty({__proto__:null,activeMenuSheet:Oe,activeTab:$t,currentProduct:qe,hasValidContext:Q,hiddenCategories:oi,initContext:zt,interfaceCustomizations:ci,interfaces:kt,isEditorActive:Tt,isLoading:Mt,liquorCategories:Lt,profileConfig:M,restaurantId:pe,restoreSheetConfig:ui,saveBranding:fi,saveError:A,saveProductOverride:pi,saveSheetConfig:qt,saveStatus:S,selectMenuSheet:di,selectProduct:It,setActiveTab:li,setEditorActive:mi,setInterfaces:hi,setLiquorCategories:vi},Symbol.toStringTag,{value:"Module"})),_i={config:{drawerId:"property-editor-sidebar",containerId:"property-editor-content",backdropId:"sidebar-backdrop",desktopBreakpoint:1280,formId:"property-editor-form"},state:{activeTab:"products",currentProduct:null,currentProductFlags:null,activeMenuSheet:null,activeBranding:null,editingPresentationId:null,hiddenOverridesCache:null,hiddenActiveCategory:null,isWide:!1,isUploadingMedia:!1},init(){console.log("🔧 AdminController: Initializing..."),this.drawer=document.getElementById(this.config.drawerId),this.container=document.getElementById(this.config.containerId),this.drawer&&(this._bindEditorStateEvents(),window.addEventListener("app:interfaces-ready",e=>{this.state.activeTab==="menus"&&this._renderActiveContent()}),$.interfaces&&$.interfaces.length>0&&this.state.activeTab==="menus"&&this._renderActiveContent(),window.addEventListener("MEDIA_UPLOAD_PROGRESS",e=>{this.state.isUploadingMedia=e.detail.active,this._updateSaveButtonStatus()}),this._initAdminStore(),console.log("AdminController: Ready."))},async _initAdminStore(){try{const{default:a}=await b(async()=>{const{default:r}=await import("./AuthService-CSunz10s.js");return{default:r}},__vite__mapDeps([2,0,1]));if(!await a.waitForRestaurantContext())return}catch(a){console.error("[PropertyEditor] Auth guard check failed:",a);return}const e=15,t=1e3;let i=0;const s=async()=>{try{const{default:a}=await b(async()=>{const{default:r}=await import("./AuthService-CSunz10s.js");return{default:r}},__vite__mapDeps([2,0,1])),o=a.profile;return o&&o.restaurant_id?(zt(o.restaurant_id,o.configuracion_json||{}),!0):!1}catch(a){return console.error("[PropertyEditor] _initAdminStore error:",a),!1}};if(await s())return;const n=setInterval(async()=>{if(i++,await s()){clearInterval(n);return}i>=e&&(clearInterval(n),console.warn("[PropertyEditor] AdminStore init gave up after",e,"retries. Sheet saves will fail."))},t)},_bindEditorStateEvents(){H.subscribe(e=>{e.type==="PRODUCT_SELECTED"?(this.state.activeTab="products",this.loadAndRenderProduct(e.product),this.open()):e.type==="SELECTION_CLEARED"?this.renderDashboard():e.type==="MODE_CHANGED"&&(e.isEditing?(this.renderDashboard(),this.open()):this.close())})},open(){ge.close("settings-menu"),ge.open(this.config.drawerId,{disableBackdrop:!0})},close(){ge.close(this.config.drawerId,!0),H.clearSelection()},renderShell(){this.container&&(this.drawer&&(this.state.isWide?this.drawer.classList.add("wide-mode"):this.drawer.classList.remove("wide-mode")),this.container.innerHTML=Re.templateShell(this.state),this._bindShellEvents(),this._renderActiveContent())},_bindShellEvents(){this.container.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",()=>{this.state.activeTab=s.dataset.tab,this._renderActiveContent(),this.container.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active-tab")),s.classList.add("active-tab"),typeof this._toggleCreateButtonVisibility=="function"&&this._toggleCreateButtonVisibility()})});const e=this.container.querySelector(".wide-mode-btn");e&&e.addEventListener("click",()=>{this.state.isWide=!this.state.isWide,this.renderShell()});const t=this.container.querySelector(".exit-admin-btn");t&&t.addEventListener("click",()=>H.toggleMode());const i=this.container.querySelector(".btn-create-custom-product");if(i){i.addEventListener("click",()=>{const o=document.querySelector(".main-content-screen")||document.querySelector("[data-category]"),r=o==null?void 0:o.getAttribute("data-category");r&&r!=="home"?H.selectProduct({id:null,tableName:r,is_custom:!0}):ye.warn("[PropertyEditor] No active category found to create product in. Navigate to a category first.")});const s=()=>{if(this.state.activeTab!=="products"){i.style.display="none";return}const o=document.querySelector(".main-content-screen")||document.querySelector("[data-category]"),r=o==null?void 0:o.getAttribute("data-category");!r||r==="home"?i.style.display="none":i.style.display="flex"};this._toggleCreateButtonVisibility=s,s();const n=new MutationObserver(()=>s()),a=document.getElementById("app")||document.body;n.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-category"]}),this._createBtnObserver=n}},async _renderActiveContent(){const e=document.getElementById("admin-dynamic-content");if(!e)return;const t=e.querySelector("#preact-options-builder-root");if(t)try{const{unmountOptionsBuilder:i}=await b(async()=>{const{unmountOptionsBuilder:s}=await import("./OptionsBuilderWidget-DIdJ6_zu.js");return{unmountOptionsBuilder:s}},__vite__mapDeps([3,4,5,0,1,6]));i(t)}catch(i){console.error("Error unmounting Preact widget:",i)}try{const{unmountProductForm:i}=await b(async()=>{const{unmountProductForm:s}=await import("./ProductFormWidget-C9ECliam.js");return{unmountProductForm:s}},__vite__mapDeps([7,0,1,4,5,6]));i(e)}catch{}if(e.innerHTML="",this.state.activeTab==="products")if(this.state.currentProduct){try{const{mountProductForm:i}=await b(async()=>{const{mountProductForm:s}=await import("./ProductFormWidget-C9ECliam.js");return{mountProductForm:s}},__vite__mapDeps([7,0,1,4,5,6]));await i(e)}catch(i){console.warn("[PropertyEditor] ProductFormWidget mount failed, falling back to ProductFormView",i),e.innerHTML=st.render(this.state.currentProduct)}this._bindFormEvents(e)}else e.innerHTML=Re.templateHub();else if(this.state.activeTab==="menus"){const{default:i}=await b(async()=>{const{default:a}=await import("./AuthService-CSunz10s.js");return{default:a}},__vite__mapDeps([2,0,1])),s=i.profile,n=(s==null?void 0:s.configuracion_json)||{};if(this.state.activeMenuSheet){const a=window.DIContainer||window.container;let o=null;if(a)try{o=a.resolve("ProductRepository")}catch(r){console.error("Error resolving ProductRepository",r)}try{let c=((window.AppConfig||{}).interfaces||[]).find(d=>d.slug===this.state.activeMenuSheet||d.id===this.state.activeMenuSheet||d.categoria===this.state.activeMenuSheet);if(!c&&o&&typeof o.getLicoresCategories=="function"){const{formatSlug:d}=await b(async()=>{const{formatSlug:p}=await import("./index-BK4cBDDl.js").then(f=>f.l);return{formatSlug:p}},__vite__mapDeps([0,1])),l=(await o.getLicoresCategories()).find(p=>(p.slug||d(p.nombre||p.name))===this.state.activeMenuSheet);if(l){const p=l.nombre||l.name;c={id:this.state.activeMenuSheet,nombre:p,label:p,name:p,descripcion:"Subcategoría de Licores",image:l.imagen||l.image||l.icono,thumbnailUrl:l.imagen||l.image||l.icono}}}if(c){const{mountMenuSheetEditor:d}=await b(async()=>{const{mountMenuSheetEditor:u}=await import("./MenuSheetEditorWidget-DRI30dkN.js");return{mountMenuSheetEditor:u}},__vite__mapDeps([8,0,1,4,6]));d(e,this.state.activeMenuSheet,c,n,()=>{this.state.activeMenuSheet=null,this._renderActiveContent()})}else e.innerHTML=await Ve.render(this.state.activeMenuSheet,n,o)}catch(r){console.warn("[PropertyEditor] MenuSheetEditorWidget mount failed, fallback:",r),e.innerHTML=await Ve.render(this.state.activeMenuSheet,n,o)}this._bindMenuEditorEvents(this.container)}else{const a=window.DIContainer||window.container;let o=null;if(a)try{o=a.resolve("ProductRepository")}catch(r){console.error("Error resolving ProductRepository",r)}try{const{mountMenuSheetsList:r}=await b(async()=>{const{mountMenuSheetsList:d}=await import("./MenuSheetEditorWidget-DRI30dkN.js");return{mountMenuSheetsList:d}},__vite__mapDeps([8,0,1,4,6])),c=await Ue._getActualInterfaces(n,o);r(e,c,d=>{this.state.activeMenuSheet=d,this._renderActiveContent()})}catch(r){console.warn("[PropertyEditor] MenuSheetsListWidget mount failed, fallback:",r),e.innerHTML=await Ue.render(n,o),this._bindMenuEvents(this.container)}}}else if(this.state.activeTab==="branding"){const{default:i}=await b(async()=>{const{default:n}=await import("./AuthService-CSunz10s.js");return{default:n}},__vite__mapDeps([2,0,1])),s=i.profile;try{const{mountBrandingWidget:n}=await b(async()=>{const{mountBrandingWidget:a}=await import("./BrandingWidget-ERroERfw.js");return{mountBrandingWidget:a}},__vite__mapDeps([9,0,1,4,6]));await n(e,$.resources)}catch(n){console.warn("[PropertyEditor] BrandingWidget mount failed, fallback:",n),e.innerHTML=Ut.render((s==null?void 0:s.configuracion_json)||{},$.resources)}this._bindBrandingEvents(e)}else if(this.state.activeTab==="hidden"){this.state.hiddenActiveCategory=null,this.state.hiddenOverridesCache=null;try{const i=this._getSharedAdapter();if(i){const{default:a}=await b(async()=>{const{default:r}=await import("./AuthService-CSunz10s.js");return{default:r}},__vite__mapDeps([2,0,1])),o=a.getRestaurantId();o&&i.setRestaurantContext(o),this.state.hiddenOverridesCache=await i._ensureOverrides()}else{const{default:a}=await b(async()=>{const{default:l}=await import("./AuthService-CSunz10s.js");return{default:l}},__vite__mapDeps([2,0,1])),{supabase:o}=await b(async()=>{const{supabase:l}=await import("./index-BK4cBDDl.js").then(p=>p.S);return{supabase:l}},__vite__mapDeps([0,1])),r=a.getRestaurantId(),{data:c,error:d}=await o.from("menu_overrides").select("producto_id_generico, cambios").eq("restaurante_id",r);if(d)throw d;const u={};(c||[]).forEach(l=>{let p=l.cambios;for(;typeof p=="string"&&p.trim().startsWith("{");)try{p=JSON.parse(p)}catch{break}u[l.producto_id_generico]=p}),this.state.hiddenOverridesCache=u}const s=this._getSharedAdapter(),n=(s==null?void 0:s.productData)||{};try{const{mountHiddenProducts:a}=await b(async()=>{const{mountHiddenProducts:o}=await import("./HiddenProductsWidget-BY9n68Am.js");return{mountHiddenProducts:o}},__vite__mapDeps([10,0,1,4,6]));a(e,this.state.hiddenOverridesCache||{},n)}catch(a){console.warn("[PropertyEditor] HiddenProductsWidget mount failed, fallback:",a),this._renderHiddenProductsView()}}catch(i){console.error("Error loading hidden products:",i),this.state.hiddenOverridesCache={},this._renderHiddenProductsView()}}},_getSharedAdapter(){const e=window.DIContainer||window.container;if(e)try{return e.resolve("ProductRepository")}catch{}return null},_renderHiddenProductsView(){const e=document.getElementById("admin-dynamic-content");if(!e)return;const t=this._getSharedAdapter(),i=(t==null?void 0:t.productData)||{};e.innerHTML=Vt.render(this.state.hiddenOverridesCache,i,this.state.hiddenActiveCategory),this._bindHiddenProductsEvents(this.container)},_setHiddenActiveCategory(e){this.state.hiddenActiveCategory=e,this._renderHiddenProductsView()},async _confirmAction(e,t="Aceptar",i="Cancelar"){const{ModalSystem:s}=await b(async()=>{const{ModalSystem:n}=await import("./index-BK4cBDDl.js").then(a=>a.k);return{ModalSystem:n}},__vite__mapDeps([0,1]));if(!document.getElementById("saas-modal-button-fix")){const n=document.createElement("style");n.id="saas-modal-button-fix",n.innerHTML=`
                .sys-modal-footer { justify-content: center !important; gap: 16px !important; }
                .sys-modal-footer .btn { flex: 0 1 auto !important; min-width: 120px !important; padding: 12px 24px !important; }
            `,document.head.appendChild(n)}return new Promise(n=>{s.show({title:"Atención",size:"notice",content:`<p class="u-modal-text-center">${e}</p>`,onClose:()=>n(!1),actions:[{label:i,type:"contrast",onClick:()=>{n(!1),s.close()}},{label:t,type:"primary",onClick:()=>{n(!0),s.close()}}]})})},_bindHiddenProductsEvents(e){e._hasHiddenEvents||(e._hasHiddenEvents=!0,e.addEventListener("click",async t=>{if(t.target.closest(".btn-restore-hidden")){const i=t.target.closest(".btn-restore-hidden"),s=i.dataset.id,n=i.dataset.category||"el menú",a=i.dataset.tabla;if(await this._confirmAction(`¿Estás seguro de que deseas regresar este producto a <b>${n}</b>?`,"Restaurar","Cancelar")){const r=i.innerHTML;i.innerHTML='<span class="material-icons-round" style="font-size: 18px; animation: spin 1s linear infinite;">sync</span> Restaurando...',i.disabled=!0;const c=t.target.closest(".hidden-product-card");c&&(c.style.opacity="0.5"),window.dispatchEvent(new CustomEvent("SAAS_UNHIDE_PRODUCT",{detail:{productId:s,resolve:()=>{i.innerHTML='<span class="material-icons-round" style="color: #4ade80;">check_circle</span> ¡Restaurado!',i.style.backgroundColor="rgba(74, 222, 128, 0.1)",i.style.color="#4ade80",i.style.borderColor="rgba(74, 222, 128, 0.3)",setTimeout(()=>{this.state.hiddenOverridesCache&&this.state.hiddenOverridesCache[s]&&(delete this.state.hiddenOverridesCache[s],this.state.hiddenActiveCategory&&(Object.values(this.state.hiddenOverridesCache).some(u=>(u.hidden===!0||u.hidden==="true"||u.hidden===1)&&u.tabla===this.state.hiddenActiveCategory)||(this.state.hiddenActiveCategory=null))),this._renderHiddenProductsView(),a&&window.AppInit&&typeof window.AppInit.loadContent=="function"&&window.AppInit.loadContent(a)},1200)},reject:d=>{i.innerHTML=r,i.disabled=!1,c&&(c.style.opacity="1"),alert("Error al restaurar: "+d.message)}}}))}}else if(t.target.closest(".btn-back-hidden-categories"))this._setHiddenActiveCategory(null);else if(t.target.closest(".hidden-category-card")){const s=t.target.closest(".hidden-category-card").dataset.category;this._setHiddenActiveCategory(s)}}))},_bindMenuEvents(e){e.querySelectorAll(".edit-sheet-btn").forEach(t=>{t.addEventListener("click",()=>{this.state.activeMenuSheet=t.dataset.id,this._renderActiveContent()})}),e.querySelectorAll(".delete-sheet-btn").forEach(t=>{t.addEventListener("click",()=>{this.handleToggleCategoryVisibility(t.dataset.id)})})},_bindMenuEditorEvents(e){e._hasMenuEditorEvents||(e._hasMenuEditorEvents=!0,e.addEventListener("click",async t=>{if(t.target.closest(".btn-back-sheets")){this.state.activeMenuSheet=null,this._renderActiveContent();return}const s=t.target.closest(".save-sheet-config");if(s){const a=s.dataset.id;await this.handleSaveMenuConfig(a);return}if(t.target.closest(".btn-restore-interface")){await this._confirmAction("¿Restaurar esta interfaz a sus valores originales? Se perderán el nombre, descripción e imágenes.","Restaurar","Cancelar")&&await this.handleRestoreInterface(this.state.activeMenuSheet);return}}),e.addEventListener("change",t=>{const i=t.target.closest(".toggle-visibility-switch");if(i){const s=i.closest(".visibility-switch-card"),n=s==null?void 0:s.querySelector(".label"),a=s==null?void 0:s.querySelector(".status-desc"),o=s==null?void 0:s.querySelector(".material-icons-round"),r=i.checked;s&&(s.classList.toggle("is-active",r),s.classList.toggle("is-inactive",!r)),n&&(n.textContent=r?"Sección Activa":"Sección Desactivada"),a&&(a.textContent=r?"Visible en el menú":"Oculta para clientes"),o&&(o.textContent=r?"visibility":"visibility_off")}}),this._initMenuEditorUploaders())},async _initMenuEditorUploaders(){var t,i;const e=document.getElementById("interface-thumbnail-container");if(!(!e||!this.state.activeMenuSheet))try{const{default:s}=await b(async()=>{const{default:u}=await import("./AuthService-CSunz10s.js");return{default:u}},__vite__mapDeps([2,0,1])),n=s.profile,o=((t=((n==null?void 0:n.configuracion_json)||{}).interface_customizations)==null?void 0:t[this.state.activeMenuSheet])||{};let r=(i=$.interfaces)==null?void 0:i.find(u=>u.slug===this.state.activeMenuSheet||u.id===this.state.activeMenuSheet);if(!r){const{liquorSubcategories:u}=await b(async()=>{const{liquorSubcategories:l}=await Promise.resolve().then(()=>Rt);return{liquorSubcategories:l}},void 0);r=u.find(l=>l.id===this.state.activeMenuSheet)}const c=o.thumbnail||o.image||(r==null?void 0:r.thumbnailUrl)||(r==null?void 0:r.image)||"",d=new N({type:"image",category:"interfaces",initialUrl:c,onUploadSuccess:u=>{this.state.interfaceCustoms||(this.state.interfaceCustoms={}),this.state.interfaceCustoms[this.state.activeMenuSheet]||(this.state.interfaceCustoms[this.state.activeMenuSheet]={}),this.state.interfaceCustoms[this.state.activeMenuSheet].thumbnail=u}});e.innerHTML="",e.appendChild(d.getElement())}catch(s){console.error("Error init MenuSheet Uploader:",s)}},_bindBrandingEvents(e){var a;const t=document.getElementById("branding-logo-container");if(t){const o=new N({type:"image",category:"recursos",initialUrl:((a=$.resources.logo)==null?void 0:a.url)||"",onUploadSuccess:r=>{this.state.pendingLogo=r}});t.innerHTML="",t.appendChild(o.getElement())}const i=e.querySelector("#theme-selector");i&&i.querySelectorAll(".theme-option").forEach(o=>{o.addEventListener("click",()=>{i.querySelectorAll(".theme-option").forEach(r=>r.classList.remove("is-selected")),o.classList.add("is-selected"),this.state.selectedTheme=o.dataset.themeId})});const s=e.querySelector("#logo-size-selector");s&&s.querySelectorAll(".size-pill").forEach(o=>{o.addEventListener("click",()=>{s.querySelectorAll(".size-pill").forEach(r=>r.classList.remove("active")),o.classList.add("active"),this.state.selectedLogoSize=o.dataset.size})});const n=e.querySelector(".save-branding-btn");n&&n.addEventListener("click",()=>{this.handleSaveBranding()})},async handleSaveBranding(){const e=document.getElementById("branding-name"),t=document.getElementById("show-branding-name"),i=document.getElementById("selected-theme-value"),s=document.getElementById("selected-logo-size"),n={businessName:e?e.value:"",showEstablishmentName:t?t.checked:!0,logoSize:s?s.value:this.state.selectedLogoSize,logo:this.state.pendingLogo,activeTheme:i?i.value:this.state.selectedTheme};try{const{saveBranding:a}=await b(async()=>{const{saveBranding:r}=await Promise.resolve().then(()=>se);return{saveBranding:r}},void 0);if(await a(n)){const r=document.querySelector(".save-branding-btn");r&&(r.innerHTML='<span class="material-icons-round">check</span> Guardado',r.classList.add("btn-success"),setTimeout(()=>{r.innerHTML='<span class="material-icons-round">save</span> Guardar Cambios',r.classList.remove("btn-success")},2e3)),n.activeTheme&&window.SettingsManager&&window.SettingsManager.changeTheme(n.activeTheme)}}catch(a){console.error("Error saving branding:",a),alert("Error al guardar la identidad.")}},async handleToggleCategoryVisibility(e){var t;try{const{profileConfig:i,saveSheetConfig:s}=await b(async()=>{const{profileConfig:r,saveSheetConfig:c}=await Promise.resolve().then(()=>se);return{profileConfig:r,saveSheetConfig:c}},void 0),o=(((t=i.value)==null?void 0:t.hidden_categories)||[]).includes(e);await s(e,{isVisible:o}),this._renderActiveContent()}catch(i){console.error("Error toggling category visibility:",i)}},async handleSaveMenuConfig(e){const t=this.container.querySelector(".save-sheet-config");try{const i={},s=document.getElementById("sheet-custom-name"),n=document.getElementById("sheet-custom-desc");if(s&&(i.name=s.value),n&&(i.description=n.value),this.state.interfaceCustoms&&this.state.interfaceCustoms[e]){const r=this.state.interfaceCustoms[e];r.image&&(i.image=r.image),r.thumbnail&&(i.thumbnail=r.thumbnail)}const a=this.container.querySelector(".toggle-visibility-switch");a&&(i.isVisible=a.checked),t&&(t.innerHTML='<span class="material-icons-round spinning">cloud_sync</span> Guardando...',t.disabled=!0),console.log("[PropertyEditor] Calling saveSheetConfig:",e,i);const o=await qt(e,i);if(console.log("[PropertyEditor] saveSheetConfig returned:",o),t){if(o)t.innerHTML='<span class="material-icons-round">check</span> Guardado',t.classList.add("btn-success"),this.state.interfaceCustoms&&delete this.state.interfaceCustoms[e];else{t.innerHTML='<span class="material-icons-round">error</span> Error',t.classList.add("btn-danger");const r=A.value||"Error al guardar";console.error("[PropertyEditor] Save failed:",r)}t.disabled=!1,setTimeout(()=>{t.innerHTML='<span class="material-icons-round">save</span> Guardar Cambios',t.classList.remove("btn-success","btn-danger")},2500)}}catch(i){console.error("[PropertyEditor] handleSaveMenuConfig CRASHED:",i),t&&(t.innerHTML='<span class="material-icons-round">error</span> Error',t.classList.add("btn-danger"),t.disabled=!1,setTimeout(()=>{t.innerHTML='<span class="material-icons-round">save</span> Guardar Cambios',t.classList.remove("btn-danger")},2500))}},async handleRestoreInterface(e){try{const{restoreSheetConfig:t}=await b(async()=>{const{restoreSheetConfig:s}=await Promise.resolve().then(()=>se);return{restoreSheetConfig:s}},void 0);await t(e)&&(this.state.interfaceCustoms&&delete this.state.interfaceCustoms[e],this._renderActiveContent())}catch(t){console.error("[PropertyEditor] Error al restaurar interfaz:",t)}},async loadAndRenderProduct(e){var t,i,s,n,a,o;if(e){if(this.state.activeCustomId=null,!e.id&&e.tableName){console.log("✨ Initialization of New Custom Product Editor:",e.tableName),this.state.currentProduct=J.toEditor({categoria:e.tableName,...e}),this.state.currentProductFlags={isHidden:((t=this.state.currentProduct.flags)==null?void 0:t.isHidden)??!1,isAvailable:((i=this.state.currentProduct.flags)==null?void 0:i.isAvailable)??!0},this.renderShell();return}if(e.id){console.log("🔄 Product Selected. Triggering UUID Search for parity:",e.id),this.container&&(this.container.innerHTML=`
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 15px; color: #94a3b8;">
                    <div class="spinner"></div>
                    <span>Sincronizando datos...</span>
                </div>
            `);try{const r=this._getSharedAdapter();if(!r)throw new Error("ProductRepository not available in DI Container");const{default:c}=await b(async()=>{const{default:p}=await import("./AuthService-CSunz10s.js");return{default:p}},__vite__mapDeps([2,0,1])),d=await c.waitForRestaurantContext();d&&r.setRestaurantContext(d);const u=await r.getProductByIdV2(e.id,e.category||e.categoria);u||console.warn("⚠️ Fresh search returned null, falling back to raw data.");const l=u||e;this.state.currentProduct=J.toEditor(l),It(this.state.currentProduct),this.state.currentProductFlags={isHidden:((s=this.state.currentProduct.flags)==null?void 0:s.isHidden)??!1,isAvailable:((n=this.state.currentProduct.flags)==null?void 0:n.isAvailable)??!0},console.log("✅ Data Normalized (Editor Schema):",this.state.currentProduct,"Flags:",this.state.currentProductFlags),this.renderShell()}catch(r){console.error("❌ Error during product parity search:",r),this.state.currentProduct=J.toEditor(e),this.state.currentProductFlags={isHidden:((a=this.state.currentProduct.flags)==null?void 0:a.isHidden)??!1,isAvailable:((o=this.state.currentProduct.flags)==null?void 0:o.isAvailable)??!0},this.renderShell()}}}},_bindFormEvents(e){const t=e.querySelector(".close-product-btn");t&&t.addEventListener("click",()=>{this.state.currentProduct=null,this.state.activeCustomId=null,H.clearSelection()});const i=document.getElementById("uploader-image-container");if(i){const r=new N({type:"image",category:this.state.currentProduct.category,initialUrl:this.state.currentProduct.media.image,onUploadSuccess:c=>{this.state.currentProduct.media.image=c}});i.appendChild(r.getElement())}const s=document.getElementById("uploader-video-container");if(s){const r=new N({type:"video",category:this.state.currentProduct.category,initialUrl:this.state.currentProduct.media.video,onUploadSuccess:c=>{this.state.currentProduct.media.video=c}});s.appendChild(r.getElement())}const n=e.querySelector("#property-editor-form");n&&(n.addEventListener("submit",r=>{r.preventDefault(),this.handleSave()}),n.addEventListener("change",r=>{const c=r.target;c.name==="hidden"?this.state.currentProductFlags.isHidden=!c.checked:c.name==="isAvailable"&&(this.state.currentProductFlags.isAvailable=c.checked)}));const a=e.querySelector(".btn-reset-product");if(a){const r=this.state.currentProduct._isCustom;r&&(a.innerHTML='<span class="material-icons-round">delete_forever</span> Eliminar Producto',a.classList.replace("btn-secondary","btn-danger")),a.addEventListener("click",async()=>{const c=r?"¿Estás seguro de que deseas eliminar permanentemente este producto personalizado?":"¿Estás seguro de que deseas restaurar el producto a como estaba originalmente?";await this._confirmAction(c,r?"Eliminar":"Restaurar","Cancelar")&&this.handleReset(r)})}const o=e.querySelector("#preact-options-builder-root");o&&b(async()=>{const{mountOptionsBuilder:r}=await import("./OptionsBuilderWidget-DIdJ6_zu.js");return{mountOptionsBuilder:r}},__vite__mapDeps([3,4,5,0,1,6])).then(({mountOptionsBuilder:r})=>r(o)).catch(r=>console.error("Error montando OptionsBuilderWidget:",r)),this._mountMixerWidgets(e),this._bindPresentationEvents(e)},async _mountMixerWidgets(e){const t=e.querySelectorAll('[id^="mixer-widget-root-"]');if(t.length)try{const{mountMixerWidget:i}=await b(async()=>{const{mountMixerWidget:s}=await import("./MixerWidget-CTYvHpMu.js");return{mountMixerWidget:s}},__vite__mapDeps([11,4,0,1,6]));t.forEach(s=>{const n=s.dataset.mixerType,a=JSON.parse(s.dataset.initial||"[]");i(s,{type:n,initialItems:a})})}catch(i){console.error("[PropertyEditor] Error montando MixerWidget:",i)}},_bindMixerEvents(e){},_bindPresentationEvents(e){e.addEventListener("click",async t=>{const i=t.target.closest(".admin-presentation-remove");if(i){const n=i.dataset.id,a=i.closest(".presentation-field-group"),o=a.querySelector(".presentation-json-value");try{let r=JSON.parse(o.value);if(r=r.filter(c=>c.id!==n),this.state.editingPresentationId===n){this.state.editingPresentationId=null;const c=a.querySelector(".presentation-add-label"),d=a.querySelector(".presentation-add-price");c&&(c.value=""),d&&(d.value="")}this.state.currentProduct.presentaciones=r,this._rePaintPresentationsArea(a)}catch(r){console.error("Error parseando JSON de presentaciones al eliminar",r)}return}const s=t.target.closest(".presentation-add-btn");if(s){t.preventDefault(),t.stopPropagation();const n=s.closest(".presentation-field-group"),a=n.querySelector(".presentation-json-value"),o=n.querySelector(".presentation-add-label"),r=n.querySelector(".presentation-add-price");if(!o||!r||!a)return;const c=o.value.trim(),d=parseFloat(r.value);if(!(!isNaN(d)&&d>=0))return;try{let l=JSON.parse(a.value);if(this.state.editingPresentationId){const p=l.findIndex(f=>f.id===this.state.editingPresentationId);p!==-1&&(l[p].label=c,l[p].precio=d)}else{const p=this.state.currentProduct._schema,f=(p==null?void 0:p.priceStrategy)==="liquor"?3:5;if(l.length>=f){console.warn(`[PropertyEditor] Límite de ${f} presentaciones alcanzado. No se puede agregar más.`);return}c||console.warn("[PropertyEditor] Agregando presentación sin descripción — se mostrará solo el precio.");const m=c?c.toLowerCase().replace(/[^a-z0-9]/g,"_"):`precio_${Date.now()}`;l=l.filter(g=>g.id!==m),l.push({id:m,label:c,precio:d})}a.value=JSON.stringify(l),this.state.currentProduct.presentaciones=l,o.value="",r.value="",this.state.editingPresentationId=null,this._rePaintPresentationsArea(n)}catch(l){console.error("[PropertyEditor] Error procesando presentaciones:",l)}}}),e.addEventListener("keypress",t=>{if(t.key==="Enter"){const i=t.target.closest(".presentation-add-price");if(i){t.preventDefault();const n=i.closest(".presentation-field-group").querySelector(".presentation-add-btn");n&&n.click()}}}),e.addEventListener("click",t=>{const i=t.target.closest(".admin-presentation-btn");if(i&&!t.target.closest(".admin-presentation-remove")){t.preventDefault(),t.stopPropagation();const s=i.dataset.id,n=i.closest(".presentation-field-group");this.state.editingPresentationId=s,this._rePaintPresentationsArea(n)}})},async _rePaintPresentationsArea(e){var t;try{const{ProductFormView:i}=await b(async()=>{const{ProductFormView:n}=await Promise.resolve().then(()=>jt);return{ProductFormView:n}},void 0),s=this.state.currentProduct;if(s&&s._schema){const n=this.state.editingPresentationId;let a="",o="";if(n){const c=(t=s.presentaciones)==null?void 0:t.find(d=>d.id===n);c&&(a=c.label||"",o=c.precio||"")}const r=i._renderPresentationsInput(s,s._schema,s.prices||{},n,a,o);e.outerHTML=r}}catch(i){console.error("[PropertyEditor] Error repainting presentations area",i)}},handleReset(e=!1){const t=this.state.currentProduct,i=this.container.querySelector(".btn-reset-product");i.textContent=e?"Eliminando...":"Restaurando...",i.disabled=!0;const s=new CustomEvent("SAAS_RESET_PRODUCT",{detail:{productId:t.id,tableName:t.tableName}});window.dispatchEvent(s),setTimeout(()=>{this.state.currentProduct=null,H.clearSelection(),document.querySelectorAll(".modal-backdrop, .sidebar-backdrop").forEach(a=>a.remove()),document.body.style.overflow="";const n=document.getElementById("property-editor-sidebar");n&&n.classList.remove("active"),this.renderDashboard()},1e3)},handleSave(){var p,f,m,g;const e={},t=this.container.querySelector("#property-editor-form");if(!t)return;t.querySelectorAll("input, textarea, select").forEach(h=>{h.name&&(e[h.name]=h.value)}),console.log("🔴 BUG-HUNT: RAW Manual Scan Extracted:",e);const i=this.state.currentProduct,s={name:e.name||e.nombre||i.name,description:e.description||e.ingredientes||e.descripcion||"",opciones_personalizadas:e.opciones_personalizadas,prices:{},mixers:{},media:{image:((p=i==null?void 0:i.media)==null?void 0:p.image)||null,video:((f=i==null?void 0:i.media)==null?void 0:f.video)||null},flags:{isAvailable:((m=this.state.currentProductFlags)==null?void 0:m.isAvailable)??!0,isHidden:((g=this.state.currentProductFlags)==null?void 0:g.isHidden)??!1}};if(["standard","precio","botella","litro","copa","orden","grande","familiar","extra_grande","10_piezas","15_piezas","25_piezas"].forEach(h=>{if(e[h]!==void 0&&e[h]!==null){const v=String(e[h]).trim();s.prices[h]=v===""?null:parseFloat(v)||0}}),e.presentaciones_json)try{s.presentaciones=JSON.parse(e.presentaciones_json)}catch(h){console.error("Error parsing presentaciones_json",h)}console.log("🔴 BUG-HUNT: Extracted formValues.prices:",s.prices),Object.keys(e).forEach(h=>{if(h.startsWith("mixer_")){const v=h.replace("mixer_",""),_=e[h];if(!_){s.mixers[v]=[];return}if(typeof _=="string"&&_.trim().startsWith("["))try{s.mixers[v]=JSON.parse(_)}catch(C){console.warn("[PropertyEditor] Error parsing mixer JSON, falling back to CSV:",C),s.mixers[v]=_.split(",").map(T=>({id:T.trim(),label:T.trim(),default:!1})).filter(T=>T.label!=="")}else typeof _=="string"?s.mixers[v]=_.split(",").map(C=>C.trim()).filter(C=>C!=="").map(C=>({id:C,label:C,default:!1})):Array.isArray(_)?s.mixers[v]=_:s.mixers[v]=[]}});const o=J.toEditor(i._original||i)._keysMap,r=J.toPersistence(s,o);console.log("🔴 BUG-HUNT: ProductAdapter _keysMap used:",o),i.id?r.id=i.id:(this.state.activeCustomId||(this.state.activeCustomId=crypto.randomUUID()),r.id=this.state.activeCustomId),r._tableName=i.tableName;const c=r.hasOwnProperty("opciones_personalizadas");let d=c?r.opciones_personalizadas:null;if(typeof d=="string"&&d.trim().startsWith("["))try{d=JSON.parse(d)}catch{d=[]}const u=i.opciones_personalizadas||[];if(c&&Array.isArray(d)&&d.length===0&&Array.isArray(u)&&u.length>0){_e.show({title:"Confirmar Eliminación",content:`¿Estás seguro de que quieres eliminar todas las opciones de personalización de <strong>${i.name||i.nombre}</strong>? El cliente no verá ningún modal al ordenarlo.`,actions:[{label:"Sí, eliminar",type:"primary",onClick:()=>{_e.close(),document.querySelectorAll(".sys-modal-overlay").forEach(h=>{h.style.display="none",h.style.pointerEvents="none"}),document.body.style.overflow="",setTimeout(()=>this._triggerSaveEvent(r),100)}},{label:"Cancelar",type:"ghost",onClick:()=>{_e.close(),document.querySelectorAll(".sys-modal-overlay").forEach(h=>{h.style.display="none",h.style.pointerEvents="none"})}}]});return}this._triggerSaveEvent(r)},_triggerSaveEvent(e){const t=this.container.querySelector(".btn-save");t&&(t.innerHTML='<span class="material-icons-round spinning">sync</span> Guardando...',t.disabled=!0);const i=new CustomEvent("SAAS_SAVE_OVERRIDE",{detail:{productId:e.id,payload:e,originalProduct:this.state.currentProduct}});window.dispatchEvent(i),setTimeout(()=>{t&&(t.disabled=!1,t.innerHTML='<span class="material-icons-round">check_circle</span> ¡Guardado!',t.style.background="#00c853",t.style.borderColor="#00c853"),setTimeout(()=>{var n,a;this.state.currentProduct=null,this.state.activeCustomId=null,H.clearSelection(),this.renderShell();const s=(a=(n=document.querySelector("[data-category]"))==null?void 0:n.dataset)==null?void 0:a.category;s&&window.AppInit&&typeof window.AppInit.loadContent=="function"&&window.AppInit.loadContent(s)},1200)},1500)},_updateSaveButtonStatus(){var t;const e=(t=this.container)==null?void 0:t.querySelector(".btn-save");e&&(this.state.isUploadingMedia?(e.disabled=!0,e.innerHTML='<span class="material-icons-round spinning">cloud_upload</span> Subiendo Multimedia...',e.style.opacity="0.6",e.style.pointerEvents="none"):(e.disabled=!1,e.innerHTML='<span class="material-icons-round">save</span> Guardar Cambios',e.style.opacity="1",e.style.pointerEvents="all",e.style.background="",e.style.borderColor=""))},renderDashboard(){this.state.currentProduct=null,this.renderShell()},async _bindBrandingEvents(e){var n;const t=["small","medium","large"],i=e.querySelector("#branding-logo-container");if(i){const{default:a}=await b(async()=>{const{default:d}=await import("./AuthService-CSunz10s.js");return{default:d}},__vite__mapDeps([2,0,1])),o=(n=$.resources)==null?void 0:n.logo,r=typeof o=="string"?o:(o==null?void 0:o.url)||"",c=new N({type:"image",category:"branding",initialUrl:r,onUploadSuccess:d=>{this.state.activeBranding=this.state.activeBranding||{},this.state.activeBranding.branding_logo_url=d,ye.info("[Branding] Logo URL captured:",d)}});i.appendChild(c.getElement())}e.querySelectorAll(".size-pill").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".size-pill").forEach(r=>r.classList.remove("active")),a.classList.add("active");const o=a.dataset.size;console.log(`[Branding-Telemetría] Click en pill: ${o}. Inyectando token...`),t.includes(o)?(document.documentElement.style.setProperty("--logo-current-size",`var(--logo-size-${o})`),console.log(`[Branding-Telemetría] Token --logo-current-size actualizado a: var(--logo-size-${o})`)):console.warn(`[Branding-Telemetría] Escala inválida detectada: ${o}`)})}),e.querySelectorAll(".theme-option").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".theme-option").forEach(o=>o.classList.remove("is-selected")),a.classList.add("is-selected")})});const s=e.querySelector(".save-branding-btn");s&&s.addEventListener("click",async()=>{var p,f;const{saveBranding:a}=await b(async()=>{const{saveBranding:m}=await Promise.resolve().then(()=>se);return{saveBranding:m}},void 0),o=e.querySelector("#branding-name"),r=e.querySelector("#show-branding-name"),c=e.querySelector(".theme-option.is-selected"),d=e.querySelector(".size-pill.active"),u={logo:(p=this.state.activeBranding)==null?void 0:p.branding_logo_url,businessName:(f=o==null?void 0:o.value)==null?void 0:f.trim(),showName:r==null?void 0:r.checked,activeTheme:c==null?void 0:c.dataset.themeId,logoScale:d==null?void 0:d.dataset.size};await a(u)?(s.innerHTML='<span class="material-icons-round">check_circle</span> ¡Guardado!',s.style.background="var(--color-success)",console.log("[Branding-Telemetría] Guardado exitoso. Forzando recarga total para validar transiciones..."),setTimeout(()=>{window.location.reload()},1500)):(s.innerHTML='<span class="material-icons-round">error</span> Error',s.style.background="var(--color-error)",setTimeout(()=>{s.innerHTML='<span class="material-icons-round">save</span> Guardar Cambios',s.style.background=""},3e3))})}},Ci=Object.freeze(Object.defineProperty({__proto__:null,default:_i},Symbol.toStringTag,{value:"Module"}));export{$t as A,pe as B,w as C,wi as D,Kt as J,Ci as P,hi as a,mi as b,fi as c,Si as d,pi as e,qt as f,di as g,It as h,li as i,zt as j,D as k,Q as l,ci as m,oi as n,Mt as o,A as p,xi as q,S as r,vi as s,Tt as t,Lt as u,kt as v,M as w,Oe as x,Ei as y,qe as z};
