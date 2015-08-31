import color from 'color';

const deepPink = color('deeppink');
const orchid = color('orchid');

export const PRIMARY = deepPink.hexString();
export const PRIMARY_LIGHT_ACCENT = deepPink.lighten(0.3).hexString();
export const PRIMARY_DARK_ACCENT = deepPink.darken(0.3).hexString();

export const SECONDARY = orchid.hexString();
export const SECONDARY_LIGHT_ACCENT = orchid.lighten(0.3).hexString();
export const SECONDARY_DARK_ACCENT = orchid.darken(0.3).hexString();

export const WHITE = color('white').hexString();
