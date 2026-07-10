import{L as i}from"./index.js";class h{constructor(){this.stream=null,this.overlay=null,this.animationId=null,this.jsQRLoaded=!1}async _loadJsQR(){return window.jsQR?(this.jsQRLoaded=!0,window.jsQR):new Promise((r,t)=>{i.info("[QrCameraScanner] Cargando jsQR desde CDN...");const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js",e.onload=()=>{i.info("[QrCameraScanner] jsQR cargado con éxito."),this.jsQRLoaded=!0,r(window.jsQR)},e.onerror=o=>{i.error("[QrCameraScanner] Error al cargar jsQR:",o),t(o)},document.head.appendChild(e)})}_injectStyles(){if(document.getElementById("qr-camera-styles"))return;const r=document.createElement("style");r.id="qr-camera-styles",r.textContent=`
            #qr-camera-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: #000;
                z-index: 100000;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                font-family: 'Inter', sans-serif;
                color: white;
            }
            #qr-video-preview {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
            }
            .qr-scanner-frame-wrapper {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                z-index: 2;
                position: relative;
            }
            .qr-scanner-frame {
                position: relative;
                width: 260px;
                height: 260px;
                border: 3px solid rgba(255, 255, 255, 0.4);
                border-radius: 32px;
                box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
            .qr-scanner-line {
                width: 100%;
                height: 3px;
                background: #4fc3f7;
                position: absolute;
                top: 0;
                box-shadow: 0 0 10px #4fc3f7;
                animation: qrScanMove 2.2s infinite ease-in-out;
            }
            @keyframes qrScanMove {
                0% { top: 0%; }
                50% { top: 100%; }
                100% { top: 0%; }
            }
            .qr-scanner-header {
                z-index: 2;
                padding: 2.5rem 1rem 1rem;
                text-align: center;
                width: 100%;
                background: linear-gradient(to bottom, rgba(0,0,0,0.85), transparent);
            }
            .qr-scanner-header h2 {
                margin: 0;
                font-size: 1.3rem;
                font-weight: 700;
                letter-spacing: 0.05em;
            }
            .qr-scanner-header p {
                margin: 6px 0 0;
                font-size: 0.85rem;
                color: #94a3b8;
            }
            .qr-scanner-footer {
                z-index: 2;
                padding: 1.5rem 1rem 3rem;
                text-align: center;
                width: 100%;
                background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
            }
            .btn-qr-close {
                background: rgba(255, 255, 255, 0.12);
                border: 1px solid rgba(255, 255, 255, 0.25);
                color: white;
                padding: 12px 36px;
                border-radius: 30px;
                font-size: 0.95rem;
                font-weight: 600;
                cursor: pointer;
                backdrop-filter: blur(8px);
                transition: background 0.3s;
            }
            .btn-qr-close:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        `,document.head.appendChild(r)}async scan(){this._injectStyles();const r=await this._loadJsQR();return new Promise(async t=>{try{this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),this.overlay=document.createElement("div"),this.overlay.id="qr-camera-overlay",this.overlay.innerHTML=`
                    <div class="qr-scanner-header">
                        <h2 data-translate="true" data-key="esc-ner-qr-c-mara" data-namespace="modals">Escáner QR Cámara 📷</h2>
                        <p data-translate="true" data-key="encuadra-el-c-digo-qr-dentro-del-recuadr" data-namespace="modals">Encuadra el código QR dentro del recuadro</p>
                    </div>
                    <video id="qr-video-preview" autoplay playsinline></video>
                    <div class="qr-scanner-frame-wrapper">
                        <div class="qr-scanner-frame">
                            <div class="qr-scanner-line"></div>
                        </div>
                    </div>
                    <div class="qr-scanner-footer">
                        <button class="btn-qr-close">Cancelar</button>
                    </div>
                `,document.body.appendChild(this.overlay);const e=this.overlay.querySelector("#qr-video-preview"),o=this.overlay.querySelector(".btn-qr-close");e.srcObject=this.stream;const a=document.createElement("canvas"),d=a.getContext("2d",{willReadFrequently:!0}),c=()=>{this.animationId&&cancelAnimationFrame(this.animationId),this.stream&&this.stream.getTracks().forEach(n=>n.stop()),this.overlay&&(this.overlay.remove(),this.overlay=null)};o.onclick=()=>{c(),t(null)};const l=()=>{if(e.readyState===e.HAVE_ENOUGH_DATA){a.height=e.videoHeight,a.width=e.videoWidth,d.drawImage(e,0,0,a.width,a.height);const n=d.getImageData(0,0,a.width,a.height),s=r(n.data,n.width,n.height,{inversionAttempts:"dontInvert"});if(s){i.info("[QrCameraScanner] QR Detectado:",s.data);const m=this.overlay.querySelector(".qr-scanner-frame");m&&(m.style.borderColor="#4caf50"),setTimeout(()=>{c(),t(s.data)},300);return}}this.animationId=requestAnimationFrame(l)};this.animationId=requestAnimationFrame(l)}catch(e){i.error("[QrCameraScanner] Error al acceder a la cámara:",e),alert("No se pudo acceder a la cámara. Por favor verifica los permisos."),t(null)}})}}const f=new h;export{f as default};
