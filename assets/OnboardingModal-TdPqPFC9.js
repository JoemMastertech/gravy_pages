import i from"./AuthService-BX3-anOv.js";import"./index-Cz4ylFEH.js";class s{constructor(){this.container=document.createElement("div"),this.container.id="onboarding-modal-container",this.container.className="onboarding-overlay hidden",this.render(),this.bindEvents(),document.body.appendChild(this.container)}render(){this.container.innerHTML=`
            <div class="onboarding-card">
                <div class="onboarding-header">
                    <span class="icon">🚀</span>
                    <h2>Configura tu Negocio</h2>
                    <p>Estás a un paso de tener tu Menu Digital. Completa estos datos para crear tu espacio.</p>
                </div>
                
                <form id="onboarding-form">
                    <div class="input-group">
                        <label>Nombre del Restaurante / Bar</label>
                        <input type="text" id="input-restaurant-name" placeholder="Ej. Bar La Terraza" required minlength="3">
                    </div>

                    <div class="input-group">
                        <label>Tu Nombre Completo (Propietario)</label>
                        <input type="text" id="input-owner-name" placeholder="Ej. Juan Pérez" required minlength="3">
                    </div>

                    <div class="input-group">
                        <label>Moneda Principal</label>
                        <select id="input-currency">
                            <option value="MXN">Peso Mexicano (MXN)</option>
                            <option value="USD">Dólar Americano (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                        </select>
                    </div>

                    <div id="onboarding-message" class="message-box hidden"></div>

                    <button type="submit" class="btn-submit">
                        Crear Mi Restaurante
                    </button>
                    
                    <button type="button" class="btn-cancel" id="btn-cancel-onboarding">
                        Cancelar (Cerrar Sesión)
                    </button>
                </form>
            </div>
        `;const e=document.createElement("style");e.innerHTML=`
            .onboarding-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.9); backdrop-filter: blur(10px);
                z-index: 10000; display: flex; justify-content: center; align-items: center;
                animation: fadeIn 0.3s ease;
            }
            .onboarding-overlay.hidden { display: none; }
            
            .onboarding-card {
                background: linear-gradient(145deg, #1e1e1e, #252525);
                width: 90%; max-width: 450px; padding: 2.5rem; border-radius: 20px;
                border: 1px solid rgba(255,255,255,0.1);
                box-shadow: 0 25px 60px rgba(0,0,0,0.6);
                color: white; font-family: 'Inter', sans-serif; text-align: left;
            }

            .onboarding-header { text-align: center; margin-bottom: 2rem; }
            .onboarding-header .icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
            .onboarding-header h2 { margin: 0; color: #fff; font-size: 1.8rem; }
            .onboarding-header p { color: #aaa; font-size: 0.95rem; line-height: 1.5; margin-top: 0.5rem; }

            .input-group { margin-bottom: 1.5rem; }
            .input-group label { display: block; color: #ddd; margin-bottom: 8px; font-size: 0.9rem; font-weight: 500; }
            .input-group input, .input-group select {
                width: 100%; padding: 14px; background: #111; border: 1px solid #444; border-radius: 10px;
                color: white; font-size: 1rem; outline: none; transition: border-color 0.2s; box-sizing: border-box;
            }
            .input-group input:focus, .input-group select:focus { border-color: #00d2ff; }

            .btn-submit {
                width: 100%; padding: 16px; background: #00d2ff; color: #000; border: none; border-radius: 12px;
                font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: transform 0.2s, background 0.2s;
                margin-top: 1rem;
            }
            .btn-submit:hover { background: #33e0ff; transform: translateY(-2px); }
            .btn-submit:disabled { background: #555; cursor: not-allowed; transform: none; }

            .btn-cancel {
                width: 100%; padding: 12px; background: transparent; color: #666; border: none;
                margin-top: 1rem; cursor: pointer; font-size: 0.9rem; text-decoration: underline;
            }
            .btn-cancel:hover { color: #888; }

            .message-box { padding: 12px; border-radius: 8px; margin-bottom: 1rem; font-size: 0.9rem; text-align: center; }
            .message-box.error { background: rgba(255, 68, 68, 0.2); color: #ff6666; }
            .message-box.hidden { display: none; }
        `,document.head.appendChild(e)}bindEvents(){const e=this.container.querySelector("#onboarding-form"),n=this.container.querySelector("#btn-cancel-onboarding");e.addEventListener("submit",async o=>{o.preventDefault(),await this.handleSubmit()}),n.addEventListener("click",async()=>{confirm("¿Estás seguro? Se cerrará tu sesión y tendrás que empezar de nuevo.")&&(await i.logout(),this.hide())})}async handleSubmit(){const e=this.container.querySelector("#input-restaurant-name").value.trim(),n=this.container.querySelector("#input-owner-name").value.trim(),o=this.container.querySelector("#input-currency").value,r=this.container.querySelector(".btn-submit"),t=this.container.querySelector("#onboarding-message");if(!(!e||!n)){r.disabled=!0,r.textContent="Creando tu espacio...",t.classList.add("hidden");try{if(await i.createRestaurant({name:e,owner:n,currency:o}))this.hide(),alert("¡Bienvenido! Tu restaurante ha sido configurado.");else throw new Error("No se pudo crear el restaurante. Intenta de nuevo.")}catch(a){console.error(a),t.textContent=a.message||"Error desconocido",t.className="message-box error",t.classList.remove("hidden"),r.disabled=!1,r.textContent="Crear Mi Restaurante"}}}show(){const e=i.user;e?.user_metadata?.full_name&&(this.container.querySelector("#input-owner-name").value=e.user_metadata.full_name),this.container.classList.remove("hidden")}hide(){this.container.classList.add("hidden")}}const u=new s;export{u as default};
