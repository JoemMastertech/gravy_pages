const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TenantSchemaRepository.js","./index.js","./index.css"])))=>i.map(i=>d[i]);
import{_ as h}from"./index.js";import s from"./AuthService.js";class b{constructor(){this.container=document.createElement("div"),this.container.id="auth-modal-container",this.container.className="login-modal-overlay hidden",this.render(),this.bindEvents(),document.body.appendChild(this.container)}render(){this.container.innerHTML=`
      <div class="login-modal-card">
        <button class="close-btn">×</button>
        
        <!-- View: Guest (Login/Register) -->
        <div id="view-guest" class="modal-view">
            <div class="login-header">
                <h2 id="modal-title" data-translate="true" data-key="auth-modal-title">Acceso Administrativo</h2>
                <p id="modal-subtitle" data-translate="true" data-key="auth-modal-subtitle">Gestiona tu menú y personaliza tu restaurante.</p>
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
                    <span data-translate="true" data-key="auth-google-btn">Continuar con Google</span>
                </button>

                <div class="divider"><span data-translate="true" data-key="auth-divider-or">O</span></div>

                <!-- Email Form -->
                <form id="login-form-email">
                    <div class="input-group">
                        <label data-translate="true" data-key="auth-email-label">Correo Electrónico</label>
                        <input type="email" id="input-email" placeholder="tu@restaurante.com" required
                          data-translate-placeholder="true" data-key="auth-email-placeholder">
                    </div>
                    <button type="submit" class="btn-email" data-translate="true" data-key="auth-submit-btn">Enviar Enlace Mágico</button>
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
                <button id="btn-logout" class="btn-logout" data-translate="true" data-key="auth-logout-btn">
                    Cerrar Sesión
                </button>
            </div>
        </div>

        <!-- View: Onboarding (Create Restaurant) -->
        <div id="view-onboarding" class="modal-view hidden">
            <div class="login-header">
                <h2 data-translate="true" data-key="auth-onboarding-title">Configurar Nuevo Negocio</h2>
                <p data-translate="true" data-key="auth-onboarding-subtitle">Asocia un restaurante a tu cuenta de administrador.</p>
            </div>

            <div class="login-body">
                <form id="onboarding-form">
                    <div class="input-group" style="text-align: left; margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-size: 0.85rem; color: #aaa;" data-translate="true" data-key="nombre-del-negocio" data-namespace="modals">Nombre del Negocio</label>
                        <input type="text" id="onboarding-restaurant-name" placeholder="Ej: Mi Restaurante Bar" required
                          data-translate-placeholder="ej-mi-restaurante-bar" data-namespace="general"
                          style="width: 100%; padding: 0.8rem; border-radius: 8px; background: #2a2a2a; color: white; border: 1px solid rgba(255,255,255,0.1); box-sizing: border-box;">
                    </div>
                    <div class="input-group" style="text-align: left; margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-size: 0.85rem; color: #aaa;" data-translate="true" data-key="nombre-del-propietario" data-namespace="modals">Nombre del Propietario</label>
                        <input type="text" id="onboarding-owner" placeholder="Ej: Juan Pérez" required
                          data-translate-placeholder="ej-juan-p-rez" data-namespace="general"
                          style="width: 100%; padding: 0.8rem; border-radius: 8px; background: #2a2a2a; color: white; border: 1px solid rgba(255,255,255,0.1); box-sizing: border-box;">
                    </div>
                    <div class="input-group" style="text-align: left; margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-size: 0.85rem; color: #aaa;" data-translate="true" data-key="moneda" data-namespace="modals">Moneda</label>
                        <select id="onboarding-currency" required style="width: 100%; padding: 0.8rem; border-radius: 8px; background: #2a2a2a; color: white; border: 1px solid rgba(255,255,255,0.1); box-sizing: border-box;">
                            <option value="MXN" data-translate="true" data-key="peso-mexicano-mxn" data-namespace="modals">Peso Mexicano (MXN)</option>
                            <option value="USD" data-translate="true" data-key="d-lar-estadounidense-usd" data-namespace="modals">Dólar Estadounidense (USD)</option>
                            <option value="EUR" data-translate="true" data-key="euro-eur" data-namespace="modals">Euro (EUR)</option>
                            <option value="COP" data-translate="true" data-key="peso-colombiano-cop" data-namespace="modals">Peso Colombiano (COP)</option>
                            <option value="ARS" data-translate="true" data-key="peso-argentino-ars" data-namespace="modals">Peso Argentino (ARS)</option>
                        </select>
                    </div>
                    <button type="submit" class="btn-email" style="margin-top: 1rem; width: 100%;" data-translate="true" data-key="crear-y-activar-negocio" data-namespace="modals">Crear y Activar Negocio</button>
                </form>
                <div id="onboarding-message" class="login-message hidden"></div>
            </div>
        </div>

      </div>
    `;const o=document.createElement("style");o.id="login-modal-styles",o.innerHTML=`
        .login-modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
            z-index: 9999; display: flex; justify-content: center; align-items: center;
            opacity: 1; transition: opacity 0.3s ease;
        }
        .login-modal-overlay.hidden { opacity: 0; pointer-events: none; }
        
        .login-modal-card {
            background: #1a1a1a; width: 90%; max-width: 400px;
            padding: 2rem; border-radius: 24px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            position: relative; text-align: center;
            color: white; font-family: 'Inter', sans-serif;
            overflow: hidden; /* For animations */
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

        .login-header h2 { margin: 0 0 0.5rem; font-size: 1.5rem; }
        .login-header p { margin: 0; color: #888; font-size: 0.9rem; }
        .login-header .icon { font-size: 2rem; display: block; margin-bottom: 1rem; }

        .login-body { margin-top: 2rem; }

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
    `,document.head.appendChild(o)}bindEvents(){s.subscribe(e=>{console.log("[LoginModal] Auth State Updated:",e==null?void 0:e.email),this.updateView()}),this.container.querySelector(".close-btn").addEventListener("click",()=>this.hide()),this.container.querySelector("#btn-login-google").addEventListener("click",async()=>{try{console.log("[LoginModal] Google Login Clicked");const e=window.container||window.DIContainer;if(e)try{const t=e.resolve("AuthRepository");console.log("[LoginModal] AuthRepository resolved:",t),t&&typeof t.getRedirectUrl=="function"&&console.log("[LoginModal] Target redirectUrl from repo:",t.getRedirectUrl())}catch(t){console.error("[LoginModal] Error resolving AuthRepository:",t)}await s.loginWithGoogle()}catch(e){this.showMessage(e.message,"error")}}),this.container.querySelector("#login-form-email").addEventListener("submit",async e=>{e.preventDefault();const t=this.container.querySelector("#input-email").value,a=this.container.querySelector(".btn-email");a.setAttribute("data-translate","true"),a.setAttribute("data-key","auth-email-sending"),a.textContent="Enviando...",a.disabled=!0;try{await s.loginWithEmail(t),this.showMessage("¡Enlace enviado! Revisa tu correo.","success"),a.setAttribute("data-translate","true"),a.setAttribute("data-key","auth-email-success"),a.textContent="Revisa tu correo"}catch(d){this.showMessage(d.message,"error"),a.setAttribute("data-translate","true"),a.setAttribute("data-key","auth-submit-btn"),a.textContent="Enviar Enlace Mágico",a.disabled=!1}}),this.container.querySelector("#btn-logout").addEventListener("click",async()=>{console.log("[LoginModal] Logout Button Clicked");try{const e=this.container.querySelector("#btn-logout");e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-logout-sending"),e.textContent="Cerrando sesión...",console.log("[LoginModal] Calling AuthService.logout()..."),await s.logout(),console.log("[LoginModal] AuthService.logout() returned."),this.hide()}catch(e){console.error("[LoginModal] Logout Error:",e);const t=this.container.querySelector("#btn-logout");t.setAttribute("data-translate","true"),t.setAttribute("data-key","auth-logout-error"),t.textContent="Error (Reintentar)",alert("Error al cerrar sesión: "+e.message)}}),window.addEventListener("auth:onboarding-required",()=>{console.log("[LoginModal] auth:onboarding-required event caught. Switching to onboarding mode."),this.setMode("onboarding"),this.container.classList.remove("hidden")});const o=this.container.querySelector("#onboarding-form");o&&o.addEventListener("submit",async e=>{e.preventDefault();const t=this.container.querySelector("#onboarding-restaurant-name").value,a=this.container.querySelector("#onboarding-owner").value,d=this.container.querySelector("#onboarding-currency").value,n=this.container.querySelector("#onboarding-message"),i=o.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="Creando negocio...",n.classList.add("hidden");try{const r=s.user;if(!r||!r.id)throw new Error("No hay una sesión activa de usuario.");console.log("[LoginModal] Creating restaurant for user:",r.id,{name:t,owner:a,currency:d});const{TenantSchemaRepository:l}=await h(async()=>{const{TenantSchemaRepository:c}=await import("./TenantSchemaRepository.js");return{TenantSchemaRepository:c}},__vite__mapDeps([0,1,2]),import.meta.url);await l.createRestaurant(r.id,{name:t,owner:a,currency:d}),typeof sessionStorage<"u"&&sessionStorage.removeItem("SAT_REGISTRATION_MODE"),n.setAttribute("data-translate","true"),n.textContent="¡Negocio configurado con éxito! Cargando...",n.className="login-message success",n.classList.remove("hidden"),await s._loadProfile(r.id),setTimeout(()=>{this.hide(),window.location.reload()},1500)}catch(r){console.error("[LoginModal] Onboarding error:",r),n.textContent=r.message||"Error al configurar el negocio.",n.className="login-message error",n.classList.remove("hidden"),i.disabled=!1,i.setAttribute("data-translate","true"),i.setAttribute("data-key","crear-y-activar-negocio"),i.setAttribute("data-original-text","Crear y Activar Negocio"),i.setAttribute("data-namespace","general"),i.textContent="Crear y Activar Negocio"}})}showMessage(o,e){const t=this.container.querySelector("#login-message");t.textContent=o,t.className=`login-message ${e}`,t.classList.remove("hidden")}show(){this.setMode("login"),this.updateView(),this.container.classList.remove("hidden")}showForRegistration(){this.setMode("register"),this.updateView(),this.container.classList.remove("hidden"),s.setRegistrationMode(!0)}setMode(o){this.currentMode=o;const e=this.container.querySelector("#modal-title"),t=this.container.querySelector("#modal-subtitle"),a=this.container.querySelector("#btn-login-google");!e||!a||(o==="register"?(e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-register-title"),e.textContent="Registrar Nuevo Negocio",t.setAttribute("data-translate","true"),t.setAttribute("data-key","auth-register-subtitle"),t.textContent="Crea tu cuenta de administrador en 1 paso.",a.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span data-translate="true" data-key="auth-google-register">Registrarse con Google</span>`):(e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-modal-title"),e.textContent="Acceso Administrativo",t.setAttribute("data-translate","true"),t.setAttribute("data-key","auth-modal-subtitle"),t.textContent="Gestiona tu menú y personaliza tu restaurante.",a.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span data-translate="true" data-key="auth-google-btn">Continuar con Google</span>`))}hide(){this.container.classList.add("hidden")}updateView(){const o=s.user,e=this.container.querySelector("#view-guest"),t=this.container.querySelector("#view-auth"),a=this.container.querySelector("#view-onboarding");if(this.currentMode==="onboarding"){e.classList.add("hidden"),t.classList.add("hidden"),a.classList.remove("hidden");return}if(a.classList.add("hidden"),o){e.classList.add("hidden"),t.classList.remove("hidden");const d=this.container.querySelector("#profile-name"),n=this.container.querySelector("#profile-email"),i=this.container.querySelector("#profile-img"),r=this.container.querySelector("#profile-initial"),l=this.container.querySelector("#btn-logout");l.setAttribute("data-translate","true"),l.setAttribute("data-key","auth-logout-btn"),l.textContent="Cerrar Sesión";const c=o.email,u=o.user_metadata||{},g=u.full_name||c.split("@")[0],m=u.avatar_url;d.textContent=g,n.textContent=c,m?(i.src=m,i.style.display="block",r.classList.add("hidden")):(i.style.display="none",r.textContent=g.charAt(0).toUpperCase(),r.classList.remove("hidden"))}else e.classList.remove("hidden"),t.classList.add("hidden"),this.container.querySelector("#login-message").classList.add("hidden")}}const f=new b;export{f as default};
