import SwiftUI

enum DSCTokens {
  static let values: [String: String] = [
    "color-white": "#ffffff",
    "color-black": "#000000",
    "color-primary1": "#917c6f",
    "color-primary2": "#504416",
    "color-primary3": "#999999",
    "color-primary4": "#222b00",
    "color-primary5": "#008080",
    "color-primary6": "#808000",
    "color-primary7": "#ff5555",
    "color-primary8": "#66ff00",
    "color-primary9": "#00ffff",
    "color-primary10": "#ffcc00",
    "bg-color": "var(--color-black)",
    "text-color": "var(--color-white)",
    "text-primary-color": "var(--cc-color)",
    "text-secondary-color": "var(--color-primary3)",
    "link-color": "var(--color-primary5)",
    "link-hover-color": "var(--color-primary6)",
    "border-color": "rgba(255,255,255,0.14)",
    "surface-0": "transparent",
    "surface-1": "rgba(255,255,255,0.04)",
    "surface-2": "rgba(255,255,255,0.06)",
    "surface-3": "rgba(255,255,255,0.08)",
    "surface-4": "rgba(255,255,255,0.12)",
    "surface-inverse-1": "rgba(0,0,0,0.04)",
    "surface-inverse-2": "rgba(0,0,0,0.06)",
    "surface-inverse-3": "rgba(0,0,0,0.08)",
    "surface-inverse-4": "rgba(0,0,0,0.12)",
    "overlay-backdrop-dark": "rgba(0,0,0,0.48)",
    "overlay-backdrop-light": "rgba(255,255,255,0.28)",
    "cc-blur-unified": "var(--glass-surface-blur)",
    "cc-border-unified": "var(--border-color)",
    "cc-color": "var(--text-color)",
    "cc-composition-footer-clearance": "var(--home-composition-footer-clearance)",
    "cc-composition-panel-to-response-gap": "var(--home-composition-panel-to-response-gap)",
    "cc-composition-shell-block-padding": "var(--home-composition-shell-block-padding)",
    "cc-composition-stage-component-gap": "var(--home-composition-stage-component-gap)",
    "cc-composition-stage-width": "var(--home-composition-stage-width)",
    "cc-composition-stage-width-mobile": "var(--home-composition-stage-width-mobile)",
    "cc-composition-topbar-clearance": "var(--home-composition-topbar-clearance)",
    "cc-hero-shader-canvas-softness": "var(--home-hero-shader-canvas-softness)",
    "cc-hero-shader-matte-blur": "var(--home-hero-shader-matte-blur)",
    "cc-hero-shader-matte-opacity": "var(--home-hero-shader-matte-opacity)",
    "cc-hero-shader-matte-surface-dark": "var(--home-hero-shader-matte-surface-dark)",
    "cc-hero-shader-matte-surface-light": "var(--home-hero-shader-matte-surface-light)",
    "cc-hero-shader-opacity": "var(--home-hero-shader-opacity)",
    "cc-hero-shader-transition": "var(--home-hero-shader-transition)",
    "cc-hero-shader-veil-blur": "var(--home-hero-shader-veil-blur)",
    "cc-hero-shader-veil-opacity": "var(--home-hero-shader-veil-opacity)",
    "cc-home-announcement-mobile-line-height": "var(--layout-home-announcement-mobile-line-height)",
    "cc-home-announcement-mobile-size": "var(--layout-home-announcement-mobile-size)",
    "cc-home-announcement-secondary-mobile-size": "var(--layout-home-announcement-secondary-mobile-size)",
    "cc-home-announcement-secondary-mobile-tracking": "var(--layout-home-announcement-secondary-mobile-tracking)",
    "cc-home-announcement-secondary-size": "var(--layout-home-announcement-secondary-size)",
    "cc-home-announcement-secondary-tracking": "var(--layout-home-announcement-secondary-tracking)",
    "cc-home-announcement-secondary-weight": "var(--layout-home-announcement-secondary-weight)",
    "cc-home-announcement-size": "var(--layout-home-announcement-size)",
    "cc-home-announcement-tracking": "var(--layout-home-announcement-tracking)",
    "cc-home-announcement-weight": "var(--layout-home-announcement-weight)",
    "cc-home-circle-blur": "var(--layout-home-circle-blur)",
    "cc-home-circle-breathe-duration": "var(--layout-home-circle-breathe-duration)",
    "cc-home-circle-halo-opacity": "var(--layout-home-circle-halo-opacity)",
    "cc-home-circle-halo-scale": "var(--layout-home-circle-halo-scale)",
    "cc-home-circle-mid-scale": "var(--layout-home-circle-mid-scale)",
    "cc-home-circle-start-scale": "var(--layout-home-circle-start-scale)",
    "cc-home-enter-border-width": "var(--layout-home-enter-border-width)",
    "cc-home-enter-breathe-duration": "var(--layout-home-enter-breathe-duration)",
    "cc-home-enter-breathe-y": "var(--layout-home-enter-breathe-y)",
    "cc-home-enter-height": "var(--layout-home-enter-height)",
    "cc-home-enter-hover-opacity": "var(--layout-home-enter-hover-opacity)",
    "cc-home-enter-hover-y": "var(--layout-home-enter-hover-y)",
    "cc-home-enter-icon-size": "var(--layout-home-enter-icon-size)",
    "cc-home-enter-mobile-height": "var(--layout-home-enter-mobile-height)",
    "cc-home-enter-mobile-padding-x": "var(--layout-home-enter-mobile-padding-x)",
    "cc-home-enter-mobile-padding-y": "var(--layout-home-enter-mobile-padding-y)",
    "cc-home-enter-mobile-size": "var(--layout-home-enter-mobile-size)",
    "cc-home-enter-mobile-width": "var(--layout-home-enter-mobile-width)",
    "cc-home-enter-padding-x": "var(--layout-home-enter-padding-x)",
    "cc-home-enter-padding-y": "var(--layout-home-enter-padding-y)",
    "cc-home-enter-size": "var(--layout-home-enter-size)",
    "cc-home-enter-tracking": "var(--layout-home-enter-tracking)",
    "cc-home-enter-weight": "var(--layout-home-enter-weight)",
    "cc-home-enter-width": "var(--layout-home-enter-width)",
    "cc-home-essence-delay": "var(--layout-home-essence-delay)",
    "cc-home-essence-desktop-layer-size": "var(--layout-home-essence-desktop-layer-size)",
    "cc-home-essence-fast-duration": "var(--layout-home-essence-fast-duration)",
    "cc-home-essence-gap-blur": "var(--layout-home-essence-gap-blur)",
    "cc-home-essence-gap-scale": "var(--layout-home-essence-gap-scale)",
    "cc-home-essence-gap-y": "var(--layout-home-essence-gap-y)",
    "cc-home-essence-hide-y": "var(--layout-home-essence-hide-y)",
    "cc-home-essence-inactive-blur": "var(--layout-home-essence-inactive-blur)",
    "cc-home-essence-inactive-scale": "var(--layout-home-essence-inactive-scale)",
    "cc-home-essence-inactive-y": "var(--layout-home-essence-inactive-y)",
    "cc-home-essence-inner-height": "var(--layout-home-essence-inner-height)",
    "cc-home-essence-inner-height-dynamic": "var(--layout-home-essence-inner-height-dynamic)",
    "cc-home-essence-inner-height-small": "var(--layout-home-essence-inner-height-small)",
    "cc-home-essence-inner-opacity": "var(--layout-home-essence-inner-opacity)",
    "cc-home-essence-inner-opacity-motion": "var(--layout-home-essence-inner-opacity-motion)",
    "cc-home-essence-inner-transform": "var(--layout-home-essence-inner-transform)",
    "cc-home-essence-inner-transform-motion": "var(--layout-home-essence-inner-transform-motion)",
    "cc-home-essence-layer-enter-blur": "var(--layout-home-essence-layer-enter-blur)",
    "cc-home-essence-layer-enter-scale": "var(--layout-home-essence-layer-enter-scale)",
    "cc-home-essence-layer-enter-y": "var(--layout-home-essence-layer-enter-y)",
    "cc-home-essence-layer-filter-motion": "var(--layout-home-essence-layer-filter-motion)",
    "cc-home-essence-layer-font-size": "var(--layout-home-essence-layer-font-size)",
    "cc-home-essence-layer-font-weight": "var(--layout-home-essence-layer-font-weight)",
    "cc-home-essence-layer-line-height": "var(--layout-home-essence-layer-line-height)",
    "cc-home-essence-layer-opacity-hidden": "var(--layout-home-essence-layer-opacity-hidden)",
    "cc-home-essence-layer-opacity-motion": "var(--layout-home-essence-layer-opacity-motion)",
    "cc-home-essence-layer-tracking": "var(--layout-home-essence-layer-tracking)",
    "cc-home-essence-layer-transform-motion": "var(--layout-home-essence-layer-transform-motion)",
    "cc-home-essence-mobile-layer-line-height": "var(--layout-home-essence-mobile-layer-line-height)",
    "cc-home-essence-mobile-layer-size": "var(--layout-home-essence-mobile-layer-size)",
    "cc-home-essence-phase-active-blur": "var(--layout-home-essence-phase-active-blur)",
    "cc-home-essence-phase-active-opacity": "var(--layout-home-essence-phase-active-opacity)",
    "cc-home-essence-phase-active-scale": "var(--layout-home-essence-phase-active-scale)",
    "cc-home-essence-phase-active-y": "var(--layout-home-essence-phase-active-y)",
    "cc-home-essence-phase-enter-blur": "var(--layout-home-essence-phase-enter-blur)",
    "cc-home-essence-phase-enter-scale": "var(--layout-home-essence-phase-enter-scale)",
    "cc-home-essence-phase-enter-y": "var(--layout-home-essence-phase-enter-y)",
    "cc-home-essence-phase-exit-blur": "var(--layout-home-essence-phase-exit-blur)",
    "cc-home-essence-phase-exit-scale": "var(--layout-home-essence-phase-exit-scale)",
    "cc-home-essence-phase-exit-y": "var(--layout-home-essence-phase-exit-y)",
    "cc-home-essence-phase-hidden-blur": "var(--layout-home-essence-phase-hidden-blur)",
    "cc-home-essence-phase-hidden-blur-final": "var(--layout-home-essence-phase-hidden-blur-final)",
    "cc-home-essence-phase-hidden-scale": "var(--layout-home-essence-phase-hidden-scale)",
    "cc-home-essence-phase-hidden-y": "var(--layout-home-essence-phase-hidden-y)",
    "cc-home-essence-phase-hidden-y-final": "var(--layout-home-essence-phase-hidden-y-final)",
    "cc-home-essence-preview-blur": "var(--layout-home-essence-preview-blur)",
    "cc-home-essence-preview-opacity": "var(--layout-home-essence-preview-opacity)",
    "cc-home-essence-preview-scale": "var(--layout-home-essence-preview-scale)",
    "cc-home-essence-preview-y": "var(--layout-home-essence-preview-y)",
    "cc-home-essence-reveal-width": "var(--layout-home-essence-reveal-width)",
    "cc-home-essence-reveal-y": "var(--layout-home-essence-reveal-y)",
    "cc-home-essence-stack-min-height": "var(--layout-home-essence-stack-min-height)",
    "cc-home-essence-stage-min-height": "var(--layout-home-essence-stage-min-height)",
    "cc-home-featured-functions-card-border-color-dark": "var(--layout-home-featured-functions-card-border-color-dark)",
    "cc-home-featured-functions-card-border-color-hover-dark": "var(--layout-home-featured-functions-card-border-color-hover-dark)",
    "cc-home-featured-functions-card-border-color-hover-light": "var(--layout-home-featured-functions-card-border-color-hover-light)",
    "cc-home-featured-functions-card-border-color-light": "var(--layout-home-featured-functions-card-border-color-light)",
    "cc-home-featured-functions-card-border-width": "var(--layout-home-featured-functions-card-border-width)",
    "cc-home-featured-functions-card-copy-max-width": "var(--layout-home-featured-functions-card-copy-max-width)",
    "cc-home-featured-functions-card-icon-filter-dark": "var(--layout-home-featured-functions-card-icon-filter-dark)",
    "cc-home-featured-functions-card-icon-filter-light": "var(--layout-home-featured-functions-card-icon-filter-light)",
    "cc-home-featured-functions-card-label-line-height": "var(--layout-home-featured-functions-card-label-line-height)",
    "cc-home-featured-functions-card-label-tracking": "var(--layout-home-featured-functions-card-label-tracking)",
    "cc-home-featured-functions-card-label-weight": "var(--layout-home-featured-functions-card-label-weight)",
    "cc-home-featured-functions-card-matte-blur": "var(--layout-home-featured-functions-card-matte-blur)",
    "cc-home-featured-functions-card-matte-saturation": "var(--layout-home-featured-functions-card-matte-saturation)",
    "cc-home-featured-functions-card-matte-surface-bottom-dark": "var(--layout-home-featured-functions-card-matte-surface-bottom-dark)",
    "cc-home-featured-functions-card-matte-surface-bottom-light": "var(--layout-home-featured-functions-card-matte-surface-bottom-light)",
    "cc-home-featured-functions-card-matte-surface-mid-dark": "var(--layout-home-featured-functions-card-matte-surface-mid-dark)",
    "cc-home-featured-functions-card-matte-surface-mid-light": "var(--layout-home-featured-functions-card-matte-surface-mid-light)",
    "cc-home-featured-functions-card-matte-surface-top-dark": "var(--layout-home-featured-functions-card-matte-surface-top-dark)",
    "cc-home-featured-functions-card-matte-surface-top-light": "var(--layout-home-featured-functions-card-matte-surface-top-light)",
    "cc-home-featured-functions-card-padding": "var(--layout-home-featured-functions-card-padding)",
    "cc-home-featured-functions-card-placeholder-fill-bottom-dark": "var(--layout-home-featured-functions-card-placeholder-fill-bottom-dark)",
    "cc-home-featured-functions-card-placeholder-fill-bottom-light": "var(--layout-home-featured-functions-card-placeholder-fill-bottom-light)",
    "cc-home-featured-functions-card-placeholder-fill-top-dark": "var(--layout-home-featured-functions-card-placeholder-fill-top-dark)",
    "cc-home-featured-functions-card-placeholder-fill-top-light": "var(--layout-home-featured-functions-card-placeholder-fill-top-light)",
    "cc-home-featured-functions-card-placeholder-glow-a-dark": "var(--layout-home-featured-functions-card-placeholder-glow-a-dark)",
    "cc-home-featured-functions-card-placeholder-glow-a-light": "var(--layout-home-featured-functions-card-placeholder-glow-a-light)",
    "cc-home-featured-functions-card-placeholder-glow-b-dark": "var(--layout-home-featured-functions-card-placeholder-glow-b-dark)",
    "cc-home-featured-functions-card-placeholder-glow-b-light": "var(--layout-home-featured-functions-card-placeholder-glow-b-light)",
    "cc-home-featured-functions-card-spectrum-blend": "var(--layout-home-featured-functions-card-spectrum-blend)",
    "cc-home-featured-functions-card-spectrum-blue": "var(--layout-home-featured-functions-card-spectrum-blue)",
    "cc-home-featured-functions-card-spectrum-cyan": "var(--layout-home-featured-functions-card-spectrum-cyan)",
    "cc-home-featured-functions-card-spectrum-opacity": "var(--layout-home-featured-functions-card-spectrum-opacity)",
    "cc-home-featured-functions-card-spectrum-opacity-light": "var(--layout-home-featured-functions-card-spectrum-opacity-light)",
    "cc-home-featured-functions-card-spectrum-orange": "var(--layout-home-featured-functions-card-spectrum-orange)",
    "cc-home-featured-functions-card-spectrum-red": "var(--layout-home-featured-functions-card-spectrum-red)",
    "cc-home-featured-functions-card-spectrum-violet": "var(--layout-home-featured-functions-card-spectrum-violet)",
    "cc-home-featured-functions-card-spectrum-yellow": "var(--layout-home-featured-functions-card-spectrum-yellow)",
    "cc-home-featured-functions-card-summary-color-dark": "var(--layout-home-featured-functions-card-summary-color-dark)",
    "cc-home-featured-functions-card-summary-color-light": "var(--layout-home-featured-functions-card-summary-color-light)",
    "cc-home-featured-functions-card-summary-gap": "var(--layout-home-featured-functions-card-summary-gap)",
    "cc-home-featured-functions-card-surface-bg-dark": "var(--layout-home-featured-functions-card-surface-bg-dark)",
    "cc-home-featured-functions-card-surface-bg-light": "var(--layout-home-featured-functions-card-surface-bg-light)",
    "cc-home-featured-functions-card-surface-highlight-hover-dark": "var(--layout-home-featured-functions-card-surface-highlight-hover-dark)",
    "cc-home-featured-functions-card-surface-highlight-hover-light": "var(--layout-home-featured-functions-card-surface-highlight-hover-light)",
    "cc-home-featured-functions-card-surface-highlight-rest-dark": "var(--layout-home-featured-functions-card-surface-highlight-rest-dark)",
    "cc-home-featured-functions-card-surface-highlight-rest-light": "var(--layout-home-featured-functions-card-surface-highlight-rest-light)",
    "cc-home-featured-functions-card-title-gap": "var(--layout-home-featured-functions-card-title-gap)",
    "cc-home-featured-functions-control-disabled-opacity": "var(--layout-home-featured-functions-control-disabled-opacity)",
    "cc-home-featured-functions-control-icon-size": "var(--layout-home-featured-functions-control-icon-size)",
    "cc-home-featured-functions-control-size": "var(--layout-home-featured-functions-control-size)",
    "cc-home-featured-functions-description-opacity": "var(--layout-home-featured-functions-description-opacity)",
    "cc-home-featured-functions-dot-opacity": "var(--layout-home-featured-functions-dot-opacity)",
    "cc-home-featured-functions-dot-opacity-active": "var(--layout-home-featured-functions-dot-opacity-active)",
    "cc-home-featured-functions-dot-opacity-dark": "var(--layout-home-featured-functions-dot-opacity-dark)",
    "cc-home-featured-functions-dot-opacity-light": "var(--layout-home-featured-functions-dot-opacity-light)",
    "cc-home-featured-functions-dot-size": "var(--layout-home-featured-functions-dot-size)",
    "cc-home-featured-functions-eyebrow-opacity": "var(--layout-home-featured-functions-eyebrow-opacity)",
    "cc-home-featured-functions-footer-max-width": "var(--layout-home-featured-functions-footer-max-width)",
    "cc-home-featured-functions-max-width": "var(--layout-home-featured-functions-max-width)",
    "cc-home-featured-functions-rail-offset": "var(--layout-home-featured-functions-rail-offset)",
    "cc-home-featured-functions-ready-opacity-motion": "var(--layout-home-featured-functions-ready-opacity-motion)",
    "cc-home-featured-functions-timeline-height": "var(--layout-home-featured-functions-timeline-height)",
    "cc-home-featured-functions-timeline-progress-scale": "var(--layout-home-featured-functions-timeline-progress-scale)",
    "cc-home-featured-functions-track-motion": "var(--layout-home-featured-functions-track-motion)",
    "cc-home-featured-functions-viewport-max-width": "var(--layout-home-featured-functions-viewport-max-width)",
    "cc-home-featured-functions-visual-aspect-ratio": "var(--layout-home-featured-functions-visual-aspect-ratio)",
    "cc-home-halo-breathe-duration": "var(--layout-home-halo-breathe-duration)",
    "cc-home-halo-start-opacity": "var(--layout-home-halo-start-opacity)",
    "cc-home-interaction-panel-composer-gap": "var(--layout-home-interaction-panel-composer-gap)",
    "cc-home-interaction-panel-composer-side-gap": "var(--layout-home-interaction-panel-composer-side-gap)",
    "cc-home-interaction-panel-control-pulse-shadow": "var(--layout-home-interaction-panel-control-pulse-shadow)",
    "cc-home-interaction-panel-control-pulse-shadow-active": "var(--layout-home-interaction-panel-control-pulse-shadow-active)",
    "cc-home-interaction-panel-control-size": "var(--layout-home-interaction-panel-control-size)",
    "cc-home-interaction-panel-developer-action-line-height": "var(--layout-home-interaction-panel-developer-action-line-height)",
    "cc-home-interaction-panel-developer-action-min-height": "var(--layout-home-interaction-panel-developer-action-min-height)",
    "cc-home-interaction-panel-developer-action-padding-x": "var(--layout-home-interaction-panel-developer-action-padding-x)",
    "cc-home-interaction-panel-developer-action-size": "var(--layout-home-interaction-panel-developer-action-size)",
    "cc-home-interaction-panel-developer-action-tracking": "var(--layout-home-interaction-panel-developer-action-tracking)",
    "cc-home-interaction-panel-developer-action-weight": "var(--layout-home-interaction-panel-developer-action-weight)",
    "cc-home-interaction-panel-developer-actions-gap": "var(--layout-home-interaction-panel-developer-actions-gap)",
    "cc-home-interaction-panel-developer-control-min-width": "var(--layout-home-interaction-panel-developer-control-min-width)",
    "cc-home-interaction-panel-developer-status-line-height": "var(--layout-home-interaction-panel-developer-status-line-height)",
    "cc-home-interaction-panel-developer-status-size": "var(--layout-home-interaction-panel-developer-status-size)",
    "cc-home-interaction-panel-disabled-opacity": "var(--layout-home-interaction-panel-disabled-opacity)",
    "cc-home-interaction-panel-dot-width": "var(--layout-home-interaction-panel-dot-width)",
    "cc-home-interaction-panel-file-chip-min-height": "var(--layout-home-interaction-panel-file-chip-min-height)",
    "cc-home-interaction-panel-file-chip-padding-x": "var(--layout-home-interaction-panel-file-chip-padding-x)",
    "cc-home-interaction-panel-file-chip-size": "var(--layout-home-interaction-panel-file-chip-size)",
    "cc-home-interaction-panel-file-chip-tracking": "var(--layout-home-interaction-panel-file-chip-tracking)",
    "cc-home-interaction-panel-file-chip-weight": "var(--layout-home-interaction-panel-file-chip-weight)",
    "cc-home-interaction-panel-file-gap": "var(--layout-home-interaction-panel-file-gap)",
    "cc-home-interaction-panel-form-gap": "var(--layout-home-interaction-panel-form-gap)",
    "cc-home-interaction-panel-gap": "var(--layout-home-interaction-panel-gap)",
    "cc-home-interaction-panel-icon-opacity": "var(--layout-home-interaction-panel-icon-opacity)",
    "cc-home-interaction-panel-icon-opacity-hover": "var(--layout-home-interaction-panel-icon-opacity-hover)",
    "cc-home-interaction-panel-icon-size": "var(--layout-home-interaction-panel-icon-size)",
    "cc-home-interaction-panel-input-line-height": "var(--layout-home-interaction-panel-input-line-height)",
    "cc-home-interaction-panel-input-max-height": "var(--layout-home-interaction-panel-input-max-height)",
    "cc-home-interaction-panel-input-min-height": "var(--layout-home-interaction-panel-input-min-height)",
    "cc-home-interaction-panel-input-padding-x": "var(--layout-home-interaction-panel-input-padding-x)",
    "cc-home-interaction-panel-input-padding-y": "var(--layout-home-interaction-panel-input-padding-y)",
    "cc-home-interaction-panel-model-gap": "var(--layout-home-interaction-panel-model-gap)",
    "cc-home-interaction-panel-model-height": "var(--layout-home-interaction-panel-model-height)",
    "cc-home-interaction-panel-model-name-line-height": "var(--layout-home-interaction-panel-model-name-line-height)",
    "cc-home-interaction-panel-model-name-size": "var(--layout-home-interaction-panel-model-name-size)",
    "cc-home-interaction-panel-model-name-tracking": "var(--layout-home-interaction-panel-model-name-tracking)",
    "cc-home-interaction-panel-model-name-weight": "var(--layout-home-interaction-panel-model-name-weight)",
    "cc-home-interaction-panel-model-padding-x": "var(--layout-home-interaction-panel-model-padding-x)",
    "cc-home-interaction-panel-model-padding-x-mobile": "var(--layout-home-interaction-panel-model-padding-x-mobile)",
    "cc-home-interaction-panel-padding": "var(--layout-home-interaction-panel-padding)",
    "cc-home-interaction-panel-padding-mobile": "var(--layout-home-interaction-panel-padding-mobile)",
    "cc-home-interaction-panel-submit-gap": "var(--layout-home-interaction-panel-submit-gap)",
    "cc-home-interaction-panel-submit-height": "var(--layout-home-interaction-panel-submit-height)",
    "cc-home-interaction-panel-submit-line-height": "var(--layout-home-interaction-panel-submit-line-height)",
    "cc-home-interaction-panel-submit-padding-x": "var(--layout-home-interaction-panel-submit-padding-x)",
    "cc-home-interaction-panel-submit-size": "var(--layout-home-interaction-panel-submit-size)",
    "cc-home-interaction-panel-submit-weight": "var(--layout-home-interaction-panel-submit-weight)",
    "cc-home-interaction-panel-thinking-animation-duration": "var(--layout-home-interaction-panel-thinking-animation-duration)",
    "cc-home-interaction-panel-thinking-animation-steps": "var(--layout-home-interaction-panel-thinking-animation-steps)",
    "cc-home-interaction-panel-voice-animation-duration": "var(--layout-home-interaction-panel-voice-animation-duration)",
    "cc-home-interaction-panel-voice-opacity-active": "var(--layout-home-interaction-panel-voice-opacity-active)",
    "cc-home-interaction-panel-voice-opacity-inactive": "var(--layout-home-interaction-panel-voice-opacity-inactive)",
    "cc-home-interaction-panel-width": "var(--layout-home-interaction-panel-width)",
    "cc-home-interaction-panel-width-mobile": "var(--layout-home-interaction-panel-width-mobile)",
    "cc-home-intro-content-opacity-duration": "var(--layout-home-intro-content-opacity-duration)",
    "cc-home-intro-content-transform-duration": "var(--layout-home-intro-content-transform-duration)",
    "cc-home-intro-logo-scale-fade": "var(--layout-home-intro-logo-scale-fade)",
    "cc-home-intro-logo-scale-settle": "var(--layout-home-intro-logo-scale-settle)",
    "cc-home-intro-logo-scale-start": "var(--layout-home-intro-logo-scale-start)",
    "cc-home-intro-reveal-y": "var(--layout-home-intro-reveal-y)",
    "cc-home-logo-docked-margin-bottom": "var(--layout-home-logo-docked-margin-bottom)",
    "cc-home-logo-margin-bottom": "var(--layout-home-logo-margin-bottom)",
    "cc-home-logo-transition-opacity": "var(--layout-home-logo-transition-opacity)",
    "cc-home-logo-transition-transform": "var(--layout-home-logo-transition-transform)",
    "cc-home-logo-width": "var(--layout-home-logo-width)",
    "cc-home-logo-width-mobile": "var(--layout-home-logo-width-mobile)",
    "cc-home-platform-blur": "var(--layout-home-platform-blur)",
    "cc-home-platform-chrome-min-height": "var(--layout-home-platform-chrome-min-height)",
    "cc-home-platform-content-copy-line-height": "var(--layout-home-platform-content-copy-line-height)",
    "cc-home-platform-content-copy-max-width": "var(--layout-home-platform-content-copy-max-width)",
    "cc-home-platform-content-copy-size": "var(--layout-home-platform-content-copy-size)",
    "cc-home-platform-content-copy-tracking": "var(--layout-home-platform-content-copy-tracking)",
    "cc-home-platform-content-copy-weight": "var(--layout-home-platform-content-copy-weight)",
    "cc-home-platform-content-header-gap": "var(--layout-home-platform-content-header-gap)",
    "cc-home-platform-content-header-padding-bottom": "var(--layout-home-platform-content-header-padding-bottom)",
    "cc-home-platform-content-header-padding-left": "var(--layout-home-platform-content-header-padding-left)",
    "cc-home-platform-content-header-padding-right": "var(--layout-home-platform-content-header-padding-right)",
    "cc-home-platform-content-header-padding-top": "var(--layout-home-platform-content-header-padding-top)",
    "cc-home-platform-content-inner-footer-gap": "var(--layout-home-platform-content-inner-footer-gap)",
    "cc-home-platform-content-inner-padding-left": "var(--layout-home-platform-content-inner-padding-left)",
    "cc-home-platform-content-inner-padding-top": "var(--layout-home-platform-content-inner-padding-top)",
    "cc-home-platform-content-stack-gap": "var(--layout-home-platform-content-stack-gap)",
    "cc-home-platform-content-title-color": "var(--layout-home-platform-content-title-color)",
    "cc-home-platform-content-title-line-height": "var(--layout-home-platform-content-title-line-height)",
    "cc-home-platform-content-title-size": "var(--layout-home-platform-content-title-size)",
    "cc-home-platform-content-title-tracking": "var(--layout-home-platform-content-title-tracking)",
    "cc-home-platform-content-title-transform": "var(--layout-home-platform-content-title-transform)",
    "cc-home-platform-content-title-weight": "var(--layout-home-platform-content-title-weight)",
    "cc-home-platform-destination-action-gap": "var(--layout-home-platform-destination-action-gap)",
    "cc-home-platform-destination-action-min-height": "var(--layout-home-platform-destination-action-min-height)",
    "cc-home-platform-destination-action-padding-x": "var(--layout-home-platform-destination-action-padding-x)",
    "cc-home-platform-destination-action-size": "var(--layout-home-platform-destination-action-size)",
    "cc-home-platform-destination-action-tracking": "var(--layout-home-platform-destination-action-tracking)",
    "cc-home-platform-destination-action-weight": "var(--layout-home-platform-destination-action-weight)",
    "cc-home-platform-destination-card-gap": "var(--layout-home-platform-destination-card-gap)",
    "cc-home-platform-destination-card-inner-gap": "var(--layout-home-platform-destination-card-inner-gap)",
    "cc-home-platform-destination-card-padding-x": "var(--layout-home-platform-destination-card-padding-x)",
    "cc-home-platform-destination-card-padding-y": "var(--layout-home-platform-destination-card-padding-y)",
    "cc-home-platform-destination-copy-line-height": "var(--layout-home-platform-destination-copy-line-height)",
    "cc-home-platform-destination-copy-size": "var(--layout-home-platform-destination-copy-size)",
    "cc-home-platform-destination-field-gap": "var(--layout-home-platform-destination-field-gap)",
    "cc-home-platform-destination-field-min-height": "var(--layout-home-platform-destination-field-min-height)",
    "cc-home-platform-destination-field-padding-x": "var(--layout-home-platform-destination-field-padding-x)",
    "cc-home-platform-destination-field-padding-y": "var(--layout-home-platform-destination-field-padding-y)",
    "cc-home-platform-destination-gap": "var(--layout-home-platform-destination-gap)",
    "cc-home-platform-destination-grid-count": "var(--layout-home-platform-destination-grid-count)",
    "cc-home-platform-destination-grid-count-compact": "var(--layout-home-platform-destination-grid-count-compact)",
    "cc-home-platform-destination-grid-gap": "var(--layout-home-platform-destination-grid-gap)",
    "cc-home-platform-destination-label-size": "var(--layout-home-platform-destination-label-size)",
    "cc-home-platform-destination-label-tracking": "var(--layout-home-platform-destination-label-tracking)",
    "cc-home-platform-destination-label-weight": "var(--layout-home-platform-destination-label-weight)",
    "cc-home-platform-destination-link-line-height": "var(--layout-home-platform-destination-link-line-height)",
    "cc-home-platform-destination-link-size": "var(--layout-home-platform-destination-link-size)",
    "cc-home-platform-destination-list-gap": "var(--layout-home-platform-destination-list-gap)",
    "cc-home-platform-destination-state-line-height": "var(--layout-home-platform-destination-state-line-height)",
    "cc-home-platform-destination-state-size": "var(--layout-home-platform-destination-state-size)",
    "cc-home-platform-destination-title-line-height": "var(--layout-home-platform-destination-title-line-height)",
    "cc-home-platform-destination-title-size": "var(--layout-home-platform-destination-title-size)",
    "cc-home-platform-destination-title-weight": "var(--layout-home-platform-destination-title-weight)",
    "cc-home-platform-destination-workspace-copy-line-height": "var(--layout-home-platform-destination-workspace-copy-line-height)",
    "cc-home-platform-destination-workspace-copy-size": "var(--layout-home-platform-destination-workspace-copy-size)",
    "cc-home-platform-embedded-section-gap": "var(--layout-home-platform-embedded-section-gap)",
    "cc-home-platform-embedded-stack-gap": "var(--layout-home-platform-embedded-stack-gap)",
    "cc-home-platform-gap": "var(--layout-home-platform-gap)",
    "cc-home-platform-group-margin-top": "var(--layout-home-platform-group-margin-top)",
    "cc-home-platform-label-margin-bottom": "var(--layout-home-platform-label-margin-bottom)",
    "cc-home-platform-label-size": "var(--layout-home-platform-label-size)",
    "cc-home-platform-label-tracking": "var(--layout-home-platform-label-tracking)",
    "cc-home-platform-label-weight": "var(--layout-home-platform-label-weight)",
    "cc-home-platform-mobile-content-header-padding-bottom": "var(--layout-home-platform-mobile-content-header-padding-bottom)",
    "cc-home-platform-mobile-content-header-padding-top": "var(--layout-home-platform-mobile-content-header-padding-top)",
    "cc-home-platform-mobile-content-inner-footer-gap": "var(--layout-home-platform-mobile-content-inner-footer-gap)",
    "cc-home-platform-mobile-content-inner-padding-top": "var(--layout-home-platform-mobile-content-inner-padding-top)",
    "cc-home-platform-mobile-inline-padding-fallback": "var(--layout-home-platform-mobile-inline-padding-fallback)",
    "cc-home-platform-mobile-nav-gap": "var(--layout-home-platform-mobile-nav-gap)",
    "cc-home-platform-mobile-nav-icon-size": "var(--layout-home-platform-mobile-nav-icon-size)",
    "cc-home-platform-mobile-nav-item-min-height": "var(--layout-home-platform-mobile-nav-item-min-height)",
    "cc-home-platform-mobile-nav-item-padding-x": "var(--layout-home-platform-mobile-nav-item-padding-x)",
    "cc-home-platform-mobile-rail-inner-padding-y": "var(--layout-home-platform-mobile-rail-inner-padding-y)",
    "cc-home-platform-nav-gap": "var(--layout-home-platform-nav-gap)",
    "cc-home-platform-nav-icon-size": "var(--layout-home-platform-nav-icon-size)",
    "cc-home-platform-nav-indicator-line-height": "var(--layout-home-platform-nav-indicator-line-height)",
    "cc-home-platform-nav-indicator-min-size": "var(--layout-home-platform-nav-indicator-min-size)",
    "cc-home-platform-nav-indicator-padding-x": "var(--layout-home-platform-nav-indicator-padding-x)",
    "cc-home-platform-nav-indicator-size": "var(--layout-home-platform-nav-indicator-size)",
    "cc-home-platform-nav-indicator-tracking": "var(--layout-home-platform-nav-indicator-tracking)",
    "cc-home-platform-nav-indicator-weight": "var(--layout-home-platform-nav-indicator-weight)",
    "cc-home-platform-nav-item-gap": "var(--layout-home-platform-nav-item-gap)",
    "cc-home-platform-nav-item-min-height": "var(--layout-home-platform-nav-item-min-height)",
    "cc-home-platform-nav-item-padding-x": "var(--layout-home-platform-nav-item-padding-x)",
    "cc-home-platform-nav-item-padding-y": "var(--layout-home-platform-nav-item-padding-y)",
    "cc-home-platform-nav-item-radius": "var(--layout-home-platform-nav-item-radius)",
    "cc-home-platform-nav-text-line-height": "var(--layout-home-platform-nav-text-line-height)",
    "cc-home-platform-nav-text-size": "var(--layout-home-platform-nav-text-size)",
    "cc-home-platform-nav-text-tracking": "var(--layout-home-platform-nav-text-tracking)",
    "cc-home-platform-nav-text-weight": "var(--layout-home-platform-nav-text-weight)",
    "cc-home-platform-padding": "var(--layout-home-platform-padding)",
    "cc-home-platform-radius": "var(--layout-home-platform-radius)",
    "cc-home-platform-rail-compact-width": "var(--layout-home-platform-rail-compact-width)",
    "cc-home-platform-rail-padding-bottom": "var(--layout-home-platform-rail-padding-bottom)",
    "cc-home-platform-rail-padding-left": "var(--layout-home-platform-rail-padding-left)",
    "cc-home-platform-rail-padding-right": "var(--layout-home-platform-rail-padding-right)",
    "cc-home-platform-rail-padding-top": "var(--layout-home-platform-rail-padding-top)",
    "cc-home-platform-rail-toggle-icon-size": "var(--layout-home-platform-rail-toggle-icon-size)",
    "cc-home-platform-rail-toggle-margin-left": "var(--layout-home-platform-rail-toggle-margin-left)",
    "cc-home-platform-rail-toggle-size": "var(--layout-home-platform-rail-toggle-size)",
    "cc-home-platform-rail-width": "var(--layout-home-platform-rail-width)",
    "cc-home-platform-saturate": "var(--layout-home-platform-saturate)",
    "cc-home-platform-shadow": "var(--layout-home-platform-shadow)",
    "cc-home-platform-state-action-min-height": "var(--layout-home-platform-state-action-min-height)",
    "cc-home-platform-state-action-padding-x": "var(--layout-home-platform-state-action-padding-x)",
    "cc-home-platform-state-action-size": "var(--layout-home-platform-state-action-size)",
    "cc-home-platform-state-action-tracking": "var(--layout-home-platform-state-action-tracking)",
    "cc-home-platform-state-action-weight": "var(--layout-home-platform-state-action-weight)",
    "cc-home-platform-state-copy-line-height": "var(--layout-home-platform-state-copy-line-height)",
    "cc-home-platform-state-copy-max-width": "var(--layout-home-platform-state-copy-max-width)",
    "cc-home-platform-state-copy-size": "var(--layout-home-platform-state-copy-size)",
    "cc-home-platform-state-title-line-height": "var(--layout-home-platform-state-title-line-height)",
    "cc-home-platform-state-title-size": "var(--layout-home-platform-state-title-size)",
    "cc-home-platform-state-title-tracking": "var(--layout-home-platform-state-title-tracking)",
    "cc-home-platform-state-title-weight": "var(--layout-home-platform-state-title-weight)",
    "cc-home-platform-subnav-line-height": "var(--layout-home-platform-subnav-line-height)",
    "cc-home-platform-subnav-min-height": "var(--layout-home-platform-subnav-min-height)",
    "cc-home-platform-subnav-padding-x": "var(--layout-home-platform-subnav-padding-x)",
    "cc-home-platform-subnav-size": "var(--layout-home-platform-subnav-size)",
    "cc-home-platform-subrail-header-gap": "var(--layout-home-platform-subrail-header-gap)",
    "cc-home-platform-subrail-header-margin-bottom": "var(--layout-home-platform-subrail-header-margin-bottom)",
    "cc-home-platform-subrail-padding-left": "var(--layout-home-platform-subrail-padding-left)",
    "cc-home-platform-subrail-title-line-height": "var(--layout-home-platform-subrail-title-line-height)",
    "cc-home-platform-subrail-title-size": "var(--layout-home-platform-subrail-title-size)",
    "cc-home-platform-subrail-title-weight": "var(--layout-home-platform-subrail-title-weight)",
    "cc-home-platform-subrail-width": "var(--layout-home-platform-subrail-width)",
    "cc-home-platform-tablet-content-padding-left": "var(--layout-home-platform-tablet-content-padding-left)",
    "cc-home-platform-tablet-rail-max": "var(--layout-home-platform-tablet-rail-max)",
    "cc-home-platform-tablet-rail-min": "var(--layout-home-platform-tablet-rail-min)",
    "cc-home-platform-tablet-rail-padding-right": "var(--layout-home-platform-tablet-rail-padding-right)",
    "cc-home-platform-tablet-subrail-max": "var(--layout-home-platform-tablet-subrail-max)",
    "cc-home-platform-tablet-subrail-min": "var(--layout-home-platform-tablet-subrail-min)",
    "cc-home-platform-theme-caption-line-height": "var(--layout-home-platform-theme-caption-line-height)",
    "cc-home-platform-theme-caption-opacity": "var(--layout-home-platform-theme-caption-opacity)",
    "cc-home-platform-theme-caption-size": "var(--layout-home-platform-theme-caption-size)",
    "cc-home-platform-theme-eyebrow-opacity": "var(--layout-home-platform-theme-eyebrow-opacity)",
    "cc-home-platform-theme-eyebrow-size": "var(--layout-home-platform-theme-eyebrow-size)",
    "cc-home-platform-theme-eyebrow-tracking": "var(--layout-home-platform-theme-eyebrow-tracking)",
    "cc-home-platform-theme-eyebrow-weight": "var(--layout-home-platform-theme-eyebrow-weight)",
    "cc-home-platform-theme-header-gap": "var(--layout-home-platform-theme-header-gap)",
    "cc-home-platform-theme-mode-grid-count": "var(--layout-home-platform-theme-mode-grid-count)",
    "cc-home-platform-theme-mode-grid-gap": "var(--layout-home-platform-theme-mode-grid-gap)",
    "cc-home-platform-theme-mode-label-line-height": "var(--layout-home-platform-theme-mode-label-line-height)",
    "cc-home-platform-theme-mode-label-size": "var(--layout-home-platform-theme-mode-label-size)",
    "cc-home-platform-theme-mode-label-weight": "var(--layout-home-platform-theme-mode-label-weight)",
    "cc-home-platform-theme-mode-option-gap": "var(--layout-home-platform-theme-mode-option-gap)",
    "cc-home-platform-theme-mode-option-min-height": "var(--layout-home-platform-theme-mode-option-min-height)",
    "cc-home-platform-theme-mode-option-padding-x": "var(--layout-home-platform-theme-mode-option-padding-x)",
    "cc-home-platform-theme-mode-option-padding-y": "var(--layout-home-platform-theme-mode-option-padding-y)",
    "cc-home-platform-theme-section-gap": "var(--layout-home-platform-theme-section-gap)",
    "cc-home-platform-theme-section-header-gap": "var(--layout-home-platform-theme-section-header-gap)",
    "cc-home-platform-theme-section-padding-top": "var(--layout-home-platform-theme-section-padding-top)",
    "cc-home-platform-theme-shell-gap": "var(--layout-home-platform-theme-shell-gap)",
    "cc-home-platform-theme-summary-line-height": "var(--layout-home-platform-theme-summary-line-height)",
    "cc-home-platform-theme-summary-max-width": "var(--layout-home-platform-theme-summary-max-width)",
    "cc-home-platform-theme-summary-opacity": "var(--layout-home-platform-theme-summary-opacity)",
    "cc-home-platform-theme-summary-size": "var(--layout-home-platform-theme-summary-size)",
    "cc-home-platform-theme-title-line-height": "var(--layout-home-platform-theme-title-line-height)",
    "cc-home-platform-theme-title-size": "var(--layout-home-platform-theme-title-size)",
    "cc-home-platform-theme-title-tracking": "var(--layout-home-platform-theme-title-tracking)",
    "cc-home-platform-theme-title-weight": "var(--layout-home-platform-theme-title-weight)",
    "cc-home-platform-theme-toggle-list-gap": "var(--layout-home-platform-theme-toggle-list-gap)",
    "cc-home-platform-theme-toggle-row-gap": "var(--layout-home-platform-theme-toggle-row-gap)",
    "cc-home-platform-theme-toggle-row-padding-y": "var(--layout-home-platform-theme-toggle-row-padding-y)",
    "cc-home-platform-theme-token-field-gap": "var(--layout-home-platform-theme-token-field-gap)",
    "cc-home-platform-theme-token-field-min-height": "var(--layout-home-platform-theme-token-field-min-height)",
    "cc-home-platform-theme-token-field-padding-x": "var(--layout-home-platform-theme-token-field-padding-x)",
    "cc-home-platform-theme-token-field-padding-y": "var(--layout-home-platform-theme-token-field-padding-y)",
    "cc-home-platform-theme-token-grid-count": "var(--layout-home-platform-theme-token-grid-count)",
    "cc-home-platform-theme-token-grid-disabled-opacity": "var(--layout-home-platform-theme-token-grid-disabled-opacity)",
    "cc-home-platform-theme-token-grid-enabled-opacity": "var(--layout-home-platform-theme-token-grid-enabled-opacity)",
    "cc-home-platform-theme-token-grid-gap": "var(--layout-home-platform-theme-token-grid-gap)",
    "cc-home-platform-theme-token-label-line-height": "var(--layout-home-platform-theme-token-label-line-height)",
    "cc-home-platform-theme-token-label-size": "var(--layout-home-platform-theme-token-label-size)",
    "cc-home-platform-theme-token-label-weight": "var(--layout-home-platform-theme-token-label-weight)",
    "cc-home-profile-control-panel-avatar-fallback-size": "var(--layout-home-profile-control-panel-avatar-fallback-size)",
    "cc-home-profile-control-panel-avatar-fallback-tracking": "var(--layout-home-profile-control-panel-avatar-fallback-tracking)",
    "cc-home-profile-control-panel-avatar-fallback-weight": "var(--layout-home-profile-control-panel-avatar-fallback-weight)",
    "cc-home-profile-control-panel-avatar-size": "var(--layout-home-profile-control-panel-avatar-size)",
    "cc-home-profile-control-panel-eyebrow-margin-bottom": "var(--layout-home-profile-control-panel-eyebrow-margin-bottom)",
    "cc-home-profile-control-panel-header-gap": "var(--layout-home-profile-control-panel-header-gap)",
    "cc-home-profile-control-panel-header-padding-bottom": "var(--layout-home-profile-control-panel-header-padding-bottom)",
    "cc-home-profile-control-panel-identity-gap": "var(--layout-home-profile-control-panel-identity-gap)",
    "cc-home-profile-control-panel-identity-padding-x": "var(--layout-home-profile-control-panel-identity-padding-x)",
    "cc-home-profile-control-panel-identity-padding-y": "var(--layout-home-profile-control-panel-identity-padding-y)",
    "cc-home-profile-control-panel-inner-gap": "var(--layout-home-profile-control-panel-inner-gap)",
    "cc-home-profile-control-panel-inner-padding-bottom": "var(--layout-home-profile-control-panel-inner-padding-bottom)",
    "cc-home-profile-control-panel-inner-padding-left": "var(--layout-home-profile-control-panel-inner-padding-left)",
    "cc-home-profile-control-panel-inner-padding-right": "var(--layout-home-profile-control-panel-inner-padding-right)",
    "cc-home-profile-control-panel-inner-padding-top": "var(--layout-home-profile-control-panel-inner-padding-top)",
    "cc-home-profile-control-panel-inner-padding-top-mobile": "var(--layout-home-profile-control-panel-inner-padding-top-mobile)",
    "cc-home-profile-control-panel-item-min-height": "var(--layout-home-profile-control-panel-item-min-height)",
    "cc-home-profile-control-panel-item-padding-x": "var(--layout-home-profile-control-panel-item-padding-x)",
    "cc-home-profile-control-panel-item-padding-y": "var(--layout-home-profile-control-panel-item-padding-y)",
    "cc-home-profile-control-panel-item-size": "var(--layout-home-profile-control-panel-item-size)",
    "cc-home-profile-control-panel-item-tracking": "var(--layout-home-profile-control-panel-item-tracking)",
    "cc-home-profile-control-panel-item-weight": "var(--layout-home-profile-control-panel-item-weight)",
    "cc-home-profile-control-panel-meta-line-height": "var(--layout-home-profile-control-panel-meta-line-height)",
    "cc-home-profile-control-panel-meta-size": "var(--layout-home-profile-control-panel-meta-size)",
    "cc-home-profile-control-panel-name-margin-bottom": "var(--layout-home-profile-control-panel-name-margin-bottom)",
    "cc-home-profile-control-panel-name-size": "var(--layout-home-profile-control-panel-name-size)",
    "cc-home-profile-control-panel-name-weight": "var(--layout-home-profile-control-panel-name-weight)",
    "cc-home-profile-control-panel-plan-margin-bottom": "var(--layout-home-profile-control-panel-plan-margin-bottom)",
    "cc-home-profile-control-panel-plan-size": "var(--layout-home-profile-control-panel-plan-size)",
    "cc-home-profile-control-panel-plan-tracking": "var(--layout-home-profile-control-panel-plan-tracking)",
    "cc-home-profile-control-panel-plan-weight": "var(--layout-home-profile-control-panel-plan-weight)",
    "cc-home-profile-control-panel-route-link-line-height": "var(--layout-home-profile-control-panel-route-link-line-height)",
    "cc-home-profile-control-panel-route-link-margin-top": "var(--layout-home-profile-control-panel-route-link-margin-top)",
    "cc-home-profile-control-panel-route-link-size": "var(--layout-home-profile-control-panel-route-link-size)",
    "cc-home-profile-control-panel-route-status-line-height": "var(--layout-home-profile-control-panel-route-status-line-height)",
    "cc-home-profile-control-panel-route-status-size": "var(--layout-home-profile-control-panel-route-status-size)",
    "cc-home-profile-control-panel-section-gap": "var(--layout-home-profile-control-panel-section-gap)",
    "cc-home-profile-control-panel-stack-gap": "var(--layout-home-profile-control-panel-stack-gap)",
    "cc-home-profile-control-panel-status-card-gap": "var(--layout-home-profile-control-panel-status-card-gap)",
    "cc-home-profile-control-panel-status-card-padding-x": "var(--layout-home-profile-control-panel-status-card-padding-x)",
    "cc-home-profile-control-panel-status-card-padding-y": "var(--layout-home-profile-control-panel-status-card-padding-y)",
    "cc-home-profile-control-panel-status-grid-gap": "var(--layout-home-profile-control-panel-status-grid-gap)",
    "cc-home-profile-control-panel-status-label-size": "var(--layout-home-profile-control-panel-status-label-size)",
    "cc-home-profile-control-panel-status-label-tracking": "var(--layout-home-profile-control-panel-status-label-tracking)",
    "cc-home-profile-control-panel-status-label-weight": "var(--layout-home-profile-control-panel-status-label-weight)",
    "cc-home-profile-control-panel-status-value-line-height": "var(--layout-home-profile-control-panel-status-value-line-height)",
    "cc-home-profile-control-panel-status-value-size": "var(--layout-home-profile-control-panel-status-value-size)",
    "cc-home-profile-control-panel-status-value-weight": "var(--layout-home-profile-control-panel-status-value-weight)",
    "cc-home-profile-control-panel-username-margin-bottom": "var(--layout-home-profile-control-panel-username-margin-bottom)",
    "cc-home-profile-control-panel-username-size": "var(--layout-home-profile-control-panel-username-size)",
    "cc-home-profile-control-panel-username-tracking": "var(--layout-home-profile-control-panel-username-tracking)",
    "cc-home-profile-control-panel-username-weight": "var(--layout-home-profile-control-panel-username-weight)",
    "cc-home-profile-control-panel-width": "var(--layout-home-profile-control-panel-width)",
    "cc-home-search-body-gap": "var(--layout-home-search-body-gap)",
    "cc-home-search-body-padding-x-fallback": "var(--layout-home-search-body-padding-x-fallback)",
    "cc-home-search-body-padding-y": "var(--layout-home-search-body-padding-y)",
    "cc-home-search-chip-min-height": "var(--layout-home-search-chip-min-height)",
    "cc-home-search-chip-padding-x": "var(--layout-home-search-chip-padding-x)",
    "cc-home-search-chip-size": "var(--layout-home-search-chip-size)",
    "cc-home-search-chip-tracking": "var(--layout-home-search-chip-tracking)",
    "cc-home-search-chip-weight": "var(--layout-home-search-chip-weight)",
    "cc-home-search-dark-border": "var(--layout-home-search-dark-border)",
    "cc-home-search-dialog-blur": "var(--layout-home-search-dialog-blur)",
    "cc-home-search-dialog-saturate": "var(--layout-home-search-dialog-saturate)",
    "cc-home-search-empty-gap": "var(--layout-home-search-empty-gap)",
    "cc-home-search-empty-padding-top": "var(--layout-home-search-empty-padding-top)",
    "cc-home-search-empty-text-line-height": "var(--layout-home-search-empty-text-line-height)",
    "cc-home-search-empty-text-size": "var(--layout-home-search-empty-text-size)",
    "cc-home-search-empty-title-size": "var(--layout-home-search-empty-title-size)",
    "cc-home-search-empty-title-weight": "var(--layout-home-search-empty-title-weight)",
    "cc-home-search-eyebrow-margin-bottom": "var(--layout-home-search-eyebrow-margin-bottom)",
    "cc-home-search-eyebrow-size": "var(--layout-home-search-eyebrow-size)",
    "cc-home-search-eyebrow-tracking": "var(--layout-home-search-eyebrow-tracking)",
    "cc-home-search-eyebrow-weight": "var(--layout-home-search-eyebrow-weight)",
    "cc-home-search-form-gap": "var(--layout-home-search-form-gap)",
    "cc-home-search-header-gap": "var(--layout-home-search-header-gap)",
    "cc-home-search-header-padding-bottom": "var(--layout-home-search-header-padding-bottom)",
    "cc-home-search-header-padding-x-fallback": "var(--layout-home-search-header-padding-x-fallback)",
    "cc-home-search-header-padding-y": "var(--layout-home-search-header-padding-y)",
    "cc-home-search-hint-line-height": "var(--layout-home-search-hint-line-height)",
    "cc-home-search-hint-size": "var(--layout-home-search-hint-size)",
    "cc-home-search-icon-opacity": "var(--layout-home-search-icon-opacity)",
    "cc-home-search-icon-size": "var(--layout-home-search-icon-size)",
    "cc-home-search-input-line-height": "var(--layout-home-search-input-line-height)",
    "cc-home-search-input-row-border": "var(--layout-home-search-input-row-border)",
    "cc-home-search-input-row-border-focus": "var(--layout-home-search-input-row-border-focus)",
    "cc-home-search-input-row-gap": "var(--layout-home-search-input-row-gap)",
    "cc-home-search-input-row-line-height": "var(--layout-home-search-input-row-line-height)",
    "cc-home-search-input-row-min-height": "var(--layout-home-search-input-row-min-height)",
    "cc-home-search-input-row-opacity": "var(--layout-home-search-input-row-opacity)",
    "cc-home-search-input-row-padding-x": "var(--layout-home-search-input-row-padding-x)",
    "cc-home-search-input-row-padding-y": "var(--layout-home-search-input-row-padding-y)",
    "cc-home-search-input-size": "var(--layout-home-search-input-size)",
    "cc-home-search-input-tracking": "var(--layout-home-search-input-tracking)",
    "cc-home-search-input-weight": "var(--layout-home-search-input-weight)",
    "cc-home-search-light-border": "var(--layout-home-search-light-border)",
    "cc-home-search-mobile-input-row-min-height": "var(--layout-home-search-mobile-input-row-min-height)",
    "cc-home-search-mobile-input-row-padding-x": "var(--layout-home-search-mobile-input-row-padding-x)",
    "cc-home-search-mobile-input-row-padding-y": "var(--layout-home-search-mobile-input-row-padding-y)",
    "cc-home-search-mobile-input-size": "var(--layout-home-search-mobile-input-size)",
    "cc-home-search-mobile-padding-x-fallback": "var(--layout-home-search-mobile-padding-x-fallback)",
    "cc-home-search-mobile-title-size": "var(--layout-home-search-mobile-title-size)",
    "cc-home-search-quick-actions-gap": "var(--layout-home-search-quick-actions-gap)",
    "cc-home-search-result-action-line-height": "var(--layout-home-search-result-action-line-height)",
    "cc-home-search-result-action-min-height": "var(--layout-home-search-result-action-min-height)",
    "cc-home-search-result-action-min-width": "var(--layout-home-search-result-action-min-width)",
    "cc-home-search-result-action-padding-x": "var(--layout-home-search-result-action-padding-x)",
    "cc-home-search-result-action-size": "var(--layout-home-search-result-action-size)",
    "cc-home-search-result-action-tracking": "var(--layout-home-search-result-action-tracking)",
    "cc-home-search-result-action-weight": "var(--layout-home-search-result-action-weight)",
    "cc-home-search-result-actions-gap": "var(--layout-home-search-result-actions-gap)",
    "cc-home-search-result-badge-color": "var(--layout-home-search-result-badge-color)",
    "cc-home-search-result-badge-gap": "var(--layout-home-search-result-badge-gap)",
    "cc-home-search-result-badge-icon-size": "var(--layout-home-search-result-badge-icon-size)",
    "cc-home-search-result-badge-min-height": "var(--layout-home-search-result-badge-min-height)",
    "cc-home-search-result-badge-padding-x": "var(--layout-home-search-result-badge-padding-x)",
    "cc-home-search-result-badge-size": "var(--layout-home-search-result-badge-size)",
    "cc-home-search-result-badge-tracking": "var(--layout-home-search-result-badge-tracking)",
    "cc-home-search-result-badge-weight": "var(--layout-home-search-result-badge-weight)",
    "cc-home-search-result-body-line-height": "var(--layout-home-search-result-body-line-height)",
    "cc-home-search-result-body-size": "var(--layout-home-search-result-body-size)",
    "cc-home-search-result-card-gap": "var(--layout-home-search-result-card-gap)",
    "cc-home-search-result-card-padding-y": "var(--layout-home-search-result-card-padding-y)",
    "cc-home-search-result-list-gap": "var(--layout-home-search-result-list-gap)",
    "cc-home-search-result-meta-column-gap": "var(--layout-home-search-result-meta-column-gap)",
    "cc-home-search-result-meta-row-gap": "var(--layout-home-search-result-meta-row-gap)",
    "cc-home-search-result-query-line-height": "var(--layout-home-search-result-query-line-height)",
    "cc-home-search-result-query-size": "var(--layout-home-search-result-query-size)",
    "cc-home-search-result-route-size": "var(--layout-home-search-result-route-size)",
    "cc-home-search-result-route-tracking": "var(--layout-home-search-result-route-tracking)",
    "cc-home-search-result-route-weight": "var(--layout-home-search-result-route-weight)",
    "cc-home-search-result-tag-min-height": "var(--layout-home-search-result-tag-min-height)",
    "cc-home-search-result-tag-padding-x": "var(--layout-home-search-result-tag-padding-x)",
    "cc-home-search-result-tag-size": "var(--layout-home-search-result-tag-size)",
    "cc-home-search-result-tag-tracking": "var(--layout-home-search-result-tag-tracking)",
    "cc-home-search-result-tags-gap": "var(--layout-home-search-result-tags-gap)",
    "cc-home-search-result-title-line-height": "var(--layout-home-search-result-title-line-height)",
    "cc-home-search-result-title-row-gap": "var(--layout-home-search-result-title-row-gap)",
    "cc-home-search-result-title-size": "var(--layout-home-search-result-title-size)",
    "cc-home-search-result-title-tracking": "var(--layout-home-search-result-title-tracking)",
    "cc-home-search-result-title-weight": "var(--layout-home-search-result-title-weight)",
    "cc-home-search-shell-width": "var(--layout-home-search-shell-width)",
    "cc-home-search-title-line-height": "var(--layout-home-search-title-line-height)",
    "cc-home-search-title-size": "var(--layout-home-search-title-size)",
    "cc-home-search-title-weight": "var(--layout-home-search-title-weight)",
    "cc-home-search-voice-motion": "var(--layout-home-search-voice-motion)",
    "cc-home-stage-bottom-margin-top": "var(--layout-home-stage-bottom-margin-top)",
    "cc-home-stage-bottom-margin-top-mobile": "var(--layout-home-stage-bottom-margin-top-mobile)",
    "cc-home-stage-copy-margin-top": "var(--layout-home-stage-copy-margin-top)",
    "cc-home-stage-intro-max-height": "var(--layout-home-stage-intro-max-height)",
    "cc-home-stage-intro-opacity-duration": "var(--layout-home-stage-intro-opacity-duration)",
    "cc-home-stage-intro-reveal-duration": "var(--layout-home-stage-intro-reveal-duration)",
    "cc-home-stage-intro-transform-duration": "var(--layout-home-stage-intro-transform-duration)",
    "cc-home-stage-motion-active-color": "var(--layout-home-stage-motion-active-color)",
    "cc-home-stage-motion-active-mic-scale": "var(--layout-home-stage-motion-active-mic-scale)",
    "cc-home-stage-motion-core-active-height": "var(--layout-home-stage-motion-core-active-height)",
    "cc-home-stage-motion-core-active-width": "var(--layout-home-stage-motion-core-active-width)",
    "cc-home-stage-motion-core-color": "var(--layout-home-stage-motion-core-color)",
    "cc-home-stage-motion-core-height": "var(--layout-home-stage-motion-core-height)",
    "cc-home-stage-motion-core-idle-pulse-opacity": "var(--layout-home-stage-motion-core-idle-pulse-opacity)",
    "cc-home-stage-motion-core-idle-ring-opacity": "var(--layout-home-stage-motion-core-idle-ring-opacity)",
    "cc-home-stage-motion-core-idle-signal-opacity": "var(--layout-home-stage-motion-core-idle-signal-opacity)",
    "cc-home-stage-motion-core-pulse-blur": "var(--layout-home-stage-motion-core-pulse-blur)",
    "cc-home-stage-motion-core-pulse-size": "var(--layout-home-stage-motion-core-pulse-size)",
    "cc-home-stage-motion-core-ring-border": "var(--layout-home-stage-motion-core-ring-border)",
    "cc-home-stage-motion-core-signal-blur": "var(--layout-home-stage-motion-core-signal-blur)",
    "cc-home-stage-motion-core-signal-size": "var(--layout-home-stage-motion-core-signal-size)",
    "cc-home-stage-motion-core-width": "var(--layout-home-stage-motion-core-width)",
    "cc-home-stage-motion-fast": "var(--layout-home-stage-motion-fast)",
    "cc-home-stage-motion-field-blur": "var(--layout-home-stage-motion-field-blur)",
    "cc-home-stage-motion-field-color": "var(--layout-home-stage-motion-field-color)",
    "cc-home-stage-motion-field-color-clear": "var(--layout-home-stage-motion-field-color-clear)",
    "cc-home-stage-motion-field-color-faint": "var(--layout-home-stage-motion-field-color-faint)",
    "cc-home-stage-motion-field-color-soft": "var(--layout-home-stage-motion-field-color-soft)",
    "cc-home-stage-motion-field-opacity-transition": "var(--layout-home-stage-motion-field-opacity-transition)",
    "cc-home-stage-motion-field-size": "var(--layout-home-stage-motion-field-size)",
    "cc-home-stage-motion-key-core-listen-mid-opacity": "var(--layout-home-stage-motion-key-core-listen-mid-opacity)",
    "cc-home-stage-motion-key-core-listen-mid-scale": "var(--layout-home-stage-motion-key-core-listen-mid-scale)",
    "cc-home-stage-motion-key-core-listen-start-opacity": "var(--layout-home-stage-motion-key-core-listen-start-opacity)",
    "cc-home-stage-motion-key-core-listen-start-scale": "var(--layout-home-stage-motion-key-core-listen-start-scale)",
    "cc-home-stage-motion-key-core-respond-mid-opacity": "var(--layout-home-stage-motion-key-core-respond-mid-opacity)",
    "cc-home-stage-motion-key-core-respond-mid-scale": "var(--layout-home-stage-motion-key-core-respond-mid-scale)",
    "cc-home-stage-motion-key-core-respond-start-opacity": "var(--layout-home-stage-motion-key-core-respond-start-opacity)",
    "cc-home-stage-motion-key-core-respond-start-scale": "var(--layout-home-stage-motion-key-core-respond-start-scale)",
    "cc-home-stage-motion-key-core-think-mid-opacity": "var(--layout-home-stage-motion-key-core-think-mid-opacity)",
    "cc-home-stage-motion-key-core-think-mid-scale": "var(--layout-home-stage-motion-key-core-think-mid-scale)",
    "cc-home-stage-motion-key-core-think-start-opacity": "var(--layout-home-stage-motion-key-core-think-start-opacity)",
    "cc-home-stage-motion-key-core-think-start-scale": "var(--layout-home-stage-motion-key-core-think-start-scale)",
    "cc-home-stage-motion-key-mic-listen-mid-opacity": "var(--layout-home-stage-motion-key-mic-listen-mid-opacity)",
    "cc-home-stage-motion-key-mic-listen-mid-scale": "var(--layout-home-stage-motion-key-mic-listen-mid-scale)",
    "cc-home-stage-motion-key-mic-listen-start-opacity": "var(--layout-home-stage-motion-key-mic-listen-start-opacity)",
    "cc-home-stage-motion-key-mic-listen-start-scale": "var(--layout-home-stage-motion-key-mic-listen-start-scale)",
    "cc-home-stage-motion-key-mic-respond-mid-opacity": "var(--layout-home-stage-motion-key-mic-respond-mid-opacity)",
    "cc-home-stage-motion-key-mic-respond-mid-scale": "var(--layout-home-stage-motion-key-mic-respond-mid-scale)",
    "cc-home-stage-motion-key-mic-respond-start-opacity": "var(--layout-home-stage-motion-key-mic-respond-start-opacity)",
    "cc-home-stage-motion-key-mic-respond-start-scale": "var(--layout-home-stage-motion-key-mic-respond-start-scale)",
    "cc-home-stage-motion-key-mic-think-mid-opacity": "var(--layout-home-stage-motion-key-mic-think-mid-opacity)",
    "cc-home-stage-motion-key-mic-think-mid-scale": "var(--layout-home-stage-motion-key-mic-think-mid-scale)",
    "cc-home-stage-motion-key-mic-think-start-opacity": "var(--layout-home-stage-motion-key-mic-think-start-opacity)",
    "cc-home-stage-motion-key-mic-think-start-scale": "var(--layout-home-stage-motion-key-mic-think-start-scale)",
    "cc-home-stage-motion-key-ring-listen-mid-opacity": "var(--layout-home-stage-motion-key-ring-listen-mid-opacity)",
    "cc-home-stage-motion-key-ring-listen-mid-scale": "var(--layout-home-stage-motion-key-ring-listen-mid-scale)",
    "cc-home-stage-motion-key-ring-listen-start-opacity": "var(--layout-home-stage-motion-key-ring-listen-start-opacity)",
    "cc-home-stage-motion-key-ring-listen-start-scale": "var(--layout-home-stage-motion-key-ring-listen-start-scale)",
    "cc-home-stage-motion-key-ring-respond-mid-opacity": "var(--layout-home-stage-motion-key-ring-respond-mid-opacity)",
    "cc-home-stage-motion-key-ring-respond-mid-scale": "var(--layout-home-stage-motion-key-ring-respond-mid-scale)",
    "cc-home-stage-motion-key-ring-respond-start-opacity": "var(--layout-home-stage-motion-key-ring-respond-start-opacity)",
    "cc-home-stage-motion-key-ring-respond-start-scale": "var(--layout-home-stage-motion-key-ring-respond-start-scale)",
    "cc-home-stage-motion-key-ring-think-mid-opacity": "var(--layout-home-stage-motion-key-ring-think-mid-opacity)",
    "cc-home-stage-motion-key-ring-think-mid-scale": "var(--layout-home-stage-motion-key-ring-think-mid-scale)",
    "cc-home-stage-motion-key-ring-think-start-opacity": "var(--layout-home-stage-motion-key-ring-think-start-opacity)",
    "cc-home-stage-motion-key-ring-think-start-scale": "var(--layout-home-stage-motion-key-ring-think-start-scale)",
    "cc-home-stage-motion-listening-core-duration": "var(--layout-home-stage-motion-listening-core-duration)",
    "cc-home-stage-motion-listening-mic-duration": "var(--layout-home-stage-motion-listening-mic-duration)",
    "cc-home-stage-motion-listening-ring-duration": "var(--layout-home-stage-motion-listening-ring-duration)",
    "cc-home-stage-motion-mic-color": "var(--layout-home-stage-motion-mic-color)",
    "cc-home-stage-motion-mic-field-blur": "var(--layout-home-stage-motion-mic-field-blur)",
    "cc-home-stage-motion-mic-field-color": "var(--layout-home-stage-motion-mic-field-color)",
    "cc-home-stage-motion-mic-field-color-clear": "var(--layout-home-stage-motion-mic-field-color-clear)",
    "cc-home-stage-motion-mic-field-color-soft": "var(--layout-home-stage-motion-mic-field-color-soft)",
    "cc-home-stage-motion-mic-hover-color": "var(--layout-home-stage-motion-mic-hover-color)",
    "cc-home-stage-motion-mic-hover-scale": "var(--layout-home-stage-motion-mic-hover-scale)",
    "cc-home-stage-motion-mic-icon-hover-scale": "var(--layout-home-stage-motion-mic-icon-hover-scale)",
    "cc-home-stage-motion-mic-icon-opacity": "var(--layout-home-stage-motion-mic-icon-opacity)",
    "cc-home-stage-motion-mic-icon-size": "var(--layout-home-stage-motion-mic-icon-size)",
    "cc-home-stage-motion-mic-margin-bottom": "var(--layout-home-stage-motion-mic-margin-bottom)",
    "cc-home-stage-motion-mic-opacity": "var(--layout-home-stage-motion-mic-opacity)",
    "cc-home-stage-motion-mic-ring-border": "var(--layout-home-stage-motion-mic-ring-border)",
    "cc-home-stage-motion-mic-ring-offset": "var(--layout-home-stage-motion-mic-ring-offset)",
    "cc-home-stage-motion-mic-size": "var(--layout-home-stage-motion-mic-size)",
    "cc-home-stage-motion-mobile-core-active-height": "var(--layout-home-stage-motion-mobile-core-active-height)",
    "cc-home-stage-motion-mobile-core-active-width": "var(--layout-home-stage-motion-mobile-core-active-width)",
    "cc-home-stage-motion-mobile-core-height": "var(--layout-home-stage-motion-mobile-core-height)",
    "cc-home-stage-motion-mobile-core-width": "var(--layout-home-stage-motion-mobile-core-width)",
    "cc-home-stage-motion-mobile-mic-icon-size": "var(--layout-home-stage-motion-mobile-mic-icon-size)",
    "cc-home-stage-motion-mobile-mic-margin-bottom": "var(--layout-home-stage-motion-mobile-mic-margin-bottom)",
    "cc-home-stage-motion-mobile-mic-size": "var(--layout-home-stage-motion-mobile-mic-size)",
    "cc-home-stage-motion-mobile-vessel-active-size": "var(--layout-home-stage-motion-mobile-vessel-active-size)",
    "cc-home-stage-motion-mobile-vessel-size": "var(--layout-home-stage-motion-mobile-vessel-size)",
    "cc-home-stage-motion-mode-core-opacity": "var(--layout-home-stage-motion-mode-core-opacity)",
    "cc-home-stage-motion-mode-ring-opacity": "var(--layout-home-stage-motion-mode-ring-opacity)",
    "cc-home-stage-motion-responding-core-duration": "var(--layout-home-stage-motion-responding-core-duration)",
    "cc-home-stage-motion-responding-mic-duration": "var(--layout-home-stage-motion-responding-mic-duration)",
    "cc-home-stage-motion-responding-ring-duration": "var(--layout-home-stage-motion-responding-ring-duration)",
    "cc-home-stage-motion-ring-border": "var(--layout-home-stage-motion-ring-border)",
    "cc-home-stage-motion-ring-size": "var(--layout-home-stage-motion-ring-size)",
    "cc-home-stage-motion-thinking-core-duration": "var(--layout-home-stage-motion-thinking-core-duration)",
    "cc-home-stage-motion-thinking-mic-duration": "var(--layout-home-stage-motion-thinking-mic-duration)",
    "cc-home-stage-motion-thinking-ring-duration": "var(--layout-home-stage-motion-thinking-ring-duration)",
    "cc-home-stage-motion-transition": "var(--layout-home-stage-motion-transition)",
    "cc-home-stage-motion-vessel-active-size": "var(--layout-home-stage-motion-vessel-active-size)",
    "cc-home-stage-motion-vessel-blur": "var(--layout-home-stage-motion-vessel-blur)",
    "cc-home-stage-motion-vessel-inner-bg": "var(--layout-home-stage-motion-vessel-inner-bg)",
    "cc-home-stage-motion-vessel-ring-border": "var(--layout-home-stage-motion-vessel-ring-border)",
    "cc-home-stage-motion-vessel-size": "var(--layout-home-stage-motion-vessel-size)",
    "cc-home-video-overlay-blur": "var(--layout-home-video-overlay-blur)",
    "cc-home-video-overlay-motion": "var(--layout-home-video-overlay-motion)",
    "cc-home-video-overlay-reveal-opacity": "var(--layout-home-video-overlay-reveal-opacity)",
    "cc-home-video-overlay-saturate": "var(--layout-home-video-overlay-saturate)",
    "cc-interaction-panel-blur": "var(--home-interaction-panel-blur)",
    "cc-interaction-panel-border": "var(--home-interaction-panel-border)",
    "cc-interaction-panel-border-active": "var(--home-interaction-panel-border-active)",
    "cc-interaction-panel-composer-gap": "var(--home-interaction-panel-composer-gap)",
    "cc-interaction-panel-control-bg": "var(--home-interaction-panel-control-bg)",
    "cc-interaction-panel-control-bg-hover": "var(--home-interaction-panel-control-bg-hover)",
    "cc-interaction-panel-control-border": "var(--home-interaction-panel-control-border)",
    "cc-interaction-panel-control-border-hover": "var(--home-interaction-panel-control-border-hover)",
    "cc-interaction-panel-control-listening-bg": "var(--home-interaction-panel-control-listening-bg)",
    "cc-interaction-panel-control-pulse-shadow": "var(--home-interaction-panel-control-pulse-shadow)",
    "cc-interaction-panel-control-pulse-shadow-active": "var(--home-interaction-panel-control-pulse-shadow-active)",
    "cc-interaction-panel-control-responding-bg": "var(--home-interaction-panel-control-responding-bg)",
    "cc-interaction-panel-control-size": "var(--home-interaction-panel-control-size)",
    "cc-interaction-panel-control-text": "var(--home-interaction-panel-control-text)",
    "cc-interaction-panel-control-text-hover": "var(--home-interaction-panel-control-text-hover)",
    "cc-interaction-panel-control-thinking-bg": "var(--home-interaction-panel-control-thinking-bg)",
    "cc-interaction-panel-developer-action-bg": "var(--home-interaction-panel-developer-action-bg)",
    "cc-interaction-panel-developer-action-bg-hover": "var(--home-interaction-panel-developer-action-bg-hover)",
    "cc-interaction-panel-developer-action-border": "var(--home-interaction-panel-developer-action-border)",
    "cc-interaction-panel-developer-action-border-hover": "var(--home-interaction-panel-developer-action-border-hover)",
    "cc-interaction-panel-developer-action-line-height": "var(--home-interaction-panel-developer-action-line-height)",
    "cc-interaction-panel-developer-action-min-height": "var(--home-interaction-panel-developer-action-min-height)",
    "cc-interaction-panel-developer-action-padding-x": "var(--home-interaction-panel-developer-action-padding-x)",
    "cc-interaction-panel-developer-action-radius": "var(--home-interaction-panel-developer-action-radius)",
    "cc-interaction-panel-developer-action-size": "var(--home-interaction-panel-developer-action-size)",
    "cc-interaction-panel-developer-action-text": "var(--home-interaction-panel-developer-action-text)",
    "cc-interaction-panel-developer-action-text-hover": "var(--home-interaction-panel-developer-action-text-hover)",
    "cc-interaction-panel-developer-action-tracking": "var(--home-interaction-panel-developer-action-tracking)",
    "cc-interaction-panel-developer-action-weight": "var(--home-interaction-panel-developer-action-weight)",
    "cc-interaction-panel-developer-actions-gap": "var(--home-interaction-panel-developer-actions-gap)",
    "cc-interaction-panel-developer-control-bg": "var(--home-interaction-panel-developer-control-bg)",
    "cc-interaction-panel-developer-control-border": "var(--home-interaction-panel-developer-control-border)",
    "cc-interaction-panel-developer-control-border-hover": "var(--home-interaction-panel-developer-control-border-hover)",
    "cc-interaction-panel-developer-control-height": "var(--home-interaction-panel-developer-control-height)",
    "cc-interaction-panel-developer-control-line-height": "var(--home-interaction-panel-developer-control-line-height)",
    "cc-interaction-panel-developer-control-min-width": "var(--home-interaction-panel-developer-control-min-width)",
    "cc-interaction-panel-developer-control-muted": "var(--home-interaction-panel-developer-control-muted)",
    "cc-interaction-panel-developer-control-padding-x": "var(--home-interaction-panel-developer-control-padding-x)",
    "cc-interaction-panel-developer-control-radius": "var(--home-interaction-panel-developer-control-radius)",
    "cc-interaction-panel-developer-control-size": "var(--home-interaction-panel-developer-control-size)",
    "cc-interaction-panel-developer-control-text": "var(--home-interaction-panel-developer-control-text)",
    "cc-interaction-panel-developer-control-weight": "var(--home-interaction-panel-developer-control-weight)",
    "cc-interaction-panel-developer-status-line-height": "var(--home-interaction-panel-developer-status-line-height)",
    "cc-interaction-panel-developer-status-size": "var(--home-interaction-panel-developer-status-size)",
    "cc-interaction-panel-disabled-opacity": "var(--home-interaction-panel-disabled-opacity)",
    "cc-interaction-panel-dot-width": "var(--home-interaction-panel-dot-width)",
    "cc-interaction-panel-file-chip-bg": "var(--home-interaction-panel-file-chip-bg)",
    "cc-interaction-panel-file-chip-border": "var(--home-interaction-panel-file-chip-border)",
    "cc-interaction-panel-file-chip-min-height": "var(--home-interaction-panel-file-chip-min-height)",
    "cc-interaction-panel-file-chip-padding-x": "var(--home-interaction-panel-file-chip-padding-x)",
    "cc-interaction-panel-file-chip-size": "var(--home-interaction-panel-file-chip-size)",
    "cc-interaction-panel-file-chip-text": "var(--home-interaction-panel-file-chip-text)",
    "cc-interaction-panel-file-chip-tracking": "var(--home-interaction-panel-file-chip-tracking)",
    "cc-interaction-panel-file-chip-weight": "var(--home-interaction-panel-file-chip-weight)",
    "cc-interaction-panel-form-gap": "var(--home-interaction-panel-form-gap)",
    "cc-interaction-panel-gap": "var(--home-interaction-panel-gap)",
    "cc-interaction-panel-icon-opacity": "var(--home-interaction-panel-icon-opacity)",
    "cc-interaction-panel-icon-opacity-hover": "var(--home-interaction-panel-icon-opacity-hover)",
    "cc-interaction-panel-icon-size": "var(--home-interaction-panel-icon-size)",
    "cc-interaction-panel-input-border": "var(--home-interaction-panel-input-border)",
    "cc-interaction-panel-input-border-focus": "var(--home-interaction-panel-input-border-focus)",
    "cc-interaction-panel-input-line-height": "var(--home-interaction-panel-input-line-height)",
    "cc-interaction-panel-input-max-height": "var(--home-interaction-panel-input-max-height)",
    "cc-interaction-panel-input-min-height": "var(--home-interaction-panel-input-min-height)",
    "cc-interaction-panel-input-padding-x": "var(--home-interaction-panel-input-padding-x)",
    "cc-interaction-panel-input-padding-y": "var(--home-interaction-panel-input-padding-y)",
    "cc-interaction-panel-input-placeholder": "var(--home-interaction-panel-input-placeholder)",
    "cc-interaction-panel-input-radius": "var(--home-interaction-panel-input-radius)",
    "cc-interaction-panel-input-surface": "var(--home-interaction-panel-input-surface)",
    "cc-interaction-panel-input-text": "var(--home-interaction-panel-input-text)",
    "cc-interaction-panel-model-bg": "var(--home-interaction-panel-model-bg)",
    "cc-interaction-panel-model-border": "var(--home-interaction-panel-model-border)",
    "cc-interaction-panel-model-chevron": "var(--home-interaction-panel-model-chevron)",
    "cc-interaction-panel-model-gap": "var(--home-interaction-panel-model-gap)",
    "cc-interaction-panel-model-height": "var(--home-interaction-panel-model-height)",
    "cc-interaction-panel-model-name-line-height": "var(--home-interaction-panel-model-name-line-height)",
    "cc-interaction-panel-model-name-size": "var(--home-interaction-panel-model-name-size)",
    "cc-interaction-panel-model-name-tracking": "var(--home-interaction-panel-model-name-tracking)",
    "cc-interaction-panel-model-name-weight": "var(--home-interaction-panel-model-name-weight)",
    "cc-interaction-panel-model-padding-x": "var(--home-interaction-panel-model-padding-x)",
    "cc-interaction-panel-model-padding-x-mobile": "var(--home-interaction-panel-model-padding-x-mobile)",
    "cc-interaction-panel-model-radius": "var(--home-interaction-panel-model-radius)",
    "cc-interaction-panel-model-text": "var(--home-interaction-panel-model-text)",
    "cc-interaction-panel-motion-fast": "var(--home-interaction-panel-motion-fast)",
    "cc-interaction-panel-padding": "var(--home-interaction-panel-padding)",
    "cc-interaction-panel-padding-mobile": "var(--home-interaction-panel-padding-mobile)",
    "cc-interaction-panel-radius": "var(--home-interaction-panel-radius)",
    "cc-interaction-panel-saturate": "var(--home-interaction-panel-saturate)",
    "cc-interaction-panel-shadow": "var(--home-interaction-panel-shadow)",
    "cc-interaction-panel-submit-bg": "var(--home-interaction-panel-submit-bg)",
    "cc-interaction-panel-submit-border": "var(--home-interaction-panel-submit-border)",
    "cc-interaction-panel-submit-gap": "var(--home-interaction-panel-submit-gap)",
    "cc-interaction-panel-submit-line-height": "var(--home-interaction-panel-submit-line-height)",
    "cc-interaction-panel-submit-size": "var(--home-interaction-panel-submit-size)",
    "cc-interaction-panel-submit-text": "var(--home-interaction-panel-submit-text)",
    "cc-interaction-panel-submit-weight": "var(--home-interaction-panel-submit-weight)",
    "cc-interaction-panel-surface": "var(--home-interaction-panel-surface)",
    "cc-interaction-panel-thinking-animation-duration": "var(--home-interaction-panel-thinking-animation-duration)",
    "cc-interaction-panel-thinking-animation-steps": "var(--home-interaction-panel-thinking-animation-steps)",
    "cc-interaction-panel-voice-animation-duration": "var(--home-interaction-panel-voice-animation-duration)",
    "cc-interaction-panel-voice-opacity-active": "var(--home-interaction-panel-voice-opacity-active)",
    "cc-interaction-panel-voice-opacity-inactive": "var(--home-interaction-panel-voice-opacity-inactive)",
    "cc-interaction-panel-width": "var(--home-interaction-panel-width)",
    "cc-interaction-panel-width-mobile": "var(--home-interaction-panel-width-mobile)",
    "cc-layout-announcement-mobile-line-height": "var(--layout-home-announcement-mobile-line-height)",
    "cc-layout-announcement-mobile-size": "var(--layout-home-announcement-mobile-size)",
    "cc-layout-announcement-secondary-mobile-size": "var(--layout-home-announcement-secondary-mobile-size)",
    "cc-layout-announcement-secondary-mobile-tracking": "var(--layout-home-announcement-secondary-mobile-tracking)",
    "cc-layout-announcement-secondary-size": "var(--layout-home-announcement-secondary-size)",
    "cc-layout-announcement-secondary-tracking": "var(--layout-home-announcement-secondary-tracking)",
    "cc-layout-announcement-secondary-weight": "var(--layout-home-announcement-secondary-weight)",
    "cc-layout-announcement-size": "var(--layout-home-announcement-size)",
    "cc-layout-announcement-tracking": "var(--layout-home-announcement-tracking)",
    "cc-layout-announcement-weight": "var(--layout-home-announcement-weight)",
    "cc-layout-enter-border-width": "var(--layout-home-enter-border-width)",
    "cc-layout-enter-breathe-duration": "var(--layout-home-enter-breathe-duration)",
    "cc-layout-enter-breathe-y": "var(--layout-home-enter-breathe-y)",
    "cc-layout-enter-height": "var(--layout-home-enter-height)",
    "cc-layout-enter-hover-opacity": "var(--layout-home-enter-hover-opacity)",
    "cc-layout-enter-hover-y": "var(--layout-home-enter-hover-y)",
    "cc-layout-enter-icon-size": "var(--layout-home-enter-icon-size)",
    "cc-layout-enter-mobile-height": "var(--layout-home-enter-mobile-height)",
    "cc-layout-enter-mobile-padding-x": "var(--layout-home-enter-mobile-padding-x)",
    "cc-layout-enter-mobile-padding-y": "var(--layout-home-enter-mobile-padding-y)",
    "cc-layout-enter-mobile-size": "var(--layout-home-enter-mobile-size)",
    "cc-layout-enter-mobile-width": "var(--layout-home-enter-mobile-width)",
    "cc-layout-enter-padding-x": "var(--layout-home-enter-padding-x)",
    "cc-layout-enter-padding-y": "var(--layout-home-enter-padding-y)",
    "cc-layout-enter-size": "var(--layout-home-enter-size)",
    "cc-layout-enter-tracking": "var(--layout-home-enter-tracking)",
    "cc-layout-enter-weight": "var(--layout-home-enter-weight)",
    "cc-layout-enter-width": "var(--layout-home-enter-width)",
    "cc-layout-intro-content-opacity-duration": "var(--layout-home-intro-content-opacity-duration)",
    "cc-layout-intro-content-transform-duration": "var(--layout-home-intro-content-transform-duration)",
    "cc-layout-intro-logo-scale-fade": "var(--layout-home-intro-logo-scale-fade)",
    "cc-layout-intro-logo-scale-settle": "var(--layout-home-intro-logo-scale-settle)",
    "cc-layout-intro-logo-scale-start": "var(--layout-home-intro-logo-scale-start)",
    "cc-layout-intro-reveal-y": "var(--layout-home-intro-reveal-y)",
    "cc-layout-logo-docked-margin-bottom": "var(--layout-home-logo-docked-margin-bottom)",
    "cc-layout-logo-margin-bottom": "var(--layout-home-logo-margin-bottom)",
    "cc-layout-logo-transition-opacity": "var(--layout-home-logo-transition-opacity)",
    "cc-layout-logo-transition-transform": "var(--layout-home-logo-transition-transform)",
    "cc-layout-logo-width": "var(--layout-home-logo-width)",
    "cc-layout-logo-width-mobile": "var(--layout-home-logo-width-mobile)",
    "cc-layout-stage-copy-margin-top": "var(--layout-home-stage-copy-margin-top)",
    "cc-layout-stage-intro-max-height": "var(--layout-home-stage-intro-max-height)",
    "cc-layout-stage-intro-opacity-duration": "var(--layout-home-stage-intro-opacity-duration)",
    "cc-layout-stage-intro-reveal-duration": "var(--layout-home-stage-intro-reveal-duration)",
    "cc-layout-stage-intro-transform-duration": "var(--layout-home-stage-intro-transform-duration)",
    "cc-layout-video-overlay-blur": "var(--layout-home-video-overlay-blur)",
    "cc-layout-video-overlay-motion": "var(--layout-home-video-overlay-motion)",
    "cc-layout-video-overlay-reveal-opacity": "var(--layout-home-video-overlay-reveal-opacity)",
    "cc-layout-video-overlay-saturate": "var(--layout-home-video-overlay-saturate)",
    "cc-matte-blur": "var(--home-matte-blur)",
    "cc-matte-opacity-bottom": "var(--home-matte-opacity-bottom)",
    "cc-matte-opacity-bottom-clear": "var(--home-matte-opacity-bottom-clear)",
    "cc-matte-opacity-bottom-light": "var(--home-matte-opacity-bottom-light)",
    "cc-matte-opacity-bottom-soft": "var(--home-matte-opacity-bottom-soft)",
    "cc-matte-opacity-bottom-solid-softedge": "var(--home-matte-opacity-bottom-solid-softedge)",
    "cc-matte-opacity-low": "var(--home-matte-opacity-low)",
    "cc-matte-opacity-low-clear": "var(--home-matte-opacity-low-clear)",
    "cc-matte-opacity-low-light": "var(--home-matte-opacity-low-light)",
    "cc-matte-opacity-low-soft": "var(--home-matte-opacity-low-soft)",
    "cc-matte-opacity-low-solid-softedge": "var(--home-matte-opacity-low-solid-softedge)",
    "cc-matte-opacity-mid": "var(--home-matte-opacity-mid)",
    "cc-matte-opacity-mid-clear": "var(--home-matte-opacity-mid-clear)",
    "cc-matte-opacity-mid-light": "var(--home-matte-opacity-mid-light)",
    "cc-matte-opacity-mid-soft": "var(--home-matte-opacity-mid-soft)",
    "cc-matte-opacity-mid-solid-softedge": "var(--home-matte-opacity-mid-solid-softedge)",
    "cc-matte-opacity-top": "var(--home-matte-opacity-top)",
    "cc-matte-opacity-top-clear": "var(--home-matte-opacity-top-clear)",
    "cc-matte-opacity-top-light": "var(--home-matte-opacity-top-light)",
    "cc-matte-opacity-top-soft": "var(--home-matte-opacity-top-soft)",
    "cc-matte-opacity-top-solid-softedge": "var(--home-matte-opacity-top-solid-softedge)",
    "cc-matte-rgb-dark": "var(--home-matte-rgb-dark)",
    "cc-matte-saturate": "var(--home-matte-saturate)",
    "cc-matte-transition-duration": "var(--home-matte-transition-duration)",
    "cc-matte-transition-ease": "var(--home-matte-transition-ease)",
    "cc-panel-border": "var(--glass-surface-border)",
    "cc-panel-card-border": "var(--glass-surface-border)",
    "cc-panel-card-radius": "var(--radius-lg)",
    "cc-panel-card-surface": "var(--glass-surface-bg)",
    "cc-panel-radius": "var(--radius-lg)",
    "cc-panel-shadow": "var(--glass-surface-shadow)",
    "cc-panel-surface": "var(--glass-surface-bg)",
    "cc-platform-shell-blur": "var(--home-platform-shell-blur)",
    "cc-platform-shell-border": "var(--home-platform-shell-border)",
    "cc-platform-shell-chrome-blur": "var(--home-platform-shell-chrome-blur)",
    "cc-platform-shell-chrome-min-height": "var(--home-platform-shell-chrome-min-height)",
    "cc-platform-shell-chrome-saturate": "var(--home-platform-shell-chrome-saturate)",
    "cc-platform-shell-chrome-toggle-color": "var(--home-platform-shell-chrome-toggle-color)",
    "cc-platform-shell-chrome-toggle-hover-color": "var(--home-platform-shell-chrome-toggle-hover-color)",
    "cc-platform-shell-content-copy-line-height": "var(--home-platform-shell-content-copy-line-height)",
    "cc-platform-shell-content-copy-max-width": "var(--home-platform-shell-content-copy-max-width)",
    "cc-platform-shell-content-copy-size": "var(--home-platform-shell-content-copy-size)",
    "cc-platform-shell-content-copy-tracking": "var(--home-platform-shell-content-copy-tracking)",
    "cc-platform-shell-content-copy-weight": "var(--home-platform-shell-content-copy-weight)",
    "cc-platform-shell-content-header-gap": "var(--home-platform-shell-content-header-gap)",
    "cc-platform-shell-content-header-padding-bottom": "var(--home-platform-shell-content-header-padding-bottom)",
    "cc-platform-shell-content-header-padding-left": "var(--home-platform-shell-content-header-padding-left)",
    "cc-platform-shell-content-header-padding-right": "var(--home-platform-shell-content-header-padding-right)",
    "cc-platform-shell-content-header-padding-top": "var(--home-platform-shell-content-header-padding-top)",
    "cc-platform-shell-content-inner-footer-gap": "var(--home-platform-shell-content-inner-footer-gap)",
    "cc-platform-shell-content-inner-padding-left": "var(--home-platform-shell-content-inner-padding-left)",
    "cc-platform-shell-content-inner-padding-top": "var(--home-platform-shell-content-inner-padding-top)",
    "cc-platform-shell-content-stack-gap": "var(--home-platform-shell-content-stack-gap)",
    "cc-platform-shell-content-title-color": "var(--home-platform-shell-content-title-color)",
    "cc-platform-shell-content-title-line-height": "var(--home-platform-shell-content-title-line-height)",
    "cc-platform-shell-content-title-size": "var(--home-platform-shell-content-title-size)",
    "cc-platform-shell-content-title-tracking": "var(--home-platform-shell-content-title-tracking)",
    "cc-platform-shell-content-title-weight": "var(--home-platform-shell-content-title-weight)",
    "cc-platform-shell-destination-gap": "var(--home-platform-shell-destination-gap)",
    "cc-platform-shell-embedded-section-gap": "var(--home-platform-shell-embedded-section-gap)",
    "cc-platform-shell-embedded-stack-gap": "var(--home-platform-shell-embedded-stack-gap)",
    "cc-platform-shell-gap": "var(--home-platform-shell-gap)",
    "cc-platform-shell-group-separator": "var(--home-platform-shell-group-separator)",
    "cc-platform-shell-group-separator-gap": "var(--home-platform-shell-group-separator-gap)",
    "cc-platform-shell-group-separator-offset": "var(--home-platform-shell-group-separator-offset)",
    "cc-platform-shell-inline-padding": "var(--home-platform-shell-inline-padding)",
    "cc-platform-shell-inner-surface": "var(--home-platform-shell-inner-surface)",
    "cc-platform-shell-label-margin-bottom": "var(--home-platform-shell-label-margin-bottom)",
    "cc-platform-shell-label-size": "var(--home-platform-shell-label-size)",
    "cc-platform-shell-label-tracking": "var(--home-platform-shell-label-tracking)",
    "cc-platform-shell-label-weight": "var(--home-platform-shell-label-weight)",
    "cc-platform-shell-mobile-content-header-padding-bottom": "var(--home-platform-shell-mobile-content-header-padding-bottom)",
    "cc-platform-shell-mobile-content-header-padding-top": "var(--home-platform-shell-mobile-content-header-padding-top)",
    "cc-platform-shell-mobile-content-inner-footer-gap": "var(--home-platform-shell-mobile-content-inner-footer-gap)",
    "cc-platform-shell-mobile-content-inner-padding-top": "var(--home-platform-shell-mobile-content-inner-padding-top)",
    "cc-platform-shell-mobile-inline-padding-fallback": "var(--home-platform-shell-mobile-inline-padding-fallback)",
    "cc-platform-shell-mobile-nav-gap": "var(--home-platform-shell-mobile-nav-gap)",
    "cc-platform-shell-mobile-nav-icon-size": "var(--home-platform-shell-mobile-nav-icon-size)",
    "cc-platform-shell-mobile-nav-item-min-height": "var(--home-platform-shell-mobile-nav-item-min-height)",
    "cc-platform-shell-mobile-nav-item-padding-x": "var(--home-platform-shell-mobile-nav-item-padding-x)",
    "cc-platform-shell-mobile-rail-inner-padding-y": "var(--home-platform-shell-mobile-rail-inner-padding-y)",
    "cc-platform-shell-muted-copy-color": "var(--home-platform-shell-muted-copy-color)",
    "cc-platform-shell-muted-label-color": "var(--home-platform-shell-muted-label-color)",
    "cc-platform-shell-nav-color": "var(--home-platform-shell-nav-color)",
    "cc-platform-shell-nav-gap": "var(--home-platform-shell-nav-gap)",
    "cc-platform-shell-nav-hover-color": "var(--home-platform-shell-nav-hover-color)",
    "cc-platform-shell-nav-hover-opacity": "var(--home-platform-shell-nav-hover-opacity)",
    "cc-platform-shell-nav-icon-size": "var(--home-platform-shell-nav-icon-size)",
    "cc-platform-shell-nav-indicator-bg": "var(--home-platform-shell-nav-indicator-bg)",
    "cc-platform-shell-nav-indicator-color": "var(--home-platform-shell-nav-indicator-color)",
    "cc-platform-shell-nav-indicator-high-bg": "var(--home-platform-shell-nav-indicator-high-bg)",
    "cc-platform-shell-nav-indicator-high-color": "var(--home-platform-shell-nav-indicator-high-color)",
    "cc-platform-shell-nav-indicator-line-height": "var(--home-platform-shell-nav-indicator-line-height)",
    "cc-platform-shell-nav-indicator-min-size": "var(--home-platform-shell-nav-indicator-min-size)",
    "cc-platform-shell-nav-indicator-new-bg": "var(--home-platform-shell-nav-indicator-new-bg)",
    "cc-platform-shell-nav-indicator-new-color": "var(--home-platform-shell-nav-indicator-new-color)",
    "cc-platform-shell-nav-indicator-padding-x": "var(--home-platform-shell-nav-indicator-padding-x)",
    "cc-platform-shell-nav-indicator-size": "var(--home-platform-shell-nav-indicator-size)",
    "cc-platform-shell-nav-indicator-tracking": "var(--home-platform-shell-nav-indicator-tracking)",
    "cc-platform-shell-nav-indicator-weight": "var(--home-platform-shell-nav-indicator-weight)",
    "cc-platform-shell-nav-item-bg": "var(--home-platform-shell-nav-item-bg)",
    "cc-platform-shell-nav-item-bg-active": "var(--home-platform-shell-nav-item-bg-active)",
    "cc-platform-shell-nav-item-bg-hover": "var(--home-platform-shell-nav-item-bg-hover)",
    "cc-platform-shell-nav-item-border-active": "var(--home-platform-shell-nav-item-border-active)",
    "cc-platform-shell-nav-item-border-hover": "var(--home-platform-shell-nav-item-border-hover)",
    "cc-platform-shell-nav-item-color-hover": "var(--home-platform-shell-nav-item-color-hover)",
    "cc-platform-shell-nav-item-gap": "var(--home-platform-shell-nav-item-gap)",
    "cc-platform-shell-nav-item-min-height": "var(--home-platform-shell-nav-item-min-height)",
    "cc-platform-shell-nav-item-padding": "var(--home-platform-shell-nav-item-padding)",
    "cc-platform-shell-nav-item-padding-x": "var(--home-platform-shell-nav-item-padding-x)",
    "cc-platform-shell-nav-item-padding-y": "var(--home-platform-shell-nav-item-padding-y)",
    "cc-platform-shell-nav-item-radius": "var(--home-platform-shell-nav-item-radius)",
    "cc-platform-shell-nav-opacity": "var(--home-platform-shell-nav-opacity)",
    "cc-platform-shell-nav-text-line-height": "var(--home-platform-shell-nav-text-line-height)",
    "cc-platform-shell-nav-text-size": "var(--home-platform-shell-nav-text-size)",
    "cc-platform-shell-nav-text-tracking": "var(--home-platform-shell-nav-text-tracking)",
    "cc-platform-shell-nav-text-weight": "var(--home-platform-shell-nav-text-weight)",
    "cc-platform-shell-padding": "var(--home-platform-shell-padding)",
    "cc-platform-shell-radius": "var(--home-platform-shell-radius)",
    "cc-platform-shell-rail-compact-width": "var(--home-platform-shell-rail-compact-width)",
    "cc-platform-shell-rail-padding-bottom": "var(--home-platform-shell-rail-padding-bottom)",
    "cc-platform-shell-rail-padding-left": "var(--home-platform-shell-rail-padding-left)",
    "cc-platform-shell-rail-padding-right": "var(--home-platform-shell-rail-padding-right)",
    "cc-platform-shell-rail-padding-top": "var(--home-platform-shell-rail-padding-top)",
    "cc-platform-shell-rail-toggle-icon-size": "var(--home-platform-shell-rail-toggle-icon-size)",
    "cc-platform-shell-rail-toggle-margin-left": "var(--home-platform-shell-rail-toggle-margin-left)",
    "cc-platform-shell-rail-toggle-size": "var(--home-platform-shell-rail-toggle-size)",
    "cc-platform-shell-rail-width": "var(--home-platform-shell-rail-width)",
    "cc-platform-shell-rail-width-token": "var(--home-platform-shell-rail-width-token)",
    "cc-platform-shell-saturate": "var(--home-platform-shell-saturate)",
    "cc-platform-shell-shadow": "var(--home-platform-shell-shadow)",
    "cc-platform-shell-state-action-min-height": "var(--home-platform-shell-state-action-min-height)",
    "cc-platform-shell-state-action-padding-x": "var(--home-platform-shell-state-action-padding-x)",
    "cc-platform-shell-state-action-size": "var(--home-platform-shell-state-action-size)",
    "cc-platform-shell-state-action-tracking": "var(--home-platform-shell-state-action-tracking)",
    "cc-platform-shell-state-action-weight": "var(--home-platform-shell-state-action-weight)",
    "cc-platform-shell-state-copy-line-height": "var(--home-platform-shell-state-copy-line-height)",
    "cc-platform-shell-state-copy-max-width": "var(--home-platform-shell-state-copy-max-width)",
    "cc-platform-shell-state-copy-size": "var(--home-platform-shell-state-copy-size)",
    "cc-platform-shell-state-title-line-height": "var(--home-platform-shell-state-title-line-height)",
    "cc-platform-shell-state-title-size": "var(--home-platform-shell-state-title-size)",
    "cc-platform-shell-state-title-tracking": "var(--home-platform-shell-state-title-tracking)",
    "cc-platform-shell-state-title-weight": "var(--home-platform-shell-state-title-weight)",
    "cc-platform-shell-subnav-line-height": "var(--home-platform-shell-subnav-line-height)",
    "cc-platform-shell-subnav-min-height": "var(--home-platform-shell-subnav-min-height)",
    "cc-platform-shell-subnav-padding-x": "var(--home-platform-shell-subnav-padding-x)",
    "cc-platform-shell-subnav-size": "var(--home-platform-shell-subnav-size)",
    "cc-platform-shell-subrail-header-gap": "var(--home-platform-shell-subrail-header-gap)",
    "cc-platform-shell-subrail-header-margin-bottom": "var(--home-platform-shell-subrail-header-margin-bottom)",
    "cc-platform-shell-subrail-padding-left": "var(--home-platform-shell-subrail-padding-left)",
    "cc-platform-shell-subrail-title-line-height": "var(--home-platform-shell-subrail-title-line-height)",
    "cc-platform-shell-subrail-title-size": "var(--home-platform-shell-subrail-title-size)",
    "cc-platform-shell-subrail-title-weight": "var(--home-platform-shell-subrail-title-weight)",
    "cc-platform-shell-subrail-width": "var(--home-platform-shell-subrail-width)",
    "cc-platform-shell-subrail-width-token": "var(--home-platform-shell-subrail-width-token)",
    "cc-platform-shell-surface": "var(--home-platform-shell-surface)",
    "cc-platform-shell-tablet-content-padding-left": "var(--home-platform-shell-tablet-content-padding-left)",
    "cc-platform-shell-tablet-rail-max": "var(--home-platform-shell-tablet-rail-max)",
    "cc-platform-shell-tablet-rail-min": "var(--home-platform-shell-tablet-rail-min)",
    "cc-platform-shell-tablet-rail-padding-right": "var(--home-platform-shell-tablet-rail-padding-right)",
    "cc-platform-shell-tablet-subrail-max": "var(--home-platform-shell-tablet-subrail-max)",
    "cc-platform-shell-tablet-subrail-min": "var(--home-platform-shell-tablet-subrail-min)",
    "cc-platform-theme-caption-line-height": "var(--layout-home-platform-theme-caption-line-height)",
    "cc-platform-theme-caption-opacity": "var(--layout-home-platform-theme-caption-opacity)",
    "cc-platform-theme-caption-size": "var(--layout-home-platform-theme-caption-size)",
    "cc-platform-theme-eyebrow-opacity": "var(--layout-home-platform-theme-eyebrow-opacity)",
    "cc-platform-theme-eyebrow-size": "var(--layout-home-platform-theme-eyebrow-size)",
    "cc-platform-theme-eyebrow-tracking": "var(--layout-home-platform-theme-eyebrow-tracking)",
    "cc-platform-theme-eyebrow-weight": "var(--layout-home-platform-theme-eyebrow-weight)",
    "cc-platform-theme-header-gap": "var(--layout-home-platform-theme-header-gap)",
    "cc-platform-theme-mode-grid-count": "var(--layout-home-platform-theme-mode-grid-count)",
    "cc-platform-theme-mode-grid-gap": "var(--layout-home-platform-theme-mode-grid-gap)",
    "cc-platform-theme-mode-label-line-height": "var(--layout-home-platform-theme-mode-label-line-height)",
    "cc-platform-theme-mode-label-size": "var(--layout-home-platform-theme-mode-label-size)",
    "cc-platform-theme-mode-option-gap": "var(--layout-home-platform-theme-mode-option-gap)",
    "cc-platform-theme-mode-option-min-height": "var(--layout-home-platform-theme-mode-option-min-height)",
    "cc-platform-theme-mode-option-padding-x": "var(--layout-home-platform-theme-mode-option-padding-x)",
    "cc-platform-theme-mode-option-padding-y": "var(--layout-home-platform-theme-mode-option-padding-y)",
    "cc-platform-theme-mode-option-radius": "var(--layout-home-platform-theme-mode-option-radius)",
    "cc-platform-theme-section-gap": "var(--layout-home-platform-theme-section-gap)",
    "cc-platform-theme-section-header-gap": "var(--layout-home-platform-theme-section-header-gap)",
    "cc-platform-theme-section-padding-top": "var(--layout-home-platform-theme-section-padding-top)",
    "cc-platform-theme-shell-gap": "var(--layout-home-platform-theme-shell-gap)",
    "cc-platform-theme-summary-line-height": "var(--layout-home-platform-theme-summary-line-height)",
    "cc-platform-theme-summary-max-width": "var(--layout-home-platform-theme-summary-max-width)",
    "cc-platform-theme-summary-opacity": "var(--layout-home-platform-theme-summary-opacity)",
    "cc-platform-theme-summary-size": "var(--layout-home-platform-theme-summary-size)",
    "cc-platform-theme-title-line-height": "var(--layout-home-platform-theme-title-line-height)",
    "cc-platform-theme-title-size": "var(--layout-home-platform-theme-title-size)",
    "cc-platform-theme-title-tracking": "var(--layout-home-platform-theme-title-tracking)",
    "cc-platform-theme-toggle-list-gap": "var(--layout-home-platform-theme-toggle-list-gap)",
    "cc-platform-theme-toggle-row-gap": "var(--layout-home-platform-theme-toggle-row-gap)",
    "cc-platform-theme-toggle-row-padding-y": "var(--layout-home-platform-theme-toggle-row-padding-y)",
    "cc-platform-theme-token-field-gap": "var(--layout-home-platform-theme-token-field-gap)",
    "cc-platform-theme-token-field-min-height": "var(--layout-home-platform-theme-token-field-min-height)",
    "cc-platform-theme-token-field-padding-x": "var(--layout-home-platform-theme-token-field-padding-x)",
    "cc-platform-theme-token-field-padding-y": "var(--layout-home-platform-theme-token-field-padding-y)",
    "cc-platform-theme-token-field-radius": "var(--layout-home-platform-theme-token-field-radius)",
    "cc-platform-theme-token-grid-count": "var(--layout-home-platform-theme-token-grid-count)",
    "cc-platform-theme-token-grid-disabled-opacity": "var(--layout-home-platform-theme-token-grid-disabled-opacity)",
    "cc-platform-theme-token-grid-enabled-opacity": "var(--layout-home-platform-theme-token-grid-enabled-opacity)",
    "cc-platform-theme-token-grid-gap": "var(--layout-home-platform-theme-token-grid-gap)",
    "cc-platform-theme-token-label-line-height": "var(--layout-home-platform-theme-token-label-line-height)",
    "cc-platform-theme-token-label-size": "var(--layout-home-platform-theme-token-label-size)",
    "cc-primary-color": "var(--text-color)",
    "cc-profile-control-panel-avatar-fallback-size": "var(--layout-home-profile-control-panel-avatar-fallback-size)",
    "cc-profile-control-panel-avatar-fallback-tracking": "var(--layout-home-profile-control-panel-avatar-fallback-tracking)",
    "cc-profile-control-panel-avatar-fallback-weight": "var(--layout-home-profile-control-panel-avatar-fallback-weight)",
    "cc-profile-control-panel-avatar-size": "var(--layout-home-profile-control-panel-avatar-size)",
    "cc-profile-control-panel-eyebrow-margin-bottom": "var(--layout-home-profile-control-panel-eyebrow-margin-bottom)",
    "cc-profile-control-panel-header-gap": "var(--layout-home-profile-control-panel-header-gap)",
    "cc-profile-control-panel-header-padding-bottom": "var(--layout-home-profile-control-panel-header-padding-bottom)",
    "cc-profile-control-panel-identity-gap": "var(--layout-home-profile-control-panel-identity-gap)",
    "cc-profile-control-panel-identity-padding-x": "var(--layout-home-profile-control-panel-identity-padding-x)",
    "cc-profile-control-panel-identity-padding-y": "var(--layout-home-profile-control-panel-identity-padding-y)",
    "cc-profile-control-panel-inner-gap": "var(--layout-home-profile-control-panel-inner-gap)",
    "cc-profile-control-panel-inner-padding-bottom": "var(--layout-home-profile-control-panel-inner-padding-bottom)",
    "cc-profile-control-panel-inner-padding-left": "var(--layout-home-profile-control-panel-inner-padding-left)",
    "cc-profile-control-panel-inner-padding-right": "var(--layout-home-profile-control-panel-inner-padding-right)",
    "cc-profile-control-panel-inner-padding-top": "var(--layout-home-profile-control-panel-inner-padding-top)",
    "cc-profile-control-panel-inner-padding-top-mobile": "var(--layout-home-profile-control-panel-inner-padding-top-mobile)",
    "cc-profile-control-panel-item-min-height": "var(--layout-home-profile-control-panel-item-min-height)",
    "cc-profile-control-panel-item-padding-x": "var(--layout-home-profile-control-panel-item-padding-x)",
    "cc-profile-control-panel-item-padding-y": "var(--layout-home-profile-control-panel-item-padding-y)",
    "cc-profile-control-panel-item-size": "var(--layout-home-profile-control-panel-item-size)",
    "cc-profile-control-panel-item-tracking": "var(--layout-home-profile-control-panel-item-tracking)",
    "cc-profile-control-panel-item-weight": "var(--layout-home-profile-control-panel-item-weight)",
    "cc-profile-control-panel-meta-line-height": "var(--layout-home-profile-control-panel-meta-line-height)",
    "cc-profile-control-panel-meta-size": "var(--layout-home-profile-control-panel-meta-size)",
    "cc-profile-control-panel-name-margin-bottom": "var(--layout-home-profile-control-panel-name-margin-bottom)",
    "cc-profile-control-panel-name-size": "var(--layout-home-profile-control-panel-name-size)",
    "cc-profile-control-panel-name-weight": "var(--layout-home-profile-control-panel-name-weight)",
    "cc-profile-control-panel-plan-margin-bottom": "var(--layout-home-profile-control-panel-plan-margin-bottom)",
    "cc-profile-control-panel-plan-size": "var(--layout-home-profile-control-panel-plan-size)",
    "cc-profile-control-panel-plan-tracking": "var(--layout-home-profile-control-panel-plan-tracking)",
    "cc-profile-control-panel-plan-weight": "var(--layout-home-profile-control-panel-plan-weight)",
    "cc-profile-control-panel-route-link-line-height": "var(--layout-home-profile-control-panel-route-link-line-height)",
    "cc-profile-control-panel-route-link-margin-top": "var(--layout-home-profile-control-panel-route-link-margin-top)",
    "cc-profile-control-panel-route-link-size": "var(--layout-home-profile-control-panel-route-link-size)",
    "cc-profile-control-panel-section-gap": "var(--layout-home-profile-control-panel-section-gap)",
    "cc-profile-control-panel-stack-gap": "var(--layout-home-profile-control-panel-stack-gap)",
    "cc-profile-control-panel-status-card-gap": "var(--layout-home-profile-control-panel-status-card-gap)",
    "cc-profile-control-panel-status-card-padding-x": "var(--layout-home-profile-control-panel-status-card-padding-x)",
    "cc-profile-control-panel-status-card-padding-y": "var(--layout-home-profile-control-panel-status-card-padding-y)",
    "cc-profile-control-panel-status-grid-gap": "var(--layout-home-profile-control-panel-status-grid-gap)",
    "cc-profile-control-panel-status-label-size": "var(--layout-home-profile-control-panel-status-label-size)",
    "cc-profile-control-panel-status-label-tracking": "var(--layout-home-profile-control-panel-status-label-tracking)",
    "cc-profile-control-panel-status-label-weight": "var(--layout-home-profile-control-panel-status-label-weight)",
    "cc-profile-control-panel-status-value-line-height": "var(--layout-home-profile-control-panel-status-value-line-height)",
    "cc-profile-control-panel-status-value-size": "var(--layout-home-profile-control-panel-status-value-size)",
    "cc-profile-control-panel-status-value-weight": "var(--layout-home-profile-control-panel-status-value-weight)",
    "cc-profile-control-panel-username-margin-bottom": "var(--layout-home-profile-control-panel-username-margin-bottom)",
    "cc-profile-control-panel-username-size": "var(--layout-home-profile-control-panel-username-size)",
    "cc-profile-control-panel-username-tracking": "var(--layout-home-profile-control-panel-username-tracking)",
    "cc-profile-control-panel-username-weight": "var(--layout-home-profile-control-panel-username-weight)",
    "cc-profile-control-panel-width": "var(--layout-home-profile-control-panel-width)",
    "cc-radius-unified": "var(--radius-lg)",
    "cc-saturate-unified": "var(--glass-surface-saturate)",
    "cc-search-shell-body-gap": "var(--layout-home-search-body-gap)",
    "cc-search-shell-body-padding-x-fallback": "var(--layout-home-search-body-padding-x-fallback)",
    "cc-search-shell-body-padding-y": "var(--layout-home-search-body-padding-y)",
    "cc-search-shell-chip-min-height": "var(--layout-home-search-chip-min-height)",
    "cc-search-shell-chip-padding-x": "var(--layout-home-search-chip-padding-x)",
    "cc-search-shell-chip-size": "var(--layout-home-search-chip-size)",
    "cc-search-shell-chip-tracking": "var(--layout-home-search-chip-tracking)",
    "cc-search-shell-dark-border": "var(--layout-home-search-dark-border)",
    "cc-search-shell-dialog-blur": "var(--layout-home-search-dialog-blur)",
    "cc-search-shell-dialog-saturate": "var(--layout-home-search-dialog-saturate)",
    "cc-search-shell-empty-gap": "var(--layout-home-search-empty-gap)",
    "cc-search-shell-empty-padding-top": "var(--layout-home-search-empty-padding-top)",
    "cc-search-shell-empty-text-line-height": "var(--layout-home-search-empty-text-line-height)",
    "cc-search-shell-empty-text-size": "var(--layout-home-search-empty-text-size)",
    "cc-search-shell-empty-title-size": "var(--layout-home-search-empty-title-size)",
    "cc-search-shell-eyebrow-margin-bottom": "var(--layout-home-search-eyebrow-margin-bottom)",
    "cc-search-shell-eyebrow-size": "var(--layout-home-search-eyebrow-size)",
    "cc-search-shell-eyebrow-tracking": "var(--layout-home-search-eyebrow-tracking)",
    "cc-search-shell-eyebrow-weight": "var(--layout-home-search-eyebrow-weight)",
    "cc-search-shell-form-gap": "var(--layout-home-search-form-gap)",
    "cc-search-shell-header-gap": "var(--layout-home-search-header-gap)",
    "cc-search-shell-header-padding-bottom": "var(--layout-home-search-header-padding-bottom)",
    "cc-search-shell-header-padding-x-fallback": "var(--layout-home-search-header-padding-x-fallback)",
    "cc-search-shell-header-padding-y": "var(--layout-home-search-header-padding-y)",
    "cc-search-shell-hint-line-height": "var(--layout-home-search-hint-line-height)",
    "cc-search-shell-hint-size": "var(--layout-home-search-hint-size)",
    "cc-search-shell-icon-opacity": "var(--layout-home-search-icon-opacity)",
    "cc-search-shell-icon-size": "var(--layout-home-search-icon-size)",
    "cc-search-shell-input-line-height": "var(--layout-home-search-input-line-height)",
    "cc-search-shell-input-row-border": "var(--layout-home-search-input-row-border)",
    "cc-search-shell-input-row-border-focus": "var(--layout-home-search-input-row-border-focus)",
    "cc-search-shell-input-row-gap": "var(--layout-home-search-input-row-gap)",
    "cc-search-shell-input-row-line-height": "var(--layout-home-search-input-row-line-height)",
    "cc-search-shell-input-row-min-height": "var(--layout-home-search-input-row-min-height)",
    "cc-search-shell-input-row-opacity": "var(--layout-home-search-input-row-opacity)",
    "cc-search-shell-input-row-padding-x": "var(--layout-home-search-input-row-padding-x)",
    "cc-search-shell-input-row-padding-y": "var(--layout-home-search-input-row-padding-y)",
    "cc-search-shell-input-row-radius": "var(--layout-home-search-input-row-radius)",
    "cc-search-shell-input-size": "var(--layout-home-search-input-size)",
    "cc-search-shell-input-tracking": "var(--layout-home-search-input-tracking)",
    "cc-search-shell-input-weight": "var(--layout-home-search-input-weight)",
    "cc-search-shell-light-border": "var(--layout-home-search-light-border)",
    "cc-search-shell-mobile-input-row-min-height": "var(--layout-home-search-mobile-input-row-min-height)",
    "cc-search-shell-mobile-input-row-padding-x": "var(--layout-home-search-mobile-input-row-padding-x)",
    "cc-search-shell-mobile-input-row-padding-y": "var(--layout-home-search-mobile-input-row-padding-y)",
    "cc-search-shell-mobile-input-size": "var(--layout-home-search-mobile-input-size)",
    "cc-search-shell-mobile-padding-x-fallback": "var(--layout-home-search-mobile-padding-x-fallback)",
    "cc-search-shell-quick-actions-gap": "var(--layout-home-search-quick-actions-gap)",
    "cc-search-shell-result-action-line-height": "var(--layout-home-search-result-action-line-height)",
    "cc-search-shell-result-action-min-height": "var(--layout-home-search-result-action-min-height)",
    "cc-search-shell-result-action-min-width": "var(--layout-home-search-result-action-min-width)",
    "cc-search-shell-result-action-padding-x": "var(--layout-home-search-result-action-padding-x)",
    "cc-search-shell-result-action-size": "var(--layout-home-search-result-action-size)",
    "cc-search-shell-result-actions-gap": "var(--layout-home-search-result-actions-gap)",
    "cc-search-shell-result-badge-color": "var(--layout-home-search-result-badge-color)",
    "cc-search-shell-result-badge-gap": "var(--layout-home-search-result-badge-gap)",
    "cc-search-shell-result-badge-icon-size": "var(--layout-home-search-result-badge-icon-size)",
    "cc-search-shell-result-badge-min-height": "var(--layout-home-search-result-badge-min-height)",
    "cc-search-shell-result-badge-padding-x": "var(--layout-home-search-result-badge-padding-x)",
    "cc-search-shell-result-badge-size": "var(--layout-home-search-result-badge-size)",
    "cc-search-shell-result-badge-weight": "var(--layout-home-search-result-badge-weight)",
    "cc-search-shell-result-card-gap": "var(--layout-home-search-result-card-gap)",
    "cc-search-shell-result-card-padding-y": "var(--layout-home-search-result-card-padding-y)",
    "cc-search-shell-result-list-gap": "var(--layout-home-search-result-list-gap)",
    "cc-search-shell-result-meta-column-gap": "var(--layout-home-search-result-meta-column-gap)",
    "cc-search-shell-result-meta-row-gap": "var(--layout-home-search-result-meta-row-gap)",
    "cc-search-shell-result-query-line-height": "var(--layout-home-search-result-query-line-height)",
    "cc-search-shell-result-query-size": "var(--layout-home-search-result-query-size)",
    "cc-search-shell-result-tag-min-height": "var(--layout-home-search-result-tag-min-height)",
    "cc-search-shell-result-tag-padding-x": "var(--layout-home-search-result-tag-padding-x)",
    "cc-search-shell-result-tag-size": "var(--layout-home-search-result-tag-size)",
    "cc-search-shell-result-tag-tracking": "var(--layout-home-search-result-tag-tracking)",
    "cc-search-shell-result-title-line-height": "var(--layout-home-search-result-title-line-height)",
    "cc-search-shell-result-title-size": "var(--layout-home-search-result-title-size)",
    "cc-search-shell-result-title-tracking": "var(--layout-home-search-result-title-tracking)",
    "cc-search-shell-result-title-weight": "var(--layout-home-search-result-title-weight)",
    "cc-search-shell-voice-motion": "var(--layout-home-search-voice-motion)",
    "cc-secondary": "var(--text-secondary-color)",
    "cc-secondary-color": "var(--text-secondary-color)",
    "cc-shadow-unified": "var(--glass-surface-shadow)",
    "cc-stage-circle-blur": "var(--layout-home-circle-blur)",
    "cc-stage-circle-breathe-duration": "var(--layout-home-circle-breathe-duration)",
    "cc-stage-circle-halo-opacity": "var(--layout-home-circle-halo-opacity)",
    "cc-stage-circle-halo-scale": "var(--layout-home-circle-halo-scale)",
    "cc-stage-circle-mid-scale": "var(--layout-home-circle-mid-scale)",
    "cc-stage-circle-start-scale": "var(--layout-home-circle-start-scale)",
    "cc-stage-developer-operations-border": "var(--home-stage-developer-operations-border)",
    "cc-stage-developer-operations-button-radius": "var(--home-stage-developer-operations-button-radius)",
    "cc-stage-developer-operations-control-focus-border": "var(--home-stage-developer-operations-control-focus-border)",
    "cc-stage-developer-operations-control-font-size": "var(--home-stage-developer-operations-control-font-size)",
    "cc-stage-developer-operations-control-height": "var(--home-stage-developer-operations-control-height)",
    "cc-stage-developer-operations-control-icon-offset": "var(--home-stage-developer-operations-control-icon-offset)",
    "cc-stage-developer-operations-control-inline-padding": "var(--home-stage-developer-operations-control-inline-padding)",
    "cc-stage-developer-operations-control-padding": "var(--home-stage-developer-operations-control-padding)",
    "cc-stage-developer-operations-copy-font-size": "var(--home-stage-developer-operations-copy-font-size)",
    "cc-stage-developer-operations-full-body-gap": "var(--home-stage-developer-operations-full-body-gap)",
    "cc-stage-developer-operations-full-border": "var(--home-stage-developer-operations-full-border)",
    "cc-stage-developer-operations-full-gap": "var(--home-stage-developer-operations-full-gap)",
    "cc-stage-developer-operations-full-height": "var(--home-stage-developer-operations-full-height)",
    "cc-stage-developer-operations-full-inset": "var(--home-stage-developer-operations-full-inset)",
    "cc-stage-developer-operations-full-padding-block": "var(--home-stage-developer-operations-full-padding-block)",
    "cc-stage-developer-operations-full-padding-inline": "var(--home-stage-developer-operations-full-padding-inline)",
    "cc-stage-developer-operations-full-surface": "var(--home-stage-developer-operations-full-surface)",
    "cc-stage-developer-operations-full-text": "var(--home-stage-developer-operations-full-text)",
    "cc-stage-developer-operations-full-top": "var(--home-stage-developer-operations-full-top)",
    "cc-stage-developer-operations-full-z-index": "var(--home-stage-developer-operations-full-z-index)",
    "cc-stage-developer-operations-gap": "var(--home-stage-developer-operations-gap)",
    "cc-stage-developer-operations-gap-compact": "var(--home-stage-developer-operations-gap-compact)",
    "cc-stage-developer-operations-gap-spacious": "var(--home-stage-developer-operations-gap-spacious)",
    "cc-stage-developer-operations-gap-tight": "var(--home-stage-developer-operations-gap-tight)",
    "cc-stage-developer-operations-icon-gap": "var(--home-stage-developer-operations-icon-gap)",
    "cc-stage-developer-operations-icon-opacity": "var(--home-stage-developer-operations-icon-opacity)",
    "cc-stage-developer-operations-icon-opacity-active": "var(--home-stage-developer-operations-icon-opacity-active)",
    "cc-stage-developer-operations-icon-size": "var(--home-stage-developer-operations-icon-size)",
    "cc-stage-developer-operations-label-font-size": "var(--home-stage-developer-operations-label-font-size)",
    "cc-stage-developer-operations-max-height": "var(--home-stage-developer-operations-max-height)",
    "cc-stage-developer-operations-muted": "var(--home-stage-developer-operations-muted)",
    "cc-stage-developer-operations-padding": "var(--home-stage-developer-operations-padding)",
    "cc-stage-developer-operations-radius": "var(--home-stage-developer-operations-radius)",
    "cc-stage-developer-operations-search-icon-size": "var(--home-stage-developer-operations-search-icon-size)",
    "cc-stage-developer-operations-shadow": "var(--home-stage-developer-operations-shadow)",
    "cc-stage-developer-operations-surface": "var(--home-stage-developer-operations-surface)",
    "cc-stage-developer-operations-text": "var(--home-stage-developer-operations-text)",
    "cc-stage-developer-operations-width": "var(--home-stage-developer-operations-width)",
    "cc-stage-halo-breathe-duration": "var(--layout-home-halo-breathe-duration)",
    "cc-stage-halo-start-opacity": "var(--layout-home-halo-start-opacity)",
    "cc-stage-interactive-text-active-opacity": "var(--home-stage-interactive-text-active-opacity)",
    "cc-stage-interactive-text-color": "var(--home-stage-interactive-text-color)",
    "cc-stage-interactive-text-dot-color": "var(--home-stage-interactive-text-dot-color)",
    "cc-stage-interactive-text-dot-glow": "var(--home-stage-interactive-text-dot-glow)",
    "cc-stage-interactive-text-dot-size": "var(--home-stage-interactive-text-dot-size)",
    "cc-stage-interactive-text-font-size": "var(--home-stage-interactive-text-font-size)",
    "cc-stage-interactive-text-font-size-mobile": "var(--home-stage-interactive-text-font-size-mobile)",
    "cc-stage-interactive-text-font-weight": "var(--home-stage-interactive-text-font-weight)",
    "cc-stage-interactive-text-gap": "var(--home-stage-interactive-text-gap)",
    "cc-stage-interactive-text-letter-spacing": "var(--home-stage-interactive-text-letter-spacing)",
    "cc-stage-interactive-text-line-height": "var(--home-stage-interactive-text-line-height)",
    "cc-stage-interactive-text-max-width": "var(--home-stage-interactive-text-max-width)",
    "cc-stage-interactive-text-motion-fast": "var(--home-stage-interactive-text-motion-fast)",
    "cc-stage-interactive-text-opacity": "var(--home-stage-interactive-text-opacity)",
    "cc-stage-interactive-text-sheen-duration": "var(--home-stage-interactive-text-sheen-duration)",
    "cc-stage-interactive-text-switch-duration": "var(--home-stage-interactive-text-switch-duration)",
    "cc-stage-motion-active-color": "var(--layout-home-stage-motion-active-color)",
    "cc-stage-motion-active-mic-scale": "var(--layout-home-stage-motion-active-mic-scale)",
    "cc-stage-motion-core-active-height": "var(--layout-home-stage-motion-core-active-height)",
    "cc-stage-motion-core-active-width": "var(--layout-home-stage-motion-core-active-width)",
    "cc-stage-motion-core-color": "var(--layout-home-stage-motion-core-color)",
    "cc-stage-motion-core-height": "var(--layout-home-stage-motion-core-height)",
    "cc-stage-motion-core-pulse-size": "var(--layout-home-stage-motion-core-pulse-size)",
    "cc-stage-motion-core-ring-border": "var(--layout-home-stage-motion-core-ring-border)",
    "cc-stage-motion-core-ring-size": "var(--layout-home-stage-motion-core-ring-size)",
    "cc-stage-motion-core-signal-size": "var(--layout-home-stage-motion-core-signal-size)",
    "cc-stage-motion-core-width": "var(--layout-home-stage-motion-core-width)",
    "cc-stage-motion-fast": "var(--layout-home-stage-motion-fast)",
    "cc-stage-motion-field-opacity-transition": "var(--layout-home-stage-motion-field-opacity-transition)",
    "cc-stage-motion-key-core-listen-mid-opacity": "var(--layout-home-stage-motion-key-core-listen-mid-opacity)",
    "cc-stage-motion-key-core-listen-mid-scale": "var(--layout-home-stage-motion-key-core-listen-mid-scale)",
    "cc-stage-motion-key-core-listen-start-opacity": "var(--layout-home-stage-motion-key-core-listen-start-opacity)",
    "cc-stage-motion-key-core-listen-start-scale": "var(--layout-home-stage-motion-key-core-listen-start-scale)",
    "cc-stage-motion-key-core-respond-mid-opacity": "var(--layout-home-stage-motion-key-core-respond-mid-opacity)",
    "cc-stage-motion-key-core-respond-mid-scale": "var(--layout-home-stage-motion-key-core-respond-mid-scale)",
    "cc-stage-motion-key-core-respond-start-opacity": "var(--layout-home-stage-motion-key-core-respond-start-opacity)",
    "cc-stage-motion-key-core-respond-start-scale": "var(--layout-home-stage-motion-key-core-respond-start-scale)",
    "cc-stage-motion-key-core-think-mid-opacity": "var(--layout-home-stage-motion-key-core-think-mid-opacity)",
    "cc-stage-motion-key-core-think-mid-scale": "var(--layout-home-stage-motion-key-core-think-mid-scale)",
    "cc-stage-motion-key-core-think-start-opacity": "var(--layout-home-stage-motion-key-core-think-start-opacity)",
    "cc-stage-motion-key-core-think-start-scale": "var(--layout-home-stage-motion-key-core-think-start-scale)",
    "cc-stage-motion-key-mic-listen-mid-opacity": "var(--layout-home-stage-motion-key-mic-listen-mid-opacity)",
    "cc-stage-motion-key-mic-listen-mid-scale": "var(--layout-home-stage-motion-key-mic-listen-mid-scale)",
    "cc-stage-motion-key-mic-listen-start-opacity": "var(--layout-home-stage-motion-key-mic-listen-start-opacity)",
    "cc-stage-motion-key-mic-listen-start-scale": "var(--layout-home-stage-motion-key-mic-listen-start-scale)",
    "cc-stage-motion-key-mic-respond-mid-opacity": "var(--layout-home-stage-motion-key-mic-respond-mid-opacity)",
    "cc-stage-motion-key-mic-respond-mid-scale": "var(--layout-home-stage-motion-key-mic-respond-mid-scale)",
    "cc-stage-motion-key-mic-respond-start-opacity": "var(--layout-home-stage-motion-key-mic-respond-start-opacity)",
    "cc-stage-motion-key-mic-respond-start-scale": "var(--layout-home-stage-motion-key-mic-respond-start-scale)",
    "cc-stage-motion-key-mic-think-mid-opacity": "var(--layout-home-stage-motion-key-mic-think-mid-opacity)",
    "cc-stage-motion-key-mic-think-mid-scale": "var(--layout-home-stage-motion-key-mic-think-mid-scale)",
    "cc-stage-motion-key-mic-think-start-opacity": "var(--layout-home-stage-motion-key-mic-think-start-opacity)",
    "cc-stage-motion-key-mic-think-start-scale": "var(--layout-home-stage-motion-key-mic-think-start-scale)",
    "cc-stage-motion-key-ring-listen-mid-opacity": "var(--layout-home-stage-motion-key-ring-listen-mid-opacity)",
    "cc-stage-motion-key-ring-listen-mid-scale": "var(--layout-home-stage-motion-key-ring-listen-mid-scale)",
    "cc-stage-motion-key-ring-listen-start-opacity": "var(--layout-home-stage-motion-key-ring-listen-start-opacity)",
    "cc-stage-motion-key-ring-listen-start-scale": "var(--layout-home-stage-motion-key-ring-listen-start-scale)",
    "cc-stage-motion-key-ring-respond-mid-opacity": "var(--layout-home-stage-motion-key-ring-respond-mid-opacity)",
    "cc-stage-motion-key-ring-respond-mid-scale": "var(--layout-home-stage-motion-key-ring-respond-mid-scale)",
    "cc-stage-motion-key-ring-respond-start-opacity": "var(--layout-home-stage-motion-key-ring-respond-start-opacity)",
    "cc-stage-motion-key-ring-respond-start-scale": "var(--layout-home-stage-motion-key-ring-respond-start-scale)",
    "cc-stage-motion-key-ring-think-mid-opacity": "var(--layout-home-stage-motion-key-ring-think-mid-opacity)",
    "cc-stage-motion-key-ring-think-mid-scale": "var(--layout-home-stage-motion-key-ring-think-mid-scale)",
    "cc-stage-motion-key-ring-think-start-opacity": "var(--layout-home-stage-motion-key-ring-think-start-opacity)",
    "cc-stage-motion-key-ring-think-start-scale": "var(--layout-home-stage-motion-key-ring-think-start-scale)",
    "cc-stage-motion-listening-core-duration": "var(--layout-home-stage-motion-listening-core-duration)",
    "cc-stage-motion-listening-mic-duration": "var(--layout-home-stage-motion-listening-mic-duration)",
    "cc-stage-motion-listening-ring-duration": "var(--layout-home-stage-motion-listening-ring-duration)",
    "cc-stage-motion-mic-color": "var(--layout-home-stage-motion-mic-color)",
    "cc-stage-motion-mic-field-blur": "var(--layout-home-stage-motion-mic-field-blur)",
    "cc-stage-motion-mic-field-color": "var(--layout-home-stage-motion-mic-field-color)",
    "cc-stage-motion-mic-field-color-clear": "var(--layout-home-stage-motion-mic-field-color-clear)",
    "cc-stage-motion-mic-field-color-soft": "var(--layout-home-stage-motion-mic-field-color-soft)",
    "cc-stage-motion-mic-hover-color": "var(--layout-home-stage-motion-mic-hover-color)",
    "cc-stage-motion-mic-hover-scale": "var(--layout-home-stage-motion-mic-hover-scale)",
    "cc-stage-motion-mic-icon-hover-scale": "var(--layout-home-stage-motion-mic-icon-hover-scale)",
    "cc-stage-motion-mic-icon-opacity": "var(--layout-home-stage-motion-mic-icon-opacity)",
    "cc-stage-motion-mic-icon-size": "var(--layout-home-stage-motion-mic-icon-size)",
    "cc-stage-motion-mic-margin-bottom": "var(--layout-home-stage-motion-mic-margin-bottom)",
    "cc-stage-motion-mic-opacity": "var(--layout-home-stage-motion-mic-opacity)",
    "cc-stage-motion-mic-ring-border": "var(--layout-home-stage-motion-mic-ring-border)",
    "cc-stage-motion-mic-ring-offset": "var(--layout-home-stage-motion-mic-ring-offset)",
    "cc-stage-motion-mic-size": "var(--layout-home-stage-motion-mic-size)",
    "cc-stage-motion-mode-core-opacity": "var(--layout-home-stage-motion-mode-core-opacity)",
    "cc-stage-motion-mode-ring-opacity": "var(--layout-home-stage-motion-mode-ring-opacity)",
    "cc-stage-motion-responding-core-duration": "var(--layout-home-stage-motion-responding-core-duration)",
    "cc-stage-motion-responding-mic-duration": "var(--layout-home-stage-motion-responding-mic-duration)",
    "cc-stage-motion-responding-ring-duration": "var(--layout-home-stage-motion-responding-ring-duration)",
    "cc-stage-motion-thinking-core-duration": "var(--layout-home-stage-motion-thinking-core-duration)",
    "cc-stage-motion-thinking-mic-duration": "var(--layout-home-stage-motion-thinking-mic-duration)",
    "cc-stage-motion-thinking-ring-duration": "var(--layout-home-stage-motion-thinking-ring-duration)",
    "cc-stage-motion-transition": "var(--layout-home-stage-motion-transition)",
    "cc-stage-motion-vessel-active-size": "var(--layout-home-stage-motion-vessel-active-size)",
    "cc-stage-motion-vessel-blur": "var(--layout-home-stage-motion-vessel-blur)",
    "cc-stage-motion-vessel-inner-bg": "var(--layout-home-stage-motion-vessel-inner-bg)",
    "cc-stage-motion-vessel-ring-border": "var(--layout-home-stage-motion-vessel-ring-border)",
    "cc-stage-motion-vessel-size": "var(--layout-home-stage-motion-vessel-size)",
    "cc-subtle": "color-mix(in srgb, var(--text-secondary-color) 58%, transparent)",
    "cc-surface-unified": "var(--glass-surface-bg)",
    "cc-transform-none": "none",
    "cc-transform-uppercase": "uppercase",
    "cc-width": "100%",
    "cc-width-hairline": "1px",
    "cc-width-thin": "2px",
    "control-height-sm": "2.2rem",
    "control-height-md": "2.6rem",
    "control-height-lg": "3rem",
    "control-width-auth-max": "26rem",
    "control-width-auth-max-wide": "30rem",
    "control-padding-x-sm": "0.82rem",
    "control-padding-x-md": "1rem",
    "control-padding-x-lg": "1.25rem",
    "control-gap-xs": "0.46rem",
    "control-gap-sm": "0.52rem",
    "control-gap-md": "0.72rem",
    "control-gap-lg": "0.82rem",
    "control-gap-xl": "1rem",
    "button-font-size": "var(--body-2-size)",
    "button-font-weight": "500",
    "button-letter-spacing": "var(--tracking-copy)",
    "button-line-height": "1",
    "button-height-sm": "var(--control-height-sm)",
    "button-height-md": "var(--control-height-md)",
    "button-height-lg": "var(--control-height-lg)",
    "button-radius-sm": "var(--radius-pill)",
    "button-radius-md": "var(--radius-pill)",
    "button-radius-lg": "var(--radius-pill)",
    "button-padding-x-sm": "var(--control-padding-x-sm)",
    "button-padding-x-md": "var(--control-padding-x-md)",
    "button-padding-x-lg": "var(--control-padding-x-lg)",
    "button-hover-lift-y-subtle": "0",
    "button-hover-scale-subtle": "1",
    "input-font-size": "var(--body-2-size)",
    "input-line-height": "var(--body-2-line-height)",
    "input-letter-spacing": "var(--body-2-tracking)",
    "input-height-sm": "var(--control-height-sm)",
    "input-height-md": "var(--control-height-md)",
    "input-height-lg": "var(--control-height-lg)",
    "input-radius-sm": "var(--radius-pill)",
    "input-radius-md": "var(--radius-pill)",
    "input-radius-lg": "var(--radius-pill)",
    "input-padding-x-sm": "var(--control-padding-x-sm)",
    "input-padding-x-md": "var(--control-padding-x-md)",
    "input-padding-x-lg": "var(--control-padding-x-lg)",
    "toggle-width": "2.625rem",
    "toggle-height": "1.25rem",
    "toggle-padding": "0.125rem",
    "toggle-thumb-size": "1rem",
    "toggle-radius": "999px",
    "toggle-track-border-width": "0",
    "toggle-track-bg-off": "color-mix(in srgb, var(--cc-primary-color) 12%, transparent)",
    "toggle-track-bg-on": "var(--cc-primary-color)",
    "toggle-track-border-color": "transparent",
    "toggle-track-border-hover-color": "transparent",
    "toggle-thumb-bg": "rgb(255, 255, 255)",
    "toggle-thumb-shadow": "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.22), 0 0.03125rem 0.0625rem rgba(0, 0, 0, 0.14)",
    "toggle-thumb-shadow-active": "0 0.03125rem 0.0625rem rgba(0, 0, 0, 0.16)",
    "toggle-focus-ring-width": "0.125rem",
    "toggle-focus-ring-color": "color-mix(in srgb, var(--color-primary1) 22%, transparent)",
    "toggle-disabled-opacity": "0.42",
    "toggle-transition-duration": "220ms",
    "toggle-transition-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
    "toggle-thumb-translate-on": "calc(var(--toggle-width) - var(--toggle-thumb-size) - (2 * var(--toggle-padding)))",
    "account-control-width-max": "var(--control-width-auth-max)",
    "account-control-width-max-wide": "var(--control-width-auth-max-wide)",
    "account-content-gap-xs": "var(--control-gap-xs)",
    "account-content-gap-sm": "var(--control-gap-sm)",
    "account-content-gap-md": "var(--control-gap-md)",
    "account-content-gap-lg": "var(--control-gap-lg)",
    "account-content-gap-xl": "var(--control-gap-xl)",
    "account-button-height": "var(--button-height-md)",
    "account-button-radius": "var(--button-radius-md)",
    "account-button-padding-x": "var(--button-padding-x-lg)",
    "account-button-font-size": "var(--button-font-size)",
    "account-button-font-weight": "var(--button-font-weight)",
    "account-button-letter-spacing": "var(--button-letter-spacing)",
    "account-button-line-height": "var(--button-line-height)",
    "account-button-hover-lift-y": "var(--button-hover-lift-y-subtle)",
    "account-button-hover-scale": "var(--button-hover-scale-subtle)",
    "account-field-height": "var(--input-height-md)",
    "account-field-radius": "var(--input-radius-md)",
    "account-field-padding-x": "var(--input-padding-x-md)",
    "account-field-font-size": "var(--input-font-size)",
    "account-field-line-height": "var(--input-line-height)",
    "account-field-letter-spacing": "var(--input-letter-spacing)",
    "account-provider-button-height": "var(--account-button-height)",
    "account-provider-button-radius": "var(--account-button-radius)",
    "account-provider-button-padding-x": "var(--account-button-padding-x)",
    "account-text-action-font-size": "var(--body-3-size)",
    "account-text-action-line-height": "var(--body-3-line-height)",
    "account-text-action-letter-spacing": "var(--body-3-tracking)",
    "account-back-control-size": "var(--icon-size-md)",
    "account-back-icon-size": "1.12rem",
    "icon-size-xs": "0.9rem",
    "icon-size-sm": "1rem",
    "icon-size-md": "1.2rem",
    "icon-size-lg": "1.4rem",
    "icon-size-xl": "1.8rem",
    "glass-blur-sm": "10px",
    "glass-blur-md": "16px",
    "glass-blur-lg": "24px",
    "data-surface-bg": "var(--surface-primary, var(--bg-color))",
    "data-surface-bg-muted": "color-mix(in srgb, var(--cc-primary-color) 3%, transparent)",
    "data-surface-bg-hover": "var(--hover-bg-subtle)",
    "data-surface-border": "var(--cc-color)",
    "data-surface-border-hover": "var(--hover-border-subtle)",
    "data-surface-radius": "var(--radius-lg)",
    "data-surface-shadow": "var(--effect-shadow-none)",
    "data-surface-shadow-hover": "var(--effect-shadow-hover-subtle)",
    "data-metric-gap": "0.52rem",
    "data-metric-padding-y": "1rem",
    "data-metric-padding-x": "1rem",
    "data-metric-radius": "var(--radius-lg)",
    "data-metric-border-width": "1px",
    "data-metric-value-xl-size": "var(--data-value-xl-size)",
    "data-metric-value-xl-weight": "var(--data-value-xl-weight)",
    "data-metric-value-xl-line-height": "var(--data-value-xl-line-height)",
    "data-metric-value-xl-tracking": "var(--data-value-xl-tracking)",
    "data-metric-value-lg-size": "var(--data-value-lg-size)",
    "data-metric-value-lg-weight": "var(--data-value-lg-weight)",
    "data-metric-value-lg-line-height": "var(--data-value-lg-line-height)",
    "data-metric-value-lg-tracking": "var(--data-value-lg-tracking)",
    "data-metric-label-size": "var(--data-label-size)",
    "data-metric-label-weight": "var(--data-label-weight)",
    "data-metric-label-line-height": "var(--data-label-line-height)",
    "data-metric-label-tracking": "var(--data-label-tracking)",
    "data-metric-caption-size": "var(--data-caption-size)",
    "data-metric-caption-weight": "var(--data-caption-weight)",
    "data-metric-caption-line-height": "var(--data-caption-line-height)",
    "data-metric-caption-tracking": "var(--data-caption-tracking)",
    "data-grid-gap": "0.68rem",
    "data-grid-gap-compact": "0.72rem",
    "data-grid-column-min": "100%",
    "data-grid-column-min-compact": "11rem",
    "data-grid-section-gap": "1rem",
    "data-table-border": "var(--cc-color)",
    "data-table-border-hover": "var(--hover-border-subtle)",
    "data-table-header-bg": "color-mix(in srgb, var(--cc-primary-color) 4%, transparent)",
    "data-table-row-bg": "transparent",
    "data-table-row-bg-hover": "var(--hover-bg-subtle)",
    "data-table-row-bg-selected": "var(--selected-bg-subtle)",
    "data-table-cell-padding-y": "0.62rem",
    "data-table-cell-padding-x": "0.72rem",
    "data-table-cell-padding-y-dense": "0.42rem",
    "data-table-cell-padding-x-dense": "0.56rem",
    "chart-gap": "0.72rem",
    "chart-padding-y": "0.78rem",
    "chart-padding-x": "0.78rem",
    "chart-radius": "var(--radius-lg)",
    "chart-border": "var(--cc-color)",
    "chart-bg": "var(--data-surface-bg)",
    "chart-bg-muted": "var(--data-surface-bg-muted)",
    "chart-min-height-sm": "10rem",
    "chart-min-height-md": "13rem",
    "chart-min-height-lg": "18rem",
    "chart-axis-color": "var(--cc-secondary-color)",
    "chart-axis-opacity": "0.72",
    "chart-gridline-color": "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)",
    "chart-gridline-width": "1px",
    "chart-gridline-opacity": "0.62",
    "chart-annotation-color": "var(--cc-secondary-color)",
    "chart-annotation-opacity": "0.82",
    "chart-series-1": "var(--cc-primary-color)",
    "chart-series-2": "color-mix(in srgb, var(--cc-primary-color) 72%, transparent)",
    "chart-series-3": "color-mix(in srgb, var(--cc-primary-color) 52%, transparent)",
    "chart-series-4": "color-mix(in srgb, var(--cc-primary-color) 34%, transparent)",
    "chart-series-5": "color-mix(in srgb, var(--cc-primary-color) 22%, transparent)",
    "chart-series-success": "var(--feedback-success-color)",
    "chart-series-warning": "var(--feedback-warning-color)",
    "chart-series-error": "var(--feedback-error-color)",
    "chart-series-info": "var(--feedback-info-color)",
    "chart-series-neutral": "var(--feedback-neutral-color)",
    "chart-legend-gap": "0.56rem",
    "chart-legend-item-gap": "0.34rem",
    "chart-legend-marker-size": "0.48rem",
    "chart-legend-marker-radius": "999px",
    "chart-legend-color": "var(--cc-secondary-color)",
    "data-progress-track-bg": "color-mix(in srgb, var(--cc-primary-color) 8%, transparent)",
    "data-progress-fill-bg": "var(--cc-primary-color)",
    "data-progress-height-sm": "0.22rem",
    "data-progress-height-md": "0.34rem",
    "data-progress-height-lg": "0.52rem",
    "data-progress-radius": "999px",
    "data-gauge-track-width": "1px",
    "data-gauge-track-color": "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)",
    "data-gauge-dot-size": "0.56rem",
    "data-gauge-dot-bg": "var(--cc-primary-color)",
    "data-gauge-dot-border": "var(--bg-color)",
    "data-gauge-label-gap": "0.42rem",
    "data-state-positive-color": "var(--feedback-success-color)",
    "data-state-warning-color": "var(--feedback-warning-color)",
    "data-state-negative-color": "var(--feedback-error-color)",
    "data-state-neutral-color": "var(--feedback-neutral-color)",
    "data-state-info-color": "var(--feedback-info-color)",
    "data-state-positive-bg": "var(--feedback-success-bg)",
    "data-state-warning-bg": "var(--feedback-warning-bg)",
    "data-state-negative-bg": "var(--feedback-error-bg)",
    "data-state-neutral-bg": "var(--feedback-neutral-bg)",
    "data-state-info-bg": "var(--feedback-info-bg)",
    "editor-surface-bg": "var(--surface-primary, var(--bg-color))",
    "editor-surface-bg-muted": "color-mix(in srgb, var(--cc-primary-color) 3%, transparent)",
    "editor-surface-bg-hover": "var(--hover-bg-subtle)",
    "editor-surface-border": "var(--cc-color)",
    "editor-surface-border-hover": "var(--hover-border-subtle)",
    "editor-surface-radius": "var(--radius-lg)",
    "editor-surface-shadow": "var(--effect-shadow-none)",
    "editor-surface-shadow-focus": "var(--focus-ring-soft-shadow)",
    "editor-panel-gap": "0.84rem",
    "editor-panel-padding-y": "0.84rem",
    "editor-panel-padding-x": "0.84rem",
    "editor-panel-radius": "var(--radius-lg)",
    "editor-content-size": "var(--body-1-size)",
    "editor-content-weight": "var(--body-1-weight)",
    "editor-content-line-height": "var(--line-height-body-relaxed)",
    "editor-content-tracking": "var(--body-1-tracking)",
    "editor-content-color": "var(--cc-primary-color)",
    "editor-supporting-size": "var(--body-3-size)",
    "editor-supporting-weight": "var(--body-3-weight)",
    "editor-supporting-line-height": "var(--body-3-line-height)",
    "editor-supporting-tracking": "var(--body-3-tracking)",
    "editor-supporting-color": "var(--cc-secondary-color)",
    "editor-content-max-width": "100%",
    "editor-content-gap": "0.78rem",
    "editor-paragraph-gap": "0.78rem",
    "editor-toolbar-gap": "0.34rem",
    "editor-toolbar-padding-y": "0.34rem",
    "editor-toolbar-padding-x": "0.42rem",
    "editor-toolbar-radius": "var(--radius-md)",
    "editor-toolbar-bg": "color-mix(in srgb, var(--cc-primary-color) 4%, transparent)",
    "editor-toolbar-border": "var(--cc-color)",
    "editor-toolbar-control-size": "var(--control-sm-size)",
    "editor-toolbar-control-weight": "var(--control-sm-weight)",
    "editor-toolbar-control-line-height": "var(--control-sm-line-height)",
    "editor-toolbar-control-tracking": "var(--control-sm-tracking)",
    "editor-toolbar-control-color": "var(--cc-secondary-color)",
    "editor-toolbar-control-hover-color": "var(--hover-text-color)",
    "editor-toolbar-control-hover-bg": "var(--control-hover-bg)",
    "editor-selection-bg": "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)",
    "editor-selection-color": "var(--cc-primary-color)",
    "editor-block-selected-bg": "var(--selected-bg-subtle)",
    "editor-block-selected-border": "var(--selected-border-color)",
    "editor-caret-color": "var(--cc-primary-color)",
    "editor-caret-width": "1px",
    "editor-caret-opacity": "1",
    "editor-cursor-target-bg": "var(--hover-bg-subtle)",
    "editor-cursor-target-border": "var(--hover-border-subtle)",
    "editor-placeholder-size": "var(--body-2-size)",
    "editor-placeholder-weight": "var(--body-2-weight)",
    "editor-placeholder-line-height": "var(--body-2-line-height)",
    "editor-placeholder-tracking": "var(--body-2-tracking)",
    "editor-placeholder-color": "var(--cc-secondary-color)",
    "editor-placeholder-opacity": "0.62",
    "editor-markdown-syntax-color": "var(--cc-secondary-color)",
    "editor-markdown-syntax-opacity": "0.72",
    "editor-markdown-heading-color": "var(--cc-primary-color)",
    "editor-markdown-link-color": "var(--cc-primary-color)",
    "editor-markdown-link-underline-color": "var(--cc-color)",
    "editor-markdown-code-bg": "color-mix(in srgb, var(--cc-primary-color) 6%, transparent)",
    "editor-markdown-code-border": "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)",
    "editor-block-gap": "0.84rem",
    "editor-block-padding-y": "0.72rem",
    "editor-block-padding-x": "0.84rem",
    "editor-block-radius": "var(--radius-md)",
    "editor-block-border": "var(--cc-color)",
    "editor-block-bg": "color-mix(in srgb, var(--cc-primary-color) 3%, transparent)",
    "editor-quote-border-width": "1px",
    "editor-quote-border-color": "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)",
    "editor-quote-padding-x": "0.92rem",
    "editor-quote-color": "var(--cc-secondary-color)",
    "editor-list-indent": "1.2rem",
    "editor-list-gap": "0.34rem",
    "editor-divider-color": "var(--cc-color)",
    "editor-divider-width": "1px",
    "editor-inline-code-size": "var(--code-inline-size)",
    "editor-inline-code-weight": "var(--code-inline-weight)",
    "editor-inline-code-line-height": "var(--code-inline-line-height)",
    "editor-inline-code-tracking": "var(--code-inline-tracking)",
    "editor-inline-code-bg": "var(--editor-markdown-code-bg)",
    "editor-inline-code-border": "var(--editor-markdown-code-border)",
    "editor-inline-code-radius": "var(--radius-xs)",
    "editor-inline-code-padding-y": "0.08rem",
    "editor-inline-code-padding-x": "0.24rem",
    "editor-link-color": "var(--cc-primary-color)",
    "editor-link-hover-color": "var(--hover-text-color)",
    "editor-link-underline-color": "var(--cc-color)",
    "editor-link-underline-hover-color": "var(--hover-border-medium)",
    "editor-highlight-bg": "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)",
    "editor-highlight-color": "var(--cc-primary-color)",
    "editor-status-draft-color": "var(--feedback-neutral-text)",
    "editor-status-saving-color": "var(--feedback-info-text)",
    "editor-status-synced-color": "var(--feedback-success-text)",
    "editor-status-error-color": "var(--feedback-error-text)",
    "editor-status-warning-color": "var(--feedback-warning-text)",
    "editor-status-size": "var(--status-sm-size)",
    "editor-status-weight": "var(--status-sm-weight)",
    "editor-status-line-height": "var(--status-sm-line-height)",
    "editor-status-tracking": "var(--status-sm-tracking)",
    "editor-publishing-panel-bg": "var(--editor-surface-bg-muted)",
    "editor-publishing-panel-border": "var(--editor-surface-border)",
    "editor-publishing-panel-radius": "var(--radius-lg)",
    "editor-publishing-panel-gap": "0.72rem",
    "editor-review-pending-bg": "var(--feedback-warning-bg)",
    "editor-review-pending-border": "var(--feedback-warning-border)",
    "editor-review-approved-bg": "var(--feedback-success-bg)",
    "editor-review-approved-border": "var(--feedback-success-border)",
    "editor-review-rejected-bg": "var(--feedback-error-bg)",
    "editor-review-rejected-border": "var(--feedback-error-border)",
    "feedback-success-color": "#2f8f5b",
    "feedback-warning-color": "#b9822b",
    "feedback-error-color": "#b84a4a",
    "feedback-info-color": "#4f7fa8",
    "feedback-neutral-color": "var(--cc-secondary-color)",
    "status-active-color": "var(--feedback-success-color)",
    "status-pending-color": "var(--feedback-warning-color)",
    "status-error-color": "var(--feedback-error-color)",
    "status-info-color": "var(--feedback-info-color)",
    "status-muted-color": "var(--feedback-neutral-color)",
    "feedback-success-bg": "color-mix(in srgb, var(--feedback-success-color) 10%, transparent)",
    "feedback-warning-bg": "color-mix(in srgb, var(--feedback-warning-color) 10%, transparent)",
    "feedback-error-bg": "color-mix(in srgb, var(--feedback-error-color) 10%, transparent)",
    "feedback-info-bg": "color-mix(in srgb, var(--feedback-info-color) 10%, transparent)",
    "feedback-neutral-bg": "color-mix(in srgb, var(--feedback-neutral-color) 8%, transparent)",
    "feedback-success-bg-strong": "color-mix(in srgb, var(--feedback-success-color) 16%, transparent)",
    "feedback-warning-bg-strong": "color-mix(in srgb, var(--feedback-warning-color) 16%, transparent)",
    "feedback-error-bg-strong": "color-mix(in srgb, var(--feedback-error-color) 16%, transparent)",
    "feedback-info-bg-strong": "color-mix(in srgb, var(--feedback-info-color) 16%, transparent)",
    "feedback-neutral-bg-strong": "color-mix(in srgb, var(--feedback-neutral-color) 12%, transparent)",
    "feedback-success-border": "color-mix(in srgb, var(--feedback-success-color) 28%, transparent)",
    "feedback-warning-border": "color-mix(in srgb, var(--feedback-warning-color) 30%, transparent)",
    "feedback-error-border": "color-mix(in srgb, var(--feedback-error-color) 32%, transparent)",
    "feedback-info-border": "color-mix(in srgb, var(--feedback-info-color) 28%, transparent)",
    "feedback-neutral-border": "color-mix(in srgb, var(--feedback-neutral-color) 18%, transparent)",
    "feedback-success-text": "var(--feedback-success-color)",
    "feedback-warning-text": "var(--feedback-warning-color)",
    "feedback-error-text": "var(--feedback-error-color)",
    "feedback-info-text": "var(--feedback-info-color)",
    "feedback-neutral-text": "var(--feedback-neutral-color)",
    "feedback-title-size": "var(--alert-title-size)",
    "feedback-title-weight": "var(--alert-title-weight)",
    "feedback-title-line-height": "var(--alert-title-line-height)",
    "feedback-title-tracking": "var(--alert-title-tracking)",
    "feedback-body-size": "var(--alert-body-size)",
    "feedback-body-weight": "var(--alert-body-weight)",
    "feedback-body-line-height": "var(--alert-body-line-height)",
    "feedback-body-tracking": "var(--alert-body-tracking)",
    "feedback-icon-size-sm": "0.78rem",
    "feedback-icon-size-md": "0.96rem",
    "feedback-icon-size-lg": "1.12rem",
    "feedback-icon-opacity": "0.82",
    "feedback-icon-opacity-strong": "1",
    "status-badge-gap": "0.34rem",
    "status-badge-padding-y": "0.22rem",
    "status-badge-padding-x": "0.48rem",
    "status-badge-radius": "999px",
    "status-badge-border-width": "1px",
    "status-badge-size": "var(--status-sm-size)",
    "status-badge-weight": "var(--status-sm-weight)",
    "status-badge-line-height": "var(--status-sm-line-height)",
    "status-badge-tracking": "var(--status-sm-tracking)",
    "status-badge-active-bg": "var(--feedback-success-bg)",
    "status-badge-active-border": "var(--feedback-success-border)",
    "status-badge-active-text": "var(--feedback-success-text)",
    "status-badge-pending-bg": "var(--feedback-warning-bg)",
    "status-badge-pending-border": "var(--feedback-warning-border)",
    "status-badge-pending-text": "var(--feedback-warning-text)",
    "status-badge-error-bg": "var(--feedback-error-bg)",
    "status-badge-error-border": "var(--feedback-error-border)",
    "status-badge-error-text": "var(--feedback-error-text)",
    "status-badge-info-bg": "var(--feedback-info-bg)",
    "status-badge-info-border": "var(--feedback-info-border)",
    "status-badge-info-text": "var(--feedback-info-text)",
    "status-badge-neutral-bg": "var(--feedback-neutral-bg)",
    "status-badge-neutral-border": "var(--feedback-neutral-border)",
    "status-badge-neutral-text": "var(--feedback-neutral-text)",
    "alert-gap": "0.68rem",
    "alert-padding-y": "0.92rem",
    "alert-padding-x": "1rem",
    "alert-radius": "var(--radius-md)",
    "alert-border-width": "1px",
    "alert-success-bg": "var(--feedback-success-bg-strong)",
    "alert-success-border": "var(--feedback-success-border)",
    "alert-success-text": "var(--feedback-success-text)",
    "alert-warning-bg": "var(--feedback-warning-bg-strong)",
    "alert-warning-border": "var(--feedback-warning-border)",
    "alert-warning-text": "var(--feedback-warning-text)",
    "alert-error-bg": "var(--feedback-error-bg-strong)",
    "alert-error-border": "var(--feedback-error-border)",
    "alert-error-text": "var(--feedback-error-text)",
    "alert-info-bg": "var(--feedback-info-bg-strong)",
    "alert-info-border": "var(--feedback-info-border)",
    "alert-info-text": "var(--feedback-info-text)",
    "alert-neutral-bg": "var(--feedback-neutral-bg-strong)",
    "alert-neutral-border": "var(--feedback-neutral-border)",
    "alert-neutral-text": "var(--feedback-neutral-text)",
    "toast-gap": "0.52rem",
    "toast-padding-y": "0.78rem",
    "toast-padding-x": "0.92rem",
    "toast-radius": "var(--radius-md)",
    "toast-border-width": "1px",
    "toast-shadow": "var(--effect-shadow-hover-subtle)",
    "toast-success-bg": "var(--feedback-success-bg-strong)",
    "toast-success-border": "var(--feedback-success-border)",
    "toast-success-text": "var(--feedback-success-text)",
    "toast-warning-bg": "var(--feedback-warning-bg-strong)",
    "toast-warning-border": "var(--feedback-warning-border)",
    "toast-warning-text": "var(--feedback-warning-text)",
    "toast-error-bg": "var(--feedback-error-bg-strong)",
    "toast-error-border": "var(--feedback-error-border)",
    "toast-error-text": "var(--feedback-error-text)",
    "toast-info-bg": "var(--feedback-info-bg-strong)",
    "toast-info-border": "var(--feedback-info-border)",
    "toast-info-text": "var(--feedback-info-text)",
    "validation-success-color": "var(--feedback-success-color)",
    "validation-warning-color": "var(--feedback-warning-color)",
    "validation-error-color": "var(--feedback-error-color)",
    "validation-info-color": "var(--feedback-info-color)",
    "validation-success-bg": "var(--feedback-success-bg)",
    "validation-warning-bg": "var(--feedback-warning-bg)",
    "validation-error-bg": "var(--feedback-error-bg)",
    "validation-info-bg": "var(--feedback-info-bg)",
    "validation-success-border": "var(--feedback-success-border)",
    "validation-warning-border": "var(--feedback-warning-border)",
    "validation-error-border": "var(--feedback-error-border)",
    "validation-info-border": "var(--feedback-info-border)",
    "system-message-gap": "0.68rem",
    "system-message-padding-y": "1rem",
    "system-message-padding-x": "1rem",
    "system-message-radius": "var(--radius-lg)",
    "system-message-bg": "var(--feedback-neutral-bg)",
    "system-message-border": "var(--feedback-neutral-border)",
    "system-message-title-color": "var(--cc-primary-color)",
    "system-message-body-color": "var(--cc-secondary-color)",
    "shape-control-radius": "var(--radius-pill)",
    "shape-toggle-radius": "var(--radius-pill)",
    "shape-icon-button-radius": "var(--radius-circle)",
    "shape-card-radius": "var(--radius-lg)",
    "shape-panel-radius": "var(--radius-xl)",
    "shape-dialog-radius": "var(--radius-dialog)",
    "shape-overlay-radius": "var(--radius-dialog)",
    "shape-subpanel-radius": "var(--radius-lg)",
    "control-radius": "var(--shape-control-radius)",
    "control-radius-pill": "var(--radius-pill)",
    "control-gap": "0.42rem",
    "control-font-size": "0.9rem",
    "control-font-weight": "400",
    "control-line-height": "1.2",
    "control-tracking": "-0.01em",
    "control-width-min": "2.75rem",
    "border-width-thin": "1px",
    "space-8": "2rem",
    "z-above": "20",
    "viewport-width": "100vw",
    "viewport-height": "100vh",
    "control-surface": "color-mix(in srgb, var(--surface-color, var(--bg-color)) 82%, transparent)",
    "control-surface-hover": "var(--hover-bg-medium)",
    "control-surface-active": "var(--active-bg-medium)",
    "control-border-unified": "var(--control-border-color, var(--cc-color))",
    "control-border-hover-unified": "var(--hover-border-medium)",
    "control-text-unified": "var(--cc-color)",
    "control-text-hover-unified": "var(--hover-text-color)",
    "close-control-size": "2.4rem",
    "close-control-radius": "var(--shape-icon-button-radius)",
    "close-control-line-width": "1.05rem",
    "close-control-line-height": "1px",
    "close-control-line-radius": "var(--radius-pill)",
    "close-control-surface": "transparent",
    "close-control-surface-hover": "var(--hover-bg-medium)",
    "close-control-border": "transparent",
    "close-control-border-hover": "var(--hover-border-medium)",
    "close-control-color": "var(--cc-color)",
    "close-control-color-hover": "var(--cc-color)",
    "panel-surface-unified": "color-mix(in srgb, var(--surface-color, var(--bg-color)) 86%, transparent)",
    "panel-border-unified": "var(--control-border-color, var(--cc-color))",
    "panel-shadow-unified": "var(--dialog-overlay-shadow)",
    "panel-blur-unified": "var(--dialog-overlay-panel-blur)",
    "panel-saturate-unified": "1.18",
    "panel-radius-unified": "var(--shape-panel-radius)",
    "dialog-radius-unified": "var(--shape-dialog-radius)",
    "overlay-radius-unified": "var(--shape-overlay-radius)",
    "overlay-motion-duration": "320ms",
    "overlay-motion-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
    "overlay-transform-closed": "var(--dialog-overlay-transform-closed)",
    "overlay-transform-open": "var(--dialog-overlay-transform-open)",
    "overlay-opacity-closed": "0",
    "overlay-opacity-open": "1",
    "interaction-motion-fast": "180ms",
    "interaction-motion-medium": "220ms",
    "interaction-motion-slow": "320ms",
    "interaction-ease-standard": "cubic-bezier(0.22, 1, 0.36, 1)",
    "interaction-transition-control": "background-color var(--interaction-motion-medium) var(--interaction-ease-standard), border-color var(--interaction-motion-medium) var(--interaction-ease-standard), color var(--interaction-motion-medium) var(--interaction-ease-standard), opacity var(--interaction-motion-medium) var(--interaction-ease-standard), transform var(--interaction-motion-medium) var(--interaction-ease-standard)",
    "state-opacity-idle": "1",
    "state-opacity-hover-subtle": "0.82",
    "state-opacity-hover-medium": "0.9",
    "state-opacity-hover-strong": "1",
    "state-opacity-active": "0.72",
    "state-opacity-selected": "1",
    "state-opacity-disabled": "0.38",
    "state-opacity-muted": "0.62",
    "hover-bg-subtle": "color-mix(in srgb, var(--cc-primary-color) 4%, transparent)",
    "hover-bg-medium": "color-mix(in srgb, var(--cc-primary-color) 7%, transparent)",
    "hover-bg-strong": "color-mix(in srgb, var(--cc-primary-color) 11%, transparent)",
    "hover-bg-inverted": "var(--cc-primary-color)",
    "hover-text-color": "var(--cc-primary-color)",
    "hover-text-muted-color": "var(--cc-secondary-color)",
    "hover-text-inverted-color": "var(--bg-color)",
    "hover-border-subtle": "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)",
    "hover-border-medium": "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)",
    "hover-border-strong": "color-mix(in srgb, var(--cc-primary-color) 28%, transparent)",
    "focus-ring-width": "2px",
    "focus-ring-offset": "3px",
    "focus-ring-color": "color-mix(in srgb, var(--cc-primary-color) 52%, transparent)",
    "focus-ring-shadow": "0 0 0 var(--focus-ring-width) var(--focus-ring-color)",
    "focus-ring-soft-color": "color-mix(in srgb, var(--cc-primary-color) 24%, transparent)",
    "focus-ring-soft-shadow": "0 0 0 var(--focus-ring-width) var(--focus-ring-soft-color)",
    "active-bg-subtle": "color-mix(in srgb, var(--cc-primary-color) 8%, transparent)",
    "active-bg-medium": "color-mix(in srgb, var(--cc-primary-color) 12%, transparent)",
    "active-border-color": "color-mix(in srgb, var(--cc-primary-color) 24%, transparent)",
    "active-transform": "translateY(0)",
    "active-scale": "0.99",
    "selected-bg-subtle": "color-mix(in srgb, var(--cc-primary-color) 6%, transparent)",
    "selected-bg-medium": "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)",
    "selected-text-color": "var(--cc-primary-color)",
    "selected-border-color": "color-mix(in srgb, var(--cc-primary-color) 20%, transparent)",
    "selected-indicator-color": "var(--cc-primary-color)",
    "selected-indicator-opacity": "1",
    "disabled-opacity": "var(--state-opacity-disabled)",
    "disabled-cursor": "not-allowed",
    "disabled-filter": "saturate(0.4)",
    "effect-lift-y-subtle": "-1px",
    "effect-lift-y-medium": "-2px",
    "effect-lift-y-strong": "-4px",
    "effect-scale-subtle": "1.01",
    "effect-scale-medium": "1.018",
    "effect-scale-strong": "1.028",
    "effect-press-scale": "var(--active-scale)",
    "hover-transform-none": "none",
    "hover-transform-lift-subtle": "translateY(var(--effect-lift-y-subtle))",
    "hover-transform-lift-medium": "translateY(var(--effect-lift-y-medium))",
    "hover-transform-scale-subtle": "scale(var(--effect-scale-subtle))",
    "effect-blur-xs": "4px",
    "effect-blur-sm": "8px",
    "effect-blur-md": "14px",
    "effect-blur-lg": "22px",
    "effect-blur-xl": "34px",
    "effect-saturate-soft": "saturate(1.08)",
    "effect-saturate-strong": "saturate(1.18)",
    "effect-brightness-hover": "brightness(1.04)",
    "effect-brightness-muted": "brightness(0.92)",
    "effect-shadow-none": "none",
    "effect-shadow-hover-subtle": "0 10px 28px color-mix(in srgb, var(--cc-primary-color) 8%, transparent)",
    "effect-shadow-hover-medium": "0 18px 52px color-mix(in srgb, var(--cc-primary-color) 12%, transparent)",
    "effect-shadow-hover-strong": "0 28px 80px color-mix(in srgb, var(--cc-primary-color) 16%, transparent)",
    "overlay-opacity-subtle": "0.18",
    "overlay-opacity-medium": "0.38",
    "overlay-opacity-strong": "0.62",
    "overlay-bg-subtle": "color-mix(in srgb, var(--bg-color) 72%, transparent)",
    "overlay-bg-medium": "color-mix(in srgb, var(--bg-color) 84%, transparent)",
    "overlay-bg-strong": "color-mix(in srgb, var(--bg-color) 92%, transparent)",
    "dialog-overlay-viewport-gap": "24px",
    "dialog-overlay-viewport-gap-mobile": "20px",
    "dialog-overlay-shadow": "0 20px 60px color-mix(in srgb, var(--shadow-color, #000000) 8%, transparent)",
    "dialog-overlay-shadow-dark": "0 24px 70px color-mix(in srgb, var(--shadow-color, #000000) 24%, transparent)",
    "dialog-overlay-row-shadow": "0 14px 34px color-mix(in srgb, var(--shadow-color, #000000) 4%, transparent)",
    "dialog-overlay-row-shadow-light": "0 14px 34px color-mix(in srgb, var(--shadow-color, #000000) 3.5%, transparent)",
    "dialog-overlay-row-shadow-dark": "0 14px 34px color-mix(in srgb, var(--shadow-color, #000000) 18%, transparent)",
    "dialog-overlay-radius": "1.9rem",
    "dialog-overlay-radius-mobile": "1.5rem",
    "dialog-overlay-card-radius": "1rem",
    "dialog-overlay-subitem-radius": "0.9rem",
    "dialog-overlay-pill-radius": "999px",
    "dialog-overlay-backdrop-blur": "16px",
    "dialog-overlay-panel-blur": "18px",
    "dialog-overlay-footer-separator-opacity": "0.35",
    "dialog-overlay-shell-gap": "0.9rem",
    "dialog-overlay-panel-min-height": "24rem",
    "dialog-overlay-panel-padding-y": "1.25rem",
    "dialog-overlay-panel-padding-x": "1.25rem",
    "dialog-overlay-panel-padding-y-mobile": "0.95rem",
    "dialog-overlay-panel-padding-x-mobile": "0.95rem",
    "dialog-overlay-transform-closed": "translateY(1.2rem) scale(0.985)",
    "dialog-overlay-transform-open": "translateY(0) scale(1)",
    "dialog-overlay-opacity-closed": "0",
    "dialog-overlay-opacity-open": "1",
    "dialog-consent-header-gap": "0.82rem",
    "dialog-consent-header-gap-mobile": "0.72rem",
    "dialog-consent-header-padding-bottom": "1.14rem",
    "dialog-consent-header-padding-bottom-mobile": "0.97rem",
    "dialog-consent-body-padding-top": "0.64rem",
    "dialog-consent-body-padding-top-mobile": "0.51rem",
    "dialog-consent-body-padding-inline": "0.52rem",
    "dialog-consent-body-padding-inline-mobile": "0.36rem",
    "dialog-consent-content-gutter": "1.42rem",
    "dialog-consent-content-gutter-mobile": "1.08rem",
    "dialog-consent-body-edge-inset": "0.52rem",
    "dialog-consent-body-edge-inset-mobile": "0.36rem",
    "dialog-consent-row-margin-bottom": "1rem",
    "dialog-consent-subitems-margin-top": "0.06rem",
    "dialog-consent-settings-intro-margin-bottom": "1rem",
    "dialog-consent-eyebrow-size": "0.78rem",
    "dialog-consent-eyebrow-weight": "400",
    "dialog-consent-eyebrow-line-height": "1.2",
    "dialog-consent-eyebrow-tracking": "0.08em",
    "dialog-consent-copy-size": "0.95rem",
    "dialog-consent-copy-weight": "300",
    "dialog-consent-copy-line-height": "1.58",
    "dialog-consent-copy-tracking": "-0.015em",
    "dialog-consent-note-legal-size": "0.8rem",
    "dialog-consent-note-legal-line-height": "1.45",
    "dialog-consent-strong-weight": "400",
    "dialog-consent-mobile-title-size": "1.46rem",
    "dialog-consent-mobile-copy-size": "0.9rem",
    "dialog-consent-action-gap": "0.72rem",
    "dialog-consent-action-min-height": "3rem",
    "dialog-consent-action-min-height-mobile": "2.86rem",
    "dialog-consent-action-padding-y": "0.82rem",
    "dialog-consent-action-padding-x": "1rem",
    "dialog-consent-action-padding-y-mobile": "0.78rem",
    "dialog-consent-action-padding-x-mobile": "0.94rem",
    "dialog-consent-action-size": "0.94rem",
    "dialog-consent-action-weight": "300",
    "dialog-consent-action-line-height": "1.2",
    "dialog-consent-action-tracking": "-0.015em",
    "dialog-consent-row-topline-gap": "0.72rem",
    "dialog-consent-row-topline-gap-mobile": "0.62rem",
    "dialog-consent-row-topline-padding-y": "1rem",
    "dialog-consent-row-topline-padding-y-mobile": "0.92rem",
    "dialog-consent-row-summary-gap": "0.8rem",
    "dialog-consent-row-copy-gap": "0.22rem",
    "dialog-consent-row-title-size": "0.94rem",
    "dialog-consent-row-title-weight": "400",
    "dialog-consent-row-title-line-height": "1.2",
    "dialog-consent-row-title-tracking": "-0.016em",
    "dialog-consent-row-copy-size": "0.84rem",
    "dialog-consent-row-copy-size-mobile": "0.78rem",
    "dialog-consent-row-copy-weight": "300",
    "dialog-consent-row-copy-line-height": "1.5",
    "dialog-consent-row-copy-tracking": "-0.012em",
    "dialog-consent-row-status-size": "0.76rem",
    "dialog-consent-row-status-weight": "400",
    "dialog-consent-row-status-line-height": "1.2",
    "dialog-consent-row-status-tracking": "-0.01em",
    "dialog-consent-row-detail-gap": "0.62rem",
    "dialog-consent-row-detail-padding-y": "0.92rem",
    "dialog-consent-row-detail-padding-y-mobile": "0.82rem",
    "dialog-consent-row-link-size": "0.8rem",
    "dialog-consent-row-link-weight": "400",
    "dialog-consent-row-link-line-height": "1.3",
    "dialog-consent-row-link-tracking": "-0.01em",
    "dialog-consent-row-hover": "color-mix(in srgb, var(--cc-primary-color) 12%, transparent)",
    "dialog-consent-row-icon-size": "1.68rem",
    "dialog-consent-row-expand-size": "0.92rem",
    "dialog-consent-row-expand-icon-size": "0.68rem",
    "dialog-consent-row-expand-icon-size-mobile": "0.64rem",
    "dialog-consent-brand-gap": "1.04rem",
    "dialog-consent-brand-margin-top": "0.28rem",
    "dialog-consent-brand-margin-bottom": "0.78rem",
    "dialog-consent-brand-symbol-wrap-size": "2.4rem",
    "dialog-consent-brand-symbol-size": "2.3rem",
    "dialog-consent-brand-symbol-size-mobile": "1.9rem",
    "dialog-consent-brand-wordmark-width": "11.8rem",
    "dialog-consent-brand-wordmark-height": "0.96rem",
    "dialog-consent-brand-wordmark-height-mobile": "0.84rem",
    "dialog-consent-learning-shell-min-height": "10.5rem",
    "dialog-consent-learning-shell-radius": "1rem",
    "dialog-consent-learning-shell-padding": "0.88rem",
    "dialog-consent-learning-card-padding-mobile": "0.84rem",
    "dialog-consent-learning-icon-size": "1.68rem",
    "dialog-consent-learning-rail-gap": "1rem",
    "dialog-consent-learning-card-gap": "0.82rem",
    "dialog-consent-learning-copy-gap": "0.28rem",
    "dialog-consent-copy-stack-gap": "0.56rem",
    "dialog-consent-learning-title-size": "0.94rem",
    "dialog-consent-learning-title-size-mobile": "0.9rem",
    "dialog-consent-learning-title-weight": "400",
    "dialog-consent-learning-title-line-height": "1.22",
    "dialog-consent-learning-title-tracking": "-0.016em",
    "dialog-consent-learning-copy-size": "0.84rem",
    "dialog-consent-learning-copy-size-mobile": "0.8rem",
    "dialog-consent-learning-copy-weight": "300",
    "dialog-consent-learning-copy-line-height": "1.52",
    "dialog-consent-learning-copy-tracking": "-0.01em",
    "dialog-consent-subitem-gap": "0.62rem",
    "dialog-consent-subitem-layout-gap": "0.9rem",
    "dialog-consent-subitem-padding-y": "0.92rem",
    "dialog-consent-subitem-state-margin-top-mobile": "0.12rem",
    "dialog-consent-subitem-copy-gap": "0.2rem",
    "dialog-consent-subitem-title-size": "0.86rem",
    "dialog-consent-subitem-title-weight": "400",
    "dialog-consent-subitem-title-line-height": "1.2",
    "dialog-consent-subitem-title-tracking": "-0.014em",
    "dialog-consent-subitem-copy-size": "0.76rem",
    "dialog-consent-subitem-copy-weight": "300",
    "dialog-consent-subitem-copy-line-height": "1.45",
    "dialog-consent-subitem-copy-tracking": "-0.01em",
    "dialog-consent-subitem-state-size": "0.74rem",
    "dialog-consent-subitem-state-weight": "400",
    "dialog-consent-subitem-state-line-height": "1.2",
    "dialog-consent-subitem-state-tracking": "-0.01em",
    "dialog-consent-sticky-actions-padding-top": "0.72rem",
    "dialog-consent-sticky-actions-padding-top-mobile": "0.62rem",
    "dialog-consent-sticky-actions-padding-bottom": "1.12rem",
    "dialog-consent-sticky-actions-padding-bottom-mobile": "1rem",
    "dialog-consent-footer-gap": "1rem",
    "dialog-consent-footer-gap-mobile": "0.78rem",
    "dialog-consent-footer-link-row-gap": "0.5rem",
    "dialog-consent-footer-separator-size": "0.95rem",
    "dialog-consent-footer-separator-weight": "400",
    "dialog-consent-footer-separator-line-height": "1",
    "dialog-consent-footer-separator-margin-inline": "1rem",
    "dialog-consent-footer-link-size": "0.78rem",
    "dialog-consent-footer-link-weight": "400",
    "dialog-consent-footer-link-line-height": "1.3",
    "dialog-consent-footer-link-tracking": "-0.01em",
    "dialog-consent-footer-language-gap": "0.42rem",
    "dialog-consent-footer-language-min-height": "2.2rem",
    "dialog-consent-footer-language-padding-y": "0.56rem",
    "dialog-consent-footer-language-padding-x": "0.82rem",
    "dialog-consent-footer-language-label-size": "0.74rem",
    "dialog-consent-footer-language-label-weight": "400",
    "dialog-consent-footer-language-label-line-height": "1.2",
    "dialog-consent-footer-language-label-tracking": "-0.01em",
    "dialog-consent-footer-language-value-size": "0.78rem",
    "dialog-consent-footer-language-value-weight": "400",
    "dialog-consent-footer-language-value-line-height": "1.2",
    "dialog-consent-footer-language-value-tracking": "-0.01em",
    "feedback-success-bg-hover": "color-mix(in srgb, var(--feedback-success-color, var(--cc-primary-color)) 10%, transparent)",
    "feedback-warning-bg-hover": "color-mix(in srgb, var(--feedback-warning-color, var(--cc-primary-color)) 10%, transparent)",
    "feedback-error-bg-hover": "color-mix(in srgb, var(--feedback-error-color, var(--cc-primary-color)) 10%, transparent)",
    "feedback-info-bg-hover": "color-mix(in srgb, var(--feedback-info-color, var(--cc-primary-color)) 10%, transparent)",
    "nav-hover-text-color": "var(--hover-text-color)",
    "nav-hover-opacity": "var(--state-opacity-hover-strong)",
    "nav-hover-bg": "transparent",
    "nav-hover-transform": "var(--hover-transform-none)",
    "nav-hover-text-only-bg": "transparent",
    "nav-hover-text-only-border": "transparent",
    "nav-hover-text-only-color": "var(--hover-text-color)",
    "nav-active-text-color": "var(--selected-text-color)",
    "nav-active-indicator-color": "var(--selected-indicator-color)",
    "nav-active-indicator-opacity": "var(--selected-indicator-opacity)",
    "local-nav-hover-text-color": "var(--hover-text-color)",
    "local-nav-hover-opacity": "var(--state-opacity-hover-strong)",
    "local-nav-hover-text-only-bg": "var(--nav-hover-text-only-bg)",
    "local-nav-hover-text-only-border": "var(--nav-hover-text-only-border)",
    "local-nav-hover-text-only-color": "var(--nav-hover-text-only-color)",
    "local-nav-active-text-color": "var(--selected-text-color)",
    "local-nav-active-indicator-color": "var(--selected-indicator-color)",
    "interactive-icon-stroke-width": "0",
    "interactive-icon-stroke-width-hover": "var(--interactive-icon-stroke-width)",
    "interactive-icon-stroke-width-active": "1.5",
    "interactive-icon-stroke-width-selected": "var(--interactive-icon-stroke-width-active)",
    "interactive-icon-stroke-width-current": "var(--interactive-icon-stroke-width-active)",
    "interactive-icon-stroke-width-disabled": "var(--interactive-icon-stroke-width)",
    "interactive-icon-stroke-transition": "none",
    "interactive-icon-transform": "none",
    "toggle-track-bg": "var(--toggle-track-bg-off)",
    "control-hover-bg": "var(--hover-bg-subtle)",
    "control-hover-border-color": "var(--hover-border-medium)",
    "control-hover-text-color": "var(--hover-text-color)",
    "control-hover-transform": "var(--hover-transform-lift-subtle)",
    "control-active-bg": "var(--active-bg-medium)",
    "control-active-border-color": "var(--active-border-color)",
    "control-active-transform": "scale(var(--effect-press-scale))",
    "button-hover-bg": "var(--hover-bg-medium)",
    "button-hover-border-color": "var(--hover-border-medium)",
    "button-hover-text-color": "var(--hover-text-color)",
    "button-hover-transform": "var(--hover-transform-lift-subtle)",
    "shape-composer-radius": "1rem",
    "control-radius-composer": "var(--shape-composer-radius)",
    "profile-hover-bg": "var(--hover-bg-subtle)",
    "profile-hover-border-color": "var(--hover-border-subtle)",
    "profile-hover-transform": "var(--hover-transform-lift-subtle)",
    "profile-card-hover-shadow": "var(--effect-shadow-hover-subtle)",
    "profile-media-hover-filter": "var(--effect-brightness-hover)",
    "product-hover-bg": "var(--hover-bg-subtle)",
    "product-hover-border-color": "var(--hover-border-medium)",
    "product-hover-transform": "var(--hover-transform-lift-subtle)",
    "product-card-hover-shadow": "var(--effect-shadow-hover-subtle)",
    "product-media-hover-filter": "var(--effect-brightness-hover)",
    "marketing-hover-bg": "var(--hover-bg-medium)",
    "marketing-hover-border-color": "var(--hover-border-strong)",
    "marketing-hover-transform": "var(--hover-transform-lift-medium)",
    "marketing-card-hover-shadow": "var(--effect-shadow-hover-medium)",
    "marketing-media-hover-filter": "var(--effect-brightness-hover)",
    "spacing-none": "0",
    "size-full": "100%",
    "grid-column-single": "1fr",
    "border-width-hairline": "1px",
    "site-max-width": "1320px",
    "site-header-height": "72px",
    "header-height": "var(--site-header-height)",
    "footer-height": "72px",
    "footer-gutter": "var(--site-gutter, 24px)",
    "surface-color": "var(--bg-color, transparent)",
    "shadow-color": "#000000",
    "panel-width": "960px",
    "content-width": "var(--site-max-width)",
    "page-gutter": "var(--site-gutter, 24px)",
    "z-overlay-modal": "80",
    "background-color": "var(--bg-color, transparent)",
    "bg-primary-color": "var(--bg-color, transparent)",
    "border-soft": "var(--cc-color, color-mix(in srgb, var(--cc-color, #ffffff) 12%, transparent))",
    "control-border-color": "var(--control-border, var(--cc-color, color-mix(in srgb, var(--cc-color, #ffffff) 12%, transparent)))",
    "cursor-accent-color": "var(--link-color, var(--color-primary1, currentColor))",
    "duration-instant": "0ms",
    "font-family": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
    "font-family-sans": "var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif)",
    "home-panel-radius": "var(--cc-home-platform-radius)",
    "menu-icon": "currentColor",
    "space-2": "0.5rem",
    "space-3": "0.75rem",
    "space-4": "1rem",
    "space-5": "1.25rem",
    "space-6": "1.5rem",
    "space-9": "2.25rem",
    "spacing-2xs": "0.375rem",
    "spacing-3xs": "0.25rem",
    "state-opacity-high": "0.88",
    "state-opacity-strong": "1",
    "status-danger-color": "#d94c4c",
    "status-success-color": "#4f9f6e",
    "status-warning-color": "#c79a3b",
    "surface-hover": "color-mix(in srgb, var(--surface-color) 88%, var(--cc-color, #ffffff) 12%)",
    "text-muted-color": "var(--cc-secondary-color, color-mix(in srgb, var(--cc-color, #ffffff) 62%, transparent))",
    "type-body-regular-weight": "400",
    "type-body-sm-line-height": "1.5",
    "type-body-sm-size": "0.875rem",
    "type-body-tracking": "0",
    "site-gutter": "4vw",
    "site-rail-width": "calc(100% - (var(--site-gutter) * 2))",
    "site-gutter-min": "18px",
    "site-gutter-max": "96px",
    "site-inline-gutter": "clamp(var(--site-gutter-min), var(--site-gutter), var(--site-gutter-max))",
    "site-rail-measure": "min(var(--site-rail-width), calc(100% - (var(--site-inline-gutter) * 2)))",
    "chrome-rail-width": "var(--site-rail-measure)",
    "footer-rail-width": "var(--site-rail-measure)",
    "menu-rail-width": "var(--site-rail-measure)",
    "chrome-padding-y-sm": "0.8rem",
    "chrome-padding-y-md": "0.9rem",
    "chrome-gap-sm": "0.9rem",
    "chrome-gap-md": "1rem",
    "footer-margin-top": "0.6rem",
    "footer-padding-top": "0.8rem",
    "footer-padding-bottom": "0.9rem",
    "menu-padding-top": "0.9rem",
    "menu-padding-bottom": "0.9rem",
    "section-min-height": "100vh",
    "section-min-height-stable": "100svh",
    "stage-circle-desktop": "1200px",
    "stage-circle-mobile": "600px",
    "stage-circle-max-desktop": "1800px",
    "stage-circle-max-mobile": "1200px",
    "stage-circle-vh-cap": "90vh",
    "stage-circle-vw-cap": "96vw",
    "intro-logo-max": "420px",
    "intro-logo-mobile-max": "360px",
    "drawer-width-sm": "22rem",
    "drawer-width-md": "28rem",
    "drawer-width-lg": "34rem",
    "drawer-padding": "1.25rem",
    "layout-home-announcement-size": "1.8rem",
    "layout-home-announcement-weight": "600",
    "layout-home-announcement-tracking": "0.02em",
    "layout-home-announcement-secondary-size": "1.5rem",
    "layout-home-announcement-secondary-weight": "400",
    "layout-home-announcement-secondary-tracking": "0.05em",
    "layout-home-announcement-mobile-size": "1.35rem",
    "layout-home-announcement-mobile-line-height": "1.25",
    "layout-home-announcement-secondary-mobile-size": "1.05rem",
    "layout-home-announcement-secondary-mobile-tracking": "0.06em",
    "layout-home-enter-width": "2.9rem",
    "layout-home-enter-height": "4.4rem",
    "layout-home-enter-padding-y": "0.7rem",
    "layout-home-enter-padding-x": "0.6rem",
    "layout-home-enter-size": "0.95rem",
    "layout-home-enter-weight": "300",
    "layout-home-enter-tracking": "0.14em",
    "layout-home-enter-border-width": "1px",
    "layout-home-enter-radius": "999px",
    "layout-home-enter-icon-size": "1.42rem",
    "layout-home-enter-hover-y": "-1px",
    "layout-home-enter-hover-opacity": "0.95",
    "layout-home-enter-breathe-duration": "6s",
    "layout-home-enter-breathe-y": "-4px",
    "layout-home-enter-mobile-width": "2.7rem",
    "layout-home-enter-mobile-height": "4.05rem",
    "layout-home-enter-mobile-padding-y": "0.62rem",
    "layout-home-enter-mobile-padding-x": "0.55rem",
    "layout-home-enter-mobile-size": "0.85rem",
    "layout-home-circle-blur": "14px",
    "layout-home-circle-halo-scale": "1.3",
    "layout-home-circle-halo-opacity": "0.9",
    "layout-home-circle-start-scale": "0.80",
    "layout-home-circle-mid-scale": "1.12",
    "layout-home-circle-breathe-duration": "2.6s",
    "layout-home-halo-start-opacity": "0.55",
    "layout-home-halo-breathe-duration": "3.4s",
    "layout-home-video-overlay-blur": "20px",
    "layout-home-video-overlay-saturate": "1.1",
    "layout-home-video-overlay-motion": "2.4s",
    "layout-home-video-overlay-reveal-opacity": "0.96",
    "layout-home-logo-width": "320px",
    "layout-home-logo-width-mobile": "260px",
    "layout-home-logo-margin-bottom": "1.7rem",
    "layout-home-logo-docked-margin-bottom": "2rem",
    "layout-home-logo-transition-opacity": "700ms",
    "layout-home-logo-transition-transform": "900ms",
    "layout-home-stage-copy-margin-top": "1.5rem",
    "layout-home-stage-bottom-margin-top": "1.7rem",
    "layout-home-stage-bottom-margin-top-mobile": "1.35rem",
    "layout-home-stage-intro-max-height": "1200px",
    "layout-home-stage-intro-opacity-duration": "900ms",
    "layout-home-stage-intro-transform-duration": "1100ms",
    "layout-home-stage-intro-reveal-duration": "0.8s",
    "layout-home-intro-reveal-y": "18px",
    "layout-home-intro-content-opacity-duration": "0.65s",
    "layout-home-intro-content-transform-duration": "0.85s",
    "layout-home-intro-logo-scale-start": "0.68",
    "layout-home-intro-logo-scale-settle": "0.94",
    "layout-home-intro-logo-scale-fade": "0.30",
    "layout-catalog-rail-padding-top": "8.8rem",
    "layout-catalog-rail-padding-bottom": "5.5rem",
    "layout-catalog-rail-padding-top-mobile": "7.4rem",
    "layout-catalog-rail-padding-bottom-mobile": "4.5rem",
    "layout-catalog-section-margin-top": "2.5rem",
    "layout-catalog-hero-gap": "1rem",
    "layout-catalog-hero-padding-bottom": "2.5rem",
    "layout-catalog-eyebrow-size": "0.78rem",
    "layout-catalog-eyebrow-weight": "500",
    "layout-catalog-eyebrow-tracking": "0.16em",
    "layout-catalog-title-size": "clamp(2.8rem, 6vw, 4.8rem)",
    "layout-catalog-title-weight": "300",
    "layout-catalog-title-line-height": "0.94",
    "layout-catalog-title-tracking": "-0.06em",
    "layout-catalog-description-max-width": "56rem",
    "layout-catalog-description-size": "1.02rem",
    "layout-catalog-description-line-height": "1.72",
    "layout-catalog-chip-gap": "0.75rem",
    "layout-catalog-chip-min-height": "2.2rem",
    "layout-catalog-chip-padding-x": "0.95rem",
    "layout-catalog-chip-size": "0.78rem",
    "layout-catalog-chip-line-height": "1",
    "layout-catalog-toolbar-gap": "0.9rem",
    "layout-catalog-search-gap": "0.45rem",
    "layout-catalog-filter-note-size": "0.86rem",
    "layout-catalog-filter-note-line-height": "1.6",
    "layout-catalog-search-row-min-height": "3.4rem",
    "layout-catalog-search-row-padding-x": "1rem",
    "layout-catalog-search-row-radius": "1rem",
    "layout-catalog-grid-gap": "1.5rem",
    "layout-catalog-grid-compact-gap": "1rem",
    "layout-catalog-card-radius": "1.4rem",
    "layout-catalog-card-body-gap": "1rem",
    "layout-catalog-card-body-padding": "1.35rem",
    "layout-catalog-card-header-gap": "0.65rem",
    "layout-catalog-card-eyebrow-size": "0.74rem",
    "layout-catalog-card-eyebrow-weight": "500",
    "layout-catalog-card-eyebrow-tracking": "0.12em",
    "layout-catalog-card-title-size": "1.28rem",
    "layout-catalog-card-title-weight": "400",
    "layout-catalog-card-title-line-height": "1.1",
    "layout-catalog-card-summary-line-height": "1.65",
    "layout-catalog-action-gap": "0.75rem",
    "layout-catalog-detail-gap": "1.5rem",
    "layout-catalog-panel-gap": "1rem",
    "layout-catalog-panel-padding": "1.4rem",
    "layout-catalog-panel-radius": "1.4rem",
    "layout-catalog-panel-title-size": "1.14rem",
    "layout-catalog-panel-title-weight": "500",
    "layout-catalog-panel-copy-line-height": "1.7",
    "layout-catalog-rows-gap": "0.85rem",
    "layout-catalog-row-gap": "0.25rem",
    "layout-catalog-row-padding-bottom": "0.85rem",
    "layout-catalog-row-label-size": "0.78rem",
    "layout-catalog-row-label-tracking": "0.08em",
    "layout-catalog-row-value-line-height": "1.65",
    "layout-catalog-list-gap": "0.9rem",
    "layout-catalog-list-line-height": "1.7",
    "layout-catalog-timeline-gap": "1.2rem",
    "layout-catalog-timeline-year-gap": "1rem",
    "layout-catalog-timeline-year-size": "1.3rem",
    "layout-catalog-timeline-year-weight": "500",
    "layout-catalog-timeline-entry-gap": "0.5rem",
    "layout-catalog-timeline-entry-padding-y": "1.2rem",
    "layout-catalog-timeline-entry-padding-x": "1.3rem",
    "layout-catalog-timeline-entry-radius": "1.25rem",
    "layout-catalog-timeline-eyebrow-size": "0.76rem",
    "layout-catalog-timeline-eyebrow-tracking": "0.1em",
    "layout-catalog-timeline-title-size": "1.1rem",
    "layout-catalog-timeline-title-weight": "500",
    "layout-catalog-timeline-copy-line-height": "1.72",
    "layout-catalog-sitemap-group-gap": "1rem",
    "layout-catalog-sitemap-group-padding-top": "1.6rem",
    "layout-catalog-sitemap-title-size": "1.15rem",
    "layout-catalog-sitemap-title-weight": "500",
    "layout-catalog-sitemap-item-gap": "0.2rem",
    "layout-catalog-sitemap-path-size": "0.84rem",
    "layout-catalog-empty-gap": "0.75rem",
    "layout-catalog-empty-padding": "1.5rem",
    "layout-catalog-empty-radius": "1.4rem",
    "layout-catalog-empty-title-size": "1.2rem",
    "layout-catalog-empty-title-weight": "500",
    "layout-catalog-empty-copy-line-height": "1.72",
    "layout-catalog-media-card-min": "15rem",
    "layout-catalog-media-card-max": "22rem",
    "layout-catalog-media-card-gap": "1.25rem",
    "layout-catalog-media-figure-radius": "1.2rem",
    "layout-catalog-media-body-gap": "1rem",
    "layout-home-search-shell-width": "72rem",
    "layout-home-search-dialog-blur": "18px",
    "layout-home-search-dialog-saturate": "145%",
    "layout-home-search-header-gap": "1rem",
    "layout-home-search-header-padding-y": "1.45rem",
    "layout-home-search-header-padding-x-fallback": "2.8rem",
    "layout-home-search-header-padding-bottom": "1.05rem",
    "layout-home-search-eyebrow-margin-bottom": "0.35rem",
    "layout-home-search-eyebrow-size": "0.72rem",
    "layout-home-search-eyebrow-weight": "500",
    "layout-home-search-eyebrow-tracking": "0.08em",
    "layout-home-search-title-size": "1.02rem",
    "layout-home-search-title-weight": "500",
    "layout-home-search-title-line-height": "1.3",
    "layout-home-search-body-gap": "1.15rem",
    "layout-home-search-body-padding-y": "1.25rem",
    "layout-home-search-body-padding-x-fallback": "2.8rem",
    "layout-home-search-form-gap": "0.55rem",
    "layout-home-search-input-row-gap": "0.62rem",
    "layout-home-search-input-row-min-height": "4rem",
    "layout-home-search-input-row-padding-y": "0.82rem",
    "layout-home-search-input-row-padding-x": "1.08rem",
    "layout-home-search-input-row-radius": "999px",
    "layout-home-search-input-row-line-height": "1",
    "layout-home-search-input-row-opacity": "0.9",
    "layout-home-search-input-row-border": "color-mix(in srgb, var(--cc-primary-color) 16%, transparent)",
    "layout-home-search-input-row-border-focus": "color-mix(in srgb, var(--cc-primary-color) 24%, transparent)",
    "layout-home-search-icon-size": "1.38rem",
    "layout-home-search-icon-opacity": "0.82",
    "layout-home-search-voice-motion": "180ms",
    "layout-home-search-input-size": "1.88rem",
    "layout-home-search-input-weight": "300",
    "layout-home-search-input-tracking": "-0.012em",
    "layout-home-search-input-line-height": "1",
    "layout-home-search-hint-size": "0.94rem",
    "layout-home-search-hint-line-height": "1.45",
    "layout-home-search-quick-actions-gap": "0.55rem",
    "layout-home-search-chip-min-height": "2.35rem",
    "layout-home-search-chip-padding-x": "0.88rem",
    "layout-home-search-chip-size": "0.8rem",
    "layout-home-search-chip-weight": "500",
    "layout-home-search-chip-tracking": "0.03em",
    "layout-home-search-empty-gap": "0.45rem",
    "layout-home-search-empty-padding-top": "0.95rem",
    "layout-home-search-empty-title-size": "0.96rem",
    "layout-home-search-empty-title-weight": "500",
    "layout-home-search-empty-text-size": "0.88rem",
    "layout-home-search-empty-text-line-height": "1.55",
    "layout-home-search-result-card-gap": "0.5rem",
    "layout-home-search-result-card-padding-y": "0.95rem",
    "layout-home-search-result-list-gap": "0.85rem",
    "layout-home-search-result-meta-row-gap": "0.55rem",
    "layout-home-search-result-meta-column-gap": "0.8rem",
    "layout-home-search-result-route-size": "0.72rem",
    "layout-home-search-result-route-weight": "500",
    "layout-home-search-result-route-tracking": "0.08em",
    "layout-home-search-result-query-size": "0.9rem",
    "layout-home-search-result-query-line-height": "1.4",
    "layout-home-search-result-title-size": "1.02rem",
    "layout-home-search-result-title-weight": "300",
    "layout-home-search-result-title-tracking": "-0.018em",
    "layout-home-search-result-title-line-height": "1.28",
    "layout-home-search-result-title-row-gap": "0.55rem",
    "layout-home-search-result-body-size": "0.88rem",
    "layout-home-search-result-body-line-height": "1.55",
    "layout-home-search-result-badge-gap": "0.38rem",
    "layout-home-search-result-badge-min-height": "1.7rem",
    "layout-home-search-result-badge-padding-x": "0.62rem",
    "layout-home-search-result-badge-color": "#1d9bf0",
    "layout-home-search-result-badge-size": "0.7rem",
    "layout-home-search-result-badge-weight": "600",
    "layout-home-search-result-badge-tracking": "0.08em",
    "layout-home-search-result-badge-icon-size": "0.82rem",
    "layout-home-search-result-tags-gap": "0.45rem",
    "layout-home-search-result-tag-min-height": "1.85rem",
    "layout-home-search-result-tag-padding-x": "0.7rem",
    "layout-home-search-result-tag-size": "0.72rem",
    "layout-home-search-result-tag-tracking": "0.04em",
    "layout-home-search-result-actions-gap": "0.55rem",
    "layout-home-search-result-action-min-height": "2.4rem",
    "layout-home-search-result-action-min-width": "10.5rem",
    "layout-home-search-result-action-padding-x": "0.95rem",
    "layout-home-search-result-action-size": "0.78rem",
    "layout-home-search-result-action-weight": "500",
    "layout-home-search-result-action-tracking": "0.08em",
    "layout-home-search-result-action-line-height": "1",
    "layout-home-search-light-border": "rgba(0, 0, 0, 0.12)",
    "layout-home-search-dark-border": "rgba(255, 255, 255, 0.16)",
    "layout-home-search-mobile-padding-x-fallback": "1rem",
    "layout-home-search-mobile-title-size": "1.15rem",
    "layout-home-search-mobile-input-row-min-height": "3.2rem",
    "layout-home-search-mobile-input-row-padding-y": "0.68rem",
    "layout-home-search-mobile-input-row-padding-x": "0.9rem",
    "layout-home-search-mobile-input-size": "1.2rem",
    "layout-home-platform-nav-opacity": "0.68",
    "layout-home-platform-nav-hover-opacity": "1",
    "layout-home-platform-motion-fast": "220ms",
    "layout-home-platform-radius": "var(--cc-panel-radius, 1.35rem)",
    "layout-home-platform-padding": "0.92rem",
    "layout-home-platform-gap": "0.88rem",
    "layout-home-platform-shadow": "var(--cc-panel-shadow, 0 18px 54px color-mix(in srgb, var(--shadow-color, #000000) 18%, transparent))",
    "layout-home-platform-blur": "4px",
    "layout-home-platform-saturate": "115%",
    "layout-home-platform-chrome-min-height": "3.55rem",
    "layout-home-platform-chrome-blur": "8px",
    "layout-home-platform-chrome-saturate": "120%",
    "layout-home-platform-rail-toggle-size": "1.25rem",
    "layout-home-platform-rail-toggle-margin-left": "0.7rem",
    "layout-home-platform-rail-toggle-icon-size": "1.05rem",
    "layout-home-platform-rail-width": "18rem",
    "layout-home-platform-subrail-width": "15rem",
    "layout-home-platform-rail-compact-width": "3.25rem",
    "layout-home-platform-tablet-rail-min": "12rem",
    "layout-home-platform-tablet-rail-max": "15rem",
    "layout-home-platform-tablet-subrail-min": "11rem",
    "layout-home-platform-tablet-subrail-max": "13rem",
    "layout-home-platform-mobile-inline-padding-fallback": "0.85rem",
    "layout-home-platform-mobile-rail-inner-padding-y": "var(--space-3)",
    "layout-home-platform-mobile-nav-gap": "var(--space-2)",
    "layout-home-platform-mobile-nav-item-min-height": "var(--cc-home-platform-nav-item-min-height)",
    "layout-home-platform-mobile-nav-item-padding-x": "var(--cc-home-platform-nav-item-padding-x)",
    "layout-home-platform-mobile-nav-icon-size": "var(--cc-home-platform-nav-icon-size)",
    "layout-home-platform-rail-padding-top": "1.45rem",
    "layout-home-platform-rail-padding-right": "1.5rem",
    "layout-home-platform-rail-padding-bottom": "2.2rem",
    "layout-home-platform-rail-padding-left": "0",
    "layout-home-platform-subrail-padding-left": "1.5rem",
    "layout-home-platform-tablet-rail-padding-right": "1rem",
    "layout-home-platform-group-margin-top": "2.35rem",
    "layout-home-platform-label-margin-bottom": "0.9rem",
    "layout-home-platform-label-size": "0.72rem",
    "layout-home-platform-label-weight": "500",
    "layout-home-platform-label-tracking": "0.08em",
    "layout-home-platform-subrail-header-gap": "0.35rem",
    "layout-home-platform-subrail-header-margin-bottom": "0.95rem",
    "layout-home-platform-subrail-title-size": "1.02rem",
    "layout-home-platform-subrail-title-weight": "500",
    "layout-home-platform-subrail-title-line-height": "1.3",
    "layout-home-platform-nav-gap": "0.62rem",
    "layout-home-platform-nav-item-gap": "0.78rem",
    "layout-home-platform-nav-item-min-height": "3.08rem",
    "layout-home-platform-nav-item-radius": "999px",
    "layout-home-platform-nav-item-padding-y": "0.86rem",
    "layout-home-platform-nav-item-padding-x": "1rem",
    "layout-home-platform-nav-icon-size": "1rem",
    "layout-home-platform-nav-indicator-min-size": "1.15rem",
    "layout-home-platform-nav-indicator-padding-x": "0.32rem",
    "layout-home-platform-nav-indicator-size": "0.64rem",
    "layout-home-platform-nav-indicator-weight": "600",
    "layout-home-platform-nav-indicator-line-height": "1",
    "layout-home-platform-nav-indicator-tracking": "0.04em",
    "layout-home-platform-nav-text-size": "0.98rem",
    "layout-home-platform-nav-text-weight": "400",
    "layout-home-platform-nav-text-line-height": "1.35",
    "layout-home-platform-nav-text-tracking": "-0.01em",
    "layout-home-platform-subnav-padding-x": "0.92rem",
    "layout-home-platform-subnav-min-height": "2.95rem",
    "layout-home-platform-subnav-size": "0.86rem",
    "layout-home-platform-subnav-line-height": "1.35",
    "layout-home-platform-content-header-gap": "0.38rem",
    "layout-home-platform-content-header-padding-top": "1.45rem",
    "layout-home-platform-content-header-padding-right": "0",
    "layout-home-platform-content-header-padding-bottom": "1rem",
    "layout-home-platform-content-header-padding-left": "2rem",
    "layout-home-platform-tablet-content-padding-left": "1.5rem",
    "layout-home-platform-mobile-content-header-padding-top": "1rem",
    "layout-home-platform-mobile-content-header-padding-bottom": "0.85rem",
    "layout-home-platform-content-title-size": "var(--section-title-size)",
    "layout-home-platform-content-title-weight": "var(--section-title-weight)",
    "layout-home-platform-content-title-line-height": "var(--section-title-line-height)",
    "layout-home-platform-content-title-tracking": "var(--section-title-tracking)",
    "layout-home-platform-content-title-transform": "var(--section-title-transform)",
    "layout-home-platform-content-title-color": "red",
    "layout-home-platform-content-copy-max-width": "42rem",
    "layout-home-platform-content-copy-size": "0.98rem",
    "layout-home-platform-content-copy-weight": "400",
    "layout-home-platform-content-copy-line-height": "1.65",
    "layout-home-platform-content-copy-tracking": "-0.01em",
    "layout-home-platform-content-inner-padding-top": "1.45rem",
    "layout-home-platform-content-inner-padding-left": "2rem",
    "layout-home-platform-content-inner-footer-gap": "1.45rem",
    "layout-home-platform-mobile-content-inner-padding-top": "1rem",
    "layout-home-platform-mobile-content-inner-footer-gap": "1.15rem",
    "layout-home-platform-destination-gap": "1rem",
    "layout-home-platform-content-stack-gap": "1.25rem",
    "layout-home-platform-state-title-size": "1.15rem",
    "layout-home-platform-state-title-weight": "400",
    "layout-home-platform-state-title-line-height": "1.25",
    "layout-home-platform-state-title-tracking": "-0.02em",
    "layout-home-platform-state-copy-max-width": "40rem",
    "layout-home-platform-state-copy-size": "0.92rem",
    "layout-home-platform-state-copy-line-height": "1.6",
    "layout-home-platform-state-action-min-height": "2.45rem",
    "layout-home-platform-state-action-padding-x": "1rem",
    "layout-home-platform-state-action-size": "0.78rem",
    "layout-home-platform-state-action-weight": "500",
    "layout-home-platform-state-action-tracking": "0.08em",
    "layout-home-platform-embedded-section-gap": "0.75rem",
    "layout-home-platform-embedded-stack-gap": "0.45rem",
    "layout-home-platform-destination-grid-gap": "0.72rem",
    "layout-home-platform-destination-grid-count": "3",
    "layout-home-platform-destination-grid-count-compact": "2",
    "layout-home-platform-destination-card-gap": "0.7rem",
    "layout-home-platform-destination-card-inner-gap": "0.5rem",
    "layout-home-platform-destination-card-padding-y": "1rem",
    "layout-home-platform-destination-card-padding-x": "1.05rem",
    "layout-home-platform-destination-label-size": "0.72rem",
    "layout-home-platform-destination-label-weight": "500",
    "layout-home-platform-destination-label-tracking": "0.08em",
    "layout-home-platform-destination-title-size": "1rem",
    "layout-home-platform-destination-title-weight": "500",
    "layout-home-platform-destination-title-line-height": "1.35",
    "layout-home-platform-destination-copy-size": "0.84rem",
    "layout-home-platform-destination-copy-line-height": "1.6",
    "layout-home-platform-destination-link-size": "0.84rem",
    "layout-home-platform-destination-link-line-height": "1.55",
    "layout-home-platform-destination-workspace-copy-size": "0.88rem",
    "layout-home-platform-destination-workspace-copy-line-height": "1.55",
    "layout-home-platform-destination-list-gap": "0.45rem",
    "layout-home-platform-destination-action-gap": "0.65rem",
    "layout-home-platform-destination-action-min-height": "2.5rem",
    "layout-home-platform-destination-action-padding-x": "0.95rem",
    "layout-home-platform-destination-action-size": "0.76rem",
    "layout-home-platform-destination-action-weight": "500",
    "layout-home-platform-destination-action-tracking": "0.08em",
    "layout-home-platform-destination-state-size": "0.88rem",
    "layout-home-platform-destination-state-line-height": "1.5",
    "layout-home-platform-destination-field-gap": "0.45rem",
    "layout-home-platform-destination-field-min-height": "2.65rem",
    "layout-home-platform-destination-field-padding-y": "0.72rem",
    "layout-home-platform-destination-field-padding-x": "0.82rem",
    "layout-home-stage-motion-core-width": "min(24rem, 70vw)",
    "layout-home-stage-motion-core-height": "min(22.5rem, 39vh)",
    "layout-home-stage-motion-core-active-width": "min(18.8rem, 58vw)",
    "layout-home-stage-motion-core-active-height": "min(17.4rem, 29vh)",
    "layout-home-stage-motion-vessel-size": "min(21rem, 58vw, 46vh)",
    "layout-home-stage-motion-vessel-active-size": "min(16.8rem, 48vw, 31vh)",
    "layout-home-stage-motion-vessel-blur": "24px",
    "layout-home-stage-motion-vessel-ring-border": "color-mix(in srgb, var(--cc-primary-color) 22%, transparent)",
    "layout-home-stage-motion-vessel-inner-bg": "color-mix(in srgb, var(--bg-color) 12%, transparent)",
    "layout-home-stage-motion-core-color": "color-mix(in srgb, var(--cc-primary-color) 92%, transparent)",
    "layout-home-stage-motion-active-color": "var(--cc-home-stage-motion-core-color)",
    "layout-home-stage-motion-core-ring-border": "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)",
    "layout-home-stage-motion-core-idle-ring-opacity": "0.72",
    "layout-home-stage-motion-core-idle-signal-opacity": "0.42",
    "layout-home-stage-motion-core-idle-pulse-opacity": "0.34",
    "layout-home-stage-motion-core-signal-size": "58%",
    "layout-home-stage-motion-core-ring-size": "72%",
    "layout-home-stage-motion-core-pulse-size": "34%",
    "layout-home-stage-motion-core-signal-blur": "16px",
    "layout-home-stage-motion-core-pulse-blur": "10px",
    "layout-home-stage-motion-mic-size": "4.8rem",
    "layout-home-stage-motion-mic-icon-size": "2.35rem",
    "layout-home-stage-motion-mic-margin-bottom": "1.15rem",
    "layout-home-stage-motion-mic-color": "color-mix(in srgb, var(--cc-primary-color) 72%, transparent)",
    "layout-home-stage-motion-mic-hover-color": "color-mix(in srgb, var(--color-primary1) 94%, var(--cc-primary-color))",
    "layout-home-stage-motion-mic-opacity": "0.92",
    "layout-home-stage-motion-mic-icon-opacity": "0.9",
    "layout-home-stage-motion-mic-hover-scale": "1.08",
    "layout-home-stage-motion-mic-icon-hover-scale": "1.03",
    "layout-home-stage-motion-active-mic-scale": "1.04",
    "layout-home-stage-motion-fast": "220ms",
    "layout-home-stage-motion-transition": "620ms cubic-bezier(0.22,1,0.36,1)",
    "layout-home-stage-motion-field-opacity-transition": "0.35s",
    "layout-home-stage-motion-field-blur": "10px",
    "layout-home-stage-motion-field-size": "13rem",
    "layout-home-stage-motion-ring-size": "17rem",
    "layout-home-stage-motion-field-color": "rgba(145,124,111,0.18)",
    "layout-home-stage-motion-field-color-soft": "rgba(145,124,111,0.08)",
    "layout-home-stage-motion-field-color-faint": "rgba(145,124,111,0.02)",
    "layout-home-stage-motion-field-color-clear": "rgba(145,124,111,0)",
    "layout-home-stage-motion-ring-border": "rgba(255,255,255,0.18)",
    "layout-home-stage-motion-mic-field-color": "rgba(145,124,111,0.22)",
    "layout-home-stage-motion-mic-field-color-soft": "rgba(145,124,111,0.10)",
    "layout-home-stage-motion-mic-field-color-clear": "rgba(145,124,111,0)",
    "layout-home-stage-motion-mic-field-blur": "12px",
    "layout-home-stage-motion-mic-ring-border": "var(--cc-home-stage-motion-ring-border)",
    "layout-home-stage-motion-mic-ring-offset": "1.2rem",
    "layout-home-stage-motion-mode-core-opacity": "0.72",
    "layout-home-stage-motion-mode-ring-opacity": "0.82",
    "layout-home-stage-motion-listening-core-duration": "1.35s",
    "layout-home-stage-motion-listening-ring-duration": "2.1s",
    "layout-home-stage-motion-listening-mic-duration": "1.25s",
    "layout-home-stage-motion-thinking-core-duration": "1.8s",
    "layout-home-stage-motion-thinking-ring-duration": "2.6s",
    "layout-home-stage-motion-thinking-mic-duration": "1.9s",
    "layout-home-stage-motion-responding-core-duration": "1s",
    "layout-home-stage-motion-responding-ring-duration": "1.45s",
    "layout-home-stage-motion-responding-mic-duration": "0.95s",
    "layout-home-stage-motion-mobile-core-width": "min(18rem, 72vw)",
    "layout-home-stage-motion-mobile-core-height": "min(16.8rem, 27vh)",
    "layout-home-stage-motion-mobile-core-active-width": "min(15.2rem, 60vw)",
    "layout-home-stage-motion-mobile-core-active-height": "min(14rem, 22vh)",
    "layout-home-stage-motion-mobile-vessel-size": "min(17rem, 66vw, 31vh)",
    "layout-home-stage-motion-mobile-vessel-active-size": "min(14rem, 54vw, 24vh)",
    "layout-home-stage-motion-mobile-mic-size": "4rem",
    "layout-home-stage-motion-mobile-mic-icon-size": "2rem",
    "layout-home-stage-motion-mobile-mic-margin-bottom": "0.85rem",
    "layout-home-stage-motion-key-core-listen-start-scale": "0.88",
    "layout-home-stage-motion-key-core-listen-mid-scale": "1.1",
    "layout-home-stage-motion-key-core-listen-start-opacity": "0.34",
    "layout-home-stage-motion-key-core-listen-mid-opacity": "0.92",
    "layout-home-stage-motion-key-core-think-start-scale": "0.96",
    "layout-home-stage-motion-key-core-think-mid-scale": "1.04",
    "layout-home-stage-motion-key-core-think-start-opacity": "0.36",
    "layout-home-stage-motion-key-core-think-mid-opacity": "0.72",
    "layout-home-stage-motion-key-core-respond-start-scale": "0.92",
    "layout-home-stage-motion-key-core-respond-mid-scale": "1.16",
    "layout-home-stage-motion-key-core-respond-start-opacity": "0.34",
    "layout-home-stage-motion-key-core-respond-mid-opacity": "1",
    "layout-home-stage-motion-key-ring-listen-start-scale": "0.94",
    "layout-home-stage-motion-key-ring-listen-mid-scale": "1.02",
    "layout-home-stage-motion-key-ring-listen-start-opacity": "0.18",
    "layout-home-stage-motion-key-ring-listen-mid-opacity": "0.58",
    "layout-home-stage-motion-key-ring-think-start-scale": "0.98",
    "layout-home-stage-motion-key-ring-think-mid-scale": "1.01",
    "layout-home-stage-motion-key-ring-think-start-opacity": "0.14",
    "layout-home-stage-motion-key-ring-think-mid-opacity": "0.4",
    "layout-home-stage-motion-key-ring-respond-start-scale": "0.92",
    "layout-home-stage-motion-key-ring-respond-mid-scale": "1.08",
    "layout-home-stage-motion-key-ring-respond-start-opacity": "0.16",
    "layout-home-stage-motion-key-ring-respond-mid-opacity": "0.7",
    "layout-home-stage-motion-key-mic-listen-start-scale": "0.92",
    "layout-home-stage-motion-key-mic-listen-mid-scale": "1.14",
    "layout-home-stage-motion-key-mic-listen-start-opacity": "0.18",
    "layout-home-stage-motion-key-mic-listen-mid-opacity": "0.62",
    "layout-home-stage-motion-key-mic-think-start-scale": "0.98",
    "layout-home-stage-motion-key-mic-think-mid-scale": "1.04",
    "layout-home-stage-motion-key-mic-think-start-opacity": "0.14",
    "layout-home-stage-motion-key-mic-think-mid-opacity": "0.34",
    "layout-home-stage-motion-key-mic-respond-start-scale": "0.9",
    "layout-home-stage-motion-key-mic-respond-mid-scale": "1.18",
    "layout-home-stage-motion-key-mic-respond-start-opacity": "0.2",
    "layout-home-stage-motion-key-mic-respond-mid-opacity": "0.74",
    "layout-home-featured-functions-max-width": "1440px",
    "layout-home-featured-functions-viewport-max-width": "820px",
    "layout-home-featured-functions-footer-max-width": "820px",
    "layout-home-featured-functions-timeline-height": "1px",
    "layout-home-featured-functions-timeline-progress-scale": "0",
    "layout-home-featured-functions-description-opacity": "0.74",
    "layout-home-featured-functions-card-border-width": "1.25px",
    "layout-home-featured-functions-card-border-color-dark": "rgba(255, 255, 255, 0.08)",
    "layout-home-featured-functions-card-border-color-hover-dark": "rgba(255, 255, 255, 0.12)",
    "layout-home-featured-functions-card-surface-bg-dark": "rgba(255, 255, 255, 0.02)",
    "layout-home-featured-functions-card-surface-highlight-rest-dark": "rgba(255, 255, 255, 0.035)",
    "layout-home-featured-functions-card-surface-highlight-hover-dark": "rgba(255, 255, 255, 0.045)",
    "layout-home-featured-functions-card-placeholder-glow-a-dark": "rgba(255, 255, 255, 0.08)",
    "layout-home-featured-functions-card-placeholder-glow-b-dark": "rgba(145, 124, 111, 0.24)",
    "layout-home-featured-functions-card-placeholder-fill-top-dark": "rgba(255, 255, 255, 0.04)",
    "layout-home-featured-functions-card-placeholder-fill-bottom-dark": "rgba(255, 255, 255, 0.02)",
    "layout-home-featured-functions-card-padding": "0",
    "layout-home-featured-functions-visual-aspect-ratio": "16 / 6.4",
    "layout-home-featured-functions-card-copy-max-width": "100%",
    "layout-home-featured-functions-card-summary-gap": "52px",
    "layout-home-featured-functions-card-title-gap": "0",
    "layout-home-featured-functions-card-label-line-height": "0.9",
    "layout-home-featured-functions-card-label-weight": "100",
    "layout-home-featured-functions-card-label-tracking": "0.01em",
    "layout-home-featured-functions-eyebrow-opacity": "0.42",
    "layout-home-featured-functions-dot-size": "7px",
    "layout-home-featured-functions-dot-opacity": "0.22",
    "layout-home-featured-functions-dot-opacity-active": "1",
    "layout-home-featured-functions-dot-opacity-light": "0.18",
    "layout-home-featured-functions-dot-opacity-dark": "0.24",
    "layout-home-featured-functions-rail-offset": "0px",
    "layout-home-featured-functions-card-matte-blur": "34px",
    "layout-home-featured-functions-card-matte-saturation": "0.96",
    "layout-home-featured-functions-card-spectrum-opacity": "0.09",
    "layout-home-featured-functions-card-spectrum-opacity-light": "0.06",
    "layout-home-featured-functions-card-spectrum-blend": "normal",
    "layout-home-featured-functions-card-spectrum-red": "rgba(255, 72, 72, 1)",
    "layout-home-featured-functions-card-spectrum-orange": "rgba(255, 154, 72, 1)",
    "layout-home-featured-functions-card-spectrum-yellow": "rgb(79, 65, 23)",
    "layout-home-featured-functions-card-spectrum-violet": "rgba(146, 92, 255, 1)",
    "layout-home-featured-functions-card-spectrum-blue": "rgba(92, 148, 255, 1)",
    "layout-home-featured-functions-card-spectrum-cyan": "rgba(84, 232, 255, 1)",
    "layout-home-featured-functions-card-summary-color-dark": "rgba(255, 255, 255, 0.94)",
    "layout-home-featured-functions-card-icon-filter-dark": "brightness(0) invert(1)",
    "layout-home-featured-functions-card-matte-surface-top-dark": "rgba(0, 0, 0, 0.14)",
    "layout-home-featured-functions-card-matte-surface-mid-dark": "rgba(0, 0, 0, 0.08)",
    "layout-home-featured-functions-card-matte-surface-bottom-dark": "rgba(0, 0, 0, 0.22)",
    "layout-home-featured-functions-card-border-color-light": "rgba(0, 0, 0, 0.08)",
    "layout-home-featured-functions-card-border-color-hover-light": "rgba(0, 0, 0, 0.12)",
    "layout-home-featured-functions-card-surface-bg-light": "rgba(0, 0, 0, 0.02)",
    "layout-home-featured-functions-card-surface-highlight-rest-light": "rgba(0, 0, 0, 0.03)",
    "layout-home-featured-functions-card-surface-highlight-hover-light": "rgba(0, 0, 0, 0.05)",
    "layout-home-featured-functions-card-placeholder-glow-a-light": "rgba(0, 0, 0, 0.04)",
    "layout-home-featured-functions-card-placeholder-glow-b-light": "rgba(145, 124, 111, 0.12)",
    "layout-home-featured-functions-card-placeholder-fill-top-light": "rgba(0, 0, 0, 0.03)",
    "layout-home-featured-functions-card-placeholder-fill-bottom-light": "rgba(0, 0, 0, 0.015)",
    "layout-home-featured-functions-card-summary-color-light": "rgba(17, 17, 17, 0.88)",
    "layout-home-featured-functions-card-icon-filter-light": "brightness(0) saturate(100%)",
    "layout-home-featured-functions-card-matte-surface-top-light": "rgba(255, 255, 255, 0.82)",
    "layout-home-featured-functions-card-matte-surface-mid-light": "rgba(255, 255, 255, 0.66)",
    "layout-home-featured-functions-card-matte-surface-bottom-light": "rgba(255, 255, 255, 0.9)",
    "layout-home-featured-functions-control-size": "48px",
    "layout-home-featured-functions-control-icon-size": "16px",
    "layout-home-featured-functions-control-disabled-opacity": "0.32",
    "layout-home-featured-functions-track-motion": "420ms",
    "layout-home-featured-functions-ready-opacity-motion": "260ms",
    "layout-about-featured-functions-max-width": "var(--cc-home-featured-functions-max-width)",
    "layout-about-featured-functions-viewport-max-width": "var(--cc-home-featured-functions-viewport-max-width)",
    "layout-about-featured-functions-footer-max-width": "var(--cc-home-featured-functions-footer-max-width)",
    "layout-about-featured-functions-timeline-height": "var(--cc-home-featured-functions-timeline-height)",
    "layout-about-featured-functions-timeline-progress-scale": "var(--cc-home-featured-functions-timeline-progress-scale)",
    "layout-about-featured-functions-description-opacity": "var(--cc-home-featured-functions-description-opacity)",
    "layout-about-featured-functions-card-border-width": "var(--cc-home-featured-functions-card-border-width)",
    "layout-about-featured-functions-card-border-color-dark": "var(--cc-home-featured-functions-card-border-color-dark)",
    "layout-about-featured-functions-card-border-color-hover-dark": "var(--cc-home-featured-functions-card-border-color-hover-dark)",
    "layout-about-featured-functions-card-surface-bg-dark": "var(--cc-home-featured-functions-card-surface-bg-dark)",
    "layout-about-featured-functions-card-surface-highlight-rest-dark": "var(--cc-home-featured-functions-card-surface-highlight-rest-dark)",
    "layout-about-featured-functions-card-surface-highlight-hover-dark": "var(--cc-home-featured-functions-card-surface-highlight-hover-dark)",
    "layout-about-featured-functions-card-placeholder-glow-a-dark": "var(--cc-home-featured-functions-card-placeholder-glow-a-dark)",
    "layout-about-featured-functions-card-placeholder-glow-b-dark": "var(--cc-home-featured-functions-card-placeholder-glow-b-dark)",
    "layout-about-featured-functions-card-placeholder-fill-top-dark": "var(--cc-home-featured-functions-card-placeholder-fill-top-dark)",
    "layout-about-featured-functions-card-placeholder-fill-bottom-dark": "var(--cc-home-featured-functions-card-placeholder-fill-bottom-dark)",
    "layout-about-featured-functions-card-padding": "var(--cc-home-featured-functions-card-padding)",
    "layout-about-featured-functions-visual-aspect-ratio": "var(--cc-home-featured-functions-visual-aspect-ratio)",
    "layout-about-featured-functions-card-copy-max-width": "var(--cc-home-featured-functions-card-copy-max-width)",
    "layout-about-featured-functions-card-summary-gap": "var(--cc-home-featured-functions-card-summary-gap)",
    "layout-about-featured-functions-card-title-gap": "var(--cc-home-featured-functions-card-title-gap)",
    "layout-about-featured-functions-card-label-line-height": "var(--cc-home-featured-functions-card-label-line-height)",
    "layout-about-featured-functions-card-label-weight": "var(--cc-home-featured-functions-card-label-weight)",
    "layout-about-featured-functions-card-label-tracking": "var(--cc-home-featured-functions-card-label-tracking)",
    "layout-about-featured-functions-eyebrow-opacity": "var(--cc-home-featured-functions-eyebrow-opacity)",
    "layout-about-featured-functions-dot-size": "var(--cc-home-featured-functions-dot-size)",
    "layout-about-featured-functions-dot-opacity": "var(--cc-home-featured-functions-dot-opacity)",
    "layout-about-featured-functions-dot-opacity-active": "var(--cc-home-featured-functions-dot-opacity-active)",
    "layout-about-featured-functions-dot-opacity-light": "var(--cc-home-featured-functions-dot-opacity-light)",
    "layout-about-featured-functions-dot-opacity-dark": "var(--cc-home-featured-functions-dot-opacity-dark)",
    "layout-about-featured-functions-rail-offset": "var(--cc-home-featured-functions-rail-offset)",
    "layout-about-featured-functions-card-matte-blur": "var(--cc-home-featured-functions-card-matte-blur)",
    "layout-about-featured-functions-card-matte-saturation": "var(--cc-home-featured-functions-card-matte-saturation)",
    "layout-about-featured-functions-card-spectrum-opacity": "var(--cc-home-featured-functions-card-spectrum-opacity)",
    "layout-about-featured-functions-card-spectrum-opacity-light": "var(--cc-home-featured-functions-card-spectrum-opacity-light)",
    "layout-about-featured-functions-card-spectrum-blend": "var(--cc-home-featured-functions-card-spectrum-blend)",
    "layout-about-featured-functions-card-spectrum-red": "var(--cc-home-featured-functions-card-spectrum-red)",
    "layout-about-featured-functions-card-spectrum-orange": "var(--cc-home-featured-functions-card-spectrum-orange)",
    "layout-about-featured-functions-card-spectrum-yellow": "var(--cc-home-featured-functions-card-spectrum-yellow)",
    "layout-about-featured-functions-card-spectrum-violet": "var(--cc-home-featured-functions-card-spectrum-violet)",
    "layout-about-featured-functions-card-spectrum-blue": "var(--cc-home-featured-functions-card-spectrum-blue)",
    "layout-about-featured-functions-card-spectrum-cyan": "var(--cc-home-featured-functions-card-spectrum-cyan)",
    "layout-about-featured-functions-card-summary-color-dark": "var(--cc-home-featured-functions-card-summary-color-dark)",
    "layout-about-featured-functions-card-icon-filter-dark": "var(--cc-home-featured-functions-card-icon-filter-dark)",
    "layout-about-featured-functions-card-matte-surface-top-dark": "var(--cc-home-featured-functions-card-matte-surface-top-dark)",
    "layout-about-featured-functions-card-matte-surface-mid-dark": "var(--cc-home-featured-functions-card-matte-surface-mid-dark)",
    "layout-about-featured-functions-card-matte-surface-bottom-dark": "var(--cc-home-featured-functions-card-matte-surface-bottom-dark)",
    "layout-about-featured-functions-card-border-color-light": "var(--cc-home-featured-functions-card-border-color-light)",
    "layout-about-featured-functions-card-border-color-hover-light": "var(--cc-home-featured-functions-card-border-color-hover-light)",
    "layout-about-featured-functions-card-surface-bg-light": "var(--cc-home-featured-functions-card-surface-bg-light)",
    "layout-about-featured-functions-card-surface-highlight-rest-light": "var(--cc-home-featured-functions-card-surface-highlight-rest-light)",
    "layout-about-featured-functions-card-surface-highlight-hover-light": "var(--cc-home-featured-functions-card-surface-highlight-hover-light)",
    "layout-about-featured-functions-card-placeholder-glow-a-light": "var(--cc-home-featured-functions-card-placeholder-glow-a-light)",
    "layout-about-featured-functions-card-placeholder-glow-b-light": "var(--cc-home-featured-functions-card-placeholder-glow-b-light)",
    "layout-about-featured-functions-card-placeholder-fill-top-light": "var(--cc-home-featured-functions-card-placeholder-fill-top-light)",
    "layout-about-featured-functions-card-placeholder-fill-bottom-light": "var(--cc-home-featured-functions-card-placeholder-fill-bottom-light)",
    "layout-about-featured-functions-card-summary-color-light": "var(--cc-home-featured-functions-card-summary-color-light)",
    "layout-about-featured-functions-card-icon-filter-light": "var(--cc-home-featured-functions-card-icon-filter-light)",
    "layout-about-featured-functions-card-matte-surface-top-light": "var(--cc-home-featured-functions-card-matte-surface-top-light)",
    "layout-about-featured-functions-card-matte-surface-mid-light": "var(--cc-home-featured-functions-card-matte-surface-mid-light)",
    "layout-about-featured-functions-card-matte-surface-bottom-light": "var(--cc-home-featured-functions-card-matte-surface-bottom-light)",
    "layout-about-featured-functions-control-size": "var(--cc-home-featured-functions-control-size)",
    "layout-about-featured-functions-control-icon-size": "var(--cc-home-featured-functions-control-icon-size)",
    "layout-about-featured-functions-control-disabled-opacity": "var(--cc-home-featured-functions-control-disabled-opacity)",
    "layout-about-featured-functions-track-motion": "var(--cc-home-featured-functions-track-motion)",
    "layout-about-featured-functions-ready-opacity-motion": "var(--cc-home-featured-functions-ready-opacity-motion)",
    "layout-home-essence-stage-min-height": "320vh",
    "layout-home-essence-inner-height": "100vh",
    "layout-home-essence-inner-height-small": "100svh",
    "layout-home-essence-inner-height-dynamic": "100dvh",
    "layout-home-essence-inner-opacity": "1",
    "layout-home-essence-inner-transform": "none",
    "layout-home-essence-inner-transform-motion": "0.9s",
    "layout-home-essence-inner-opacity-motion": "0.45s",
    "layout-home-essence-reveal-width": "min(92vw, 1120px)",
    "layout-home-essence-reveal-y": "-9vh",
    "layout-home-essence-stack-min-height": "3.2em",
    "layout-home-essence-layer-opacity-hidden": "0",
    "layout-home-essence-layer-font-size": "1.9rem",
    "layout-home-essence-layer-line-height": "1.16",
    "layout-home-essence-layer-font-weight": "300",
    "layout-home-essence-layer-tracking": "0.004em",
    "layout-home-essence-layer-enter-y": "8px",
    "layout-home-essence-layer-enter-scale": "0.985",
    "layout-home-essence-layer-enter-blur": "0.35px",
    "layout-home-essence-layer-opacity-motion": "0.48s",
    "layout-home-essence-layer-transform-motion": "0.58s",
    "layout-home-essence-layer-filter-motion": "0.48s",
    "layout-home-essence-preview-opacity": "0.5",
    "layout-home-essence-preview-y": "4px",
    "layout-home-essence-preview-scale": "0.992",
    "layout-home-essence-preview-blur": "0.2px",
    "layout-home-essence-inactive-y": "10px",
    "layout-home-essence-inactive-scale": "0.985",
    "layout-home-essence-inactive-blur": "0.35px",
    "layout-home-essence-phase-enter-y": "2px",
    "layout-home-essence-phase-enter-scale": "0.994",
    "layout-home-essence-phase-enter-blur": "0.15px",
    "layout-home-essence-phase-active-opacity": "0.96",
    "layout-home-essence-phase-active-y": "0",
    "layout-home-essence-phase-active-scale": "1",
    "layout-home-essence-phase-active-blur": "0",
    "layout-home-essence-phase-exit-y": "-2px",
    "layout-home-essence-phase-exit-scale": "0.994",
    "layout-home-essence-phase-exit-blur": "0.15px",
    "layout-home-essence-phase-hidden-y": "-10px",
    "layout-home-essence-phase-hidden-y-final": "-12px",
    "layout-home-essence-phase-hidden-scale": "0.985",
    "layout-home-essence-phase-hidden-blur": "0.35px",
    "layout-home-essence-phase-hidden-blur-final": "0.4px",
    "layout-home-essence-delay": "0.22s",
    "layout-home-essence-fast-duration": "0.34s",
    "layout-home-essence-gap-y": "-8px",
    "layout-home-essence-gap-scale": "0.985",
    "layout-home-essence-gap-blur": "0.3px",
    "layout-home-essence-hide-y": "-64px",
    "layout-home-essence-mobile-layer-size": "1.45rem",
    "layout-home-essence-mobile-layer-line-height": "1.18",
    "layout-home-essence-desktop-layer-size": "2.2rem",
    "layout-account-drawer-panel-width": "min(40rem, calc(100vw - (2 * var(--site-gutter, 24px))))",
    "layout-account-drawer-panel-width-mobile": "min(100vw, calc(100vw - (1.05 * var(--site-gutter, 20px))))",
    "layout-account-drawer-shell-padding-y": "1.6rem",
    "layout-account-drawer-shell-padding-x": "2rem",
    "layout-account-drawer-shell-padding-y-tablet": "1.36rem",
    "layout-account-drawer-shell-padding-x-tablet": "1.7rem",
    "layout-account-drawer-shell-padding-y-mobile": "1.2rem",
    "layout-account-drawer-shell-padding-x-mobile": "1.28rem",
    "layout-account-drawer-close-offset": "1rem",
    "layout-account-drawer-close-offset-tablet": "0.82rem",
    "layout-account-drawer-close-offset-mobile": "0.68rem",
    "layout-account-drawer-header-padding-bottom-mobile": "1.04rem",
    "layout-account-drawer-content-stage-padding-inline": "4.8rem",
    "layout-account-drawer-content-stage-padding-inline-tablet": "3.2rem",
    "layout-account-drawer-content-stage-padding-inline-mobile": "1.8rem",
    "layout-account-drawer-body-gap-mobile": "1.04rem",
    "layout-account-drawer-entry-card-padding": "1.06rem",
    "layout-account-drawer-entry-card-padding-mobile": "0.96rem",
    "layout-account-drawer-entry-title-size-mobile": "0.98rem",
    "layout-account-drawer-entry-copy-size-mobile": "0.9rem",
    "layout-account-drawer-meta-link-size": "0.82rem",
    "layout-account-drawer-meta-link-size-mobile": "0.78rem",
    "layout-account-drawer-segment-title-weight": "400",
    "layout-account-drawer-segment-title-max-width": "18ch",
    "layout-account-drawer-text-link-weight": "400",
    "layout-account-drawer-text-link-opacity": "1",
    "layout-account-drawer-text-link-opacity-hover": "1",
    "layout-account-drawer-copy-weight": "300",
    "layout-account-drawer-entry-badge-min-height": "1.66rem",
    "layout-account-drawer-entry-badge-padding-y": "0.3rem",
    "layout-account-drawer-entry-badge-padding-x": "0.58rem",
    "layout-account-drawer-entry-badge-weight": "500",
    "layout-account-drawer-entry-badge-line-height": "1",
    "layout-account-drawer-entry-title-weight": "400",
    "layout-account-drawer-profile-title-max-width": "19ch",
    "layout-account-drawer-profile-copy-max-width": "42ch",
    "account-provider-google-section-gap": "1rem",
    "profile-panel-gap": "1rem",
    "profile-dashboard-progress": "0%",
    "layout-interaction-settings-panel-width": "min(68rem, calc(100vw - (2 * var(--site-gutter))))",
    "layout-interaction-settings-panel-height": "min(42rem, calc(100svh - var(--cc-interaction-settings-panel-top) - var(--cc-interaction-settings-panel-bottom)))",
    "layout-interaction-settings-panel-radius": "var(--cc-home-platform-radius)",
    "layout-interaction-settings-panel-padding": "var(--cc-home-platform-padding)",
    "layout-interaction-settings-panel-gap": "var(--cc-home-platform-gap)",
    "layout-interaction-settings-panel-shadow": "var(--cc-home-platform-shadow)",
    "layout-interaction-settings-panel-blur": "var(--cc-home-platform-blur)",
    "layout-interaction-settings-panel-saturate": "var(--cc-home-platform-saturate)",
    "layout-interaction-settings-panel-body-gap": "var(--cc-home-platform-gap)",
    "layout-interaction-settings-panel-nav-radius": "1rem",
    "layout-interaction-settings-panel-content-radius": "1rem",
    "layout-interaction-settings-panel-icon-size": "1rem",
    "layout-interaction-settings-panel-nav-width": "13.4rem",
    "layout-interaction-settings-panel-nav-width-tablet": "11rem",
    "layout-interaction-settings-panel-nav-opacity": "0.72",
    "layout-interaction-settings-panel-nav-hover-opacity": "1",
    "layout-interaction-settings-panel-nav-font-size": "0.82rem",
    "layout-interaction-settings-panel-nav-font-weight": "500",
    "layout-interaction-settings-panel-nav-line-height": "1.2",
    "layout-interaction-settings-panel-nav-item-radius": "0.82rem",
    "layout-interaction-settings-panel-nav-item-padding": "0.76rem",
    "layout-interaction-settings-header-gap": "1rem",
    "layout-interaction-settings-title-block-gap": "0.18rem",
    "layout-interaction-settings-eyebrow-size": "0.68rem",
    "layout-interaction-settings-eyebrow-weight": "600",
    "layout-interaction-settings-eyebrow-tracking": "0.12em",
    "layout-interaction-settings-eyebrow-line-height": "1.2",
    "layout-interaction-settings-title-size": "1.02rem",
    "layout-interaction-settings-title-weight": "650",
    "layout-interaction-settings-nav-gap": "0.28rem",
    "layout-interaction-settings-section-gap": "0.68rem",
    "layout-interaction-settings-section-heading-gap": "0.38rem",
    "layout-interaction-settings-section-title-tracking": "0.08em",
    "layout-interaction-settings-option-grid-gap": "0.42rem",
    "layout-interaction-settings-option-gap": "0.22rem",
    "layout-interaction-settings-option-padding-y": "0.82rem",
    "layout-interaction-settings-option-label-size": "0.84rem",
    "layout-interaction-settings-option-label-weight": "650",
    "layout-interaction-settings-option-description-size": "0.72rem",
    "layout-interaction-settings-option-description-weight": "400",
    "layout-interaction-settings-option-description-line-height": "1.42",
    "layout-interaction-settings-row-gap": "0.75rem",
    "layout-interaction-settings-row-padding-y": "0.72rem",
    "layout-interaction-settings-row-weight": "600",
    "layout-interaction-settings-row-value-weight": "500",
    "layout-interaction-settings-toggle-row-gap": "0.9rem",
    "layout-interaction-settings-toggle-row-padding-y": "0.74rem",
    "layout-interaction-settings-toggle-radius": "999px",
    "layout-interaction-settings-toggle-width": "2.42rem",
    "layout-interaction-settings-toggle-height": "1.34rem",
    "layout-interaction-settings-toggle-padding": "0.16rem",
    "layout-interaction-settings-toggle-thumb-size": "1.02rem",
    "layout-interaction-settings-status-padding-y": "0.58rem",
    "layout-interaction-settings-status-padding-x": "0.68rem",
    "layout-interaction-settings-status-radius": "0.88rem",
    "layout-interaction-settings-status-line-height": "1.45",
    "layout-office-internal-correspondence-panel-surface": "rgba(255, 255, 255, 0.04)",
    "layout-office-internal-correspondence-panel-border-fallback": "rgba(255, 255, 255, 0.08)",
    "layout-office-internal-correspondence-text-fallback": "rgba(255, 255, 255, 0.92)",
    "layout-office-internal-correspondence-muted-fallback": "rgba(255, 255, 255, 0.62)",
    "layout-office-internal-correspondence-soft-fallback": "rgba(255, 255, 255, 0.12)",
    "layout-office-internal-correspondence-page-glow-left": "rgba(255, 255, 255, 0.06)",
    "layout-office-internal-correspondence-page-glow-right": "rgba(255, 255, 255, 0.03)",
    "layout-office-internal-correspondence-page-wash-top": "rgba(255, 255, 255, 0.015)",
    "layout-office-internal-correspondence-page-wash-bottom": "rgba(255, 255, 255, 0)",
    "layout-office-internal-correspondence-max-width": "1200px",
    "layout-office-internal-correspondence-radius": "24px",
    "layout-office-internal-correspondence-radius-outer-offset": "4px",
    "layout-office-internal-correspondence-shadow": "0 24px 80px rgba(0, 0, 0, 0.34)",
    "layout-office-internal-correspondence-shell-gap": "32px",
    "layout-office-internal-correspondence-shell-padding-top": "56px",
    "layout-office-internal-correspondence-shell-padding-inline": "24px",
    "layout-office-internal-correspondence-shell-padding-bottom": "80px",
    "layout-office-internal-correspondence-surface-max-width": "1440px",
    "layout-office-internal-correspondence-menu-gap": "24px",
    "layout-office-internal-correspondence-footer-gap": "32px",
    "layout-office-internal-correspondence-layout-gap": "24px",
    "layout-office-internal-correspondence-sidebar-width": "320px",
    "layout-office-internal-correspondence-content-min-width": "0",
    "layout-office-internal-correspondence-sidebar-top-offset": "110px",
    "layout-office-internal-correspondence-section-gap": "24px",
    "layout-office-internal-correspondence-header-surface-top": "rgba(255, 255, 255, 0.05)",
    "layout-office-internal-correspondence-header-surface-bottom": "rgba(255, 255, 255, 0.025)",
    "layout-office-internal-correspondence-header-padding": "40px",
    "layout-office-internal-correspondence-header-padding-mobile": "24px",
    "layout-office-internal-correspondence-eyebrow-margin-bottom": "16px",
    "layout-office-internal-correspondence-eyebrow-size": "0.78rem",
    "layout-office-internal-correspondence-eyebrow-weight": "600",
    "layout-office-internal-correspondence-eyebrow-tracking": "0.14em",
    "layout-office-internal-correspondence-title-size": "clamp(2.4rem, 4vw, 4.2rem)",
    "layout-office-internal-correspondence-title-size-mobile": "2.4rem",
    "layout-office-internal-correspondence-title-line-height": "0.94",
    "layout-office-internal-correspondence-title-tracking": "-0.05em",
    "layout-office-internal-correspondence-title-weight": "600",
    "layout-office-internal-correspondence-title-max-width": "900px",
    "layout-office-internal-correspondence-copy-margin-top": "20px",
    "layout-office-internal-correspondence-copy-max-width": "760px",
    "layout-office-internal-correspondence-copy-size": "1rem",
    "layout-office-internal-correspondence-copy-line-height": "1.7",
    "layout-office-internal-correspondence-grid-gap": "24px",
    "layout-office-internal-correspondence-card-padding": "28px",
    "layout-office-internal-correspondence-card-padding-mobile": "24px",
    "layout-office-internal-correspondence-card-gap": "18px",
    "layout-office-internal-correspondence-card-title-size": "1.15rem",
    "layout-office-internal-correspondence-card-title-weight": "600",
    "layout-office-internal-correspondence-card-title-tracking": "-0.02em",
    "layout-office-internal-correspondence-card-copy-size": "0.96rem",
    "layout-office-internal-correspondence-card-copy-line-height": "1.65",
    "layout-office-internal-correspondence-link-list-gap": "10px",
    "layout-office-internal-correspondence-link-opacity": "0.92",
    "layout-office-internal-correspondence-link-opacity-hover": "1",
    "layout-office-internal-correspondence-link-motion": "180ms",
    "layout-office-internal-correspondence-subgrid-gap": "16px",
    "layout-office-internal-correspondence-subcard-radius": "18px",
    "layout-office-internal-correspondence-subcard-padding": "20px",
    "layout-office-internal-correspondence-subcard-surface": "rgba(255, 255, 255, 0.025)",
    "layout-office-internal-correspondence-subcard-gap": "12px",
    "layout-office-internal-correspondence-subcard-title-size": "0.98rem",
    "layout-office-internal-correspondence-subcard-title-weight": "600",
    "layout-office-internal-correspondence-subcard-title-tracking": "-0.02em",
    "layout-office-internal-correspondence-subcard-copy-size": "0.92rem",
    "layout-office-internal-correspondence-subcard-copy-line-height": "1.6",
    "layout-office-internal-correspondence-mobile-shell-padding-top": "18px",
    "layout-office-internal-correspondence-mobile-shell-padding-inline": "16px",
    "layout-office-internal-correspondence-mobile-shell-padding-bottom": "48px",
    "layout-cookie-language-overlay-shadow": "0 20px 60px color-mix(in srgb, var(--shadow-color, #000000) 8%, transparent)",
    "layout-cookie-language-overlay-shadow-dark": "0 24px 70px color-mix(in srgb, var(--shadow-color, #000000) 24%, transparent)",
    "layout-cookie-language-overlay-width": "min(36rem, calc(100vw - (2 * var(--site-gutter, 24px))))",
    "layout-cookie-language-overlay-max-height": "min(46rem, calc(100vh - 3rem))",
    "layout-cookie-language-overlay-max-height-mobile": "min(42rem, calc(100vh - 1.6rem))",
    "layout-cookie-language-overlay-min-height": "24rem",
    "layout-cookie-language-overlay-region-min-height-mobile": "12rem",
    "layout-cookie-language-overlay-radius": "1.9rem",
    "layout-cookie-language-overlay-toolbar-padding-top": "1.02rem",
    "layout-cookie-language-overlay-toolbar-gap": "0.44rem",
    "layout-cookie-language-overlay-toolbar-mobile-offset": "0.2rem",
    "layout-cookie-language-overlay-search-to-list-gap": "0.68rem",
    "layout-cookie-language-overlay-list-padding-top": "0",
    "layout-cookie-language-overlay-list-padding-bottom": "1rem",
    "layout-cookie-language-overlay-back-icon-size": "1rem",
    "layout-cookie-language-overlay-motion-fast": "200ms",
    "layout-cookie-language-overlay-search-min-height": "3rem",
    "layout-cookie-language-overlay-search-padding-y": "0.82rem",
    "layout-cookie-language-overlay-search-padding-x": "1rem",
    "layout-cookie-language-overlay-search-radius": "999px",
    "layout-cookie-language-overlay-search-size": "0.94rem",
    "layout-cookie-language-overlay-search-weight": "300",
    "layout-cookie-language-overlay-search-tracking": "-0.015em",
    "layout-cookie-language-overlay-search-line-height": "1.2",
    "layout-cookie-language-overlay-regions-gap": "0.56rem",
    "layout-cookie-language-overlay-section-gap": "0.68rem",
    "layout-cookie-language-overlay-group-gap": "0.5rem",
    "layout-cookie-language-overlay-country-gap": "1rem",
    "layout-cookie-language-overlay-country-padding-y": "0.98rem",
    "layout-cookie-language-overlay-country-padding-x": "1rem",
    "layout-cookie-language-overlay-country-radius": "1rem",
    "layout-cookie-language-overlay-country-copy-gap": "1rem",
    "layout-cookie-language-overlay-country-copy-gap-mobile": "0.82rem",
    "layout-cookie-language-overlay-country-title-size": "1.08rem",
    "layout-cookie-language-overlay-country-title-size-mobile": "1rem",
    "layout-cookie-language-overlay-country-title-weight": "300",
    "layout-cookie-language-overlay-country-title-tracking": "-0.03em",
    "layout-cookie-language-overlay-country-title-line-height": "1.12",
    "layout-cookie-language-overlay-country-subtitle-size": "0.88rem",
    "layout-cookie-language-overlay-country-subtitle-size-mobile": "0.84rem",
    "layout-cookie-language-overlay-country-subtitle-weight": "300",
    "layout-cookie-language-overlay-country-subtitle-tracking": "-0.012em",
    "layout-cookie-language-overlay-country-subtitle-line-height": "1.35",
    "layout-country-container-pad": "0px",
    "layout-country-motion-fast": "220ms",
    "layout-country-motion-medium": "240ms",
    "layout-country-motion-overlay": "620ms",
    "layout-country-motion-inner-transform": "1400ms",
    "layout-country-motion-inner-opacity": "900ms",
    "layout-country-motion-close-transform": "1500ms",
    "layout-country-motion-close-opacity": "1100ms",
    "layout-country-motion-item-transform": "980ms",
    "layout-country-motion-item-opacity": "720ms",
    "layout-country-motion-ease": "cubic-bezier(0.22,1,0.36,1)",
    "layout-country-overlay-blur": "16px",
    "layout-country-overlay-separator-opacity": "0.35",
    "layout-country-heading-opacity": "0.85",
    "layout-country-option-opacity": "0.9",
    "layout-country-option-hover-opacity": "1",
    "layout-country-overlay-padding-block": "clamp(3rem, 6vh, 5rem)",
    "layout-country-overlay-inner-gap": "1.5rem",
    "layout-country-overlay-inner-enter-y": "48px",
    "layout-country-overlay-inner-enter-scale": "0.98",
    "layout-country-overlay-inner-close-y": "64px",
    "layout-country-overlay-inner-close-scale": "0.965",
    "layout-country-title-size": "1.4rem",
    "layout-country-title-size-mobile": "1.6rem",
    "layout-country-title-size-small": "1.4rem",
    "layout-country-title-weight": "300",
    "layout-country-title-line-height": "1.2",
    "layout-country-title-tracking": "0.02em",
    "layout-country-region-gap": "0.75rem",
    "layout-country-region-title-size": "1.1rem",
    "layout-country-region-title-size-mobile": "1rem",
    "layout-country-region-title-size-small": "0.95rem",
    "layout-country-region-title-weight": "700",
    "layout-country-region-title-margin-bottom": "0.5rem",
    "layout-country-separator-margin-top": "0.5rem",
    "layout-country-separator-margin-bottom": "1rem",
    "layout-country-separator-height": "1px",
    "layout-country-list-row-gap": "0.5rem",
    "layout-country-list-column-gap": "2rem",
    "layout-country-list-width-large": "25%",
    "layout-country-list-gap-large": "1.5rem",
    "layout-country-list-width-default": "33%",
    "layout-country-list-gap-default": "1.33rem",
    "layout-country-list-width-tablet": "50%",
    "layout-country-list-gap-tablet": "1rem",
    "layout-country-list-width-mobile": "100%",
    "layout-country-list-min-width": "150px",
    "layout-country-item-enter-y": "36px",
    "layout-country-item-delay-01": "100ms",
    "layout-country-item-delay-02": "130ms",
    "layout-country-item-delay-03": "160ms",
    "layout-country-item-delay-04": "190ms",
    "layout-country-item-delay-05": "220ms",
    "layout-country-item-delay-06": "250ms",
    "layout-country-item-delay-07": "280ms",
    "layout-country-item-delay-08": "310ms",
    "layout-country-item-delay-09": "340ms",
    "layout-country-item-delay-10": "370ms",
    "layout-country-item-delay-11": "400ms",
    "layout-country-item-delay-12": "430ms",
    "layout-country-option-size": "1rem",
    "layout-country-option-size-mobile": "0.95rem",
    "layout-country-option-size-small": "0.9rem",
    "layout-country-option-weight": "300",
    "layout-office-menu-bg": "rgba(7, 7, 7, 0.86)",
    "layout-office-menu-panel": "rgba(255, 255, 255, 0.04)",
    "layout-office-menu-border-fallback": "rgba(255, 255, 255, 0.08)",
    "layout-office-menu-text-fallback": "rgba(255, 255, 255, 0.92)",
    "layout-office-menu-muted-fallback": "rgba(255, 255, 255, 0.58)",
    "layout-office-menu-soft-fallback": "rgba(255, 255, 255, 0.12)",
    "layout-office-menu-max-width": "1440px",
    "layout-office-menu-radius": "22px",
    "layout-office-menu-shadow": "0 20px 60px rgba(0, 0, 0, 0.26)",
    "layout-office-menu-blur": "18px",
    "layout-office-menu-shell-padding-inline": "24px",
    "layout-office-menu-shell-padding-top": "18px",
    "layout-office-menu-shell-gap": "10px",
    "layout-office-menu-inner-min-height": "72px",
    "layout-office-menu-inner-gap": "24px",
    "layout-office-menu-inner-padding-y": "16px",
    "layout-office-menu-inner-padding-x": "20px",
    "layout-office-menu-brand-gap": "4px",
    "layout-office-menu-brand-size": "0.96rem",
    "layout-office-menu-brand-weight": "600",
    "layout-office-menu-brand-tracking": "-0.02em",
    "layout-office-menu-context-size": "0.78rem",
    "layout-office-menu-context-tracking": "0.02em",
    "layout-office-menu-nav-gap": "18px",
    "layout-office-menu-link-motion": "180ms",
    "layout-office-menu-link-padding-y": "8px",
    "layout-office-menu-link-padding-x": "2px",
    "layout-office-menu-link-size": "0.9rem",
    "layout-office-menu-link-opacity": "0.88",
    "layout-office-menu-link-opacity-active": "1",
    "layout-office-menu-utility-gap": "14px",
    "layout-office-menu-status-min-height": "34px",
    "layout-office-menu-status-padding-x": "12px",
    "layout-office-menu-status-radius": "999px",
    "layout-office-menu-status-size": "0.78rem",
    "layout-office-menu-status-tracking": "0.08em",
    "layout-office-menu-toggle-min-height": "38px",
    "layout-office-menu-toggle-padding-x": "14px",
    "layout-office-menu-mobile-panel-gap": "8px",
    "layout-office-menu-mobile-panel-padding": "14px",
    "layout-office-menu-mobile-panel-bg": "rgba(7, 7, 7, 0.94)",
    "layout-office-menu-mobile-link-min-height": "42px",
    "layout-office-menu-mobile-link-padding-x": "10px",
    "layout-office-menu-mobile-link-radius": "12px",
    "layout-office-menu-mobile-link-opacity": "0.9",
    "layout-office-menu-tablet-nav-gap": "14px",
    "layout-office-menu-tablet-link-size": "0.86rem",
    "layout-office-menu-mobile-shell-padding-top": "14px",
    "layout-office-menu-mobile-shell-padding-inline": "16px",
    "layout-office-menu-mobile-inner-gap": "16px",
    "layout-office-menu-mobile-inner-padding-y": "14px",
    "layout-office-menu-mobile-inner-padding-x": "16px",
    "layout-feed-main-column": "1.2fr",
    "layout-feed-discovery-min": "18rem",
    "layout-feed-discovery-column": "0.8fr",
    "layout-feed-layout-gap": "1.5rem",
    "layout-feed-panel-gap": "1.25rem",
    "layout-feed-composer-min-height": "7.5rem",
    "layout-feed-input-line-height": "1.7",
    "layout-feed-action-min-height": "2.6rem",
    "layout-feed-action-padding-x": "1rem",
    "layout-feed-action-radius": "999px",
    "layout-feed-motion": "220ms",
    "layout-feed-header-gap": "1rem",
    "layout-feed-tab-gap": "0.75rem",
    "layout-feed-tab-min-height": "2.2rem",
    "layout-feed-tab-padding-x": "0.95rem",
    "layout-feed-sort-gap": "0.45rem",
    "layout-feed-sort-label-size": "0.86rem",
    "layout-feed-sort-label-line-height": "1.6",
    "layout-feed-select-min-height": "2.8rem",
    "layout-feed-select-padding-x": "1rem",
    "layout-feed-select-radius": "1rem",
    "layout-feed-stream-gap": "1.15rem",
    "layout-feed-post-gap": "0.85rem",
    "layout-feed-post-padding-bottom": "1.1rem",
    "layout-feed-post-identity-gap": "0.85rem",
    "layout-feed-avatar-size": "3rem",
    "layout-feed-avatar-radius": "999px",
    "layout-feed-avatar-fallback-size": "0.92rem",
    "layout-feed-avatar-fallback-weight": "600",
    "layout-feed-avatar-fallback-tracking": "0.06em",
    "layout-feed-identity-gap": "0.32rem",
    "layout-feed-row-gap": "0.55rem",
    "layout-feed-entity-size": "1rem",
    "layout-feed-entity-weight": "500",
    "layout-feed-entity-line-height": "1.32",
    "layout-feed-handle-size": "0.82rem",
    "layout-feed-handle-line-height": "1.5",
    "layout-feed-chip-min-height": "1.85rem",
    "layout-feed-chip-padding-x": "0.72rem",
    "layout-feed-chip-radius": "999px",
    "layout-feed-chip-size": "0.72rem",
    "layout-feed-chip-tracking": "0.04em",
    "layout-feed-badge-gap": "0.4rem",
    "layout-feed-badge-blue": "#1d9bf0",
    "layout-feed-badge-border-mix": "30%",
    "layout-feed-badge-bg-mix": "10%",
    "layout-feed-badge-weight": "600",
    "layout-feed-badge-icon-size": "0.82rem",
    "layout-feed-copy-line-height": "1.72",
    "layout-feed-post-action-min-height": "2.35rem",
    "layout-feed-post-action-padding-x": "0.92rem",
    "layout-feed-post-action-size": "0.76rem",
    "layout-home-profile-control-panel-width": "min(24rem, calc(100vw - (var(--cc-shell-panel-inline-padding) * 2)))",
    "layout-home-profile-control-panel-inner-gap": "1.25rem",
    "layout-home-profile-control-panel-inner-padding-top": "1.25rem",
    "layout-home-profile-control-panel-inner-padding-right": "0",
    "layout-home-profile-control-panel-inner-padding-bottom": "2rem",
    "layout-home-profile-control-panel-inner-padding-left": "0",
    "layout-home-profile-control-panel-inner-padding-top-mobile": "1rem",
    "layout-home-profile-control-panel-header-gap": "1rem",
    "layout-home-profile-control-panel-header-padding-bottom": "0.95rem",
    "layout-home-profile-control-panel-eyebrow-margin-bottom": "0.35rem",
    "layout-home-profile-control-panel-section-gap": "0.7rem",
    "layout-home-profile-control-panel-stack-gap": "0.45rem",
    "layout-home-profile-control-panel-identity-gap": "0.9rem",
    "layout-home-profile-control-panel-identity-padding-y": "0.9rem",
    "layout-home-profile-control-panel-identity-padding-x": "0.95rem",
    "layout-home-profile-control-panel-avatar-size": "3rem",
    "layout-home-profile-control-panel-avatar-radius": "999px",
    "layout-home-profile-control-panel-avatar-fallback-size": "0.95rem",
    "layout-home-profile-control-panel-avatar-fallback-weight": "600",
    "layout-home-profile-control-panel-avatar-fallback-tracking": "0.06em",
    "layout-home-profile-control-panel-name-margin-bottom": "0.2rem",
    "layout-home-profile-control-panel-name-size": "0.92rem",
    "layout-home-profile-control-panel-name-weight": "500",
    "layout-home-profile-control-panel-username-margin-bottom": "0.25rem",
    "layout-home-profile-control-panel-username-size": "0.76rem",
    "layout-home-profile-control-panel-username-weight": "500",
    "layout-home-profile-control-panel-username-tracking": "0.1em",
    "layout-home-profile-control-panel-plan-margin-bottom": "0.35rem",
    "layout-home-profile-control-panel-plan-size": "0.78rem",
    "layout-home-profile-control-panel-plan-weight": "500",
    "layout-home-profile-control-panel-plan-tracking": "0.06em",
    "layout-home-profile-control-panel-meta-size": "0.82rem",
    "layout-home-profile-control-panel-meta-line-height": "1.5",
    "layout-home-profile-control-panel-route-link-margin-top": "0.55rem",
    "layout-home-profile-control-panel-route-link-size": "0.82rem",
    "layout-home-profile-control-panel-route-link-line-height": "1.3",
    "layout-home-profile-control-panel-status-grid-gap": "0.55rem",
    "layout-home-profile-control-panel-status-card-gap": "0.35rem",
    "layout-home-profile-control-panel-status-card-padding-y": "0.85rem",
    "layout-home-profile-control-panel-status-card-padding-x": "0.9rem",
    "layout-home-profile-control-panel-status-label-size": "0.68rem",
    "layout-home-profile-control-panel-status-label-weight": "500",
    "layout-home-profile-control-panel-status-label-tracking": "0.12em",
    "layout-home-profile-control-panel-status-value-size": "0.86rem",
    "layout-home-profile-control-panel-status-value-weight": "500",
    "layout-home-profile-control-panel-status-value-line-height": "1.3",
    "layout-home-profile-control-panel-route-status-size": "0.82rem",
    "layout-home-profile-control-panel-route-status-line-height": "1.5",
    "layout-home-profile-control-panel-item-min-height": "2.8rem",
    "layout-home-profile-control-panel-item-padding-y": "0.78rem",
    "layout-home-profile-control-panel-item-padding-x": "0.92rem",
    "layout-home-profile-control-panel-item-size": "0.84rem",
    "layout-home-profile-control-panel-item-weight": "500",
    "layout-home-profile-control-panel-item-tracking": "0.02em",
    "layout-office-footer-bg": "rgba(7, 7, 7, 0.82)",
    "layout-office-footer-panel": "rgba(255, 255, 255, 0.04)",
    "layout-office-footer-border-fallback": "rgba(255, 255, 255, 0.08)",
    "layout-office-footer-text-fallback": "rgba(255, 255, 255, 0.92)",
    "layout-office-footer-muted-fallback": "rgba(255, 255, 255, 0.58)",
    "layout-office-footer-soft-fallback": "rgba(255, 255, 255, 0.12)",
    "layout-office-footer-max-width": "1440px",
    "layout-office-footer-radius": "28px",
    "layout-office-footer-shadow": "0 20px 60px rgba(0, 0, 0, 0.24)",
    "layout-office-footer-shell-padding-top": "0",
    "layout-office-footer-shell-padding-inline": "24px",
    "layout-office-footer-shell-padding-bottom": "32px",
    "layout-office-footer-inner-gap": "28px",
    "layout-office-footer-inner-padding": "32px",
    "layout-office-footer-brand-gap": "12px",
    "layout-office-footer-brand-max-width": "720px",
    "layout-office-footer-eyebrow-size": "0.78rem",
    "layout-office-footer-eyebrow-weight": "600",
    "layout-office-footer-eyebrow-tracking": "0.14em",
    "layout-office-footer-title-size": "1.8rem",
    "layout-office-footer-title-line-height": "1.04",
    "layout-office-footer-title-weight": "600",
    "layout-office-footer-title-tracking": "-0.04em",
    "layout-office-footer-copy-size": "0.98rem",
    "layout-office-footer-copy-line-height": "1.72",
    "layout-office-footer-columns-count": "3",
    "layout-office-footer-columns-gap": "20px",
    "layout-office-footer-column-gap": "14px",
    "layout-office-footer-column-padding": "18px",
    "layout-office-footer-column-radius": "18px",
    "layout-office-footer-column-title-size": "0.95rem",
    "layout-office-footer-column-title-weight": "600",
    "layout-office-footer-column-title-tracking": "-0.02em",
    "layout-office-footer-link-gap": "10px",
    "layout-office-footer-link-motion": "180ms",
    "layout-office-footer-link-opacity": "0.9",
    "layout-office-footer-link-opacity-hover": "1",
    "layout-office-footer-meta-gap": "12px",
    "layout-office-footer-meta-label-size": "0.84rem",
    "layout-office-footer-meta-label-tracking": "0.04em",
    "layout-office-footer-meta-value-size": "0.92rem",
    "layout-office-footer-meta-value-weight": "600",
    "layout-office-footer-bottom-gap": "16px",
    "layout-office-footer-bottom-padding-top": "8px",
    "layout-office-footer-legal-size": "0.84rem",
    "layout-office-footer-legal-line-height": "1.5",
    "layout-office-footer-mobile-shell-padding-top": "0",
    "layout-office-footer-mobile-shell-padding-inline": "16px",
    "layout-office-footer-mobile-shell-padding-bottom": "24px",
    "layout-office-footer-mobile-inner-padding": "24px",
    "layout-models-toolbar-gap": "1.15rem",
    "layout-models-toolbar-top-gap": "1rem",
    "layout-models-sort-gap": "0.45rem",
    "layout-models-sort-label-size": "0.86rem",
    "layout-models-sort-label-line-height": "1.6",
    "layout-models-select-min-height": "3.4rem",
    "layout-models-select-padding-x": "1rem",
    "layout-models-select-radius": "1rem",
    "layout-models-filter-row-gap": "0.75rem",
    "layout-models-filter-chip-min-height": "2.2rem",
    "layout-models-filter-chip-padding-x": "0.95rem",
    "layout-models-filter-chip-radius": "999px",
    "layout-models-motion": "220ms",
    "layout-models-filter-groups-count": "2",
    "layout-models-filter-groups-gap": "1rem",
    "layout-models-filter-group-gap": "0.55rem",
    "layout-models-filter-label-size": "0.78rem",
    "layout-models-filter-label-weight": "500",
    "layout-models-filter-label-tracking": "0.1em",
    "layout-models-card-column-span": "6",
    "layout-models-card-column-span-mobile": "12",
    "layout-models-card-identity-gap": "0.9rem",
    "layout-models-avatar-size": "3rem",
    "layout-models-avatar-radius": "999px",
    "layout-models-avatar-fallback-size": "0.92rem",
    "layout-models-avatar-fallback-weight": "600",
    "layout-models-avatar-fallback-tracking": "0.06em",
    "layout-models-identity-copy-gap": "0.3rem",
    "layout-models-title-row-gap": "0.6rem",
    "layout-models-verification-gap": "0.42rem",
    "layout-models-verification-min-height": "1.9rem",
    "layout-models-verification-padding-x": "0.7rem",
    "layout-models-verification-radius": "999px",
    "layout-models-verification-blue": "#1d9bf0",
    "layout-models-verification-border-mix": "30%",
    "layout-models-verification-bg-mix": "10%",
    "layout-models-verification-size": "0.72rem",
    "layout-models-verification-weight": "600",
    "layout-models-verification-tracking": "0.08em",
    "layout-models-verification-icon-size": "0.9rem",
    "layout-models-handle-size": "0.82rem",
    "layout-models-handle-tracking": "0.08em",
    "layout-models-meta-gap": "0.55rem",
    "layout-models-meta-row-gap": "1rem",
    "layout-models-meta-size": "0.82rem",
    "layout-models-meta-line-height": "1.5",
    "layout-models-meta-strong-weight": "500",
    "layout-models-actions-gap": "0.75rem",
    "layout-models-action-min-height": "2.6rem",
    "layout-models-action-padding-x": "1rem",
    "layout-models-action-radius": "999px",
    "layout-legal-page-narrow-width": "920px",
    "layout-legal-page-border-fallback": "rgba(255, 255, 255, 0.1)",
    "layout-legal-page-surface": "rgba(255, 255, 255, 0.03)",
    "layout-legal-page-muted": "rgba(255, 255, 255, 0.64)",
    "layout-legal-page-soft": "rgba(255, 255, 255, 0.5)",
    "layout-legal-page-body-min-height": "100vh",
    "layout-legal-page-shell-padding-top": "160px",
    "layout-legal-page-shell-padding-right": "0",
    "layout-legal-page-shell-padding-bottom": "96px",
    "layout-legal-page-shell-padding-left": "0",
    "layout-legal-page-shell-padding-top-tablet": "136px",
    "layout-legal-page-shell-padding-top-mobile": "124px",
    "layout-legal-page-shell-padding-bottom-mobile": "72px",
    "layout-legal-page-header-gap": "20px",
    "layout-legal-page-header-max-width": "1100px",
    "layout-legal-page-eyebrow-size": "0.76rem",
    "layout-legal-page-eyebrow-tracking": "0.16em",
    "layout-legal-page-title-size": "64px",
    "layout-legal-page-title-size-tablet": "52px",
    "layout-legal-page-title-size-mobile": "42px",
    "layout-legal-page-title-line-height": "0.96",
    "layout-legal-page-title-tracking": "-0.05em",
    "layout-legal-page-intro-line-height": "1.72",
    "layout-legal-page-meta-gap": "12px",
    "layout-legal-page-meta-margin-top": "4px",
    "layout-legal-page-meta-padding-y": "10px",
    "layout-legal-page-meta-padding-x": "12px",
    "layout-legal-page-meta-size": "0.86rem",
    "layout-legal-page-divider-height": "1px",
    "layout-legal-page-divider-margin-top": "40px",
    "layout-legal-page-divider-margin-bottom": "44px",
    "layout-legal-page-divider-margin-top-mobile": "30px",
    "layout-legal-page-divider-margin-bottom-mobile": "32px",
    "layout-legal-page-content-gap": "40px",
    "layout-legal-page-content-gap-mobile": "32px",
    "layout-legal-page-section-gap": "14px",
    "layout-legal-page-section-title-size": "1.18rem",
    "layout-legal-page-section-title-line-height": "1.2",
    "layout-legal-page-section-title-tracking": "-0.02em",
    "layout-legal-page-list-padding-inline-start": "20px",
    "layout-legal-page-list-gap": "8px",
    "layout-legal-page-callout-gap": "8px",
    "layout-legal-page-callout-padding-y": "18px",
    "layout-legal-page-callout-padding-x": "20px",
    "layout-legal-page-footer-margin-top": "52px",
    "layout-legal-page-footer-padding-top": "24px",
    "layout-legal-page-footer-line-height": "1.7",
    "layout-legal-page-link-border-rest": "rgba(255, 255, 255, 0.22)",
    "layout-legal-page-link-border-hover": "rgba(255, 255, 255, 0.4)",
    "layout-about-icos-node-width": "min(30rem, 34vw)",
    "layout-about-icos-node-width-desktop": "30rem",
    "layout-about-icos-node-width-tablet": "min(24rem, 46vw)",
    "layout-about-icos-node-width-tablet-max": "24rem",
    "layout-about-icos-node-width-mobile": "min(18rem, 68vw)",
    "layout-about-icos-node-width-mobile-max": "18rem",
    "layout-about-anchor-max-width": "26rem",
    "layout-about-anchor-max-width-wide": "28rem",
    "layout-about-icos-copy-body-width": "28rem",
    "layout-about-icos-copy-body-width-tablet": "26rem",
    "layout-about-icos-copy-gap": "clamp(var(--spacing-lg), 3vw, var(--spacing-xl))",
    "layout-about-section-title-size-desktop": "2.08rem",
    "layout-about-section-title-size-wide": "2.3rem",
    "layout-about-section-title-size-tablet": "1.82rem",
    "layout-about-section-title-size-mobile": "1.56rem",
    "layout-about-section-title-weight": "300",
    "layout-about-section-title-opacity": "1",
    "layout-about-section-title-text-transform": "none",
    "layout-about-closing-padding-bottom-mobile": "5rem",
    "layout-about-stack-handoff-distance": "100svh",
    "layout-about-stack-panel-height": "100svh",
    "layout-about-stack-shell-height": "200svh",
    "layout-about-stack-handoff-distance-dynamic": "100dvh",
    "layout-about-stack-panel-height-dynamic": "100dvh",
    "layout-about-stack-shell-height-dynamic": "200dvh",
    "layout-about-closing-sub-opacity": "0.78",
    "layout-about-legacy-post-padding-y": "2rem",
    "layout-about-legacy-post-title-size": "1.5rem",
    "layout-about-legacy-post-title-weight": "600",
    "layout-about-legacy-post-title-margin-bottom": "0.5rem",
    "layout-about-legacy-post-excerpt-size": "1rem",
    "layout-about-legacy-post-excerpt-margin-bottom": "0.5rem",
    "layout-about-legacy-comments-padding-y": "2rem",
    "layout-about-legacy-comments-title-size": "1.8rem",
    "layout-about-legacy-comments-title-weight": "600",
    "layout-about-legacy-comments-title-margin-bottom": "1.5rem",
    "layout-about-legacy-comment-padding-y": "1rem",
    "layout-about-legacy-comment-size": "0.95rem",
    "layout-about-legacy-comment-line-height": "1.6",
    "layout-about-hero-stage-min-height": "320vh",
    "layout-about-hero-fixed-inset": "0",
    "layout-about-hero-height": "100vh",
    "layout-about-hero-height-small": "100svh",
    "layout-about-hero-height-dynamic": "100dvh",
    "layout-about-hero-z-index": "-100",
    "layout-about-hero-media-z-index": "-102",
    "layout-about-hero-content-z-index": "2",
    "layout-about-hero-overlay-z-index": "1",
    "layout-about-zero": "0",
    "layout-about-center-percent": "50%",
    "layout-about-full-width": "100%",
    "layout-about-viewport-width": "100vw",
    "layout-about-figure-translate-x": "-50%",
    "layout-about-body-opacity": "0.92",
    "layout-about-title-margin-bottom": "0.2rem",
    "layout-about-featured-mobile-shell-factor": "1.8",
    "layout-about-closing-sub-tracking": "0.01em",
    "layout-home-platform-theme-eyebrow-opacity": "0.72",
    "layout-home-platform-theme-summary-opacity": "0.72",
    "layout-home-platform-theme-caption-opacity": "0.72",
    "layout-home-platform-theme-token-grid-disabled-opacity": "0.48",
    "layout-home-platform-theme-token-grid-enabled-opacity": "1",
    "layout-home-platform-theme-motion-fast": "220ms",
    "layout-home-platform-theme-shell-gap": "1.05rem",
    "layout-home-platform-theme-header-gap": "0.36rem",
    "layout-home-platform-theme-eyebrow-size": "0.68rem",
    "layout-home-platform-theme-eyebrow-weight": "500",
    "layout-home-platform-theme-eyebrow-tracking": "0.08em",
    "layout-home-platform-theme-title-size": "1.18rem",
    "layout-home-platform-theme-title-weight": "500",
    "layout-home-platform-theme-title-line-height": "1.18",
    "layout-home-platform-theme-title-tracking": "-0.01em",
    "layout-home-platform-theme-summary-max-width": "44rem",
    "layout-home-platform-theme-summary-size": "0.88rem",
    "layout-home-platform-theme-summary-line-height": "1.46",
    "layout-home-platform-theme-section-gap": "0.72rem",
    "layout-home-platform-theme-section-padding-top": "0.82rem",
    "layout-home-platform-theme-section-header-gap": "0.28rem",
    "layout-home-platform-theme-mode-grid-count": "4",
    "layout-home-platform-theme-mode-grid-gap": "0.58rem",
    "layout-home-platform-theme-mode-option-gap": "0.16rem",
    "layout-home-platform-theme-mode-option-min-height": "4.35rem",
    "layout-home-platform-theme-mode-option-padding-y": "0.72rem",
    "layout-home-platform-theme-mode-option-padding-x": "0.78rem",
    "layout-home-platform-theme-mode-option-radius": "1rem",
    "layout-home-platform-theme-mode-label-size": "0.88rem",
    "layout-home-platform-theme-mode-label-weight": "500",
    "layout-home-platform-theme-mode-label-line-height": "1.3",
    "layout-home-platform-theme-caption-size": "0.74rem",
    "layout-home-platform-theme-caption-line-height": "1.32",
    "layout-home-platform-theme-token-grid-count": "2",
    "layout-home-platform-theme-token-grid-gap": "0.58rem",
    "layout-home-platform-theme-token-field-gap": "0.72rem",
    "layout-home-platform-theme-token-field-min-height": "3.55rem",
    "layout-home-platform-theme-token-field-padding-y": "0.72rem",
    "layout-home-platform-theme-token-field-padding-x": "0.78rem",
    "layout-home-platform-theme-token-field-radius": "1rem",
    "layout-home-platform-theme-token-label-size": "0.8rem",
    "layout-home-platform-theme-token-label-weight": "500",
    "layout-home-platform-theme-token-label-line-height": "1.35",
    "layout-home-platform-theme-toggle-list-gap": "0.56rem",
    "layout-home-platform-theme-toggle-row-gap": "0.86rem",
    "layout-home-platform-theme-toggle-row-padding-y": "0.68rem",
    "layout-home-interaction-panel-width": "min(46rem, calc(100vw - (2 * var(--site-gutter))))",
    "layout-home-interaction-panel-width-mobile": "min(100%, calc(100vw - (2 * var(--site-gutter))))",
    "layout-home-interaction-panel-gap": "0.38rem",
    "layout-home-interaction-panel-padding": "0.54rem",
    "layout-home-interaction-panel-padding-mobile": "0.52rem",
    "layout-home-interaction-panel-radius": "1.42rem",
    "layout-home-interaction-panel-shadow": "0 18px 48px color-mix(in srgb, var(--shadow-color, #000000) 14%, transparent)",
    "layout-home-interaction-panel-blur": "18px",
    "layout-home-interaction-panel-saturate": "126%",
    "layout-home-interaction-panel-form-gap": "0.32rem",
    "layout-home-interaction-panel-developer-actions-gap": "0.32rem",
    "layout-home-interaction-panel-developer-action-min-height": "1.8rem",
    "layout-home-interaction-panel-developer-action-padding-x": "0.62rem",
    "layout-home-interaction-panel-developer-action-size": "0.7rem",
    "layout-home-interaction-panel-developer-action-weight": "560",
    "layout-home-interaction-panel-developer-action-line-height": "1.1",
    "layout-home-interaction-panel-developer-action-tracking": "0.02em",
    "layout-home-interaction-panel-developer-control-min-width": "8.8rem",
    "layout-home-interaction-panel-developer-status-size": "0.68rem",
    "layout-home-interaction-panel-developer-status-line-height": "1.3",
    "layout-home-interaction-panel-input-min-height": "2.72rem",
    "layout-home-interaction-panel-input-max-height": "6.25rem",
    "layout-home-interaction-panel-input-padding-y": "0.42rem",
    "layout-home-interaction-panel-input-padding-x": "0.64rem",
    "layout-home-interaction-panel-input-radius": "0.92rem",
    "layout-home-interaction-panel-input-line-height": "1.38",
    "layout-home-interaction-panel-composer-gap": "0.38rem",
    "layout-home-interaction-panel-composer-side-gap": "0.34rem",
    "layout-home-interaction-panel-control-size": "2.08rem",
    "layout-home-interaction-panel-control-radius": "999px",
    "layout-home-interaction-panel-control-pulse-shadow": "0 0 0 0 color-mix(in srgb, var(--color-primary1) 28%, transparent)",
    "layout-home-interaction-panel-control-pulse-shadow-active": "0 0 0 0.42rem color-mix(in srgb, var(--color-primary1) 0%, transparent)",
    "layout-home-interaction-panel-model-height": "2.08rem",
    "layout-home-interaction-panel-model-padding-x": "0.68rem",
    "layout-home-interaction-panel-model-padding-x-mobile": "0.66rem",
    "layout-home-interaction-panel-model-radius": "999px",
    "layout-home-interaction-panel-model-gap": "0.32rem",
    "layout-home-interaction-panel-model-name-size": "0.82rem",
    "layout-home-interaction-panel-model-name-weight": "500",
    "layout-home-interaction-panel-model-name-line-height": "1.2",
    "layout-home-interaction-panel-model-name-tracking": "-0.01em",
    "layout-home-interaction-panel-icon-size": "1rem",
    "layout-home-interaction-panel-icon-opacity": "0.82",
    "layout-home-interaction-panel-icon-opacity-hover": "1",
    "layout-home-interaction-panel-submit-height": "2.08rem",
    "layout-home-interaction-panel-submit-padding-x": "0.78rem",
    "layout-home-interaction-panel-submit-radius": "999px",
    "layout-home-interaction-panel-submit-gap": "0.32rem",
    "layout-home-interaction-panel-submit-size": "0.82rem",
    "layout-home-interaction-panel-submit-weight": "500",
    "layout-home-interaction-panel-submit-line-height": "1",
    "layout-home-interaction-panel-disabled-opacity": "0.48",
    "layout-home-interaction-panel-file-gap": "0.38rem",
    "layout-home-interaction-panel-file-chip-min-height": "1.55rem",
    "layout-home-interaction-panel-file-chip-padding-x": "0.58rem",
    "layout-home-interaction-panel-file-chip-radius": "999px",
    "layout-home-interaction-panel-file-chip-size": "0.68rem",
    "layout-home-interaction-panel-file-chip-weight": "500",
    "layout-home-interaction-panel-file-chip-tracking": "0.04em",
    "layout-home-interaction-panel-motion-fast": "220ms",
    "layout-home-interaction-panel-voice-opacity-active": "1",
    "layout-home-interaction-panel-voice-opacity-inactive": "0",
    "layout-home-interaction-panel-voice-animation-duration": "1.18s",
    "layout-home-interaction-panel-thinking-animation-duration": "1.2s",
    "layout-home-interaction-panel-thinking-animation-steps": "4",
    "layout-home-interaction-panel-dot-width": "0.72em",
    "layout-office-sidebar-width": "320px",
    "layout-office-sidebar-collapsed-width": "112px",
    "layout-office-sidebar-bg": "rgba(255, 255, 255, 0.04)",
    "layout-office-sidebar-border-fallback": "rgba(255, 255, 255, 0.08)",
    "layout-office-sidebar-text-fallback": "rgba(255, 255, 255, 0.92)",
    "layout-office-sidebar-muted-fallback": "rgba(255, 255, 255, 0.58)",
    "layout-office-sidebar-soft-fallback": "rgba(255, 255, 255, 0.12)",
    "layout-office-sidebar-shadow": "0 20px 60px rgba(0, 0, 0, 0.24)",
    "layout-office-sidebar-radius": "24px",
    "layout-office-sidebar-gap": "18px",
    "layout-office-sidebar-inner-padding-y": "24px",
    "layout-office-sidebar-inner-padding-x": "20px",
    "layout-office-sidebar-inner-motion": "180ms",
    "layout-office-sidebar-top-gap": "16px",
    "layout-office-sidebar-brand-gap": "8px",
    "layout-office-sidebar-eyebrow-size": "0.76rem",
    "layout-office-sidebar-eyebrow-weight": "600",
    "layout-office-sidebar-eyebrow-tracking": "0.14em",
    "layout-office-sidebar-title-size": "1.42rem",
    "layout-office-sidebar-title-line-height": "1.04",
    "layout-office-sidebar-title-tracking": "-0.03em",
    "layout-office-sidebar-title-weight": "600",
    "layout-office-sidebar-copy-size": "0.92rem",
    "layout-office-sidebar-copy-line-height": "1.6",
    "layout-office-sidebar-toggle-min-height": "40px",
    "layout-office-sidebar-toggle-padding-x": "14px",
    "layout-office-sidebar-toggle-radius": "999px",
    "layout-office-sidebar-toggle-hover-bg": "rgba(255, 255, 255, 0.03)",
    "layout-office-sidebar-nav-gap": "10px",
    "layout-office-sidebar-link-gap": "4px",
    "layout-office-sidebar-link-padding-y": "14px",
    "layout-office-sidebar-link-padding-x": "14px",
    "layout-office-sidebar-link-radius": "16px",
    "layout-office-sidebar-link-bg": "rgba(255, 255, 255, 0.02)",
    "layout-office-sidebar-link-bg-active": "rgba(255, 255, 255, 0.04)",
    "layout-office-sidebar-link-opacity": "0.92",
    "layout-office-sidebar-link-opacity-active": "1",
    "layout-office-sidebar-link-label-size": "0.94rem",
    "layout-office-sidebar-link-label-weight": "600",
    "layout-office-sidebar-link-label-tracking": "-0.02em",
    "layout-office-sidebar-link-meta-size": "0.78rem",
    "layout-office-sidebar-link-meta-tracking": "0.06em",
    "layout-office-sidebar-collapsed-padding-y": "20px",
    "layout-office-sidebar-collapsed-padding-x": "14px",
    "layout-office-sidebar-collapsed-title-size": "1.1rem",
    "layout-office-sidebar-tablet-padding-y": "20px",
    "layout-office-sidebar-tablet-padding-x": "16px",
    "layout-office-sidebar-mobile-padding-y": "18px",
    "layout-office-sidebar-mobile-padding-x": "16px",
    "layout-awareness-wrap-min-height": "100%",
    "layout-awareness-wrap-padding": "28px",
    "layout-awareness-panel-width": "96%",
    "layout-awareness-panel-radius": "14px",
    "layout-awareness-panel-padding": "34px",
    "layout-awareness-title-margin-bottom": "18px",
    "layout-awareness-title-size": "22px",
    "layout-awareness-title-weight": "400",
    "layout-awareness-lead-margin-bottom": "18px",
    "layout-awareness-lead-size": "15px",
    "layout-awareness-lead-line-height": "1.45",
    "layout-awareness-question-size": "24px",
    "layout-awareness-question-line-height": "1.5",
    "layout-awareness-question-margin-top": "6px",
    "layout-awareness-question-margin-bottom": "14px",
    "layout-awareness-note-margin-top": "14px",
    "layout-awareness-note-size": "13px",
    "layout-awareness-row-gap": "12px",
    "layout-awareness-row-margin-bottom": "20px",
    "layout-awareness-select-padding-y": "8px",
    "layout-awareness-select-padding-x": "12px",
    "layout-awareness-select-size": "15px",
    "layout-awareness-select-radius": "8px",
    "layout-awareness-slider-width": "680px",
    "layout-awareness-slider-margin-top": "28px",
    "layout-awareness-slider-margin-bottom": "18px",
    "layout-awareness-slider-gap": "32px",
    "layout-awareness-track-height": "12px",
    "layout-awareness-track-radius": "10px",
    "layout-awareness-thumb-width": "20px",
    "layout-awareness-thumb-height": "20px",
    "layout-awareness-thumb-radius": "50%",
    "layout-awareness-thumb-shadow": "0 6px 18px var(--shadow-color, rgba(102,100,64,0.24))",
    "layout-awareness-thumb-margin-top": "0%",
    "layout-awareness-thumb-margin-top-moz": "-2px",
    "layout-awareness-thumb-motion": "0.3s",
    "layout-awareness-label-size": "0.95rem",
    "layout-awareness-label-margin-top": "0.3rem",
    "layout-awareness-label-margin-bottom": "10px",
    "layout-awareness-button-padding-y": "14px",
    "layout-awareness-button-padding-x": "32px",
    "layout-awareness-button-radius": "28px",
    "layout-awareness-button-size": "16px",
    "layout-awareness-button-margin-top": "34px",
    "layout-awareness-result-margin-top": "12px",
    "layout-awareness-result-size": "15px",
    "layout-awareness-result-gap": "12px",
    "layout-awareness-stage-weight": "700",
    "layout-awareness-stage-padding": "10px",
    "layout-awareness-stage-radius": "10px",
    "layout-awareness-stage-motion": "0.2s",
    "layout-awareness-stage-hover-shadow": "0 4px 14px var(--shadow-color, rgba(0,0,0,0.1))",
    "layout-awareness-score-size": "18px",
    "layout-awareness-score-margin-top": "8px",
    "layout-awareness-score-weight": "600",
    "layout-awareness-desc-padding-y": "12px",
    "layout-awareness-desc-padding-x": "14px",
    "layout-awareness-desc-margin-top": "8px",
    "layout-awareness-desc-radius": "10px",
    "layout-awareness-desc-size": "14px",
    "layout-awareness-desc-line-height": "1.6",
    "layout-awareness-dominant-margin-top": "20px",
    "layout-awareness-dominant-radius": "12px",
    "layout-awareness-dominant-padding": "16px",
    "layout-awareness-dominant-size": "15px",
    "layout-awareness-dominant-line-height": "1.4",
    "layout-awareness-mobile-panel-padding": "14px",
    "layout-awareness-mobile-question-size": "18px",
    "layout-awareness-mobile-button-padding-y": "12px",
    "layout-awareness-mobile-button-padding-x": "18px",
    "layout-awareness-mobile-button-margin-top": "24px",
    "layout-awareness-mobile-button-size": "15px",
    "layout-awareness-mobile-slider-width": "96%",
    "layout-awareness-mobile-slider-max-width": "100%",
    "layout-awareness-mobile-slider-margin-top": "18px",
    "layout-awareness-mobile-slider-margin-bottom": "10px",
    "layout-awareness-mobile-slider-gap": "22px",
    "layout-awareness-mobile-label-size": "0.85rem",
    "layout-awareness-mobile-label-margin-bottom": "6px",
    "layout-awareness-mobile-thumb-width": "28px",
    "layout-awareness-mobile-thumb-height": "16px",
    "layout-awareness-progress-width": "92%",
    "layout-awareness-progress-max-width": "680px",
    "layout-awareness-progress-height": "4px",
    "layout-awareness-progress-radius": "3px",
    "layout-awareness-progress-margin-top": "14px",
    "layout-awareness-progress-margin-bottom": "8px",
    "layout-awareness-progress-fill-width": "0%",
    "duration-fast": "180ms",
    "duration-base": "240ms",
    "duration-slow": "320ms",
    "ease-standard": "cubic-bezier(0.22,1,0.36,1)",
    "ease-emphasis": "cubic-bezier(0.2,0.8,0.2,1)",
    "hover-opacity-soft": "0.9",
    "hover-opacity-strong": "1",
    "hover-lift-y": "-1px",
    "hover-lift-y-strong": "-2px",
    "hover-scale-soft": "1.015",
    "hover-scale-strong": "1.03",
    "intro-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
    "intro-pop-duration": "1.6s",
    "intro-settle-duration": "1.9s",
    "intro-fade-duration": "1.5s",
    "nav-global-gap": "0.78rem",
    "nav-global-item-gap": "0.42rem",
    "nav-global-topbar-menu-gap": "0.72rem",
    "nav-global-padding-y": "0",
    "nav-global-padding-x": "0",
    "nav-global-min-height": "auto",
    "nav-global-color": "var(--cc-secondary-color)",
    "nav-global-hover-color": "var(--nav-hover-text-color)",
    "nav-global-active-color": "var(--nav-active-text-color)",
    "nav-global-hover-opacity": "var(--nav-hover-opacity)",
    "nav-local-gap": "0.92rem",
    "nav-local-label-gap": "0.42rem",
    "nav-local-padding-y": "0",
    "nav-local-padding-x": "0",
    "nav-local-min-height": "auto",
    "nav-local-color": "var(--cc-secondary-color)",
    "nav-local-hover-color": "var(--local-nav-hover-text-color)",
    "nav-local-active-color": "var(--local-nav-active-text-color)",
    "nav-local-hover-opacity": "var(--local-nav-hover-opacity)",
    "nav-local-active-indicator-color": "var(--local-nav-active-indicator-color)",
    "website-local-nav-link-gap": "var(--nav-local-gap)",
    "nav-tab-gap": "var(--nav-local-gap)",
    "nav-tab-padding-y": "0",
    "nav-tab-padding-x": "0",
    "nav-tab-min-height": "auto",
    "nav-tab-color": "var(--cc-secondary-color)",
    "nav-tab-hover-color": "var(--local-nav-hover-text-color)",
    "nav-tab-active-color": "var(--local-nav-active-text-color)",
    "nav-tab-hover-opacity": "var(--local-nav-hover-opacity)",
    "nav-breadcrumb-gap": "0.42rem",
    "nav-breadcrumb-separator-gap": "0.34rem",
    "nav-breadcrumb-color": "var(--cc-secondary-color)",
    "nav-breadcrumb-hover-color": "var(--hover-text-color)",
    "nav-breadcrumb-current-color": "var(--cc-primary-color)",
    "nav-breadcrumb-separator-color": "var(--cc-muted-color, var(--cc-secondary-color))",
    "nav-footer-gap": "0.84rem",
    "nav-footer-column-gap": "1rem",
    "nav-footer-row-gap": "0.42rem",
    "nav-footer-color": "var(--cc-secondary-color)",
    "nav-footer-hover-color": "var(--hover-text-color)",
    "nav-footer-hover-opacity": "var(--state-opacity-hover-strong)",
    "nav-menu-gap": "0.52rem",
    "nav-menu-item-gap": "0.42rem",
    "nav-menu-padding-y": "0.42rem",
    "nav-menu-padding-x": "0",
    "nav-menu-color": "var(--cc-secondary-color)",
    "nav-menu-hover-color": "var(--hover-text-color)",
    "nav-menu-active-color": "var(--selected-text-color)",
    "nav-indicator-height": "1px",
    "nav-indicator-width": "100%",
    "nav-indicator-offset": "-0.28rem",
    "nav-indicator-radius": "999px",
    "nav-indicator-color": "var(--selected-indicator-color)",
    "nav-indicator-opacity": "var(--selected-indicator-opacity)",
    "nav-glass-surface-height": "3.55rem",
    "nav-glass-surface-height-tablet": "3.3rem",
    "nav-glass-surface-height-mobile": "3.18rem",
    "nav-glass-surface-bg": "color-mix(in srgb, var(--bg-color) 32%, transparent)",
    "nav-glass-surface-bg-light": "color-mix(in srgb, var(--surface-color) 26%, transparent)",
    "nav-glass-surface-border": "var(--cc-color)",
    "nav-glass-surface-border-light": "var(--cc-color)",
    "nav-glass-surface-shadow": "none",
    "nav-glass-surface-blur": "var(--effect-blur-sm)",
    "nav-glass-surface-saturate": "120%",
    "nav-primitive-shell-gap": "0.5rem",
    "nav-primitive-section-gap": "0.4rem",
    "nav-primitive-section-padding-top": "0.6rem",
    "nav-primitive-section-border": "1px solid color-mix(in srgb, var(--cc-color) 8%, transparent)",
    "nav-primitive-group-gap": "0.22rem",
    "nav-primitive-group-header-gap": "0.75rem",
    "nav-primitive-group-title-size": "0.72rem",
    "nav-primitive-group-title-weight": "500",
    "nav-primitive-group-title-tracking": "0.08em",
    "nav-primitive-group-title-line-height": "1.2",
    "nav-primitive-row-gap": "0.75rem",
    "nav-primitive-row-min-height": "2.65rem",
    "nav-primitive-row-padding-y": "0.7rem",
    "nav-primitive-row-padding-x": "0.85rem",
    "nav-primitive-row-border": "1px solid transparent",
    "nav-primitive-row-radius": "1rem",
    "nav-primitive-row-transition-duration": "220ms",
    "nav-primitive-icon-size": "1rem",
    "nav-primitive-text-gap": "0.12rem",
    "nav-primitive-label-size": "0.92rem",
    "nav-primitive-label-weight": "500",
    "nav-primitive-label-line-height": "1.3",
    "nav-primitive-description-size": "0.78rem",
    "nav-primitive-description-line-height": "1.35",
    "nav-primitive-hover-border": "color-mix(in srgb, var(--cc-color) 12%, transparent)",
    "nav-primitive-hover-background": "color-mix(in srgb, var(--bg-color) 16%, transparent)",
    "nav-primitive-hover-y": "-1px",
    "nav-primitive-active-border": "color-mix(in srgb, var(--color-primary1) 46%, var(--cc-color) 18%)",
    "nav-primitive-active-background": "color-mix(in srgb, var(--color-primary1) 10%, transparent)",
    "nav-primitive-disabled-opacity": "0.45",
    "nav-primitive-breadcrumb-gap": "0.42rem",
    "nav-primitive-breadcrumb-size": "0.8rem",
    "nav-primitive-breadcrumb-line-height": "1.35",
    "nav-primitive-breadcrumb-current-weight": "500",
    "nav-primitive-breadcrumb-separator-opacity": "0.72",
    "nav-primitive-sidebar-gap": "0.7rem",
    "nav-primitive-sidebar-header-gap": "0.2rem",
    "nav-primitive-sidebar-title-size": "0.92rem",
    "nav-primitive-sidebar-title-weight": "600",
    "nav-primitive-sidebar-title-line-height": "1.3",
    "nav-primitive-sidebar-caption-size": "0.78rem",
    "nav-primitive-sidebar-caption-line-height": "1.35",
    "nav-primitive-collapsible-gap": "0.22rem",
    "nav-primitive-chevron-open-rotation": "90deg",
    "nav-primitive-chevron-transition-duration": "220ms",
    "nav-primitive-mobile-row-min-height": "2.45rem",
    "nav-primitive-mobile-row-padding-y": "0.64rem",
    "nav-primitive-mobile-row-padding-x": "0.78rem",
    "nav-institutional-surface-height": "var(--nav-glass-surface-height)",
    "nav-institutional-surface-height-tablet": "var(--nav-glass-surface-height-tablet)",
    "nav-institutional-surface-height-mobile": "var(--nav-glass-surface-height-mobile)",
    "nav-institutional-surface-bg": "var(--nav-glass-surface-bg)",
    "nav-institutional-surface-bg-light": "var(--nav-glass-surface-bg-light)",
    "nav-institutional-surface-border": "var(--nav-glass-surface-border)",
    "nav-institutional-surface-border-light": "var(--nav-glass-surface-border-light)",
    "nav-institutional-surface-shadow": "var(--nav-glass-surface-shadow)",
    "nav-institutional-surface-blur": "var(--nav-glass-surface-blur)",
    "nav-institutional-surface-saturate": "var(--nav-glass-surface-saturate)",
    "nav-institutional-text-color": "var(--cc-secondary-color)",
    "nav-institutional-text-hover-color": "var(--cc-primary-color)",
    "nav-institutional-brand-color": "var(--cc-primary-color)",
    "nav-institutional-icon-opacity": "0.82",
    "nav-institutional-icon-hover-opacity": "1",
    "nav-institutional-motion-fast": "220ms",
    "nav-institutional-motion-medium": "320ms",
    "nav-institutional-motion-panel": "760ms",
    "nav-institutional-motion-panel-slow": "920ms",
    "nav-institutional-motion-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
    "nav-institutional-panel-ease": "cubic-bezier(0.19, 1, 0.22, 1)",
    "nav-institutional-inner-gap": "1.6rem",
    "nav-institutional-inner-gap-tablet": "1.2rem",
    "nav-institutional-inner-gap-mobile": "1rem",
    "nav-institutional-group-gap": "1.6rem",
    "nav-institutional-nav-gap": "1.42rem",
    "nav-institutional-nav-gap-tablet": "1.08rem",
    "nav-institutional-utility-gap": "1rem",
    "nav-institutional-link-size": "0.8rem",
    "nav-institutional-link-size-tablet": "0.74rem",
    "nav-institutional-link-weight": "400",
    "nav-institutional-link-tracking": "0.008em",
    "nav-institutional-link-line-height": "1",
    "nav-institutional-brand-symbol-size": "1.72rem",
    "nav-institutional-brand-symbol-size-tablet": "1.32rem",
    "nav-institutional-brand-symbol-size-mobile": "1.28rem",
    "nav-institutional-brand-wordmark-height": "0.5rem",
    "nav-institutional-brand-wordmark-height-mobile": "0.44rem",
    "nav-institutional-trigger-size": "1.12rem",
    "nav-institutional-trigger-size-tablet": "1rem",
    "nav-institutional-panel-backdrop-blur": "4px",
    "nav-institutional-panel-backdrop-saturate": "115%",
    "nav-institutional-panel-shell-blur": "18px",
    "nav-institutional-panel-shell-saturate": "145%",
    "nav-institutional-panel-shadow": "0 28px 90px color-mix(in srgb, var(--shadow-color, #000000) 10%, transparent)",
    "nav-institutional-panel-shadow-light": "0 28px 90px color-mix(in srgb, var(--shadow-color, #000000) 8%, transparent)",
    "nav-institutional-panel-shadow-dark": "0 32px 100px color-mix(in srgb, var(--shadow-color, #000000) 28%, transparent)",
    "nav-institutional-closed-y": "-10px",
    "nav-institutional-panel-closed-y": "-1.1rem",
    "nav-institutional-panel-closed-scale": "0.982",
    "nav-institutional-panel-active-scale": "1",
    "nav-institutional-panel-closing-y": "-0.95rem",
    "nav-institutional-panel-closing-scale": "0.988",
    "nav-institutional-panel-closing-opacity": "0.001",
    "nav-institutional-panel-padding-y": "5.15rem",
    "nav-institutional-panel-padding-x-fallback": "3.2rem",
    "nav-institutional-panel-padding-bottom": "3.9rem",
    "nav-institutional-panel-gap": "5.8rem",
    "nav-institutional-panel-col-gap": "1.9rem",
    "nav-institutional-panel-col-padding-top": "5.15rem",
    "nav-institutional-panel-eyebrow-margin-bottom": "1.35rem",
    "nav-institutional-panel-eyebrow-size": "0.72rem",
    "nav-institutional-panel-eyebrow-weight": "500",
    "nav-institutional-panel-eyebrow-tracking": "0.08em",
    "nav-institutional-panel-eyebrow-line-height": "1.2",
    "nav-institutional-panel-title-margin-bottom": "1.08rem",
    "nav-institutional-panel-title-size": "2.18rem",
    "nav-institutional-panel-title-weight": "400",
    "nav-institutional-panel-title-line-height": "1.08",
    "nav-institutional-panel-title-strong-weight": "300",
    "nav-institutional-panel-copy-margin-bottom": "1rem",
    "nav-institutional-panel-copy-size": "0.98rem",
    "nav-institutional-panel-copy-weight": "400",
    "nav-institutional-panel-copy-line-height": "1.35",
    "nav-institutional-panel-copy-strong-weight": "300",
    "nav-institutional-search-shell-gap": "0.62rem",
    "nav-institutional-search-shell-min-height": "4rem",
    "nav-institutional-search-shell-padding-y": "0.82rem",
    "nav-institutional-search-shell-padding-x": "1.08rem",
    "nav-institutional-search-shell-line-height": "1",
    "nav-institutional-search-shell-opacity": "0.9",
    "nav-institutional-search-icon-size": "1.38rem",
    "nav-institutional-search-icon-line-height": "0",
    "nav-institutional-search-button-hover-scale": "1.08",
    "nav-institutional-search-input-width": "18ch",
    "nav-institutional-search-input-size": "1.88rem",
    "nav-institutional-search-input-weight": "300",
    "nav-institutional-search-input-line-height": "1",
    "nav-institutional-search-result-margin-top": "0.9rem",
    "nav-institutional-search-empty-margin-bottom": "0.9rem",
    "nav-institutional-search-panel-padding-top": "0.95rem",
    "nav-institutional-search-panel-size": "0.94rem",
    "nav-institutional-search-panel-weight": "300",
    "nav-institutional-search-panel-line-height": "1.45",
    "nav-institutional-search-list-gap": "0.26rem",
    "nav-institutional-search-list-padding-y": "0.95rem",
    "nav-institutional-search-result-title-size": "1.02rem",
    "nav-institutional-search-result-title-weight": "300",
    "nav-institutional-search-result-title-line-height": "1.28",
    "nav-institutional-search-result-meta-size": "0.82rem",
    "nav-institutional-search-result-meta-weight": "400",
    "nav-institutional-search-result-meta-line-height": "1.35",
    "nav-institutional-caret-opacity": "0.9",
    "nav-institutional-tablet-account-avatar-size": "1.18rem",
    "nav-institutional-tablet-search-shell-gap": "0.54rem",
    "nav-institutional-tablet-search-shell-padding-y": "0.72rem",
    "nav-institutional-tablet-search-shell-padding-x": "0.94rem",
    "nav-institutional-tablet-panel-gap": "3rem",
    "nav-institutional-tablet-panel-padding-y": "4.6rem",
    "nav-institutional-tablet-panel-padding-x-fallback": "2.2rem",
    "nav-institutional-tablet-panel-padding-bottom": "3.2rem",
    "nav-institutional-tablet-panel-title-size": "1.86rem",
    "nav-institutional-tablet-search-input-size": "1.62rem",
    "nav-institutional-tablet-search-panel-size": "0.96rem",
    "nav-institutional-mobile-edge-padding": "0",
    "nav-menu-hover-ease": "cubic-bezier(0.22,1,0.36,1)",
    "nav-menu-hover-scale": "1.08",
    "nav-menu-hover-duration": "520ms",
    "nav-menu-hover-opacity-duration": "240ms",
    "nav-menu-hover-pulse-duration": "760ms",
    "nav-menu-pack-toggle-nudge": "-10px",
    "nav-menu-harmonic-gap": "46px",
    "nav-menu-gutter": "var(--footer-gutter, 56px)",
    "nav-menu-vpad": "90px",
    "nav-menu-rail-pad": "34px",
    "nav-menu-rail-label-pad": "34px",
    "nav-menu-rail-font-size": "1.08rem",
    "nav-menu-motion-line-fast": "300ms",
    "nav-menu-motion-overlay": "260ms",
    "nav-menu-motion-filter": "260ms",
    "nav-menu-motion-color": "260ms",
    "nav-menu-motion-background": "260ms",
    "nav-menu-motion-opacity": "260ms",
    "nav-menu-overlay-enter-y": "24px",
    "nav-menu-overlay-exit-y": "32px",
    "nav-menu-overlay-enter-duration": "0.8s",
    "nav-menu-overlay-enter-opacity-duration": "0.6s",
    "nav-menu-overlay-exit-duration": "1.1s",
    "nav-menu-overlay-exit-opacity-duration": "0.8s",
    "nav-menu-rail-reveal-duration": "0.55s",
    "nav-menu-rail-reveal-opacity": "0.9",
    "nav-menu-button-container-size": "60px",
    "nav-menu-button-size": "35px",
    "nav-menu-button-line-height": "1.2px",
    "nav-menu-button-line-width": "55%",
    "nav-menu-button-line-offset": "4px",
    "nav-menu-button-hover-duration": "0.35s",
    "nav-menu-pack-toggle-size": "72px",
    "nav-menu-pack-toggle-icon-size": "40px",
    "nav-menu-icon-control-size": "44px",
    "nav-menu-icon-glyph-size": "22px",
    "nav-menu-theme-toggle-size": "30px",
    "nav-menu-theme-toggle-dot-size": "14px",
    "nav-menu-pack-split-padding-top": "28px",
    "nav-menu-pack-split-min-height": "160px",
    "nav-menu-pack-out-duration": "360ms",
    "nav-menu-pack-in-duration": "420ms",
    "nav-menu-pack-gap-duration": "220ms",
    "nav-menu-pack-shift-y": "-10px",
    "nav-menu-pack-transform-duration": "720ms",
    "nav-menu-plain-logo-padding-top": "22px",
    "nav-menu-typo-logo-width": "140px",
    "nav-menu-site-essence-margin-top": "18px",
    "nav-menu-site-essence-size": "0.95rem",
    "nav-menu-site-essence-line-height": "1.6",
    "nav-menu-site-essence-shadow": "0 0 22px color-mix(in srgb, var(--menu-fg) 10%, transparent)",
    "nav-menu-site-essence-breathe-duration": "5.8s",
    "nav-menu-site-essence-sheen-duration": "3.9s",
    "nav-menu-site-essence-shift-y": "-1.6px",
    "nav-menu-site-essence-brightness": "1.06",
    "nav-menu-unified-pack-gap": "14px",
    "nav-menu-preview-padding-right": "46px",
    "nav-menu-preview-shift-x": "-18px",
    "nav-menu-preview-shift-duration": "650ms",
    "nav-menu-preview-title-gap": "14px",
    "nav-menu-preview-icon-margin-bottom": "18px",
    "nav-menu-rail-flex-base": "0.7 1 0",
    "nav-menu-rail-flex-hover": "1.6 1 0",
    "nav-menu-rail-flex-list-hover": "0.55 1 0",
    "nav-menu-rail-flex-list-item-hover": "1.85 1 0",
    "nav-menu-rail-flex-duration": "420ms",
    "nav-menu-rail-link-padding-block": "18px",
    "nav-menu-rail-link-tracking": "0.14em",
    "nav-menu-rail-link-line-height": "1",
    "nav-menu-rail-link-opacity": "0.86",
    "nav-menu-rail-link-hover-scale": "1.12",
    "nav-menu-rail-link-transform-duration": "820ms",
    "nav-menu-packs-left": "22px",
    "nav-menu-packs-bottom": "90px",
    "nav-menu-packs-width": "96px",
    "nav-menu-packs-gap": "22px",
    "nav-menu-plain-logo-width": "72px",
    "nav-menu-close-top": "18px",
    "nav-menu-close-size": "44px",
    "nav-menu-close-opacity": "0.85",
    "nav-menu-close-duration": "180ms",
    "nav-menu-close-hover-scale": "1.06",
    "nav-menu-opacity-hidden": "0",
    "nav-menu-opacity-visible": "1",
    "nav-menu-control-opacity": "0.86",
    "nav-menu-control-active-opacity": "0.98",
    "nav-menu-logo-opacity": "0.92",
    "nav-menu-active-scale": "0.98",
    "nav-menu-hover-pulse-scale-down": "0.88",
    "nav-menu-hover-pulse-scale-up": "1.06",
    "nav-menu-mobile-columns-gap": "22px",
    "nav-menu-mobile-columns-padding": "84px 18px 28px",
    "nav-menu-mobile-col-gap": "18px",
    "nav-menu-mobile-pack-padding-top": "18px",
    "nav-menu-mobile-pack-min-height": "150px",
    "nav-menu-mobile-rail-item-padding": "14px 0",
    "nav-menu-mobile-rail-link-tracking": "0.10em",
    "glass-surface-height": "3.55rem",
    "glass-surface-height-tablet": "3.3rem",
    "glass-surface-height-mobile": "3.18rem",
    "glass-surface-bg": "color-mix(in srgb, var(--bg-color) 32%, transparent)",
    "glass-surface-bg-light": "color-mix(in srgb, var(--surface-color) 26%, transparent)",
    "glass-surface-border": "var(--cc-color)",
    "glass-surface-border-light": "var(--cc-color)",
    "glass-surface-shadow": "none",
    "glass-surface-blur": "var(--effect-blur-sm)",
    "glass-surface-saturate": "120%",
    "radius-none": "0",
    "radius-xs": "0.5rem",
    "radius-sm": "0.75rem",
    "radius-md": "1rem",
    "radius-lg": "1.375rem",
    "radius-xl": "1.75rem",
    "radius-2xl": "2.125rem",
    "radius-dialog": "1.9rem",
    "radius-pill": "999px",
    "radius-circle": "50%",
    "shadow-soft": "0 12px 34px rgba(0,0,0,0.16)",
    "shadow-medium": "0 18px 48px rgba(0,0,0,0.22)",
    "shadow-strong": "0 28px 72px rgba(0,0,0,0.28)",
    "stroke-soft": "1px",
    "stroke-strong": "1.5px",
    "spacing-xs": "0.35rem",
    "spacing-sm": "0.75rem",
    "spacing-md": "1.1rem",
    "spacing-lg": "1.6rem",
    "spacing-xl": "2.4rem",
    "spacing-2xl": "3.6rem",
    "spacing-3xl": "4.5rem",
    "spacing-4xl": "6rem",
    "reading-width-sm": "64ch",
    "reading-width-md": "74ch",
    "reading-width-lg": "78ch",
    "content-max-width-sm": "var(--reading-width-sm)",
    "content-max-width-md": "var(--reading-width-md)",
    "content-max-width-lg": "var(--reading-width-lg)",
    "section-padding-y": "10vh",
    "section-padding-y-mobile": "12vh",
    "font-base": "'Manrope',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif",
    "font-ui": "var(--font-base)",
    "font-heading": "var(--font-base)",
    "font-body": "var(--font-base)",
    "font-mono": "'SFMono-Regular','SF Mono',Consolas,'Liberation Mono',Menlo,monospace",
    "line-height-base": "1.55",
    "line-height-body": "1.6",
    "line-height-body-tight": "1.42",
    "line-height-body-relaxed": "1.72",
    "line-height-heading-tight": "1.08",
    "line-height-heading": "1.16",
    "line-height-heading-relaxed": "1.28",
    "line-height-ui": "1",
    "line-height-ui-relaxed": "1.24",
    "line-height-code": "1.55",
    "font-size-display-1": "2.35rem",
    "font-size-display-2": "2rem",
    "font-size-display-3": "1.72rem",
    "font-size-h1": "1.88rem",
    "font-size-h2": "1.42rem",
    "font-size-h3": "1.16rem",
    "font-size-h4": "1.02rem",
    "font-size-h5": "1rem",
    "font-size-h6": "0.9rem",
    "font-size-title-1": "1.06rem",
    "font-size-title-2": "0.96rem",
    "font-size-title-3": "0.98rem",
    "font-size-section-title": "var(--font-size-section-title-mobile)",
    "font-size-section-title-wide": "2.3rem",
    "font-size-section-title-tablet": "1.82rem",
    "font-size-section-title-mobile": "1.56rem",
    "font-size-subtitle-1": "1rem",
    "font-size-subtitle-2": "0.92rem",
    "font-size-body-1": "0.96rem",
    "font-size-body-2": "0.92rem",
    "font-size-body-3": "0.88rem",
    "font-size-body-4": "0.84rem",
    "font-size-editorial-title": "1.95rem",
    "font-size-editorial-heading": "1.55rem",
    "font-size-editorial-subheading": "1.12rem",
    "font-size-editorial-body": "1.02rem",
    "font-size-editorial-lede": "1.12rem",
    "font-size-editorial-note": "0.9rem",
    "font-size-caption-1": "0.78rem",
    "font-size-caption-2": "0.72rem",
    "font-size-label-1": "0.82rem",
    "font-size-label-2": "0.76rem",
    "font-size-meta-1": "0.8rem",
    "font-size-meta-2": "0.74rem",
    "font-size-eyebrow": "0.72rem",
    "font-size-overline": "0.7rem",
    "font-size-nav-primary": "0.82rem",
    "font-size-nav-secondary": "0.78rem",
    "font-size-nav-local-label": "0.94rem",
    "font-size-nav-local-link": "0.8rem",
    "font-size-nav-tab": "var(--font-size-nav-local-link)",
    "font-size-breadcrumb": "0.76rem",
    "font-size-utility-nav": "0.74rem",
    "font-size-button-sm": "0.76rem",
    "font-size-button-md": "0.82rem",
    "font-size-button-lg": "0.9rem",
    "font-size-control-xs": "0.7rem",
    "font-size-control-sm": "0.76rem",
    "font-size-control-md": "0.82rem",
    "font-size-control-lg": "0.9rem",
    "font-size-chip": "0.74rem",
    "font-size-pill": "0.74rem",
    "font-size-menu-item": "0.82rem",
    "font-size-tooltip": "0.74rem",
    "font-size-field-label": "0.76rem",
    "font-size-field-input": "0.9rem",
    "font-size-field-placeholder": "0.9rem",
    "font-size-field-helper": "0.76rem",
    "font-size-field-error": "0.76rem",
    "font-size-field-counter": "0.72rem",
    "font-size-data-value-xl": "2.2rem",
    "font-size-data-value-lg": "1.55rem",
    "font-size-data-value-md": "1.05rem",
    "font-size-data-label": "0.76rem",
    "font-size-data-caption": "0.72rem",
    "font-size-chart-axis": "0.7rem",
    "font-size-chart-legend": "0.72rem",
    "font-size-table-heading": "0.76rem",
    "font-size-table-cell": "0.82rem",
    "font-size-table-cell-dense": "0.76rem",
    "font-size-table-caption": "0.72rem",
    "font-size-code-inline": "0.86em",
    "font-size-code-block": "0.86rem",
    "font-size-kbd": "0.72rem",
    "font-size-path": "0.78rem",
    "font-size-status-sm": "0.74rem",
    "font-size-status-md": "0.8rem",
    "font-size-alert-title": "0.92rem",
    "font-size-alert-body": "0.84rem",
    "font-size-toast-title": "0.84rem",
    "font-size-toast-body": "0.78rem",
    "font-size-profile-name": "1.32rem",
    "font-size-profile-handle": "0.86rem",
    "font-size-profile-bio": "0.92rem",
    "font-size-profile-stat-value": "1rem",
    "font-size-profile-stat-label": "0.72rem",
    "font-size-profile-meta": "0.78rem",
    "font-size-product-title": "1.28rem",
    "font-size-product-kicker": "0.72rem",
    "font-size-product-summary": "0.94rem",
    "font-size-product-feature-title": "0.92rem",
    "font-size-product-feature-body": "0.84rem",
    "font-size-product-spec-label": "0.74rem",
    "font-size-product-spec-value": "0.84rem",
    "font-size-marketing-hero": "2.05rem",
    "font-size-marketing-section-title": "1.72rem",
    "font-size-marketing-card-title": "1.05rem",
    "font-size-marketing-proof": "0.84rem",
    "font-size-marketing-cta": "0.84rem",
    "display-1-size": "var(--font-size-display-1)",
    "display-1-line-height": "var(--line-height-heading-tight)",
    "display-2-size": "var(--font-size-display-2)",
    "display-2-line-height": "var(--line-height-heading-tight)",
    "display-3-size": "var(--font-size-display-3)",
    "display-3-line-height": "var(--line-height-heading)",
    "headline-1-size": "var(--font-size-h1)",
    "headline-1-line-height": "var(--line-height-heading-tight)",
    "headline-2-size": "var(--font-size-h2)",
    "headline-2-line-height": "var(--line-height-heading)",
    "headline-3-size": "var(--font-size-h3)",
    "headline-3-line-height": "var(--line-height-heading)",
    "headline-4-size": "var(--font-size-h4)",
    "headline-4-line-height": "var(--line-height-heading-relaxed)",
    "headline-5-size": "var(--font-size-h5)",
    "headline-5-line-height": "var(--line-height-heading-relaxed)",
    "headline-6-size": "var(--font-size-h6)",
    "headline-6-line-height": "var(--line-height-heading-relaxed)",
    "title-1-size": "var(--font-size-title-1)",
    "title-1-line-height": "var(--line-height-heading-relaxed)",
    "title-2-size": "var(--font-size-title-2)",
    "title-2-line-height": "var(--line-height-heading-relaxed)",
    "title-3-size": "var(--font-size-title-3)",
    "title-3-line-height": "var(--line-height-heading-relaxed)",
    "section-title-size": "var(--font-size-section-title)",
    "section-title-size-wide": "var(--font-size-section-title-wide)",
    "section-title-size-tablet": "var(--font-size-section-title-tablet)",
    "section-title-size-mobile": "var(--font-size-section-title-mobile)",
    "section-title-line-height": "var(--line-height-heading-tight)",
    "subtitle-1-size": "var(--font-size-subtitle-1)",
    "subtitle-1-line-height": "var(--line-height-body-tight)",
    "subtitle-2-size": "var(--font-size-subtitle-2)",
    "subtitle-2-line-height": "var(--line-height-body-tight)",
    "body-1-size": "var(--font-size-body-1)",
    "body-1-line-height": "var(--line-height-body)",
    "body-2-size": "var(--font-size-body-2)",
    "body-2-line-height": "var(--line-height-body)",
    "body-3-size": "var(--font-size-body-3)",
    "body-3-line-height": "var(--line-height-body)",
    "body-4-size": "var(--font-size-body-4)",
    "body-4-line-height": "var(--line-height-body-tight)",
    "description-1-size": "var(--body-2-size)",
    "description-1-line-height": "var(--body-2-line-height)",
    "description-2-size": "var(--body-3-size)",
    "description-2-line-height": "var(--body-3-line-height)",
    "editorial-title-size": "var(--font-size-editorial-title)",
    "editorial-title-line-height": "var(--line-height-heading-tight)",
    "editorial-heading-size": "var(--font-size-editorial-heading)",
    "editorial-heading-line-height": "var(--line-height-heading)",
    "editorial-subheading-size": "var(--font-size-editorial-subheading)",
    "editorial-subheading-line-height": "var(--line-height-heading-relaxed)",
    "editorial-body-size": "var(--font-size-editorial-body)",
    "editorial-body-line-height": "var(--line-height-body-relaxed)",
    "editorial-lede-size": "var(--font-size-editorial-lede)",
    "editorial-lede-line-height": "var(--line-height-body-relaxed)",
    "editorial-note-size": "var(--font-size-editorial-note)",
    "editorial-note-line-height": "var(--line-height-body-tight)",
    "caption-1-size": "var(--font-size-caption-1)",
    "caption-1-line-height": "var(--line-height-body-tight)",
    "caption-2-size": "var(--font-size-caption-2)",
    "caption-2-line-height": "var(--line-height-body-tight)",
    "label-1-size": "var(--font-size-label-1)",
    "label-1-line-height": "var(--line-height-ui)",
    "label-2-size": "var(--font-size-label-2)",
    "label-2-line-height": "var(--line-height-ui)",
    "meta-1-size": "var(--font-size-meta-1)",
    "meta-1-line-height": "var(--line-height-body-tight)",
    "meta-2-size": "var(--font-size-meta-2)",
    "meta-2-line-height": "var(--line-height-body-tight)",
    "eyebrow-size": "var(--font-size-eyebrow)",
    "eyebrow-line-height": "var(--line-height-ui)",
    "overline-size": "var(--font-size-overline)",
    "overline-line-height": "var(--line-height-ui)",
    "nav-primary-size": "var(--font-size-nav-primary)",
    "nav-primary-line-height": "var(--line-height-ui)",
    "nav-secondary-size": "var(--font-size-nav-secondary)",
    "nav-secondary-line-height": "var(--line-height-ui)",
    "nav-local-label-size": "var(--font-size-nav-local-label)",
    "nav-local-label-line-height": "var(--line-height-ui)",
    "nav-local-link-size": "var(--font-size-nav-local-link)",
    "nav-local-link-line-height": "var(--line-height-ui)",
    "nav-tab-size": "var(--font-size-nav-tab)",
    "nav-tab-line-height": "var(--line-height-ui)",
    "breadcrumb-size": "var(--font-size-breadcrumb)",
    "breadcrumb-line-height": "var(--line-height-ui-relaxed)",
    "utility-nav-size": "var(--font-size-utility-nav)",
    "utility-nav-line-height": "var(--line-height-ui)",
    "website-local-nav-label-font-size": "var(--nav-local-label-size)",
    "website-local-nav-link-font-size": "var(--nav-local-link-size)",
    "website-local-nav-font-weight": "var(--nav-local-link-weight)",
    "website-local-nav-letter-spacing": "var(--nav-local-link-tracking)",
    "website-local-nav-line-height": "var(--nav-local-link-line-height)",
    "button-sm-size": "var(--font-size-button-sm)",
    "button-md-size": "var(--font-size-button-md)",
    "button-lg-size": "var(--font-size-button-lg)",
    "button-sm-line-height": "var(--line-height-ui)",
    "button-md-line-height": "var(--line-height-ui)",
    "button-lg-line-height": "var(--line-height-ui)",
    "control-xs-size": "var(--font-size-control-xs)",
    "control-sm-size": "var(--font-size-control-sm)",
    "control-md-size": "var(--font-size-control-md)",
    "control-lg-size": "var(--font-size-control-lg)",
    "control-xs-line-height": "var(--line-height-ui)",
    "control-sm-line-height": "var(--line-height-ui)",
    "control-md-line-height": "var(--line-height-ui)",
    "control-lg-line-height": "var(--line-height-ui)",
    "chip-size": "var(--font-size-chip)",
    "chip-line-height": "var(--line-height-ui)",
    "pill-size": "var(--font-size-pill)",
    "pill-line-height": "var(--line-height-ui)",
    "menu-item-size": "var(--font-size-menu-item)",
    "menu-item-line-height": "var(--line-height-ui-relaxed)",
    "tooltip-size": "var(--font-size-tooltip)",
    "tooltip-line-height": "var(--line-height-body-tight)",
    "field-label-size": "var(--font-size-field-label)",
    "field-label-line-height": "var(--line-height-ui)",
    "field-input-size": "var(--font-size-field-input)",
    "field-input-line-height": "var(--line-height-body-tight)",
    "field-placeholder-size": "var(--font-size-field-placeholder)",
    "field-placeholder-line-height": "var(--line-height-body-tight)",
    "field-helper-size": "var(--font-size-field-helper)",
    "field-helper-line-height": "var(--line-height-body-tight)",
    "field-error-size": "var(--font-size-field-error)",
    "field-error-line-height": "var(--line-height-body-tight)",
    "field-counter-size": "var(--font-size-field-counter)",
    "field-counter-line-height": "var(--line-height-ui)",
    "data-value-xl-size": "var(--font-size-data-value-xl)",
    "data-value-xl-line-height": "var(--line-height-heading-tight)",
    "data-value-lg-size": "var(--font-size-data-value-lg)",
    "data-value-lg-line-height": "var(--line-height-heading)",
    "data-value-md-size": "var(--font-size-data-value-md)",
    "data-value-md-line-height": "var(--line-height-heading-relaxed)",
    "data-label-size": "var(--font-size-data-label)",
    "data-label-line-height": "var(--line-height-ui)",
    "data-caption-size": "var(--font-size-data-caption)",
    "data-caption-line-height": "var(--line-height-body-tight)",
    "chart-axis-size": "var(--font-size-chart-axis)",
    "chart-axis-line-height": "var(--line-height-ui)",
    "chart-legend-size": "var(--font-size-chart-legend)",
    "chart-legend-line-height": "var(--line-height-ui)",
    "table-heading-size": "var(--font-size-table-heading)",
    "table-heading-line-height": "var(--line-height-ui)",
    "table-cell-size": "var(--font-size-table-cell)",
    "table-cell-line-height": "var(--line-height-body-tight)",
    "table-cell-dense-size": "var(--font-size-table-cell-dense)",
    "table-cell-dense-line-height": "var(--line-height-body-tight)",
    "table-caption-size": "var(--font-size-table-caption)",
    "table-caption-line-height": "var(--line-height-body-tight)",
    "code-inline-size": "var(--font-size-code-inline)",
    "code-inline-line-height": "var(--line-height-body-tight)",
    "code-block-size": "var(--font-size-code-block)",
    "code-block-line-height": "var(--line-height-code)",
    "kbd-size": "var(--font-size-kbd)",
    "kbd-line-height": "var(--line-height-ui)",
    "path-size": "var(--font-size-path)",
    "path-line-height": "var(--line-height-body-tight)",
    "status-sm-size": "var(--font-size-status-sm)",
    "status-sm-line-height": "var(--line-height-ui)",
    "status-md-size": "var(--font-size-status-md)",
    "status-md-line-height": "var(--line-height-ui)",
    "alert-title-size": "var(--font-size-alert-title)",
    "alert-title-line-height": "var(--line-height-heading-relaxed)",
    "alert-body-size": "var(--font-size-alert-body)",
    "alert-body-line-height": "var(--line-height-body-tight)",
    "toast-title-size": "var(--font-size-toast-title)",
    "toast-title-line-height": "var(--line-height-ui-relaxed)",
    "toast-body-size": "var(--font-size-toast-body)",
    "toast-body-line-height": "var(--line-height-body-tight)",
    "profile-name-size": "var(--font-size-profile-name)",
    "profile-name-line-height": "var(--line-height-heading-relaxed)",
    "profile-handle-size": "var(--font-size-profile-handle)",
    "profile-handle-line-height": "var(--line-height-body-tight)",
    "profile-bio-size": "var(--font-size-profile-bio)",
    "profile-bio-line-height": "var(--line-height-body-tight)",
    "profile-stat-value-size": "var(--font-size-profile-stat-value)",
    "profile-stat-value-line-height": "var(--line-height-ui)",
    "profile-stat-label-size": "var(--font-size-profile-stat-label)",
    "profile-stat-label-line-height": "var(--line-height-ui)",
    "profile-meta-size": "var(--font-size-profile-meta)",
    "profile-meta-line-height": "var(--line-height-body-tight)",
    "product-title-size": "var(--font-size-product-title)",
    "product-title-line-height": "var(--line-height-heading-relaxed)",
    "product-kicker-size": "var(--font-size-product-kicker)",
    "product-kicker-line-height": "var(--line-height-ui)",
    "product-summary-size": "var(--font-size-product-summary)",
    "product-summary-line-height": "var(--line-height-body-tight)",
    "product-feature-title-size": "var(--font-size-product-feature-title)",
    "product-feature-title-line-height": "var(--line-height-heading-relaxed)",
    "product-feature-body-size": "var(--font-size-product-feature-body)",
    "product-feature-body-line-height": "var(--line-height-body-tight)",
    "product-spec-label-size": "var(--font-size-product-spec-label)",
    "product-spec-label-line-height": "var(--line-height-ui)",
    "product-spec-value-size": "var(--font-size-product-spec-value)",
    "product-spec-value-line-height": "var(--line-height-body-tight)",
    "marketing-hero-size": "var(--font-size-marketing-hero)",
    "marketing-hero-line-height": "var(--line-height-heading-tight)",
    "marketing-section-title-size": "var(--font-size-marketing-section-title)",
    "marketing-section-title-line-height": "var(--line-height-heading)",
    "marketing-card-title-size": "var(--font-size-marketing-card-title)",
    "marketing-card-title-line-height": "var(--line-height-heading-relaxed)",
    "marketing-proof-size": "var(--font-size-marketing-proof)",
    "marketing-proof-line-height": "var(--line-height-body-tight)",
    "marketing-cta-size": "var(--font-size-marketing-cta)",
    "marketing-cta-line-height": "var(--line-height-ui)",
    "font-weight-light": "300",
    "font-weight-body": "400",
    "font-weight-medium": "500",
    "font-weight-semibold": "600",
    "font-weight-bold": "700",
    "font-weight-heading-strong": "var(--font-weight-bold)",
    "font-weight-heading": "var(--font-weight-semibold)",
    "font-weight-heading-soft": "var(--font-weight-medium)",
    "display-1-weight": "var(--font-weight-heading-strong)",
    "display-2-weight": "var(--font-weight-heading-strong)",
    "display-3-weight": "var(--font-weight-heading)",
    "headline-1-weight": "var(--font-weight-heading-strong)",
    "headline-2-weight": "var(--font-weight-heading)",
    "headline-3-weight": "var(--font-weight-heading-soft)",
    "headline-4-weight": "var(--font-weight-heading-soft)",
    "headline-5-weight": "var(--font-weight-heading-soft)",
    "headline-6-weight": "var(--font-weight-heading-soft)",
    "title-1-weight": "var(--font-weight-heading)",
    "title-2-weight": "var(--font-weight-heading-soft)",
    "title-3-weight": "var(--font-weight-heading-soft)",
    "subtitle-1-weight": "var(--font-weight-body)",
    "subtitle-2-weight": "var(--font-weight-body)",
    "section-title-weight": "var(--font-weight-light)",
    "description-1-weight": "var(--body-2-weight)",
    "description-2-weight": "var(--body-3-weight)",
    "body-1-weight": "var(--font-weight-body)",
    "body-2-weight": "var(--font-weight-body)",
    "body-3-weight": "var(--font-weight-body)",
    "body-4-weight": "var(--font-weight-body)",
    "editorial-title-weight": "var(--font-weight-heading-strong)",
    "editorial-heading-weight": "var(--font-weight-heading)",
    "editorial-subheading-weight": "var(--font-weight-heading-soft)",
    "editorial-body-weight": "var(--font-weight-body)",
    "editorial-lede-weight": "var(--font-weight-body)",
    "editorial-note-weight": "var(--font-weight-body)",
    "caption-1-weight": "var(--font-weight-body)",
    "caption-2-weight": "var(--font-weight-body)",
    "label-1-weight": "var(--font-weight-heading-soft)",
    "label-2-weight": "var(--font-weight-heading-soft)",
    "meta-1-weight": "var(--font-weight-body)",
    "meta-2-weight": "var(--font-weight-body)",
    "eyebrow-weight": "var(--font-weight-heading-soft)",
    "overline-weight": "var(--font-weight-heading-soft)",
    "nav-primary-weight": "var(--font-weight-heading-soft)",
    "nav-secondary-weight": "var(--font-weight-body)",
    "nav-local-label-weight": "var(--font-weight-body)",
    "nav-local-link-weight": "var(--font-weight-body)",
    "nav-tab-weight": "var(--nav-local-link-weight)",
    "breadcrumb-weight": "var(--font-weight-body)",
    "utility-nav-weight": "var(--font-weight-body)",
    "button-sm-weight": "var(--font-weight-heading-soft)",
    "button-md-weight": "var(--font-weight-heading-soft)",
    "button-lg-weight": "var(--font-weight-heading-soft)",
    "control-xs-weight": "var(--font-weight-heading-soft)",
    "control-sm-weight": "var(--font-weight-heading-soft)",
    "control-md-weight": "var(--font-weight-heading-soft)",
    "control-lg-weight": "var(--font-weight-heading-soft)",
    "chip-weight": "var(--font-weight-heading-soft)",
    "pill-weight": "var(--font-weight-heading-soft)",
    "menu-item-weight": "var(--font-weight-body)",
    "tooltip-weight": "var(--font-weight-body)",
    "field-label-weight": "var(--font-weight-heading-soft)",
    "field-input-weight": "var(--font-weight-body)",
    "field-placeholder-weight": "var(--font-weight-body)",
    "field-helper-weight": "var(--font-weight-body)",
    "field-error-weight": "var(--font-weight-body)",
    "field-counter-weight": "var(--font-weight-body)",
    "data-value-xl-weight": "var(--font-weight-heading)",
    "data-value-lg-weight": "var(--font-weight-heading)",
    "data-value-md-weight": "var(--font-weight-heading-soft)",
    "data-label-weight": "var(--font-weight-heading-soft)",
    "data-caption-weight": "var(--font-weight-body)",
    "chart-axis-weight": "var(--font-weight-body)",
    "chart-legend-weight": "var(--font-weight-body)",
    "table-heading-weight": "var(--font-weight-heading-soft)",
    "table-cell-weight": "var(--font-weight-body)",
    "table-cell-dense-weight": "var(--font-weight-body)",
    "table-caption-weight": "var(--font-weight-body)",
    "code-inline-weight": "var(--font-weight-body)",
    "code-block-weight": "var(--font-weight-body)",
    "kbd-weight": "var(--font-weight-heading-soft)",
    "path-weight": "var(--font-weight-body)",
    "status-sm-weight": "var(--font-weight-heading-soft)",
    "status-md-weight": "var(--font-weight-heading-soft)",
    "alert-title-weight": "var(--font-weight-heading-soft)",
    "alert-body-weight": "var(--font-weight-body)",
    "toast-title-weight": "var(--font-weight-heading-soft)",
    "toast-body-weight": "var(--font-weight-body)",
    "profile-name-weight": "var(--font-weight-heading)",
    "profile-handle-weight": "var(--font-weight-body)",
    "profile-bio-weight": "var(--font-weight-body)",
    "profile-stat-value-weight": "var(--font-weight-heading-soft)",
    "profile-stat-label-weight": "var(--font-weight-body)",
    "profile-meta-weight": "var(--font-weight-body)",
    "product-title-weight": "var(--font-weight-heading)",
    "product-kicker-weight": "var(--font-weight-heading-soft)",
    "product-summary-weight": "var(--font-weight-body)",
    "product-feature-title-weight": "var(--font-weight-heading-soft)",
    "product-feature-body-weight": "var(--font-weight-body)",
    "product-spec-label-weight": "var(--font-weight-heading-soft)",
    "product-spec-value-weight": "var(--font-weight-body)",
    "marketing-hero-weight": "var(--font-weight-heading-strong)",
    "marketing-section-title-weight": "var(--font-weight-heading)",
    "marketing-card-title-weight": "var(--font-weight-heading-soft)",
    "marketing-proof-weight": "var(--font-weight-body)",
    "marketing-cta-weight": "var(--font-weight-heading-soft)",
    "tracking-display": "0.08em",
    "tracking-heading": "0.01em",
    "tracking-copy": "0.01em",
    "tracking-control": "0.008em",
    "tracking-label": "0.04em",
    "tracking-meta": "0.02em",
    "tracking-caption": "0.015em",
    "tracking-ui": "0.08em",
    "tracking-code": "0",
    "display-1-tracking": "var(--tracking-display)",
    "display-2-tracking": "var(--tracking-display)",
    "display-3-tracking": "var(--tracking-heading)",
    "headline-1-tracking": "var(--tracking-display)",
    "headline-2-tracking": "var(--tracking-heading)",
    "headline-3-tracking": "var(--tracking-heading)",
    "headline-4-tracking": "var(--tracking-heading)",
    "headline-5-tracking": "var(--tracking-heading)",
    "headline-6-tracking": "var(--tracking-heading)",
    "title-1-tracking": "var(--tracking-heading)",
    "title-2-tracking": "var(--tracking-heading)",
    "title-3-tracking": "var(--tracking-heading)",
    "section-title-tracking": "-0.03em",
    "subtitle-1-tracking": "var(--tracking-copy)",
    "subtitle-2-tracking": "var(--tracking-copy)",
    "body-1-tracking": "var(--tracking-copy)",
    "body-2-tracking": "var(--tracking-copy)",
    "body-3-tracking": "var(--tracking-copy)",
    "body-4-tracking": "var(--tracking-copy)",
    "description-1-tracking": "var(--body-2-tracking)",
    "description-2-tracking": "var(--body-3-tracking)",
    "editorial-title-tracking": "var(--tracking-heading)",
    "editorial-heading-tracking": "var(--tracking-heading)",
    "editorial-subheading-tracking": "var(--tracking-heading)",
    "editorial-body-tracking": "var(--tracking-copy)",
    "editorial-lede-tracking": "var(--tracking-copy)",
    "editorial-note-tracking": "var(--tracking-caption)",
    "caption-1-tracking": "var(--tracking-caption)",
    "caption-2-tracking": "var(--tracking-caption)",
    "label-1-tracking": "var(--tracking-label)",
    "label-2-tracking": "var(--tracking-label)",
    "meta-1-tracking": "var(--tracking-meta)",
    "meta-2-tracking": "var(--tracking-meta)",
    "eyebrow-tracking": "var(--tracking-ui)",
    "overline-tracking": "var(--tracking-ui)",
    "nav-primary-tracking": "var(--tracking-control)",
    "nav-secondary-tracking": "var(--tracking-control)",
    "nav-local-label-tracking": "var(--tracking-control)",
    "nav-local-link-tracking": "var(--tracking-control)",
    "nav-tab-tracking": "var(--nav-local-link-tracking)",
    "breadcrumb-tracking": "var(--tracking-meta)",
    "utility-nav-tracking": "var(--tracking-control)",
    "button-sm-tracking": "var(--tracking-control)",
    "button-md-tracking": "var(--tracking-control)",
    "button-lg-tracking": "var(--tracking-control)",
    "control-xs-tracking": "var(--tracking-control)",
    "control-sm-tracking": "var(--tracking-control)",
    "control-md-tracking": "var(--tracking-control)",
    "control-lg-tracking": "var(--tracking-control)",
    "chip-tracking": "var(--tracking-control)",
    "pill-tracking": "var(--tracking-control)",
    "menu-item-tracking": "var(--tracking-control)",
    "tooltip-tracking": "var(--tracking-caption)",
    "field-label-tracking": "var(--tracking-label)",
    "field-input-tracking": "var(--tracking-copy)",
    "field-placeholder-tracking": "var(--tracking-copy)",
    "field-helper-tracking": "var(--tracking-caption)",
    "field-error-tracking": "var(--tracking-caption)",
    "field-counter-tracking": "var(--tracking-caption)",
    "data-value-xl-tracking": "var(--tracking-heading)",
    "data-value-lg-tracking": "var(--tracking-heading)",
    "data-value-md-tracking": "var(--tracking-heading)",
    "data-label-tracking": "var(--tracking-label)",
    "data-caption-tracking": "var(--tracking-caption)",
    "chart-axis-tracking": "var(--tracking-caption)",
    "chart-legend-tracking": "var(--tracking-caption)",
    "table-heading-tracking": "var(--tracking-label)",
    "table-cell-tracking": "var(--tracking-copy)",
    "table-cell-dense-tracking": "var(--tracking-copy)",
    "table-caption-tracking": "var(--tracking-caption)",
    "code-inline-tracking": "var(--tracking-code)",
    "code-block-tracking": "var(--tracking-code)",
    "kbd-tracking": "var(--tracking-control)",
    "path-tracking": "var(--tracking-code)",
    "status-sm-tracking": "var(--tracking-control)",
    "status-md-tracking": "var(--tracking-control)",
    "alert-title-tracking": "var(--tracking-heading)",
    "alert-body-tracking": "var(--tracking-copy)",
    "toast-title-tracking": "var(--tracking-heading)",
    "toast-body-tracking": "var(--tracking-copy)",
    "profile-name-tracking": "var(--tracking-heading)",
    "profile-handle-tracking": "var(--tracking-meta)",
    "profile-bio-tracking": "var(--tracking-copy)",
    "profile-stat-value-tracking": "var(--tracking-heading)",
    "profile-stat-label-tracking": "var(--tracking-caption)",
    "profile-meta-tracking": "var(--tracking-meta)",
    "product-title-tracking": "var(--tracking-heading)",
    "product-kicker-tracking": "var(--tracking-ui)",
    "product-summary-tracking": "var(--tracking-copy)",
    "product-feature-title-tracking": "var(--tracking-heading)",
    "product-feature-body-tracking": "var(--tracking-copy)",
    "product-spec-label-tracking": "var(--tracking-label)",
    "product-spec-value-tracking": "var(--tracking-copy)",
    "marketing-hero-tracking": "var(--tracking-display)",
    "marketing-section-title-tracking": "var(--tracking-heading)",
    "marketing-card-title-tracking": "var(--tracking-heading)",
    "marketing-proof-tracking": "var(--tracking-copy)",
    "marketing-cta-tracking": "var(--tracking-control)",
    "text-transform-none": "none",
    "text-transform-uppercase": "uppercase",
    "eyebrow-transform": "var(--cc-transform-uppercase)",
    "overline-transform": "var(--cc-transform-uppercase)",
    "label-1-transform": "var(--cc-transform-none)",
    "label-2-transform": "var(--cc-transform-none)",
    "section-title-transform": "var(--cc-transform-none)",
    "nav-primary-transform": "var(--cc-transform-none)",
    "nav-secondary-transform": "var(--cc-transform-none)",
    "nav-local-label-transform": "var(--cc-transform-none)",
    "nav-local-link-transform": "var(--cc-transform-none)",
    "button-transform": "var(--cc-transform-none)",
    "control-transform": "var(--cc-transform-none)",
    "product-kicker-transform": "var(--cc-transform-uppercase)",
    "z-below": "-1",
    "z-base": "1",
    "z-raised": "10",
    "z-sticky": "100",
    "z-fixed": "1000",
    "z-overlay-backdrop": "10000",
    "z-overlay-surface": "10010",
    "z-overlay-control": "10020",
    "z-menu": "100000",
    "z-header-controls": "100001",
    "z-country-overlay": "100100",
    "z-language-dropdown": "200001",
  ]

  static let color_white = "#ffffff"
  static let color_black = "#000000"
  static let color_primary1 = "#917c6f"
  static let color_primary2 = "#504416"
  static let color_primary3 = "#999999"
  static let color_primary4 = "#222b00"
  static let color_primary5 = "#008080"
  static let color_primary6 = "#808000"
  static let color_primary7 = "#ff5555"
  static let color_primary8 = "#66ff00"
  static let color_primary9 = "#00ffff"
  static let color_primary10 = "#ffcc00"
  static let bg_color = "var(--color-black)"
  static let text_color = "var(--color-white)"
  static let text_primary_color = "var(--cc-color)"
  static let text_secondary_color = "var(--color-primary3)"
  static let link_color = "var(--color-primary5)"
  static let link_hover_color = "var(--color-primary6)"
  static let border_color = "rgba(255,255,255,0.14)"
  static let surface_0 = "transparent"
  static let surface_1 = "rgba(255,255,255,0.04)"
  static let surface_2 = "rgba(255,255,255,0.06)"
  static let surface_3 = "rgba(255,255,255,0.08)"
  static let surface_4 = "rgba(255,255,255,0.12)"
  static let surface_inverse_1 = "rgba(0,0,0,0.04)"
  static let surface_inverse_2 = "rgba(0,0,0,0.06)"
  static let surface_inverse_3 = "rgba(0,0,0,0.08)"
  static let surface_inverse_4 = "rgba(0,0,0,0.12)"
  static let overlay_backdrop_dark = "rgba(0,0,0,0.48)"
  static let overlay_backdrop_light = "rgba(255,255,255,0.28)"
  static let cc_blur_unified = "var(--glass-surface-blur)"
  static let cc_border_unified = "var(--border-color)"
  static let cc_color = "var(--text-color)"
  static let cc_composition_footer_clearance = "var(--home-composition-footer-clearance)"
  static let cc_composition_panel_to_response_gap = "var(--home-composition-panel-to-response-gap)"
  static let cc_composition_shell_block_padding = "var(--home-composition-shell-block-padding)"
  static let cc_composition_stage_component_gap = "var(--home-composition-stage-component-gap)"
  static let cc_composition_stage_width = "var(--home-composition-stage-width)"
  static let cc_composition_stage_width_mobile = "var(--home-composition-stage-width-mobile)"
  static let cc_composition_topbar_clearance = "var(--home-composition-topbar-clearance)"
  static let cc_hero_shader_canvas_softness = "var(--home-hero-shader-canvas-softness)"
  static let cc_hero_shader_matte_blur = "var(--home-hero-shader-matte-blur)"
  static let cc_hero_shader_matte_opacity = "var(--home-hero-shader-matte-opacity)"
  static let cc_hero_shader_matte_surface_dark = "var(--home-hero-shader-matte-surface-dark)"
  static let cc_hero_shader_matte_surface_light = "var(--home-hero-shader-matte-surface-light)"
  static let cc_hero_shader_opacity = "var(--home-hero-shader-opacity)"
  static let cc_hero_shader_transition = "var(--home-hero-shader-transition)"
  static let cc_hero_shader_veil_blur = "var(--home-hero-shader-veil-blur)"
  static let cc_hero_shader_veil_opacity = "var(--home-hero-shader-veil-opacity)"
  static let cc_home_announcement_mobile_line_height = "var(--layout-home-announcement-mobile-line-height)"
  static let cc_home_announcement_mobile_size = "var(--layout-home-announcement-mobile-size)"
  static let cc_home_announcement_secondary_mobile_size = "var(--layout-home-announcement-secondary-mobile-size)"
  static let cc_home_announcement_secondary_mobile_tracking = "var(--layout-home-announcement-secondary-mobile-tracking)"
  static let cc_home_announcement_secondary_size = "var(--layout-home-announcement-secondary-size)"
  static let cc_home_announcement_secondary_tracking = "var(--layout-home-announcement-secondary-tracking)"
  static let cc_home_announcement_secondary_weight = "var(--layout-home-announcement-secondary-weight)"
  static let cc_home_announcement_size = "var(--layout-home-announcement-size)"
  static let cc_home_announcement_tracking = "var(--layout-home-announcement-tracking)"
  static let cc_home_announcement_weight = "var(--layout-home-announcement-weight)"
  static let cc_home_circle_blur = "var(--layout-home-circle-blur)"
  static let cc_home_circle_breathe_duration = "var(--layout-home-circle-breathe-duration)"
  static let cc_home_circle_halo_opacity = "var(--layout-home-circle-halo-opacity)"
  static let cc_home_circle_halo_scale = "var(--layout-home-circle-halo-scale)"
  static let cc_home_circle_mid_scale = "var(--layout-home-circle-mid-scale)"
  static let cc_home_circle_start_scale = "var(--layout-home-circle-start-scale)"
  static let cc_home_enter_border_width = "var(--layout-home-enter-border-width)"
  static let cc_home_enter_breathe_duration = "var(--layout-home-enter-breathe-duration)"
  static let cc_home_enter_breathe_y = "var(--layout-home-enter-breathe-y)"
  static let cc_home_enter_height = "var(--layout-home-enter-height)"
  static let cc_home_enter_hover_opacity = "var(--layout-home-enter-hover-opacity)"
  static let cc_home_enter_hover_y = "var(--layout-home-enter-hover-y)"
  static let cc_home_enter_icon_size = "var(--layout-home-enter-icon-size)"
  static let cc_home_enter_mobile_height = "var(--layout-home-enter-mobile-height)"
  static let cc_home_enter_mobile_padding_x = "var(--layout-home-enter-mobile-padding-x)"
  static let cc_home_enter_mobile_padding_y = "var(--layout-home-enter-mobile-padding-y)"
  static let cc_home_enter_mobile_size = "var(--layout-home-enter-mobile-size)"
  static let cc_home_enter_mobile_width = "var(--layout-home-enter-mobile-width)"
  static let cc_home_enter_padding_x = "var(--layout-home-enter-padding-x)"
  static let cc_home_enter_padding_y = "var(--layout-home-enter-padding-y)"
  static let cc_home_enter_size = "var(--layout-home-enter-size)"
  static let cc_home_enter_tracking = "var(--layout-home-enter-tracking)"
  static let cc_home_enter_weight = "var(--layout-home-enter-weight)"
  static let cc_home_enter_width = "var(--layout-home-enter-width)"
  static let cc_home_essence_delay = "var(--layout-home-essence-delay)"
  static let cc_home_essence_desktop_layer_size = "var(--layout-home-essence-desktop-layer-size)"
  static let cc_home_essence_fast_duration = "var(--layout-home-essence-fast-duration)"
  static let cc_home_essence_gap_blur = "var(--layout-home-essence-gap-blur)"
  static let cc_home_essence_gap_scale = "var(--layout-home-essence-gap-scale)"
  static let cc_home_essence_gap_y = "var(--layout-home-essence-gap-y)"
  static let cc_home_essence_hide_y = "var(--layout-home-essence-hide-y)"
  static let cc_home_essence_inactive_blur = "var(--layout-home-essence-inactive-blur)"
  static let cc_home_essence_inactive_scale = "var(--layout-home-essence-inactive-scale)"
  static let cc_home_essence_inactive_y = "var(--layout-home-essence-inactive-y)"
  static let cc_home_essence_inner_height = "var(--layout-home-essence-inner-height)"
  static let cc_home_essence_inner_height_dynamic = "var(--layout-home-essence-inner-height-dynamic)"
  static let cc_home_essence_inner_height_small = "var(--layout-home-essence-inner-height-small)"
  static let cc_home_essence_inner_opacity = "var(--layout-home-essence-inner-opacity)"
  static let cc_home_essence_inner_opacity_motion = "var(--layout-home-essence-inner-opacity-motion)"
  static let cc_home_essence_inner_transform = "var(--layout-home-essence-inner-transform)"
  static let cc_home_essence_inner_transform_motion = "var(--layout-home-essence-inner-transform-motion)"
  static let cc_home_essence_layer_enter_blur = "var(--layout-home-essence-layer-enter-blur)"
  static let cc_home_essence_layer_enter_scale = "var(--layout-home-essence-layer-enter-scale)"
  static let cc_home_essence_layer_enter_y = "var(--layout-home-essence-layer-enter-y)"
  static let cc_home_essence_layer_filter_motion = "var(--layout-home-essence-layer-filter-motion)"
  static let cc_home_essence_layer_font_size = "var(--layout-home-essence-layer-font-size)"
  static let cc_home_essence_layer_font_weight = "var(--layout-home-essence-layer-font-weight)"
  static let cc_home_essence_layer_line_height = "var(--layout-home-essence-layer-line-height)"
  static let cc_home_essence_layer_opacity_hidden = "var(--layout-home-essence-layer-opacity-hidden)"
  static let cc_home_essence_layer_opacity_motion = "var(--layout-home-essence-layer-opacity-motion)"
  static let cc_home_essence_layer_tracking = "var(--layout-home-essence-layer-tracking)"
  static let cc_home_essence_layer_transform_motion = "var(--layout-home-essence-layer-transform-motion)"
  static let cc_home_essence_mobile_layer_line_height = "var(--layout-home-essence-mobile-layer-line-height)"
  static let cc_home_essence_mobile_layer_size = "var(--layout-home-essence-mobile-layer-size)"
  static let cc_home_essence_phase_active_blur = "var(--layout-home-essence-phase-active-blur)"
  static let cc_home_essence_phase_active_opacity = "var(--layout-home-essence-phase-active-opacity)"
  static let cc_home_essence_phase_active_scale = "var(--layout-home-essence-phase-active-scale)"
  static let cc_home_essence_phase_active_y = "var(--layout-home-essence-phase-active-y)"
  static let cc_home_essence_phase_enter_blur = "var(--layout-home-essence-phase-enter-blur)"
  static let cc_home_essence_phase_enter_scale = "var(--layout-home-essence-phase-enter-scale)"
  static let cc_home_essence_phase_enter_y = "var(--layout-home-essence-phase-enter-y)"
  static let cc_home_essence_phase_exit_blur = "var(--layout-home-essence-phase-exit-blur)"
  static let cc_home_essence_phase_exit_scale = "var(--layout-home-essence-phase-exit-scale)"
  static let cc_home_essence_phase_exit_y = "var(--layout-home-essence-phase-exit-y)"
  static let cc_home_essence_phase_hidden_blur = "var(--layout-home-essence-phase-hidden-blur)"
  static let cc_home_essence_phase_hidden_blur_final = "var(--layout-home-essence-phase-hidden-blur-final)"
  static let cc_home_essence_phase_hidden_scale = "var(--layout-home-essence-phase-hidden-scale)"
  static let cc_home_essence_phase_hidden_y = "var(--layout-home-essence-phase-hidden-y)"
  static let cc_home_essence_phase_hidden_y_final = "var(--layout-home-essence-phase-hidden-y-final)"
  static let cc_home_essence_preview_blur = "var(--layout-home-essence-preview-blur)"
  static let cc_home_essence_preview_opacity = "var(--layout-home-essence-preview-opacity)"
  static let cc_home_essence_preview_scale = "var(--layout-home-essence-preview-scale)"
  static let cc_home_essence_preview_y = "var(--layout-home-essence-preview-y)"
  static let cc_home_essence_reveal_width = "var(--layout-home-essence-reveal-width)"
  static let cc_home_essence_reveal_y = "var(--layout-home-essence-reveal-y)"
  static let cc_home_essence_stack_min_height = "var(--layout-home-essence-stack-min-height)"
  static let cc_home_essence_stage_min_height = "var(--layout-home-essence-stage-min-height)"
  static let cc_home_featured_functions_card_border_color_dark = "var(--layout-home-featured-functions-card-border-color-dark)"
  static let cc_home_featured_functions_card_border_color_hover_dark = "var(--layout-home-featured-functions-card-border-color-hover-dark)"
  static let cc_home_featured_functions_card_border_color_hover_light = "var(--layout-home-featured-functions-card-border-color-hover-light)"
  static let cc_home_featured_functions_card_border_color_light = "var(--layout-home-featured-functions-card-border-color-light)"
  static let cc_home_featured_functions_card_border_width = "var(--layout-home-featured-functions-card-border-width)"
  static let cc_home_featured_functions_card_copy_max_width = "var(--layout-home-featured-functions-card-copy-max-width)"
  static let cc_home_featured_functions_card_icon_filter_dark = "var(--layout-home-featured-functions-card-icon-filter-dark)"
  static let cc_home_featured_functions_card_icon_filter_light = "var(--layout-home-featured-functions-card-icon-filter-light)"
  static let cc_home_featured_functions_card_label_line_height = "var(--layout-home-featured-functions-card-label-line-height)"
  static let cc_home_featured_functions_card_label_tracking = "var(--layout-home-featured-functions-card-label-tracking)"
  static let cc_home_featured_functions_card_label_weight = "var(--layout-home-featured-functions-card-label-weight)"
  static let cc_home_featured_functions_card_matte_blur = "var(--layout-home-featured-functions-card-matte-blur)"
  static let cc_home_featured_functions_card_matte_saturation = "var(--layout-home-featured-functions-card-matte-saturation)"
  static let cc_home_featured_functions_card_matte_surface_bottom_dark = "var(--layout-home-featured-functions-card-matte-surface-bottom-dark)"
  static let cc_home_featured_functions_card_matte_surface_bottom_light = "var(--layout-home-featured-functions-card-matte-surface-bottom-light)"
  static let cc_home_featured_functions_card_matte_surface_mid_dark = "var(--layout-home-featured-functions-card-matte-surface-mid-dark)"
  static let cc_home_featured_functions_card_matte_surface_mid_light = "var(--layout-home-featured-functions-card-matte-surface-mid-light)"
  static let cc_home_featured_functions_card_matte_surface_top_dark = "var(--layout-home-featured-functions-card-matte-surface-top-dark)"
  static let cc_home_featured_functions_card_matte_surface_top_light = "var(--layout-home-featured-functions-card-matte-surface-top-light)"
  static let cc_home_featured_functions_card_padding = "var(--layout-home-featured-functions-card-padding)"
  static let cc_home_featured_functions_card_placeholder_fill_bottom_dark = "var(--layout-home-featured-functions-card-placeholder-fill-bottom-dark)"
  static let cc_home_featured_functions_card_placeholder_fill_bottom_light = "var(--layout-home-featured-functions-card-placeholder-fill-bottom-light)"
  static let cc_home_featured_functions_card_placeholder_fill_top_dark = "var(--layout-home-featured-functions-card-placeholder-fill-top-dark)"
  static let cc_home_featured_functions_card_placeholder_fill_top_light = "var(--layout-home-featured-functions-card-placeholder-fill-top-light)"
  static let cc_home_featured_functions_card_placeholder_glow_a_dark = "var(--layout-home-featured-functions-card-placeholder-glow-a-dark)"
  static let cc_home_featured_functions_card_placeholder_glow_a_light = "var(--layout-home-featured-functions-card-placeholder-glow-a-light)"
  static let cc_home_featured_functions_card_placeholder_glow_b_dark = "var(--layout-home-featured-functions-card-placeholder-glow-b-dark)"
  static let cc_home_featured_functions_card_placeholder_glow_b_light = "var(--layout-home-featured-functions-card-placeholder-glow-b-light)"
  static let cc_home_featured_functions_card_spectrum_blend = "var(--layout-home-featured-functions-card-spectrum-blend)"
  static let cc_home_featured_functions_card_spectrum_blue = "var(--layout-home-featured-functions-card-spectrum-blue)"
  static let cc_home_featured_functions_card_spectrum_cyan = "var(--layout-home-featured-functions-card-spectrum-cyan)"
  static let cc_home_featured_functions_card_spectrum_opacity = "var(--layout-home-featured-functions-card-spectrum-opacity)"
  static let cc_home_featured_functions_card_spectrum_opacity_light = "var(--layout-home-featured-functions-card-spectrum-opacity-light)"
  static let cc_home_featured_functions_card_spectrum_orange = "var(--layout-home-featured-functions-card-spectrum-orange)"
  static let cc_home_featured_functions_card_spectrum_red = "var(--layout-home-featured-functions-card-spectrum-red)"
  static let cc_home_featured_functions_card_spectrum_violet = "var(--layout-home-featured-functions-card-spectrum-violet)"
  static let cc_home_featured_functions_card_spectrum_yellow = "var(--layout-home-featured-functions-card-spectrum-yellow)"
  static let cc_home_featured_functions_card_summary_color_dark = "var(--layout-home-featured-functions-card-summary-color-dark)"
  static let cc_home_featured_functions_card_summary_color_light = "var(--layout-home-featured-functions-card-summary-color-light)"
  static let cc_home_featured_functions_card_summary_gap = "var(--layout-home-featured-functions-card-summary-gap)"
  static let cc_home_featured_functions_card_surface_bg_dark = "var(--layout-home-featured-functions-card-surface-bg-dark)"
  static let cc_home_featured_functions_card_surface_bg_light = "var(--layout-home-featured-functions-card-surface-bg-light)"
  static let cc_home_featured_functions_card_surface_highlight_hover_dark = "var(--layout-home-featured-functions-card-surface-highlight-hover-dark)"
  static let cc_home_featured_functions_card_surface_highlight_hover_light = "var(--layout-home-featured-functions-card-surface-highlight-hover-light)"
  static let cc_home_featured_functions_card_surface_highlight_rest_dark = "var(--layout-home-featured-functions-card-surface-highlight-rest-dark)"
  static let cc_home_featured_functions_card_surface_highlight_rest_light = "var(--layout-home-featured-functions-card-surface-highlight-rest-light)"
  static let cc_home_featured_functions_card_title_gap = "var(--layout-home-featured-functions-card-title-gap)"
  static let cc_home_featured_functions_control_disabled_opacity = "var(--layout-home-featured-functions-control-disabled-opacity)"
  static let cc_home_featured_functions_control_icon_size = "var(--layout-home-featured-functions-control-icon-size)"
  static let cc_home_featured_functions_control_size = "var(--layout-home-featured-functions-control-size)"
  static let cc_home_featured_functions_description_opacity = "var(--layout-home-featured-functions-description-opacity)"
  static let cc_home_featured_functions_dot_opacity = "var(--layout-home-featured-functions-dot-opacity)"
  static let cc_home_featured_functions_dot_opacity_active = "var(--layout-home-featured-functions-dot-opacity-active)"
  static let cc_home_featured_functions_dot_opacity_dark = "var(--layout-home-featured-functions-dot-opacity-dark)"
  static let cc_home_featured_functions_dot_opacity_light = "var(--layout-home-featured-functions-dot-opacity-light)"
  static let cc_home_featured_functions_dot_size = "var(--layout-home-featured-functions-dot-size)"
  static let cc_home_featured_functions_eyebrow_opacity = "var(--layout-home-featured-functions-eyebrow-opacity)"
  static let cc_home_featured_functions_footer_max_width = "var(--layout-home-featured-functions-footer-max-width)"
  static let cc_home_featured_functions_max_width = "var(--layout-home-featured-functions-max-width)"
  static let cc_home_featured_functions_rail_offset = "var(--layout-home-featured-functions-rail-offset)"
  static let cc_home_featured_functions_ready_opacity_motion = "var(--layout-home-featured-functions-ready-opacity-motion)"
  static let cc_home_featured_functions_timeline_height = "var(--layout-home-featured-functions-timeline-height)"
  static let cc_home_featured_functions_timeline_progress_scale = "var(--layout-home-featured-functions-timeline-progress-scale)"
  static let cc_home_featured_functions_track_motion = "var(--layout-home-featured-functions-track-motion)"
  static let cc_home_featured_functions_viewport_max_width = "var(--layout-home-featured-functions-viewport-max-width)"
  static let cc_home_featured_functions_visual_aspect_ratio = "var(--layout-home-featured-functions-visual-aspect-ratio)"
  static let cc_home_halo_breathe_duration = "var(--layout-home-halo-breathe-duration)"
  static let cc_home_halo_start_opacity = "var(--layout-home-halo-start-opacity)"
  static let cc_home_interaction_panel_composer_gap = "var(--layout-home-interaction-panel-composer-gap)"
  static let cc_home_interaction_panel_composer_side_gap = "var(--layout-home-interaction-panel-composer-side-gap)"
  static let cc_home_interaction_panel_control_pulse_shadow = "var(--layout-home-interaction-panel-control-pulse-shadow)"
  static let cc_home_interaction_panel_control_pulse_shadow_active = "var(--layout-home-interaction-panel-control-pulse-shadow-active)"
  static let cc_home_interaction_panel_control_size = "var(--layout-home-interaction-panel-control-size)"
  static let cc_home_interaction_panel_developer_action_line_height = "var(--layout-home-interaction-panel-developer-action-line-height)"
  static let cc_home_interaction_panel_developer_action_min_height = "var(--layout-home-interaction-panel-developer-action-min-height)"
  static let cc_home_interaction_panel_developer_action_padding_x = "var(--layout-home-interaction-panel-developer-action-padding-x)"
  static let cc_home_interaction_panel_developer_action_size = "var(--layout-home-interaction-panel-developer-action-size)"
  static let cc_home_interaction_panel_developer_action_tracking = "var(--layout-home-interaction-panel-developer-action-tracking)"
  static let cc_home_interaction_panel_developer_action_weight = "var(--layout-home-interaction-panel-developer-action-weight)"
  static let cc_home_interaction_panel_developer_actions_gap = "var(--layout-home-interaction-panel-developer-actions-gap)"
  static let cc_home_interaction_panel_developer_control_min_width = "var(--layout-home-interaction-panel-developer-control-min-width)"
  static let cc_home_interaction_panel_developer_status_line_height = "var(--layout-home-interaction-panel-developer-status-line-height)"
  static let cc_home_interaction_panel_developer_status_size = "var(--layout-home-interaction-panel-developer-status-size)"
  static let cc_home_interaction_panel_disabled_opacity = "var(--layout-home-interaction-panel-disabled-opacity)"
  static let cc_home_interaction_panel_dot_width = "var(--layout-home-interaction-panel-dot-width)"
  static let cc_home_interaction_panel_file_chip_min_height = "var(--layout-home-interaction-panel-file-chip-min-height)"
  static let cc_home_interaction_panel_file_chip_padding_x = "var(--layout-home-interaction-panel-file-chip-padding-x)"
  static let cc_home_interaction_panel_file_chip_size = "var(--layout-home-interaction-panel-file-chip-size)"
  static let cc_home_interaction_panel_file_chip_tracking = "var(--layout-home-interaction-panel-file-chip-tracking)"
  static let cc_home_interaction_panel_file_chip_weight = "var(--layout-home-interaction-panel-file-chip-weight)"
  static let cc_home_interaction_panel_file_gap = "var(--layout-home-interaction-panel-file-gap)"
  static let cc_home_interaction_panel_form_gap = "var(--layout-home-interaction-panel-form-gap)"
  static let cc_home_interaction_panel_gap = "var(--layout-home-interaction-panel-gap)"
  static let cc_home_interaction_panel_icon_opacity = "var(--layout-home-interaction-panel-icon-opacity)"
  static let cc_home_interaction_panel_icon_opacity_hover = "var(--layout-home-interaction-panel-icon-opacity-hover)"
  static let cc_home_interaction_panel_icon_size = "var(--layout-home-interaction-panel-icon-size)"
  static let cc_home_interaction_panel_input_line_height = "var(--layout-home-interaction-panel-input-line-height)"
  static let cc_home_interaction_panel_input_max_height = "var(--layout-home-interaction-panel-input-max-height)"
  static let cc_home_interaction_panel_input_min_height = "var(--layout-home-interaction-panel-input-min-height)"
  static let cc_home_interaction_panel_input_padding_x = "var(--layout-home-interaction-panel-input-padding-x)"
  static let cc_home_interaction_panel_input_padding_y = "var(--layout-home-interaction-panel-input-padding-y)"
  static let cc_home_interaction_panel_model_gap = "var(--layout-home-interaction-panel-model-gap)"
  static let cc_home_interaction_panel_model_height = "var(--layout-home-interaction-panel-model-height)"
  static let cc_home_interaction_panel_model_name_line_height = "var(--layout-home-interaction-panel-model-name-line-height)"
  static let cc_home_interaction_panel_model_name_size = "var(--layout-home-interaction-panel-model-name-size)"
  static let cc_home_interaction_panel_model_name_tracking = "var(--layout-home-interaction-panel-model-name-tracking)"
  static let cc_home_interaction_panel_model_name_weight = "var(--layout-home-interaction-panel-model-name-weight)"
  static let cc_home_interaction_panel_model_padding_x = "var(--layout-home-interaction-panel-model-padding-x)"
  static let cc_home_interaction_panel_model_padding_x_mobile = "var(--layout-home-interaction-panel-model-padding-x-mobile)"
  static let cc_home_interaction_panel_padding = "var(--layout-home-interaction-panel-padding)"
  static let cc_home_interaction_panel_padding_mobile = "var(--layout-home-interaction-panel-padding-mobile)"
  static let cc_home_interaction_panel_submit_gap = "var(--layout-home-interaction-panel-submit-gap)"
  static let cc_home_interaction_panel_submit_height = "var(--layout-home-interaction-panel-submit-height)"
  static let cc_home_interaction_panel_submit_line_height = "var(--layout-home-interaction-panel-submit-line-height)"
  static let cc_home_interaction_panel_submit_padding_x = "var(--layout-home-interaction-panel-submit-padding-x)"
  static let cc_home_interaction_panel_submit_size = "var(--layout-home-interaction-panel-submit-size)"
  static let cc_home_interaction_panel_submit_weight = "var(--layout-home-interaction-panel-submit-weight)"
  static let cc_home_interaction_panel_thinking_animation_duration = "var(--layout-home-interaction-panel-thinking-animation-duration)"
  static let cc_home_interaction_panel_thinking_animation_steps = "var(--layout-home-interaction-panel-thinking-animation-steps)"
  static let cc_home_interaction_panel_voice_animation_duration = "var(--layout-home-interaction-panel-voice-animation-duration)"
  static let cc_home_interaction_panel_voice_opacity_active = "var(--layout-home-interaction-panel-voice-opacity-active)"
  static let cc_home_interaction_panel_voice_opacity_inactive = "var(--layout-home-interaction-panel-voice-opacity-inactive)"
  static let cc_home_interaction_panel_width = "var(--layout-home-interaction-panel-width)"
  static let cc_home_interaction_panel_width_mobile = "var(--layout-home-interaction-panel-width-mobile)"
  static let cc_home_intro_content_opacity_duration = "var(--layout-home-intro-content-opacity-duration)"
  static let cc_home_intro_content_transform_duration = "var(--layout-home-intro-content-transform-duration)"
  static let cc_home_intro_logo_scale_fade = "var(--layout-home-intro-logo-scale-fade)"
  static let cc_home_intro_logo_scale_settle = "var(--layout-home-intro-logo-scale-settle)"
  static let cc_home_intro_logo_scale_start = "var(--layout-home-intro-logo-scale-start)"
  static let cc_home_intro_reveal_y = "var(--layout-home-intro-reveal-y)"
  static let cc_home_logo_docked_margin_bottom = "var(--layout-home-logo-docked-margin-bottom)"
  static let cc_home_logo_margin_bottom = "var(--layout-home-logo-margin-bottom)"
  static let cc_home_logo_transition_opacity = "var(--layout-home-logo-transition-opacity)"
  static let cc_home_logo_transition_transform = "var(--layout-home-logo-transition-transform)"
  static let cc_home_logo_width = "var(--layout-home-logo-width)"
  static let cc_home_logo_width_mobile = "var(--layout-home-logo-width-mobile)"
  static let cc_home_platform_blur = "var(--layout-home-platform-blur)"
  static let cc_home_platform_chrome_min_height = "var(--layout-home-platform-chrome-min-height)"
  static let cc_home_platform_content_copy_line_height = "var(--layout-home-platform-content-copy-line-height)"
  static let cc_home_platform_content_copy_max_width = "var(--layout-home-platform-content-copy-max-width)"
  static let cc_home_platform_content_copy_size = "var(--layout-home-platform-content-copy-size)"
  static let cc_home_platform_content_copy_tracking = "var(--layout-home-platform-content-copy-tracking)"
  static let cc_home_platform_content_copy_weight = "var(--layout-home-platform-content-copy-weight)"
  static let cc_home_platform_content_header_gap = "var(--layout-home-platform-content-header-gap)"
  static let cc_home_platform_content_header_padding_bottom = "var(--layout-home-platform-content-header-padding-bottom)"
  static let cc_home_platform_content_header_padding_left = "var(--layout-home-platform-content-header-padding-left)"
  static let cc_home_platform_content_header_padding_right = "var(--layout-home-platform-content-header-padding-right)"
  static let cc_home_platform_content_header_padding_top = "var(--layout-home-platform-content-header-padding-top)"
  static let cc_home_platform_content_inner_footer_gap = "var(--layout-home-platform-content-inner-footer-gap)"
  static let cc_home_platform_content_inner_padding_left = "var(--layout-home-platform-content-inner-padding-left)"
  static let cc_home_platform_content_inner_padding_top = "var(--layout-home-platform-content-inner-padding-top)"
  static let cc_home_platform_content_stack_gap = "var(--layout-home-platform-content-stack-gap)"
  static let cc_home_platform_content_title_color = "var(--layout-home-platform-content-title-color)"
  static let cc_home_platform_content_title_line_height = "var(--layout-home-platform-content-title-line-height)"
  static let cc_home_platform_content_title_size = "var(--layout-home-platform-content-title-size)"
  static let cc_home_platform_content_title_tracking = "var(--layout-home-platform-content-title-tracking)"
  static let cc_home_platform_content_title_transform = "var(--layout-home-platform-content-title-transform)"
  static let cc_home_platform_content_title_weight = "var(--layout-home-platform-content-title-weight)"
  static let cc_home_platform_destination_action_gap = "var(--layout-home-platform-destination-action-gap)"
  static let cc_home_platform_destination_action_min_height = "var(--layout-home-platform-destination-action-min-height)"
  static let cc_home_platform_destination_action_padding_x = "var(--layout-home-platform-destination-action-padding-x)"
  static let cc_home_platform_destination_action_size = "var(--layout-home-platform-destination-action-size)"
  static let cc_home_platform_destination_action_tracking = "var(--layout-home-platform-destination-action-tracking)"
  static let cc_home_platform_destination_action_weight = "var(--layout-home-platform-destination-action-weight)"
  static let cc_home_platform_destination_card_gap = "var(--layout-home-platform-destination-card-gap)"
  static let cc_home_platform_destination_card_inner_gap = "var(--layout-home-platform-destination-card-inner-gap)"
  static let cc_home_platform_destination_card_padding_x = "var(--layout-home-platform-destination-card-padding-x)"
  static let cc_home_platform_destination_card_padding_y = "var(--layout-home-platform-destination-card-padding-y)"
  static let cc_home_platform_destination_copy_line_height = "var(--layout-home-platform-destination-copy-line-height)"
  static let cc_home_platform_destination_copy_size = "var(--layout-home-platform-destination-copy-size)"
  static let cc_home_platform_destination_field_gap = "var(--layout-home-platform-destination-field-gap)"
  static let cc_home_platform_destination_field_min_height = "var(--layout-home-platform-destination-field-min-height)"
  static let cc_home_platform_destination_field_padding_x = "var(--layout-home-platform-destination-field-padding-x)"
  static let cc_home_platform_destination_field_padding_y = "var(--layout-home-platform-destination-field-padding-y)"
  static let cc_home_platform_destination_gap = "var(--layout-home-platform-destination-gap)"
  static let cc_home_platform_destination_grid_count = "var(--layout-home-platform-destination-grid-count)"
  static let cc_home_platform_destination_grid_count_compact = "var(--layout-home-platform-destination-grid-count-compact)"
  static let cc_home_platform_destination_grid_gap = "var(--layout-home-platform-destination-grid-gap)"
  static let cc_home_platform_destination_label_size = "var(--layout-home-platform-destination-label-size)"
  static let cc_home_platform_destination_label_tracking = "var(--layout-home-platform-destination-label-tracking)"
  static let cc_home_platform_destination_label_weight = "var(--layout-home-platform-destination-label-weight)"
  static let cc_home_platform_destination_link_line_height = "var(--layout-home-platform-destination-link-line-height)"
  static let cc_home_platform_destination_link_size = "var(--layout-home-platform-destination-link-size)"
  static let cc_home_platform_destination_list_gap = "var(--layout-home-platform-destination-list-gap)"
  static let cc_home_platform_destination_state_line_height = "var(--layout-home-platform-destination-state-line-height)"
  static let cc_home_platform_destination_state_size = "var(--layout-home-platform-destination-state-size)"
  static let cc_home_platform_destination_title_line_height = "var(--layout-home-platform-destination-title-line-height)"
  static let cc_home_platform_destination_title_size = "var(--layout-home-platform-destination-title-size)"
  static let cc_home_platform_destination_title_weight = "var(--layout-home-platform-destination-title-weight)"
  static let cc_home_platform_destination_workspace_copy_line_height = "var(--layout-home-platform-destination-workspace-copy-line-height)"
  static let cc_home_platform_destination_workspace_copy_size = "var(--layout-home-platform-destination-workspace-copy-size)"
  static let cc_home_platform_embedded_section_gap = "var(--layout-home-platform-embedded-section-gap)"
  static let cc_home_platform_embedded_stack_gap = "var(--layout-home-platform-embedded-stack-gap)"
  static let cc_home_platform_gap = "var(--layout-home-platform-gap)"
  static let cc_home_platform_group_margin_top = "var(--layout-home-platform-group-margin-top)"
  static let cc_home_platform_label_margin_bottom = "var(--layout-home-platform-label-margin-bottom)"
  static let cc_home_platform_label_size = "var(--layout-home-platform-label-size)"
  static let cc_home_platform_label_tracking = "var(--layout-home-platform-label-tracking)"
  static let cc_home_platform_label_weight = "var(--layout-home-platform-label-weight)"
  static let cc_home_platform_mobile_content_header_padding_bottom = "var(--layout-home-platform-mobile-content-header-padding-bottom)"
  static let cc_home_platform_mobile_content_header_padding_top = "var(--layout-home-platform-mobile-content-header-padding-top)"
  static let cc_home_platform_mobile_content_inner_footer_gap = "var(--layout-home-platform-mobile-content-inner-footer-gap)"
  static let cc_home_platform_mobile_content_inner_padding_top = "var(--layout-home-platform-mobile-content-inner-padding-top)"
  static let cc_home_platform_mobile_inline_padding_fallback = "var(--layout-home-platform-mobile-inline-padding-fallback)"
  static let cc_home_platform_mobile_nav_gap = "var(--layout-home-platform-mobile-nav-gap)"
  static let cc_home_platform_mobile_nav_icon_size = "var(--layout-home-platform-mobile-nav-icon-size)"
  static let cc_home_platform_mobile_nav_item_min_height = "var(--layout-home-platform-mobile-nav-item-min-height)"
  static let cc_home_platform_mobile_nav_item_padding_x = "var(--layout-home-platform-mobile-nav-item-padding-x)"
  static let cc_home_platform_mobile_rail_inner_padding_y = "var(--layout-home-platform-mobile-rail-inner-padding-y)"
  static let cc_home_platform_nav_gap = "var(--layout-home-platform-nav-gap)"
  static let cc_home_platform_nav_icon_size = "var(--layout-home-platform-nav-icon-size)"
  static let cc_home_platform_nav_indicator_line_height = "var(--layout-home-platform-nav-indicator-line-height)"
  static let cc_home_platform_nav_indicator_min_size = "var(--layout-home-platform-nav-indicator-min-size)"
  static let cc_home_platform_nav_indicator_padding_x = "var(--layout-home-platform-nav-indicator-padding-x)"
  static let cc_home_platform_nav_indicator_size = "var(--layout-home-platform-nav-indicator-size)"
  static let cc_home_platform_nav_indicator_tracking = "var(--layout-home-platform-nav-indicator-tracking)"
  static let cc_home_platform_nav_indicator_weight = "var(--layout-home-platform-nav-indicator-weight)"
  static let cc_home_platform_nav_item_gap = "var(--layout-home-platform-nav-item-gap)"
  static let cc_home_platform_nav_item_min_height = "var(--layout-home-platform-nav-item-min-height)"
  static let cc_home_platform_nav_item_padding_x = "var(--layout-home-platform-nav-item-padding-x)"
  static let cc_home_platform_nav_item_padding_y = "var(--layout-home-platform-nav-item-padding-y)"
  static let cc_home_platform_nav_item_radius = "var(--layout-home-platform-nav-item-radius)"
  static let cc_home_platform_nav_text_line_height = "var(--layout-home-platform-nav-text-line-height)"
  static let cc_home_platform_nav_text_size = "var(--layout-home-platform-nav-text-size)"
  static let cc_home_platform_nav_text_tracking = "var(--layout-home-platform-nav-text-tracking)"
  static let cc_home_platform_nav_text_weight = "var(--layout-home-platform-nav-text-weight)"
  static let cc_home_platform_padding = "var(--layout-home-platform-padding)"
  static let cc_home_platform_radius = "var(--layout-home-platform-radius)"
  static let cc_home_platform_rail_compact_width = "var(--layout-home-platform-rail-compact-width)"
  static let cc_home_platform_rail_padding_bottom = "var(--layout-home-platform-rail-padding-bottom)"
  static let cc_home_platform_rail_padding_left = "var(--layout-home-platform-rail-padding-left)"
  static let cc_home_platform_rail_padding_right = "var(--layout-home-platform-rail-padding-right)"
  static let cc_home_platform_rail_padding_top = "var(--layout-home-platform-rail-padding-top)"
  static let cc_home_platform_rail_toggle_icon_size = "var(--layout-home-platform-rail-toggle-icon-size)"
  static let cc_home_platform_rail_toggle_margin_left = "var(--layout-home-platform-rail-toggle-margin-left)"
  static let cc_home_platform_rail_toggle_size = "var(--layout-home-platform-rail-toggle-size)"
  static let cc_home_platform_rail_width = "var(--layout-home-platform-rail-width)"
  static let cc_home_platform_saturate = "var(--layout-home-platform-saturate)"
  static let cc_home_platform_shadow = "var(--layout-home-platform-shadow)"
  static let cc_home_platform_state_action_min_height = "var(--layout-home-platform-state-action-min-height)"
  static let cc_home_platform_state_action_padding_x = "var(--layout-home-platform-state-action-padding-x)"
  static let cc_home_platform_state_action_size = "var(--layout-home-platform-state-action-size)"
  static let cc_home_platform_state_action_tracking = "var(--layout-home-platform-state-action-tracking)"
  static let cc_home_platform_state_action_weight = "var(--layout-home-platform-state-action-weight)"
  static let cc_home_platform_state_copy_line_height = "var(--layout-home-platform-state-copy-line-height)"
  static let cc_home_platform_state_copy_max_width = "var(--layout-home-platform-state-copy-max-width)"
  static let cc_home_platform_state_copy_size = "var(--layout-home-platform-state-copy-size)"
  static let cc_home_platform_state_title_line_height = "var(--layout-home-platform-state-title-line-height)"
  static let cc_home_platform_state_title_size = "var(--layout-home-platform-state-title-size)"
  static let cc_home_platform_state_title_tracking = "var(--layout-home-platform-state-title-tracking)"
  static let cc_home_platform_state_title_weight = "var(--layout-home-platform-state-title-weight)"
  static let cc_home_platform_subnav_line_height = "var(--layout-home-platform-subnav-line-height)"
  static let cc_home_platform_subnav_min_height = "var(--layout-home-platform-subnav-min-height)"
  static let cc_home_platform_subnav_padding_x = "var(--layout-home-platform-subnav-padding-x)"
  static let cc_home_platform_subnav_size = "var(--layout-home-platform-subnav-size)"
  static let cc_home_platform_subrail_header_gap = "var(--layout-home-platform-subrail-header-gap)"
  static let cc_home_platform_subrail_header_margin_bottom = "var(--layout-home-platform-subrail-header-margin-bottom)"
  static let cc_home_platform_subrail_padding_left = "var(--layout-home-platform-subrail-padding-left)"
  static let cc_home_platform_subrail_title_line_height = "var(--layout-home-platform-subrail-title-line-height)"
  static let cc_home_platform_subrail_title_size = "var(--layout-home-platform-subrail-title-size)"
  static let cc_home_platform_subrail_title_weight = "var(--layout-home-platform-subrail-title-weight)"
  static let cc_home_platform_subrail_width = "var(--layout-home-platform-subrail-width)"
  static let cc_home_platform_tablet_content_padding_left = "var(--layout-home-platform-tablet-content-padding-left)"
  static let cc_home_platform_tablet_rail_max = "var(--layout-home-platform-tablet-rail-max)"
  static let cc_home_platform_tablet_rail_min = "var(--layout-home-platform-tablet-rail-min)"
  static let cc_home_platform_tablet_rail_padding_right = "var(--layout-home-platform-tablet-rail-padding-right)"
  static let cc_home_platform_tablet_subrail_max = "var(--layout-home-platform-tablet-subrail-max)"
  static let cc_home_platform_tablet_subrail_min = "var(--layout-home-platform-tablet-subrail-min)"
  static let cc_home_platform_theme_caption_line_height = "var(--layout-home-platform-theme-caption-line-height)"
  static let cc_home_platform_theme_caption_opacity = "var(--layout-home-platform-theme-caption-opacity)"
  static let cc_home_platform_theme_caption_size = "var(--layout-home-platform-theme-caption-size)"
  static let cc_home_platform_theme_eyebrow_opacity = "var(--layout-home-platform-theme-eyebrow-opacity)"
  static let cc_home_platform_theme_eyebrow_size = "var(--layout-home-platform-theme-eyebrow-size)"
  static let cc_home_platform_theme_eyebrow_tracking = "var(--layout-home-platform-theme-eyebrow-tracking)"
  static let cc_home_platform_theme_eyebrow_weight = "var(--layout-home-platform-theme-eyebrow-weight)"
  static let cc_home_platform_theme_header_gap = "var(--layout-home-platform-theme-header-gap)"
  static let cc_home_platform_theme_mode_grid_count = "var(--layout-home-platform-theme-mode-grid-count)"
  static let cc_home_platform_theme_mode_grid_gap = "var(--layout-home-platform-theme-mode-grid-gap)"
  static let cc_home_platform_theme_mode_label_line_height = "var(--layout-home-platform-theme-mode-label-line-height)"
  static let cc_home_platform_theme_mode_label_size = "var(--layout-home-platform-theme-mode-label-size)"
  static let cc_home_platform_theme_mode_label_weight = "var(--layout-home-platform-theme-mode-label-weight)"
  static let cc_home_platform_theme_mode_option_gap = "var(--layout-home-platform-theme-mode-option-gap)"
  static let cc_home_platform_theme_mode_option_min_height = "var(--layout-home-platform-theme-mode-option-min-height)"
  static let cc_home_platform_theme_mode_option_padding_x = "var(--layout-home-platform-theme-mode-option-padding-x)"
  static let cc_home_platform_theme_mode_option_padding_y = "var(--layout-home-platform-theme-mode-option-padding-y)"
  static let cc_home_platform_theme_section_gap = "var(--layout-home-platform-theme-section-gap)"
  static let cc_home_platform_theme_section_header_gap = "var(--layout-home-platform-theme-section-header-gap)"
  static let cc_home_platform_theme_section_padding_top = "var(--layout-home-platform-theme-section-padding-top)"
  static let cc_home_platform_theme_shell_gap = "var(--layout-home-platform-theme-shell-gap)"
  static let cc_home_platform_theme_summary_line_height = "var(--layout-home-platform-theme-summary-line-height)"
  static let cc_home_platform_theme_summary_max_width = "var(--layout-home-platform-theme-summary-max-width)"
  static let cc_home_platform_theme_summary_opacity = "var(--layout-home-platform-theme-summary-opacity)"
  static let cc_home_platform_theme_summary_size = "var(--layout-home-platform-theme-summary-size)"
  static let cc_home_platform_theme_title_line_height = "var(--layout-home-platform-theme-title-line-height)"
  static let cc_home_platform_theme_title_size = "var(--layout-home-platform-theme-title-size)"
  static let cc_home_platform_theme_title_tracking = "var(--layout-home-platform-theme-title-tracking)"
  static let cc_home_platform_theme_title_weight = "var(--layout-home-platform-theme-title-weight)"
  static let cc_home_platform_theme_toggle_list_gap = "var(--layout-home-platform-theme-toggle-list-gap)"
  static let cc_home_platform_theme_toggle_row_gap = "var(--layout-home-platform-theme-toggle-row-gap)"
  static let cc_home_platform_theme_toggle_row_padding_y = "var(--layout-home-platform-theme-toggle-row-padding-y)"
  static let cc_home_platform_theme_token_field_gap = "var(--layout-home-platform-theme-token-field-gap)"
  static let cc_home_platform_theme_token_field_min_height = "var(--layout-home-platform-theme-token-field-min-height)"
  static let cc_home_platform_theme_token_field_padding_x = "var(--layout-home-platform-theme-token-field-padding-x)"
  static let cc_home_platform_theme_token_field_padding_y = "var(--layout-home-platform-theme-token-field-padding-y)"
  static let cc_home_platform_theme_token_grid_count = "var(--layout-home-platform-theme-token-grid-count)"
  static let cc_home_platform_theme_token_grid_disabled_opacity = "var(--layout-home-platform-theme-token-grid-disabled-opacity)"
  static let cc_home_platform_theme_token_grid_enabled_opacity = "var(--layout-home-platform-theme-token-grid-enabled-opacity)"
  static let cc_home_platform_theme_token_grid_gap = "var(--layout-home-platform-theme-token-grid-gap)"
  static let cc_home_platform_theme_token_label_line_height = "var(--layout-home-platform-theme-token-label-line-height)"
  static let cc_home_platform_theme_token_label_size = "var(--layout-home-platform-theme-token-label-size)"
  static let cc_home_platform_theme_token_label_weight = "var(--layout-home-platform-theme-token-label-weight)"
  static let cc_home_profile_control_panel_avatar_fallback_size = "var(--layout-home-profile-control-panel-avatar-fallback-size)"
  static let cc_home_profile_control_panel_avatar_fallback_tracking = "var(--layout-home-profile-control-panel-avatar-fallback-tracking)"
  static let cc_home_profile_control_panel_avatar_fallback_weight = "var(--layout-home-profile-control-panel-avatar-fallback-weight)"
  static let cc_home_profile_control_panel_avatar_size = "var(--layout-home-profile-control-panel-avatar-size)"
  static let cc_home_profile_control_panel_eyebrow_margin_bottom = "var(--layout-home-profile-control-panel-eyebrow-margin-bottom)"
  static let cc_home_profile_control_panel_header_gap = "var(--layout-home-profile-control-panel-header-gap)"
  static let cc_home_profile_control_panel_header_padding_bottom = "var(--layout-home-profile-control-panel-header-padding-bottom)"
  static let cc_home_profile_control_panel_identity_gap = "var(--layout-home-profile-control-panel-identity-gap)"
  static let cc_home_profile_control_panel_identity_padding_x = "var(--layout-home-profile-control-panel-identity-padding-x)"
  static let cc_home_profile_control_panel_identity_padding_y = "var(--layout-home-profile-control-panel-identity-padding-y)"
  static let cc_home_profile_control_panel_inner_gap = "var(--layout-home-profile-control-panel-inner-gap)"
  static let cc_home_profile_control_panel_inner_padding_bottom = "var(--layout-home-profile-control-panel-inner-padding-bottom)"
  static let cc_home_profile_control_panel_inner_padding_left = "var(--layout-home-profile-control-panel-inner-padding-left)"
  static let cc_home_profile_control_panel_inner_padding_right = "var(--layout-home-profile-control-panel-inner-padding-right)"
  static let cc_home_profile_control_panel_inner_padding_top = "var(--layout-home-profile-control-panel-inner-padding-top)"
  static let cc_home_profile_control_panel_inner_padding_top_mobile = "var(--layout-home-profile-control-panel-inner-padding-top-mobile)"
  static let cc_home_profile_control_panel_item_min_height = "var(--layout-home-profile-control-panel-item-min-height)"
  static let cc_home_profile_control_panel_item_padding_x = "var(--layout-home-profile-control-panel-item-padding-x)"
  static let cc_home_profile_control_panel_item_padding_y = "var(--layout-home-profile-control-panel-item-padding-y)"
  static let cc_home_profile_control_panel_item_size = "var(--layout-home-profile-control-panel-item-size)"
  static let cc_home_profile_control_panel_item_tracking = "var(--layout-home-profile-control-panel-item-tracking)"
  static let cc_home_profile_control_panel_item_weight = "var(--layout-home-profile-control-panel-item-weight)"
  static let cc_home_profile_control_panel_meta_line_height = "var(--layout-home-profile-control-panel-meta-line-height)"
  static let cc_home_profile_control_panel_meta_size = "var(--layout-home-profile-control-panel-meta-size)"
  static let cc_home_profile_control_panel_name_margin_bottom = "var(--layout-home-profile-control-panel-name-margin-bottom)"
  static let cc_home_profile_control_panel_name_size = "var(--layout-home-profile-control-panel-name-size)"
  static let cc_home_profile_control_panel_name_weight = "var(--layout-home-profile-control-panel-name-weight)"
  static let cc_home_profile_control_panel_plan_margin_bottom = "var(--layout-home-profile-control-panel-plan-margin-bottom)"
  static let cc_home_profile_control_panel_plan_size = "var(--layout-home-profile-control-panel-plan-size)"
  static let cc_home_profile_control_panel_plan_tracking = "var(--layout-home-profile-control-panel-plan-tracking)"
  static let cc_home_profile_control_panel_plan_weight = "var(--layout-home-profile-control-panel-plan-weight)"
  static let cc_home_profile_control_panel_route_link_line_height = "var(--layout-home-profile-control-panel-route-link-line-height)"
  static let cc_home_profile_control_panel_route_link_margin_top = "var(--layout-home-profile-control-panel-route-link-margin-top)"
  static let cc_home_profile_control_panel_route_link_size = "var(--layout-home-profile-control-panel-route-link-size)"
  static let cc_home_profile_control_panel_route_status_line_height = "var(--layout-home-profile-control-panel-route-status-line-height)"
  static let cc_home_profile_control_panel_route_status_size = "var(--layout-home-profile-control-panel-route-status-size)"
  static let cc_home_profile_control_panel_section_gap = "var(--layout-home-profile-control-panel-section-gap)"
  static let cc_home_profile_control_panel_stack_gap = "var(--layout-home-profile-control-panel-stack-gap)"
  static let cc_home_profile_control_panel_status_card_gap = "var(--layout-home-profile-control-panel-status-card-gap)"
  static let cc_home_profile_control_panel_status_card_padding_x = "var(--layout-home-profile-control-panel-status-card-padding-x)"
  static let cc_home_profile_control_panel_status_card_padding_y = "var(--layout-home-profile-control-panel-status-card-padding-y)"
  static let cc_home_profile_control_panel_status_grid_gap = "var(--layout-home-profile-control-panel-status-grid-gap)"
  static let cc_home_profile_control_panel_status_label_size = "var(--layout-home-profile-control-panel-status-label-size)"
  static let cc_home_profile_control_panel_status_label_tracking = "var(--layout-home-profile-control-panel-status-label-tracking)"
  static let cc_home_profile_control_panel_status_label_weight = "var(--layout-home-profile-control-panel-status-label-weight)"
  static let cc_home_profile_control_panel_status_value_line_height = "var(--layout-home-profile-control-panel-status-value-line-height)"
  static let cc_home_profile_control_panel_status_value_size = "var(--layout-home-profile-control-panel-status-value-size)"
  static let cc_home_profile_control_panel_status_value_weight = "var(--layout-home-profile-control-panel-status-value-weight)"
  static let cc_home_profile_control_panel_username_margin_bottom = "var(--layout-home-profile-control-panel-username-margin-bottom)"
  static let cc_home_profile_control_panel_username_size = "var(--layout-home-profile-control-panel-username-size)"
  static let cc_home_profile_control_panel_username_tracking = "var(--layout-home-profile-control-panel-username-tracking)"
  static let cc_home_profile_control_panel_username_weight = "var(--layout-home-profile-control-panel-username-weight)"
  static let cc_home_profile_control_panel_width = "var(--layout-home-profile-control-panel-width)"
  static let cc_home_search_body_gap = "var(--layout-home-search-body-gap)"
  static let cc_home_search_body_padding_x_fallback = "var(--layout-home-search-body-padding-x-fallback)"
  static let cc_home_search_body_padding_y = "var(--layout-home-search-body-padding-y)"
  static let cc_home_search_chip_min_height = "var(--layout-home-search-chip-min-height)"
  static let cc_home_search_chip_padding_x = "var(--layout-home-search-chip-padding-x)"
  static let cc_home_search_chip_size = "var(--layout-home-search-chip-size)"
  static let cc_home_search_chip_tracking = "var(--layout-home-search-chip-tracking)"
  static let cc_home_search_chip_weight = "var(--layout-home-search-chip-weight)"
  static let cc_home_search_dark_border = "var(--layout-home-search-dark-border)"
  static let cc_home_search_dialog_blur = "var(--layout-home-search-dialog-blur)"
  static let cc_home_search_dialog_saturate = "var(--layout-home-search-dialog-saturate)"
  static let cc_home_search_empty_gap = "var(--layout-home-search-empty-gap)"
  static let cc_home_search_empty_padding_top = "var(--layout-home-search-empty-padding-top)"
  static let cc_home_search_empty_text_line_height = "var(--layout-home-search-empty-text-line-height)"
  static let cc_home_search_empty_text_size = "var(--layout-home-search-empty-text-size)"
  static let cc_home_search_empty_title_size = "var(--layout-home-search-empty-title-size)"
  static let cc_home_search_empty_title_weight = "var(--layout-home-search-empty-title-weight)"
  static let cc_home_search_eyebrow_margin_bottom = "var(--layout-home-search-eyebrow-margin-bottom)"
  static let cc_home_search_eyebrow_size = "var(--layout-home-search-eyebrow-size)"
  static let cc_home_search_eyebrow_tracking = "var(--layout-home-search-eyebrow-tracking)"
  static let cc_home_search_eyebrow_weight = "var(--layout-home-search-eyebrow-weight)"
  static let cc_home_search_form_gap = "var(--layout-home-search-form-gap)"
  static let cc_home_search_header_gap = "var(--layout-home-search-header-gap)"
  static let cc_home_search_header_padding_bottom = "var(--layout-home-search-header-padding-bottom)"
  static let cc_home_search_header_padding_x_fallback = "var(--layout-home-search-header-padding-x-fallback)"
  static let cc_home_search_header_padding_y = "var(--layout-home-search-header-padding-y)"
  static let cc_home_search_hint_line_height = "var(--layout-home-search-hint-line-height)"
  static let cc_home_search_hint_size = "var(--layout-home-search-hint-size)"
  static let cc_home_search_icon_opacity = "var(--layout-home-search-icon-opacity)"
  static let cc_home_search_icon_size = "var(--layout-home-search-icon-size)"
  static let cc_home_search_input_line_height = "var(--layout-home-search-input-line-height)"
  static let cc_home_search_input_row_border = "var(--layout-home-search-input-row-border)"
  static let cc_home_search_input_row_border_focus = "var(--layout-home-search-input-row-border-focus)"
  static let cc_home_search_input_row_gap = "var(--layout-home-search-input-row-gap)"
  static let cc_home_search_input_row_line_height = "var(--layout-home-search-input-row-line-height)"
  static let cc_home_search_input_row_min_height = "var(--layout-home-search-input-row-min-height)"
  static let cc_home_search_input_row_opacity = "var(--layout-home-search-input-row-opacity)"
  static let cc_home_search_input_row_padding_x = "var(--layout-home-search-input-row-padding-x)"
  static let cc_home_search_input_row_padding_y = "var(--layout-home-search-input-row-padding-y)"
  static let cc_home_search_input_size = "var(--layout-home-search-input-size)"
  static let cc_home_search_input_tracking = "var(--layout-home-search-input-tracking)"
  static let cc_home_search_input_weight = "var(--layout-home-search-input-weight)"
  static let cc_home_search_light_border = "var(--layout-home-search-light-border)"
  static let cc_home_search_mobile_input_row_min_height = "var(--layout-home-search-mobile-input-row-min-height)"
  static let cc_home_search_mobile_input_row_padding_x = "var(--layout-home-search-mobile-input-row-padding-x)"
  static let cc_home_search_mobile_input_row_padding_y = "var(--layout-home-search-mobile-input-row-padding-y)"
  static let cc_home_search_mobile_input_size = "var(--layout-home-search-mobile-input-size)"
  static let cc_home_search_mobile_padding_x_fallback = "var(--layout-home-search-mobile-padding-x-fallback)"
  static let cc_home_search_mobile_title_size = "var(--layout-home-search-mobile-title-size)"
  static let cc_home_search_quick_actions_gap = "var(--layout-home-search-quick-actions-gap)"
  static let cc_home_search_result_action_line_height = "var(--layout-home-search-result-action-line-height)"
  static let cc_home_search_result_action_min_height = "var(--layout-home-search-result-action-min-height)"
  static let cc_home_search_result_action_min_width = "var(--layout-home-search-result-action-min-width)"
  static let cc_home_search_result_action_padding_x = "var(--layout-home-search-result-action-padding-x)"
  static let cc_home_search_result_action_size = "var(--layout-home-search-result-action-size)"
  static let cc_home_search_result_action_tracking = "var(--layout-home-search-result-action-tracking)"
  static let cc_home_search_result_action_weight = "var(--layout-home-search-result-action-weight)"
  static let cc_home_search_result_actions_gap = "var(--layout-home-search-result-actions-gap)"
  static let cc_home_search_result_badge_color = "var(--layout-home-search-result-badge-color)"
  static let cc_home_search_result_badge_gap = "var(--layout-home-search-result-badge-gap)"
  static let cc_home_search_result_badge_icon_size = "var(--layout-home-search-result-badge-icon-size)"
  static let cc_home_search_result_badge_min_height = "var(--layout-home-search-result-badge-min-height)"
  static let cc_home_search_result_badge_padding_x = "var(--layout-home-search-result-badge-padding-x)"
  static let cc_home_search_result_badge_size = "var(--layout-home-search-result-badge-size)"
  static let cc_home_search_result_badge_tracking = "var(--layout-home-search-result-badge-tracking)"
  static let cc_home_search_result_badge_weight = "var(--layout-home-search-result-badge-weight)"
  static let cc_home_search_result_body_line_height = "var(--layout-home-search-result-body-line-height)"
  static let cc_home_search_result_body_size = "var(--layout-home-search-result-body-size)"
  static let cc_home_search_result_card_gap = "var(--layout-home-search-result-card-gap)"
  static let cc_home_search_result_card_padding_y = "var(--layout-home-search-result-card-padding-y)"
  static let cc_home_search_result_list_gap = "var(--layout-home-search-result-list-gap)"
  static let cc_home_search_result_meta_column_gap = "var(--layout-home-search-result-meta-column-gap)"
  static let cc_home_search_result_meta_row_gap = "var(--layout-home-search-result-meta-row-gap)"
  static let cc_home_search_result_query_line_height = "var(--layout-home-search-result-query-line-height)"
  static let cc_home_search_result_query_size = "var(--layout-home-search-result-query-size)"
  static let cc_home_search_result_route_size = "var(--layout-home-search-result-route-size)"
  static let cc_home_search_result_route_tracking = "var(--layout-home-search-result-route-tracking)"
  static let cc_home_search_result_route_weight = "var(--layout-home-search-result-route-weight)"
  static let cc_home_search_result_tag_min_height = "var(--layout-home-search-result-tag-min-height)"
  static let cc_home_search_result_tag_padding_x = "var(--layout-home-search-result-tag-padding-x)"
  static let cc_home_search_result_tag_size = "var(--layout-home-search-result-tag-size)"
  static let cc_home_search_result_tag_tracking = "var(--layout-home-search-result-tag-tracking)"
  static let cc_home_search_result_tags_gap = "var(--layout-home-search-result-tags-gap)"
  static let cc_home_search_result_title_line_height = "var(--layout-home-search-result-title-line-height)"
  static let cc_home_search_result_title_row_gap = "var(--layout-home-search-result-title-row-gap)"
  static let cc_home_search_result_title_size = "var(--layout-home-search-result-title-size)"
  static let cc_home_search_result_title_tracking = "var(--layout-home-search-result-title-tracking)"
  static let cc_home_search_result_title_weight = "var(--layout-home-search-result-title-weight)"
  static let cc_home_search_shell_width = "var(--layout-home-search-shell-width)"
  static let cc_home_search_title_line_height = "var(--layout-home-search-title-line-height)"
  static let cc_home_search_title_size = "var(--layout-home-search-title-size)"
  static let cc_home_search_title_weight = "var(--layout-home-search-title-weight)"
  static let cc_home_search_voice_motion = "var(--layout-home-search-voice-motion)"
  static let cc_home_stage_bottom_margin_top = "var(--layout-home-stage-bottom-margin-top)"
  static let cc_home_stage_bottom_margin_top_mobile = "var(--layout-home-stage-bottom-margin-top-mobile)"
  static let cc_home_stage_copy_margin_top = "var(--layout-home-stage-copy-margin-top)"
  static let cc_home_stage_intro_max_height = "var(--layout-home-stage-intro-max-height)"
  static let cc_home_stage_intro_opacity_duration = "var(--layout-home-stage-intro-opacity-duration)"
  static let cc_home_stage_intro_reveal_duration = "var(--layout-home-stage-intro-reveal-duration)"
  static let cc_home_stage_intro_transform_duration = "var(--layout-home-stage-intro-transform-duration)"
  static let cc_home_stage_motion_active_color = "var(--layout-home-stage-motion-active-color)"
  static let cc_home_stage_motion_active_mic_scale = "var(--layout-home-stage-motion-active-mic-scale)"
  static let cc_home_stage_motion_core_active_height = "var(--layout-home-stage-motion-core-active-height)"
  static let cc_home_stage_motion_core_active_width = "var(--layout-home-stage-motion-core-active-width)"
  static let cc_home_stage_motion_core_color = "var(--layout-home-stage-motion-core-color)"
  static let cc_home_stage_motion_core_height = "var(--layout-home-stage-motion-core-height)"
  static let cc_home_stage_motion_core_idle_pulse_opacity = "var(--layout-home-stage-motion-core-idle-pulse-opacity)"
  static let cc_home_stage_motion_core_idle_ring_opacity = "var(--layout-home-stage-motion-core-idle-ring-opacity)"
  static let cc_home_stage_motion_core_idle_signal_opacity = "var(--layout-home-stage-motion-core-idle-signal-opacity)"
  static let cc_home_stage_motion_core_pulse_blur = "var(--layout-home-stage-motion-core-pulse-blur)"
  static let cc_home_stage_motion_core_pulse_size = "var(--layout-home-stage-motion-core-pulse-size)"
  static let cc_home_stage_motion_core_ring_border = "var(--layout-home-stage-motion-core-ring-border)"
  static let cc_home_stage_motion_core_signal_blur = "var(--layout-home-stage-motion-core-signal-blur)"
  static let cc_home_stage_motion_core_signal_size = "var(--layout-home-stage-motion-core-signal-size)"
  static let cc_home_stage_motion_core_width = "var(--layout-home-stage-motion-core-width)"
  static let cc_home_stage_motion_fast = "var(--layout-home-stage-motion-fast)"
  static let cc_home_stage_motion_field_blur = "var(--layout-home-stage-motion-field-blur)"
  static let cc_home_stage_motion_field_color = "var(--layout-home-stage-motion-field-color)"
  static let cc_home_stage_motion_field_color_clear = "var(--layout-home-stage-motion-field-color-clear)"
  static let cc_home_stage_motion_field_color_faint = "var(--layout-home-stage-motion-field-color-faint)"
  static let cc_home_stage_motion_field_color_soft = "var(--layout-home-stage-motion-field-color-soft)"
  static let cc_home_stage_motion_field_opacity_transition = "var(--layout-home-stage-motion-field-opacity-transition)"
  static let cc_home_stage_motion_field_size = "var(--layout-home-stage-motion-field-size)"
  static let cc_home_stage_motion_key_core_listen_mid_opacity = "var(--layout-home-stage-motion-key-core-listen-mid-opacity)"
  static let cc_home_stage_motion_key_core_listen_mid_scale = "var(--layout-home-stage-motion-key-core-listen-mid-scale)"
  static let cc_home_stage_motion_key_core_listen_start_opacity = "var(--layout-home-stage-motion-key-core-listen-start-opacity)"
  static let cc_home_stage_motion_key_core_listen_start_scale = "var(--layout-home-stage-motion-key-core-listen-start-scale)"
  static let cc_home_stage_motion_key_core_respond_mid_opacity = "var(--layout-home-stage-motion-key-core-respond-mid-opacity)"
  static let cc_home_stage_motion_key_core_respond_mid_scale = "var(--layout-home-stage-motion-key-core-respond-mid-scale)"
  static let cc_home_stage_motion_key_core_respond_start_opacity = "var(--layout-home-stage-motion-key-core-respond-start-opacity)"
  static let cc_home_stage_motion_key_core_respond_start_scale = "var(--layout-home-stage-motion-key-core-respond-start-scale)"
  static let cc_home_stage_motion_key_core_think_mid_opacity = "var(--layout-home-stage-motion-key-core-think-mid-opacity)"
  static let cc_home_stage_motion_key_core_think_mid_scale = "var(--layout-home-stage-motion-key-core-think-mid-scale)"
  static let cc_home_stage_motion_key_core_think_start_opacity = "var(--layout-home-stage-motion-key-core-think-start-opacity)"
  static let cc_home_stage_motion_key_core_think_start_scale = "var(--layout-home-stage-motion-key-core-think-start-scale)"
  static let cc_home_stage_motion_key_mic_listen_mid_opacity = "var(--layout-home-stage-motion-key-mic-listen-mid-opacity)"
  static let cc_home_stage_motion_key_mic_listen_mid_scale = "var(--layout-home-stage-motion-key-mic-listen-mid-scale)"
  static let cc_home_stage_motion_key_mic_listen_start_opacity = "var(--layout-home-stage-motion-key-mic-listen-start-opacity)"
  static let cc_home_stage_motion_key_mic_listen_start_scale = "var(--layout-home-stage-motion-key-mic-listen-start-scale)"
  static let cc_home_stage_motion_key_mic_respond_mid_opacity = "var(--layout-home-stage-motion-key-mic-respond-mid-opacity)"
  static let cc_home_stage_motion_key_mic_respond_mid_scale = "var(--layout-home-stage-motion-key-mic-respond-mid-scale)"
  static let cc_home_stage_motion_key_mic_respond_start_opacity = "var(--layout-home-stage-motion-key-mic-respond-start-opacity)"
  static let cc_home_stage_motion_key_mic_respond_start_scale = "var(--layout-home-stage-motion-key-mic-respond-start-scale)"
  static let cc_home_stage_motion_key_mic_think_mid_opacity = "var(--layout-home-stage-motion-key-mic-think-mid-opacity)"
  static let cc_home_stage_motion_key_mic_think_mid_scale = "var(--layout-home-stage-motion-key-mic-think-mid-scale)"
  static let cc_home_stage_motion_key_mic_think_start_opacity = "var(--layout-home-stage-motion-key-mic-think-start-opacity)"
  static let cc_home_stage_motion_key_mic_think_start_scale = "var(--layout-home-stage-motion-key-mic-think-start-scale)"
  static let cc_home_stage_motion_key_ring_listen_mid_opacity = "var(--layout-home-stage-motion-key-ring-listen-mid-opacity)"
  static let cc_home_stage_motion_key_ring_listen_mid_scale = "var(--layout-home-stage-motion-key-ring-listen-mid-scale)"
  static let cc_home_stage_motion_key_ring_listen_start_opacity = "var(--layout-home-stage-motion-key-ring-listen-start-opacity)"
  static let cc_home_stage_motion_key_ring_listen_start_scale = "var(--layout-home-stage-motion-key-ring-listen-start-scale)"
  static let cc_home_stage_motion_key_ring_respond_mid_opacity = "var(--layout-home-stage-motion-key-ring-respond-mid-opacity)"
  static let cc_home_stage_motion_key_ring_respond_mid_scale = "var(--layout-home-stage-motion-key-ring-respond-mid-scale)"
  static let cc_home_stage_motion_key_ring_respond_start_opacity = "var(--layout-home-stage-motion-key-ring-respond-start-opacity)"
  static let cc_home_stage_motion_key_ring_respond_start_scale = "var(--layout-home-stage-motion-key-ring-respond-start-scale)"
  static let cc_home_stage_motion_key_ring_think_mid_opacity = "var(--layout-home-stage-motion-key-ring-think-mid-opacity)"
  static let cc_home_stage_motion_key_ring_think_mid_scale = "var(--layout-home-stage-motion-key-ring-think-mid-scale)"
  static let cc_home_stage_motion_key_ring_think_start_opacity = "var(--layout-home-stage-motion-key-ring-think-start-opacity)"
  static let cc_home_stage_motion_key_ring_think_start_scale = "var(--layout-home-stage-motion-key-ring-think-start-scale)"
  static let cc_home_stage_motion_listening_core_duration = "var(--layout-home-stage-motion-listening-core-duration)"
  static let cc_home_stage_motion_listening_mic_duration = "var(--layout-home-stage-motion-listening-mic-duration)"
  static let cc_home_stage_motion_listening_ring_duration = "var(--layout-home-stage-motion-listening-ring-duration)"
  static let cc_home_stage_motion_mic_color = "var(--layout-home-stage-motion-mic-color)"
  static let cc_home_stage_motion_mic_field_blur = "var(--layout-home-stage-motion-mic-field-blur)"
  static let cc_home_stage_motion_mic_field_color = "var(--layout-home-stage-motion-mic-field-color)"
  static let cc_home_stage_motion_mic_field_color_clear = "var(--layout-home-stage-motion-mic-field-color-clear)"
  static let cc_home_stage_motion_mic_field_color_soft = "var(--layout-home-stage-motion-mic-field-color-soft)"
  static let cc_home_stage_motion_mic_hover_color = "var(--layout-home-stage-motion-mic-hover-color)"
  static let cc_home_stage_motion_mic_hover_scale = "var(--layout-home-stage-motion-mic-hover-scale)"
  static let cc_home_stage_motion_mic_icon_hover_scale = "var(--layout-home-stage-motion-mic-icon-hover-scale)"
  static let cc_home_stage_motion_mic_icon_opacity = "var(--layout-home-stage-motion-mic-icon-opacity)"
  static let cc_home_stage_motion_mic_icon_size = "var(--layout-home-stage-motion-mic-icon-size)"
  static let cc_home_stage_motion_mic_margin_bottom = "var(--layout-home-stage-motion-mic-margin-bottom)"
  static let cc_home_stage_motion_mic_opacity = "var(--layout-home-stage-motion-mic-opacity)"
  static let cc_home_stage_motion_mic_ring_border = "var(--layout-home-stage-motion-mic-ring-border)"
  static let cc_home_stage_motion_mic_ring_offset = "var(--layout-home-stage-motion-mic-ring-offset)"
  static let cc_home_stage_motion_mic_size = "var(--layout-home-stage-motion-mic-size)"
  static let cc_home_stage_motion_mobile_core_active_height = "var(--layout-home-stage-motion-mobile-core-active-height)"
  static let cc_home_stage_motion_mobile_core_active_width = "var(--layout-home-stage-motion-mobile-core-active-width)"
  static let cc_home_stage_motion_mobile_core_height = "var(--layout-home-stage-motion-mobile-core-height)"
  static let cc_home_stage_motion_mobile_core_width = "var(--layout-home-stage-motion-mobile-core-width)"
  static let cc_home_stage_motion_mobile_mic_icon_size = "var(--layout-home-stage-motion-mobile-mic-icon-size)"
  static let cc_home_stage_motion_mobile_mic_margin_bottom = "var(--layout-home-stage-motion-mobile-mic-margin-bottom)"
  static let cc_home_stage_motion_mobile_mic_size = "var(--layout-home-stage-motion-mobile-mic-size)"
  static let cc_home_stage_motion_mobile_vessel_active_size = "var(--layout-home-stage-motion-mobile-vessel-active-size)"
  static let cc_home_stage_motion_mobile_vessel_size = "var(--layout-home-stage-motion-mobile-vessel-size)"
  static let cc_home_stage_motion_mode_core_opacity = "var(--layout-home-stage-motion-mode-core-opacity)"
  static let cc_home_stage_motion_mode_ring_opacity = "var(--layout-home-stage-motion-mode-ring-opacity)"
  static let cc_home_stage_motion_responding_core_duration = "var(--layout-home-stage-motion-responding-core-duration)"
  static let cc_home_stage_motion_responding_mic_duration = "var(--layout-home-stage-motion-responding-mic-duration)"
  static let cc_home_stage_motion_responding_ring_duration = "var(--layout-home-stage-motion-responding-ring-duration)"
  static let cc_home_stage_motion_ring_border = "var(--layout-home-stage-motion-ring-border)"
  static let cc_home_stage_motion_ring_size = "var(--layout-home-stage-motion-ring-size)"
  static let cc_home_stage_motion_thinking_core_duration = "var(--layout-home-stage-motion-thinking-core-duration)"
  static let cc_home_stage_motion_thinking_mic_duration = "var(--layout-home-stage-motion-thinking-mic-duration)"
  static let cc_home_stage_motion_thinking_ring_duration = "var(--layout-home-stage-motion-thinking-ring-duration)"
  static let cc_home_stage_motion_transition = "var(--layout-home-stage-motion-transition)"
  static let cc_home_stage_motion_vessel_active_size = "var(--layout-home-stage-motion-vessel-active-size)"
  static let cc_home_stage_motion_vessel_blur = "var(--layout-home-stage-motion-vessel-blur)"
  static let cc_home_stage_motion_vessel_inner_bg = "var(--layout-home-stage-motion-vessel-inner-bg)"
  static let cc_home_stage_motion_vessel_ring_border = "var(--layout-home-stage-motion-vessel-ring-border)"
  static let cc_home_stage_motion_vessel_size = "var(--layout-home-stage-motion-vessel-size)"
  static let cc_home_video_overlay_blur = "var(--layout-home-video-overlay-blur)"
  static let cc_home_video_overlay_motion = "var(--layout-home-video-overlay-motion)"
  static let cc_home_video_overlay_reveal_opacity = "var(--layout-home-video-overlay-reveal-opacity)"
  static let cc_home_video_overlay_saturate = "var(--layout-home-video-overlay-saturate)"
  static let cc_interaction_panel_blur = "var(--home-interaction-panel-blur)"
  static let cc_interaction_panel_border = "var(--home-interaction-panel-border)"
  static let cc_interaction_panel_border_active = "var(--home-interaction-panel-border-active)"
  static let cc_interaction_panel_composer_gap = "var(--home-interaction-panel-composer-gap)"
  static let cc_interaction_panel_control_bg = "var(--home-interaction-panel-control-bg)"
  static let cc_interaction_panel_control_bg_hover = "var(--home-interaction-panel-control-bg-hover)"
  static let cc_interaction_panel_control_border = "var(--home-interaction-panel-control-border)"
  static let cc_interaction_panel_control_border_hover = "var(--home-interaction-panel-control-border-hover)"
  static let cc_interaction_panel_control_listening_bg = "var(--home-interaction-panel-control-listening-bg)"
  static let cc_interaction_panel_control_pulse_shadow = "var(--home-interaction-panel-control-pulse-shadow)"
  static let cc_interaction_panel_control_pulse_shadow_active = "var(--home-interaction-panel-control-pulse-shadow-active)"
  static let cc_interaction_panel_control_responding_bg = "var(--home-interaction-panel-control-responding-bg)"
  static let cc_interaction_panel_control_size = "var(--home-interaction-panel-control-size)"
  static let cc_interaction_panel_control_text = "var(--home-interaction-panel-control-text)"
  static let cc_interaction_panel_control_text_hover = "var(--home-interaction-panel-control-text-hover)"
  static let cc_interaction_panel_control_thinking_bg = "var(--home-interaction-panel-control-thinking-bg)"
  static let cc_interaction_panel_developer_action_bg = "var(--home-interaction-panel-developer-action-bg)"
  static let cc_interaction_panel_developer_action_bg_hover = "var(--home-interaction-panel-developer-action-bg-hover)"
  static let cc_interaction_panel_developer_action_border = "var(--home-interaction-panel-developer-action-border)"
  static let cc_interaction_panel_developer_action_border_hover = "var(--home-interaction-panel-developer-action-border-hover)"
  static let cc_interaction_panel_developer_action_line_height = "var(--home-interaction-panel-developer-action-line-height)"
  static let cc_interaction_panel_developer_action_min_height = "var(--home-interaction-panel-developer-action-min-height)"
  static let cc_interaction_panel_developer_action_padding_x = "var(--home-interaction-panel-developer-action-padding-x)"
  static let cc_interaction_panel_developer_action_radius = "var(--home-interaction-panel-developer-action-radius)"
  static let cc_interaction_panel_developer_action_size = "var(--home-interaction-panel-developer-action-size)"
  static let cc_interaction_panel_developer_action_text = "var(--home-interaction-panel-developer-action-text)"
  static let cc_interaction_panel_developer_action_text_hover = "var(--home-interaction-panel-developer-action-text-hover)"
  static let cc_interaction_panel_developer_action_tracking = "var(--home-interaction-panel-developer-action-tracking)"
  static let cc_interaction_panel_developer_action_weight = "var(--home-interaction-panel-developer-action-weight)"
  static let cc_interaction_panel_developer_actions_gap = "var(--home-interaction-panel-developer-actions-gap)"
  static let cc_interaction_panel_developer_control_bg = "var(--home-interaction-panel-developer-control-bg)"
  static let cc_interaction_panel_developer_control_border = "var(--home-interaction-panel-developer-control-border)"
  static let cc_interaction_panel_developer_control_border_hover = "var(--home-interaction-panel-developer-control-border-hover)"
  static let cc_interaction_panel_developer_control_height = "var(--home-interaction-panel-developer-control-height)"
  static let cc_interaction_panel_developer_control_line_height = "var(--home-interaction-panel-developer-control-line-height)"
  static let cc_interaction_panel_developer_control_min_width = "var(--home-interaction-panel-developer-control-min-width)"
  static let cc_interaction_panel_developer_control_muted = "var(--home-interaction-panel-developer-control-muted)"
  static let cc_interaction_panel_developer_control_padding_x = "var(--home-interaction-panel-developer-control-padding-x)"
  static let cc_interaction_panel_developer_control_radius = "var(--home-interaction-panel-developer-control-radius)"
  static let cc_interaction_panel_developer_control_size = "var(--home-interaction-panel-developer-control-size)"
  static let cc_interaction_panel_developer_control_text = "var(--home-interaction-panel-developer-control-text)"
  static let cc_interaction_panel_developer_control_weight = "var(--home-interaction-panel-developer-control-weight)"
  static let cc_interaction_panel_developer_status_line_height = "var(--home-interaction-panel-developer-status-line-height)"
  static let cc_interaction_panel_developer_status_size = "var(--home-interaction-panel-developer-status-size)"
  static let cc_interaction_panel_disabled_opacity = "var(--home-interaction-panel-disabled-opacity)"
  static let cc_interaction_panel_dot_width = "var(--home-interaction-panel-dot-width)"
  static let cc_interaction_panel_file_chip_bg = "var(--home-interaction-panel-file-chip-bg)"
  static let cc_interaction_panel_file_chip_border = "var(--home-interaction-panel-file-chip-border)"
  static let cc_interaction_panel_file_chip_min_height = "var(--home-interaction-panel-file-chip-min-height)"
  static let cc_interaction_panel_file_chip_padding_x = "var(--home-interaction-panel-file-chip-padding-x)"
  static let cc_interaction_panel_file_chip_size = "var(--home-interaction-panel-file-chip-size)"
  static let cc_interaction_panel_file_chip_text = "var(--home-interaction-panel-file-chip-text)"
  static let cc_interaction_panel_file_chip_tracking = "var(--home-interaction-panel-file-chip-tracking)"
  static let cc_interaction_panel_file_chip_weight = "var(--home-interaction-panel-file-chip-weight)"
  static let cc_interaction_panel_form_gap = "var(--home-interaction-panel-form-gap)"
  static let cc_interaction_panel_gap = "var(--home-interaction-panel-gap)"
  static let cc_interaction_panel_icon_opacity = "var(--home-interaction-panel-icon-opacity)"
  static let cc_interaction_panel_icon_opacity_hover = "var(--home-interaction-panel-icon-opacity-hover)"
  static let cc_interaction_panel_icon_size = "var(--home-interaction-panel-icon-size)"
  static let cc_interaction_panel_input_border = "var(--home-interaction-panel-input-border)"
  static let cc_interaction_panel_input_border_focus = "var(--home-interaction-panel-input-border-focus)"
  static let cc_interaction_panel_input_line_height = "var(--home-interaction-panel-input-line-height)"
  static let cc_interaction_panel_input_max_height = "var(--home-interaction-panel-input-max-height)"
  static let cc_interaction_panel_input_min_height = "var(--home-interaction-panel-input-min-height)"
  static let cc_interaction_panel_input_padding_x = "var(--home-interaction-panel-input-padding-x)"
  static let cc_interaction_panel_input_padding_y = "var(--home-interaction-panel-input-padding-y)"
  static let cc_interaction_panel_input_placeholder = "var(--home-interaction-panel-input-placeholder)"
  static let cc_interaction_panel_input_radius = "var(--home-interaction-panel-input-radius)"
  static let cc_interaction_panel_input_surface = "var(--home-interaction-panel-input-surface)"
  static let cc_interaction_panel_input_text = "var(--home-interaction-panel-input-text)"
  static let cc_interaction_panel_model_bg = "var(--home-interaction-panel-model-bg)"
  static let cc_interaction_panel_model_border = "var(--home-interaction-panel-model-border)"
  static let cc_interaction_panel_model_chevron = "var(--home-interaction-panel-model-chevron)"
  static let cc_interaction_panel_model_gap = "var(--home-interaction-panel-model-gap)"
  static let cc_interaction_panel_model_height = "var(--home-interaction-panel-model-height)"
  static let cc_interaction_panel_model_name_line_height = "var(--home-interaction-panel-model-name-line-height)"
  static let cc_interaction_panel_model_name_size = "var(--home-interaction-panel-model-name-size)"
  static let cc_interaction_panel_model_name_tracking = "var(--home-interaction-panel-model-name-tracking)"
  static let cc_interaction_panel_model_name_weight = "var(--home-interaction-panel-model-name-weight)"
  static let cc_interaction_panel_model_padding_x = "var(--home-interaction-panel-model-padding-x)"
  static let cc_interaction_panel_model_padding_x_mobile = "var(--home-interaction-panel-model-padding-x-mobile)"
  static let cc_interaction_panel_model_radius = "var(--home-interaction-panel-model-radius)"
  static let cc_interaction_panel_model_text = "var(--home-interaction-panel-model-text)"
  static let cc_interaction_panel_motion_fast = "var(--home-interaction-panel-motion-fast)"
  static let cc_interaction_panel_padding = "var(--home-interaction-panel-padding)"
  static let cc_interaction_panel_padding_mobile = "var(--home-interaction-panel-padding-mobile)"
  static let cc_interaction_panel_radius = "var(--home-interaction-panel-radius)"
  static let cc_interaction_panel_saturate = "var(--home-interaction-panel-saturate)"
  static let cc_interaction_panel_shadow = "var(--home-interaction-panel-shadow)"
  static let cc_interaction_panel_submit_bg = "var(--home-interaction-panel-submit-bg)"
  static let cc_interaction_panel_submit_border = "var(--home-interaction-panel-submit-border)"
  static let cc_interaction_panel_submit_gap = "var(--home-interaction-panel-submit-gap)"
  static let cc_interaction_panel_submit_line_height = "var(--home-interaction-panel-submit-line-height)"
  static let cc_interaction_panel_submit_size = "var(--home-interaction-panel-submit-size)"
  static let cc_interaction_panel_submit_text = "var(--home-interaction-panel-submit-text)"
  static let cc_interaction_panel_submit_weight = "var(--home-interaction-panel-submit-weight)"
  static let cc_interaction_panel_surface = "var(--home-interaction-panel-surface)"
  static let cc_interaction_panel_thinking_animation_duration = "var(--home-interaction-panel-thinking-animation-duration)"
  static let cc_interaction_panel_thinking_animation_steps = "var(--home-interaction-panel-thinking-animation-steps)"
  static let cc_interaction_panel_voice_animation_duration = "var(--home-interaction-panel-voice-animation-duration)"
  static let cc_interaction_panel_voice_opacity_active = "var(--home-interaction-panel-voice-opacity-active)"
  static let cc_interaction_panel_voice_opacity_inactive = "var(--home-interaction-panel-voice-opacity-inactive)"
  static let cc_interaction_panel_width = "var(--home-interaction-panel-width)"
  static let cc_interaction_panel_width_mobile = "var(--home-interaction-panel-width-mobile)"
  static let cc_layout_announcement_mobile_line_height = "var(--layout-home-announcement-mobile-line-height)"
  static let cc_layout_announcement_mobile_size = "var(--layout-home-announcement-mobile-size)"
  static let cc_layout_announcement_secondary_mobile_size = "var(--layout-home-announcement-secondary-mobile-size)"
  static let cc_layout_announcement_secondary_mobile_tracking = "var(--layout-home-announcement-secondary-mobile-tracking)"
  static let cc_layout_announcement_secondary_size = "var(--layout-home-announcement-secondary-size)"
  static let cc_layout_announcement_secondary_tracking = "var(--layout-home-announcement-secondary-tracking)"
  static let cc_layout_announcement_secondary_weight = "var(--layout-home-announcement-secondary-weight)"
  static let cc_layout_announcement_size = "var(--layout-home-announcement-size)"
  static let cc_layout_announcement_tracking = "var(--layout-home-announcement-tracking)"
  static let cc_layout_announcement_weight = "var(--layout-home-announcement-weight)"
  static let cc_layout_enter_border_width = "var(--layout-home-enter-border-width)"
  static let cc_layout_enter_breathe_duration = "var(--layout-home-enter-breathe-duration)"
  static let cc_layout_enter_breathe_y = "var(--layout-home-enter-breathe-y)"
  static let cc_layout_enter_height = "var(--layout-home-enter-height)"
  static let cc_layout_enter_hover_opacity = "var(--layout-home-enter-hover-opacity)"
  static let cc_layout_enter_hover_y = "var(--layout-home-enter-hover-y)"
  static let cc_layout_enter_icon_size = "var(--layout-home-enter-icon-size)"
  static let cc_layout_enter_mobile_height = "var(--layout-home-enter-mobile-height)"
  static let cc_layout_enter_mobile_padding_x = "var(--layout-home-enter-mobile-padding-x)"
  static let cc_layout_enter_mobile_padding_y = "var(--layout-home-enter-mobile-padding-y)"
  static let cc_layout_enter_mobile_size = "var(--layout-home-enter-mobile-size)"
  static let cc_layout_enter_mobile_width = "var(--layout-home-enter-mobile-width)"
  static let cc_layout_enter_padding_x = "var(--layout-home-enter-padding-x)"
  static let cc_layout_enter_padding_y = "var(--layout-home-enter-padding-y)"
  static let cc_layout_enter_size = "var(--layout-home-enter-size)"
  static let cc_layout_enter_tracking = "var(--layout-home-enter-tracking)"
  static let cc_layout_enter_weight = "var(--layout-home-enter-weight)"
  static let cc_layout_enter_width = "var(--layout-home-enter-width)"
  static let cc_layout_intro_content_opacity_duration = "var(--layout-home-intro-content-opacity-duration)"
  static let cc_layout_intro_content_transform_duration = "var(--layout-home-intro-content-transform-duration)"
  static let cc_layout_intro_logo_scale_fade = "var(--layout-home-intro-logo-scale-fade)"
  static let cc_layout_intro_logo_scale_settle = "var(--layout-home-intro-logo-scale-settle)"
  static let cc_layout_intro_logo_scale_start = "var(--layout-home-intro-logo-scale-start)"
  static let cc_layout_intro_reveal_y = "var(--layout-home-intro-reveal-y)"
  static let cc_layout_logo_docked_margin_bottom = "var(--layout-home-logo-docked-margin-bottom)"
  static let cc_layout_logo_margin_bottom = "var(--layout-home-logo-margin-bottom)"
  static let cc_layout_logo_transition_opacity = "var(--layout-home-logo-transition-opacity)"
  static let cc_layout_logo_transition_transform = "var(--layout-home-logo-transition-transform)"
  static let cc_layout_logo_width = "var(--layout-home-logo-width)"
  static let cc_layout_logo_width_mobile = "var(--layout-home-logo-width-mobile)"
  static let cc_layout_stage_copy_margin_top = "var(--layout-home-stage-copy-margin-top)"
  static let cc_layout_stage_intro_max_height = "var(--layout-home-stage-intro-max-height)"
  static let cc_layout_stage_intro_opacity_duration = "var(--layout-home-stage-intro-opacity-duration)"
  static let cc_layout_stage_intro_reveal_duration = "var(--layout-home-stage-intro-reveal-duration)"
  static let cc_layout_stage_intro_transform_duration = "var(--layout-home-stage-intro-transform-duration)"
  static let cc_layout_video_overlay_blur = "var(--layout-home-video-overlay-blur)"
  static let cc_layout_video_overlay_motion = "var(--layout-home-video-overlay-motion)"
  static let cc_layout_video_overlay_reveal_opacity = "var(--layout-home-video-overlay-reveal-opacity)"
  static let cc_layout_video_overlay_saturate = "var(--layout-home-video-overlay-saturate)"
  static let cc_matte_blur = "var(--home-matte-blur)"
  static let cc_matte_opacity_bottom = "var(--home-matte-opacity-bottom)"
  static let cc_matte_opacity_bottom_clear = "var(--home-matte-opacity-bottom-clear)"
  static let cc_matte_opacity_bottom_light = "var(--home-matte-opacity-bottom-light)"
  static let cc_matte_opacity_bottom_soft = "var(--home-matte-opacity-bottom-soft)"
  static let cc_matte_opacity_bottom_solid_softedge = "var(--home-matte-opacity-bottom-solid-softedge)"
  static let cc_matte_opacity_low = "var(--home-matte-opacity-low)"
  static let cc_matte_opacity_low_clear = "var(--home-matte-opacity-low-clear)"
  static let cc_matte_opacity_low_light = "var(--home-matte-opacity-low-light)"
  static let cc_matte_opacity_low_soft = "var(--home-matte-opacity-low-soft)"
  static let cc_matte_opacity_low_solid_softedge = "var(--home-matte-opacity-low-solid-softedge)"
  static let cc_matte_opacity_mid = "var(--home-matte-opacity-mid)"
  static let cc_matte_opacity_mid_clear = "var(--home-matte-opacity-mid-clear)"
  static let cc_matte_opacity_mid_light = "var(--home-matte-opacity-mid-light)"
  static let cc_matte_opacity_mid_soft = "var(--home-matte-opacity-mid-soft)"
  static let cc_matte_opacity_mid_solid_softedge = "var(--home-matte-opacity-mid-solid-softedge)"
  static let cc_matte_opacity_top = "var(--home-matte-opacity-top)"
  static let cc_matte_opacity_top_clear = "var(--home-matte-opacity-top-clear)"
  static let cc_matte_opacity_top_light = "var(--home-matte-opacity-top-light)"
  static let cc_matte_opacity_top_soft = "var(--home-matte-opacity-top-soft)"
  static let cc_matte_opacity_top_solid_softedge = "var(--home-matte-opacity-top-solid-softedge)"
  static let cc_matte_rgb_dark = "var(--home-matte-rgb-dark)"
  static let cc_matte_saturate = "var(--home-matte-saturate)"
  static let cc_matte_transition_duration = "var(--home-matte-transition-duration)"
  static let cc_matte_transition_ease = "var(--home-matte-transition-ease)"
  static let cc_panel_border = "var(--glass-surface-border)"
  static let cc_panel_card_border = "var(--glass-surface-border)"
  static let cc_panel_card_radius = "var(--radius-lg)"
  static let cc_panel_card_surface = "var(--glass-surface-bg)"
  static let cc_panel_radius = "var(--radius-lg)"
  static let cc_panel_shadow = "var(--glass-surface-shadow)"
  static let cc_panel_surface = "var(--glass-surface-bg)"
  static let cc_platform_shell_blur = "var(--home-platform-shell-blur)"
  static let cc_platform_shell_border = "var(--home-platform-shell-border)"
  static let cc_platform_shell_chrome_blur = "var(--home-platform-shell-chrome-blur)"
  static let cc_platform_shell_chrome_min_height = "var(--home-platform-shell-chrome-min-height)"
  static let cc_platform_shell_chrome_saturate = "var(--home-platform-shell-chrome-saturate)"
  static let cc_platform_shell_chrome_toggle_color = "var(--home-platform-shell-chrome-toggle-color)"
  static let cc_platform_shell_chrome_toggle_hover_color = "var(--home-platform-shell-chrome-toggle-hover-color)"
  static let cc_platform_shell_content_copy_line_height = "var(--home-platform-shell-content-copy-line-height)"
  static let cc_platform_shell_content_copy_max_width = "var(--home-platform-shell-content-copy-max-width)"
  static let cc_platform_shell_content_copy_size = "var(--home-platform-shell-content-copy-size)"
  static let cc_platform_shell_content_copy_tracking = "var(--home-platform-shell-content-copy-tracking)"
  static let cc_platform_shell_content_copy_weight = "var(--home-platform-shell-content-copy-weight)"
  static let cc_platform_shell_content_header_gap = "var(--home-platform-shell-content-header-gap)"
  static let cc_platform_shell_content_header_padding_bottom = "var(--home-platform-shell-content-header-padding-bottom)"
  static let cc_platform_shell_content_header_padding_left = "var(--home-platform-shell-content-header-padding-left)"
  static let cc_platform_shell_content_header_padding_right = "var(--home-platform-shell-content-header-padding-right)"
  static let cc_platform_shell_content_header_padding_top = "var(--home-platform-shell-content-header-padding-top)"
  static let cc_platform_shell_content_inner_footer_gap = "var(--home-platform-shell-content-inner-footer-gap)"
  static let cc_platform_shell_content_inner_padding_left = "var(--home-platform-shell-content-inner-padding-left)"
  static let cc_platform_shell_content_inner_padding_top = "var(--home-platform-shell-content-inner-padding-top)"
  static let cc_platform_shell_content_stack_gap = "var(--home-platform-shell-content-stack-gap)"
  static let cc_platform_shell_content_title_color = "var(--home-platform-shell-content-title-color)"
  static let cc_platform_shell_content_title_line_height = "var(--home-platform-shell-content-title-line-height)"
  static let cc_platform_shell_content_title_size = "var(--home-platform-shell-content-title-size)"
  static let cc_platform_shell_content_title_tracking = "var(--home-platform-shell-content-title-tracking)"
  static let cc_platform_shell_content_title_weight = "var(--home-platform-shell-content-title-weight)"
  static let cc_platform_shell_destination_gap = "var(--home-platform-shell-destination-gap)"
  static let cc_platform_shell_embedded_section_gap = "var(--home-platform-shell-embedded-section-gap)"
  static let cc_platform_shell_embedded_stack_gap = "var(--home-platform-shell-embedded-stack-gap)"
  static let cc_platform_shell_gap = "var(--home-platform-shell-gap)"
  static let cc_platform_shell_group_separator = "var(--home-platform-shell-group-separator)"
  static let cc_platform_shell_group_separator_gap = "var(--home-platform-shell-group-separator-gap)"
  static let cc_platform_shell_group_separator_offset = "var(--home-platform-shell-group-separator-offset)"
  static let cc_platform_shell_inline_padding = "var(--home-platform-shell-inline-padding)"
  static let cc_platform_shell_inner_surface = "var(--home-platform-shell-inner-surface)"
  static let cc_platform_shell_label_margin_bottom = "var(--home-platform-shell-label-margin-bottom)"
  static let cc_platform_shell_label_size = "var(--home-platform-shell-label-size)"
  static let cc_platform_shell_label_tracking = "var(--home-platform-shell-label-tracking)"
  static let cc_platform_shell_label_weight = "var(--home-platform-shell-label-weight)"
  static let cc_platform_shell_mobile_content_header_padding_bottom = "var(--home-platform-shell-mobile-content-header-padding-bottom)"
  static let cc_platform_shell_mobile_content_header_padding_top = "var(--home-platform-shell-mobile-content-header-padding-top)"
  static let cc_platform_shell_mobile_content_inner_footer_gap = "var(--home-platform-shell-mobile-content-inner-footer-gap)"
  static let cc_platform_shell_mobile_content_inner_padding_top = "var(--home-platform-shell-mobile-content-inner-padding-top)"
  static let cc_platform_shell_mobile_inline_padding_fallback = "var(--home-platform-shell-mobile-inline-padding-fallback)"
  static let cc_platform_shell_mobile_nav_gap = "var(--home-platform-shell-mobile-nav-gap)"
  static let cc_platform_shell_mobile_nav_icon_size = "var(--home-platform-shell-mobile-nav-icon-size)"
  static let cc_platform_shell_mobile_nav_item_min_height = "var(--home-platform-shell-mobile-nav-item-min-height)"
  static let cc_platform_shell_mobile_nav_item_padding_x = "var(--home-platform-shell-mobile-nav-item-padding-x)"
  static let cc_platform_shell_mobile_rail_inner_padding_y = "var(--home-platform-shell-mobile-rail-inner-padding-y)"
  static let cc_platform_shell_muted_copy_color = "var(--home-platform-shell-muted-copy-color)"
  static let cc_platform_shell_muted_label_color = "var(--home-platform-shell-muted-label-color)"
  static let cc_platform_shell_nav_color = "var(--home-platform-shell-nav-color)"
  static let cc_platform_shell_nav_gap = "var(--home-platform-shell-nav-gap)"
  static let cc_platform_shell_nav_hover_color = "var(--home-platform-shell-nav-hover-color)"
  static let cc_platform_shell_nav_hover_opacity = "var(--home-platform-shell-nav-hover-opacity)"
  static let cc_platform_shell_nav_icon_size = "var(--home-platform-shell-nav-icon-size)"
  static let cc_platform_shell_nav_indicator_bg = "var(--home-platform-shell-nav-indicator-bg)"
  static let cc_platform_shell_nav_indicator_color = "var(--home-platform-shell-nav-indicator-color)"
  static let cc_platform_shell_nav_indicator_high_bg = "var(--home-platform-shell-nav-indicator-high-bg)"
  static let cc_platform_shell_nav_indicator_high_color = "var(--home-platform-shell-nav-indicator-high-color)"
  static let cc_platform_shell_nav_indicator_line_height = "var(--home-platform-shell-nav-indicator-line-height)"
  static let cc_platform_shell_nav_indicator_min_size = "var(--home-platform-shell-nav-indicator-min-size)"
  static let cc_platform_shell_nav_indicator_new_bg = "var(--home-platform-shell-nav-indicator-new-bg)"
  static let cc_platform_shell_nav_indicator_new_color = "var(--home-platform-shell-nav-indicator-new-color)"
  static let cc_platform_shell_nav_indicator_padding_x = "var(--home-platform-shell-nav-indicator-padding-x)"
  static let cc_platform_shell_nav_indicator_size = "var(--home-platform-shell-nav-indicator-size)"
  static let cc_platform_shell_nav_indicator_tracking = "var(--home-platform-shell-nav-indicator-tracking)"
  static let cc_platform_shell_nav_indicator_weight = "var(--home-platform-shell-nav-indicator-weight)"
  static let cc_platform_shell_nav_item_bg = "var(--home-platform-shell-nav-item-bg)"
  static let cc_platform_shell_nav_item_bg_active = "var(--home-platform-shell-nav-item-bg-active)"
  static let cc_platform_shell_nav_item_bg_hover = "var(--home-platform-shell-nav-item-bg-hover)"
  static let cc_platform_shell_nav_item_border_active = "var(--home-platform-shell-nav-item-border-active)"
  static let cc_platform_shell_nav_item_border_hover = "var(--home-platform-shell-nav-item-border-hover)"
  static let cc_platform_shell_nav_item_color_hover = "var(--home-platform-shell-nav-item-color-hover)"
  static let cc_platform_shell_nav_item_gap = "var(--home-platform-shell-nav-item-gap)"
  static let cc_platform_shell_nav_item_min_height = "var(--home-platform-shell-nav-item-min-height)"
  static let cc_platform_shell_nav_item_padding = "var(--home-platform-shell-nav-item-padding)"
  static let cc_platform_shell_nav_item_padding_x = "var(--home-platform-shell-nav-item-padding-x)"
  static let cc_platform_shell_nav_item_padding_y = "var(--home-platform-shell-nav-item-padding-y)"
  static let cc_platform_shell_nav_item_radius = "var(--home-platform-shell-nav-item-radius)"
  static let cc_platform_shell_nav_opacity = "var(--home-platform-shell-nav-opacity)"
  static let cc_platform_shell_nav_text_line_height = "var(--home-platform-shell-nav-text-line-height)"
  static let cc_platform_shell_nav_text_size = "var(--home-platform-shell-nav-text-size)"
  static let cc_platform_shell_nav_text_tracking = "var(--home-platform-shell-nav-text-tracking)"
  static let cc_platform_shell_nav_text_weight = "var(--home-platform-shell-nav-text-weight)"
  static let cc_platform_shell_padding = "var(--home-platform-shell-padding)"
  static let cc_platform_shell_radius = "var(--home-platform-shell-radius)"
  static let cc_platform_shell_rail_compact_width = "var(--home-platform-shell-rail-compact-width)"
  static let cc_platform_shell_rail_padding_bottom = "var(--home-platform-shell-rail-padding-bottom)"
  static let cc_platform_shell_rail_padding_left = "var(--home-platform-shell-rail-padding-left)"
  static let cc_platform_shell_rail_padding_right = "var(--home-platform-shell-rail-padding-right)"
  static let cc_platform_shell_rail_padding_top = "var(--home-platform-shell-rail-padding-top)"
  static let cc_platform_shell_rail_toggle_icon_size = "var(--home-platform-shell-rail-toggle-icon-size)"
  static let cc_platform_shell_rail_toggle_margin_left = "var(--home-platform-shell-rail-toggle-margin-left)"
  static let cc_platform_shell_rail_toggle_size = "var(--home-platform-shell-rail-toggle-size)"
  static let cc_platform_shell_rail_width = "var(--home-platform-shell-rail-width)"
  static let cc_platform_shell_rail_width_token = "var(--home-platform-shell-rail-width-token)"
  static let cc_platform_shell_saturate = "var(--home-platform-shell-saturate)"
  static let cc_platform_shell_shadow = "var(--home-platform-shell-shadow)"
  static let cc_platform_shell_state_action_min_height = "var(--home-platform-shell-state-action-min-height)"
  static let cc_platform_shell_state_action_padding_x = "var(--home-platform-shell-state-action-padding-x)"
  static let cc_platform_shell_state_action_size = "var(--home-platform-shell-state-action-size)"
  static let cc_platform_shell_state_action_tracking = "var(--home-platform-shell-state-action-tracking)"
  static let cc_platform_shell_state_action_weight = "var(--home-platform-shell-state-action-weight)"
  static let cc_platform_shell_state_copy_line_height = "var(--home-platform-shell-state-copy-line-height)"
  static let cc_platform_shell_state_copy_max_width = "var(--home-platform-shell-state-copy-max-width)"
  static let cc_platform_shell_state_copy_size = "var(--home-platform-shell-state-copy-size)"
  static let cc_platform_shell_state_title_line_height = "var(--home-platform-shell-state-title-line-height)"
  static let cc_platform_shell_state_title_size = "var(--home-platform-shell-state-title-size)"
  static let cc_platform_shell_state_title_tracking = "var(--home-platform-shell-state-title-tracking)"
  static let cc_platform_shell_state_title_weight = "var(--home-platform-shell-state-title-weight)"
  static let cc_platform_shell_subnav_line_height = "var(--home-platform-shell-subnav-line-height)"
  static let cc_platform_shell_subnav_min_height = "var(--home-platform-shell-subnav-min-height)"
  static let cc_platform_shell_subnav_padding_x = "var(--home-platform-shell-subnav-padding-x)"
  static let cc_platform_shell_subnav_size = "var(--home-platform-shell-subnav-size)"
  static let cc_platform_shell_subrail_header_gap = "var(--home-platform-shell-subrail-header-gap)"
  static let cc_platform_shell_subrail_header_margin_bottom = "var(--home-platform-shell-subrail-header-margin-bottom)"
  static let cc_platform_shell_subrail_padding_left = "var(--home-platform-shell-subrail-padding-left)"
  static let cc_platform_shell_subrail_title_line_height = "var(--home-platform-shell-subrail-title-line-height)"
  static let cc_platform_shell_subrail_title_size = "var(--home-platform-shell-subrail-title-size)"
  static let cc_platform_shell_subrail_title_weight = "var(--home-platform-shell-subrail-title-weight)"
  static let cc_platform_shell_subrail_width = "var(--home-platform-shell-subrail-width)"
  static let cc_platform_shell_subrail_width_token = "var(--home-platform-shell-subrail-width-token)"
  static let cc_platform_shell_surface = "var(--home-platform-shell-surface)"
  static let cc_platform_shell_tablet_content_padding_left = "var(--home-platform-shell-tablet-content-padding-left)"
  static let cc_platform_shell_tablet_rail_max = "var(--home-platform-shell-tablet-rail-max)"
  static let cc_platform_shell_tablet_rail_min = "var(--home-platform-shell-tablet-rail-min)"
  static let cc_platform_shell_tablet_rail_padding_right = "var(--home-platform-shell-tablet-rail-padding-right)"
  static let cc_platform_shell_tablet_subrail_max = "var(--home-platform-shell-tablet-subrail-max)"
  static let cc_platform_shell_tablet_subrail_min = "var(--home-platform-shell-tablet-subrail-min)"
  static let cc_platform_theme_caption_line_height = "var(--layout-home-platform-theme-caption-line-height)"
  static let cc_platform_theme_caption_opacity = "var(--layout-home-platform-theme-caption-opacity)"
  static let cc_platform_theme_caption_size = "var(--layout-home-platform-theme-caption-size)"
  static let cc_platform_theme_eyebrow_opacity = "var(--layout-home-platform-theme-eyebrow-opacity)"
  static let cc_platform_theme_eyebrow_size = "var(--layout-home-platform-theme-eyebrow-size)"
  static let cc_platform_theme_eyebrow_tracking = "var(--layout-home-platform-theme-eyebrow-tracking)"
  static let cc_platform_theme_eyebrow_weight = "var(--layout-home-platform-theme-eyebrow-weight)"
  static let cc_platform_theme_header_gap = "var(--layout-home-platform-theme-header-gap)"
  static let cc_platform_theme_mode_grid_count = "var(--layout-home-platform-theme-mode-grid-count)"
  static let cc_platform_theme_mode_grid_gap = "var(--layout-home-platform-theme-mode-grid-gap)"
  static let cc_platform_theme_mode_label_line_height = "var(--layout-home-platform-theme-mode-label-line-height)"
  static let cc_platform_theme_mode_label_size = "var(--layout-home-platform-theme-mode-label-size)"
  static let cc_platform_theme_mode_option_gap = "var(--layout-home-platform-theme-mode-option-gap)"
  static let cc_platform_theme_mode_option_min_height = "var(--layout-home-platform-theme-mode-option-min-height)"
  static let cc_platform_theme_mode_option_padding_x = "var(--layout-home-platform-theme-mode-option-padding-x)"
  static let cc_platform_theme_mode_option_padding_y = "var(--layout-home-platform-theme-mode-option-padding-y)"
  static let cc_platform_theme_mode_option_radius = "var(--layout-home-platform-theme-mode-option-radius)"
  static let cc_platform_theme_section_gap = "var(--layout-home-platform-theme-section-gap)"
  static let cc_platform_theme_section_header_gap = "var(--layout-home-platform-theme-section-header-gap)"
  static let cc_platform_theme_section_padding_top = "var(--layout-home-platform-theme-section-padding-top)"
  static let cc_platform_theme_shell_gap = "var(--layout-home-platform-theme-shell-gap)"
  static let cc_platform_theme_summary_line_height = "var(--layout-home-platform-theme-summary-line-height)"
  static let cc_platform_theme_summary_max_width = "var(--layout-home-platform-theme-summary-max-width)"
  static let cc_platform_theme_summary_opacity = "var(--layout-home-platform-theme-summary-opacity)"
  static let cc_platform_theme_summary_size = "var(--layout-home-platform-theme-summary-size)"
  static let cc_platform_theme_title_line_height = "var(--layout-home-platform-theme-title-line-height)"
  static let cc_platform_theme_title_size = "var(--layout-home-platform-theme-title-size)"
  static let cc_platform_theme_title_tracking = "var(--layout-home-platform-theme-title-tracking)"
  static let cc_platform_theme_toggle_list_gap = "var(--layout-home-platform-theme-toggle-list-gap)"
  static let cc_platform_theme_toggle_row_gap = "var(--layout-home-platform-theme-toggle-row-gap)"
  static let cc_platform_theme_toggle_row_padding_y = "var(--layout-home-platform-theme-toggle-row-padding-y)"
  static let cc_platform_theme_token_field_gap = "var(--layout-home-platform-theme-token-field-gap)"
  static let cc_platform_theme_token_field_min_height = "var(--layout-home-platform-theme-token-field-min-height)"
  static let cc_platform_theme_token_field_padding_x = "var(--layout-home-platform-theme-token-field-padding-x)"
  static let cc_platform_theme_token_field_padding_y = "var(--layout-home-platform-theme-token-field-padding-y)"
  static let cc_platform_theme_token_field_radius = "var(--layout-home-platform-theme-token-field-radius)"
  static let cc_platform_theme_token_grid_count = "var(--layout-home-platform-theme-token-grid-count)"
  static let cc_platform_theme_token_grid_disabled_opacity = "var(--layout-home-platform-theme-token-grid-disabled-opacity)"
  static let cc_platform_theme_token_grid_enabled_opacity = "var(--layout-home-platform-theme-token-grid-enabled-opacity)"
  static let cc_platform_theme_token_grid_gap = "var(--layout-home-platform-theme-token-grid-gap)"
  static let cc_platform_theme_token_label_line_height = "var(--layout-home-platform-theme-token-label-line-height)"
  static let cc_platform_theme_token_label_size = "var(--layout-home-platform-theme-token-label-size)"
  static let cc_primary_color = "var(--text-color)"
  static let cc_profile_control_panel_avatar_fallback_size = "var(--layout-home-profile-control-panel-avatar-fallback-size)"
  static let cc_profile_control_panel_avatar_fallback_tracking = "var(--layout-home-profile-control-panel-avatar-fallback-tracking)"
  static let cc_profile_control_panel_avatar_fallback_weight = "var(--layout-home-profile-control-panel-avatar-fallback-weight)"
  static let cc_profile_control_panel_avatar_size = "var(--layout-home-profile-control-panel-avatar-size)"
  static let cc_profile_control_panel_eyebrow_margin_bottom = "var(--layout-home-profile-control-panel-eyebrow-margin-bottom)"
  static let cc_profile_control_panel_header_gap = "var(--layout-home-profile-control-panel-header-gap)"
  static let cc_profile_control_panel_header_padding_bottom = "var(--layout-home-profile-control-panel-header-padding-bottom)"
  static let cc_profile_control_panel_identity_gap = "var(--layout-home-profile-control-panel-identity-gap)"
  static let cc_profile_control_panel_identity_padding_x = "var(--layout-home-profile-control-panel-identity-padding-x)"
  static let cc_profile_control_panel_identity_padding_y = "var(--layout-home-profile-control-panel-identity-padding-y)"
  static let cc_profile_control_panel_inner_gap = "var(--layout-home-profile-control-panel-inner-gap)"
  static let cc_profile_control_panel_inner_padding_bottom = "var(--layout-home-profile-control-panel-inner-padding-bottom)"
  static let cc_profile_control_panel_inner_padding_left = "var(--layout-home-profile-control-panel-inner-padding-left)"
  static let cc_profile_control_panel_inner_padding_right = "var(--layout-home-profile-control-panel-inner-padding-right)"
  static let cc_profile_control_panel_inner_padding_top = "var(--layout-home-profile-control-panel-inner-padding-top)"
  static let cc_profile_control_panel_inner_padding_top_mobile = "var(--layout-home-profile-control-panel-inner-padding-top-mobile)"
  static let cc_profile_control_panel_item_min_height = "var(--layout-home-profile-control-panel-item-min-height)"
  static let cc_profile_control_panel_item_padding_x = "var(--layout-home-profile-control-panel-item-padding-x)"
  static let cc_profile_control_panel_item_padding_y = "var(--layout-home-profile-control-panel-item-padding-y)"
  static let cc_profile_control_panel_item_size = "var(--layout-home-profile-control-panel-item-size)"
  static let cc_profile_control_panel_item_tracking = "var(--layout-home-profile-control-panel-item-tracking)"
  static let cc_profile_control_panel_item_weight = "var(--layout-home-profile-control-panel-item-weight)"
  static let cc_profile_control_panel_meta_line_height = "var(--layout-home-profile-control-panel-meta-line-height)"
  static let cc_profile_control_panel_meta_size = "var(--layout-home-profile-control-panel-meta-size)"
  static let cc_profile_control_panel_name_margin_bottom = "var(--layout-home-profile-control-panel-name-margin-bottom)"
  static let cc_profile_control_panel_name_size = "var(--layout-home-profile-control-panel-name-size)"
  static let cc_profile_control_panel_name_weight = "var(--layout-home-profile-control-panel-name-weight)"
  static let cc_profile_control_panel_plan_margin_bottom = "var(--layout-home-profile-control-panel-plan-margin-bottom)"
  static let cc_profile_control_panel_plan_size = "var(--layout-home-profile-control-panel-plan-size)"
  static let cc_profile_control_panel_plan_tracking = "var(--layout-home-profile-control-panel-plan-tracking)"
  static let cc_profile_control_panel_plan_weight = "var(--layout-home-profile-control-panel-plan-weight)"
  static let cc_profile_control_panel_route_link_line_height = "var(--layout-home-profile-control-panel-route-link-line-height)"
  static let cc_profile_control_panel_route_link_margin_top = "var(--layout-home-profile-control-panel-route-link-margin-top)"
  static let cc_profile_control_panel_route_link_size = "var(--layout-home-profile-control-panel-route-link-size)"
  static let cc_profile_control_panel_section_gap = "var(--layout-home-profile-control-panel-section-gap)"
  static let cc_profile_control_panel_stack_gap = "var(--layout-home-profile-control-panel-stack-gap)"
  static let cc_profile_control_panel_status_card_gap = "var(--layout-home-profile-control-panel-status-card-gap)"
  static let cc_profile_control_panel_status_card_padding_x = "var(--layout-home-profile-control-panel-status-card-padding-x)"
  static let cc_profile_control_panel_status_card_padding_y = "var(--layout-home-profile-control-panel-status-card-padding-y)"
  static let cc_profile_control_panel_status_grid_gap = "var(--layout-home-profile-control-panel-status-grid-gap)"
  static let cc_profile_control_panel_status_label_size = "var(--layout-home-profile-control-panel-status-label-size)"
  static let cc_profile_control_panel_status_label_tracking = "var(--layout-home-profile-control-panel-status-label-tracking)"
  static let cc_profile_control_panel_status_label_weight = "var(--layout-home-profile-control-panel-status-label-weight)"
  static let cc_profile_control_panel_status_value_line_height = "var(--layout-home-profile-control-panel-status-value-line-height)"
  static let cc_profile_control_panel_status_value_size = "var(--layout-home-profile-control-panel-status-value-size)"
  static let cc_profile_control_panel_status_value_weight = "var(--layout-home-profile-control-panel-status-value-weight)"
  static let cc_profile_control_panel_username_margin_bottom = "var(--layout-home-profile-control-panel-username-margin-bottom)"
  static let cc_profile_control_panel_username_size = "var(--layout-home-profile-control-panel-username-size)"
  static let cc_profile_control_panel_username_tracking = "var(--layout-home-profile-control-panel-username-tracking)"
  static let cc_profile_control_panel_username_weight = "var(--layout-home-profile-control-panel-username-weight)"
  static let cc_profile_control_panel_width = "var(--layout-home-profile-control-panel-width)"
  static let cc_radius_unified = "var(--radius-lg)"
  static let cc_saturate_unified = "var(--glass-surface-saturate)"
  static let cc_search_shell_body_gap = "var(--layout-home-search-body-gap)"
  static let cc_search_shell_body_padding_x_fallback = "var(--layout-home-search-body-padding-x-fallback)"
  static let cc_search_shell_body_padding_y = "var(--layout-home-search-body-padding-y)"
  static let cc_search_shell_chip_min_height = "var(--layout-home-search-chip-min-height)"
  static let cc_search_shell_chip_padding_x = "var(--layout-home-search-chip-padding-x)"
  static let cc_search_shell_chip_size = "var(--layout-home-search-chip-size)"
  static let cc_search_shell_chip_tracking = "var(--layout-home-search-chip-tracking)"
  static let cc_search_shell_dark_border = "var(--layout-home-search-dark-border)"
  static let cc_search_shell_dialog_blur = "var(--layout-home-search-dialog-blur)"
  static let cc_search_shell_dialog_saturate = "var(--layout-home-search-dialog-saturate)"
  static let cc_search_shell_empty_gap = "var(--layout-home-search-empty-gap)"
  static let cc_search_shell_empty_padding_top = "var(--layout-home-search-empty-padding-top)"
  static let cc_search_shell_empty_text_line_height = "var(--layout-home-search-empty-text-line-height)"
  static let cc_search_shell_empty_text_size = "var(--layout-home-search-empty-text-size)"
  static let cc_search_shell_empty_title_size = "var(--layout-home-search-empty-title-size)"
  static let cc_search_shell_eyebrow_margin_bottom = "var(--layout-home-search-eyebrow-margin-bottom)"
  static let cc_search_shell_eyebrow_size = "var(--layout-home-search-eyebrow-size)"
  static let cc_search_shell_eyebrow_tracking = "var(--layout-home-search-eyebrow-tracking)"
  static let cc_search_shell_eyebrow_weight = "var(--layout-home-search-eyebrow-weight)"
  static let cc_search_shell_form_gap = "var(--layout-home-search-form-gap)"
  static let cc_search_shell_header_gap = "var(--layout-home-search-header-gap)"
  static let cc_search_shell_header_padding_bottom = "var(--layout-home-search-header-padding-bottom)"
  static let cc_search_shell_header_padding_x_fallback = "var(--layout-home-search-header-padding-x-fallback)"
  static let cc_search_shell_header_padding_y = "var(--layout-home-search-header-padding-y)"
  static let cc_search_shell_hint_line_height = "var(--layout-home-search-hint-line-height)"
  static let cc_search_shell_hint_size = "var(--layout-home-search-hint-size)"
  static let cc_search_shell_icon_opacity = "var(--layout-home-search-icon-opacity)"
  static let cc_search_shell_icon_size = "var(--layout-home-search-icon-size)"
  static let cc_search_shell_input_line_height = "var(--layout-home-search-input-line-height)"
  static let cc_search_shell_input_row_border = "var(--layout-home-search-input-row-border)"
  static let cc_search_shell_input_row_border_focus = "var(--layout-home-search-input-row-border-focus)"
  static let cc_search_shell_input_row_gap = "var(--layout-home-search-input-row-gap)"
  static let cc_search_shell_input_row_line_height = "var(--layout-home-search-input-row-line-height)"
  static let cc_search_shell_input_row_min_height = "var(--layout-home-search-input-row-min-height)"
  static let cc_search_shell_input_row_opacity = "var(--layout-home-search-input-row-opacity)"
  static let cc_search_shell_input_row_padding_x = "var(--layout-home-search-input-row-padding-x)"
  static let cc_search_shell_input_row_padding_y = "var(--layout-home-search-input-row-padding-y)"
  static let cc_search_shell_input_row_radius = "var(--layout-home-search-input-row-radius)"
  static let cc_search_shell_input_size = "var(--layout-home-search-input-size)"
  static let cc_search_shell_input_tracking = "var(--layout-home-search-input-tracking)"
  static let cc_search_shell_input_weight = "var(--layout-home-search-input-weight)"
  static let cc_search_shell_light_border = "var(--layout-home-search-light-border)"
  static let cc_search_shell_mobile_input_row_min_height = "var(--layout-home-search-mobile-input-row-min-height)"
  static let cc_search_shell_mobile_input_row_padding_x = "var(--layout-home-search-mobile-input-row-padding-x)"
  static let cc_search_shell_mobile_input_row_padding_y = "var(--layout-home-search-mobile-input-row-padding-y)"
  static let cc_search_shell_mobile_input_size = "var(--layout-home-search-mobile-input-size)"
  static let cc_search_shell_mobile_padding_x_fallback = "var(--layout-home-search-mobile-padding-x-fallback)"
  static let cc_search_shell_quick_actions_gap = "var(--layout-home-search-quick-actions-gap)"
  static let cc_search_shell_result_action_line_height = "var(--layout-home-search-result-action-line-height)"
  static let cc_search_shell_result_action_min_height = "var(--layout-home-search-result-action-min-height)"
  static let cc_search_shell_result_action_min_width = "var(--layout-home-search-result-action-min-width)"
  static let cc_search_shell_result_action_padding_x = "var(--layout-home-search-result-action-padding-x)"
  static let cc_search_shell_result_action_size = "var(--layout-home-search-result-action-size)"
  static let cc_search_shell_result_actions_gap = "var(--layout-home-search-result-actions-gap)"
  static let cc_search_shell_result_badge_color = "var(--layout-home-search-result-badge-color)"
  static let cc_search_shell_result_badge_gap = "var(--layout-home-search-result-badge-gap)"
  static let cc_search_shell_result_badge_icon_size = "var(--layout-home-search-result-badge-icon-size)"
  static let cc_search_shell_result_badge_min_height = "var(--layout-home-search-result-badge-min-height)"
  static let cc_search_shell_result_badge_padding_x = "var(--layout-home-search-result-badge-padding-x)"
  static let cc_search_shell_result_badge_size = "var(--layout-home-search-result-badge-size)"
  static let cc_search_shell_result_badge_weight = "var(--layout-home-search-result-badge-weight)"
  static let cc_search_shell_result_card_gap = "var(--layout-home-search-result-card-gap)"
  static let cc_search_shell_result_card_padding_y = "var(--layout-home-search-result-card-padding-y)"
  static let cc_search_shell_result_list_gap = "var(--layout-home-search-result-list-gap)"
  static let cc_search_shell_result_meta_column_gap = "var(--layout-home-search-result-meta-column-gap)"
  static let cc_search_shell_result_meta_row_gap = "var(--layout-home-search-result-meta-row-gap)"
  static let cc_search_shell_result_query_line_height = "var(--layout-home-search-result-query-line-height)"
  static let cc_search_shell_result_query_size = "var(--layout-home-search-result-query-size)"
  static let cc_search_shell_result_tag_min_height = "var(--layout-home-search-result-tag-min-height)"
  static let cc_search_shell_result_tag_padding_x = "var(--layout-home-search-result-tag-padding-x)"
  static let cc_search_shell_result_tag_size = "var(--layout-home-search-result-tag-size)"
  static let cc_search_shell_result_tag_tracking = "var(--layout-home-search-result-tag-tracking)"
  static let cc_search_shell_result_title_line_height = "var(--layout-home-search-result-title-line-height)"
  static let cc_search_shell_result_title_size = "var(--layout-home-search-result-title-size)"
  static let cc_search_shell_result_title_tracking = "var(--layout-home-search-result-title-tracking)"
  static let cc_search_shell_result_title_weight = "var(--layout-home-search-result-title-weight)"
  static let cc_search_shell_voice_motion = "var(--layout-home-search-voice-motion)"
  static let cc_secondary = "var(--text-secondary-color)"
  static let cc_secondary_color = "var(--text-secondary-color)"
  static let cc_shadow_unified = "var(--glass-surface-shadow)"
  static let cc_stage_circle_blur = "var(--layout-home-circle-blur)"
  static let cc_stage_circle_breathe_duration = "var(--layout-home-circle-breathe-duration)"
  static let cc_stage_circle_halo_opacity = "var(--layout-home-circle-halo-opacity)"
  static let cc_stage_circle_halo_scale = "var(--layout-home-circle-halo-scale)"
  static let cc_stage_circle_mid_scale = "var(--layout-home-circle-mid-scale)"
  static let cc_stage_circle_start_scale = "var(--layout-home-circle-start-scale)"
  static let cc_stage_developer_operations_border = "var(--home-stage-developer-operations-border)"
  static let cc_stage_developer_operations_button_radius = "var(--home-stage-developer-operations-button-radius)"
  static let cc_stage_developer_operations_control_focus_border = "var(--home-stage-developer-operations-control-focus-border)"
  static let cc_stage_developer_operations_control_font_size = "var(--home-stage-developer-operations-control-font-size)"
  static let cc_stage_developer_operations_control_height = "var(--home-stage-developer-operations-control-height)"
  static let cc_stage_developer_operations_control_icon_offset = "var(--home-stage-developer-operations-control-icon-offset)"
  static let cc_stage_developer_operations_control_inline_padding = "var(--home-stage-developer-operations-control-inline-padding)"
  static let cc_stage_developer_operations_control_padding = "var(--home-stage-developer-operations-control-padding)"
  static let cc_stage_developer_operations_copy_font_size = "var(--home-stage-developer-operations-copy-font-size)"
  static let cc_stage_developer_operations_full_body_gap = "var(--home-stage-developer-operations-full-body-gap)"
  static let cc_stage_developer_operations_full_border = "var(--home-stage-developer-operations-full-border)"
  static let cc_stage_developer_operations_full_gap = "var(--home-stage-developer-operations-full-gap)"
  static let cc_stage_developer_operations_full_height = "var(--home-stage-developer-operations-full-height)"
  static let cc_stage_developer_operations_full_inset = "var(--home-stage-developer-operations-full-inset)"
  static let cc_stage_developer_operations_full_padding_block = "var(--home-stage-developer-operations-full-padding-block)"
  static let cc_stage_developer_operations_full_padding_inline = "var(--home-stage-developer-operations-full-padding-inline)"
  static let cc_stage_developer_operations_full_surface = "var(--home-stage-developer-operations-full-surface)"
  static let cc_stage_developer_operations_full_text = "var(--home-stage-developer-operations-full-text)"
  static let cc_stage_developer_operations_full_top = "var(--home-stage-developer-operations-full-top)"
  static let cc_stage_developer_operations_full_z_index = "var(--home-stage-developer-operations-full-z-index)"
  static let cc_stage_developer_operations_gap = "var(--home-stage-developer-operations-gap)"
  static let cc_stage_developer_operations_gap_compact = "var(--home-stage-developer-operations-gap-compact)"
  static let cc_stage_developer_operations_gap_spacious = "var(--home-stage-developer-operations-gap-spacious)"
  static let cc_stage_developer_operations_gap_tight = "var(--home-stage-developer-operations-gap-tight)"
  static let cc_stage_developer_operations_icon_gap = "var(--home-stage-developer-operations-icon-gap)"
  static let cc_stage_developer_operations_icon_opacity = "var(--home-stage-developer-operations-icon-opacity)"
  static let cc_stage_developer_operations_icon_opacity_active = "var(--home-stage-developer-operations-icon-opacity-active)"
  static let cc_stage_developer_operations_icon_size = "var(--home-stage-developer-operations-icon-size)"
  static let cc_stage_developer_operations_label_font_size = "var(--home-stage-developer-operations-label-font-size)"
  static let cc_stage_developer_operations_max_height = "var(--home-stage-developer-operations-max-height)"
  static let cc_stage_developer_operations_muted = "var(--home-stage-developer-operations-muted)"
  static let cc_stage_developer_operations_padding = "var(--home-stage-developer-operations-padding)"
  static let cc_stage_developer_operations_radius = "var(--home-stage-developer-operations-radius)"
  static let cc_stage_developer_operations_search_icon_size = "var(--home-stage-developer-operations-search-icon-size)"
  static let cc_stage_developer_operations_shadow = "var(--home-stage-developer-operations-shadow)"
  static let cc_stage_developer_operations_surface = "var(--home-stage-developer-operations-surface)"
  static let cc_stage_developer_operations_text = "var(--home-stage-developer-operations-text)"
  static let cc_stage_developer_operations_width = "var(--home-stage-developer-operations-width)"
  static let cc_stage_halo_breathe_duration = "var(--layout-home-halo-breathe-duration)"
  static let cc_stage_halo_start_opacity = "var(--layout-home-halo-start-opacity)"
  static let cc_stage_interactive_text_active_opacity = "var(--home-stage-interactive-text-active-opacity)"
  static let cc_stage_interactive_text_color = "var(--home-stage-interactive-text-color)"
  static let cc_stage_interactive_text_dot_color = "var(--home-stage-interactive-text-dot-color)"
  static let cc_stage_interactive_text_dot_glow = "var(--home-stage-interactive-text-dot-glow)"
  static let cc_stage_interactive_text_dot_size = "var(--home-stage-interactive-text-dot-size)"
  static let cc_stage_interactive_text_font_size = "var(--home-stage-interactive-text-font-size)"
  static let cc_stage_interactive_text_font_size_mobile = "var(--home-stage-interactive-text-font-size-mobile)"
  static let cc_stage_interactive_text_font_weight = "var(--home-stage-interactive-text-font-weight)"
  static let cc_stage_interactive_text_gap = "var(--home-stage-interactive-text-gap)"
  static let cc_stage_interactive_text_letter_spacing = "var(--home-stage-interactive-text-letter-spacing)"
  static let cc_stage_interactive_text_line_height = "var(--home-stage-interactive-text-line-height)"
  static let cc_stage_interactive_text_max_width = "var(--home-stage-interactive-text-max-width)"
  static let cc_stage_interactive_text_motion_fast = "var(--home-stage-interactive-text-motion-fast)"
  static let cc_stage_interactive_text_opacity = "var(--home-stage-interactive-text-opacity)"
  static let cc_stage_interactive_text_sheen_duration = "var(--home-stage-interactive-text-sheen-duration)"
  static let cc_stage_interactive_text_switch_duration = "var(--home-stage-interactive-text-switch-duration)"
  static let cc_stage_motion_active_color = "var(--layout-home-stage-motion-active-color)"
  static let cc_stage_motion_active_mic_scale = "var(--layout-home-stage-motion-active-mic-scale)"
  static let cc_stage_motion_core_active_height = "var(--layout-home-stage-motion-core-active-height)"
  static let cc_stage_motion_core_active_width = "var(--layout-home-stage-motion-core-active-width)"
  static let cc_stage_motion_core_color = "var(--layout-home-stage-motion-core-color)"
  static let cc_stage_motion_core_height = "var(--layout-home-stage-motion-core-height)"
  static let cc_stage_motion_core_pulse_size = "var(--layout-home-stage-motion-core-pulse-size)"
  static let cc_stage_motion_core_ring_border = "var(--layout-home-stage-motion-core-ring-border)"
  static let cc_stage_motion_core_ring_size = "var(--layout-home-stage-motion-core-ring-size)"
  static let cc_stage_motion_core_signal_size = "var(--layout-home-stage-motion-core-signal-size)"
  static let cc_stage_motion_core_width = "var(--layout-home-stage-motion-core-width)"
  static let cc_stage_motion_fast = "var(--layout-home-stage-motion-fast)"
  static let cc_stage_motion_field_opacity_transition = "var(--layout-home-stage-motion-field-opacity-transition)"
  static let cc_stage_motion_key_core_listen_mid_opacity = "var(--layout-home-stage-motion-key-core-listen-mid-opacity)"
  static let cc_stage_motion_key_core_listen_mid_scale = "var(--layout-home-stage-motion-key-core-listen-mid-scale)"
  static let cc_stage_motion_key_core_listen_start_opacity = "var(--layout-home-stage-motion-key-core-listen-start-opacity)"
  static let cc_stage_motion_key_core_listen_start_scale = "var(--layout-home-stage-motion-key-core-listen-start-scale)"
  static let cc_stage_motion_key_core_respond_mid_opacity = "var(--layout-home-stage-motion-key-core-respond-mid-opacity)"
  static let cc_stage_motion_key_core_respond_mid_scale = "var(--layout-home-stage-motion-key-core-respond-mid-scale)"
  static let cc_stage_motion_key_core_respond_start_opacity = "var(--layout-home-stage-motion-key-core-respond-start-opacity)"
  static let cc_stage_motion_key_core_respond_start_scale = "var(--layout-home-stage-motion-key-core-respond-start-scale)"
  static let cc_stage_motion_key_core_think_mid_opacity = "var(--layout-home-stage-motion-key-core-think-mid-opacity)"
  static let cc_stage_motion_key_core_think_mid_scale = "var(--layout-home-stage-motion-key-core-think-mid-scale)"
  static let cc_stage_motion_key_core_think_start_opacity = "var(--layout-home-stage-motion-key-core-think-start-opacity)"
  static let cc_stage_motion_key_core_think_start_scale = "var(--layout-home-stage-motion-key-core-think-start-scale)"
  static let cc_stage_motion_key_mic_listen_mid_opacity = "var(--layout-home-stage-motion-key-mic-listen-mid-opacity)"
  static let cc_stage_motion_key_mic_listen_mid_scale = "var(--layout-home-stage-motion-key-mic-listen-mid-scale)"
  static let cc_stage_motion_key_mic_listen_start_opacity = "var(--layout-home-stage-motion-key-mic-listen-start-opacity)"
  static let cc_stage_motion_key_mic_listen_start_scale = "var(--layout-home-stage-motion-key-mic-listen-start-scale)"
  static let cc_stage_motion_key_mic_respond_mid_opacity = "var(--layout-home-stage-motion-key-mic-respond-mid-opacity)"
  static let cc_stage_motion_key_mic_respond_mid_scale = "var(--layout-home-stage-motion-key-mic-respond-mid-scale)"
  static let cc_stage_motion_key_mic_respond_start_opacity = "var(--layout-home-stage-motion-key-mic-respond-start-opacity)"
  static let cc_stage_motion_key_mic_respond_start_scale = "var(--layout-home-stage-motion-key-mic-respond-start-scale)"
  static let cc_stage_motion_key_mic_think_mid_opacity = "var(--layout-home-stage-motion-key-mic-think-mid-opacity)"
  static let cc_stage_motion_key_mic_think_mid_scale = "var(--layout-home-stage-motion-key-mic-think-mid-scale)"
  static let cc_stage_motion_key_mic_think_start_opacity = "var(--layout-home-stage-motion-key-mic-think-start-opacity)"
  static let cc_stage_motion_key_mic_think_start_scale = "var(--layout-home-stage-motion-key-mic-think-start-scale)"
  static let cc_stage_motion_key_ring_listen_mid_opacity = "var(--layout-home-stage-motion-key-ring-listen-mid-opacity)"
  static let cc_stage_motion_key_ring_listen_mid_scale = "var(--layout-home-stage-motion-key-ring-listen-mid-scale)"
  static let cc_stage_motion_key_ring_listen_start_opacity = "var(--layout-home-stage-motion-key-ring-listen-start-opacity)"
  static let cc_stage_motion_key_ring_listen_start_scale = "var(--layout-home-stage-motion-key-ring-listen-start-scale)"
  static let cc_stage_motion_key_ring_respond_mid_opacity = "var(--layout-home-stage-motion-key-ring-respond-mid-opacity)"
  static let cc_stage_motion_key_ring_respond_mid_scale = "var(--layout-home-stage-motion-key-ring-respond-mid-scale)"
  static let cc_stage_motion_key_ring_respond_start_opacity = "var(--layout-home-stage-motion-key-ring-respond-start-opacity)"
  static let cc_stage_motion_key_ring_respond_start_scale = "var(--layout-home-stage-motion-key-ring-respond-start-scale)"
  static let cc_stage_motion_key_ring_think_mid_opacity = "var(--layout-home-stage-motion-key-ring-think-mid-opacity)"
  static let cc_stage_motion_key_ring_think_mid_scale = "var(--layout-home-stage-motion-key-ring-think-mid-scale)"
  static let cc_stage_motion_key_ring_think_start_opacity = "var(--layout-home-stage-motion-key-ring-think-start-opacity)"
  static let cc_stage_motion_key_ring_think_start_scale = "var(--layout-home-stage-motion-key-ring-think-start-scale)"
  static let cc_stage_motion_listening_core_duration = "var(--layout-home-stage-motion-listening-core-duration)"
  static let cc_stage_motion_listening_mic_duration = "var(--layout-home-stage-motion-listening-mic-duration)"
  static let cc_stage_motion_listening_ring_duration = "var(--layout-home-stage-motion-listening-ring-duration)"
  static let cc_stage_motion_mic_color = "var(--layout-home-stage-motion-mic-color)"
  static let cc_stage_motion_mic_field_blur = "var(--layout-home-stage-motion-mic-field-blur)"
  static let cc_stage_motion_mic_field_color = "var(--layout-home-stage-motion-mic-field-color)"
  static let cc_stage_motion_mic_field_color_clear = "var(--layout-home-stage-motion-mic-field-color-clear)"
  static let cc_stage_motion_mic_field_color_soft = "var(--layout-home-stage-motion-mic-field-color-soft)"
  static let cc_stage_motion_mic_hover_color = "var(--layout-home-stage-motion-mic-hover-color)"
  static let cc_stage_motion_mic_hover_scale = "var(--layout-home-stage-motion-mic-hover-scale)"
  static let cc_stage_motion_mic_icon_hover_scale = "var(--layout-home-stage-motion-mic-icon-hover-scale)"
  static let cc_stage_motion_mic_icon_opacity = "var(--layout-home-stage-motion-mic-icon-opacity)"
  static let cc_stage_motion_mic_icon_size = "var(--layout-home-stage-motion-mic-icon-size)"
  static let cc_stage_motion_mic_margin_bottom = "var(--layout-home-stage-motion-mic-margin-bottom)"
  static let cc_stage_motion_mic_opacity = "var(--layout-home-stage-motion-mic-opacity)"
  static let cc_stage_motion_mic_ring_border = "var(--layout-home-stage-motion-mic-ring-border)"
  static let cc_stage_motion_mic_ring_offset = "var(--layout-home-stage-motion-mic-ring-offset)"
  static let cc_stage_motion_mic_size = "var(--layout-home-stage-motion-mic-size)"
  static let cc_stage_motion_mode_core_opacity = "var(--layout-home-stage-motion-mode-core-opacity)"
  static let cc_stage_motion_mode_ring_opacity = "var(--layout-home-stage-motion-mode-ring-opacity)"
  static let cc_stage_motion_responding_core_duration = "var(--layout-home-stage-motion-responding-core-duration)"
  static let cc_stage_motion_responding_mic_duration = "var(--layout-home-stage-motion-responding-mic-duration)"
  static let cc_stage_motion_responding_ring_duration = "var(--layout-home-stage-motion-responding-ring-duration)"
  static let cc_stage_motion_thinking_core_duration = "var(--layout-home-stage-motion-thinking-core-duration)"
  static let cc_stage_motion_thinking_mic_duration = "var(--layout-home-stage-motion-thinking-mic-duration)"
  static let cc_stage_motion_thinking_ring_duration = "var(--layout-home-stage-motion-thinking-ring-duration)"
  static let cc_stage_motion_transition = "var(--layout-home-stage-motion-transition)"
  static let cc_stage_motion_vessel_active_size = "var(--layout-home-stage-motion-vessel-active-size)"
  static let cc_stage_motion_vessel_blur = "var(--layout-home-stage-motion-vessel-blur)"
  static let cc_stage_motion_vessel_inner_bg = "var(--layout-home-stage-motion-vessel-inner-bg)"
  static let cc_stage_motion_vessel_ring_border = "var(--layout-home-stage-motion-vessel-ring-border)"
  static let cc_stage_motion_vessel_size = "var(--layout-home-stage-motion-vessel-size)"
  static let cc_subtle = "color-mix(in srgb, var(--text-secondary-color) 58%, transparent)"
  static let cc_surface_unified = "var(--glass-surface-bg)"
  static let cc_transform_none = "none"
  static let cc_transform_uppercase = "uppercase"
  static let cc_width = "100%"
  static let cc_width_hairline = "1px"
  static let cc_width_thin = "2px"
  static let control_height_sm = "2.2rem"
  static let control_height_md = "2.6rem"
  static let control_height_lg = "3rem"
  static let control_width_auth_max = "26rem"
  static let control_width_auth_max_wide = "30rem"
  static let control_padding_x_sm = "0.82rem"
  static let control_padding_x_md = "1rem"
  static let control_padding_x_lg = "1.25rem"
  static let control_gap_xs = "0.46rem"
  static let control_gap_sm = "0.52rem"
  static let control_gap_md = "0.72rem"
  static let control_gap_lg = "0.82rem"
  static let control_gap_xl = "1rem"
  static let button_font_size = "var(--body-2-size)"
  static let button_font_weight = "500"
  static let button_letter_spacing = "var(--tracking-copy)"
  static let button_line_height = "1"
  static let button_height_sm = "var(--control-height-sm)"
  static let button_height_md = "var(--control-height-md)"
  static let button_height_lg = "var(--control-height-lg)"
  static let button_radius_sm = "var(--radius-pill)"
  static let button_radius_md = "var(--radius-pill)"
  static let button_radius_lg = "var(--radius-pill)"
  static let button_padding_x_sm = "var(--control-padding-x-sm)"
  static let button_padding_x_md = "var(--control-padding-x-md)"
  static let button_padding_x_lg = "var(--control-padding-x-lg)"
  static let button_hover_lift_y_subtle = "0"
  static let button_hover_scale_subtle = "1"
  static let input_font_size = "var(--body-2-size)"
  static let input_line_height = "var(--body-2-line-height)"
  static let input_letter_spacing = "var(--body-2-tracking)"
  static let input_height_sm = "var(--control-height-sm)"
  static let input_height_md = "var(--control-height-md)"
  static let input_height_lg = "var(--control-height-lg)"
  static let input_radius_sm = "var(--radius-pill)"
  static let input_radius_md = "var(--radius-pill)"
  static let input_radius_lg = "var(--radius-pill)"
  static let input_padding_x_sm = "var(--control-padding-x-sm)"
  static let input_padding_x_md = "var(--control-padding-x-md)"
  static let input_padding_x_lg = "var(--control-padding-x-lg)"
  static let toggle_width = "2.625rem"
  static let toggle_height = "1.25rem"
  static let toggle_padding = "0.125rem"
  static let toggle_thumb_size = "1rem"
  static let toggle_radius = "999px"
  static let toggle_track_border_width = "0"
  static let toggle_track_bg_off = "color-mix(in srgb, var(--cc-primary-color) 12%, transparent)"
  static let toggle_track_bg_on = "var(--cc-primary-color)"
  static let toggle_track_border_color = "transparent"
  static let toggle_track_border_hover_color = "transparent"
  static let toggle_thumb_bg = "rgb(255, 255, 255)"
  static let toggle_thumb_shadow = "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.22), 0 0.03125rem 0.0625rem rgba(0, 0, 0, 0.14)"
  static let toggle_thumb_shadow_active = "0 0.03125rem 0.0625rem rgba(0, 0, 0, 0.16)"
  static let toggle_focus_ring_width = "0.125rem"
  static let toggle_focus_ring_color = "color-mix(in srgb, var(--color-primary1) 22%, transparent)"
  static let toggle_disabled_opacity = "0.42"
  static let toggle_transition_duration = "220ms"
  static let toggle_transition_ease = "cubic-bezier(0.25, 0.1, 0.25, 1)"
  static let toggle_thumb_translate_on = "calc(var(--toggle-width) - var(--toggle-thumb-size) - (2 * var(--toggle-padding)))"
  static let account_control_width_max = "var(--control-width-auth-max)"
  static let account_control_width_max_wide = "var(--control-width-auth-max-wide)"
  static let account_content_gap_xs = "var(--control-gap-xs)"
  static let account_content_gap_sm = "var(--control-gap-sm)"
  static let account_content_gap_md = "var(--control-gap-md)"
  static let account_content_gap_lg = "var(--control-gap-lg)"
  static let account_content_gap_xl = "var(--control-gap-xl)"
  static let account_button_height = "var(--button-height-md)"
  static let account_button_radius = "var(--button-radius-md)"
  static let account_button_padding_x = "var(--button-padding-x-lg)"
  static let account_button_font_size = "var(--button-font-size)"
  static let account_button_font_weight = "var(--button-font-weight)"
  static let account_button_letter_spacing = "var(--button-letter-spacing)"
  static let account_button_line_height = "var(--button-line-height)"
  static let account_button_hover_lift_y = "var(--button-hover-lift-y-subtle)"
  static let account_button_hover_scale = "var(--button-hover-scale-subtle)"
  static let account_field_height = "var(--input-height-md)"
  static let account_field_radius = "var(--input-radius-md)"
  static let account_field_padding_x = "var(--input-padding-x-md)"
  static let account_field_font_size = "var(--input-font-size)"
  static let account_field_line_height = "var(--input-line-height)"
  static let account_field_letter_spacing = "var(--input-letter-spacing)"
  static let account_provider_button_height = "var(--account-button-height)"
  static let account_provider_button_radius = "var(--account-button-radius)"
  static let account_provider_button_padding_x = "var(--account-button-padding-x)"
  static let account_text_action_font_size = "var(--body-3-size)"
  static let account_text_action_line_height = "var(--body-3-line-height)"
  static let account_text_action_letter_spacing = "var(--body-3-tracking)"
  static let account_back_control_size = "var(--icon-size-md)"
  static let account_back_icon_size = "1.12rem"
  static let icon_size_xs = "0.9rem"
  static let icon_size_sm = "1rem"
  static let icon_size_md = "1.2rem"
  static let icon_size_lg = "1.4rem"
  static let icon_size_xl = "1.8rem"
  static let glass_blur_sm = "10px"
  static let glass_blur_md = "16px"
  static let glass_blur_lg = "24px"
  static let data_surface_bg = "var(--surface-primary, var(--bg-color))"
  static let data_surface_bg_muted = "color-mix(in srgb, var(--cc-primary-color) 3%, transparent)"
  static let data_surface_bg_hover = "var(--hover-bg-subtle)"
  static let data_surface_border = "var(--cc-color)"
  static let data_surface_border_hover = "var(--hover-border-subtle)"
  static let data_surface_radius = "var(--radius-lg)"
  static let data_surface_shadow = "var(--effect-shadow-none)"
  static let data_surface_shadow_hover = "var(--effect-shadow-hover-subtle)"
  static let data_metric_gap = "0.52rem"
  static let data_metric_padding_y = "1rem"
  static let data_metric_padding_x = "1rem"
  static let data_metric_radius = "var(--radius-lg)"
  static let data_metric_border_width = "1px"
  static let data_metric_value_xl_size = "var(--data-value-xl-size)"
  static let data_metric_value_xl_weight = "var(--data-value-xl-weight)"
  static let data_metric_value_xl_line_height = "var(--data-value-xl-line-height)"
  static let data_metric_value_xl_tracking = "var(--data-value-xl-tracking)"
  static let data_metric_value_lg_size = "var(--data-value-lg-size)"
  static let data_metric_value_lg_weight = "var(--data-value-lg-weight)"
  static let data_metric_value_lg_line_height = "var(--data-value-lg-line-height)"
  static let data_metric_value_lg_tracking = "var(--data-value-lg-tracking)"
  static let data_metric_label_size = "var(--data-label-size)"
  static let data_metric_label_weight = "var(--data-label-weight)"
  static let data_metric_label_line_height = "var(--data-label-line-height)"
  static let data_metric_label_tracking = "var(--data-label-tracking)"
  static let data_metric_caption_size = "var(--data-caption-size)"
  static let data_metric_caption_weight = "var(--data-caption-weight)"
  static let data_metric_caption_line_height = "var(--data-caption-line-height)"
  static let data_metric_caption_tracking = "var(--data-caption-tracking)"
  static let data_grid_gap = "0.68rem"
  static let data_grid_gap_compact = "0.72rem"
  static let data_grid_column_min = "100%"
  static let data_grid_column_min_compact = "11rem"
  static let data_grid_section_gap = "1rem"
  static let data_table_border = "var(--cc-color)"
  static let data_table_border_hover = "var(--hover-border-subtle)"
  static let data_table_header_bg = "color-mix(in srgb, var(--cc-primary-color) 4%, transparent)"
  static let data_table_row_bg = "transparent"
  static let data_table_row_bg_hover = "var(--hover-bg-subtle)"
  static let data_table_row_bg_selected = "var(--selected-bg-subtle)"
  static let data_table_cell_padding_y = "0.62rem"
  static let data_table_cell_padding_x = "0.72rem"
  static let data_table_cell_padding_y_dense = "0.42rem"
  static let data_table_cell_padding_x_dense = "0.56rem"
  static let chart_gap = "0.72rem"
  static let chart_padding_y = "0.78rem"
  static let chart_padding_x = "0.78rem"
  static let chart_radius = "var(--radius-lg)"
  static let chart_border = "var(--cc-color)"
  static let chart_bg = "var(--data-surface-bg)"
  static let chart_bg_muted = "var(--data-surface-bg-muted)"
  static let chart_min_height_sm = "10rem"
  static let chart_min_height_md = "13rem"
  static let chart_min_height_lg = "18rem"
  static let chart_axis_color = "var(--cc-secondary-color)"
  static let chart_axis_opacity = "0.72"
  static let chart_gridline_color = "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)"
  static let chart_gridline_width = "1px"
  static let chart_gridline_opacity = "0.62"
  static let chart_annotation_color = "var(--cc-secondary-color)"
  static let chart_annotation_opacity = "0.82"
  static let chart_series_1 = "var(--cc-primary-color)"
  static let chart_series_2 = "color-mix(in srgb, var(--cc-primary-color) 72%, transparent)"
  static let chart_series_3 = "color-mix(in srgb, var(--cc-primary-color) 52%, transparent)"
  static let chart_series_4 = "color-mix(in srgb, var(--cc-primary-color) 34%, transparent)"
  static let chart_series_5 = "color-mix(in srgb, var(--cc-primary-color) 22%, transparent)"
  static let chart_series_success = "var(--feedback-success-color)"
  static let chart_series_warning = "var(--feedback-warning-color)"
  static let chart_series_error = "var(--feedback-error-color)"
  static let chart_series_info = "var(--feedback-info-color)"
  static let chart_series_neutral = "var(--feedback-neutral-color)"
  static let chart_legend_gap = "0.56rem"
  static let chart_legend_item_gap = "0.34rem"
  static let chart_legend_marker_size = "0.48rem"
  static let chart_legend_marker_radius = "999px"
  static let chart_legend_color = "var(--cc-secondary-color)"
  static let data_progress_track_bg = "color-mix(in srgb, var(--cc-primary-color) 8%, transparent)"
  static let data_progress_fill_bg = "var(--cc-primary-color)"
  static let data_progress_height_sm = "0.22rem"
  static let data_progress_height_md = "0.34rem"
  static let data_progress_height_lg = "0.52rem"
  static let data_progress_radius = "999px"
  static let data_gauge_track_width = "1px"
  static let data_gauge_track_color = "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)"
  static let data_gauge_dot_size = "0.56rem"
  static let data_gauge_dot_bg = "var(--cc-primary-color)"
  static let data_gauge_dot_border = "var(--bg-color)"
  static let data_gauge_label_gap = "0.42rem"
  static let data_state_positive_color = "var(--feedback-success-color)"
  static let data_state_warning_color = "var(--feedback-warning-color)"
  static let data_state_negative_color = "var(--feedback-error-color)"
  static let data_state_neutral_color = "var(--feedback-neutral-color)"
  static let data_state_info_color = "var(--feedback-info-color)"
  static let data_state_positive_bg = "var(--feedback-success-bg)"
  static let data_state_warning_bg = "var(--feedback-warning-bg)"
  static let data_state_negative_bg = "var(--feedback-error-bg)"
  static let data_state_neutral_bg = "var(--feedback-neutral-bg)"
  static let data_state_info_bg = "var(--feedback-info-bg)"
  static let editor_surface_bg = "var(--surface-primary, var(--bg-color))"
  static let editor_surface_bg_muted = "color-mix(in srgb, var(--cc-primary-color) 3%, transparent)"
  static let editor_surface_bg_hover = "var(--hover-bg-subtle)"
  static let editor_surface_border = "var(--cc-color)"
  static let editor_surface_border_hover = "var(--hover-border-subtle)"
  static let editor_surface_radius = "var(--radius-lg)"
  static let editor_surface_shadow = "var(--effect-shadow-none)"
  static let editor_surface_shadow_focus = "var(--focus-ring-soft-shadow)"
  static let editor_panel_gap = "0.84rem"
  static let editor_panel_padding_y = "0.84rem"
  static let editor_panel_padding_x = "0.84rem"
  static let editor_panel_radius = "var(--radius-lg)"
  static let editor_content_size = "var(--body-1-size)"
  static let editor_content_weight = "var(--body-1-weight)"
  static let editor_content_line_height = "var(--line-height-body-relaxed)"
  static let editor_content_tracking = "var(--body-1-tracking)"
  static let editor_content_color = "var(--cc-primary-color)"
  static let editor_supporting_size = "var(--body-3-size)"
  static let editor_supporting_weight = "var(--body-3-weight)"
  static let editor_supporting_line_height = "var(--body-3-line-height)"
  static let editor_supporting_tracking = "var(--body-3-tracking)"
  static let editor_supporting_color = "var(--cc-secondary-color)"
  static let editor_content_max_width = "100%"
  static let editor_content_gap = "0.78rem"
  static let editor_paragraph_gap = "0.78rem"
  static let editor_toolbar_gap = "0.34rem"
  static let editor_toolbar_padding_y = "0.34rem"
  static let editor_toolbar_padding_x = "0.42rem"
  static let editor_toolbar_radius = "var(--radius-md)"
  static let editor_toolbar_bg = "color-mix(in srgb, var(--cc-primary-color) 4%, transparent)"
  static let editor_toolbar_border = "var(--cc-color)"
  static let editor_toolbar_control_size = "var(--control-sm-size)"
  static let editor_toolbar_control_weight = "var(--control-sm-weight)"
  static let editor_toolbar_control_line_height = "var(--control-sm-line-height)"
  static let editor_toolbar_control_tracking = "var(--control-sm-tracking)"
  static let editor_toolbar_control_color = "var(--cc-secondary-color)"
  static let editor_toolbar_control_hover_color = "var(--hover-text-color)"
  static let editor_toolbar_control_hover_bg = "var(--control-hover-bg)"
  static let editor_selection_bg = "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)"
  static let editor_selection_color = "var(--cc-primary-color)"
  static let editor_block_selected_bg = "var(--selected-bg-subtle)"
  static let editor_block_selected_border = "var(--selected-border-color)"
  static let editor_caret_color = "var(--cc-primary-color)"
  static let editor_caret_width = "1px"
  static let editor_caret_opacity = "1"
  static let editor_cursor_target_bg = "var(--hover-bg-subtle)"
  static let editor_cursor_target_border = "var(--hover-border-subtle)"
  static let editor_placeholder_size = "var(--body-2-size)"
  static let editor_placeholder_weight = "var(--body-2-weight)"
  static let editor_placeholder_line_height = "var(--body-2-line-height)"
  static let editor_placeholder_tracking = "var(--body-2-tracking)"
  static let editor_placeholder_color = "var(--cc-secondary-color)"
  static let editor_placeholder_opacity = "0.62"
  static let editor_markdown_syntax_color = "var(--cc-secondary-color)"
  static let editor_markdown_syntax_opacity = "0.72"
  static let editor_markdown_heading_color = "var(--cc-primary-color)"
  static let editor_markdown_link_color = "var(--cc-primary-color)"
  static let editor_markdown_link_underline_color = "var(--cc-color)"
  static let editor_markdown_code_bg = "color-mix(in srgb, var(--cc-primary-color) 6%, transparent)"
  static let editor_markdown_code_border = "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)"
  static let editor_block_gap = "0.84rem"
  static let editor_block_padding_y = "0.72rem"
  static let editor_block_padding_x = "0.84rem"
  static let editor_block_radius = "var(--radius-md)"
  static let editor_block_border = "var(--cc-color)"
  static let editor_block_bg = "color-mix(in srgb, var(--cc-primary-color) 3%, transparent)"
  static let editor_quote_border_width = "1px"
  static let editor_quote_border_color = "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)"
  static let editor_quote_padding_x = "0.92rem"
  static let editor_quote_color = "var(--cc-secondary-color)"
  static let editor_list_indent = "1.2rem"
  static let editor_list_gap = "0.34rem"
  static let editor_divider_color = "var(--cc-color)"
  static let editor_divider_width = "1px"
  static let editor_inline_code_size = "var(--code-inline-size)"
  static let editor_inline_code_weight = "var(--code-inline-weight)"
  static let editor_inline_code_line_height = "var(--code-inline-line-height)"
  static let editor_inline_code_tracking = "var(--code-inline-tracking)"
  static let editor_inline_code_bg = "var(--editor-markdown-code-bg)"
  static let editor_inline_code_border = "var(--editor-markdown-code-border)"
  static let editor_inline_code_radius = "var(--radius-xs)"
  static let editor_inline_code_padding_y = "0.08rem"
  static let editor_inline_code_padding_x = "0.24rem"
  static let editor_link_color = "var(--cc-primary-color)"
  static let editor_link_hover_color = "var(--hover-text-color)"
  static let editor_link_underline_color = "var(--cc-color)"
  static let editor_link_underline_hover_color = "var(--hover-border-medium)"
  static let editor_highlight_bg = "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)"
  static let editor_highlight_color = "var(--cc-primary-color)"
  static let editor_status_draft_color = "var(--feedback-neutral-text)"
  static let editor_status_saving_color = "var(--feedback-info-text)"
  static let editor_status_synced_color = "var(--feedback-success-text)"
  static let editor_status_error_color = "var(--feedback-error-text)"
  static let editor_status_warning_color = "var(--feedback-warning-text)"
  static let editor_status_size = "var(--status-sm-size)"
  static let editor_status_weight = "var(--status-sm-weight)"
  static let editor_status_line_height = "var(--status-sm-line-height)"
  static let editor_status_tracking = "var(--status-sm-tracking)"
  static let editor_publishing_panel_bg = "var(--editor-surface-bg-muted)"
  static let editor_publishing_panel_border = "var(--editor-surface-border)"
  static let editor_publishing_panel_radius = "var(--radius-lg)"
  static let editor_publishing_panel_gap = "0.72rem"
  static let editor_review_pending_bg = "var(--feedback-warning-bg)"
  static let editor_review_pending_border = "var(--feedback-warning-border)"
  static let editor_review_approved_bg = "var(--feedback-success-bg)"
  static let editor_review_approved_border = "var(--feedback-success-border)"
  static let editor_review_rejected_bg = "var(--feedback-error-bg)"
  static let editor_review_rejected_border = "var(--feedback-error-border)"
  static let feedback_success_color = "#2f8f5b"
  static let feedback_warning_color = "#b9822b"
  static let feedback_error_color = "#b84a4a"
  static let feedback_info_color = "#4f7fa8"
  static let feedback_neutral_color = "var(--cc-secondary-color)"
  static let status_active_color = "var(--feedback-success-color)"
  static let status_pending_color = "var(--feedback-warning-color)"
  static let status_error_color = "var(--feedback-error-color)"
  static let status_info_color = "var(--feedback-info-color)"
  static let status_muted_color = "var(--feedback-neutral-color)"
  static let feedback_success_bg = "color-mix(in srgb, var(--feedback-success-color) 10%, transparent)"
  static let feedback_warning_bg = "color-mix(in srgb, var(--feedback-warning-color) 10%, transparent)"
  static let feedback_error_bg = "color-mix(in srgb, var(--feedback-error-color) 10%, transparent)"
  static let feedback_info_bg = "color-mix(in srgb, var(--feedback-info-color) 10%, transparent)"
  static let feedback_neutral_bg = "color-mix(in srgb, var(--feedback-neutral-color) 8%, transparent)"
  static let feedback_success_bg_strong = "color-mix(in srgb, var(--feedback-success-color) 16%, transparent)"
  static let feedback_warning_bg_strong = "color-mix(in srgb, var(--feedback-warning-color) 16%, transparent)"
  static let feedback_error_bg_strong = "color-mix(in srgb, var(--feedback-error-color) 16%, transparent)"
  static let feedback_info_bg_strong = "color-mix(in srgb, var(--feedback-info-color) 16%, transparent)"
  static let feedback_neutral_bg_strong = "color-mix(in srgb, var(--feedback-neutral-color) 12%, transparent)"
  static let feedback_success_border = "color-mix(in srgb, var(--feedback-success-color) 28%, transparent)"
  static let feedback_warning_border = "color-mix(in srgb, var(--feedback-warning-color) 30%, transparent)"
  static let feedback_error_border = "color-mix(in srgb, var(--feedback-error-color) 32%, transparent)"
  static let feedback_info_border = "color-mix(in srgb, var(--feedback-info-color) 28%, transparent)"
  static let feedback_neutral_border = "color-mix(in srgb, var(--feedback-neutral-color) 18%, transparent)"
  static let feedback_success_text = "var(--feedback-success-color)"
  static let feedback_warning_text = "var(--feedback-warning-color)"
  static let feedback_error_text = "var(--feedback-error-color)"
  static let feedback_info_text = "var(--feedback-info-color)"
  static let feedback_neutral_text = "var(--feedback-neutral-color)"
  static let feedback_title_size = "var(--alert-title-size)"
  static let feedback_title_weight = "var(--alert-title-weight)"
  static let feedback_title_line_height = "var(--alert-title-line-height)"
  static let feedback_title_tracking = "var(--alert-title-tracking)"
  static let feedback_body_size = "var(--alert-body-size)"
  static let feedback_body_weight = "var(--alert-body-weight)"
  static let feedback_body_line_height = "var(--alert-body-line-height)"
  static let feedback_body_tracking = "var(--alert-body-tracking)"
  static let feedback_icon_size_sm = "0.78rem"
  static let feedback_icon_size_md = "0.96rem"
  static let feedback_icon_size_lg = "1.12rem"
  static let feedback_icon_opacity = "0.82"
  static let feedback_icon_opacity_strong = "1"
  static let status_badge_gap = "0.34rem"
  static let status_badge_padding_y = "0.22rem"
  static let status_badge_padding_x = "0.48rem"
  static let status_badge_radius = "999px"
  static let status_badge_border_width = "1px"
  static let status_badge_size = "var(--status-sm-size)"
  static let status_badge_weight = "var(--status-sm-weight)"
  static let status_badge_line_height = "var(--status-sm-line-height)"
  static let status_badge_tracking = "var(--status-sm-tracking)"
  static let status_badge_active_bg = "var(--feedback-success-bg)"
  static let status_badge_active_border = "var(--feedback-success-border)"
  static let status_badge_active_text = "var(--feedback-success-text)"
  static let status_badge_pending_bg = "var(--feedback-warning-bg)"
  static let status_badge_pending_border = "var(--feedback-warning-border)"
  static let status_badge_pending_text = "var(--feedback-warning-text)"
  static let status_badge_error_bg = "var(--feedback-error-bg)"
  static let status_badge_error_border = "var(--feedback-error-border)"
  static let status_badge_error_text = "var(--feedback-error-text)"
  static let status_badge_info_bg = "var(--feedback-info-bg)"
  static let status_badge_info_border = "var(--feedback-info-border)"
  static let status_badge_info_text = "var(--feedback-info-text)"
  static let status_badge_neutral_bg = "var(--feedback-neutral-bg)"
  static let status_badge_neutral_border = "var(--feedback-neutral-border)"
  static let status_badge_neutral_text = "var(--feedback-neutral-text)"
  static let alert_gap = "0.68rem"
  static let alert_padding_y = "0.92rem"
  static let alert_padding_x = "1rem"
  static let alert_radius = "var(--radius-md)"
  static let alert_border_width = "1px"
  static let alert_success_bg = "var(--feedback-success-bg-strong)"
  static let alert_success_border = "var(--feedback-success-border)"
  static let alert_success_text = "var(--feedback-success-text)"
  static let alert_warning_bg = "var(--feedback-warning-bg-strong)"
  static let alert_warning_border = "var(--feedback-warning-border)"
  static let alert_warning_text = "var(--feedback-warning-text)"
  static let alert_error_bg = "var(--feedback-error-bg-strong)"
  static let alert_error_border = "var(--feedback-error-border)"
  static let alert_error_text = "var(--feedback-error-text)"
  static let alert_info_bg = "var(--feedback-info-bg-strong)"
  static let alert_info_border = "var(--feedback-info-border)"
  static let alert_info_text = "var(--feedback-info-text)"
  static let alert_neutral_bg = "var(--feedback-neutral-bg-strong)"
  static let alert_neutral_border = "var(--feedback-neutral-border)"
  static let alert_neutral_text = "var(--feedback-neutral-text)"
  static let toast_gap = "0.52rem"
  static let toast_padding_y = "0.78rem"
  static let toast_padding_x = "0.92rem"
  static let toast_radius = "var(--radius-md)"
  static let toast_border_width = "1px"
  static let toast_shadow = "var(--effect-shadow-hover-subtle)"
  static let toast_success_bg = "var(--feedback-success-bg-strong)"
  static let toast_success_border = "var(--feedback-success-border)"
  static let toast_success_text = "var(--feedback-success-text)"
  static let toast_warning_bg = "var(--feedback-warning-bg-strong)"
  static let toast_warning_border = "var(--feedback-warning-border)"
  static let toast_warning_text = "var(--feedback-warning-text)"
  static let toast_error_bg = "var(--feedback-error-bg-strong)"
  static let toast_error_border = "var(--feedback-error-border)"
  static let toast_error_text = "var(--feedback-error-text)"
  static let toast_info_bg = "var(--feedback-info-bg-strong)"
  static let toast_info_border = "var(--feedback-info-border)"
  static let toast_info_text = "var(--feedback-info-text)"
  static let validation_success_color = "var(--feedback-success-color)"
  static let validation_warning_color = "var(--feedback-warning-color)"
  static let validation_error_color = "var(--feedback-error-color)"
  static let validation_info_color = "var(--feedback-info-color)"
  static let validation_success_bg = "var(--feedback-success-bg)"
  static let validation_warning_bg = "var(--feedback-warning-bg)"
  static let validation_error_bg = "var(--feedback-error-bg)"
  static let validation_info_bg = "var(--feedback-info-bg)"
  static let validation_success_border = "var(--feedback-success-border)"
  static let validation_warning_border = "var(--feedback-warning-border)"
  static let validation_error_border = "var(--feedback-error-border)"
  static let validation_info_border = "var(--feedback-info-border)"
  static let system_message_gap = "0.68rem"
  static let system_message_padding_y = "1rem"
  static let system_message_padding_x = "1rem"
  static let system_message_radius = "var(--radius-lg)"
  static let system_message_bg = "var(--feedback-neutral-bg)"
  static let system_message_border = "var(--feedback-neutral-border)"
  static let system_message_title_color = "var(--cc-primary-color)"
  static let system_message_body_color = "var(--cc-secondary-color)"
  static let shape_control_radius = "var(--radius-pill)"
  static let shape_toggle_radius = "var(--radius-pill)"
  static let shape_icon_button_radius = "var(--radius-circle)"
  static let shape_card_radius = "var(--radius-lg)"
  static let shape_panel_radius = "var(--radius-xl)"
  static let shape_dialog_radius = "var(--radius-dialog)"
  static let shape_overlay_radius = "var(--radius-dialog)"
  static let shape_subpanel_radius = "var(--radius-lg)"
  static let control_radius = "var(--shape-control-radius)"
  static let control_radius_pill = "var(--radius-pill)"
  static let control_gap = "0.42rem"
  static let control_font_size = "0.9rem"
  static let control_font_weight = "400"
  static let control_line_height = "1.2"
  static let control_tracking = "-0.01em"
  static let control_width_min = "2.75rem"
  static let border_width_thin = "1px"
  static let space_8 = "2rem"
  static let z_above = "20"
  static let viewport_width = "100vw"
  static let viewport_height = "100vh"
  static let control_surface = "color-mix(in srgb, var(--surface-color, var(--bg-color)) 82%, transparent)"
  static let control_surface_hover = "var(--hover-bg-medium)"
  static let control_surface_active = "var(--active-bg-medium)"
  static let control_border_unified = "var(--control-border-color, var(--cc-color))"
  static let control_border_hover_unified = "var(--hover-border-medium)"
  static let control_text_unified = "var(--cc-color)"
  static let control_text_hover_unified = "var(--hover-text-color)"
  static let close_control_size = "2.4rem"
  static let close_control_radius = "var(--shape-icon-button-radius)"
  static let close_control_line_width = "1.05rem"
  static let close_control_line_height = "1px"
  static let close_control_line_radius = "var(--radius-pill)"
  static let close_control_surface = "transparent"
  static let close_control_surface_hover = "var(--hover-bg-medium)"
  static let close_control_border = "transparent"
  static let close_control_border_hover = "var(--hover-border-medium)"
  static let close_control_color = "var(--cc-color)"
  static let close_control_color_hover = "var(--cc-color)"
  static let panel_surface_unified = "color-mix(in srgb, var(--surface-color, var(--bg-color)) 86%, transparent)"
  static let panel_border_unified = "var(--control-border-color, var(--cc-color))"
  static let panel_shadow_unified = "var(--dialog-overlay-shadow)"
  static let panel_blur_unified = "var(--dialog-overlay-panel-blur)"
  static let panel_saturate_unified = "1.18"
  static let panel_radius_unified = "var(--shape-panel-radius)"
  static let dialog_radius_unified = "var(--shape-dialog-radius)"
  static let overlay_radius_unified = "var(--shape-overlay-radius)"
  static let overlay_motion_duration = "320ms"
  static let overlay_motion_ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  static let overlay_transform_closed = "var(--dialog-overlay-transform-closed)"
  static let overlay_transform_open = "var(--dialog-overlay-transform-open)"
  static let overlay_opacity_closed = "0"
  static let overlay_opacity_open = "1"
  static let interaction_motion_fast = "180ms"
  static let interaction_motion_medium = "220ms"
  static let interaction_motion_slow = "320ms"
  static let interaction_ease_standard = "cubic-bezier(0.22, 1, 0.36, 1)"
  static let interaction_transition_control = "background-color var(--interaction-motion-medium) var(--interaction-ease-standard), border-color var(--interaction-motion-medium) var(--interaction-ease-standard), color var(--interaction-motion-medium) var(--interaction-ease-standard), opacity var(--interaction-motion-medium) var(--interaction-ease-standard), transform var(--interaction-motion-medium) var(--interaction-ease-standard)"
  static let state_opacity_idle = "1"
  static let state_opacity_hover_subtle = "0.82"
  static let state_opacity_hover_medium = "0.9"
  static let state_opacity_hover_strong = "1"
  static let state_opacity_active = "0.72"
  static let state_opacity_selected = "1"
  static let state_opacity_disabled = "0.38"
  static let state_opacity_muted = "0.62"
  static let hover_bg_subtle = "color-mix(in srgb, var(--cc-primary-color) 4%, transparent)"
  static let hover_bg_medium = "color-mix(in srgb, var(--cc-primary-color) 7%, transparent)"
  static let hover_bg_strong = "color-mix(in srgb, var(--cc-primary-color) 11%, transparent)"
  static let hover_bg_inverted = "var(--cc-primary-color)"
  static let hover_text_color = "var(--cc-primary-color)"
  static let hover_text_muted_color = "var(--cc-secondary-color)"
  static let hover_text_inverted_color = "var(--bg-color)"
  static let hover_border_subtle = "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)"
  static let hover_border_medium = "color-mix(in srgb, var(--cc-primary-color) 18%, transparent)"
  static let hover_border_strong = "color-mix(in srgb, var(--cc-primary-color) 28%, transparent)"
  static let focus_ring_width = "2px"
  static let focus_ring_offset = "3px"
  static let focus_ring_color = "color-mix(in srgb, var(--cc-primary-color) 52%, transparent)"
  static let focus_ring_shadow = "0 0 0 var(--focus-ring-width) var(--focus-ring-color)"
  static let focus_ring_soft_color = "color-mix(in srgb, var(--cc-primary-color) 24%, transparent)"
  static let focus_ring_soft_shadow = "0 0 0 var(--focus-ring-width) var(--focus-ring-soft-color)"
  static let active_bg_subtle = "color-mix(in srgb, var(--cc-primary-color) 8%, transparent)"
  static let active_bg_medium = "color-mix(in srgb, var(--cc-primary-color) 12%, transparent)"
  static let active_border_color = "color-mix(in srgb, var(--cc-primary-color) 24%, transparent)"
  static let active_transform = "translateY(0)"
  static let active_scale = "0.99"
  static let selected_bg_subtle = "color-mix(in srgb, var(--cc-primary-color) 6%, transparent)"
  static let selected_bg_medium = "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)"
  static let selected_text_color = "var(--cc-primary-color)"
  static let selected_border_color = "color-mix(in srgb, var(--cc-primary-color) 20%, transparent)"
  static let selected_indicator_color = "var(--cc-primary-color)"
  static let selected_indicator_opacity = "1"
  static let disabled_opacity = "var(--state-opacity-disabled)"
  static let disabled_cursor = "not-allowed"
  static let disabled_filter = "saturate(0.4)"
  static let effect_lift_y_subtle = "-1px"
  static let effect_lift_y_medium = "-2px"
  static let effect_lift_y_strong = "-4px"
  static let effect_scale_subtle = "1.01"
  static let effect_scale_medium = "1.018"
  static let effect_scale_strong = "1.028"
  static let effect_press_scale = "var(--active-scale)"
  static let hover_transform_none = "none"
  static let hover_transform_lift_subtle = "translateY(var(--effect-lift-y-subtle))"
  static let hover_transform_lift_medium = "translateY(var(--effect-lift-y-medium))"
  static let hover_transform_scale_subtle = "scale(var(--effect-scale-subtle))"
  static let effect_blur_xs = "4px"
  static let effect_blur_sm = "8px"
  static let effect_blur_md = "14px"
  static let effect_blur_lg = "22px"
  static let effect_blur_xl = "34px"
  static let effect_saturate_soft = "saturate(1.08)"
  static let effect_saturate_strong = "saturate(1.18)"
  static let effect_brightness_hover = "brightness(1.04)"
  static let effect_brightness_muted = "brightness(0.92)"
  static let effect_shadow_none = "none"
  static let effect_shadow_hover_subtle = "0 10px 28px color-mix(in srgb, var(--cc-primary-color) 8%, transparent)"
  static let effect_shadow_hover_medium = "0 18px 52px color-mix(in srgb, var(--cc-primary-color) 12%, transparent)"
  static let effect_shadow_hover_strong = "0 28px 80px color-mix(in srgb, var(--cc-primary-color) 16%, transparent)"
  static let overlay_opacity_subtle = "0.18"
  static let overlay_opacity_medium = "0.38"
  static let overlay_opacity_strong = "0.62"
  static let overlay_bg_subtle = "color-mix(in srgb, var(--bg-color) 72%, transparent)"
  static let overlay_bg_medium = "color-mix(in srgb, var(--bg-color) 84%, transparent)"
  static let overlay_bg_strong = "color-mix(in srgb, var(--bg-color) 92%, transparent)"
  static let dialog_overlay_viewport_gap = "24px"
  static let dialog_overlay_viewport_gap_mobile = "20px"
  static let dialog_overlay_shadow = "0 20px 60px color-mix(in srgb, var(--shadow-color, #000000) 8%, transparent)"
  static let dialog_overlay_shadow_dark = "0 24px 70px color-mix(in srgb, var(--shadow-color, #000000) 24%, transparent)"
  static let dialog_overlay_row_shadow = "0 14px 34px color-mix(in srgb, var(--shadow-color, #000000) 4%, transparent)"
  static let dialog_overlay_row_shadow_light = "0 14px 34px color-mix(in srgb, var(--shadow-color, #000000) 3.5%, transparent)"
  static let dialog_overlay_row_shadow_dark = "0 14px 34px color-mix(in srgb, var(--shadow-color, #000000) 18%, transparent)"
  static let dialog_overlay_radius = "1.9rem"
  static let dialog_overlay_radius_mobile = "1.5rem"
  static let dialog_overlay_card_radius = "1rem"
  static let dialog_overlay_subitem_radius = "0.9rem"
  static let dialog_overlay_pill_radius = "999px"
  static let dialog_overlay_backdrop_blur = "16px"
  static let dialog_overlay_panel_blur = "18px"
  static let dialog_overlay_footer_separator_opacity = "0.35"
  static let dialog_overlay_shell_gap = "0.9rem"
  static let dialog_overlay_panel_min_height = "24rem"
  static let dialog_overlay_panel_padding_y = "1.25rem"
  static let dialog_overlay_panel_padding_x = "1.25rem"
  static let dialog_overlay_panel_padding_y_mobile = "0.95rem"
  static let dialog_overlay_panel_padding_x_mobile = "0.95rem"
  static let dialog_overlay_transform_closed = "translateY(1.2rem) scale(0.985)"
  static let dialog_overlay_transform_open = "translateY(0) scale(1)"
  static let dialog_overlay_opacity_closed = "0"
  static let dialog_overlay_opacity_open = "1"
  static let dialog_consent_header_gap = "0.82rem"
  static let dialog_consent_header_gap_mobile = "0.72rem"
  static let dialog_consent_header_padding_bottom = "1.14rem"
  static let dialog_consent_header_padding_bottom_mobile = "0.97rem"
  static let dialog_consent_body_padding_top = "0.64rem"
  static let dialog_consent_body_padding_top_mobile = "0.51rem"
  static let dialog_consent_body_padding_inline = "0.52rem"
  static let dialog_consent_body_padding_inline_mobile = "0.36rem"
  static let dialog_consent_content_gutter = "1.42rem"
  static let dialog_consent_content_gutter_mobile = "1.08rem"
  static let dialog_consent_body_edge_inset = "0.52rem"
  static let dialog_consent_body_edge_inset_mobile = "0.36rem"
  static let dialog_consent_row_margin_bottom = "1rem"
  static let dialog_consent_subitems_margin_top = "0.06rem"
  static let dialog_consent_settings_intro_margin_bottom = "1rem"
  static let dialog_consent_eyebrow_size = "0.78rem"
  static let dialog_consent_eyebrow_weight = "400"
  static let dialog_consent_eyebrow_line_height = "1.2"
  static let dialog_consent_eyebrow_tracking = "0.08em"
  static let dialog_consent_copy_size = "0.95rem"
  static let dialog_consent_copy_weight = "300"
  static let dialog_consent_copy_line_height = "1.58"
  static let dialog_consent_copy_tracking = "-0.015em"
  static let dialog_consent_note_legal_size = "0.8rem"
  static let dialog_consent_note_legal_line_height = "1.45"
  static let dialog_consent_strong_weight = "400"
  static let dialog_consent_mobile_title_size = "1.46rem"
  static let dialog_consent_mobile_copy_size = "0.9rem"
  static let dialog_consent_action_gap = "0.72rem"
  static let dialog_consent_action_min_height = "3rem"
  static let dialog_consent_action_min_height_mobile = "2.86rem"
  static let dialog_consent_action_padding_y = "0.82rem"
  static let dialog_consent_action_padding_x = "1rem"
  static let dialog_consent_action_padding_y_mobile = "0.78rem"
  static let dialog_consent_action_padding_x_mobile = "0.94rem"
  static let dialog_consent_action_size = "0.94rem"
  static let dialog_consent_action_weight = "300"
  static let dialog_consent_action_line_height = "1.2"
  static let dialog_consent_action_tracking = "-0.015em"
  static let dialog_consent_row_topline_gap = "0.72rem"
  static let dialog_consent_row_topline_gap_mobile = "0.62rem"
  static let dialog_consent_row_topline_padding_y = "1rem"
  static let dialog_consent_row_topline_padding_y_mobile = "0.92rem"
  static let dialog_consent_row_summary_gap = "0.8rem"
  static let dialog_consent_row_copy_gap = "0.22rem"
  static let dialog_consent_row_title_size = "0.94rem"
  static let dialog_consent_row_title_weight = "400"
  static let dialog_consent_row_title_line_height = "1.2"
  static let dialog_consent_row_title_tracking = "-0.016em"
  static let dialog_consent_row_copy_size = "0.84rem"
  static let dialog_consent_row_copy_size_mobile = "0.78rem"
  static let dialog_consent_row_copy_weight = "300"
  static let dialog_consent_row_copy_line_height = "1.5"
  static let dialog_consent_row_copy_tracking = "-0.012em"
  static let dialog_consent_row_status_size = "0.76rem"
  static let dialog_consent_row_status_weight = "400"
  static let dialog_consent_row_status_line_height = "1.2"
  static let dialog_consent_row_status_tracking = "-0.01em"
  static let dialog_consent_row_detail_gap = "0.62rem"
  static let dialog_consent_row_detail_padding_y = "0.92rem"
  static let dialog_consent_row_detail_padding_y_mobile = "0.82rem"
  static let dialog_consent_row_link_size = "0.8rem"
  static let dialog_consent_row_link_weight = "400"
  static let dialog_consent_row_link_line_height = "1.3"
  static let dialog_consent_row_link_tracking = "-0.01em"
  static let dialog_consent_row_hover = "color-mix(in srgb, var(--cc-primary-color) 12%, transparent)"
  static let dialog_consent_row_icon_size = "1.68rem"
  static let dialog_consent_row_expand_size = "0.92rem"
  static let dialog_consent_row_expand_icon_size = "0.68rem"
  static let dialog_consent_row_expand_icon_size_mobile = "0.64rem"
  static let dialog_consent_brand_gap = "1.04rem"
  static let dialog_consent_brand_margin_top = "0.28rem"
  static let dialog_consent_brand_margin_bottom = "0.78rem"
  static let dialog_consent_brand_symbol_wrap_size = "2.4rem"
  static let dialog_consent_brand_symbol_size = "2.3rem"
  static let dialog_consent_brand_symbol_size_mobile = "1.9rem"
  static let dialog_consent_brand_wordmark_width = "11.8rem"
  static let dialog_consent_brand_wordmark_height = "0.96rem"
  static let dialog_consent_brand_wordmark_height_mobile = "0.84rem"
  static let dialog_consent_learning_shell_min_height = "10.5rem"
  static let dialog_consent_learning_shell_radius = "1rem"
  static let dialog_consent_learning_shell_padding = "0.88rem"
  static let dialog_consent_learning_card_padding_mobile = "0.84rem"
  static let dialog_consent_learning_icon_size = "1.68rem"
  static let dialog_consent_learning_rail_gap = "1rem"
  static let dialog_consent_learning_card_gap = "0.82rem"
  static let dialog_consent_learning_copy_gap = "0.28rem"
  static let dialog_consent_copy_stack_gap = "0.56rem"
  static let dialog_consent_learning_title_size = "0.94rem"
  static let dialog_consent_learning_title_size_mobile = "0.9rem"
  static let dialog_consent_learning_title_weight = "400"
  static let dialog_consent_learning_title_line_height = "1.22"
  static let dialog_consent_learning_title_tracking = "-0.016em"
  static let dialog_consent_learning_copy_size = "0.84rem"
  static let dialog_consent_learning_copy_size_mobile = "0.8rem"
  static let dialog_consent_learning_copy_weight = "300"
  static let dialog_consent_learning_copy_line_height = "1.52"
  static let dialog_consent_learning_copy_tracking = "-0.01em"
  static let dialog_consent_subitem_gap = "0.62rem"
  static let dialog_consent_subitem_layout_gap = "0.9rem"
  static let dialog_consent_subitem_padding_y = "0.92rem"
  static let dialog_consent_subitem_state_margin_top_mobile = "0.12rem"
  static let dialog_consent_subitem_copy_gap = "0.2rem"
  static let dialog_consent_subitem_title_size = "0.86rem"
  static let dialog_consent_subitem_title_weight = "400"
  static let dialog_consent_subitem_title_line_height = "1.2"
  static let dialog_consent_subitem_title_tracking = "-0.014em"
  static let dialog_consent_subitem_copy_size = "0.76rem"
  static let dialog_consent_subitem_copy_weight = "300"
  static let dialog_consent_subitem_copy_line_height = "1.45"
  static let dialog_consent_subitem_copy_tracking = "-0.01em"
  static let dialog_consent_subitem_state_size = "0.74rem"
  static let dialog_consent_subitem_state_weight = "400"
  static let dialog_consent_subitem_state_line_height = "1.2"
  static let dialog_consent_subitem_state_tracking = "-0.01em"
  static let dialog_consent_sticky_actions_padding_top = "0.72rem"
  static let dialog_consent_sticky_actions_padding_top_mobile = "0.62rem"
  static let dialog_consent_sticky_actions_padding_bottom = "1.12rem"
  static let dialog_consent_sticky_actions_padding_bottom_mobile = "1rem"
  static let dialog_consent_footer_gap = "1rem"
  static let dialog_consent_footer_gap_mobile = "0.78rem"
  static let dialog_consent_footer_link_row_gap = "0.5rem"
  static let dialog_consent_footer_separator_size = "0.95rem"
  static let dialog_consent_footer_separator_weight = "400"
  static let dialog_consent_footer_separator_line_height = "1"
  static let dialog_consent_footer_separator_margin_inline = "1rem"
  static let dialog_consent_footer_link_size = "0.78rem"
  static let dialog_consent_footer_link_weight = "400"
  static let dialog_consent_footer_link_line_height = "1.3"
  static let dialog_consent_footer_link_tracking = "-0.01em"
  static let dialog_consent_footer_language_gap = "0.42rem"
  static let dialog_consent_footer_language_min_height = "2.2rem"
  static let dialog_consent_footer_language_padding_y = "0.56rem"
  static let dialog_consent_footer_language_padding_x = "0.82rem"
  static let dialog_consent_footer_language_label_size = "0.74rem"
  static let dialog_consent_footer_language_label_weight = "400"
  static let dialog_consent_footer_language_label_line_height = "1.2"
  static let dialog_consent_footer_language_label_tracking = "-0.01em"
  static let dialog_consent_footer_language_value_size = "0.78rem"
  static let dialog_consent_footer_language_value_weight = "400"
  static let dialog_consent_footer_language_value_line_height = "1.2"
  static let dialog_consent_footer_language_value_tracking = "-0.01em"
  static let feedback_success_bg_hover = "color-mix(in srgb, var(--feedback-success-color, var(--cc-primary-color)) 10%, transparent)"
  static let feedback_warning_bg_hover = "color-mix(in srgb, var(--feedback-warning-color, var(--cc-primary-color)) 10%, transparent)"
  static let feedback_error_bg_hover = "color-mix(in srgb, var(--feedback-error-color, var(--cc-primary-color)) 10%, transparent)"
  static let feedback_info_bg_hover = "color-mix(in srgb, var(--feedback-info-color, var(--cc-primary-color)) 10%, transparent)"
  static let nav_hover_text_color = "var(--hover-text-color)"
  static let nav_hover_opacity = "var(--state-opacity-hover-strong)"
  static let nav_hover_bg = "transparent"
  static let nav_hover_transform = "var(--hover-transform-none)"
  static let nav_hover_text_only_bg = "transparent"
  static let nav_hover_text_only_border = "transparent"
  static let nav_hover_text_only_color = "var(--hover-text-color)"
  static let nav_active_text_color = "var(--selected-text-color)"
  static let nav_active_indicator_color = "var(--selected-indicator-color)"
  static let nav_active_indicator_opacity = "var(--selected-indicator-opacity)"
  static let local_nav_hover_text_color = "var(--hover-text-color)"
  static let local_nav_hover_opacity = "var(--state-opacity-hover-strong)"
  static let local_nav_hover_text_only_bg = "var(--nav-hover-text-only-bg)"
  static let local_nav_hover_text_only_border = "var(--nav-hover-text-only-border)"
  static let local_nav_hover_text_only_color = "var(--nav-hover-text-only-color)"
  static let local_nav_active_text_color = "var(--selected-text-color)"
  static let local_nav_active_indicator_color = "var(--selected-indicator-color)"
  static let interactive_icon_stroke_width = "0"
  static let interactive_icon_stroke_width_hover = "var(--interactive-icon-stroke-width)"
  static let interactive_icon_stroke_width_active = "1.5"
  static let interactive_icon_stroke_width_selected = "var(--interactive-icon-stroke-width-active)"
  static let interactive_icon_stroke_width_current = "var(--interactive-icon-stroke-width-active)"
  static let interactive_icon_stroke_width_disabled = "var(--interactive-icon-stroke-width)"
  static let interactive_icon_stroke_transition = "none"
  static let interactive_icon_transform = "none"
  static let toggle_track_bg = "var(--toggle-track-bg-off)"
  static let control_hover_bg = "var(--hover-bg-subtle)"
  static let control_hover_border_color = "var(--hover-border-medium)"
  static let control_hover_text_color = "var(--hover-text-color)"
  static let control_hover_transform = "var(--hover-transform-lift-subtle)"
  static let control_active_bg = "var(--active-bg-medium)"
  static let control_active_border_color = "var(--active-border-color)"
  static let control_active_transform = "scale(var(--effect-press-scale))"
  static let button_hover_bg = "var(--hover-bg-medium)"
  static let button_hover_border_color = "var(--hover-border-medium)"
  static let button_hover_text_color = "var(--hover-text-color)"
  static let button_hover_transform = "var(--hover-transform-lift-subtle)"
  static let shape_composer_radius = "1rem"
  static let control_radius_composer = "var(--shape-composer-radius)"
  static let profile_hover_bg = "var(--hover-bg-subtle)"
  static let profile_hover_border_color = "var(--hover-border-subtle)"
  static let profile_hover_transform = "var(--hover-transform-lift-subtle)"
  static let profile_card_hover_shadow = "var(--effect-shadow-hover-subtle)"
  static let profile_media_hover_filter = "var(--effect-brightness-hover)"
  static let product_hover_bg = "var(--hover-bg-subtle)"
  static let product_hover_border_color = "var(--hover-border-medium)"
  static let product_hover_transform = "var(--hover-transform-lift-subtle)"
  static let product_card_hover_shadow = "var(--effect-shadow-hover-subtle)"
  static let product_media_hover_filter = "var(--effect-brightness-hover)"
  static let marketing_hover_bg = "var(--hover-bg-medium)"
  static let marketing_hover_border_color = "var(--hover-border-strong)"
  static let marketing_hover_transform = "var(--hover-transform-lift-medium)"
  static let marketing_card_hover_shadow = "var(--effect-shadow-hover-medium)"
  static let marketing_media_hover_filter = "var(--effect-brightness-hover)"
  static let spacing_none = "0"
  static let size_full = "100%"
  static let grid_column_single = "1fr"
  static let border_width_hairline = "1px"
  static let site_max_width = "1320px"
  static let site_header_height = "72px"
  static let header_height = "var(--site-header-height)"
  static let footer_height = "72px"
  static let footer_gutter = "var(--site-gutter, 24px)"
  static let surface_color = "var(--bg-color, transparent)"
  static let shadow_color = "#000000"
  static let panel_width = "960px"
  static let content_width = "var(--site-max-width)"
  static let page_gutter = "var(--site-gutter, 24px)"
  static let z_overlay_modal = "80"
  static let background_color = "var(--bg-color, transparent)"
  static let bg_primary_color = "var(--bg-color, transparent)"
  static let border_soft = "var(--cc-color, color-mix(in srgb, var(--cc-color, #ffffff) 12%, transparent))"
  static let control_border_color = "var(--control-border, var(--cc-color, color-mix(in srgb, var(--cc-color, #ffffff) 12%, transparent)))"
  static let cursor_accent_color = "var(--link-color, var(--color-primary1, currentColor))"
  static let duration_instant = "0ms"
  static let font_family = "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
  static let font_family_sans = "var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif)"
  static let home_panel_radius = "var(--cc-home-platform-radius)"
  static let menu_icon = "currentColor"
  static let space_2 = "0.5rem"
  static let space_3 = "0.75rem"
  static let space_4 = "1rem"
  static let space_5 = "1.25rem"
  static let space_6 = "1.5rem"
  static let space_9 = "2.25rem"
  static let spacing_2xs = "0.375rem"
  static let spacing_3xs = "0.25rem"
  static let state_opacity_high = "0.88"
  static let state_opacity_strong = "1"
  static let status_danger_color = "#d94c4c"
  static let status_success_color = "#4f9f6e"
  static let status_warning_color = "#c79a3b"
  static let surface_hover = "color-mix(in srgb, var(--surface-color) 88%, var(--cc-color, #ffffff) 12%)"
  static let text_muted_color = "var(--cc-secondary-color, color-mix(in srgb, var(--cc-color, #ffffff) 62%, transparent))"
  static let type_body_regular_weight = "400"
  static let type_body_sm_line_height = "1.5"
  static let type_body_sm_size = "0.875rem"
  static let type_body_tracking = "0"
  static let site_gutter = "4vw"
  static let site_rail_width = "calc(100% - (var(--site-gutter) * 2))"
  static let site_gutter_min = "18px"
  static let site_gutter_max = "96px"
  static let site_inline_gutter = "clamp(var(--site-gutter-min), var(--site-gutter), var(--site-gutter-max))"
  static let site_rail_measure = "min(var(--site-rail-width), calc(100% - (var(--site-inline-gutter) * 2)))"
  static let chrome_rail_width = "var(--site-rail-measure)"
  static let footer_rail_width = "var(--site-rail-measure)"
  static let menu_rail_width = "var(--site-rail-measure)"
  static let chrome_padding_y_sm = "0.8rem"
  static let chrome_padding_y_md = "0.9rem"
  static let chrome_gap_sm = "0.9rem"
  static let chrome_gap_md = "1rem"
  static let footer_margin_top = "0.6rem"
  static let footer_padding_top = "0.8rem"
  static let footer_padding_bottom = "0.9rem"
  static let menu_padding_top = "0.9rem"
  static let menu_padding_bottom = "0.9rem"
  static let section_min_height = "100vh"
  static let section_min_height_stable = "100svh"
  static let stage_circle_desktop = "1200px"
  static let stage_circle_mobile = "600px"
  static let stage_circle_max_desktop = "1800px"
  static let stage_circle_max_mobile = "1200px"
  static let stage_circle_vh_cap = "90vh"
  static let stage_circle_vw_cap = "96vw"
  static let intro_logo_max = "420px"
  static let intro_logo_mobile_max = "360px"
  static let drawer_width_sm = "22rem"
  static let drawer_width_md = "28rem"
  static let drawer_width_lg = "34rem"
  static let drawer_padding = "1.25rem"
  static let layout_home_announcement_size = "1.8rem"
  static let layout_home_announcement_weight = "600"
  static let layout_home_announcement_tracking = "0.02em"
  static let layout_home_announcement_secondary_size = "1.5rem"
  static let layout_home_announcement_secondary_weight = "400"
  static let layout_home_announcement_secondary_tracking = "0.05em"
  static let layout_home_announcement_mobile_size = "1.35rem"
  static let layout_home_announcement_mobile_line_height = "1.25"
  static let layout_home_announcement_secondary_mobile_size = "1.05rem"
  static let layout_home_announcement_secondary_mobile_tracking = "0.06em"
  static let layout_home_enter_width = "2.9rem"
  static let layout_home_enter_height = "4.4rem"
  static let layout_home_enter_padding_y = "0.7rem"
  static let layout_home_enter_padding_x = "0.6rem"
  static let layout_home_enter_size = "0.95rem"
  static let layout_home_enter_weight = "300"
  static let layout_home_enter_tracking = "0.14em"
  static let layout_home_enter_border_width = "1px"
  static let layout_home_enter_radius = "999px"
  static let layout_home_enter_icon_size = "1.42rem"
  static let layout_home_enter_hover_y = "-1px"
  static let layout_home_enter_hover_opacity = "0.95"
  static let layout_home_enter_breathe_duration = "6s"
  static let layout_home_enter_breathe_y = "-4px"
  static let layout_home_enter_mobile_width = "2.7rem"
  static let layout_home_enter_mobile_height = "4.05rem"
  static let layout_home_enter_mobile_padding_y = "0.62rem"
  static let layout_home_enter_mobile_padding_x = "0.55rem"
  static let layout_home_enter_mobile_size = "0.85rem"
  static let layout_home_circle_blur = "14px"
  static let layout_home_circle_halo_scale = "1.3"
  static let layout_home_circle_halo_opacity = "0.9"
  static let layout_home_circle_start_scale = "0.80"
  static let layout_home_circle_mid_scale = "1.12"
  static let layout_home_circle_breathe_duration = "2.6s"
  static let layout_home_halo_start_opacity = "0.55"
  static let layout_home_halo_breathe_duration = "3.4s"
  static let layout_home_video_overlay_blur = "20px"
  static let layout_home_video_overlay_saturate = "1.1"
  static let layout_home_video_overlay_motion = "2.4s"
  static let layout_home_video_overlay_reveal_opacity = "0.96"
  static let layout_home_logo_width = "320px"
  static let layout_home_logo_width_mobile = "260px"
  static let layout_home_logo_margin_bottom = "1.7rem"
  static let layout_home_logo_docked_margin_bottom = "2rem"
  static let layout_home_logo_transition_opacity = "700ms"
  static let layout_home_logo_transition_transform = "900ms"
  static let layout_home_stage_copy_margin_top = "1.5rem"
  static let layout_home_stage_bottom_margin_top = "1.7rem"
  static let layout_home_stage_bottom_margin_top_mobile = "1.35rem"
  static let layout_home_stage_intro_max_height = "1200px"
  static let layout_home_stage_intro_opacity_duration = "900ms"
  static let layout_home_stage_intro_transform_duration = "1100ms"
  static let layout_home_stage_intro_reveal_duration = "0.8s"
  static let layout_home_intro_reveal_y = "18px"
  static let layout_home_intro_content_opacity_duration = "0.65s"
  static let layout_home_intro_content_transform_duration = "0.85s"
  static let layout_home_intro_logo_scale_start = "0.68"
  static let layout_home_intro_logo_scale_settle = "0.94"
  static let layout_home_intro_logo_scale_fade = "0.30"
  static let layout_catalog_rail_padding_top = "8.8rem"
  static let layout_catalog_rail_padding_bottom = "5.5rem"
  static let layout_catalog_rail_padding_top_mobile = "7.4rem"
  static let layout_catalog_rail_padding_bottom_mobile = "4.5rem"
  static let layout_catalog_section_margin_top = "2.5rem"
  static let layout_catalog_hero_gap = "1rem"
  static let layout_catalog_hero_padding_bottom = "2.5rem"
  static let layout_catalog_eyebrow_size = "0.78rem"
  static let layout_catalog_eyebrow_weight = "500"
  static let layout_catalog_eyebrow_tracking = "0.16em"
  static let layout_catalog_title_size = "clamp(2.8rem, 6vw, 4.8rem)"
  static let layout_catalog_title_weight = "300"
  static let layout_catalog_title_line_height = "0.94"
  static let layout_catalog_title_tracking = "-0.06em"
  static let layout_catalog_description_max_width = "56rem"
  static let layout_catalog_description_size = "1.02rem"
  static let layout_catalog_description_line_height = "1.72"
  static let layout_catalog_chip_gap = "0.75rem"
  static let layout_catalog_chip_min_height = "2.2rem"
  static let layout_catalog_chip_padding_x = "0.95rem"
  static let layout_catalog_chip_size = "0.78rem"
  static let layout_catalog_chip_line_height = "1"
  static let layout_catalog_toolbar_gap = "0.9rem"
  static let layout_catalog_search_gap = "0.45rem"
  static let layout_catalog_filter_note_size = "0.86rem"
  static let layout_catalog_filter_note_line_height = "1.6"
  static let layout_catalog_search_row_min_height = "3.4rem"
  static let layout_catalog_search_row_padding_x = "1rem"
  static let layout_catalog_search_row_radius = "1rem"
  static let layout_catalog_grid_gap = "1.5rem"
  static let layout_catalog_grid_compact_gap = "1rem"
  static let layout_catalog_card_radius = "1.4rem"
  static let layout_catalog_card_body_gap = "1rem"
  static let layout_catalog_card_body_padding = "1.35rem"
  static let layout_catalog_card_header_gap = "0.65rem"
  static let layout_catalog_card_eyebrow_size = "0.74rem"
  static let layout_catalog_card_eyebrow_weight = "500"
  static let layout_catalog_card_eyebrow_tracking = "0.12em"
  static let layout_catalog_card_title_size = "1.28rem"
  static let layout_catalog_card_title_weight = "400"
  static let layout_catalog_card_title_line_height = "1.1"
  static let layout_catalog_card_summary_line_height = "1.65"
  static let layout_catalog_action_gap = "0.75rem"
  static let layout_catalog_detail_gap = "1.5rem"
  static let layout_catalog_panel_gap = "1rem"
  static let layout_catalog_panel_padding = "1.4rem"
  static let layout_catalog_panel_radius = "1.4rem"
  static let layout_catalog_panel_title_size = "1.14rem"
  static let layout_catalog_panel_title_weight = "500"
  static let layout_catalog_panel_copy_line_height = "1.7"
  static let layout_catalog_rows_gap = "0.85rem"
  static let layout_catalog_row_gap = "0.25rem"
  static let layout_catalog_row_padding_bottom = "0.85rem"
  static let layout_catalog_row_label_size = "0.78rem"
  static let layout_catalog_row_label_tracking = "0.08em"
  static let layout_catalog_row_value_line_height = "1.65"
  static let layout_catalog_list_gap = "0.9rem"
  static let layout_catalog_list_line_height = "1.7"
  static let layout_catalog_timeline_gap = "1.2rem"
  static let layout_catalog_timeline_year_gap = "1rem"
  static let layout_catalog_timeline_year_size = "1.3rem"
  static let layout_catalog_timeline_year_weight = "500"
  static let layout_catalog_timeline_entry_gap = "0.5rem"
  static let layout_catalog_timeline_entry_padding_y = "1.2rem"
  static let layout_catalog_timeline_entry_padding_x = "1.3rem"
  static let layout_catalog_timeline_entry_radius = "1.25rem"
  static let layout_catalog_timeline_eyebrow_size = "0.76rem"
  static let layout_catalog_timeline_eyebrow_tracking = "0.1em"
  static let layout_catalog_timeline_title_size = "1.1rem"
  static let layout_catalog_timeline_title_weight = "500"
  static let layout_catalog_timeline_copy_line_height = "1.72"
  static let layout_catalog_sitemap_group_gap = "1rem"
  static let layout_catalog_sitemap_group_padding_top = "1.6rem"
  static let layout_catalog_sitemap_title_size = "1.15rem"
  static let layout_catalog_sitemap_title_weight = "500"
  static let layout_catalog_sitemap_item_gap = "0.2rem"
  static let layout_catalog_sitemap_path_size = "0.84rem"
  static let layout_catalog_empty_gap = "0.75rem"
  static let layout_catalog_empty_padding = "1.5rem"
  static let layout_catalog_empty_radius = "1.4rem"
  static let layout_catalog_empty_title_size = "1.2rem"
  static let layout_catalog_empty_title_weight = "500"
  static let layout_catalog_empty_copy_line_height = "1.72"
  static let layout_catalog_media_card_min = "15rem"
  static let layout_catalog_media_card_max = "22rem"
  static let layout_catalog_media_card_gap = "1.25rem"
  static let layout_catalog_media_figure_radius = "1.2rem"
  static let layout_catalog_media_body_gap = "1rem"
  static let layout_home_search_shell_width = "72rem"
  static let layout_home_search_dialog_blur = "18px"
  static let layout_home_search_dialog_saturate = "145%"
  static let layout_home_search_header_gap = "1rem"
  static let layout_home_search_header_padding_y = "1.45rem"
  static let layout_home_search_header_padding_x_fallback = "2.8rem"
  static let layout_home_search_header_padding_bottom = "1.05rem"
  static let layout_home_search_eyebrow_margin_bottom = "0.35rem"
  static let layout_home_search_eyebrow_size = "0.72rem"
  static let layout_home_search_eyebrow_weight = "500"
  static let layout_home_search_eyebrow_tracking = "0.08em"
  static let layout_home_search_title_size = "1.02rem"
  static let layout_home_search_title_weight = "500"
  static let layout_home_search_title_line_height = "1.3"
  static let layout_home_search_body_gap = "1.15rem"
  static let layout_home_search_body_padding_y = "1.25rem"
  static let layout_home_search_body_padding_x_fallback = "2.8rem"
  static let layout_home_search_form_gap = "0.55rem"
  static let layout_home_search_input_row_gap = "0.62rem"
  static let layout_home_search_input_row_min_height = "4rem"
  static let layout_home_search_input_row_padding_y = "0.82rem"
  static let layout_home_search_input_row_padding_x = "1.08rem"
  static let layout_home_search_input_row_radius = "999px"
  static let layout_home_search_input_row_line_height = "1"
  static let layout_home_search_input_row_opacity = "0.9"
  static let layout_home_search_input_row_border = "color-mix(in srgb, var(--cc-primary-color) 16%, transparent)"
  static let layout_home_search_input_row_border_focus = "color-mix(in srgb, var(--cc-primary-color) 24%, transparent)"
  static let layout_home_search_icon_size = "1.38rem"
  static let layout_home_search_icon_opacity = "0.82"
  static let layout_home_search_voice_motion = "180ms"
  static let layout_home_search_input_size = "1.88rem"
  static let layout_home_search_input_weight = "300"
  static let layout_home_search_input_tracking = "-0.012em"
  static let layout_home_search_input_line_height = "1"
  static let layout_home_search_hint_size = "0.94rem"
  static let layout_home_search_hint_line_height = "1.45"
  static let layout_home_search_quick_actions_gap = "0.55rem"
  static let layout_home_search_chip_min_height = "2.35rem"
  static let layout_home_search_chip_padding_x = "0.88rem"
  static let layout_home_search_chip_size = "0.8rem"
  static let layout_home_search_chip_weight = "500"
  static let layout_home_search_chip_tracking = "0.03em"
  static let layout_home_search_empty_gap = "0.45rem"
  static let layout_home_search_empty_padding_top = "0.95rem"
  static let layout_home_search_empty_title_size = "0.96rem"
  static let layout_home_search_empty_title_weight = "500"
  static let layout_home_search_empty_text_size = "0.88rem"
  static let layout_home_search_empty_text_line_height = "1.55"
  static let layout_home_search_result_card_gap = "0.5rem"
  static let layout_home_search_result_card_padding_y = "0.95rem"
  static let layout_home_search_result_list_gap = "0.85rem"
  static let layout_home_search_result_meta_row_gap = "0.55rem"
  static let layout_home_search_result_meta_column_gap = "0.8rem"
  static let layout_home_search_result_route_size = "0.72rem"
  static let layout_home_search_result_route_weight = "500"
  static let layout_home_search_result_route_tracking = "0.08em"
  static let layout_home_search_result_query_size = "0.9rem"
  static let layout_home_search_result_query_line_height = "1.4"
  static let layout_home_search_result_title_size = "1.02rem"
  static let layout_home_search_result_title_weight = "300"
  static let layout_home_search_result_title_tracking = "-0.018em"
  static let layout_home_search_result_title_line_height = "1.28"
  static let layout_home_search_result_title_row_gap = "0.55rem"
  static let layout_home_search_result_body_size = "0.88rem"
  static let layout_home_search_result_body_line_height = "1.55"
  static let layout_home_search_result_badge_gap = "0.38rem"
  static let layout_home_search_result_badge_min_height = "1.7rem"
  static let layout_home_search_result_badge_padding_x = "0.62rem"
  static let layout_home_search_result_badge_color = "#1d9bf0"
  static let layout_home_search_result_badge_size = "0.7rem"
  static let layout_home_search_result_badge_weight = "600"
  static let layout_home_search_result_badge_tracking = "0.08em"
  static let layout_home_search_result_badge_icon_size = "0.82rem"
  static let layout_home_search_result_tags_gap = "0.45rem"
  static let layout_home_search_result_tag_min_height = "1.85rem"
  static let layout_home_search_result_tag_padding_x = "0.7rem"
  static let layout_home_search_result_tag_size = "0.72rem"
  static let layout_home_search_result_tag_tracking = "0.04em"
  static let layout_home_search_result_actions_gap = "0.55rem"
  static let layout_home_search_result_action_min_height = "2.4rem"
  static let layout_home_search_result_action_min_width = "10.5rem"
  static let layout_home_search_result_action_padding_x = "0.95rem"
  static let layout_home_search_result_action_size = "0.78rem"
  static let layout_home_search_result_action_weight = "500"
  static let layout_home_search_result_action_tracking = "0.08em"
  static let layout_home_search_result_action_line_height = "1"
  static let layout_home_search_light_border = "rgba(0, 0, 0, 0.12)"
  static let layout_home_search_dark_border = "rgba(255, 255, 255, 0.16)"
  static let layout_home_search_mobile_padding_x_fallback = "1rem"
  static let layout_home_search_mobile_title_size = "1.15rem"
  static let layout_home_search_mobile_input_row_min_height = "3.2rem"
  static let layout_home_search_mobile_input_row_padding_y = "0.68rem"
  static let layout_home_search_mobile_input_row_padding_x = "0.9rem"
  static let layout_home_search_mobile_input_size = "1.2rem"
  static let layout_home_platform_nav_opacity = "0.68"
  static let layout_home_platform_nav_hover_opacity = "1"
  static let layout_home_platform_motion_fast = "220ms"
  static let layout_home_platform_radius = "var(--cc-panel-radius, 1.35rem)"
  static let layout_home_platform_padding = "0.92rem"
  static let layout_home_platform_gap = "0.88rem"
  static let layout_home_platform_shadow = "var(--cc-panel-shadow, 0 18px 54px color-mix(in srgb, var(--shadow-color, #000000) 18%, transparent))"
  static let layout_home_platform_blur = "4px"
  static let layout_home_platform_saturate = "115%"
  static let layout_home_platform_chrome_min_height = "3.55rem"
  static let layout_home_platform_chrome_blur = "8px"
  static let layout_home_platform_chrome_saturate = "120%"
  static let layout_home_platform_rail_toggle_size = "1.25rem"
  static let layout_home_platform_rail_toggle_margin_left = "0.7rem"
  static let layout_home_platform_rail_toggle_icon_size = "1.05rem"
  static let layout_home_platform_rail_width = "18rem"
  static let layout_home_platform_subrail_width = "15rem"
  static let layout_home_platform_rail_compact_width = "3.25rem"
  static let layout_home_platform_tablet_rail_min = "12rem"
  static let layout_home_platform_tablet_rail_max = "15rem"
  static let layout_home_platform_tablet_subrail_min = "11rem"
  static let layout_home_platform_tablet_subrail_max = "13rem"
  static let layout_home_platform_mobile_inline_padding_fallback = "0.85rem"
  static let layout_home_platform_mobile_rail_inner_padding_y = "var(--space-3)"
  static let layout_home_platform_mobile_nav_gap = "var(--space-2)"
  static let layout_home_platform_mobile_nav_item_min_height = "var(--cc-home-platform-nav-item-min-height)"
  static let layout_home_platform_mobile_nav_item_padding_x = "var(--cc-home-platform-nav-item-padding-x)"
  static let layout_home_platform_mobile_nav_icon_size = "var(--cc-home-platform-nav-icon-size)"
  static let layout_home_platform_rail_padding_top = "1.45rem"
  static let layout_home_platform_rail_padding_right = "1.5rem"
  static let layout_home_platform_rail_padding_bottom = "2.2rem"
  static let layout_home_platform_rail_padding_left = "0"
  static let layout_home_platform_subrail_padding_left = "1.5rem"
  static let layout_home_platform_tablet_rail_padding_right = "1rem"
  static let layout_home_platform_group_margin_top = "2.35rem"
  static let layout_home_platform_label_margin_bottom = "0.9rem"
  static let layout_home_platform_label_size = "0.72rem"
  static let layout_home_platform_label_weight = "500"
  static let layout_home_platform_label_tracking = "0.08em"
  static let layout_home_platform_subrail_header_gap = "0.35rem"
  static let layout_home_platform_subrail_header_margin_bottom = "0.95rem"
  static let layout_home_platform_subrail_title_size = "1.02rem"
  static let layout_home_platform_subrail_title_weight = "500"
  static let layout_home_platform_subrail_title_line_height = "1.3"
  static let layout_home_platform_nav_gap = "0.62rem"
  static let layout_home_platform_nav_item_gap = "0.78rem"
  static let layout_home_platform_nav_item_min_height = "3.08rem"
  static let layout_home_platform_nav_item_radius = "999px"
  static let layout_home_platform_nav_item_padding_y = "0.86rem"
  static let layout_home_platform_nav_item_padding_x = "1rem"
  static let layout_home_platform_nav_icon_size = "1rem"
  static let layout_home_platform_nav_indicator_min_size = "1.15rem"
  static let layout_home_platform_nav_indicator_padding_x = "0.32rem"
  static let layout_home_platform_nav_indicator_size = "0.64rem"
  static let layout_home_platform_nav_indicator_weight = "600"
  static let layout_home_platform_nav_indicator_line_height = "1"
  static let layout_home_platform_nav_indicator_tracking = "0.04em"
  static let layout_home_platform_nav_text_size = "0.98rem"
  static let layout_home_platform_nav_text_weight = "400"
  static let layout_home_platform_nav_text_line_height = "1.35"
  static let layout_home_platform_nav_text_tracking = "-0.01em"
  static let layout_home_platform_subnav_padding_x = "0.92rem"
  static let layout_home_platform_subnav_min_height = "2.95rem"
  static let layout_home_platform_subnav_size = "0.86rem"
  static let layout_home_platform_subnav_line_height = "1.35"
  static let layout_home_platform_content_header_gap = "0.38rem"
  static let layout_home_platform_content_header_padding_top = "1.45rem"
  static let layout_home_platform_content_header_padding_right = "0"
  static let layout_home_platform_content_header_padding_bottom = "1rem"
  static let layout_home_platform_content_header_padding_left = "2rem"
  static let layout_home_platform_tablet_content_padding_left = "1.5rem"
  static let layout_home_platform_mobile_content_header_padding_top = "1rem"
  static let layout_home_platform_mobile_content_header_padding_bottom = "0.85rem"
  static let layout_home_platform_content_title_size = "var(--section-title-size)"
  static let layout_home_platform_content_title_weight = "var(--section-title-weight)"
  static let layout_home_platform_content_title_line_height = "var(--section-title-line-height)"
  static let layout_home_platform_content_title_tracking = "var(--section-title-tracking)"
  static let layout_home_platform_content_title_transform = "var(--section-title-transform)"
  static let layout_home_platform_content_title_color = "red"
  static let layout_home_platform_content_copy_max_width = "42rem"
  static let layout_home_platform_content_copy_size = "0.98rem"
  static let layout_home_platform_content_copy_weight = "400"
  static let layout_home_platform_content_copy_line_height = "1.65"
  static let layout_home_platform_content_copy_tracking = "-0.01em"
  static let layout_home_platform_content_inner_padding_top = "1.45rem"
  static let layout_home_platform_content_inner_padding_left = "2rem"
  static let layout_home_platform_content_inner_footer_gap = "1.45rem"
  static let layout_home_platform_mobile_content_inner_padding_top = "1rem"
  static let layout_home_platform_mobile_content_inner_footer_gap = "1.15rem"
  static let layout_home_platform_destination_gap = "1rem"
  static let layout_home_platform_content_stack_gap = "1.25rem"
  static let layout_home_platform_state_title_size = "1.15rem"
  static let layout_home_platform_state_title_weight = "400"
  static let layout_home_platform_state_title_line_height = "1.25"
  static let layout_home_platform_state_title_tracking = "-0.02em"
  static let layout_home_platform_state_copy_max_width = "40rem"
  static let layout_home_platform_state_copy_size = "0.92rem"
  static let layout_home_platform_state_copy_line_height = "1.6"
  static let layout_home_platform_state_action_min_height = "2.45rem"
  static let layout_home_platform_state_action_padding_x = "1rem"
  static let layout_home_platform_state_action_size = "0.78rem"
  static let layout_home_platform_state_action_weight = "500"
  static let layout_home_platform_state_action_tracking = "0.08em"
  static let layout_home_platform_embedded_section_gap = "0.75rem"
  static let layout_home_platform_embedded_stack_gap = "0.45rem"
  static let layout_home_platform_destination_grid_gap = "0.72rem"
  static let layout_home_platform_destination_grid_count = "3"
  static let layout_home_platform_destination_grid_count_compact = "2"
  static let layout_home_platform_destination_card_gap = "0.7rem"
  static let layout_home_platform_destination_card_inner_gap = "0.5rem"
  static let layout_home_platform_destination_card_padding_y = "1rem"
  static let layout_home_platform_destination_card_padding_x = "1.05rem"
  static let layout_home_platform_destination_label_size = "0.72rem"
  static let layout_home_platform_destination_label_weight = "500"
  static let layout_home_platform_destination_label_tracking = "0.08em"
  static let layout_home_platform_destination_title_size = "1rem"
  static let layout_home_platform_destination_title_weight = "500"
  static let layout_home_platform_destination_title_line_height = "1.35"
  static let layout_home_platform_destination_copy_size = "0.84rem"
  static let layout_home_platform_destination_copy_line_height = "1.6"
  static let layout_home_platform_destination_link_size = "0.84rem"
  static let layout_home_platform_destination_link_line_height = "1.55"
  static let layout_home_platform_destination_workspace_copy_size = "0.88rem"
  static let layout_home_platform_destination_workspace_copy_line_height = "1.55"
  static let layout_home_platform_destination_list_gap = "0.45rem"
  static let layout_home_platform_destination_action_gap = "0.65rem"
  static let layout_home_platform_destination_action_min_height = "2.5rem"
  static let layout_home_platform_destination_action_padding_x = "0.95rem"
  static let layout_home_platform_destination_action_size = "0.76rem"
  static let layout_home_platform_destination_action_weight = "500"
  static let layout_home_platform_destination_action_tracking = "0.08em"
  static let layout_home_platform_destination_state_size = "0.88rem"
  static let layout_home_platform_destination_state_line_height = "1.5"
  static let layout_home_platform_destination_field_gap = "0.45rem"
  static let layout_home_platform_destination_field_min_height = "2.65rem"
  static let layout_home_platform_destination_field_padding_y = "0.72rem"
  static let layout_home_platform_destination_field_padding_x = "0.82rem"
  static let layout_home_stage_motion_core_width = "min(24rem, 70vw)"
  static let layout_home_stage_motion_core_height = "min(22.5rem, 39vh)"
  static let layout_home_stage_motion_core_active_width = "min(18.8rem, 58vw)"
  static let layout_home_stage_motion_core_active_height = "min(17.4rem, 29vh)"
  static let layout_home_stage_motion_vessel_size = "min(21rem, 58vw, 46vh)"
  static let layout_home_stage_motion_vessel_active_size = "min(16.8rem, 48vw, 31vh)"
  static let layout_home_stage_motion_vessel_blur = "24px"
  static let layout_home_stage_motion_vessel_ring_border = "color-mix(in srgb, var(--cc-primary-color) 22%, transparent)"
  static let layout_home_stage_motion_vessel_inner_bg = "color-mix(in srgb, var(--bg-color) 12%, transparent)"
  static let layout_home_stage_motion_core_color = "color-mix(in srgb, var(--cc-primary-color) 92%, transparent)"
  static let layout_home_stage_motion_active_color = "var(--cc-home-stage-motion-core-color)"
  static let layout_home_stage_motion_core_ring_border = "color-mix(in srgb, var(--cc-primary-color) 10%, transparent)"
  static let layout_home_stage_motion_core_idle_ring_opacity = "0.72"
  static let layout_home_stage_motion_core_idle_signal_opacity = "0.42"
  static let layout_home_stage_motion_core_idle_pulse_opacity = "0.34"
  static let layout_home_stage_motion_core_signal_size = "58%"
  static let layout_home_stage_motion_core_ring_size = "72%"
  static let layout_home_stage_motion_core_pulse_size = "34%"
  static let layout_home_stage_motion_core_signal_blur = "16px"
  static let layout_home_stage_motion_core_pulse_blur = "10px"
  static let layout_home_stage_motion_mic_size = "4.8rem"
  static let layout_home_stage_motion_mic_icon_size = "2.35rem"
  static let layout_home_stage_motion_mic_margin_bottom = "1.15rem"
  static let layout_home_stage_motion_mic_color = "color-mix(in srgb, var(--cc-primary-color) 72%, transparent)"
  static let layout_home_stage_motion_mic_hover_color = "color-mix(in srgb, var(--color-primary1) 94%, var(--cc-primary-color))"
  static let layout_home_stage_motion_mic_opacity = "0.92"
  static let layout_home_stage_motion_mic_icon_opacity = "0.9"
  static let layout_home_stage_motion_mic_hover_scale = "1.08"
  static let layout_home_stage_motion_mic_icon_hover_scale = "1.03"
  static let layout_home_stage_motion_active_mic_scale = "1.04"
  static let layout_home_stage_motion_fast = "220ms"
  static let layout_home_stage_motion_transition = "620ms cubic-bezier(0.22,1,0.36,1)"
  static let layout_home_stage_motion_field_opacity_transition = "0.35s"
  static let layout_home_stage_motion_field_blur = "10px"
  static let layout_home_stage_motion_field_size = "13rem"
  static let layout_home_stage_motion_ring_size = "17rem"
  static let layout_home_stage_motion_field_color = "rgba(145,124,111,0.18)"
  static let layout_home_stage_motion_field_color_soft = "rgba(145,124,111,0.08)"
  static let layout_home_stage_motion_field_color_faint = "rgba(145,124,111,0.02)"
  static let layout_home_stage_motion_field_color_clear = "rgba(145,124,111,0)"
  static let layout_home_stage_motion_ring_border = "rgba(255,255,255,0.18)"
  static let layout_home_stage_motion_mic_field_color = "rgba(145,124,111,0.22)"
  static let layout_home_stage_motion_mic_field_color_soft = "rgba(145,124,111,0.10)"
  static let layout_home_stage_motion_mic_field_color_clear = "rgba(145,124,111,0)"
  static let layout_home_stage_motion_mic_field_blur = "12px"
  static let layout_home_stage_motion_mic_ring_border = "var(--cc-home-stage-motion-ring-border)"
  static let layout_home_stage_motion_mic_ring_offset = "1.2rem"
  static let layout_home_stage_motion_mode_core_opacity = "0.72"
  static let layout_home_stage_motion_mode_ring_opacity = "0.82"
  static let layout_home_stage_motion_listening_core_duration = "1.35s"
  static let layout_home_stage_motion_listening_ring_duration = "2.1s"
  static let layout_home_stage_motion_listening_mic_duration = "1.25s"
  static let layout_home_stage_motion_thinking_core_duration = "1.8s"
  static let layout_home_stage_motion_thinking_ring_duration = "2.6s"
  static let layout_home_stage_motion_thinking_mic_duration = "1.9s"
  static let layout_home_stage_motion_responding_core_duration = "1s"
  static let layout_home_stage_motion_responding_ring_duration = "1.45s"
  static let layout_home_stage_motion_responding_mic_duration = "0.95s"
  static let layout_home_stage_motion_mobile_core_width = "min(18rem, 72vw)"
  static let layout_home_stage_motion_mobile_core_height = "min(16.8rem, 27vh)"
  static let layout_home_stage_motion_mobile_core_active_width = "min(15.2rem, 60vw)"
  static let layout_home_stage_motion_mobile_core_active_height = "min(14rem, 22vh)"
  static let layout_home_stage_motion_mobile_vessel_size = "min(17rem, 66vw, 31vh)"
  static let layout_home_stage_motion_mobile_vessel_active_size = "min(14rem, 54vw, 24vh)"
  static let layout_home_stage_motion_mobile_mic_size = "4rem"
  static let layout_home_stage_motion_mobile_mic_icon_size = "2rem"
  static let layout_home_stage_motion_mobile_mic_margin_bottom = "0.85rem"
  static let layout_home_stage_motion_key_core_listen_start_scale = "0.88"
  static let layout_home_stage_motion_key_core_listen_mid_scale = "1.1"
  static let layout_home_stage_motion_key_core_listen_start_opacity = "0.34"
  static let layout_home_stage_motion_key_core_listen_mid_opacity = "0.92"
  static let layout_home_stage_motion_key_core_think_start_scale = "0.96"
  static let layout_home_stage_motion_key_core_think_mid_scale = "1.04"
  static let layout_home_stage_motion_key_core_think_start_opacity = "0.36"
  static let layout_home_stage_motion_key_core_think_mid_opacity = "0.72"
  static let layout_home_stage_motion_key_core_respond_start_scale = "0.92"
  static let layout_home_stage_motion_key_core_respond_mid_scale = "1.16"
  static let layout_home_stage_motion_key_core_respond_start_opacity = "0.34"
  static let layout_home_stage_motion_key_core_respond_mid_opacity = "1"
  static let layout_home_stage_motion_key_ring_listen_start_scale = "0.94"
  static let layout_home_stage_motion_key_ring_listen_mid_scale = "1.02"
  static let layout_home_stage_motion_key_ring_listen_start_opacity = "0.18"
  static let layout_home_stage_motion_key_ring_listen_mid_opacity = "0.58"
  static let layout_home_stage_motion_key_ring_think_start_scale = "0.98"
  static let layout_home_stage_motion_key_ring_think_mid_scale = "1.01"
  static let layout_home_stage_motion_key_ring_think_start_opacity = "0.14"
  static let layout_home_stage_motion_key_ring_think_mid_opacity = "0.4"
  static let layout_home_stage_motion_key_ring_respond_start_scale = "0.92"
  static let layout_home_stage_motion_key_ring_respond_mid_scale = "1.08"
  static let layout_home_stage_motion_key_ring_respond_start_opacity = "0.16"
  static let layout_home_stage_motion_key_ring_respond_mid_opacity = "0.7"
  static let layout_home_stage_motion_key_mic_listen_start_scale = "0.92"
  static let layout_home_stage_motion_key_mic_listen_mid_scale = "1.14"
  static let layout_home_stage_motion_key_mic_listen_start_opacity = "0.18"
  static let layout_home_stage_motion_key_mic_listen_mid_opacity = "0.62"
  static let layout_home_stage_motion_key_mic_think_start_scale = "0.98"
  static let layout_home_stage_motion_key_mic_think_mid_scale = "1.04"
  static let layout_home_stage_motion_key_mic_think_start_opacity = "0.14"
  static let layout_home_stage_motion_key_mic_think_mid_opacity = "0.34"
  static let layout_home_stage_motion_key_mic_respond_start_scale = "0.9"
  static let layout_home_stage_motion_key_mic_respond_mid_scale = "1.18"
  static let layout_home_stage_motion_key_mic_respond_start_opacity = "0.2"
  static let layout_home_stage_motion_key_mic_respond_mid_opacity = "0.74"
  static let layout_home_featured_functions_max_width = "1440px"
  static let layout_home_featured_functions_viewport_max_width = "820px"
  static let layout_home_featured_functions_footer_max_width = "820px"
  static let layout_home_featured_functions_timeline_height = "1px"
  static let layout_home_featured_functions_timeline_progress_scale = "0"
  static let layout_home_featured_functions_description_opacity = "0.74"
  static let layout_home_featured_functions_card_border_width = "1.25px"
  static let layout_home_featured_functions_card_border_color_dark = "rgba(255, 255, 255, 0.08)"
  static let layout_home_featured_functions_card_border_color_hover_dark = "rgba(255, 255, 255, 0.12)"
  static let layout_home_featured_functions_card_surface_bg_dark = "rgba(255, 255, 255, 0.02)"
  static let layout_home_featured_functions_card_surface_highlight_rest_dark = "rgba(255, 255, 255, 0.035)"
  static let layout_home_featured_functions_card_surface_highlight_hover_dark = "rgba(255, 255, 255, 0.045)"
  static let layout_home_featured_functions_card_placeholder_glow_a_dark = "rgba(255, 255, 255, 0.08)"
  static let layout_home_featured_functions_card_placeholder_glow_b_dark = "rgba(145, 124, 111, 0.24)"
  static let layout_home_featured_functions_card_placeholder_fill_top_dark = "rgba(255, 255, 255, 0.04)"
  static let layout_home_featured_functions_card_placeholder_fill_bottom_dark = "rgba(255, 255, 255, 0.02)"
  static let layout_home_featured_functions_card_padding = "0"
  static let layout_home_featured_functions_visual_aspect_ratio = "16 / 6.4"
  static let layout_home_featured_functions_card_copy_max_width = "100%"
  static let layout_home_featured_functions_card_summary_gap = "52px"
  static let layout_home_featured_functions_card_title_gap = "0"
  static let layout_home_featured_functions_card_label_line_height = "0.9"
  static let layout_home_featured_functions_card_label_weight = "100"
  static let layout_home_featured_functions_card_label_tracking = "0.01em"
  static let layout_home_featured_functions_eyebrow_opacity = "0.42"
  static let layout_home_featured_functions_dot_size = "7px"
  static let layout_home_featured_functions_dot_opacity = "0.22"
  static let layout_home_featured_functions_dot_opacity_active = "1"
  static let layout_home_featured_functions_dot_opacity_light = "0.18"
  static let layout_home_featured_functions_dot_opacity_dark = "0.24"
  static let layout_home_featured_functions_rail_offset = "0px"
  static let layout_home_featured_functions_card_matte_blur = "34px"
  static let layout_home_featured_functions_card_matte_saturation = "0.96"
  static let layout_home_featured_functions_card_spectrum_opacity = "0.09"
  static let layout_home_featured_functions_card_spectrum_opacity_light = "0.06"
  static let layout_home_featured_functions_card_spectrum_blend = "normal"
  static let layout_home_featured_functions_card_spectrum_red = "rgba(255, 72, 72, 1)"
  static let layout_home_featured_functions_card_spectrum_orange = "rgba(255, 154, 72, 1)"
  static let layout_home_featured_functions_card_spectrum_yellow = "rgb(79, 65, 23)"
  static let layout_home_featured_functions_card_spectrum_violet = "rgba(146, 92, 255, 1)"
  static let layout_home_featured_functions_card_spectrum_blue = "rgba(92, 148, 255, 1)"
  static let layout_home_featured_functions_card_spectrum_cyan = "rgba(84, 232, 255, 1)"
  static let layout_home_featured_functions_card_summary_color_dark = "rgba(255, 255, 255, 0.94)"
  static let layout_home_featured_functions_card_icon_filter_dark = "brightness(0) invert(1)"
  static let layout_home_featured_functions_card_matte_surface_top_dark = "rgba(0, 0, 0, 0.14)"
  static let layout_home_featured_functions_card_matte_surface_mid_dark = "rgba(0, 0, 0, 0.08)"
  static let layout_home_featured_functions_card_matte_surface_bottom_dark = "rgba(0, 0, 0, 0.22)"
  static let layout_home_featured_functions_card_border_color_light = "rgba(0, 0, 0, 0.08)"
  static let layout_home_featured_functions_card_border_color_hover_light = "rgba(0, 0, 0, 0.12)"
  static let layout_home_featured_functions_card_surface_bg_light = "rgba(0, 0, 0, 0.02)"
  static let layout_home_featured_functions_card_surface_highlight_rest_light = "rgba(0, 0, 0, 0.03)"
  static let layout_home_featured_functions_card_surface_highlight_hover_light = "rgba(0, 0, 0, 0.05)"
  static let layout_home_featured_functions_card_placeholder_glow_a_light = "rgba(0, 0, 0, 0.04)"
  static let layout_home_featured_functions_card_placeholder_glow_b_light = "rgba(145, 124, 111, 0.12)"
  static let layout_home_featured_functions_card_placeholder_fill_top_light = "rgba(0, 0, 0, 0.03)"
  static let layout_home_featured_functions_card_placeholder_fill_bottom_light = "rgba(0, 0, 0, 0.015)"
  static let layout_home_featured_functions_card_summary_color_light = "rgba(17, 17, 17, 0.88)"
  static let layout_home_featured_functions_card_icon_filter_light = "brightness(0) saturate(100%)"
  static let layout_home_featured_functions_card_matte_surface_top_light = "rgba(255, 255, 255, 0.82)"
  static let layout_home_featured_functions_card_matte_surface_mid_light = "rgba(255, 255, 255, 0.66)"
  static let layout_home_featured_functions_card_matte_surface_bottom_light = "rgba(255, 255, 255, 0.9)"
  static let layout_home_featured_functions_control_size = "48px"
  static let layout_home_featured_functions_control_icon_size = "16px"
  static let layout_home_featured_functions_control_disabled_opacity = "0.32"
  static let layout_home_featured_functions_track_motion = "420ms"
  static let layout_home_featured_functions_ready_opacity_motion = "260ms"
  static let layout_about_featured_functions_max_width = "var(--cc-home-featured-functions-max-width)"
  static let layout_about_featured_functions_viewport_max_width = "var(--cc-home-featured-functions-viewport-max-width)"
  static let layout_about_featured_functions_footer_max_width = "var(--cc-home-featured-functions-footer-max-width)"
  static let layout_about_featured_functions_timeline_height = "var(--cc-home-featured-functions-timeline-height)"
  static let layout_about_featured_functions_timeline_progress_scale = "var(--cc-home-featured-functions-timeline-progress-scale)"
  static let layout_about_featured_functions_description_opacity = "var(--cc-home-featured-functions-description-opacity)"
  static let layout_about_featured_functions_card_border_width = "var(--cc-home-featured-functions-card-border-width)"
  static let layout_about_featured_functions_card_border_color_dark = "var(--cc-home-featured-functions-card-border-color-dark)"
  static let layout_about_featured_functions_card_border_color_hover_dark = "var(--cc-home-featured-functions-card-border-color-hover-dark)"
  static let layout_about_featured_functions_card_surface_bg_dark = "var(--cc-home-featured-functions-card-surface-bg-dark)"
  static let layout_about_featured_functions_card_surface_highlight_rest_dark = "var(--cc-home-featured-functions-card-surface-highlight-rest-dark)"
  static let layout_about_featured_functions_card_surface_highlight_hover_dark = "var(--cc-home-featured-functions-card-surface-highlight-hover-dark)"
  static let layout_about_featured_functions_card_placeholder_glow_a_dark = "var(--cc-home-featured-functions-card-placeholder-glow-a-dark)"
  static let layout_about_featured_functions_card_placeholder_glow_b_dark = "var(--cc-home-featured-functions-card-placeholder-glow-b-dark)"
  static let layout_about_featured_functions_card_placeholder_fill_top_dark = "var(--cc-home-featured-functions-card-placeholder-fill-top-dark)"
  static let layout_about_featured_functions_card_placeholder_fill_bottom_dark = "var(--cc-home-featured-functions-card-placeholder-fill-bottom-dark)"
  static let layout_about_featured_functions_card_padding = "var(--cc-home-featured-functions-card-padding)"
  static let layout_about_featured_functions_visual_aspect_ratio = "var(--cc-home-featured-functions-visual-aspect-ratio)"
  static let layout_about_featured_functions_card_copy_max_width = "var(--cc-home-featured-functions-card-copy-max-width)"
  static let layout_about_featured_functions_card_summary_gap = "var(--cc-home-featured-functions-card-summary-gap)"
  static let layout_about_featured_functions_card_title_gap = "var(--cc-home-featured-functions-card-title-gap)"
  static let layout_about_featured_functions_card_label_line_height = "var(--cc-home-featured-functions-card-label-line-height)"
  static let layout_about_featured_functions_card_label_weight = "var(--cc-home-featured-functions-card-label-weight)"
  static let layout_about_featured_functions_card_label_tracking = "var(--cc-home-featured-functions-card-label-tracking)"
  static let layout_about_featured_functions_eyebrow_opacity = "var(--cc-home-featured-functions-eyebrow-opacity)"
  static let layout_about_featured_functions_dot_size = "var(--cc-home-featured-functions-dot-size)"
  static let layout_about_featured_functions_dot_opacity = "var(--cc-home-featured-functions-dot-opacity)"
  static let layout_about_featured_functions_dot_opacity_active = "var(--cc-home-featured-functions-dot-opacity-active)"
  static let layout_about_featured_functions_dot_opacity_light = "var(--cc-home-featured-functions-dot-opacity-light)"
  static let layout_about_featured_functions_dot_opacity_dark = "var(--cc-home-featured-functions-dot-opacity-dark)"
  static let layout_about_featured_functions_rail_offset = "var(--cc-home-featured-functions-rail-offset)"
  static let layout_about_featured_functions_card_matte_blur = "var(--cc-home-featured-functions-card-matte-blur)"
  static let layout_about_featured_functions_card_matte_saturation = "var(--cc-home-featured-functions-card-matte-saturation)"
  static let layout_about_featured_functions_card_spectrum_opacity = "var(--cc-home-featured-functions-card-spectrum-opacity)"
  static let layout_about_featured_functions_card_spectrum_opacity_light = "var(--cc-home-featured-functions-card-spectrum-opacity-light)"
  static let layout_about_featured_functions_card_spectrum_blend = "var(--cc-home-featured-functions-card-spectrum-blend)"
  static let layout_about_featured_functions_card_spectrum_red = "var(--cc-home-featured-functions-card-spectrum-red)"
  static let layout_about_featured_functions_card_spectrum_orange = "var(--cc-home-featured-functions-card-spectrum-orange)"
  static let layout_about_featured_functions_card_spectrum_yellow = "var(--cc-home-featured-functions-card-spectrum-yellow)"
  static let layout_about_featured_functions_card_spectrum_violet = "var(--cc-home-featured-functions-card-spectrum-violet)"
  static let layout_about_featured_functions_card_spectrum_blue = "var(--cc-home-featured-functions-card-spectrum-blue)"
  static let layout_about_featured_functions_card_spectrum_cyan = "var(--cc-home-featured-functions-card-spectrum-cyan)"
  static let layout_about_featured_functions_card_summary_color_dark = "var(--cc-home-featured-functions-card-summary-color-dark)"
  static let layout_about_featured_functions_card_icon_filter_dark = "var(--cc-home-featured-functions-card-icon-filter-dark)"
  static let layout_about_featured_functions_card_matte_surface_top_dark = "var(--cc-home-featured-functions-card-matte-surface-top-dark)"
  static let layout_about_featured_functions_card_matte_surface_mid_dark = "var(--cc-home-featured-functions-card-matte-surface-mid-dark)"
  static let layout_about_featured_functions_card_matte_surface_bottom_dark = "var(--cc-home-featured-functions-card-matte-surface-bottom-dark)"
  static let layout_about_featured_functions_card_border_color_light = "var(--cc-home-featured-functions-card-border-color-light)"
  static let layout_about_featured_functions_card_border_color_hover_light = "var(--cc-home-featured-functions-card-border-color-hover-light)"
  static let layout_about_featured_functions_card_surface_bg_light = "var(--cc-home-featured-functions-card-surface-bg-light)"
  static let layout_about_featured_functions_card_surface_highlight_rest_light = "var(--cc-home-featured-functions-card-surface-highlight-rest-light)"
  static let layout_about_featured_functions_card_surface_highlight_hover_light = "var(--cc-home-featured-functions-card-surface-highlight-hover-light)"
  static let layout_about_featured_functions_card_placeholder_glow_a_light = "var(--cc-home-featured-functions-card-placeholder-glow-a-light)"
  static let layout_about_featured_functions_card_placeholder_glow_b_light = "var(--cc-home-featured-functions-card-placeholder-glow-b-light)"
  static let layout_about_featured_functions_card_placeholder_fill_top_light = "var(--cc-home-featured-functions-card-placeholder-fill-top-light)"
  static let layout_about_featured_functions_card_placeholder_fill_bottom_light = "var(--cc-home-featured-functions-card-placeholder-fill-bottom-light)"
  static let layout_about_featured_functions_card_summary_color_light = "var(--cc-home-featured-functions-card-summary-color-light)"
  static let layout_about_featured_functions_card_icon_filter_light = "var(--cc-home-featured-functions-card-icon-filter-light)"
  static let layout_about_featured_functions_card_matte_surface_top_light = "var(--cc-home-featured-functions-card-matte-surface-top-light)"
  static let layout_about_featured_functions_card_matte_surface_mid_light = "var(--cc-home-featured-functions-card-matte-surface-mid-light)"
  static let layout_about_featured_functions_card_matte_surface_bottom_light = "var(--cc-home-featured-functions-card-matte-surface-bottom-light)"
  static let layout_about_featured_functions_control_size = "var(--cc-home-featured-functions-control-size)"
  static let layout_about_featured_functions_control_icon_size = "var(--cc-home-featured-functions-control-icon-size)"
  static let layout_about_featured_functions_control_disabled_opacity = "var(--cc-home-featured-functions-control-disabled-opacity)"
  static let layout_about_featured_functions_track_motion = "var(--cc-home-featured-functions-track-motion)"
  static let layout_about_featured_functions_ready_opacity_motion = "var(--cc-home-featured-functions-ready-opacity-motion)"
  static let layout_home_essence_stage_min_height = "320vh"
  static let layout_home_essence_inner_height = "100vh"
  static let layout_home_essence_inner_height_small = "100svh"
  static let layout_home_essence_inner_height_dynamic = "100dvh"
  static let layout_home_essence_inner_opacity = "1"
  static let layout_home_essence_inner_transform = "none"
  static let layout_home_essence_inner_transform_motion = "0.9s"
  static let layout_home_essence_inner_opacity_motion = "0.45s"
  static let layout_home_essence_reveal_width = "min(92vw, 1120px)"
  static let layout_home_essence_reveal_y = "-9vh"
  static let layout_home_essence_stack_min_height = "3.2em"
  static let layout_home_essence_layer_opacity_hidden = "0"
  static let layout_home_essence_layer_font_size = "1.9rem"
  static let layout_home_essence_layer_line_height = "1.16"
  static let layout_home_essence_layer_font_weight = "300"
  static let layout_home_essence_layer_tracking = "0.004em"
  static let layout_home_essence_layer_enter_y = "8px"
  static let layout_home_essence_layer_enter_scale = "0.985"
  static let layout_home_essence_layer_enter_blur = "0.35px"
  static let layout_home_essence_layer_opacity_motion = "0.48s"
  static let layout_home_essence_layer_transform_motion = "0.58s"
  static let layout_home_essence_layer_filter_motion = "0.48s"
  static let layout_home_essence_preview_opacity = "0.5"
  static let layout_home_essence_preview_y = "4px"
  static let layout_home_essence_preview_scale = "0.992"
  static let layout_home_essence_preview_blur = "0.2px"
  static let layout_home_essence_inactive_y = "10px"
  static let layout_home_essence_inactive_scale = "0.985"
  static let layout_home_essence_inactive_blur = "0.35px"
  static let layout_home_essence_phase_enter_y = "2px"
  static let layout_home_essence_phase_enter_scale = "0.994"
  static let layout_home_essence_phase_enter_blur = "0.15px"
  static let layout_home_essence_phase_active_opacity = "0.96"
  static let layout_home_essence_phase_active_y = "0"
  static let layout_home_essence_phase_active_scale = "1"
  static let layout_home_essence_phase_active_blur = "0"
  static let layout_home_essence_phase_exit_y = "-2px"
  static let layout_home_essence_phase_exit_scale = "0.994"
  static let layout_home_essence_phase_exit_blur = "0.15px"
  static let layout_home_essence_phase_hidden_y = "-10px"
  static let layout_home_essence_phase_hidden_y_final = "-12px"
  static let layout_home_essence_phase_hidden_scale = "0.985"
  static let layout_home_essence_phase_hidden_blur = "0.35px"
  static let layout_home_essence_phase_hidden_blur_final = "0.4px"
  static let layout_home_essence_delay = "0.22s"
  static let layout_home_essence_fast_duration = "0.34s"
  static let layout_home_essence_gap_y = "-8px"
  static let layout_home_essence_gap_scale = "0.985"
  static let layout_home_essence_gap_blur = "0.3px"
  static let layout_home_essence_hide_y = "-64px"
  static let layout_home_essence_mobile_layer_size = "1.45rem"
  static let layout_home_essence_mobile_layer_line_height = "1.18"
  static let layout_home_essence_desktop_layer_size = "2.2rem"
  static let layout_account_drawer_panel_width = "min(40rem, calc(100vw - (2 * var(--site-gutter, 24px))))"
  static let layout_account_drawer_panel_width_mobile = "min(100vw, calc(100vw - (1.05 * var(--site-gutter, 20px))))"
  static let layout_account_drawer_shell_padding_y = "1.6rem"
  static let layout_account_drawer_shell_padding_x = "2rem"
  static let layout_account_drawer_shell_padding_y_tablet = "1.36rem"
  static let layout_account_drawer_shell_padding_x_tablet = "1.7rem"
  static let layout_account_drawer_shell_padding_y_mobile = "1.2rem"
  static let layout_account_drawer_shell_padding_x_mobile = "1.28rem"
  static let layout_account_drawer_close_offset = "1rem"
  static let layout_account_drawer_close_offset_tablet = "0.82rem"
  static let layout_account_drawer_close_offset_mobile = "0.68rem"
  static let layout_account_drawer_header_padding_bottom_mobile = "1.04rem"
  static let layout_account_drawer_content_stage_padding_inline = "4.8rem"
  static let layout_account_drawer_content_stage_padding_inline_tablet = "3.2rem"
  static let layout_account_drawer_content_stage_padding_inline_mobile = "1.8rem"
  static let layout_account_drawer_body_gap_mobile = "1.04rem"
  static let layout_account_drawer_entry_card_padding = "1.06rem"
  static let layout_account_drawer_entry_card_padding_mobile = "0.96rem"
  static let layout_account_drawer_entry_title_size_mobile = "0.98rem"
  static let layout_account_drawer_entry_copy_size_mobile = "0.9rem"
  static let layout_account_drawer_meta_link_size = "0.82rem"
  static let layout_account_drawer_meta_link_size_mobile = "0.78rem"
  static let layout_account_drawer_segment_title_weight = "400"
  static let layout_account_drawer_segment_title_max_width = "18ch"
  static let layout_account_drawer_text_link_weight = "400"
  static let layout_account_drawer_text_link_opacity = "1"
  static let layout_account_drawer_text_link_opacity_hover = "1"
  static let layout_account_drawer_copy_weight = "300"
  static let layout_account_drawer_entry_badge_min_height = "1.66rem"
  static let layout_account_drawer_entry_badge_padding_y = "0.3rem"
  static let layout_account_drawer_entry_badge_padding_x = "0.58rem"
  static let layout_account_drawer_entry_badge_weight = "500"
  static let layout_account_drawer_entry_badge_line_height = "1"
  static let layout_account_drawer_entry_title_weight = "400"
  static let layout_account_drawer_profile_title_max_width = "19ch"
  static let layout_account_drawer_profile_copy_max_width = "42ch"
  static let account_provider_google_section_gap = "1rem"
  static let profile_panel_gap = "1rem"
  static let profile_dashboard_progress = "0%"
  static let layout_interaction_settings_panel_width = "min(68rem, calc(100vw - (2 * var(--site-gutter))))"
  static let layout_interaction_settings_panel_height = "min(42rem, calc(100svh - var(--cc-interaction-settings-panel-top) - var(--cc-interaction-settings-panel-bottom)))"
  static let layout_interaction_settings_panel_radius = "var(--cc-home-platform-radius)"
  static let layout_interaction_settings_panel_padding = "var(--cc-home-platform-padding)"
  static let layout_interaction_settings_panel_gap = "var(--cc-home-platform-gap)"
  static let layout_interaction_settings_panel_shadow = "var(--cc-home-platform-shadow)"
  static let layout_interaction_settings_panel_blur = "var(--cc-home-platform-blur)"
  static let layout_interaction_settings_panel_saturate = "var(--cc-home-platform-saturate)"
  static let layout_interaction_settings_panel_body_gap = "var(--cc-home-platform-gap)"
  static let layout_interaction_settings_panel_nav_radius = "1rem"
  static let layout_interaction_settings_panel_content_radius = "1rem"
  static let layout_interaction_settings_panel_icon_size = "1rem"
  static let layout_interaction_settings_panel_nav_width = "13.4rem"
  static let layout_interaction_settings_panel_nav_width_tablet = "11rem"
  static let layout_interaction_settings_panel_nav_opacity = "0.72"
  static let layout_interaction_settings_panel_nav_hover_opacity = "1"
  static let layout_interaction_settings_panel_nav_font_size = "0.82rem"
  static let layout_interaction_settings_panel_nav_font_weight = "500"
  static let layout_interaction_settings_panel_nav_line_height = "1.2"
  static let layout_interaction_settings_panel_nav_item_radius = "0.82rem"
  static let layout_interaction_settings_panel_nav_item_padding = "0.76rem"
  static let layout_interaction_settings_header_gap = "1rem"
  static let layout_interaction_settings_title_block_gap = "0.18rem"
  static let layout_interaction_settings_eyebrow_size = "0.68rem"
  static let layout_interaction_settings_eyebrow_weight = "600"
  static let layout_interaction_settings_eyebrow_tracking = "0.12em"
  static let layout_interaction_settings_eyebrow_line_height = "1.2"
  static let layout_interaction_settings_title_size = "1.02rem"
  static let layout_interaction_settings_title_weight = "650"
  static let layout_interaction_settings_nav_gap = "0.28rem"
  static let layout_interaction_settings_section_gap = "0.68rem"
  static let layout_interaction_settings_section_heading_gap = "0.38rem"
  static let layout_interaction_settings_section_title_tracking = "0.08em"
  static let layout_interaction_settings_option_grid_gap = "0.42rem"
  static let layout_interaction_settings_option_gap = "0.22rem"
  static let layout_interaction_settings_option_padding_y = "0.82rem"
  static let layout_interaction_settings_option_label_size = "0.84rem"
  static let layout_interaction_settings_option_label_weight = "650"
  static let layout_interaction_settings_option_description_size = "0.72rem"
  static let layout_interaction_settings_option_description_weight = "400"
  static let layout_interaction_settings_option_description_line_height = "1.42"
  static let layout_interaction_settings_row_gap = "0.75rem"
  static let layout_interaction_settings_row_padding_y = "0.72rem"
  static let layout_interaction_settings_row_weight = "600"
  static let layout_interaction_settings_row_value_weight = "500"
  static let layout_interaction_settings_toggle_row_gap = "0.9rem"
  static let layout_interaction_settings_toggle_row_padding_y = "0.74rem"
  static let layout_interaction_settings_toggle_radius = "999px"
  static let layout_interaction_settings_toggle_width = "2.42rem"
  static let layout_interaction_settings_toggle_height = "1.34rem"
  static let layout_interaction_settings_toggle_padding = "0.16rem"
  static let layout_interaction_settings_toggle_thumb_size = "1.02rem"
  static let layout_interaction_settings_status_padding_y = "0.58rem"
  static let layout_interaction_settings_status_padding_x = "0.68rem"
  static let layout_interaction_settings_status_radius = "0.88rem"
  static let layout_interaction_settings_status_line_height = "1.45"
  static let layout_office_internal_correspondence_panel_surface = "rgba(255, 255, 255, 0.04)"
  static let layout_office_internal_correspondence_panel_border_fallback = "rgba(255, 255, 255, 0.08)"
  static let layout_office_internal_correspondence_text_fallback = "rgba(255, 255, 255, 0.92)"
  static let layout_office_internal_correspondence_muted_fallback = "rgba(255, 255, 255, 0.62)"
  static let layout_office_internal_correspondence_soft_fallback = "rgba(255, 255, 255, 0.12)"
  static let layout_office_internal_correspondence_page_glow_left = "rgba(255, 255, 255, 0.06)"
  static let layout_office_internal_correspondence_page_glow_right = "rgba(255, 255, 255, 0.03)"
  static let layout_office_internal_correspondence_page_wash_top = "rgba(255, 255, 255, 0.015)"
  static let layout_office_internal_correspondence_page_wash_bottom = "rgba(255, 255, 255, 0)"
  static let layout_office_internal_correspondence_max_width = "1200px"
  static let layout_office_internal_correspondence_radius = "24px"
  static let layout_office_internal_correspondence_radius_outer_offset = "4px"
  static let layout_office_internal_correspondence_shadow = "0 24px 80px rgba(0, 0, 0, 0.34)"
  static let layout_office_internal_correspondence_shell_gap = "32px"
  static let layout_office_internal_correspondence_shell_padding_top = "56px"
  static let layout_office_internal_correspondence_shell_padding_inline = "24px"
  static let layout_office_internal_correspondence_shell_padding_bottom = "80px"
  static let layout_office_internal_correspondence_surface_max_width = "1440px"
  static let layout_office_internal_correspondence_menu_gap = "24px"
  static let layout_office_internal_correspondence_footer_gap = "32px"
  static let layout_office_internal_correspondence_layout_gap = "24px"
  static let layout_office_internal_correspondence_sidebar_width = "320px"
  static let layout_office_internal_correspondence_content_min_width = "0"
  static let layout_office_internal_correspondence_sidebar_top_offset = "110px"
  static let layout_office_internal_correspondence_section_gap = "24px"
  static let layout_office_internal_correspondence_header_surface_top = "rgba(255, 255, 255, 0.05)"
  static let layout_office_internal_correspondence_header_surface_bottom = "rgba(255, 255, 255, 0.025)"
  static let layout_office_internal_correspondence_header_padding = "40px"
  static let layout_office_internal_correspondence_header_padding_mobile = "24px"
  static let layout_office_internal_correspondence_eyebrow_margin_bottom = "16px"
  static let layout_office_internal_correspondence_eyebrow_size = "0.78rem"
  static let layout_office_internal_correspondence_eyebrow_weight = "600"
  static let layout_office_internal_correspondence_eyebrow_tracking = "0.14em"
  static let layout_office_internal_correspondence_title_size = "clamp(2.4rem, 4vw, 4.2rem)"
  static let layout_office_internal_correspondence_title_size_mobile = "2.4rem"
  static let layout_office_internal_correspondence_title_line_height = "0.94"
  static let layout_office_internal_correspondence_title_tracking = "-0.05em"
  static let layout_office_internal_correspondence_title_weight = "600"
  static let layout_office_internal_correspondence_title_max_width = "900px"
  static let layout_office_internal_correspondence_copy_margin_top = "20px"
  static let layout_office_internal_correspondence_copy_max_width = "760px"
  static let layout_office_internal_correspondence_copy_size = "1rem"
  static let layout_office_internal_correspondence_copy_line_height = "1.7"
  static let layout_office_internal_correspondence_grid_gap = "24px"
  static let layout_office_internal_correspondence_card_padding = "28px"
  static let layout_office_internal_correspondence_card_padding_mobile = "24px"
  static let layout_office_internal_correspondence_card_gap = "18px"
  static let layout_office_internal_correspondence_card_title_size = "1.15rem"
  static let layout_office_internal_correspondence_card_title_weight = "600"
  static let layout_office_internal_correspondence_card_title_tracking = "-0.02em"
  static let layout_office_internal_correspondence_card_copy_size = "0.96rem"
  static let layout_office_internal_correspondence_card_copy_line_height = "1.65"
  static let layout_office_internal_correspondence_link_list_gap = "10px"
  static let layout_office_internal_correspondence_link_opacity = "0.92"
  static let layout_office_internal_correspondence_link_opacity_hover = "1"
  static let layout_office_internal_correspondence_link_motion = "180ms"
  static let layout_office_internal_correspondence_subgrid_gap = "16px"
  static let layout_office_internal_correspondence_subcard_radius = "18px"
  static let layout_office_internal_correspondence_subcard_padding = "20px"
  static let layout_office_internal_correspondence_subcard_surface = "rgba(255, 255, 255, 0.025)"
  static let layout_office_internal_correspondence_subcard_gap = "12px"
  static let layout_office_internal_correspondence_subcard_title_size = "0.98rem"
  static let layout_office_internal_correspondence_subcard_title_weight = "600"
  static let layout_office_internal_correspondence_subcard_title_tracking = "-0.02em"
  static let layout_office_internal_correspondence_subcard_copy_size = "0.92rem"
  static let layout_office_internal_correspondence_subcard_copy_line_height = "1.6"
  static let layout_office_internal_correspondence_mobile_shell_padding_top = "18px"
  static let layout_office_internal_correspondence_mobile_shell_padding_inline = "16px"
  static let layout_office_internal_correspondence_mobile_shell_padding_bottom = "48px"
  static let layout_cookie_language_overlay_shadow = "0 20px 60px color-mix(in srgb, var(--shadow-color, #000000) 8%, transparent)"
  static let layout_cookie_language_overlay_shadow_dark = "0 24px 70px color-mix(in srgb, var(--shadow-color, #000000) 24%, transparent)"
  static let layout_cookie_language_overlay_width = "min(36rem, calc(100vw - (2 * var(--site-gutter, 24px))))"
  static let layout_cookie_language_overlay_max_height = "min(46rem, calc(100vh - 3rem))"
  static let layout_cookie_language_overlay_max_height_mobile = "min(42rem, calc(100vh - 1.6rem))"
  static let layout_cookie_language_overlay_min_height = "24rem"
  static let layout_cookie_language_overlay_region_min_height_mobile = "12rem"
  static let layout_cookie_language_overlay_radius = "1.9rem"
  static let layout_cookie_language_overlay_toolbar_padding_top = "1.02rem"
  static let layout_cookie_language_overlay_toolbar_gap = "0.44rem"
  static let layout_cookie_language_overlay_toolbar_mobile_offset = "0.2rem"
  static let layout_cookie_language_overlay_search_to_list_gap = "0.68rem"
  static let layout_cookie_language_overlay_list_padding_top = "0"
  static let layout_cookie_language_overlay_list_padding_bottom = "1rem"
  static let layout_cookie_language_overlay_back_icon_size = "1rem"
  static let layout_cookie_language_overlay_motion_fast = "200ms"
  static let layout_cookie_language_overlay_search_min_height = "3rem"
  static let layout_cookie_language_overlay_search_padding_y = "0.82rem"
  static let layout_cookie_language_overlay_search_padding_x = "1rem"
  static let layout_cookie_language_overlay_search_radius = "999px"
  static let layout_cookie_language_overlay_search_size = "0.94rem"
  static let layout_cookie_language_overlay_search_weight = "300"
  static let layout_cookie_language_overlay_search_tracking = "-0.015em"
  static let layout_cookie_language_overlay_search_line_height = "1.2"
  static let layout_cookie_language_overlay_regions_gap = "0.56rem"
  static let layout_cookie_language_overlay_section_gap = "0.68rem"
  static let layout_cookie_language_overlay_group_gap = "0.5rem"
  static let layout_cookie_language_overlay_country_gap = "1rem"
  static let layout_cookie_language_overlay_country_padding_y = "0.98rem"
  static let layout_cookie_language_overlay_country_padding_x = "1rem"
  static let layout_cookie_language_overlay_country_radius = "1rem"
  static let layout_cookie_language_overlay_country_copy_gap = "1rem"
  static let layout_cookie_language_overlay_country_copy_gap_mobile = "0.82rem"
  static let layout_cookie_language_overlay_country_title_size = "1.08rem"
  static let layout_cookie_language_overlay_country_title_size_mobile = "1rem"
  static let layout_cookie_language_overlay_country_title_weight = "300"
  static let layout_cookie_language_overlay_country_title_tracking = "-0.03em"
  static let layout_cookie_language_overlay_country_title_line_height = "1.12"
  static let layout_cookie_language_overlay_country_subtitle_size = "0.88rem"
  static let layout_cookie_language_overlay_country_subtitle_size_mobile = "0.84rem"
  static let layout_cookie_language_overlay_country_subtitle_weight = "300"
  static let layout_cookie_language_overlay_country_subtitle_tracking = "-0.012em"
  static let layout_cookie_language_overlay_country_subtitle_line_height = "1.35"
  static let layout_country_container_pad = "0px"
  static let layout_country_motion_fast = "220ms"
  static let layout_country_motion_medium = "240ms"
  static let layout_country_motion_overlay = "620ms"
  static let layout_country_motion_inner_transform = "1400ms"
  static let layout_country_motion_inner_opacity = "900ms"
  static let layout_country_motion_close_transform = "1500ms"
  static let layout_country_motion_close_opacity = "1100ms"
  static let layout_country_motion_item_transform = "980ms"
  static let layout_country_motion_item_opacity = "720ms"
  static let layout_country_motion_ease = "cubic-bezier(0.22,1,0.36,1)"
  static let layout_country_overlay_blur = "16px"
  static let layout_country_overlay_separator_opacity = "0.35"
  static let layout_country_heading_opacity = "0.85"
  static let layout_country_option_opacity = "0.9"
  static let layout_country_option_hover_opacity = "1"
  static let layout_country_overlay_padding_block = "clamp(3rem, 6vh, 5rem)"
  static let layout_country_overlay_inner_gap = "1.5rem"
  static let layout_country_overlay_inner_enter_y = "48px"
  static let layout_country_overlay_inner_enter_scale = "0.98"
  static let layout_country_overlay_inner_close_y = "64px"
  static let layout_country_overlay_inner_close_scale = "0.965"
  static let layout_country_title_size = "1.4rem"
  static let layout_country_title_size_mobile = "1.6rem"
  static let layout_country_title_size_small = "1.4rem"
  static let layout_country_title_weight = "300"
  static let layout_country_title_line_height = "1.2"
  static let layout_country_title_tracking = "0.02em"
  static let layout_country_region_gap = "0.75rem"
  static let layout_country_region_title_size = "1.1rem"
  static let layout_country_region_title_size_mobile = "1rem"
  static let layout_country_region_title_size_small = "0.95rem"
  static let layout_country_region_title_weight = "700"
  static let layout_country_region_title_margin_bottom = "0.5rem"
  static let layout_country_separator_margin_top = "0.5rem"
  static let layout_country_separator_margin_bottom = "1rem"
  static let layout_country_separator_height = "1px"
  static let layout_country_list_row_gap = "0.5rem"
  static let layout_country_list_column_gap = "2rem"
  static let layout_country_list_width_large = "25%"
  static let layout_country_list_gap_large = "1.5rem"
  static let layout_country_list_width_default = "33%"
  static let layout_country_list_gap_default = "1.33rem"
  static let layout_country_list_width_tablet = "50%"
  static let layout_country_list_gap_tablet = "1rem"
  static let layout_country_list_width_mobile = "100%"
  static let layout_country_list_min_width = "150px"
  static let layout_country_item_enter_y = "36px"
  static let layout_country_item_delay_01 = "100ms"
  static let layout_country_item_delay_02 = "130ms"
  static let layout_country_item_delay_03 = "160ms"
  static let layout_country_item_delay_04 = "190ms"
  static let layout_country_item_delay_05 = "220ms"
  static let layout_country_item_delay_06 = "250ms"
  static let layout_country_item_delay_07 = "280ms"
  static let layout_country_item_delay_08 = "310ms"
  static let layout_country_item_delay_09 = "340ms"
  static let layout_country_item_delay_10 = "370ms"
  static let layout_country_item_delay_11 = "400ms"
  static let layout_country_item_delay_12 = "430ms"
  static let layout_country_option_size = "1rem"
  static let layout_country_option_size_mobile = "0.95rem"
  static let layout_country_option_size_small = "0.9rem"
  static let layout_country_option_weight = "300"
  static let layout_office_menu_bg = "rgba(7, 7, 7, 0.86)"
  static let layout_office_menu_panel = "rgba(255, 255, 255, 0.04)"
  static let layout_office_menu_border_fallback = "rgba(255, 255, 255, 0.08)"
  static let layout_office_menu_text_fallback = "rgba(255, 255, 255, 0.92)"
  static let layout_office_menu_muted_fallback = "rgba(255, 255, 255, 0.58)"
  static let layout_office_menu_soft_fallback = "rgba(255, 255, 255, 0.12)"
  static let layout_office_menu_max_width = "1440px"
  static let layout_office_menu_radius = "22px"
  static let layout_office_menu_shadow = "0 20px 60px rgba(0, 0, 0, 0.26)"
  static let layout_office_menu_blur = "18px"
  static let layout_office_menu_shell_padding_inline = "24px"
  static let layout_office_menu_shell_padding_top = "18px"
  static let layout_office_menu_shell_gap = "10px"
  static let layout_office_menu_inner_min_height = "72px"
  static let layout_office_menu_inner_gap = "24px"
  static let layout_office_menu_inner_padding_y = "16px"
  static let layout_office_menu_inner_padding_x = "20px"
  static let layout_office_menu_brand_gap = "4px"
  static let layout_office_menu_brand_size = "0.96rem"
  static let layout_office_menu_brand_weight = "600"
  static let layout_office_menu_brand_tracking = "-0.02em"
  static let layout_office_menu_context_size = "0.78rem"
  static let layout_office_menu_context_tracking = "0.02em"
  static let layout_office_menu_nav_gap = "18px"
  static let layout_office_menu_link_motion = "180ms"
  static let layout_office_menu_link_padding_y = "8px"
  static let layout_office_menu_link_padding_x = "2px"
  static let layout_office_menu_link_size = "0.9rem"
  static let layout_office_menu_link_opacity = "0.88"
  static let layout_office_menu_link_opacity_active = "1"
  static let layout_office_menu_utility_gap = "14px"
  static let layout_office_menu_status_min_height = "34px"
  static let layout_office_menu_status_padding_x = "12px"
  static let layout_office_menu_status_radius = "999px"
  static let layout_office_menu_status_size = "0.78rem"
  static let layout_office_menu_status_tracking = "0.08em"
  static let layout_office_menu_toggle_min_height = "38px"
  static let layout_office_menu_toggle_padding_x = "14px"
  static let layout_office_menu_mobile_panel_gap = "8px"
  static let layout_office_menu_mobile_panel_padding = "14px"
  static let layout_office_menu_mobile_panel_bg = "rgba(7, 7, 7, 0.94)"
  static let layout_office_menu_mobile_link_min_height = "42px"
  static let layout_office_menu_mobile_link_padding_x = "10px"
  static let layout_office_menu_mobile_link_radius = "12px"
  static let layout_office_menu_mobile_link_opacity = "0.9"
  static let layout_office_menu_tablet_nav_gap = "14px"
  static let layout_office_menu_tablet_link_size = "0.86rem"
  static let layout_office_menu_mobile_shell_padding_top = "14px"
  static let layout_office_menu_mobile_shell_padding_inline = "16px"
  static let layout_office_menu_mobile_inner_gap = "16px"
  static let layout_office_menu_mobile_inner_padding_y = "14px"
  static let layout_office_menu_mobile_inner_padding_x = "16px"
  static let layout_feed_main_column = "1.2fr"
  static let layout_feed_discovery_min = "18rem"
  static let layout_feed_discovery_column = "0.8fr"
  static let layout_feed_layout_gap = "1.5rem"
  static let layout_feed_panel_gap = "1.25rem"
  static let layout_feed_composer_min_height = "7.5rem"
  static let layout_feed_input_line_height = "1.7"
  static let layout_feed_action_min_height = "2.6rem"
  static let layout_feed_action_padding_x = "1rem"
  static let layout_feed_action_radius = "999px"
  static let layout_feed_motion = "220ms"
  static let layout_feed_header_gap = "1rem"
  static let layout_feed_tab_gap = "0.75rem"
  static let layout_feed_tab_min_height = "2.2rem"
  static let layout_feed_tab_padding_x = "0.95rem"
  static let layout_feed_sort_gap = "0.45rem"
  static let layout_feed_sort_label_size = "0.86rem"
  static let layout_feed_sort_label_line_height = "1.6"
  static let layout_feed_select_min_height = "2.8rem"
  static let layout_feed_select_padding_x = "1rem"
  static let layout_feed_select_radius = "1rem"
  static let layout_feed_stream_gap = "1.15rem"
  static let layout_feed_post_gap = "0.85rem"
  static let layout_feed_post_padding_bottom = "1.1rem"
  static let layout_feed_post_identity_gap = "0.85rem"
  static let layout_feed_avatar_size = "3rem"
  static let layout_feed_avatar_radius = "999px"
  static let layout_feed_avatar_fallback_size = "0.92rem"
  static let layout_feed_avatar_fallback_weight = "600"
  static let layout_feed_avatar_fallback_tracking = "0.06em"
  static let layout_feed_identity_gap = "0.32rem"
  static let layout_feed_row_gap = "0.55rem"
  static let layout_feed_entity_size = "1rem"
  static let layout_feed_entity_weight = "500"
  static let layout_feed_entity_line_height = "1.32"
  static let layout_feed_handle_size = "0.82rem"
  static let layout_feed_handle_line_height = "1.5"
  static let layout_feed_chip_min_height = "1.85rem"
  static let layout_feed_chip_padding_x = "0.72rem"
  static let layout_feed_chip_radius = "999px"
  static let layout_feed_chip_size = "0.72rem"
  static let layout_feed_chip_tracking = "0.04em"
  static let layout_feed_badge_gap = "0.4rem"
  static let layout_feed_badge_blue = "#1d9bf0"
  static let layout_feed_badge_border_mix = "30%"
  static let layout_feed_badge_bg_mix = "10%"
  static let layout_feed_badge_weight = "600"
  static let layout_feed_badge_icon_size = "0.82rem"
  static let layout_feed_copy_line_height = "1.72"
  static let layout_feed_post_action_min_height = "2.35rem"
  static let layout_feed_post_action_padding_x = "0.92rem"
  static let layout_feed_post_action_size = "0.76rem"
  static let layout_home_profile_control_panel_width = "min(24rem, calc(100vw - (var(--cc-shell-panel-inline-padding) * 2)))"
  static let layout_home_profile_control_panel_inner_gap = "1.25rem"
  static let layout_home_profile_control_panel_inner_padding_top = "1.25rem"
  static let layout_home_profile_control_panel_inner_padding_right = "0"
  static let layout_home_profile_control_panel_inner_padding_bottom = "2rem"
  static let layout_home_profile_control_panel_inner_padding_left = "0"
  static let layout_home_profile_control_panel_inner_padding_top_mobile = "1rem"
  static let layout_home_profile_control_panel_header_gap = "1rem"
  static let layout_home_profile_control_panel_header_padding_bottom = "0.95rem"
  static let layout_home_profile_control_panel_eyebrow_margin_bottom = "0.35rem"
  static let layout_home_profile_control_panel_section_gap = "0.7rem"
  static let layout_home_profile_control_panel_stack_gap = "0.45rem"
  static let layout_home_profile_control_panel_identity_gap = "0.9rem"
  static let layout_home_profile_control_panel_identity_padding_y = "0.9rem"
  static let layout_home_profile_control_panel_identity_padding_x = "0.95rem"
  static let layout_home_profile_control_panel_avatar_size = "3rem"
  static let layout_home_profile_control_panel_avatar_radius = "999px"
  static let layout_home_profile_control_panel_avatar_fallback_size = "0.95rem"
  static let layout_home_profile_control_panel_avatar_fallback_weight = "600"
  static let layout_home_profile_control_panel_avatar_fallback_tracking = "0.06em"
  static let layout_home_profile_control_panel_name_margin_bottom = "0.2rem"
  static let layout_home_profile_control_panel_name_size = "0.92rem"
  static let layout_home_profile_control_panel_name_weight = "500"
  static let layout_home_profile_control_panel_username_margin_bottom = "0.25rem"
  static let layout_home_profile_control_panel_username_size = "0.76rem"
  static let layout_home_profile_control_panel_username_weight = "500"
  static let layout_home_profile_control_panel_username_tracking = "0.1em"
  static let layout_home_profile_control_panel_plan_margin_bottom = "0.35rem"
  static let layout_home_profile_control_panel_plan_size = "0.78rem"
  static let layout_home_profile_control_panel_plan_weight = "500"
  static let layout_home_profile_control_panel_plan_tracking = "0.06em"
  static let layout_home_profile_control_panel_meta_size = "0.82rem"
  static let layout_home_profile_control_panel_meta_line_height = "1.5"
  static let layout_home_profile_control_panel_route_link_margin_top = "0.55rem"
  static let layout_home_profile_control_panel_route_link_size = "0.82rem"
  static let layout_home_profile_control_panel_route_link_line_height = "1.3"
  static let layout_home_profile_control_panel_status_grid_gap = "0.55rem"
  static let layout_home_profile_control_panel_status_card_gap = "0.35rem"
  static let layout_home_profile_control_panel_status_card_padding_y = "0.85rem"
  static let layout_home_profile_control_panel_status_card_padding_x = "0.9rem"
  static let layout_home_profile_control_panel_status_label_size = "0.68rem"
  static let layout_home_profile_control_panel_status_label_weight = "500"
  static let layout_home_profile_control_panel_status_label_tracking = "0.12em"
  static let layout_home_profile_control_panel_status_value_size = "0.86rem"
  static let layout_home_profile_control_panel_status_value_weight = "500"
  static let layout_home_profile_control_panel_status_value_line_height = "1.3"
  static let layout_home_profile_control_panel_route_status_size = "0.82rem"
  static let layout_home_profile_control_panel_route_status_line_height = "1.5"
  static let layout_home_profile_control_panel_item_min_height = "2.8rem"
  static let layout_home_profile_control_panel_item_padding_y = "0.78rem"
  static let layout_home_profile_control_panel_item_padding_x = "0.92rem"
  static let layout_home_profile_control_panel_item_size = "0.84rem"
  static let layout_home_profile_control_panel_item_weight = "500"
  static let layout_home_profile_control_panel_item_tracking = "0.02em"
  static let layout_office_footer_bg = "rgba(7, 7, 7, 0.82)"
  static let layout_office_footer_panel = "rgba(255, 255, 255, 0.04)"
  static let layout_office_footer_border_fallback = "rgba(255, 255, 255, 0.08)"
  static let layout_office_footer_text_fallback = "rgba(255, 255, 255, 0.92)"
  static let layout_office_footer_muted_fallback = "rgba(255, 255, 255, 0.58)"
  static let layout_office_footer_soft_fallback = "rgba(255, 255, 255, 0.12)"
  static let layout_office_footer_max_width = "1440px"
  static let layout_office_footer_radius = "28px"
  static let layout_office_footer_shadow = "0 20px 60px rgba(0, 0, 0, 0.24)"
  static let layout_office_footer_shell_padding_top = "0"
  static let layout_office_footer_shell_padding_inline = "24px"
  static let layout_office_footer_shell_padding_bottom = "32px"
  static let layout_office_footer_inner_gap = "28px"
  static let layout_office_footer_inner_padding = "32px"
  static let layout_office_footer_brand_gap = "12px"
  static let layout_office_footer_brand_max_width = "720px"
  static let layout_office_footer_eyebrow_size = "0.78rem"
  static let layout_office_footer_eyebrow_weight = "600"
  static let layout_office_footer_eyebrow_tracking = "0.14em"
  static let layout_office_footer_title_size = "1.8rem"
  static let layout_office_footer_title_line_height = "1.04"
  static let layout_office_footer_title_weight = "600"
  static let layout_office_footer_title_tracking = "-0.04em"
  static let layout_office_footer_copy_size = "0.98rem"
  static let layout_office_footer_copy_line_height = "1.72"
  static let layout_office_footer_columns_count = "3"
  static let layout_office_footer_columns_gap = "20px"
  static let layout_office_footer_column_gap = "14px"
  static let layout_office_footer_column_padding = "18px"
  static let layout_office_footer_column_radius = "18px"
  static let layout_office_footer_column_title_size = "0.95rem"
  static let layout_office_footer_column_title_weight = "600"
  static let layout_office_footer_column_title_tracking = "-0.02em"
  static let layout_office_footer_link_gap = "10px"
  static let layout_office_footer_link_motion = "180ms"
  static let layout_office_footer_link_opacity = "0.9"
  static let layout_office_footer_link_opacity_hover = "1"
  static let layout_office_footer_meta_gap = "12px"
  static let layout_office_footer_meta_label_size = "0.84rem"
  static let layout_office_footer_meta_label_tracking = "0.04em"
  static let layout_office_footer_meta_value_size = "0.92rem"
  static let layout_office_footer_meta_value_weight = "600"
  static let layout_office_footer_bottom_gap = "16px"
  static let layout_office_footer_bottom_padding_top = "8px"
  static let layout_office_footer_legal_size = "0.84rem"
  static let layout_office_footer_legal_line_height = "1.5"
  static let layout_office_footer_mobile_shell_padding_top = "0"
  static let layout_office_footer_mobile_shell_padding_inline = "16px"
  static let layout_office_footer_mobile_shell_padding_bottom = "24px"
  static let layout_office_footer_mobile_inner_padding = "24px"
  static let layout_models_toolbar_gap = "1.15rem"
  static let layout_models_toolbar_top_gap = "1rem"
  static let layout_models_sort_gap = "0.45rem"
  static let layout_models_sort_label_size = "0.86rem"
  static let layout_models_sort_label_line_height = "1.6"
  static let layout_models_select_min_height = "3.4rem"
  static let layout_models_select_padding_x = "1rem"
  static let layout_models_select_radius = "1rem"
  static let layout_models_filter_row_gap = "0.75rem"
  static let layout_models_filter_chip_min_height = "2.2rem"
  static let layout_models_filter_chip_padding_x = "0.95rem"
  static let layout_models_filter_chip_radius = "999px"
  static let layout_models_motion = "220ms"
  static let layout_models_filter_groups_count = "2"
  static let layout_models_filter_groups_gap = "1rem"
  static let layout_models_filter_group_gap = "0.55rem"
  static let layout_models_filter_label_size = "0.78rem"
  static let layout_models_filter_label_weight = "500"
  static let layout_models_filter_label_tracking = "0.1em"
  static let layout_models_card_column_span = "6"
  static let layout_models_card_column_span_mobile = "12"
  static let layout_models_card_identity_gap = "0.9rem"
  static let layout_models_avatar_size = "3rem"
  static let layout_models_avatar_radius = "999px"
  static let layout_models_avatar_fallback_size = "0.92rem"
  static let layout_models_avatar_fallback_weight = "600"
  static let layout_models_avatar_fallback_tracking = "0.06em"
  static let layout_models_identity_copy_gap = "0.3rem"
  static let layout_models_title_row_gap = "0.6rem"
  static let layout_models_verification_gap = "0.42rem"
  static let layout_models_verification_min_height = "1.9rem"
  static let layout_models_verification_padding_x = "0.7rem"
  static let layout_models_verification_radius = "999px"
  static let layout_models_verification_blue = "#1d9bf0"
  static let layout_models_verification_border_mix = "30%"
  static let layout_models_verification_bg_mix = "10%"
  static let layout_models_verification_size = "0.72rem"
  static let layout_models_verification_weight = "600"
  static let layout_models_verification_tracking = "0.08em"
  static let layout_models_verification_icon_size = "0.9rem"
  static let layout_models_handle_size = "0.82rem"
  static let layout_models_handle_tracking = "0.08em"
  static let layout_models_meta_gap = "0.55rem"
  static let layout_models_meta_row_gap = "1rem"
  static let layout_models_meta_size = "0.82rem"
  static let layout_models_meta_line_height = "1.5"
  static let layout_models_meta_strong_weight = "500"
  static let layout_models_actions_gap = "0.75rem"
  static let layout_models_action_min_height = "2.6rem"
  static let layout_models_action_padding_x = "1rem"
  static let layout_models_action_radius = "999px"
  static let layout_legal_page_narrow_width = "920px"
  static let layout_legal_page_border_fallback = "rgba(255, 255, 255, 0.1)"
  static let layout_legal_page_surface = "rgba(255, 255, 255, 0.03)"
  static let layout_legal_page_muted = "rgba(255, 255, 255, 0.64)"
  static let layout_legal_page_soft = "rgba(255, 255, 255, 0.5)"
  static let layout_legal_page_body_min_height = "100vh"
  static let layout_legal_page_shell_padding_top = "160px"
  static let layout_legal_page_shell_padding_right = "0"
  static let layout_legal_page_shell_padding_bottom = "96px"
  static let layout_legal_page_shell_padding_left = "0"
  static let layout_legal_page_shell_padding_top_tablet = "136px"
  static let layout_legal_page_shell_padding_top_mobile = "124px"
  static let layout_legal_page_shell_padding_bottom_mobile = "72px"
  static let layout_legal_page_header_gap = "20px"
  static let layout_legal_page_header_max_width = "1100px"
  static let layout_legal_page_eyebrow_size = "0.76rem"
  static let layout_legal_page_eyebrow_tracking = "0.16em"
  static let layout_legal_page_title_size = "64px"
  static let layout_legal_page_title_size_tablet = "52px"
  static let layout_legal_page_title_size_mobile = "42px"
  static let layout_legal_page_title_line_height = "0.96"
  static let layout_legal_page_title_tracking = "-0.05em"
  static let layout_legal_page_intro_line_height = "1.72"
  static let layout_legal_page_meta_gap = "12px"
  static let layout_legal_page_meta_margin_top = "4px"
  static let layout_legal_page_meta_padding_y = "10px"
  static let layout_legal_page_meta_padding_x = "12px"
  static let layout_legal_page_meta_size = "0.86rem"
  static let layout_legal_page_divider_height = "1px"
  static let layout_legal_page_divider_margin_top = "40px"
  static let layout_legal_page_divider_margin_bottom = "44px"
  static let layout_legal_page_divider_margin_top_mobile = "30px"
  static let layout_legal_page_divider_margin_bottom_mobile = "32px"
  static let layout_legal_page_content_gap = "40px"
  static let layout_legal_page_content_gap_mobile = "32px"
  static let layout_legal_page_section_gap = "14px"
  static let layout_legal_page_section_title_size = "1.18rem"
  static let layout_legal_page_section_title_line_height = "1.2"
  static let layout_legal_page_section_title_tracking = "-0.02em"
  static let layout_legal_page_list_padding_inline_start = "20px"
  static let layout_legal_page_list_gap = "8px"
  static let layout_legal_page_callout_gap = "8px"
  static let layout_legal_page_callout_padding_y = "18px"
  static let layout_legal_page_callout_padding_x = "20px"
  static let layout_legal_page_footer_margin_top = "52px"
  static let layout_legal_page_footer_padding_top = "24px"
  static let layout_legal_page_footer_line_height = "1.7"
  static let layout_legal_page_link_border_rest = "rgba(255, 255, 255, 0.22)"
  static let layout_legal_page_link_border_hover = "rgba(255, 255, 255, 0.4)"
  static let layout_about_icos_node_width = "min(30rem, 34vw)"
  static let layout_about_icos_node_width_desktop = "30rem"
  static let layout_about_icos_node_width_tablet = "min(24rem, 46vw)"
  static let layout_about_icos_node_width_tablet_max = "24rem"
  static let layout_about_icos_node_width_mobile = "min(18rem, 68vw)"
  static let layout_about_icos_node_width_mobile_max = "18rem"
  static let layout_about_anchor_max_width = "26rem"
  static let layout_about_anchor_max_width_wide = "28rem"
  static let layout_about_icos_copy_body_width = "28rem"
  static let layout_about_icos_copy_body_width_tablet = "26rem"
  static let layout_about_icos_copy_gap = "clamp(var(--spacing-lg), 3vw, var(--spacing-xl))"
  static let layout_about_section_title_size_desktop = "2.08rem"
  static let layout_about_section_title_size_wide = "2.3rem"
  static let layout_about_section_title_size_tablet = "1.82rem"
  static let layout_about_section_title_size_mobile = "1.56rem"
  static let layout_about_section_title_weight = "300"
  static let layout_about_section_title_opacity = "1"
  static let layout_about_section_title_text_transform = "none"
  static let layout_about_closing_padding_bottom_mobile = "5rem"
  static let layout_about_stack_handoff_distance = "100svh"
  static let layout_about_stack_panel_height = "100svh"
  static let layout_about_stack_shell_height = "200svh"
  static let layout_about_stack_handoff_distance_dynamic = "100dvh"
  static let layout_about_stack_panel_height_dynamic = "100dvh"
  static let layout_about_stack_shell_height_dynamic = "200dvh"
  static let layout_about_closing_sub_opacity = "0.78"
  static let layout_about_legacy_post_padding_y = "2rem"
  static let layout_about_legacy_post_title_size = "1.5rem"
  static let layout_about_legacy_post_title_weight = "600"
  static let layout_about_legacy_post_title_margin_bottom = "0.5rem"
  static let layout_about_legacy_post_excerpt_size = "1rem"
  static let layout_about_legacy_post_excerpt_margin_bottom = "0.5rem"
  static let layout_about_legacy_comments_padding_y = "2rem"
  static let layout_about_legacy_comments_title_size = "1.8rem"
  static let layout_about_legacy_comments_title_weight = "600"
  static let layout_about_legacy_comments_title_margin_bottom = "1.5rem"
  static let layout_about_legacy_comment_padding_y = "1rem"
  static let layout_about_legacy_comment_size = "0.95rem"
  static let layout_about_legacy_comment_line_height = "1.6"
  static let layout_about_hero_stage_min_height = "320vh"
  static let layout_about_hero_fixed_inset = "0"
  static let layout_about_hero_height = "100vh"
  static let layout_about_hero_height_small = "100svh"
  static let layout_about_hero_height_dynamic = "100dvh"
  static let layout_about_hero_z_index = "-100"
  static let layout_about_hero_media_z_index = "-102"
  static let layout_about_hero_content_z_index = "2"
  static let layout_about_hero_overlay_z_index = "1"
  static let layout_about_zero = "0"
  static let layout_about_center_percent = "50%"
  static let layout_about_full_width = "100%"
  static let layout_about_viewport_width = "100vw"
  static let layout_about_figure_translate_x = "-50%"
  static let layout_about_body_opacity = "0.92"
  static let layout_about_title_margin_bottom = "0.2rem"
  static let layout_about_featured_mobile_shell_factor = "1.8"
  static let layout_about_closing_sub_tracking = "0.01em"
  static let layout_home_platform_theme_eyebrow_opacity = "0.72"
  static let layout_home_platform_theme_summary_opacity = "0.72"
  static let layout_home_platform_theme_caption_opacity = "0.72"
  static let layout_home_platform_theme_token_grid_disabled_opacity = "0.48"
  static let layout_home_platform_theme_token_grid_enabled_opacity = "1"
  static let layout_home_platform_theme_motion_fast = "220ms"
  static let layout_home_platform_theme_shell_gap = "1.05rem"
  static let layout_home_platform_theme_header_gap = "0.36rem"
  static let layout_home_platform_theme_eyebrow_size = "0.68rem"
  static let layout_home_platform_theme_eyebrow_weight = "500"
  static let layout_home_platform_theme_eyebrow_tracking = "0.08em"
  static let layout_home_platform_theme_title_size = "1.18rem"
  static let layout_home_platform_theme_title_weight = "500"
  static let layout_home_platform_theme_title_line_height = "1.18"
  static let layout_home_platform_theme_title_tracking = "-0.01em"
  static let layout_home_platform_theme_summary_max_width = "44rem"
  static let layout_home_platform_theme_summary_size = "0.88rem"
  static let layout_home_platform_theme_summary_line_height = "1.46"
  static let layout_home_platform_theme_section_gap = "0.72rem"
  static let layout_home_platform_theme_section_padding_top = "0.82rem"
  static let layout_home_platform_theme_section_header_gap = "0.28rem"
  static let layout_home_platform_theme_mode_grid_count = "4"
  static let layout_home_platform_theme_mode_grid_gap = "0.58rem"
  static let layout_home_platform_theme_mode_option_gap = "0.16rem"
  static let layout_home_platform_theme_mode_option_min_height = "4.35rem"
  static let layout_home_platform_theme_mode_option_padding_y = "0.72rem"
  static let layout_home_platform_theme_mode_option_padding_x = "0.78rem"
  static let layout_home_platform_theme_mode_option_radius = "1rem"
  static let layout_home_platform_theme_mode_label_size = "0.88rem"
  static let layout_home_platform_theme_mode_label_weight = "500"
  static let layout_home_platform_theme_mode_label_line_height = "1.3"
  static let layout_home_platform_theme_caption_size = "0.74rem"
  static let layout_home_platform_theme_caption_line_height = "1.32"
  static let layout_home_platform_theme_token_grid_count = "2"
  static let layout_home_platform_theme_token_grid_gap = "0.58rem"
  static let layout_home_platform_theme_token_field_gap = "0.72rem"
  static let layout_home_platform_theme_token_field_min_height = "3.55rem"
  static let layout_home_platform_theme_token_field_padding_y = "0.72rem"
  static let layout_home_platform_theme_token_field_padding_x = "0.78rem"
  static let layout_home_platform_theme_token_field_radius = "1rem"
  static let layout_home_platform_theme_token_label_size = "0.8rem"
  static let layout_home_platform_theme_token_label_weight = "500"
  static let layout_home_platform_theme_token_label_line_height = "1.35"
  static let layout_home_platform_theme_toggle_list_gap = "0.56rem"
  static let layout_home_platform_theme_toggle_row_gap = "0.86rem"
  static let layout_home_platform_theme_toggle_row_padding_y = "0.68rem"
  static let layout_home_interaction_panel_width = "min(46rem, calc(100vw - (2 * var(--site-gutter))))"
  static let layout_home_interaction_panel_width_mobile = "min(100%, calc(100vw - (2 * var(--site-gutter))))"
  static let layout_home_interaction_panel_gap = "0.38rem"
  static let layout_home_interaction_panel_padding = "0.54rem"
  static let layout_home_interaction_panel_padding_mobile = "0.52rem"
  static let layout_home_interaction_panel_radius = "1.42rem"
  static let layout_home_interaction_panel_shadow = "0 18px 48px color-mix(in srgb, var(--shadow-color, #000000) 14%, transparent)"
  static let layout_home_interaction_panel_blur = "18px"
  static let layout_home_interaction_panel_saturate = "126%"
  static let layout_home_interaction_panel_form_gap = "0.32rem"
  static let layout_home_interaction_panel_developer_actions_gap = "0.32rem"
  static let layout_home_interaction_panel_developer_action_min_height = "1.8rem"
  static let layout_home_interaction_panel_developer_action_padding_x = "0.62rem"
  static let layout_home_interaction_panel_developer_action_size = "0.7rem"
  static let layout_home_interaction_panel_developer_action_weight = "560"
  static let layout_home_interaction_panel_developer_action_line_height = "1.1"
  static let layout_home_interaction_panel_developer_action_tracking = "0.02em"
  static let layout_home_interaction_panel_developer_control_min_width = "8.8rem"
  static let layout_home_interaction_panel_developer_status_size = "0.68rem"
  static let layout_home_interaction_panel_developer_status_line_height = "1.3"
  static let layout_home_interaction_panel_input_min_height = "2.72rem"
  static let layout_home_interaction_panel_input_max_height = "6.25rem"
  static let layout_home_interaction_panel_input_padding_y = "0.42rem"
  static let layout_home_interaction_panel_input_padding_x = "0.64rem"
  static let layout_home_interaction_panel_input_radius = "0.92rem"
  static let layout_home_interaction_panel_input_line_height = "1.38"
  static let layout_home_interaction_panel_composer_gap = "0.38rem"
  static let layout_home_interaction_panel_composer_side_gap = "0.34rem"
  static let layout_home_interaction_panel_control_size = "2.08rem"
  static let layout_home_interaction_panel_control_radius = "999px"
  static let layout_home_interaction_panel_control_pulse_shadow = "0 0 0 0 color-mix(in srgb, var(--color-primary1) 28%, transparent)"
  static let layout_home_interaction_panel_control_pulse_shadow_active = "0 0 0 0.42rem color-mix(in srgb, var(--color-primary1) 0%, transparent)"
  static let layout_home_interaction_panel_model_height = "2.08rem"
  static let layout_home_interaction_panel_model_padding_x = "0.68rem"
  static let layout_home_interaction_panel_model_padding_x_mobile = "0.66rem"
  static let layout_home_interaction_panel_model_radius = "999px"
  static let layout_home_interaction_panel_model_gap = "0.32rem"
  static let layout_home_interaction_panel_model_name_size = "0.82rem"
  static let layout_home_interaction_panel_model_name_weight = "500"
  static let layout_home_interaction_panel_model_name_line_height = "1.2"
  static let layout_home_interaction_panel_model_name_tracking = "-0.01em"
  static let layout_home_interaction_panel_icon_size = "1rem"
  static let layout_home_interaction_panel_icon_opacity = "0.82"
  static let layout_home_interaction_panel_icon_opacity_hover = "1"
  static let layout_home_interaction_panel_submit_height = "2.08rem"
  static let layout_home_interaction_panel_submit_padding_x = "0.78rem"
  static let layout_home_interaction_panel_submit_radius = "999px"
  static let layout_home_interaction_panel_submit_gap = "0.32rem"
  static let layout_home_interaction_panel_submit_size = "0.82rem"
  static let layout_home_interaction_panel_submit_weight = "500"
  static let layout_home_interaction_panel_submit_line_height = "1"
  static let layout_home_interaction_panel_disabled_opacity = "0.48"
  static let layout_home_interaction_panel_file_gap = "0.38rem"
  static let layout_home_interaction_panel_file_chip_min_height = "1.55rem"
  static let layout_home_interaction_panel_file_chip_padding_x = "0.58rem"
  static let layout_home_interaction_panel_file_chip_radius = "999px"
  static let layout_home_interaction_panel_file_chip_size = "0.68rem"
  static let layout_home_interaction_panel_file_chip_weight = "500"
  static let layout_home_interaction_panel_file_chip_tracking = "0.04em"
  static let layout_home_interaction_panel_motion_fast = "220ms"
  static let layout_home_interaction_panel_voice_opacity_active = "1"
  static let layout_home_interaction_panel_voice_opacity_inactive = "0"
  static let layout_home_interaction_panel_voice_animation_duration = "1.18s"
  static let layout_home_interaction_panel_thinking_animation_duration = "1.2s"
  static let layout_home_interaction_panel_thinking_animation_steps = "4"
  static let layout_home_interaction_panel_dot_width = "0.72em"
  static let layout_office_sidebar_width = "320px"
  static let layout_office_sidebar_collapsed_width = "112px"
  static let layout_office_sidebar_bg = "rgba(255, 255, 255, 0.04)"
  static let layout_office_sidebar_border_fallback = "rgba(255, 255, 255, 0.08)"
  static let layout_office_sidebar_text_fallback = "rgba(255, 255, 255, 0.92)"
  static let layout_office_sidebar_muted_fallback = "rgba(255, 255, 255, 0.58)"
  static let layout_office_sidebar_soft_fallback = "rgba(255, 255, 255, 0.12)"
  static let layout_office_sidebar_shadow = "0 20px 60px rgba(0, 0, 0, 0.24)"
  static let layout_office_sidebar_radius = "24px"
  static let layout_office_sidebar_gap = "18px"
  static let layout_office_sidebar_inner_padding_y = "24px"
  static let layout_office_sidebar_inner_padding_x = "20px"
  static let layout_office_sidebar_inner_motion = "180ms"
  static let layout_office_sidebar_top_gap = "16px"
  static let layout_office_sidebar_brand_gap = "8px"
  static let layout_office_sidebar_eyebrow_size = "0.76rem"
  static let layout_office_sidebar_eyebrow_weight = "600"
  static let layout_office_sidebar_eyebrow_tracking = "0.14em"
  static let layout_office_sidebar_title_size = "1.42rem"
  static let layout_office_sidebar_title_line_height = "1.04"
  static let layout_office_sidebar_title_tracking = "-0.03em"
  static let layout_office_sidebar_title_weight = "600"
  static let layout_office_sidebar_copy_size = "0.92rem"
  static let layout_office_sidebar_copy_line_height = "1.6"
  static let layout_office_sidebar_toggle_min_height = "40px"
  static let layout_office_sidebar_toggle_padding_x = "14px"
  static let layout_office_sidebar_toggle_radius = "999px"
  static let layout_office_sidebar_toggle_hover_bg = "rgba(255, 255, 255, 0.03)"
  static let layout_office_sidebar_nav_gap = "10px"
  static let layout_office_sidebar_link_gap = "4px"
  static let layout_office_sidebar_link_padding_y = "14px"
  static let layout_office_sidebar_link_padding_x = "14px"
  static let layout_office_sidebar_link_radius = "16px"
  static let layout_office_sidebar_link_bg = "rgba(255, 255, 255, 0.02)"
  static let layout_office_sidebar_link_bg_active = "rgba(255, 255, 255, 0.04)"
  static let layout_office_sidebar_link_opacity = "0.92"
  static let layout_office_sidebar_link_opacity_active = "1"
  static let layout_office_sidebar_link_label_size = "0.94rem"
  static let layout_office_sidebar_link_label_weight = "600"
  static let layout_office_sidebar_link_label_tracking = "-0.02em"
  static let layout_office_sidebar_link_meta_size = "0.78rem"
  static let layout_office_sidebar_link_meta_tracking = "0.06em"
  static let layout_office_sidebar_collapsed_padding_y = "20px"
  static let layout_office_sidebar_collapsed_padding_x = "14px"
  static let layout_office_sidebar_collapsed_title_size = "1.1rem"
  static let layout_office_sidebar_tablet_padding_y = "20px"
  static let layout_office_sidebar_tablet_padding_x = "16px"
  static let layout_office_sidebar_mobile_padding_y = "18px"
  static let layout_office_sidebar_mobile_padding_x = "16px"
  static let layout_awareness_wrap_min_height = "100%"
  static let layout_awareness_wrap_padding = "28px"
  static let layout_awareness_panel_width = "96%"
  static let layout_awareness_panel_radius = "14px"
  static let layout_awareness_panel_padding = "34px"
  static let layout_awareness_title_margin_bottom = "18px"
  static let layout_awareness_title_size = "22px"
  static let layout_awareness_title_weight = "400"
  static let layout_awareness_lead_margin_bottom = "18px"
  static let layout_awareness_lead_size = "15px"
  static let layout_awareness_lead_line_height = "1.45"
  static let layout_awareness_question_size = "24px"
  static let layout_awareness_question_line_height = "1.5"
  static let layout_awareness_question_margin_top = "6px"
  static let layout_awareness_question_margin_bottom = "14px"
  static let layout_awareness_note_margin_top = "14px"
  static let layout_awareness_note_size = "13px"
  static let layout_awareness_row_gap = "12px"
  static let layout_awareness_row_margin_bottom = "20px"
  static let layout_awareness_select_padding_y = "8px"
  static let layout_awareness_select_padding_x = "12px"
  static let layout_awareness_select_size = "15px"
  static let layout_awareness_select_radius = "8px"
  static let layout_awareness_slider_width = "680px"
  static let layout_awareness_slider_margin_top = "28px"
  static let layout_awareness_slider_margin_bottom = "18px"
  static let layout_awareness_slider_gap = "32px"
  static let layout_awareness_track_height = "12px"
  static let layout_awareness_track_radius = "10px"
  static let layout_awareness_thumb_width = "20px"
  static let layout_awareness_thumb_height = "20px"
  static let layout_awareness_thumb_radius = "50%"
  static let layout_awareness_thumb_shadow = "0 6px 18px var(--shadow-color, rgba(102,100,64,0.24))"
  static let layout_awareness_thumb_margin_top = "0%"
  static let layout_awareness_thumb_margin_top_moz = "-2px"
  static let layout_awareness_thumb_motion = "0.3s"
  static let layout_awareness_label_size = "0.95rem"
  static let layout_awareness_label_margin_top = "0.3rem"
  static let layout_awareness_label_margin_bottom = "10px"
  static let layout_awareness_button_padding_y = "14px"
  static let layout_awareness_button_padding_x = "32px"
  static let layout_awareness_button_radius = "28px"
  static let layout_awareness_button_size = "16px"
  static let layout_awareness_button_margin_top = "34px"
  static let layout_awareness_result_margin_top = "12px"
  static let layout_awareness_result_size = "15px"
  static let layout_awareness_result_gap = "12px"
  static let layout_awareness_stage_weight = "700"
  static let layout_awareness_stage_padding = "10px"
  static let layout_awareness_stage_radius = "10px"
  static let layout_awareness_stage_motion = "0.2s"
  static let layout_awareness_stage_hover_shadow = "0 4px 14px var(--shadow-color, rgba(0,0,0,0.1))"
  static let layout_awareness_score_size = "18px"
  static let layout_awareness_score_margin_top = "8px"
  static let layout_awareness_score_weight = "600"
  static let layout_awareness_desc_padding_y = "12px"
  static let layout_awareness_desc_padding_x = "14px"
  static let layout_awareness_desc_margin_top = "8px"
  static let layout_awareness_desc_radius = "10px"
  static let layout_awareness_desc_size = "14px"
  static let layout_awareness_desc_line_height = "1.6"
  static let layout_awareness_dominant_margin_top = "20px"
  static let layout_awareness_dominant_radius = "12px"
  static let layout_awareness_dominant_padding = "16px"
  static let layout_awareness_dominant_size = "15px"
  static let layout_awareness_dominant_line_height = "1.4"
  static let layout_awareness_mobile_panel_padding = "14px"
  static let layout_awareness_mobile_question_size = "18px"
  static let layout_awareness_mobile_button_padding_y = "12px"
  static let layout_awareness_mobile_button_padding_x = "18px"
  static let layout_awareness_mobile_button_margin_top = "24px"
  static let layout_awareness_mobile_button_size = "15px"
  static let layout_awareness_mobile_slider_width = "96%"
  static let layout_awareness_mobile_slider_max_width = "100%"
  static let layout_awareness_mobile_slider_margin_top = "18px"
  static let layout_awareness_mobile_slider_margin_bottom = "10px"
  static let layout_awareness_mobile_slider_gap = "22px"
  static let layout_awareness_mobile_label_size = "0.85rem"
  static let layout_awareness_mobile_label_margin_bottom = "6px"
  static let layout_awareness_mobile_thumb_width = "28px"
  static let layout_awareness_mobile_thumb_height = "16px"
  static let layout_awareness_progress_width = "92%"
  static let layout_awareness_progress_max_width = "680px"
  static let layout_awareness_progress_height = "4px"
  static let layout_awareness_progress_radius = "3px"
  static let layout_awareness_progress_margin_top = "14px"
  static let layout_awareness_progress_margin_bottom = "8px"
  static let layout_awareness_progress_fill_width = "0%"
  static let duration_fast = "180ms"
  static let duration_base = "240ms"
  static let duration_slow = "320ms"
  static let ease_standard = "cubic-bezier(0.22,1,0.36,1)"
  static let ease_emphasis = "cubic-bezier(0.2,0.8,0.2,1)"
  static let hover_opacity_soft = "0.9"
  static let hover_opacity_strong = "1"
  static let hover_lift_y = "-1px"
  static let hover_lift_y_strong = "-2px"
  static let hover_scale_soft = "1.015"
  static let hover_scale_strong = "1.03"
  static let intro_ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  static let intro_pop_duration = "1.6s"
  static let intro_settle_duration = "1.9s"
  static let intro_fade_duration = "1.5s"
  static let nav_global_gap = "0.78rem"
  static let nav_global_item_gap = "0.42rem"
  static let nav_global_topbar_menu_gap = "0.72rem"
  static let nav_global_padding_y = "0"
  static let nav_global_padding_x = "0"
  static let nav_global_min_height = "auto"
  static let nav_global_color = "var(--cc-secondary-color)"
  static let nav_global_hover_color = "var(--nav-hover-text-color)"
  static let nav_global_active_color = "var(--nav-active-text-color)"
  static let nav_global_hover_opacity = "var(--nav-hover-opacity)"
  static let nav_local_gap = "0.92rem"
  static let nav_local_label_gap = "0.42rem"
  static let nav_local_padding_y = "0"
  static let nav_local_padding_x = "0"
  static let nav_local_min_height = "auto"
  static let nav_local_color = "var(--cc-secondary-color)"
  static let nav_local_hover_color = "var(--local-nav-hover-text-color)"
  static let nav_local_active_color = "var(--local-nav-active-text-color)"
  static let nav_local_hover_opacity = "var(--local-nav-hover-opacity)"
  static let nav_local_active_indicator_color = "var(--local-nav-active-indicator-color)"
  static let website_local_nav_link_gap = "var(--nav-local-gap)"
  static let nav_tab_gap = "var(--nav-local-gap)"
  static let nav_tab_padding_y = "0"
  static let nav_tab_padding_x = "0"
  static let nav_tab_min_height = "auto"
  static let nav_tab_color = "var(--cc-secondary-color)"
  static let nav_tab_hover_color = "var(--local-nav-hover-text-color)"
  static let nav_tab_active_color = "var(--local-nav-active-text-color)"
  static let nav_tab_hover_opacity = "var(--local-nav-hover-opacity)"
  static let nav_breadcrumb_gap = "0.42rem"
  static let nav_breadcrumb_separator_gap = "0.34rem"
  static let nav_breadcrumb_color = "var(--cc-secondary-color)"
  static let nav_breadcrumb_hover_color = "var(--hover-text-color)"
  static let nav_breadcrumb_current_color = "var(--cc-primary-color)"
  static let nav_breadcrumb_separator_color = "var(--cc-muted-color, var(--cc-secondary-color))"
  static let nav_footer_gap = "0.84rem"
  static let nav_footer_column_gap = "1rem"
  static let nav_footer_row_gap = "0.42rem"
  static let nav_footer_color = "var(--cc-secondary-color)"
  static let nav_footer_hover_color = "var(--hover-text-color)"
  static let nav_footer_hover_opacity = "var(--state-opacity-hover-strong)"
  static let nav_menu_gap = "0.52rem"
  static let nav_menu_item_gap = "0.42rem"
  static let nav_menu_padding_y = "0.42rem"
  static let nav_menu_padding_x = "0"
  static let nav_menu_color = "var(--cc-secondary-color)"
  static let nav_menu_hover_color = "var(--hover-text-color)"
  static let nav_menu_active_color = "var(--selected-text-color)"
  static let nav_indicator_height = "1px"
  static let nav_indicator_width = "100%"
  static let nav_indicator_offset = "-0.28rem"
  static let nav_indicator_radius = "999px"
  static let nav_indicator_color = "var(--selected-indicator-color)"
  static let nav_indicator_opacity = "var(--selected-indicator-opacity)"
  static let nav_glass_surface_height = "3.55rem"
  static let nav_glass_surface_height_tablet = "3.3rem"
  static let nav_glass_surface_height_mobile = "3.18rem"
  static let nav_glass_surface_bg = "color-mix(in srgb, var(--bg-color) 32%, transparent)"
  static let nav_glass_surface_bg_light = "color-mix(in srgb, var(--surface-color) 26%, transparent)"
  static let nav_glass_surface_border = "var(--cc-color)"
  static let nav_glass_surface_border_light = "var(--cc-color)"
  static let nav_glass_surface_shadow = "none"
  static let nav_glass_surface_blur = "var(--effect-blur-sm)"
  static let nav_glass_surface_saturate = "120%"
  static let nav_primitive_shell_gap = "0.5rem"
  static let nav_primitive_section_gap = "0.4rem"
  static let nav_primitive_section_padding_top = "0.6rem"
  static let nav_primitive_section_border = "1px solid color-mix(in srgb, var(--cc-color) 8%, transparent)"
  static let nav_primitive_group_gap = "0.22rem"
  static let nav_primitive_group_header_gap = "0.75rem"
  static let nav_primitive_group_title_size = "0.72rem"
  static let nav_primitive_group_title_weight = "500"
  static let nav_primitive_group_title_tracking = "0.08em"
  static let nav_primitive_group_title_line_height = "1.2"
  static let nav_primitive_row_gap = "0.75rem"
  static let nav_primitive_row_min_height = "2.65rem"
  static let nav_primitive_row_padding_y = "0.7rem"
  static let nav_primitive_row_padding_x = "0.85rem"
  static let nav_primitive_row_border = "1px solid transparent"
  static let nav_primitive_row_radius = "1rem"
  static let nav_primitive_row_transition_duration = "220ms"
  static let nav_primitive_icon_size = "1rem"
  static let nav_primitive_text_gap = "0.12rem"
  static let nav_primitive_label_size = "0.92rem"
  static let nav_primitive_label_weight = "500"
  static let nav_primitive_label_line_height = "1.3"
  static let nav_primitive_description_size = "0.78rem"
  static let nav_primitive_description_line_height = "1.35"
  static let nav_primitive_hover_border = "color-mix(in srgb, var(--cc-color) 12%, transparent)"
  static let nav_primitive_hover_background = "color-mix(in srgb, var(--bg-color) 16%, transparent)"
  static let nav_primitive_hover_y = "-1px"
  static let nav_primitive_active_border = "color-mix(in srgb, var(--color-primary1) 46%, var(--cc-color) 18%)"
  static let nav_primitive_active_background = "color-mix(in srgb, var(--color-primary1) 10%, transparent)"
  static let nav_primitive_disabled_opacity = "0.45"
  static let nav_primitive_breadcrumb_gap = "0.42rem"
  static let nav_primitive_breadcrumb_size = "0.8rem"
  static let nav_primitive_breadcrumb_line_height = "1.35"
  static let nav_primitive_breadcrumb_current_weight = "500"
  static let nav_primitive_breadcrumb_separator_opacity = "0.72"
  static let nav_primitive_sidebar_gap = "0.7rem"
  static let nav_primitive_sidebar_header_gap = "0.2rem"
  static let nav_primitive_sidebar_title_size = "0.92rem"
  static let nav_primitive_sidebar_title_weight = "600"
  static let nav_primitive_sidebar_title_line_height = "1.3"
  static let nav_primitive_sidebar_caption_size = "0.78rem"
  static let nav_primitive_sidebar_caption_line_height = "1.35"
  static let nav_primitive_collapsible_gap = "0.22rem"
  static let nav_primitive_chevron_open_rotation = "90deg"
  static let nav_primitive_chevron_transition_duration = "220ms"
  static let nav_primitive_mobile_row_min_height = "2.45rem"
  static let nav_primitive_mobile_row_padding_y = "0.64rem"
  static let nav_primitive_mobile_row_padding_x = "0.78rem"
  static let nav_institutional_surface_height = "var(--nav-glass-surface-height)"
  static let nav_institutional_surface_height_tablet = "var(--nav-glass-surface-height-tablet)"
  static let nav_institutional_surface_height_mobile = "var(--nav-glass-surface-height-mobile)"
  static let nav_institutional_surface_bg = "var(--nav-glass-surface-bg)"
  static let nav_institutional_surface_bg_light = "var(--nav-glass-surface-bg-light)"
  static let nav_institutional_surface_border = "var(--nav-glass-surface-border)"
  static let nav_institutional_surface_border_light = "var(--nav-glass-surface-border-light)"
  static let nav_institutional_surface_shadow = "var(--nav-glass-surface-shadow)"
  static let nav_institutional_surface_blur = "var(--nav-glass-surface-blur)"
  static let nav_institutional_surface_saturate = "var(--nav-glass-surface-saturate)"
  static let nav_institutional_text_color = "var(--cc-secondary-color)"
  static let nav_institutional_text_hover_color = "var(--cc-primary-color)"
  static let nav_institutional_brand_color = "var(--cc-primary-color)"
  static let nav_institutional_icon_opacity = "0.82"
  static let nav_institutional_icon_hover_opacity = "1"
  static let nav_institutional_motion_fast = "220ms"
  static let nav_institutional_motion_medium = "320ms"
  static let nav_institutional_motion_panel = "760ms"
  static let nav_institutional_motion_panel_slow = "920ms"
  static let nav_institutional_motion_ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  static let nav_institutional_panel_ease = "cubic-bezier(0.19, 1, 0.22, 1)"
  static let nav_institutional_inner_gap = "1.6rem"
  static let nav_institutional_inner_gap_tablet = "1.2rem"
  static let nav_institutional_inner_gap_mobile = "1rem"
  static let nav_institutional_group_gap = "1.6rem"
  static let nav_institutional_nav_gap = "1.42rem"
  static let nav_institutional_nav_gap_tablet = "1.08rem"
  static let nav_institutional_utility_gap = "1rem"
  static let nav_institutional_link_size = "0.8rem"
  static let nav_institutional_link_size_tablet = "0.74rem"
  static let nav_institutional_link_weight = "400"
  static let nav_institutional_link_tracking = "0.008em"
  static let nav_institutional_link_line_height = "1"
  static let nav_institutional_brand_symbol_size = "1.72rem"
  static let nav_institutional_brand_symbol_size_tablet = "1.32rem"
  static let nav_institutional_brand_symbol_size_mobile = "1.28rem"
  static let nav_institutional_brand_wordmark_height = "0.5rem"
  static let nav_institutional_brand_wordmark_height_mobile = "0.44rem"
  static let nav_institutional_trigger_size = "1.12rem"
  static let nav_institutional_trigger_size_tablet = "1rem"
  static let nav_institutional_panel_backdrop_blur = "4px"
  static let nav_institutional_panel_backdrop_saturate = "115%"
  static let nav_institutional_panel_shell_blur = "18px"
  static let nav_institutional_panel_shell_saturate = "145%"
  static let nav_institutional_panel_shadow = "0 28px 90px color-mix(in srgb, var(--shadow-color, #000000) 10%, transparent)"
  static let nav_institutional_panel_shadow_light = "0 28px 90px color-mix(in srgb, var(--shadow-color, #000000) 8%, transparent)"
  static let nav_institutional_panel_shadow_dark = "0 32px 100px color-mix(in srgb, var(--shadow-color, #000000) 28%, transparent)"
  static let nav_institutional_closed_y = "-10px"
  static let nav_institutional_panel_closed_y = "-1.1rem"
  static let nav_institutional_panel_closed_scale = "0.982"
  static let nav_institutional_panel_active_scale = "1"
  static let nav_institutional_panel_closing_y = "-0.95rem"
  static let nav_institutional_panel_closing_scale = "0.988"
  static let nav_institutional_panel_closing_opacity = "0.001"
  static let nav_institutional_panel_padding_y = "5.15rem"
  static let nav_institutional_panel_padding_x_fallback = "3.2rem"
  static let nav_institutional_panel_padding_bottom = "3.9rem"
  static let nav_institutional_panel_gap = "5.8rem"
  static let nav_institutional_panel_col_gap = "1.9rem"
  static let nav_institutional_panel_col_padding_top = "5.15rem"
  static let nav_institutional_panel_eyebrow_margin_bottom = "1.35rem"
  static let nav_institutional_panel_eyebrow_size = "0.72rem"
  static let nav_institutional_panel_eyebrow_weight = "500"
  static let nav_institutional_panel_eyebrow_tracking = "0.08em"
  static let nav_institutional_panel_eyebrow_line_height = "1.2"
  static let nav_institutional_panel_title_margin_bottom = "1.08rem"
  static let nav_institutional_panel_title_size = "2.18rem"
  static let nav_institutional_panel_title_weight = "400"
  static let nav_institutional_panel_title_line_height = "1.08"
  static let nav_institutional_panel_title_strong_weight = "300"
  static let nav_institutional_panel_copy_margin_bottom = "1rem"
  static let nav_institutional_panel_copy_size = "0.98rem"
  static let nav_institutional_panel_copy_weight = "400"
  static let nav_institutional_panel_copy_line_height = "1.35"
  static let nav_institutional_panel_copy_strong_weight = "300"
  static let nav_institutional_search_shell_gap = "0.62rem"
  static let nav_institutional_search_shell_min_height = "4rem"
  static let nav_institutional_search_shell_padding_y = "0.82rem"
  static let nav_institutional_search_shell_padding_x = "1.08rem"
  static let nav_institutional_search_shell_line_height = "1"
  static let nav_institutional_search_shell_opacity = "0.9"
  static let nav_institutional_search_icon_size = "1.38rem"
  static let nav_institutional_search_icon_line_height = "0"
  static let nav_institutional_search_button_hover_scale = "1.08"
  static let nav_institutional_search_input_width = "18ch"
  static let nav_institutional_search_input_size = "1.88rem"
  static let nav_institutional_search_input_weight = "300"
  static let nav_institutional_search_input_line_height = "1"
  static let nav_institutional_search_result_margin_top = "0.9rem"
  static let nav_institutional_search_empty_margin_bottom = "0.9rem"
  static let nav_institutional_search_panel_padding_top = "0.95rem"
  static let nav_institutional_search_panel_size = "0.94rem"
  static let nav_institutional_search_panel_weight = "300"
  static let nav_institutional_search_panel_line_height = "1.45"
  static let nav_institutional_search_list_gap = "0.26rem"
  static let nav_institutional_search_list_padding_y = "0.95rem"
  static let nav_institutional_search_result_title_size = "1.02rem"
  static let nav_institutional_search_result_title_weight = "300"
  static let nav_institutional_search_result_title_line_height = "1.28"
  static let nav_institutional_search_result_meta_size = "0.82rem"
  static let nav_institutional_search_result_meta_weight = "400"
  static let nav_institutional_search_result_meta_line_height = "1.35"
  static let nav_institutional_caret_opacity = "0.9"
  static let nav_institutional_tablet_account_avatar_size = "1.18rem"
  static let nav_institutional_tablet_search_shell_gap = "0.54rem"
  static let nav_institutional_tablet_search_shell_padding_y = "0.72rem"
  static let nav_institutional_tablet_search_shell_padding_x = "0.94rem"
  static let nav_institutional_tablet_panel_gap = "3rem"
  static let nav_institutional_tablet_panel_padding_y = "4.6rem"
  static let nav_institutional_tablet_panel_padding_x_fallback = "2.2rem"
  static let nav_institutional_tablet_panel_padding_bottom = "3.2rem"
  static let nav_institutional_tablet_panel_title_size = "1.86rem"
  static let nav_institutional_tablet_search_input_size = "1.62rem"
  static let nav_institutional_tablet_search_panel_size = "0.96rem"
  static let nav_institutional_mobile_edge_padding = "0"
  static let nav_menu_hover_ease = "cubic-bezier(0.22,1,0.36,1)"
  static let nav_menu_hover_scale = "1.08"
  static let nav_menu_hover_duration = "520ms"
  static let nav_menu_hover_opacity_duration = "240ms"
  static let nav_menu_hover_pulse_duration = "760ms"
  static let nav_menu_pack_toggle_nudge = "-10px"
  static let nav_menu_harmonic_gap = "46px"
  static let nav_menu_gutter = "var(--footer-gutter, 56px)"
  static let nav_menu_vpad = "90px"
  static let nav_menu_rail_pad = "34px"
  static let nav_menu_rail_label_pad = "34px"
  static let nav_menu_rail_font_size = "1.08rem"
  static let nav_menu_motion_line_fast = "300ms"
  static let nav_menu_motion_overlay = "260ms"
  static let nav_menu_motion_filter = "260ms"
  static let nav_menu_motion_color = "260ms"
  static let nav_menu_motion_background = "260ms"
  static let nav_menu_motion_opacity = "260ms"
  static let nav_menu_overlay_enter_y = "24px"
  static let nav_menu_overlay_exit_y = "32px"
  static let nav_menu_overlay_enter_duration = "0.8s"
  static let nav_menu_overlay_enter_opacity_duration = "0.6s"
  static let nav_menu_overlay_exit_duration = "1.1s"
  static let nav_menu_overlay_exit_opacity_duration = "0.8s"
  static let nav_menu_rail_reveal_duration = "0.55s"
  static let nav_menu_rail_reveal_opacity = "0.9"
  static let nav_menu_button_container_size = "60px"
  static let nav_menu_button_size = "35px"
  static let nav_menu_button_line_height = "1.2px"
  static let nav_menu_button_line_width = "55%"
  static let nav_menu_button_line_offset = "4px"
  static let nav_menu_button_hover_duration = "0.35s"
  static let nav_menu_pack_toggle_size = "72px"
  static let nav_menu_pack_toggle_icon_size = "40px"
  static let nav_menu_icon_control_size = "44px"
  static let nav_menu_icon_glyph_size = "22px"
  static let nav_menu_theme_toggle_size = "30px"
  static let nav_menu_theme_toggle_dot_size = "14px"
  static let nav_menu_pack_split_padding_top = "28px"
  static let nav_menu_pack_split_min_height = "160px"
  static let nav_menu_pack_out_duration = "360ms"
  static let nav_menu_pack_in_duration = "420ms"
  static let nav_menu_pack_gap_duration = "220ms"
  static let nav_menu_pack_shift_y = "-10px"
  static let nav_menu_pack_transform_duration = "720ms"
  static let nav_menu_plain_logo_padding_top = "22px"
  static let nav_menu_typo_logo_width = "140px"
  static let nav_menu_site_essence_margin_top = "18px"
  static let nav_menu_site_essence_size = "0.95rem"
  static let nav_menu_site_essence_line_height = "1.6"
  static let nav_menu_site_essence_shadow = "0 0 22px color-mix(in srgb, var(--menu-fg) 10%, transparent)"
  static let nav_menu_site_essence_breathe_duration = "5.8s"
  static let nav_menu_site_essence_sheen_duration = "3.9s"
  static let nav_menu_site_essence_shift_y = "-1.6px"
  static let nav_menu_site_essence_brightness = "1.06"
  static let nav_menu_unified_pack_gap = "14px"
  static let nav_menu_preview_padding_right = "46px"
  static let nav_menu_preview_shift_x = "-18px"
  static let nav_menu_preview_shift_duration = "650ms"
  static let nav_menu_preview_title_gap = "14px"
  static let nav_menu_preview_icon_margin_bottom = "18px"
  static let nav_menu_rail_flex_base = "0.7 1 0"
  static let nav_menu_rail_flex_hover = "1.6 1 0"
  static let nav_menu_rail_flex_list_hover = "0.55 1 0"
  static let nav_menu_rail_flex_list_item_hover = "1.85 1 0"
  static let nav_menu_rail_flex_duration = "420ms"
  static let nav_menu_rail_link_padding_block = "18px"
  static let nav_menu_rail_link_tracking = "0.14em"
  static let nav_menu_rail_link_line_height = "1"
  static let nav_menu_rail_link_opacity = "0.86"
  static let nav_menu_rail_link_hover_scale = "1.12"
  static let nav_menu_rail_link_transform_duration = "820ms"
  static let nav_menu_packs_left = "22px"
  static let nav_menu_packs_bottom = "90px"
  static let nav_menu_packs_width = "96px"
  static let nav_menu_packs_gap = "22px"
  static let nav_menu_plain_logo_width = "72px"
  static let nav_menu_close_top = "18px"
  static let nav_menu_close_size = "44px"
  static let nav_menu_close_opacity = "0.85"
  static let nav_menu_close_duration = "180ms"
  static let nav_menu_close_hover_scale = "1.06"
  static let nav_menu_opacity_hidden = "0"
  static let nav_menu_opacity_visible = "1"
  static let nav_menu_control_opacity = "0.86"
  static let nav_menu_control_active_opacity = "0.98"
  static let nav_menu_logo_opacity = "0.92"
  static let nav_menu_active_scale = "0.98"
  static let nav_menu_hover_pulse_scale_down = "0.88"
  static let nav_menu_hover_pulse_scale_up = "1.06"
  static let nav_menu_mobile_columns_gap = "22px"
  static let nav_menu_mobile_columns_padding = "84px 18px 28px"
  static let nav_menu_mobile_col_gap = "18px"
  static let nav_menu_mobile_pack_padding_top = "18px"
  static let nav_menu_mobile_pack_min_height = "150px"
  static let nav_menu_mobile_rail_item_padding = "14px 0"
  static let nav_menu_mobile_rail_link_tracking = "0.10em"
  static let glass_surface_height = "3.55rem"
  static let glass_surface_height_tablet = "3.3rem"
  static let glass_surface_height_mobile = "3.18rem"
  static let glass_surface_bg = "color-mix(in srgb, var(--bg-color) 32%, transparent)"
  static let glass_surface_bg_light = "color-mix(in srgb, var(--surface-color) 26%, transparent)"
  static let glass_surface_border = "var(--cc-color)"
  static let glass_surface_border_light = "var(--cc-color)"
  static let glass_surface_shadow = "none"
  static let glass_surface_blur = "var(--effect-blur-sm)"
  static let glass_surface_saturate = "120%"
  static let radius_none = "0"
  static let radius_xs = "0.5rem"
  static let radius_sm = "0.75rem"
  static let radius_md = "1rem"
  static let radius_lg = "1.375rem"
  static let radius_xl = "1.75rem"
  static let radius_2xl = "2.125rem"
  static let radius_dialog = "1.9rem"
  static let radius_pill = "999px"
  static let radius_circle = "50%"
  static let shadow_soft = "0 12px 34px rgba(0,0,0,0.16)"
  static let shadow_medium = "0 18px 48px rgba(0,0,0,0.22)"
  static let shadow_strong = "0 28px 72px rgba(0,0,0,0.28)"
  static let stroke_soft = "1px"
  static let stroke_strong = "1.5px"
  static let spacing_xs = "0.35rem"
  static let spacing_sm = "0.75rem"
  static let spacing_md = "1.1rem"
  static let spacing_lg = "1.6rem"
  static let spacing_xl = "2.4rem"
  static let spacing_2xl = "3.6rem"
  static let spacing_3xl = "4.5rem"
  static let spacing_4xl = "6rem"
  static let reading_width_sm = "64ch"
  static let reading_width_md = "74ch"
  static let reading_width_lg = "78ch"
  static let content_max_width_sm = "var(--reading-width-sm)"
  static let content_max_width_md = "var(--reading-width-md)"
  static let content_max_width_lg = "var(--reading-width-lg)"
  static let section_padding_y = "10vh"
  static let section_padding_y_mobile = "12vh"
  static let font_base = "'Manrope',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"
  static let font_ui = "var(--font-base)"
  static let font_heading = "var(--font-base)"
  static let font_body = "var(--font-base)"
  static let font_mono = "'SFMono-Regular','SF Mono',Consolas,'Liberation Mono',Menlo,monospace"
  static let line_height_base = "1.55"
  static let line_height_body = "1.6"
  static let line_height_body_tight = "1.42"
  static let line_height_body_relaxed = "1.72"
  static let line_height_heading_tight = "1.08"
  static let line_height_heading = "1.16"
  static let line_height_heading_relaxed = "1.28"
  static let line_height_ui = "1"
  static let line_height_ui_relaxed = "1.24"
  static let line_height_code = "1.55"
  static let font_size_display_1 = "2.35rem"
  static let font_size_display_2 = "2rem"
  static let font_size_display_3 = "1.72rem"
  static let font_size_h1 = "1.88rem"
  static let font_size_h2 = "1.42rem"
  static let font_size_h3 = "1.16rem"
  static let font_size_h4 = "1.02rem"
  static let font_size_h5 = "1rem"
  static let font_size_h6 = "0.9rem"
  static let font_size_title_1 = "1.06rem"
  static let font_size_title_2 = "0.96rem"
  static let font_size_title_3 = "0.98rem"
  static let font_size_section_title = "var(--font-size-section-title-mobile)"
  static let font_size_section_title_wide = "2.3rem"
  static let font_size_section_title_tablet = "1.82rem"
  static let font_size_section_title_mobile = "1.56rem"
  static let font_size_subtitle_1 = "1rem"
  static let font_size_subtitle_2 = "0.92rem"
  static let font_size_body_1 = "0.96rem"
  static let font_size_body_2 = "0.92rem"
  static let font_size_body_3 = "0.88rem"
  static let font_size_body_4 = "0.84rem"
  static let font_size_editorial_title = "1.95rem"
  static let font_size_editorial_heading = "1.55rem"
  static let font_size_editorial_subheading = "1.12rem"
  static let font_size_editorial_body = "1.02rem"
  static let font_size_editorial_lede = "1.12rem"
  static let font_size_editorial_note = "0.9rem"
  static let font_size_caption_1 = "0.78rem"
  static let font_size_caption_2 = "0.72rem"
  static let font_size_label_1 = "0.82rem"
  static let font_size_label_2 = "0.76rem"
  static let font_size_meta_1 = "0.8rem"
  static let font_size_meta_2 = "0.74rem"
  static let font_size_eyebrow = "0.72rem"
  static let font_size_overline = "0.7rem"
  static let font_size_nav_primary = "0.82rem"
  static let font_size_nav_secondary = "0.78rem"
  static let font_size_nav_local_label = "0.94rem"
  static let font_size_nav_local_link = "0.8rem"
  static let font_size_nav_tab = "var(--font-size-nav-local-link)"
  static let font_size_breadcrumb = "0.76rem"
  static let font_size_utility_nav = "0.74rem"
  static let font_size_button_sm = "0.76rem"
  static let font_size_button_md = "0.82rem"
  static let font_size_button_lg = "0.9rem"
  static let font_size_control_xs = "0.7rem"
  static let font_size_control_sm = "0.76rem"
  static let font_size_control_md = "0.82rem"
  static let font_size_control_lg = "0.9rem"
  static let font_size_chip = "0.74rem"
  static let font_size_pill = "0.74rem"
  static let font_size_menu_item = "0.82rem"
  static let font_size_tooltip = "0.74rem"
  static let font_size_field_label = "0.76rem"
  static let font_size_field_input = "0.9rem"
  static let font_size_field_placeholder = "0.9rem"
  static let font_size_field_helper = "0.76rem"
  static let font_size_field_error = "0.76rem"
  static let font_size_field_counter = "0.72rem"
  static let font_size_data_value_xl = "2.2rem"
  static let font_size_data_value_lg = "1.55rem"
  static let font_size_data_value_md = "1.05rem"
  static let font_size_data_label = "0.76rem"
  static let font_size_data_caption = "0.72rem"
  static let font_size_chart_axis = "0.7rem"
  static let font_size_chart_legend = "0.72rem"
  static let font_size_table_heading = "0.76rem"
  static let font_size_table_cell = "0.82rem"
  static let font_size_table_cell_dense = "0.76rem"
  static let font_size_table_caption = "0.72rem"
  static let font_size_code_inline = "0.86em"
  static let font_size_code_block = "0.86rem"
  static let font_size_kbd = "0.72rem"
  static let font_size_path = "0.78rem"
  static let font_size_status_sm = "0.74rem"
  static let font_size_status_md = "0.8rem"
  static let font_size_alert_title = "0.92rem"
  static let font_size_alert_body = "0.84rem"
  static let font_size_toast_title = "0.84rem"
  static let font_size_toast_body = "0.78rem"
  static let font_size_profile_name = "1.32rem"
  static let font_size_profile_handle = "0.86rem"
  static let font_size_profile_bio = "0.92rem"
  static let font_size_profile_stat_value = "1rem"
  static let font_size_profile_stat_label = "0.72rem"
  static let font_size_profile_meta = "0.78rem"
  static let font_size_product_title = "1.28rem"
  static let font_size_product_kicker = "0.72rem"
  static let font_size_product_summary = "0.94rem"
  static let font_size_product_feature_title = "0.92rem"
  static let font_size_product_feature_body = "0.84rem"
  static let font_size_product_spec_label = "0.74rem"
  static let font_size_product_spec_value = "0.84rem"
  static let font_size_marketing_hero = "2.05rem"
  static let font_size_marketing_section_title = "1.72rem"
  static let font_size_marketing_card_title = "1.05rem"
  static let font_size_marketing_proof = "0.84rem"
  static let font_size_marketing_cta = "0.84rem"
  static let display_1_size = "var(--font-size-display-1)"
  static let display_1_line_height = "var(--line-height-heading-tight)"
  static let display_2_size = "var(--font-size-display-2)"
  static let display_2_line_height = "var(--line-height-heading-tight)"
  static let display_3_size = "var(--font-size-display-3)"
  static let display_3_line_height = "var(--line-height-heading)"
  static let headline_1_size = "var(--font-size-h1)"
  static let headline_1_line_height = "var(--line-height-heading-tight)"
  static let headline_2_size = "var(--font-size-h2)"
  static let headline_2_line_height = "var(--line-height-heading)"
  static let headline_3_size = "var(--font-size-h3)"
  static let headline_3_line_height = "var(--line-height-heading)"
  static let headline_4_size = "var(--font-size-h4)"
  static let headline_4_line_height = "var(--line-height-heading-relaxed)"
  static let headline_5_size = "var(--font-size-h5)"
  static let headline_5_line_height = "var(--line-height-heading-relaxed)"
  static let headline_6_size = "var(--font-size-h6)"
  static let headline_6_line_height = "var(--line-height-heading-relaxed)"
  static let title_1_size = "var(--font-size-title-1)"
  static let title_1_line_height = "var(--line-height-heading-relaxed)"
  static let title_2_size = "var(--font-size-title-2)"
  static let title_2_line_height = "var(--line-height-heading-relaxed)"
  static let title_3_size = "var(--font-size-title-3)"
  static let title_3_line_height = "var(--line-height-heading-relaxed)"
  static let section_title_size = "var(--font-size-section-title)"
  static let section_title_size_wide = "var(--font-size-section-title-wide)"
  static let section_title_size_tablet = "var(--font-size-section-title-tablet)"
  static let section_title_size_mobile = "var(--font-size-section-title-mobile)"
  static let section_title_line_height = "var(--line-height-heading-tight)"
  static let subtitle_1_size = "var(--font-size-subtitle-1)"
  static let subtitle_1_line_height = "var(--line-height-body-tight)"
  static let subtitle_2_size = "var(--font-size-subtitle-2)"
  static let subtitle_2_line_height = "var(--line-height-body-tight)"
  static let body_1_size = "var(--font-size-body-1)"
  static let body_1_line_height = "var(--line-height-body)"
  static let body_2_size = "var(--font-size-body-2)"
  static let body_2_line_height = "var(--line-height-body)"
  static let body_3_size = "var(--font-size-body-3)"
  static let body_3_line_height = "var(--line-height-body)"
  static let body_4_size = "var(--font-size-body-4)"
  static let body_4_line_height = "var(--line-height-body-tight)"
  static let description_1_size = "var(--body-2-size)"
  static let description_1_line_height = "var(--body-2-line-height)"
  static let description_2_size = "var(--body-3-size)"
  static let description_2_line_height = "var(--body-3-line-height)"
  static let editorial_title_size = "var(--font-size-editorial-title)"
  static let editorial_title_line_height = "var(--line-height-heading-tight)"
  static let editorial_heading_size = "var(--font-size-editorial-heading)"
  static let editorial_heading_line_height = "var(--line-height-heading)"
  static let editorial_subheading_size = "var(--font-size-editorial-subheading)"
  static let editorial_subheading_line_height = "var(--line-height-heading-relaxed)"
  static let editorial_body_size = "var(--font-size-editorial-body)"
  static let editorial_body_line_height = "var(--line-height-body-relaxed)"
  static let editorial_lede_size = "var(--font-size-editorial-lede)"
  static let editorial_lede_line_height = "var(--line-height-body-relaxed)"
  static let editorial_note_size = "var(--font-size-editorial-note)"
  static let editorial_note_line_height = "var(--line-height-body-tight)"
  static let caption_1_size = "var(--font-size-caption-1)"
  static let caption_1_line_height = "var(--line-height-body-tight)"
  static let caption_2_size = "var(--font-size-caption-2)"
  static let caption_2_line_height = "var(--line-height-body-tight)"
  static let label_1_size = "var(--font-size-label-1)"
  static let label_1_line_height = "var(--line-height-ui)"
  static let label_2_size = "var(--font-size-label-2)"
  static let label_2_line_height = "var(--line-height-ui)"
  static let meta_1_size = "var(--font-size-meta-1)"
  static let meta_1_line_height = "var(--line-height-body-tight)"
  static let meta_2_size = "var(--font-size-meta-2)"
  static let meta_2_line_height = "var(--line-height-body-tight)"
  static let eyebrow_size = "var(--font-size-eyebrow)"
  static let eyebrow_line_height = "var(--line-height-ui)"
  static let overline_size = "var(--font-size-overline)"
  static let overline_line_height = "var(--line-height-ui)"
  static let nav_primary_size = "var(--font-size-nav-primary)"
  static let nav_primary_line_height = "var(--line-height-ui)"
  static let nav_secondary_size = "var(--font-size-nav-secondary)"
  static let nav_secondary_line_height = "var(--line-height-ui)"
  static let nav_local_label_size = "var(--font-size-nav-local-label)"
  static let nav_local_label_line_height = "var(--line-height-ui)"
  static let nav_local_link_size = "var(--font-size-nav-local-link)"
  static let nav_local_link_line_height = "var(--line-height-ui)"
  static let nav_tab_size = "var(--font-size-nav-tab)"
  static let nav_tab_line_height = "var(--line-height-ui)"
  static let breadcrumb_size = "var(--font-size-breadcrumb)"
  static let breadcrumb_line_height = "var(--line-height-ui-relaxed)"
  static let utility_nav_size = "var(--font-size-utility-nav)"
  static let utility_nav_line_height = "var(--line-height-ui)"
  static let website_local_nav_label_font_size = "var(--nav-local-label-size)"
  static let website_local_nav_link_font_size = "var(--nav-local-link-size)"
  static let website_local_nav_font_weight = "var(--nav-local-link-weight)"
  static let website_local_nav_letter_spacing = "var(--nav-local-link-tracking)"
  static let website_local_nav_line_height = "var(--nav-local-link-line-height)"
  static let button_sm_size = "var(--font-size-button-sm)"
  static let button_md_size = "var(--font-size-button-md)"
  static let button_lg_size = "var(--font-size-button-lg)"
  static let button_sm_line_height = "var(--line-height-ui)"
  static let button_md_line_height = "var(--line-height-ui)"
  static let button_lg_line_height = "var(--line-height-ui)"
  static let control_xs_size = "var(--font-size-control-xs)"
  static let control_sm_size = "var(--font-size-control-sm)"
  static let control_md_size = "var(--font-size-control-md)"
  static let control_lg_size = "var(--font-size-control-lg)"
  static let control_xs_line_height = "var(--line-height-ui)"
  static let control_sm_line_height = "var(--line-height-ui)"
  static let control_md_line_height = "var(--line-height-ui)"
  static let control_lg_line_height = "var(--line-height-ui)"
  static let chip_size = "var(--font-size-chip)"
  static let chip_line_height = "var(--line-height-ui)"
  static let pill_size = "var(--font-size-pill)"
  static let pill_line_height = "var(--line-height-ui)"
  static let menu_item_size = "var(--font-size-menu-item)"
  static let menu_item_line_height = "var(--line-height-ui-relaxed)"
  static let tooltip_size = "var(--font-size-tooltip)"
  static let tooltip_line_height = "var(--line-height-body-tight)"
  static let field_label_size = "var(--font-size-field-label)"
  static let field_label_line_height = "var(--line-height-ui)"
  static let field_input_size = "var(--font-size-field-input)"
  static let field_input_line_height = "var(--line-height-body-tight)"
  static let field_placeholder_size = "var(--font-size-field-placeholder)"
  static let field_placeholder_line_height = "var(--line-height-body-tight)"
  static let field_helper_size = "var(--font-size-field-helper)"
  static let field_helper_line_height = "var(--line-height-body-tight)"
  static let field_error_size = "var(--font-size-field-error)"
  static let field_error_line_height = "var(--line-height-body-tight)"
  static let field_counter_size = "var(--font-size-field-counter)"
  static let field_counter_line_height = "var(--line-height-ui)"
  static let data_value_xl_size = "var(--font-size-data-value-xl)"
  static let data_value_xl_line_height = "var(--line-height-heading-tight)"
  static let data_value_lg_size = "var(--font-size-data-value-lg)"
  static let data_value_lg_line_height = "var(--line-height-heading)"
  static let data_value_md_size = "var(--font-size-data-value-md)"
  static let data_value_md_line_height = "var(--line-height-heading-relaxed)"
  static let data_label_size = "var(--font-size-data-label)"
  static let data_label_line_height = "var(--line-height-ui)"
  static let data_caption_size = "var(--font-size-data-caption)"
  static let data_caption_line_height = "var(--line-height-body-tight)"
  static let chart_axis_size = "var(--font-size-chart-axis)"
  static let chart_axis_line_height = "var(--line-height-ui)"
  static let chart_legend_size = "var(--font-size-chart-legend)"
  static let chart_legend_line_height = "var(--line-height-ui)"
  static let table_heading_size = "var(--font-size-table-heading)"
  static let table_heading_line_height = "var(--line-height-ui)"
  static let table_cell_size = "var(--font-size-table-cell)"
  static let table_cell_line_height = "var(--line-height-body-tight)"
  static let table_cell_dense_size = "var(--font-size-table-cell-dense)"
  static let table_cell_dense_line_height = "var(--line-height-body-tight)"
  static let table_caption_size = "var(--font-size-table-caption)"
  static let table_caption_line_height = "var(--line-height-body-tight)"
  static let code_inline_size = "var(--font-size-code-inline)"
  static let code_inline_line_height = "var(--line-height-body-tight)"
  static let code_block_size = "var(--font-size-code-block)"
  static let code_block_line_height = "var(--line-height-code)"
  static let kbd_size = "var(--font-size-kbd)"
  static let kbd_line_height = "var(--line-height-ui)"
  static let path_size = "var(--font-size-path)"
  static let path_line_height = "var(--line-height-body-tight)"
  static let status_sm_size = "var(--font-size-status-sm)"
  static let status_sm_line_height = "var(--line-height-ui)"
  static let status_md_size = "var(--font-size-status-md)"
  static let status_md_line_height = "var(--line-height-ui)"
  static let alert_title_size = "var(--font-size-alert-title)"
  static let alert_title_line_height = "var(--line-height-heading-relaxed)"
  static let alert_body_size = "var(--font-size-alert-body)"
  static let alert_body_line_height = "var(--line-height-body-tight)"
  static let toast_title_size = "var(--font-size-toast-title)"
  static let toast_title_line_height = "var(--line-height-ui-relaxed)"
  static let toast_body_size = "var(--font-size-toast-body)"
  static let toast_body_line_height = "var(--line-height-body-tight)"
  static let profile_name_size = "var(--font-size-profile-name)"
  static let profile_name_line_height = "var(--line-height-heading-relaxed)"
  static let profile_handle_size = "var(--font-size-profile-handle)"
  static let profile_handle_line_height = "var(--line-height-body-tight)"
  static let profile_bio_size = "var(--font-size-profile-bio)"
  static let profile_bio_line_height = "var(--line-height-body-tight)"
  static let profile_stat_value_size = "var(--font-size-profile-stat-value)"
  static let profile_stat_value_line_height = "var(--line-height-ui)"
  static let profile_stat_label_size = "var(--font-size-profile-stat-label)"
  static let profile_stat_label_line_height = "var(--line-height-ui)"
  static let profile_meta_size = "var(--font-size-profile-meta)"
  static let profile_meta_line_height = "var(--line-height-body-tight)"
  static let product_title_size = "var(--font-size-product-title)"
  static let product_title_line_height = "var(--line-height-heading-relaxed)"
  static let product_kicker_size = "var(--font-size-product-kicker)"
  static let product_kicker_line_height = "var(--line-height-ui)"
  static let product_summary_size = "var(--font-size-product-summary)"
  static let product_summary_line_height = "var(--line-height-body-tight)"
  static let product_feature_title_size = "var(--font-size-product-feature-title)"
  static let product_feature_title_line_height = "var(--line-height-heading-relaxed)"
  static let product_feature_body_size = "var(--font-size-product-feature-body)"
  static let product_feature_body_line_height = "var(--line-height-body-tight)"
  static let product_spec_label_size = "var(--font-size-product-spec-label)"
  static let product_spec_label_line_height = "var(--line-height-ui)"
  static let product_spec_value_size = "var(--font-size-product-spec-value)"
  static let product_spec_value_line_height = "var(--line-height-body-tight)"
  static let marketing_hero_size = "var(--font-size-marketing-hero)"
  static let marketing_hero_line_height = "var(--line-height-heading-tight)"
  static let marketing_section_title_size = "var(--font-size-marketing-section-title)"
  static let marketing_section_title_line_height = "var(--line-height-heading)"
  static let marketing_card_title_size = "var(--font-size-marketing-card-title)"
  static let marketing_card_title_line_height = "var(--line-height-heading-relaxed)"
  static let marketing_proof_size = "var(--font-size-marketing-proof)"
  static let marketing_proof_line_height = "var(--line-height-body-tight)"
  static let marketing_cta_size = "var(--font-size-marketing-cta)"
  static let marketing_cta_line_height = "var(--line-height-ui)"
  static let font_weight_light = "300"
  static let font_weight_body = "400"
  static let font_weight_medium = "500"
  static let font_weight_semibold = "600"
  static let font_weight_bold = "700"
  static let font_weight_heading_strong = "var(--font-weight-bold)"
  static let font_weight_heading = "var(--font-weight-semibold)"
  static let font_weight_heading_soft = "var(--font-weight-medium)"
  static let display_1_weight = "var(--font-weight-heading-strong)"
  static let display_2_weight = "var(--font-weight-heading-strong)"
  static let display_3_weight = "var(--font-weight-heading)"
  static let headline_1_weight = "var(--font-weight-heading-strong)"
  static let headline_2_weight = "var(--font-weight-heading)"
  static let headline_3_weight = "var(--font-weight-heading-soft)"
  static let headline_4_weight = "var(--font-weight-heading-soft)"
  static let headline_5_weight = "var(--font-weight-heading-soft)"
  static let headline_6_weight = "var(--font-weight-heading-soft)"
  static let title_1_weight = "var(--font-weight-heading)"
  static let title_2_weight = "var(--font-weight-heading-soft)"
  static let title_3_weight = "var(--font-weight-heading-soft)"
  static let subtitle_1_weight = "var(--font-weight-body)"
  static let subtitle_2_weight = "var(--font-weight-body)"
  static let section_title_weight = "var(--font-weight-light)"
  static let description_1_weight = "var(--body-2-weight)"
  static let description_2_weight = "var(--body-3-weight)"
  static let body_1_weight = "var(--font-weight-body)"
  static let body_2_weight = "var(--font-weight-body)"
  static let body_3_weight = "var(--font-weight-body)"
  static let body_4_weight = "var(--font-weight-body)"
  static let editorial_title_weight = "var(--font-weight-heading-strong)"
  static let editorial_heading_weight = "var(--font-weight-heading)"
  static let editorial_subheading_weight = "var(--font-weight-heading-soft)"
  static let editorial_body_weight = "var(--font-weight-body)"
  static let editorial_lede_weight = "var(--font-weight-body)"
  static let editorial_note_weight = "var(--font-weight-body)"
  static let caption_1_weight = "var(--font-weight-body)"
  static let caption_2_weight = "var(--font-weight-body)"
  static let label_1_weight = "var(--font-weight-heading-soft)"
  static let label_2_weight = "var(--font-weight-heading-soft)"
  static let meta_1_weight = "var(--font-weight-body)"
  static let meta_2_weight = "var(--font-weight-body)"
  static let eyebrow_weight = "var(--font-weight-heading-soft)"
  static let overline_weight = "var(--font-weight-heading-soft)"
  static let nav_primary_weight = "var(--font-weight-heading-soft)"
  static let nav_secondary_weight = "var(--font-weight-body)"
  static let nav_local_label_weight = "var(--font-weight-body)"
  static let nav_local_link_weight = "var(--font-weight-body)"
  static let nav_tab_weight = "var(--nav-local-link-weight)"
  static let breadcrumb_weight = "var(--font-weight-body)"
  static let utility_nav_weight = "var(--font-weight-body)"
  static let button_sm_weight = "var(--font-weight-heading-soft)"
  static let button_md_weight = "var(--font-weight-heading-soft)"
  static let button_lg_weight = "var(--font-weight-heading-soft)"
  static let control_xs_weight = "var(--font-weight-heading-soft)"
  static let control_sm_weight = "var(--font-weight-heading-soft)"
  static let control_md_weight = "var(--font-weight-heading-soft)"
  static let control_lg_weight = "var(--font-weight-heading-soft)"
  static let chip_weight = "var(--font-weight-heading-soft)"
  static let pill_weight = "var(--font-weight-heading-soft)"
  static let menu_item_weight = "var(--font-weight-body)"
  static let tooltip_weight = "var(--font-weight-body)"
  static let field_label_weight = "var(--font-weight-heading-soft)"
  static let field_input_weight = "var(--font-weight-body)"
  static let field_placeholder_weight = "var(--font-weight-body)"
  static let field_helper_weight = "var(--font-weight-body)"
  static let field_error_weight = "var(--font-weight-body)"
  static let field_counter_weight = "var(--font-weight-body)"
  static let data_value_xl_weight = "var(--font-weight-heading)"
  static let data_value_lg_weight = "var(--font-weight-heading)"
  static let data_value_md_weight = "var(--font-weight-heading-soft)"
  static let data_label_weight = "var(--font-weight-heading-soft)"
  static let data_caption_weight = "var(--font-weight-body)"
  static let chart_axis_weight = "var(--font-weight-body)"
  static let chart_legend_weight = "var(--font-weight-body)"
  static let table_heading_weight = "var(--font-weight-heading-soft)"
  static let table_cell_weight = "var(--font-weight-body)"
  static let table_cell_dense_weight = "var(--font-weight-body)"
  static let table_caption_weight = "var(--font-weight-body)"
  static let code_inline_weight = "var(--font-weight-body)"
  static let code_block_weight = "var(--font-weight-body)"
  static let kbd_weight = "var(--font-weight-heading-soft)"
  static let path_weight = "var(--font-weight-body)"
  static let status_sm_weight = "var(--font-weight-heading-soft)"
  static let status_md_weight = "var(--font-weight-heading-soft)"
  static let alert_title_weight = "var(--font-weight-heading-soft)"
  static let alert_body_weight = "var(--font-weight-body)"
  static let toast_title_weight = "var(--font-weight-heading-soft)"
  static let toast_body_weight = "var(--font-weight-body)"
  static let profile_name_weight = "var(--font-weight-heading)"
  static let profile_handle_weight = "var(--font-weight-body)"
  static let profile_bio_weight = "var(--font-weight-body)"
  static let profile_stat_value_weight = "var(--font-weight-heading-soft)"
  static let profile_stat_label_weight = "var(--font-weight-body)"
  static let profile_meta_weight = "var(--font-weight-body)"
  static let product_title_weight = "var(--font-weight-heading)"
  static let product_kicker_weight = "var(--font-weight-heading-soft)"
  static let product_summary_weight = "var(--font-weight-body)"
  static let product_feature_title_weight = "var(--font-weight-heading-soft)"
  static let product_feature_body_weight = "var(--font-weight-body)"
  static let product_spec_label_weight = "var(--font-weight-heading-soft)"
  static let product_spec_value_weight = "var(--font-weight-body)"
  static let marketing_hero_weight = "var(--font-weight-heading-strong)"
  static let marketing_section_title_weight = "var(--font-weight-heading)"
  static let marketing_card_title_weight = "var(--font-weight-heading-soft)"
  static let marketing_proof_weight = "var(--font-weight-body)"
  static let marketing_cta_weight = "var(--font-weight-heading-soft)"
  static let tracking_display = "0.08em"
  static let tracking_heading = "0.01em"
  static let tracking_copy = "0.01em"
  static let tracking_control = "0.008em"
  static let tracking_label = "0.04em"
  static let tracking_meta = "0.02em"
  static let tracking_caption = "0.015em"
  static let tracking_ui = "0.08em"
  static let tracking_code = "0"
  static let display_1_tracking = "var(--tracking-display)"
  static let display_2_tracking = "var(--tracking-display)"
  static let display_3_tracking = "var(--tracking-heading)"
  static let headline_1_tracking = "var(--tracking-display)"
  static let headline_2_tracking = "var(--tracking-heading)"
  static let headline_3_tracking = "var(--tracking-heading)"
  static let headline_4_tracking = "var(--tracking-heading)"
  static let headline_5_tracking = "var(--tracking-heading)"
  static let headline_6_tracking = "var(--tracking-heading)"
  static let title_1_tracking = "var(--tracking-heading)"
  static let title_2_tracking = "var(--tracking-heading)"
  static let title_3_tracking = "var(--tracking-heading)"
  static let section_title_tracking = "-0.03em"
  static let subtitle_1_tracking = "var(--tracking-copy)"
  static let subtitle_2_tracking = "var(--tracking-copy)"
  static let body_1_tracking = "var(--tracking-copy)"
  static let body_2_tracking = "var(--tracking-copy)"
  static let body_3_tracking = "var(--tracking-copy)"
  static let body_4_tracking = "var(--tracking-copy)"
  static let description_1_tracking = "var(--body-2-tracking)"
  static let description_2_tracking = "var(--body-3-tracking)"
  static let editorial_title_tracking = "var(--tracking-heading)"
  static let editorial_heading_tracking = "var(--tracking-heading)"
  static let editorial_subheading_tracking = "var(--tracking-heading)"
  static let editorial_body_tracking = "var(--tracking-copy)"
  static let editorial_lede_tracking = "var(--tracking-copy)"
  static let editorial_note_tracking = "var(--tracking-caption)"
  static let caption_1_tracking = "var(--tracking-caption)"
  static let caption_2_tracking = "var(--tracking-caption)"
  static let label_1_tracking = "var(--tracking-label)"
  static let label_2_tracking = "var(--tracking-label)"
  static let meta_1_tracking = "var(--tracking-meta)"
  static let meta_2_tracking = "var(--tracking-meta)"
  static let eyebrow_tracking = "var(--tracking-ui)"
  static let overline_tracking = "var(--tracking-ui)"
  static let nav_primary_tracking = "var(--tracking-control)"
  static let nav_secondary_tracking = "var(--tracking-control)"
  static let nav_local_label_tracking = "var(--tracking-control)"
  static let nav_local_link_tracking = "var(--tracking-control)"
  static let nav_tab_tracking = "var(--nav-local-link-tracking)"
  static let breadcrumb_tracking = "var(--tracking-meta)"
  static let utility_nav_tracking = "var(--tracking-control)"
  static let button_sm_tracking = "var(--tracking-control)"
  static let button_md_tracking = "var(--tracking-control)"
  static let button_lg_tracking = "var(--tracking-control)"
  static let control_xs_tracking = "var(--tracking-control)"
  static let control_sm_tracking = "var(--tracking-control)"
  static let control_md_tracking = "var(--tracking-control)"
  static let control_lg_tracking = "var(--tracking-control)"
  static let chip_tracking = "var(--tracking-control)"
  static let pill_tracking = "var(--tracking-control)"
  static let menu_item_tracking = "var(--tracking-control)"
  static let tooltip_tracking = "var(--tracking-caption)"
  static let field_label_tracking = "var(--tracking-label)"
  static let field_input_tracking = "var(--tracking-copy)"
  static let field_placeholder_tracking = "var(--tracking-copy)"
  static let field_helper_tracking = "var(--tracking-caption)"
  static let field_error_tracking = "var(--tracking-caption)"
  static let field_counter_tracking = "var(--tracking-caption)"
  static let data_value_xl_tracking = "var(--tracking-heading)"
  static let data_value_lg_tracking = "var(--tracking-heading)"
  static let data_value_md_tracking = "var(--tracking-heading)"
  static let data_label_tracking = "var(--tracking-label)"
  static let data_caption_tracking = "var(--tracking-caption)"
  static let chart_axis_tracking = "var(--tracking-caption)"
  static let chart_legend_tracking = "var(--tracking-caption)"
  static let table_heading_tracking = "var(--tracking-label)"
  static let table_cell_tracking = "var(--tracking-copy)"
  static let table_cell_dense_tracking = "var(--tracking-copy)"
  static let table_caption_tracking = "var(--tracking-caption)"
  static let code_inline_tracking = "var(--tracking-code)"
  static let code_block_tracking = "var(--tracking-code)"
  static let kbd_tracking = "var(--tracking-control)"
  static let path_tracking = "var(--tracking-code)"
  static let status_sm_tracking = "var(--tracking-control)"
  static let status_md_tracking = "var(--tracking-control)"
  static let alert_title_tracking = "var(--tracking-heading)"
  static let alert_body_tracking = "var(--tracking-copy)"
  static let toast_title_tracking = "var(--tracking-heading)"
  static let toast_body_tracking = "var(--tracking-copy)"
  static let profile_name_tracking = "var(--tracking-heading)"
  static let profile_handle_tracking = "var(--tracking-meta)"
  static let profile_bio_tracking = "var(--tracking-copy)"
  static let profile_stat_value_tracking = "var(--tracking-heading)"
  static let profile_stat_label_tracking = "var(--tracking-caption)"
  static let profile_meta_tracking = "var(--tracking-meta)"
  static let product_title_tracking = "var(--tracking-heading)"
  static let product_kicker_tracking = "var(--tracking-ui)"
  static let product_summary_tracking = "var(--tracking-copy)"
  static let product_feature_title_tracking = "var(--tracking-heading)"
  static let product_feature_body_tracking = "var(--tracking-copy)"
  static let product_spec_label_tracking = "var(--tracking-label)"
  static let product_spec_value_tracking = "var(--tracking-copy)"
  static let marketing_hero_tracking = "var(--tracking-display)"
  static let marketing_section_title_tracking = "var(--tracking-heading)"
  static let marketing_card_title_tracking = "var(--tracking-heading)"
  static let marketing_proof_tracking = "var(--tracking-copy)"
  static let marketing_cta_tracking = "var(--tracking-control)"
  static let text_transform_none = "none"
  static let text_transform_uppercase = "uppercase"
  static let eyebrow_transform = "var(--cc-transform-uppercase)"
  static let overline_transform = "var(--cc-transform-uppercase)"
  static let label_1_transform = "var(--cc-transform-none)"
  static let label_2_transform = "var(--cc-transform-none)"
  static let section_title_transform = "var(--cc-transform-none)"
  static let nav_primary_transform = "var(--cc-transform-none)"
  static let nav_secondary_transform = "var(--cc-transform-none)"
  static let nav_local_label_transform = "var(--cc-transform-none)"
  static let nav_local_link_transform = "var(--cc-transform-none)"
  static let button_transform = "var(--cc-transform-none)"
  static let control_transform = "var(--cc-transform-none)"
  static let product_kicker_transform = "var(--cc-transform-uppercase)"
  static let z_below = "-1"
  static let z_base = "1"
  static let z_raised = "10"
  static let z_sticky = "100"
  static let z_fixed = "1000"
  static let z_overlay_backdrop = "10000"
  static let z_overlay_surface = "10010"
  static let z_overlay_control = "10020"
  static let z_menu = "100000"
  static let z_header_controls = "100001"
  static let z_country_overlay = "100100"
  static let z_language_dropdown = "200001"
}