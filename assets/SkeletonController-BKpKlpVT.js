import{L as i}from"./index-DsyGogb_.js";class o{constructor(e){this.store=e,this.containerId="content-container",this.activeSkeleton=null,this._unsubscribe=null}init(){if(!this.store){i.error("[SkeletonController] No TenantStore provided");return}this._unsubscribe=this.store.subscribe(e=>{e.status==="LOADING"?this.renderSkeleton():e.status==="READY"||e.status==="GUEST"?(this.clearSkeleton(),document.dispatchEvent(new CustomEvent("TENANT_READY",{detail:{status:e.status,restaurantId:e.restaurantId}}))):e.status==="ERROR"&&this.renderError()})}injectInto(e){e&&this._drawSkeleton(e)}renderSkeleton(){const e=document.getElementById(this.containerId);e&&(this.activeSkeleton||this._drawSkeleton(e))}_drawSkeleton(e){const t=document.createElement("div");if(t.className="skeleton-hub",t.setAttribute("role","status"),t.setAttribute("aria-label","Cargando contenido..."),t.innerHTML=`
            <div class="skeleton-header">
                <div class="shimmer title-shimmer"></div>
            </div>
            <div class="skeleton-grid">
                ${Array(8).fill('<div class="shimmer card-shimmer"></div>').join("")}
            </div>
        `,!document.getElementById("skeleton-styles")){const r=document.createElement("style");r.id="skeleton-styles",r.innerHTML=`
                .skeleton-hub { padding: 20px; width: 100%; display: flex; flex-direction: column; gap: 20px; }
                .shimmer {
                    background: #f6f7f8;
                    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
                    background-repeat: no-repeat;
                    background-size: 800px 100%; 
                    animation-duration: 1.5s;
                    animation-fill-mode: forwards; 
                    animation-iteration-count: infinite;
                    animation-name: placeholderShimmer;
                    animation-timing-function: linear;
                }
                .title-shimmer { height: 40px; width: 40%; border-radius: 8px; margin: 0 auto; margin-bottom: 20px; }
                
                /* Sincronización con el Grid Architecture 4-3-2 de Gravy */
                .skeleton-grid { 
                    display: grid; 
                    gap: 20px; 
                    width: 100%;
                    grid-template-columns: repeat(2, 1fr); /* Mobile default */
                }

                @media (min-width: 768px) { .skeleton-grid { grid-template-columns: repeat(3, 1fr); } }
                @media (min-width: 1200px) { .skeleton-grid { grid-template-columns: repeat(4, 1fr); } }

                .card-shimmer { height: 320px; border-radius: 12px; width: 100%; }
                
                /* Dark Mode Support */
                [data-theme*="dark"] .shimmer {
                    background: #1e1e1e;
                    background-image: linear-gradient(to right, #1e1e1e 0%, #2a2a2a 20%, #1e1e1e 40%, #1e1e1e 100%);
                }
                @keyframes placeholderShimmer {
                    0% { background-position: -468px 0; }
                    100% { background-position: 468px 0; }
                }
            `,document.head.appendChild(r)}e.innerHTML="",e.appendChild(t),e.id===this.containerId&&(this.activeSkeleton=t)}clearSkeleton(){this.activeSkeleton&&(this.activeSkeleton.remove(),this.activeSkeleton=null)}renderError(){const e=document.getElementById(this.containerId);e&&(this.clearSkeleton(),e.innerHTML=`
            <div class="error-container" style="text-align: center; padding: 40px;">
                <h3 style="color: var(--color-bad);" data-translate="true" data-key="error-de-conexi-n" data-namespace="errors">Error de conexión</h3>
                <p data-translate="true" data-key="no-se-pudo-cargar-el-perfil-del-establec" data-namespace="errors">No se pudo cargar el perfil del establecimiento. Por favor, recarga la página.</p>
                <button onclick="window.location.reload()" class="btn btn-primary" style="margin-top: 20px;" data-translate="true" data-key="btn-recargar" data-namespace="ui">Recargar</button>
            </div>
        `)}destroy(){this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this.clearSkeleton()}}export{o as SkeletonController};
