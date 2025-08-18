import { withMask } from "use-mask-input";

export const cpfmask = withMask('999.999.999-99', {
    placeholder: '_',
    showMaskOnHover: true
});