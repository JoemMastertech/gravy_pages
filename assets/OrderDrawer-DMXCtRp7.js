import r from"./SidebarManager-DmCFjbEU.js";import{i as a}from"./index-CCw_zYd4.js";const n={config:{drawerId:"order-sidebar",backdropId:"sidebar-backdrop",activeClass:"active",openClass:"is-open",appContainerSelector:".app-container",openAttribute:"data-sidebar-state",openValue:"open",desktopBreakpoint:1280},mount(){if(document.getElementById(this.config.drawerId))return;const e=document.createElement("div");e.id=this.config.drawerId,e.className="order-sidebar",e.innerHTML=`
          <div class="order-scroll-layer">
            <h3 class="drawer-title" data-translate-target="true" data-translate="drawer.title" data-namespace="menu">Tu Orden</h3>
            <div id="order-items" class="order-items-scroll"></div>
          </div>
          <div class="drawer-footer">
            <div class="order-summary">
              <div class="total-row">
                <span data-translate-target="true" data-translate="drawer.total" data-namespace="menu">Total:</span>
                <span id="order-total-amount" class="total-amount">$0.00</span>
              </div>
            </div>
            <div class="order-actions">
              <button id="complete-order-btn" class="nav-button primary-btn"
                      data-translate-target="true" data-translate="menu.create_order">Completar</button>
              <button id="cancel-order-btn" class="nav-button secondary-btn"
                      data-translate-target="true" data-translate="menu.cancel_order">Cancelar</button>
            </div>
          </div>
        `,(document.getElementById("app")||document.body).appendChild(e),a()},init(){if(this.mount(),this.drawer=document.getElementById(this.config.drawerId),this.appContainer=document.querySelector(this.config.appContainerSelector),!this.drawer){console.warn("OrderDrawer: order-sidebar element not found.");return}console.log("OrderDrawer: Ready.")},open(e=!1){console.log("OrderDrawer: open()"),r.open(this.config.drawerId,{disableBackdrop:!0})},close(e=!1){console.log("OrderDrawer: close()"),r.close(this.config.drawerId,e)},toggle(){console.log("OrderDrawer: toggle()"),r.toggle(this.config.drawerId)}};export{n as default};
