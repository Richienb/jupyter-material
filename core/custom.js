import $ from "jquery"
import * as mdc from "material-components-web"

$("#header").replaceWith(`
    <header class="jm--header mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <span class="mdc-top-app-bar__title">Jupyter Notebook</span> </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                <button class="mdc-icon-button mdc-top-app-bar__action-item--unbounded jm--logout" title="Log out" data-mdc-auto-init="MDCRipple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                    </svg>
                </button>
                <button class="mdc-icon-button mdc-top-app-bar__action-item--unbounded jm--quit" title="Quit" data-mdc-auto-init="MDCRipple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    </svg>
                </button>
            </section>
        </div>
    </header>
    <div class="mdc-top-app-bar--fixed-adjust"></div>
`)

$("#tabs").replaceWith(`
    <div class="mdc-tab-bar" role="tablist" data-mdc-auto-init="MDCTabBar">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area">
          <div class="mdc-tab-scroller__scroll-content">
            <a class="mdc-tab mdc-tab--active" href="#notebooks" role="tab" aria-selected="true" tabindex="0">
              <span class="mdc-tab__content">
                <svg xmlns="http://www.w3.org/2000/svg" class="mdc-tab__icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></svg><span class="mdc-tab__text-label">Files</span>
              </span>
              <span class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
              </span>
              <span class="mdc-tab__ripple"></span>
            </a>
          <a class="mdc-tab" href="#running" role="tab" aria-selected="true" tabindex="0">
              <span class="mdc-tab__content">

    <svg xmlns="http://www.w3.org/2000/svg" class="mdc-tab__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"></path></svg>
                <span class="mdc-tab__text-label">Running</span>
              </span>
              <span class="mdc-tab-indicator">
                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
              </span>
              <span class="mdc-tab__ripple"></span>
            </a><button class="mdc-tab" href="#clusters" role="tab" aria-selected="true" tabindex="0">
              <span class="mdc-tab__content">
                <svg xmlns="http://www.w3.org/2000/svg" class="mdc-tab__icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"></path></svg>
                <span class="mdc-tab__text-label">Clusters</span>
              </span>
              <span class="mdc-tab-indicator">
                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
              </span>
              <span class="mdc-tab__ripple"></span>
            </button></div>
        </div>
      </div>
    </div>
`)

$("#site").append(`
    <div class="mdc-dialog jm-quit-dialog"
         role="alertdialog"
         aria-modal="true"
         aria-labelledby="my-dialog-title"
         aria-describedby="my-dialog-content" data-mdc-auto-init="MDCDialog">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <h2 class="mdc-dialog__title" id="my-dialog-title">Server closed.</h2>
          <div class="mdc-dialog__content" id="my-dialog-content">
            The Jupyter Notebook server was successfully closed.
          </div>
          <footer class="mdc-dialog__actions">
            <button type="button" onclick="window.close()" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
              <span class="mdc-button__label">Close tab</span>
            </button>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>
`)

$(".dynamic-buttons").each((_, obj) => {
    obj.removeAttr("class").addClass("mdc-button mdc-button--outlined").data("mdc-auto-init", "MDCRipple")
})

const urljoin = require('url-join');

$(".jm--quit").click(() => {
    $.ajax(urljoin(
        window.location,
        "api",
        "shutdown"
    ), {
        type: "POST",
        success: $(".jm-quit-dialog").get(0).MDCDialog.open(),
        error: (e) => console.error(e)
    });
})

$(".jm--logout").click(() => {
    window.location.href = urljoin(
        window.location.origin, "logout"
    );
})

// Auto init elements
mdc.autoInit()

// For each icon button with ripples
$(".mdc-icon-button[data-mdc-auto-init='MDCRipple']").each((_, {
    MDCRipple,
}) => {
    // Fix ripples
    MDCRipple.unbounded = true
})
