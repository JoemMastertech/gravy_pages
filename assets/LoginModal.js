const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TenantSchemaRepository.js","./index.js","./index.css"])))=>i.map(i=>d[i]);
import{_ as p}from"./index.js";import d from"./AuthService.js";class m{constructor(){this.container=document.createElement("div"),this.container.id="auth-modal-container",this.container.className="login-modal-overlay hidden",this.render(),this.bindEvents(),document.body.appendChild(this.container)}render(){this.container.innerHTML=`
      <div class="login-modal-card">
        <button class="close-btn">×</button>
        
        <!-- View: Guest (Login/Register) -->
        <div id="view-guest" class="modal-view">
            <div class="login-header">
                <h2 id="modal-title" data-key="auth-modal-title">Acceso Administrativo</h2>
                <p id="modal-subtitle" data-key="auth-modal-subtitle">Gestiona tu menú y personaliza tu restaurante.</p>
            </div>

            <div class="login-body">
                <!-- Google Button -->
                <button id="btn-login-google" class="btn-google">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                        <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                        <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                        <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                    </svg>
                    <span data-key="auth-google-btn">Continuar con Google</span>
                </button>

                <div class="divider"><span data-key="auth-divider-or">O</span></div>

                <!-- Email Form -->
                <form id="login-form-email">
                    <div class="input-group">
                        <label data-key="auth-email-label">Correo Electrónico</label>
                        <input type="email" id="input-email" placeholder="tu@restaurante.com" required
                          data-translate-placeholder="true" data-key="auth-email-placeholder">
                    </div>
                    <button type="submit" class="btn-email" data-key="auth-submit-btn">Enviar Enlace Mágico</button>
                </form>

                <div id="login-message" class="login-message hidden"></div>
            </div>
        </div>

        <!-- View: Authenticated (Profile) -->
        <div id="view-auth" class="modal-view hidden">
            <div class="login-header">
                <div class="profile-avatar">
                   <img id="profile-img" src="" alt="Avatar" onerror="this.style.display='none'">
                   <span id="profile-initial" class="hidden">A</span>
                </div>
                <h2 id="profile-name">Usuario</h2>
                <p id="profile-email">usuario@email.com</p>
                <div class="badge-role">Administrador</div>
            </div>

            <div class="login-body">
                <button id="btn-logout" class="btn-logout" data-key="auth-logout-btn">
                    Cerrar Sesión
                </button>
            </div>
        </div>

        <!-- View: Onboarding (Create Restaurant) -->
        <div id="view-onboarding" class="modal-view hidden">
            <div class="onboarding-header">
                <h2 class="onboarding-title" data-key="auth-onboarding-title">Configurar Nuevo Negocio</h2>
                <p class="onboarding-subtitle" data-key="auth-onboarding-subtitle">Asocia un restaurante a tu cuenta de administrador.</p>
            </div>

            <div class="login-body">
                <form id="onboarding-form" class="onboarding-form">
                    <div class="onboarding-field">
                        <label class="onboarding-label" data-key="nombre-del-negocio" data-namespace="modals">Nombre del Negocio</label>
                        <input type="text" id="onboarding-restaurant-name" class="onboarding-input"
                          placeholder="Ej: Mi Restaurante Bar" required
                          data-translate-placeholder="ej-mi-restaurante-bar" data-namespace="general">
                    </div>
                    <div class="onboarding-field">
                        <label class="onboarding-label" data-key="nombre-del-propietario" data-namespace="modals">Nombre del Propietario</label>
                        <input type="text" id="onboarding-owner" class="onboarding-input"
                          placeholder="Ej: Juan Pérez" required
                          data-translate-placeholder="ej-juan-p-rez" data-namespace="general">
                    </div>
                    <div class="onboarding-field">
                        <label class="onboarding-label" data-key="moneda" data-namespace="modals">Moneda</label>
                        <select id="onboarding-currency" class="onboarding-select" required>
                            <option value="MXN" data-key="peso-mexicano-mxn" data-namespace="modals">Peso Mexicano (MXN)</option>
                            <option value="USD" data-key="d-lar-estadounidense-usd" data-namespace="modals">Dólar Estadounidense (USD)</option>
                            <option value="EUR" data-key="euro.eur" data-namespace="modals">Euro (EUR)</option>
                            <option value="COP" data-key="peso-colombiano-cop" data-namespace="modals">Peso Colombiano (COP)</option>
                            <option value="ARS" data-key="peso-argentino-ars" data-namespace="modals">Peso Argentino (ARS)</option>
                        </select>
                    </div>
                    <button type="submit" id="btn-onboarding-submit" class="btn-onboarding-submit"
                      data-key="crear-y-activar-negocio" data-namespace="modals">
                        <span class="btn-onboarding-icon">✦</span>
                        <span class="btn-onboarding-text">Crear y Activar Negocio</span>
                    </button>
                </form>
                <div id="onboarding-message" class="login-message hidden"></div>
            </div>
        </div>

      </div>
    `;const a=document.createElement("style");a.id="login-modal-styles",a.innerHTML=`
        .login-modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
            z-index: 9999; display: flex; justify-content: center; align-items: center;
            opacity: 1; transition: opacity 0.3s ease;
        }
        .login-modal-overlay.hidden { opacity: 0; pointer-events: none; }
        
        .login-modal-card {
            background: var(--surface-glass-2, rgb(0 0 0 / 70%));
            backdrop-filter: blur(15px);
            width: 90%; max-width: 420px;
            padding: 0;
            border-radius: var(--radius-lg, 16px);
            border: 1px solid var(--border-color, rgba(0,247,255,0.25));
            box-shadow: var(--glow-shadow, 0 0 11px rgba(0,247,255,0.3));
            position: relative; text-align: center;
            color: var(--primary-color, #ECE9D8);
            font-family: 'Inter', sans-serif;
            overflow: hidden;
            transform: translateY(0);
            transition: box-shadow 0.3s ease;
        }
        .login-modal-card:focus-within {
            box-shadow: var(--glow-shadow-hover, 0 0 22px rgba(0,247,255,0.6));
            border-color: var(--accent-color, rgb(0,247,255));
        }
        .modal-view { animation: authModalFadeIn 0.3s ease; }
        .modal-view.hidden { display: none; }
        @keyframes authModalFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .close-btn {
            position: absolute; top: 1rem; right: 1rem;
            background: none; border: none; color: #666; font-size: 1.5rem;
            cursor: pointer; z-index: 10;
        }
        .close-btn:hover { color: white; }

        .login-header { padding: 1.5rem 2rem 1rem; border-bottom: 1px solid var(--border-color, rgba(0,247,255,0.15)); background: var(--modal-header-bg, rgba(0,0,0,0.3)); }
        .login-header h2 { margin: 0 0 0.4rem; font-size: 1.5rem; font-family: 'Playfair Display', serif; color: var(--primary-color, #ECE9D8); }
        .login-header p { margin: 0; color: rgba(255,255,255,0.5); font-size: 0.88rem; }
        .login-header .icon { font-size: 2rem; display: block; margin-bottom: 1rem; }

        .login-body { padding: 1.5rem 2rem; }

        .btn-google {
            width: 100%; padding: 12px; border-radius: 12px; border: none;
            background: white; color: #333; font-weight: 600; font-size: 1rem;
            display: flex; align-items: center; justify-content: center; gap: 10px;
            cursor: pointer; transition: transform 0.2s;
        }
        .btn-google:hover { transform: scale(1.02); }

        .divider { margin: 1.5rem 0; position: relative; }
        .divider:before { content:''; position: absolute; top:50%; left:0; right:0; height:1px; background:#333; z-index:0; }
        .divider span { background: #1a1a1a; padding: 0 10px; position: relative; z-index: 1; color: #555; font-size: 0.8rem; }

        .input-group { text-align: left; margin-bottom: 1rem; }
        .input-group label { display: block; margin-bottom: 5px; font-size: 0.85rem; color: #aaa; }
        .input-group input { 
            width: 100%; padding: 12px; background: #252525; border: 1px solid #333; 
            border-radius: 8px; color: white; outline: none; box-sizing: border-box;
        }
        .input-group input:focus { border-color: var(--accent-color, #00d2ff); }

        .btn-email {
            width: 100%; padding: 12px; border-radius: 12px;
            background: transparent; border: 1px solid #444; color: white;
            cursor: pointer; transition: all 0.2s;
        }
        .btn-email:hover { border-color: white; background: rgba(255,255,255,0.05); }

        .login-message { margin-top: 1rem; font-size: 0.9rem; padding: 10px; border-radius: 8px; }
        .login-message.error { background: rgba(255, 68, 68, 0.2); color: #ff4444; }
        .login-message.success { background: rgba(0, 200, 81, 0.2); color: #00c851; }

        /* Profile Styles */
        .profile-avatar { 
            width: 80px; height: 80px; margin: 0 auto 1rem; border-radius: 50%; background: #333; 
            display: flex; align-items: center; justify-content: center; overflow: hidden;
            border: 2px solid #555;
        }
        .profile-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .profile-avatar span { font-size: 2rem; color: #aaa; }
        .badge-role {
            display: inline-block; background: rgba(0, 210, 255, 0.1); color: #00d2ff;
            padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; margin-top: 0.5rem; border: 1px solid rgba(0, 210, 255, 0.3);
        }
        .btn-logout {
            width: 100%; padding: 12px; border-radius: 12px;
            background: rgba(255, 68, 68, 0.1); border: 1px solid rgba(255, 68, 68, 0.3); color: #ff6666;
            cursor: pointer; transition: all 0.2s; font-weight: 500;
        }
        .btn-logout:hover { background: rgba(255, 68, 68, 0.2); color: #ff4444; }

        /* ── Onboarding Form — Alineado a sys-modal ────────────────── */
        .onboarding-header {
            text-align: center;
            padding: 1.5rem 2rem 1.2rem;
            border-bottom: 1px solid var(--border-color, rgba(0,247,255,0.2));
            background: var(--modal-header-bg, rgba(0,0,0,0.3));
        }
        .onboarding-title {
            margin: 0 0 0.4rem;
            font-size: 1.4rem;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: var(--primary-color, #ECE9D8);
        }
        .onboarding-subtitle {
            margin: 0;
            color: rgba(255,255,255,0.45);
            font-size: 0.85rem;
            line-height: 1.4;
        }
        .onboarding-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .onboarding-field {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            text-align: left;
        }
        .onboarding-label {
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--accent-color, rgb(0,247,255));
            opacity: 0.75;
        }
        .onboarding-input,
        .onboarding-select {
            width: 100%;
            padding: 0.7rem 0.9rem;
            border-radius: 5px;
            background: transparent;
            border: 1.4px solid var(--border-color, rgba(0,247,255,0.25));
            color: var(--primary-color, #ECE9D8);
            font-size: 0.9rem;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.25s, box-shadow 0.25s;
            font-family: 'Inter', sans-serif;
            box-shadow: var(--glow-shadow, 0 0 11px rgba(0,247,255,0.15));
        }
        .onboarding-input::placeholder { color: rgba(255,255,255,0.2); }
        .onboarding-input:focus,
        .onboarding-select:focus {
            border-color: var(--accent-color, rgb(0,247,255));
            box-shadow: var(--glow-shadow-hover, 0 0 22px rgba(0,247,255,0.5));
        }
        .onboarding-select option { background: #111; color: #fff; }

        /* Ghost button — glass-button-system equivalent */
        .btn-onboarding-submit {
            width: 100%;
            margin-top: 0.75rem;
            padding: 12px 20px;
            border-radius: 5px;
            background: transparent;
            border: 1.4px solid var(--border-color, rgba(0,247,255,0.25));
            color: var(--primary-color, #ECE9D8);
            font-size: 0.9rem;
            font-weight: 700;
            font-family: 'Playfair Display', serif;
            letter-spacing: 0.03em;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-shadow: var(--glow-shadow, 0 0 11px rgba(0,247,255,0.2));
            transition: all 0.3s ease;
        }
        .btn-onboarding-submit:hover:not(:disabled) {
            border-color: var(--price-color, var(--accent-color));
            box-shadow: var(--glow-shadow-hover, 0 0 22px rgba(0,247,255,0.6));
            color: var(--primary-color, #ECE9D8);
            background-color: transparent;
        }
        .btn-onboarding-submit:active:not(:disabled) {
            transform: scale(0.98);
        }
        .btn-onboarding-submit:disabled {
            opacity: 0.4;
            cursor: not-allowed;
            box-shadow: none;
        }
        .btn-onboarding-icon { font-size: 0.85rem; }
    `,document.head.appendChild(a)}bindEvents(){d.subscribe(e=>{console.log("[LoginModal] Auth State Updated:",e==null?void 0:e.email),this.updateView()}),this.container.querySelector(".close-btn").addEventListener("click",()=>this.hide()),this.container.querySelector("#btn-login-google").addEventListener("click",async()=>{try{console.log("[LoginModal] Google Login Clicked");const e=window.container||window.DIContainer;if(e)try{const t=e.resolve("AuthRepository");console.log("[LoginModal] AuthRepository resolved:",t),t&&typeof t.getRedirectUrl=="function"&&console.log("[LoginModal] Target redirectUrl from repo:",t.getRedirectUrl())}catch(t){console.error("[LoginModal] Error resolving AuthRepository:",t)}await d.loginWithGoogle()}catch(e){this.showMessage(e.message,"error")}}),this.container.querySelector("#login-form-email").addEventListener("submit",async e=>{e.preventDefault();const t=(this.container.querySelector("#input-email").value||"").trim(),r=this.container.querySelector(".btn-email");r.setAttribute("data-translate","true"),r.setAttribute("data-key","auth-email-sending"),r.textContent="Enviando Enlace Mágico...",r.disabled=!0;try{await d.loginWithEmail(t),this.showMessage("¡Enlace mágico enviado! Revisa tu bandeja de entrada en "+t,"success"),r.setAttribute("data-translate","true"),r.setAttribute("data-key","auth-email-success"),r.textContent="Revisa tu correo"}catch(l){this.showMessage(l.message,"error"),r.setAttribute("data-translate","true"),r.setAttribute("data-key","auth-submit-btn"),r.textContent="Enviar Enlace Mágico",r.disabled=!1}}),this.container.querySelector("#btn-logout").addEventListener("click",async()=>{console.log("[LoginModal] Logout Button Clicked");try{const e=this.container.querySelector("#btn-logout");e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-logout-sending"),e.textContent="Cerrando sesión...",console.log("[LoginModal] Calling AuthService.logout()..."),await d.logout(),console.log("[LoginModal] AuthService.logout() returned."),this.hide()}catch(e){console.error("[LoginModal] Logout Error:",e);const t=this.container.querySelector("#btn-logout");t.setAttribute("data-translate","true"),t.setAttribute("data-key","auth-logout-error"),t.textContent="Error (Reintentar)",alert("Error al cerrar sesión: "+e.message)}}),window.addEventListener("auth:onboarding-required",()=>{console.log("[LoginModal] auth:onboarding-required event caught. Switching to onboarding mode."),this.setMode("onboarding"),this.container.classList.remove("hidden")});const a=this.container.querySelector("#onboarding-form");let o=!1;a&&a.addEventListener("submit",async e=>{if(e.preventDefault(),o)return;const t=this.container.querySelector("#onboarding-restaurant-name").value.trim(),r=this.container.querySelector("#onboarding-owner").value.trim(),l=this.container.querySelector("#onboarding-currency").value,i=this.container.querySelector("#onboarding-message"),s=a.querySelector("#btn-onboarding-submit");o=!0,s.disabled=!0,s.innerHTML='<span class="btn-onboarding-icon">⏳</span><span class="btn-onboarding-text">Creando negocio...</span>',i.classList.add("hidden");try{const n=d.user;if(!n||!n.id)throw new Error("No hay una sesión activa de usuario.");const{TenantSchemaRepository:c}=await p(async()=>{const{TenantSchemaRepository:g}=await import("./TenantSchemaRepository.js");return{TenantSchemaRepository:g}},__vite__mapDeps([0,1,2]),import.meta.url);await c.createRestaurant(n.id,{name:t,owner:r,currency:l}),typeof sessionStorage<"u"&&sessionStorage.removeItem("SAT_REGISTRATION_MODE"),s.innerHTML='<span class="btn-onboarding-icon">✅</span><span class="btn-onboarding-text" data-translate="true" data-key="negocio-creado" data-namespace="modals">¡Negocio creado!</span>',i.innerHTML='<span data-translate="true" data-key="negocio-configurado-con-exito-cargando-tu" data-namespace="general" data-original-text="¡Negocio configurado con éxito! Cargando tu panel...">¡Negocio configurado con éxito! Cargando tu panel...</span>',i.className="login-message success",i.classList.remove("hidden"),await d._loadProfile(n.id),setTimeout(()=>{this.hide(),window.location.reload()},1500)}catch(n){console.error("[LoginModal] Onboarding error:",n),i.textContent=n.message||"Error al configurar el negocio.",i.className="login-message error",i.classList.remove("hidden"),o=!1,s.disabled=!1,s.innerHTML='<span class="btn-onboarding-icon">✦</span><span class="btn-onboarding-text" data-translate="true" data-key="crear-y-activar-negocio" data-namespace="modals">Crear y Activar Negocio</span>'}})}showMessage(a,o){const e=this.container.querySelector("#login-message");e.textContent=a,e.className=`login-message ${o}`,e.classList.remove("hidden")}show(){this.setMode("login"),this.updateView(),this.container.classList.remove("hidden")}showForRegistration(){this.setMode("register"),this.updateView(),this.container.classList.remove("hidden"),d.setRegistrationMode(!0)}setMode(a){this.currentMode=a;const o=this.container.querySelector("#modal-title"),e=this.container.querySelector("#modal-subtitle"),t=this.container.querySelector("#btn-login-google");!o||!t||(a==="register"?(o.setAttribute("data-translate","true"),o.setAttribute("data-key","auth-register-title"),o.textContent="Registrar Nuevo Negocio",e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-register-subtitle"),e.textContent="Crea tu cuenta de administrador en 1 paso.",t.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span data-key="auth-google-register">Registrarse con Google</span>`):(o.setAttribute("data-translate","true"),o.setAttribute("data-key","auth-modal-title"),o.textContent="Acceso Administrativo",e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-modal-subtitle"),e.textContent="Gestiona tu menú y personaliza tu restaurante.",t.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span data-key="auth-google-btn">Continuar con Google</span>`))}hide(){this.container.classList.add("hidden")}updateView(){const a=d.user,o=this.container.querySelector("#view-guest"),e=this.container.querySelector("#view-auth"),t=this.container.querySelector("#view-onboarding");if(this.currentMode==="onboarding"){o.classList.add("hidden"),e.classList.add("hidden"),t.classList.remove("hidden");return}if(t.classList.add("hidden"),a){o.classList.add("hidden"),e.classList.remove("hidden");const r=this.container.querySelector("#profile-name"),l=this.container.querySelector("#profile-email"),i=this.container.querySelector("#profile-img"),s=this.container.querySelector("#profile-initial"),n=this.container.querySelector("#btn-logout");n.setAttribute("data-translate","true"),n.setAttribute("data-key","auth-logout-btn"),n.textContent="Cerrar Sesión";const c=a.email,g=a.user_metadata||{},u=g.full_name||c.split("@")[0],b=g.avatar_url;r.textContent=u,l.textContent=c,b?(i.src=b,i.style.display="block",s.classList.add("hidden")):(i.style.display="none",s.textContent=u.charAt(0).toUpperCase(),s.classList.remove("hidden"))}else o.classList.remove("hidden"),e.classList.add("hidden"),this.container.querySelector("#login-message").classList.add("hidden")}}const y=new m;export{y as default};
