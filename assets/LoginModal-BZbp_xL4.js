import{a as o}from"./index-BSnyp0AL.js";class h{constructor(){this.container=document.createElement("div"),this.container.id="auth-modal-container",this.container.className="login-modal-overlay hidden",this.render(),this.bindEvents(),document.body.appendChild(this.container)}render(){this.container.innerHTML=`
      <div class="login-modal-card">
        <button class="close-btn">×</button>
        
        <!-- View: Guest (Login/Register) -->
        <div id="view-guest" class="modal-view">
            <div class="login-header">
                <span class="icon">🦅</span>
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

      </div>
    `;const t=document.createElement("style");t.id="login-modal-styles",t.innerHTML=`
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
    `,document.head.appendChild(t)}bindEvents(){o.subscribe(t=>{console.log("[LoginModal] Auth State Updated:",t==null?void 0:t.email),this.updateView()}),this.container.querySelector(".close-btn").addEventListener("click",()=>this.hide()),this.container.querySelector("#btn-login-google").addEventListener("click",async()=>{try{await o.loginWithGoogle()}catch(t){this.showMessage(t.message,"error")}}),this.container.querySelector("#login-form-email").addEventListener("submit",async t=>{t.preventDefault();const a=this.container.querySelector("#input-email").value,e=this.container.querySelector(".btn-email");e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-email-sending"),e.textContent="Enviando...",e.disabled=!0;try{await o.loginWithEmail(a),this.showMessage("¡Enlace enviado! Revisa tu correo.","success"),e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-email-success"),e.textContent="Revisa tu correo"}catch(i){this.showMessage(i.message,"error"),e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-submit-btn"),e.textContent="Enviar Enlace Mágico",e.disabled=!1}}),this.container.querySelector("#btn-logout").addEventListener("click",async()=>{console.log("[LoginModal] Logout Button Clicked");try{const t=this.container.querySelector("#btn-logout");t.setAttribute("data-translate","true"),t.setAttribute("data-key","auth-logout-sending"),t.textContent="Cerrando sesión...",console.log("[LoginModal] Calling AuthService.logout()..."),await o.logout(),console.log("[LoginModal] AuthService.logout() returned."),this.hide()}catch(t){console.error("[LoginModal] Logout Error:",t);const a=this.container.querySelector("#btn-logout");a.setAttribute("data-translate","true"),a.setAttribute("data-key","auth-logout-error"),a.textContent="Error (Reintentar)",alert("Error al cerrar sesión: "+t.message)}})}showMessage(t,a){const e=this.container.querySelector("#login-message");e.textContent=t,e.className=`login-message ${a}`,e.classList.remove("hidden")}show(){this.setMode("login"),this.updateView(),this.container.classList.remove("hidden")}showForRegistration(){this.setMode("register"),this.updateView(),this.container.classList.remove("hidden"),o.setRegistrationMode(!0)}setMode(t){const a=this.container.querySelector("#modal-title"),e=this.container.querySelector("#modal-subtitle"),i=this.container.querySelector("#btn-login-google");t==="register"?(a.setAttribute("data-translate","true"),a.setAttribute("data-key","auth-register-title"),a.textContent="Registrar Nuevo Negocio",e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-register-subtitle"),e.textContent="Crea tu cuenta de administrador en 1 paso.",i.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span data-translate="true" data-key="auth-google-register">Registrarse con Google</span>`):(a.setAttribute("data-translate","true"),a.setAttribute("data-key","auth-modal-title"),a.textContent="Acceso Administrativo",e.setAttribute("data-translate","true"),e.setAttribute("data-key","auth-modal-subtitle"),e.textContent="Gestiona tu menú y personaliza tu restaurante.",i.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span data-translate="true" data-key="auth-google-btn">Continuar con Google</span>`)}hide(){this.container.classList.add("hidden")}updateView(){const t=o.user,a=this.container.querySelector("#view-guest"),e=this.container.querySelector("#view-auth");if(t){a.classList.add("hidden"),e.classList.remove("hidden");const i=this.container.querySelector("#profile-name"),g=this.container.querySelector("#profile-email"),r=this.container.querySelector("#profile-img"),n=this.container.querySelector("#profile-initial"),s=this.container.querySelector("#btn-logout");s.setAttribute("data-translate","true"),s.setAttribute("data-key","auth-logout-btn"),s.textContent="Cerrar Sesión";const l=t.email,d=t.user_metadata||{},c=d.full_name||l.split("@")[0],u=d.avatar_url;i.textContent=c,g.textContent=l,u?(r.src=u,r.style.display="block",n.classList.add("hidden")):(r.style.display="none",n.textContent=c.charAt(0).toUpperCase(),n.classList.remove("hidden"))}else a.classList.remove("hidden"),e.classList.add("hidden"),this.container.querySelector("#login-message").classList.add("hidden")}}const m=new h;export{m as default};
