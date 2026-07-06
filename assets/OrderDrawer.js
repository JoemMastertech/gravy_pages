import o from"./SidebarManager.js";import{i}from"./index.js";const m={config:{drawerId:"order-sidebar",backdropId:"sidebar-backdrop",activeClass:"active",openClass:"is-open",appContainerSelector:".app-container",openAttribute:"data-sidebar-state",openValue:"open",desktopBreakpoint:1280},mount(){if(document.getElementById(this.config.drawerId))return;const e=document.createElement("div");e.id=this.config.drawerId,e.className="order-sidebar",e.innerHTML=`
          <div class="order-scroll-layer">
            <h3 class="drawer-title" data-translate="true" data-key="drawer.title" data-namespace="menu">Tu Orden</h3>
            <div id="order-items" class="order-items-scroll"></div>
          </div>
          <div class="drawer-footer">
            <div class="order-summary">
              <div class="total-row">
                <span data-translate="true" data-key="drawer.total" data-namespace="menu">Total:</span>
                <span id="order-total-amount" class="total-amount">$0.00</span>
              </div>
            </div>
            <div class="order-actions">
              <button id="complete-order-btn" class="order-action-btn primary-btn"
                      data-translate="true" data-key="menu.create_order" data-namespace="general">Completar</button>
              <button id="cancel-order-btn" class="order-action-btn secondary-btn"
                      data-translate="true" data-key="menu.cancel_order" data-namespace="general">Cancelar</button>
            </div>
          </div>
        `,(document.getElementById("app")||document.body).appendChild(e),i(),window.addEventListener("ORDER_TOTALS_CHANGED",({detail:s})=>{const{totalFormatted:d,count:t}=s,r=document.getElementById("order-total-amount");r&&r.textContent!==d&&(r.textContent=d);const a=document.getElementById("cart-badge")||document.getElementById("order-count-badge")||document.querySelector("[data-cart-count]");if(a){a.textContent=t>0?String(t):"",a.toggleAttribute("hidden",t===0);const n=a.closest("[data-cart-bubble]");n&&n.toggleAttribute("hidden",t===0)}})},init(){if(this.mount(),this.drawer=document.getElementById(this.config.drawerId),this.appContainer=document.querySelector(this.config.appContainerSelector),!this.drawer){console.warn("OrderDrawer: order-sidebar element not found.");return}console.log("OrderDrawer: Ready.")},open(e=!1){console.log("OrderDrawer: open()"),o.open(this.config.drawerId,{disableBackdrop:!0})},close(e=!1){console.log("OrderDrawer: close()"),o.close(this.config.drawerId,e)},toggle(){console.log("OrderDrawer: toggle()"),o.toggle(this.config.drawerId)}};export{m as default};
