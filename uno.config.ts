import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(), // ?ì„± ë°©ì‹ ?œì„±??
    presetIcons({ scale: 1.2, cdn: 'https://esm.sh/' }), // ?„ì´ì½??œì„±??
  ],
})
