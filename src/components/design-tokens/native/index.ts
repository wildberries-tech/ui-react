import style from './../hook/index.module.pcss';

export const useDesignTokensNative = ($el: HTMLElement | null) => {
    if($el) {
        !$el.classList.contains(style['design-tokens']) && $el.classList.add(style['design-tokens']);
    }
};
