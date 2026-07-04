import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    presets: [presetUno(), presetAttributify()],
    transformers: [transformerDirectives()],
    shortcuts: {
        'flex-center': 'flex items-center justify-center',
        'flex-between': 'flex items-center justify-between',
        'flex-col-center': 'flex flex-col items-center justify-center',
    },
    rules: [],
})