import n from"./AuthService-CcF7jOiY.js";import"./index-DoWTiArC.js";class u{constructor(){this.container=document.createElement("div"),this.container.id="auth-modal-container",this.container.className="login-modal-overlay hidden",this.render(),this.bindEvents(),document.body.appendChild(this.container)}render(){this.container.innerHTML=`
      <div class="login-modal-card">
        <button class="close-btn">×</button>
        
        <!-- View: Guest (Login/Register) -->
        <div id="view-guest" class="modal-view">
            <div class="login-header">
                <span class="icon">🦅</span>
                <h2 id="modal-title">Acceso Administrativo</h2>
                <p id="modal-subtitle">Gestiona tu menú y personaliza tu restaurante.</p>
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
                    Continuar con Google
                </button>

                <div class="divider"><span>O</span></div>

                <!-- Email Form -->
                <form id="login-form-email">
                    <div class="input-group">
                        <label>Correo Electrónico</label>
                        <input type="email" id="input-email" placeholder="tu@restaurante.com" required>
                    </div>
                    <button type="submit" class="btn-email">Enviar Enlace Mágico</button>
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
                <button id="btn-logout" class="btn-logout">
                    Cerrar Sesión
                </button>
            </div>
        </div>

      </div>
    `;const e=document.createElement("style");e.innerHTML=`
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
        .modal-view { animation: fadeIn 0.3s ease; }
        .modal-view.hidden { display: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

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
    `,document.head.appendChild(e)}bindEvents(){n.subscribe(e=>{console.log("[LoginModal] Auth State Updated:",e?.email),this.updateView()}),this.container.querySelector(".close-btn").addEventListener("click",()=>this.hide()),this.container.querySelector("#btn-login-google").addEventListener("click",async()=>{try{await n.loginWithGoogle()}catch(e){this.showMessage(e.message,"error")}}),this.container.querySelector("#login-form-email").addEventListener("submit",async e=>{e.preventDefault();const o=this.container.querySelector("#input-email").value,t=this.container.querySelector(".btn-email");t.textContent="Enviando...",t.disabled=!0;try{await n.loginWithEmail(o),this.showMessage("¡Enlace enviado! Revisa tu correo.","success"),t.textContent="Revisa tu correo"}catch(i){this.showMessage(i.message,"error"),t.textContent="Enviar Enlace Mágico",t.disabled=!1}}),this.container.querySelector("#btn-logout").addEventListener("click",async()=>{console.log("[LoginModal] Logout Button Clicked");try{const e=this.container.querySelector("#btn-logout");e.textContent="Cerrando sesión...",console.log("[LoginModal] Calling AuthService.logout()..."),await n.logout(),console.log("[LoginModal] AuthService.logout() returned."),this.hide()}catch(e){console.error("[LoginModal] Logout Error:",e);const o=this.container.querySelector("#btn-logout");o.textContent="Error (Reintentar)",alert("Error al cerrar sesión: "+e.message)}})}showMessage(e,o){const t=this.container.querySelector("#login-message");t.textContent=e,t.className=`login-message ${o}`,t.classList.remove("hidden")}show(){this.setMode("login"),this.updateView(),this.container.classList.remove("hidden")}showForRegistration(){this.setMode("register"),this.updateView(),this.container.classList.remove("hidden"),n.setRegistrationMode(!0)}setMode(e){const o=this.container.querySelector("#modal-title"),t=this.container.querySelector("#modal-subtitle"),i=this.container.querySelector("#btn-login-google");e==="register"?(o.textContent="Registrar Nuevo Negocio",t.textContent="Crea tu cuenta de administrador en 1 paso.",i.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Registrarse con Google`):(o.textContent="Acceso Administrativo",t.textContent="Gestiona tu menú y personaliza tu restaurante.",i.innerHTML=`
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.455 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Continuar con Google`)}hide(){this.container.classList.add("hidden")}updateView(){const e=n.user,o=this.container.querySelector("#view-guest"),t=this.container.querySelector("#view-auth");if(e){o.classList.add("hidden"),t.classList.remove("hidden");const i=this.container.querySelector("#profile-name"),g=this.container.querySelector("#profile-email"),r=this.container.querySelector("#profile-img"),a=this.container.querySelector("#profile-initial"),h=this.container.querySelector("#btn-logout");h.textContent="Cerrar Sesión";const s=e.email,l=e.user_metadata||{},d=l.full_name||s.split("@")[0],c=l.avatar_url;i.textContent=d,g.textContent=s,c?(r.src=c,r.style.display="block",a.classList.add("hidden")):(r.style.display="none",a.textContent=d.charAt(0).toUpperCase(),a.classList.remove("hidden"))}else o.classList.remove("hidden"),t.classList.add("hidden"),this.container.querySelector("#login-message").classList.add("hidden")}}const v=new u;export{v as default};
