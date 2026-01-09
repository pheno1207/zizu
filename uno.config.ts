import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(), // 속성 방식 활성화
    presetIcons({ scale: 1.2, cdn: 'https://esm.sh/' }), // 아이콘 활성화
  ],
})