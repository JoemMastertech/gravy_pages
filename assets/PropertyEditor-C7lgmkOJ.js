const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DoWTiArC.js","assets/index-SV0FPQTz.css","assets/AuthService-CcF7jOiY.js"])))=>i.map(i=>d[i]);
import{_ as h,L,g as $,A as m,e as _}from"./index-DoWTiArC.js";import y from"./SidebarManager-BcOD6Mmh.js";class g{constructor(i){this.config=i,this.container=document.createElement("div"),this.container.className="media-uploader",this.render()}render(){const{type:i,initialUrl:s}=this.config,a=i==="image"?"image/webp":"video/webm,image/webp",t=i==="image"?"Imagen (WebP)":"Video (WebM)",n="https://convertio.co/es/";this.container.innerHTML=`
            <div class="uploader-label">
                <span>${t}</span>
                <a href="${n}" target="_blank" class="help-link" title="Convertir archivos">?</a>
            </div>
            
            <div class="uploader-dropzone ${s?"has-file":""}" id="dropzone-${i}">
                <!-- Preview Layer -->
                ${this._renderPreview(i,s)}
                
                <!-- Action Layer (Hidden when has-file unless hover) -->
                <div class="uploader-actions">
                    <span class="icon">☁️</span>
                    <p class="instruction">Arrastra tu ${i==="image"?".webp":".webm"} aquí</p>
                    <button type="button" class="btn-micro">O selecciona</button>
                </div>

                <!-- Hidden Input -->
                <input type="file" accept="${a}" class="hidden-input">
                
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
        `,this._bindEvents()}_renderPreview(i,s){return s?s.toLowerCase().endsWith(".webp")||i==="image"?`<img src="${s}" class="preview-media" alt="Preview">`:`<video src="${s}" class="preview-media" muted loop autoplay></video>`:""}_bindEvents(){const i=this.container.querySelector(".uploader-dropzone"),s=this.container.querySelector(".hidden-input");this.container.querySelector("button"),i.addEventListener("click",()=>s.click()),["dragenter","dragover"].forEach(a=>{i.addEventListener(a,t=>{t.preventDefault(),t.stopPropagation(),i.classList.add("drag-active")})}),["dragleave","drop"].forEach(a=>{i.addEventListener(a,t=>{t.preventDefault(),t.stopPropagation(),i.classList.remove("drag-active")})}),s.addEventListener("change",a=>this._handleFiles(a.target.files)),i.addEventListener("drop",a=>this._handleFiles(a.dataTransfer.files))}async _handleFiles(i){if(!i||i.length===0)return;const s=i[0],{type:a}=this.config;if(!(a==="image"?["image/webp"]:["video/webm","image/webp"]).includes(s.type)){this._showError(`Formato incorrecto. Por favor usa ${a==="image"?".webp":".webm"} por velocidad.`);return}if(s.size>5*1024*1024){this._showError("El archivo es muy pesado (Max 5MB).");return}this._setLoading(!0),this._showError(null);let n=0;const r=setInterval(()=>{n+=Math.random()*10,n>90&&(n=90),this._updateProgress(Math.floor(n))},300);try{const o=await h(()=>import("./index-DoWTiArC.js").then(z=>z.S),__vite__mapDeps([0,1])),c=new o.default,{category:d}=this.config,u=(d||"default").toLowerCase().trim().replace(/\s+/g,"_"),v=a==="image"?"webp":"webm",p=a==="image"?"imagenes":"videos",f=["pizzas","alitas","platos_fuertes","cortes_de_carne","ensaladas","sopas","snacks","postres","comida"].includes(u)?"comida":"bebidas",b=`${Date.now()}_${Math.random().toString(36).substring(7)}.${v}`,E=`${p}/${f}/${u}/${b}`;L.info(`Subiendo archivo a: ${E}`);const S=await c.uploadFile(s,E);if(clearInterval(r),this._updateProgress(100),S)setTimeout(()=>{this._handleSuccess(S)},500);else throw new Error("Upload returned null URL")}catch(o){clearInterval(r),console.error("MediaUploader Error:",o);const c=o.message||"Error desconocido";this._showError(`Error: ${c}`),this._setLoading(!1)}}_handleSuccess(i){const s=this.container.querySelector(".uploader-loading");s.innerHTML=`
            <div class="success-icon">✅</div>
            <span>¡Carga Exitosa!</span>
        `,setTimeout(()=>{this._setLoading(!1),s.innerHTML=`
                 <div class="spinner"></div>
                 <div class="progress-bar-container">
                    <div class="progress-bar" style="width: 0%"></div>
                 </div>
                 <span class="progress-text">Subiendo... 0%</span>
            `;const a=this.container.querySelector(".uploader-dropzone"),t=a.querySelector(".preview-media");t&&t.remove();const n=this._renderPreview(this.config.type,i);a.insertAdjacentHTML("afterbegin",n),a.classList.add("has-file"),this.config.onUploadSuccess&&this.config.onUploadSuccess(i)},1500)}_setLoading(i){const s=this.container.querySelector(".uploader-loading");i?s.classList.remove("hidden"):s.classList.add("hidden")}_updateProgress(i){const s=this.container.querySelector(".progress-bar"),a=this.container.querySelector(".progress-text");s&&(s.style.width=`${i}%`),a&&(a.textContent=`Subiendo... ${i}%`)}_showError(i){const s=this.container.querySelector(".uploader-error");i?(s.textContent=i,s.classList.remove("hidden")):s.classList.add("hidden")}getElement(){return this.container}}const w={toEditor(e){if(!e)return null;const i=e.categoria||"default",s=$(i),a=["thumbnail","imagen","ruta_archivo"],t=a.find(l=>e[l]!==void 0&&e[l]!==null&&e[l]!==""),n=s.fields.find(l=>a.includes(l))||"imagen",r=t||n,o={name:e.nombre!==void 0?"nombre":e.nombre_coctel!==void 0?"nombre_coctel":"nombre",description:e.ingredientes!==void 0?"ingredientes":e.descripcion!==void 0?"descripcion":null,imageColumn:r,videoColumn:s.fields.includes("video")||e.video!==void 0?"video":null,tableName:s.tableName||"products"},c={},d={};(s.priceFields||[]).forEach(l=>{const f=typeof l=="object"?l.key:l,b=typeof l=="object"?l.column:l;e[b]!==void 0&&(c[f]=e[b],d[f]=b)}),e.precio!==void 0&&!c.standard&&(c.standard=e.precio,d.standard="precio");const v={},p={};return Object.keys(e).forEach(l=>{if(l.startsWith("mixers_")){const f=l.replace("mixers_","");v[f]=e[l],p[f]=l}}),{id:e.id,category:i,tableName:o.tableName,name:e[o.name]||"Sin Nombre",description:e[o.description]||"",prices:c,mixers:v,media:{image:this._resolveMediaUrl(e[o.imageColumn]),video:this._resolveMediaUrl(e[o.videoColumn])},flags:{isAvailable:e.disponible!==!1,isHidden:!!e.hidden},restaurantId:e.restaurant_id||e.restaurante_id||null,_keysMap:{...o,...d,...p,ownerColumn:e.restaurant_id!==void 0?"restaurant_id":"restaurante_id"},_schema:s,_original:e}},toPersistence(e,i){const s={};return e.name!==void 0&&i.name&&(s[i.name]=e.name),e.description!==void 0&&i.description&&(s[i.description]=e.description),e.prices&&Object.keys(e.prices).forEach(a=>{i[a]&&(s[i[a]]=e.prices[a])}),e.mixers&&Object.keys(e.mixers).forEach(a=>{if(i[a]){const t=e.mixers[a];s[i[a]]=Array.isArray(t)?t:typeof t=="string"?t.split(",").map(n=>n.trim()).filter(n=>n!==""):[]}}),e.media&&(e.media.image!==void 0&&i.imageColumn&&(s[i.imageColumn]=e.media.image),e.media.video!==void 0&&i.videoColumn&&(s[i.videoColumn]=e.media.video)),e.flags&&(e.flags.isAvailable!==void 0&&(s.disponible=e.flags.isAvailable),e.flags.isHidden!==void 0&&(s.hidden=e.flags.isHidden)),e.opciones_personalizadas!==void 0&&(s.opciones_personalizadas=e.opciones_personalizadas),s},_resolveMediaUrl(e){return e?e.startsWith("http")||e.startsWith("/assets")||e.startsWith("data:")?e:`${window.VITE_SUPABASE_URL||"https://paoisqasrqfujlqnzxow.supabase.co"}/storage/v1/object/public/productos/${e}`:null}},C={templateShell(e){const i=[{id:"products",label:"Editar Productos"},{id:"menus",label:"Hojas del Menú"},{id:"branding",label:"Identidad del Menú"}];return`
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
                            ${i.map(s=>`
                                <button class="tab-btn ${e.activeTab===s.id?"active-tab":""}" 
                                        data-tab="${s.id}">
                                    ${s.label}
                                </button>
                            `).join("")}
                        </div>
                    </nav>

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
        `},templateHub(){return`
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
        `},templatePlaceholder(e,i,s){return`
            <div class="admin-dashboard-view">
                 <div class="central-content">
                    <div class="hero-icon-wrapper w-16 h-16">
                        <div class="icon-circle w-16 h-16">
                             <span class="material-icons-round" style="font-size: 32px;">${e}</span>
                        </div>
                    </div>
                    <h3>${i}</h3>
                    <p>${s}</p>
                    <div style="margin-top: 20px; padding: 10px 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px dashed var(--surface-border);">
                        <code style="color: var(--text-muted); font-size: 0.8rem;">Module Pending Implementation</code>
                    </div>
                </div>
            </div>
        `}},A={render(e){const i=this._renderHeader(e),s=this._renderSection(e,["imagen","thumbnail","ruta_archivo","video"]),a=this._renderInstructions(e),t=this._renderSection(e,["mixers_botella","mixers_litro","mixers_copa"]),n=this._renderFlags(e);return`
            <div class="admin-product-form-wrapper">
                ${i}

                <div class="form-body">
                    <form id="property-editor-form" class="editor-form">
                        <div class="editor-grid-layout">
                            
                            <!-- ROW 1: Basic & Prices -->
                            <div class="editor-col-left">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">info</span>
                                        <h5>Información Básica</h5>
                                    </div>
                                    ${this._renderField("nombre",e)}
                                    ${this._renderSection(e,["ingredientes","descripcion","opciones_personalizadas"])}
                                </div>
                            </div>

                            <div class="editor-col-right">
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
                                            ${s}
                                        </div>
                                        <div class="instructions-zone">
                                            <div class="helper-box">
                                                <p class="helper-intro">Para que tu menú cargue el contenido multimedia rapidamente, requerimos formatos de última generación:</p>
                                                
                                                ${a}

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

                            <!-- ROW 3: Full Width Mixers & Flags -->
                            <div class="editor-full-width-column">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">liquor</span>
                                        <h5>Acompañantes (Mixers)</h5>
                                    </div>
                                    <div class="mixers-full-width-layout">
                                        ${t}
                                    </div>
                                </div>

                                <div class="flags-full-width-layout">
                                    ${n}
                                </div>
                            </div>
                        </div>

                        <div class="editor-actions-end">
                            <button type="submit" class="btn btn-primary btn-save">
                                <span class="material-icons-round">save</span>
                                <span>Guardar Cambios</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `},_renderInstructions(e){const i=(e.category||"").toLowerCase().trim().replace(/\s+/g,"_"),s=["cocteleria","alitas","pizzas","ensaladas","sopas","cortes_de_carne","platos_fuertes","snacks","cafe","postres"].some(t=>i.includes(t));return["whisky","ron","vodka","ginebra","mezcal","espumosos","cognac","tequila","digestivos","brandy"].some(t=>i.includes(t))?`
                <div class="format-item">
                    <span class="format-icon">📷</span>
                    <div class="format-info">
                        <strong>Usa formato .WEBP ANIMADO</strong>
                        <span>1:1 Cuadrado - Más ligero que el MP4</span>
                    </div>
                </div>
            `:s?`
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
        `},_renderSection(e,i){const s=e._schema?.fields||[];let a="";return i.forEach(t=>{s.includes(t)&&(a+=this._renderField(t,e))}),a},_renderField(e,i){const s=i._schema?.fields||[];if(e!=="nombre"&&!s.includes(e)&&!e.startsWith("precio"))return"";switch(e){case"nombre":return this._inputText("name","Nombre Público",i.name,null);case"ingredientes":case"descripcion":return this._inputTextarea("description","Descripción / Ingredientes",i.description);case"precio":case"precios":case"precios_alitas":return this._renderPriceInputs(i);case"mixers_botella":case"mixers_litro":case"mixers_copa":return this._renderMixerInput(e,i);case"opciones_personalizadas":{const a=i._original?.opciones_personalizadas||"";return this._inputText("opciones_personalizadas","Opciones (Custom)",a,"settings_suggest")}case"imagen":case"thumbnail":case"ruta_archivo":{const a=(i.category||"").toLowerCase().trim().replace(/\s+/g,"_"),t=["cocteleria","alitas","pizzas","ensaladas","sopas","cortes_de_carne","platos_fuertes","snacks","cafe","postres"].some(c=>a.includes(c)),n=e==="thumbnail";return`
                    <div class="form-section field-group">
                        <label class="field-label">${n?t?"Thumbnail (16:9)":"Thumbnail (1:1)":"Imagen (1:1)"}</label>
                        <div id="uploader-image-container" class="${n&&t?"uploader-wide":"uploader-square"}"></div>
                    </div>
                `}case"video":return`
                    <div class="form-section field-group">
                        <label class="field-label">Video (Premium)</label>
                        <div id="uploader-video-container" class="uploader-wide"></div>
                    </div>
                `;default:return""}},_renderHeader(e){const i=!!e.restaurantId,t=(e._schema||{}).fields?.includes("thumbnail")?"header-img-wide":"header-img-square",n=e.media?.image||"assets/placeholder_cocktail.webp",r=this._formatCategory(e.category),o=i?"● Personalizado":"● Menú Base",c=i?"custom":"base";return`
            <div class="form-header">
                <div class="header-flex-row">
                    <div class="header-content-left">
                        <img src="${n}" class="header-image-main ${t}">
                        <div>
                            <h4 class="header-title-text">${e.name}</h4>
                            <div class="header-metadata-row">
                                <span class="header-category-pill">${r}</span>
                                <span class="header-status-label ${c}">${o}</span>
                            </div>
                        </div>
                    </div>
                    ${i?`
                        <button type="button" class="btn-restore-product">
                            <span class="material-icons-round">history</span>
                            Restaurar
                        </button>`:""}
                </div>
            </div>
        `},_renderPriceInputs(e){const i=e._schema,s=e.prices||{};if(!i||!i.priceFields){const t=s.standard||0;return this._inputNumber("standard","Precio Público",t,"payments")}let a="";return i.priceFields.forEach(t=>{const n=typeof t=="object"?t.key:t,r=typeof t=="object"?t.label:n,o=r.toLowerCase().includes("precio")?r:"Precio "+r;a+=this._inputNumber(n,o,s[n],"payments")}),a},_renderMixerInput(e,i){const s=e.replace("mixers_",""),a=i.mixers[s]||"",t=Array.isArray(a)?a.join(", "):a,n=s.charAt(0).toUpperCase()+s.slice(1),o={botella:"Ej: Coca Cola, Agua Mineral, Manzana...",litro:"Ej: Coca Cola, Squirt, Sprite...",copa:"Ej: Coca Cola, Jugo de Naranja..."}[s]||"Separar por comas...";return`
            <div class="form-section mixer-field-group">
                <div class="mixer-label-row">
                    <span class="material-icons-round small-icon">add_circle_outline</span>
                    <label>Mixers para ${n}</label>
                </div>
                <div class="input-wrapper">
                    <textarea name="mixer_${s}" class="editor-input mixer-input" placeholder="${o}" rows="3">${t}</textarea>
                </div>
            </div>
        `},_renderFlags(e){const i=e.flags?.isAvailable?"checked":"",s=e.flags?.isHidden?"checked":"";return`
            <div class="form-section editor-section-card">
                <div class="toggle-row">
                    <div class="toggle-info">
                        <span class="material-icons-round toggle-icon success">check_circle</span>
                        <label class="toggle-label success">Disponible en Menú</label>
                    </div>
                    <div class="toggle-switch">
                        <input type="checkbox" name="isAvailable" ${i}>
                        <label></label>
                    </div>
                </div>
                <div class="toggle-row">
                    <div class="toggle-info">
                        <span class="material-icons-round toggle-icon danger">visibility_off</span>
                        <label class="toggle-label danger">Ocultar de la Vista</label>
                    </div>
                    <div class="toggle-switch danger">
                        <input type="checkbox" name="isHidden" ${s}>
                        <label></label>
                    </div>
                </div>
            </div>
        `},_inputText(e,i,s,a){const t=s||"",n=a?`<span class="material-icons-round input-icon">${a}</span>`:"";return`
            <div class="form-section field-group">
                <label class="field-label">${i}</label>
                <div class="field-wrapper">
                    ${n}
                    <input type="text" name="${e}" value="${t}" class="editor-input ${a?"with-icon":""}" required>
                </div>
            </div>
        `},_inputNumber(e,i,s,a){const t=s??"",n=a?`<span class="material-icons-round input-icon">${a}</span>`:"";return`
            <div class="form-section field-group">
                <label class="field-label">${i} ($)</label>
                <div class="field-wrapper">
                    ${n}
                    <input type="number" name="${e}" value="${t}" class="editor-input ${a?"with-icon":""}" step="0.50">
                </div>
            </div>
        `},_inputTextarea(e,i,s){return`
            <div class="form-section field-group">
                <label class="field-label">${i}</label>
                <textarea name="${e}" class="editor-textarea" rows="6" placeholder="Escribe aquí los ingredientes o descripción detallada...">${s||""}</textarea>
            </div>
        `},_formatCategory(e){return e?e.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()):"General"}},k={render(e={}){return`
            <div class="menu-sheets-container">
                <div class="view-header centered">
                    <div class="header-info">
                        <h2>Gestión de Secciones de tu Menú</h2>
                        <p>Diseña y organiza las diferentes presentaciones de tu menú.</p>
                    </div>
                </div>

                <div class="sheet-list">
                    ${this._getActualInterfaces(e).map(s=>this._renderSheetButton(s)).join("")}
                </div>
            </div>
        `},_renderSheetButton(e){const i=e.isHidden,a=(m.interface_customizations?.[e.id]||{}).name||e.name;return`
            <button class="btn btn-primary nav-button edit-sheet-btn ${i?"is-hidden":""}" data-id="${e.id}">
                <div class="nav-label-container">
                    <span class="nav-label">${a}</span>
                    <span class="nav-status-tag">${i?"Oculta":"Activa"}</span>
                </div>
                <span class="material-icons-round nav-arrow">chevron_right</span>
            </button>
        `},_getActualInterfaces(e){const i=e.hidden_categories||[],s=m.interfaces&&m.interfaces.length>0?m.interfaces:[],a={cocteleria:{icon:"local_bar",description:"Cócteles y mixología."},cocteles:{icon:"local_bar",description:"Cócteles y mixología."},refrescos:{icon:"local_drink",description:"Bebidas sin alcohol."},cervezas:{icon:"sports_bar",description:"Nacionales e importadas."},pizzas:{icon:"local_pizza",description:"Pizzas artesanales."},alitas:{icon:"restaurant",description:"Alitas y boneless."},sopas:{icon:"soup_kitchen",description:"Sopas y caldos."},ensaladas:{icon:"eco",description:"Opciones saludables."},cortes_de_carne:{icon:"kebab_dining",description:"Cortes premium."},platos_fuertes:{icon:"flatware",description:"Especialidades del chef."},snacks:{icon:"fastfood",description:"Botanas y complementos."},postres:{icon:"icecream",description:"Dulces y repostería."},cafe:{icon:"coffee",description:"Cafetería y té."},licores:{icon:"liquor",description:"Módulo con 10 subsecciones.",subsections:["Tequila","Mezcal","Whisky","Ron","Vodka","Ginebra","Brandy","Cognac","Digestivos","Espumosos"]}};let t=s.map(n=>{const r=(n.categoria||"").trim().toLowerCase(),o=a[r]||{icon:"description",description:"Interfaz directa."};return{id:r||n.id,real_id:n.id,name:n.nombre,image:n.image,icon:o.icon,description:o.description,subsections:o.subsections||null,isHidden:i.includes(n.nombre)||i.includes(r)}});return t.length===0?(console.warn("[MenuSheetsView] Database interfaces empty or not loaded. Using fallback."),this._getLegacyFallback(i)):t},_getLegacyFallback(e){return[{id:"cocteleria",name:"Coctelería",icon:"local_bar",description:"Cócteles y mixología.",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/interfaces/cocteleria.webp"},{id:"refrescos",name:"Refrescos",icon:"local_drink",description:"Bebidas sin alcohol.",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/interfaces/refrescos.webp"},{id:"cervezas",name:"Cervezas",icon:"sports_bar",description:"Nacionales e importadas.",image:"https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/interfaces/cervezas.webp"},{id:"pizzas",name:"Pizzas",icon:"local_pizza",description:"Pizzas artesanales."},{id:"licores",name:"Licores",icon:"liquor",description:"Módulo con 10 subsecciones.",subsections:["Tequila","Mezcal","Whisky","Ron","Vodka","Ginebra","Brandy","Cognac","Digestivos","Espumosos"]}].map(s=>({...s,isHidden:e.includes(s.name)||e.includes(s.id)}))}},x={render(e,i={}){const s=m.interfaces||[],a=s.find(p=>p.slug===e||p.id===e||p.categoria===e);if(!a)return console.error("[MenuSheetEditor] Interface not found in AppConfig:",e),console.log("[MenuSheetEditor] Available interfaces:",s.map(p=>p.slug)),`<div class="error-panel">
                <span class="material-icons-round">error_outline</span>
                <p>No se pudo cargar la configuración de la interfaz <strong>${e}</strong>.</p>
                <button class="btn-back-sheets btn btn-secondary">Volver</button>
            </div>`;const t=i.interface_customizations?.[e]||{},n=!!i.interface_customizations?.[e],r=i.hidden_categories||[],o=r.includes(e)||r.includes(a.nombre),c=t.name||a.label||a.nombre;t.description||a.descripcion;const d=t.thumbnail||a.thumbnailUrl||t.image||a.image||"assets/no-placeholder.png",u=e==="licores",v=i.hidden_liquor_subsections||[];return`
            <div class="admin-product-form-wrapper menu-sheet-editor animate-fade-in">
                <div class="form-header">
                    <div class="header-flex-row">
                        <div class="header-content-left">
                            <img src="${d}" class="header-image-main header-img-wide">
                            <div>
                                <div class="header-title-container">
                                    <h4 class="header-title-text">${c}</h4>
                                    ${n?`
                                        <button type="button" class="btn-restore-interface btn-restore-product btn-mini">
                                            <span class="material-icons-round">history</span>
                                            Restaurar Base
                                        </button>`:""}
                                </div>
                                <div class="header-metadata-row">
                                    <span class="header-category-pill">Interfaz / Hoja</span>
                                    <span class="header-status-label ${o?"base":"custom"}">
                                        ● ${o?"Oculta":"Activa"}
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
                            
                            <!-- ROW 1: Identity & Visibility -->
                            <div class="editor-col-left">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">badge</span>
                                        <h5>Nombre en Menú</h5>
                                    </div>

                                    <div class="form-section field-group">
                                        <label class="field-label">Nombre de la Pestaña</label>
                                        <div class="field-wrapper">
                                            <span class="material-icons-round input-icon">label</span>
                                            <input type="text" id="sheet-custom-name" class="editor-input with-icon" 
                                                value="${t.name||a.label||""}">
                                        </div>
                                        <p class="field-hint">Este es el nombre que verán tus clientes.</p>
                                    </div>

                                    <div class="form-section field-group">
                                        <label class="field-label">Descripción de la Tarjeta</label>
                                        <div class="field-wrapper">
                                            <span class="material-icons-round input-icon">description</span>
                                            <textarea id="sheet-custom-desc" class="editor-textarea with-icon" rows="2" 
                                                placeholder="Descripción corta para la tarjeta del Home">${t.description||a.descripcion||""}</textarea>
                                        </div>
                                        <p class="field-hint">Esta descripción aparece en la tarjeta principal en la pantalla de inicio.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="editor-col-right">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">settings</span>
                                        <h5>Estado de Visibilidad</h5>
                                    </div>
                                    <div class="visibility-switch-card ${o?"is-inactive":"is-active"}">
                                        <div class="switch-info">
                                            <div class="icon-wrapper">
                                                <span class="material-icons-round">${o?"visibility_off":"visibility"}</span>
                                            </div>
                                            <div class="text-block">
                                                <span class="label">${o?"Sección Desactivada":"Sección Activa"}</span>
                                                <span class="status-desc">${o?"Oculta para clientes":"Visible en el menú"}</span>
                                            </div>
                                        </div>
                                        <label class="system-switch">
                                            <input type="checkbox" class="toggle-visibility-switch" 
                                                data-id="${e}" ${o?"":"checked"}>
                                            <span class="slider">
                                                <span class="label-on">ON</span>
                                                <span class="label-off">OFF</span>
                                            </span>
                                        </label>
                                    </div>
                                    <p class="field-hint">Al guardar los cambios, la visibilidad se actualizará en el menú público.</p>
                                </div>
                            </div>

                            <!-- ROW 2: FULL WIDTH MULTIMEDIA -->
                            <div class="editor-full-width">
                                <div class="editor-section-card">
                                    <div class="section-header">
                                        <span class="material-icons-round">add_photo_alternate</span>
                                        <h5>Multimedia y Estética</h5>
                                    </div>
                                    
                                    <div class="multimedia-help-grid">
                                        <div class="uploaders-zone">
                                            <div class="form-section field-group">
                                                <label class="field-label">Thumbnail Card (16:9)</label>
                                                <div id="interface-thumbnail-container" class="uploader-wide"></div>
                                                <p class="field-hint">Usa esta imagen para la tarjeta principal del Home.</p>
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

                            ${u?this._renderLiquorSubsections(a.subsections||[],v):""}

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
        `},_renderLiquorSubsections(e,i){return`
            <div class="editor-full-width-column">
                <div class="editor-section-card">
                    <div class="section-header">
                        <span class="material-icons-round">liquor</span>
                        <h5>Subsecciones de Licores</h5>
                    </div>
                    <p class="field-hint">Selecciona qué tipos de licores se deben mostrar en esta sección.</p>
                    <div class="liq-sub-grid">
                        ${e.map(s=>{const a=s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=!i.includes(a);return`
                                <div class="liq-sub-row">
                                    <span>${s}</span>
                                    <div class="toggle-switch">
                                        <input type="checkbox" class="liq-sub-check" data-sub-id="${a}" ${t?"checked":""}>
                                        <label></label>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        `},_getSheetsData(){return[{id:"cocteleria",name:"Coctelería",icon:"local_bar",description:"Cócteles y mixología."},{id:"refrescos",name:"Refrescos",icon:"local_drink",description:"Bebidas sin alcohol."},{id:"cervezas",name:"Cervezas",icon:"sports_bar",description:"Nacionales e importadas."},{id:"pizzas",name:"Pizzas",icon:"local_pizza",description:"Pizzas artesanales."},{id:"alitas",name:"Alitas",icon:"restaurant",description:"Alitas y boneless."},{id:"sopas",name:"Sopas",icon:"soup_kitchen",description:"Sopas y caldos."},{id:"ensaladas",name:"Ensaladas",icon:"eco",description:"Opciones saludables."},{id:"cortes_de_carne",name:"Cortes de Carne",icon:"kebab_dining",description:"Cortes premium."},{id:"platos_fuertes",name:"Platos Fuertes",icon:"flatware",description:"Especialidades del chef."},{id:"snacks",name:"Snacks",icon:"fastfood",description:"Botanas y complementos."},{id:"postres",name:"Postres",icon:"icecream",description:"Dulces y repostería."},{id:"cafe",name:"Café",icon:"coffee",description:"Cafetería y té."},{id:"licores",name:"Licores",icon:"liquor",description:"Módulo con 10 subsecciones.",subsections:["Tequila","Mezcal","Whisky","Ron","Vodka","Ginebra","Brandy","Cognac","Digestivos","Espumosos"]}]}},M={render(e,i){return`
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
                                            <input type="text" id="branding-name" value="${i.establishmentName?.value||""}" class="editor-input with-icon" placeholder="Ej: Mi Restaurante">
                                        </div>
                                        <span class="field-hint">Este nombre aparecerá en la pantalla de bienvenida y el título de la página.</span>
                                    </div>
                                </div>

                                <div class="editor-section-card" style="margin-top: var(--spacing-xl-elastic);">
                                    <div class="section-header">
                                        <span class="material-icons-round">wallpaper</span>
                                        <h5>Tema de Fondo</h5>
                                    </div>
                                    <p class="field-hint">Selecciona la atmósfera visual para tu menú.</p>
                                    <div class="theme-selector-grid" id="theme-selector">
                                        ${this._renderThemeOptions(i)}
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
                                            
                                            <div class="size-selector-wrapper">
                                                <label class="field-label mini">Tamaño en Pantalla</label>
                                                <div class="size-pills" id="logo-size-selector">
                                                    <button type="button" class="size-pill ${i.logoSize==="small"?"active":""}" data-size="small">Chico</button>
                                                    <button type="button" class="size-pill ${!i.logoSize||i.logoSize==="medium"?"active":""}" data-size="medium">Médium</button>
                                                    <button type="button" class="size-pill ${i.logoSize==="large"?"active":""}" data-size="large">Grande</button>
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
        `},_renderThemeOptions(e){return[{id:"bg_light_blue",label:"Azul Claro",color:"#00d2ff"},{id:"bg_dark_blue",label:"Azul Obscuro",color:"#001a33"},{id:"bg_dark_red",label:"Rojo Obscuro",color:"#440000"},{id:"bg_white",label:"Blanco",color:"#ffffff"}].map(s=>{const a=e.activeTheme===s.id;return`
                <div class="theme-option ${a?"is-selected":""}" data-theme-id="${s.id}">
                    <div class="theme-preview" style="background-color: ${s.color}"></div>
                    <span class="theme-label">${s.label}</span>
                    ${a?'<span class="material-icons-round check-icon">check_circle</span>':""}
                </div>
            `}).join("")}},q={config:{drawerId:"property-editor-sidebar",containerId:"property-editor-content",backdropId:"sidebar-backdrop",desktopBreakpoint:1280,formId:"property-editor-form"},state:{activeTab:"products",currentProduct:null,activeMenuSheet:null,activeBranding:null,isWide:!1},init(){console.log("🔧 AdminController: Initializing..."),this.drawer=document.getElementById(this.config.drawerId),this.container=document.getElementById(this.config.containerId),this.backdrop=document.querySelector(`.${this.config.backdropId}`),this.backdrop||(this.backdrop=document.createElement("div"),this.backdrop.className=this.config.backdropId,document.body.appendChild(this.backdrop)),this.drawer&&(this.bindEvents(),window.addEventListener("app:interfaces-ready",e=>{this.state.activeTab==="menus"&&this._renderActiveContent()}),m.interfaces&&m.interfaces.length>0&&this.state.activeTab==="menus"&&this._renderActiveContent(),console.log("AdminController: Ready."))},bindEvents(){this.backdrop&&this.backdrop.addEventListener("click",()=>{window.innerWidth<this.config.desktopBreakpoint&&this.close()}),_.subscribe(e=>{e.type==="PRODUCT_SELECTED"?(this.state.activeTab="products",this.loadAndRenderProduct(e.product),this.open()):e.type==="SELECTION_CLEARED"?this.renderDashboard():e.type==="MODE_CHANGED"&&(e.isEditing?(this.renderDashboard(),this.open()):this.close())})},open(){y.close("settings-menu"),y.open(this.config.drawerId,{disableBackdrop:!0})},close(){y.close(this.config.drawerId,!0)},renderShell(){this.container&&(this.drawer&&(this.state.isWide?this.drawer.classList.add("wide-mode"):this.drawer.classList.remove("wide-mode")),this.container.innerHTML=C.templateShell(this.state),this._bindShellEvents(),this._renderActiveContent())},_bindShellEvents(){this.container.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",()=>{this.state.activeTab=s.dataset.tab,this._renderActiveContent(),this.container.querySelectorAll(".tab-btn").forEach(a=>a.classList.remove("active-tab")),s.classList.add("active-tab")})});const e=this.container.querySelector(".wide-mode-btn");e&&e.addEventListener("click",()=>{this.state.isWide=!this.state.isWide,this.renderShell()});const i=this.container.querySelector(".exit-admin-btn");i&&i.addEventListener("click",()=>_.toggleMode())},async _renderActiveContent(){const e=document.getElementById("admin-dynamic-content");if(e){if(e.innerHTML="",this.state.activeTab==="products")this.state.currentProduct?(e.innerHTML=A.render(this.state.currentProduct),this._bindFormEvents(e)):e.innerHTML=C.templateHub();else if(this.state.activeTab==="menus"){const{default:i}=await h(async()=>{const{default:t}=await import("./AuthService-CcF7jOiY.js");return{default:t}},__vite__mapDeps([2,0,1])),a=i.profile?.configuracion_json||{};this.state.activeMenuSheet?(e.innerHTML=x.render(this.state.activeMenuSheet,a),this._bindMenuEditorEvents(e)):(e.innerHTML=k.render(a),this._bindMenuEvents(e))}else if(this.state.activeTab==="branding"){const{default:i}=await h(async()=>{const{default:t}=await import("./AuthService-CcF7jOiY.js");return{default:t}},__vite__mapDeps([2,0,1])),a=i.profile?.configuracion_json||{};e.innerHTML=M.render(a,m.resources),this._bindBrandingEvents(e)}}},_bindMenuEvents(e){e.querySelectorAll(".edit-sheet-btn").forEach(i=>{i.addEventListener("click",()=>{this.state.activeMenuSheet=i.dataset.id,this._renderActiveContent()})}),e.querySelectorAll(".delete-sheet-btn").forEach(i=>{i.addEventListener("click",()=>{this.handleToggleCategoryVisibility(i.dataset.id)})})},async _bindMenuEditorEvents(e){const i=e.querySelector(".btn-back-sheets");i&&i.addEventListener("click",()=>{this.state.activeMenuSheet=null,this._renderActiveContent()});const s=document.getElementById("interface-thumbnail-container");if(document.getElementById("interface-image-container"),this.state.activeMenuSheet){const{default:o}=await h(async()=>{const{default:p}=await import("./AuthService-CcF7jOiY.js");return{default:p}},__vite__mapDeps([2,0,1])),u=(o.profile?.configuracion_json||{}).interface_customizations?.[this.state.activeMenuSheet]||{},v=m.interfaces.find(p=>p.slug===this.state.activeMenuSheet||p.id===this.state.activeMenuSheet);if(s){const p=new g({type:"image",category:"interfaces",initialUrl:u.thumbnail||v?.thumbnailUrl||"",onUploadSuccess:l=>{this.state.interfaceCustoms||(this.state.interfaceCustoms={}),this.state.interfaceCustoms[this.state.activeMenuSheet]||(this.state.interfaceCustoms[this.state.activeMenuSheet]={}),this.state.interfaceCustoms[this.state.activeMenuSheet].thumbnail=l}});s.innerHTML="",s.appendChild(p.getElement())}}const a=e.querySelector(".btn-restore-interface");a&&a.addEventListener("click",()=>{confirm("¿Restaurar esta interfaz a sus valores originales? Se perderán el nombre, descripción e imágenes personalizadas.")&&this.handleRestoreInterface(this.state.activeMenuSheet)});const t=e.querySelector(".toggle-visibility-switch");t&&t.addEventListener("change",()=>{const o=t.closest(".visibility-switch-card"),c=o?.querySelector(".label"),d=o?.querySelector(".status-desc"),u=o?.querySelector(".material-icons-round"),v=t.checked;o&&(o.classList.toggle("is-active",v),o.classList.toggle("is-inactive",!v)),c&&(c.textContent=v?"Sección Activa":"Sección Desactivada"),d&&(d.textContent=v?"Visible en el menú":"Oculta para clientes"),u&&(u.textContent=v?"visibility":"visibility_off")});const n=e.querySelector(".save-sheet-config");n&&n.addEventListener("click",()=>{this.handleSaveMenuConfig(n.dataset.id)});const r=e.querySelector(".go-to-products");r&&r.addEventListener("click",()=>{r.dataset.category,this.state.activeTab="products",this.state.activeMenuSheet=null,this.renderShell()})},_bindBrandingEvents(e){const i=document.getElementById("branding-logo-container");if(i){const n=new g({type:"image",category:"recursos",initialUrl:m.resources.logo?.url||"",onUploadSuccess:r=>{this.state.pendingLogo=r}});i.innerHTML="",i.appendChild(n.getElement())}const s=e.querySelector("#theme-selector");s&&s.querySelectorAll(".theme-option").forEach(n=>{n.addEventListener("click",()=>{s.querySelectorAll(".theme-option").forEach(r=>r.classList.remove("is-selected")),n.classList.add("is-selected"),this.state.selectedTheme=n.dataset.themeId})});const a=e.querySelector("#logo-size-selector");a&&a.querySelectorAll(".size-pill").forEach(n=>{n.addEventListener("click",()=>{a.querySelectorAll(".size-pill").forEach(r=>r.classList.remove("active")),n.classList.add("active"),this.state.selectedLogoSize=n.dataset.size})});const t=e.querySelector(".save-branding-btn");t&&t.addEventListener("click",()=>{this.handleSaveBranding()})},async handleSaveBranding(){const e=document.getElementById("branding-name"),i=e?e.value:"",s=this.state.selectedLogoSize,a=this.state.pendingLogo,t=this.state.selectedTheme;try{const{default:n}=await h(async()=>{const{default:u}=await import("./AuthService-CcF7jOiY.js");return{default:u}},__vite__mapDeps([2,0,1])),r=n.profile,o=n.client;if(t||s){const u=r.configuracion_json||{};t&&(u.active_theme=t),s&&(u.logo_size=s),await this._saveProfileConfig(u)}const c=[];e&&m.resources.establishmentName?.id&&c.push(o.from("recursos").update({tipo:i}).eq("id",m.resources.establishmentName.id)),a&&m.resources.logo.id&&c.push(o.from("recursos").update({url:a}).eq("id",m.resources.logo.id)),c.length>0&&await Promise.all(c);const d=document.querySelector(".save-branding-btn");d&&(d.innerHTML='<span class="material-icons-round">check</span> Guardado',d.classList.add("btn-success"),setTimeout(()=>{d.innerHTML='<span class="material-icons-round">save</span> Guardar Cambios',d.classList.remove("btn-success")},2e3)),await m.fetchGlobalResources()}catch(n){console.error("Error saving branding:",n),alert("Error al guardar la identidad.")}},async handleToggleCategoryVisibility(e){try{const{default:i}=await h(async()=>{const{default:n}=await import("./AuthService-CcF7jOiY.js");return{default:n}},__vite__mapDeps([2,0,1])),s=i.profile;if(!s)return;const a=s.configuracion_json||{},t=a.hidden_categories||[];t.includes(e)?a.hidden_categories=t.filter(n=>n!==e):a.hidden_categories=[...t,e],await this._saveProfileConfig(a),this._renderActiveContent()}catch(i){console.error("Error toggling category visibility:",i)}},async handleSaveMenuConfig(e){try{const{default:i}=await h(async()=>{const{default:c}=await import("./AuthService-CcF7jOiY.js");return{default:c}},__vite__mapDeps([2,0,1])),s=i.profile;if(!s)return;const a=s.configuracion_json||{};a.interface_customizations||(a.interface_customizations={}),a.interface_customizations[e]||(a.interface_customizations[e]={});const t=document.getElementById("sheet-custom-name"),n=document.getElementById("sheet-custom-desc");if(t&&(a.interface_customizations[e].name=t.value),n&&(a.interface_customizations[e].description=n.value),this.state.interfaceCustoms&&this.state.interfaceCustoms[e]){const c=this.state.interfaceCustoms[e];c.image&&(a.interface_customizations[e].image=c.image),c.thumbnail&&(a.interface_customizations[e].thumbnail=c.thumbnail)}if(e==="licores"){const c=[];this.container.querySelectorAll(".liq-sub-check").forEach(d=>{d.checked||c.push(d.dataset.subId)}),a.hidden_liquor_subsections=c}const r=this.container.querySelector(".toggle-visibility-switch");if(r){const c=r.checked,d=a.hidden_categories||[];c?a.hidden_categories=d.filter(u=>u!==e):d.includes(e)||(a.hidden_categories=[...d,e])}await this._saveProfileConfig(a),this.state.interfaceCustoms&&delete this.state.interfaceCustoms[e];const o=this.container.querySelector(".save-sheet-config");if(o){const c=o.innerHTML;o.innerHTML='<span class="material-icons-round">check</span> Guardado',o.classList.add("btn-success"),setTimeout(()=>{o.innerHTML=c,o.classList.remove("btn-success")},2e3)}}catch(i){console.error("Error saving menu config:",i),alert("Error al guardar la configuración.")}},async handleRestoreInterface(e){try{const{default:i}=await h(async()=>{const{default:t}=await import("./AuthService-CcF7jOiY.js");return{default:t}},__vite__mapDeps([2,0,1])),s=i.profile;if(!s)return;const a=s.configuracion_json||{};a.interface_customizations&&a.interface_customizations[e]&&(delete a.interface_customizations[e],a.hidden_categories&&(a.hidden_categories=a.hidden_categories.filter(t=>t!==e)),await this._saveProfileConfig(a),this._renderActiveContent())}catch(i){console.error("Error restoring interface:",i)}},async _saveProfileConfig(e){const{default:i}=await h(async()=>{const{default:n}=await import("./AuthService-CcF7jOiY.js");return{default:n}},__vite__mapDeps([2,0,1])),s=i.profile;if(!s)throw new Error("No sesion profile found");const{data:a,error:t}=await i.client.from("perfil_restaurante").update({configuracion_json:e}).eq("id",s.restaurant_id).select().single();if(t)throw t;return i.profile.configuracion_json=a.configuracion_json,m.applyInterfaceOverrides(i.profile),a},async loadAndRenderProduct(e){if(!(!e||!e.id)){console.log("🔄 Product Selected. Triggering UUID Search for parity:",e.id),this.container&&(this.container.innerHTML=`
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 15px; color: #94a3b8;">
                    <div class="spinner"></div>
                    <span>Sincronizando datos...</span>
                </div>
            `);try{const{default:i}=await h(async()=>{const{default:n}=await import("./index-DoWTiArC.js").then(r=>r.P);return{default:n}},__vite__mapDeps([0,1])),a=await new i().getProductByIdV2(e.id,e.category||e.categoria);a||console.warn("⚠️ Fresh search returned null, falling back to raw data.");const t=a||e;this.state.currentProduct=w.toEditor(t),console.log("✅ Data Normalized (Editor Schema):",this.state.currentProduct),this.renderShell()}catch(i){console.error("❌ Error during product parity search:",i),this.state.currentProduct=w.toEditor(e),this.renderShell()}}},_bindFormEvents(e){const i=e.querySelector(".close-product-btn");i&&i.addEventListener("click",()=>{this.state.currentProduct=null,_.clearSelection()});const s=document.getElementById("uploader-image-container");if(s){const r=new g({type:"image",category:this.state.currentProduct.category,initialUrl:this.state.currentProduct.media.image,onUploadSuccess:o=>{this.state.currentProduct.media.image=o}});s.appendChild(r.getElement())}const a=document.getElementById("uploader-video-container");if(a){const r=new g({type:"video",category:this.state.currentProduct.category,initialUrl:this.state.currentProduct.media.video,onUploadSuccess:o=>{this.state.currentProduct.media.video=o}});a.appendChild(r.getElement())}const t=e.querySelector("#property-editor-form");t&&t.addEventListener("submit",r=>{r.preventDefault(),this.handleSave(new FormData(t))});const n=e.querySelector(".btn-reset-product");n&&n.addEventListener("click",()=>{confirm("¿Estás seguro de que deseas eliminar tus cambios personalizados y volver al producto original del menú?")&&this.handleReset()})},handleReset(){const e=this.state.currentProduct,i=this.container.querySelector(".btn-reset-product");i.textContent="Restaurando...",i.disabled=!0;const s=new CustomEvent("SAAS_RESET_PRODUCT",{detail:{productId:e.id,tableName:e.tableName}});window.dispatchEvent(s),setTimeout(()=>{this.state.currentProduct=null,this.renderDashboard()},1e3)},handleSave(e){const i=Object.fromEntries(e.entries()),s=this.state.currentProduct,a={name:i.name,description:i.description,opciones_personalizadas:i.opciones_personalizadas,prices:{},mixers:{},media:{image:s.media.image,video:s.media.video},flags:{isAvailable:i.isAvailable==="on",isHidden:i.isHidden==="on"}};s._schema&&s._schema.priceFields?s._schema.priceFields.forEach(n=>{const r=typeof n=="object"?n.key:n;i[r]!==void 0&&(a.prices[r]=parseFloat(i[r])||0)}):i.standard!==void 0?a.prices.standard=parseFloat(i.standard)||0:i.precio!==void 0&&(a.prices.standard=parseFloat(i.precio)||0),Object.keys(i).forEach(n=>{if(n.startsWith("mixer_")){const r=n.replace("mixer_","");a.mixers[r]=i[n]?i[n].split(",").map(o=>o.trim()):[]}});const t=w.toPersistence(a,s._keysMap);t.id=s.id,t._tableName=s.tableName,console.log("💾 Saving Dynamic Delta (DB Format):",t),this._triggerSaveEvent(t)},_triggerSaveEvent(e){const i=this.container.querySelector(".btn-save");i&&(i.innerHTML='<span class="material-icons-round spinning">sync</span> Guardando...',i.disabled=!0);const s=new CustomEvent("SAAS_SAVE_OVERRIDE",{detail:{productId:e.id,payload:e,originalProduct:this.state.currentProduct}});window.dispatchEvent(s),setTimeout(()=>{i&&(i.disabled=!1,i.innerHTML='<span class="material-icons-round">check_circle</span> ¡Guardado!',i.style.background="#00c853",i.style.borderColor="#00c853",setTimeout(()=>{i.innerHTML='<span class="material-icons-round">save</span> Guardar Cambios',i.style.background="",i.style.borderColor=""},2e3))},800)},renderDashboard(){this.state.currentProduct=null,this.renderShell()}};export{q as default};
