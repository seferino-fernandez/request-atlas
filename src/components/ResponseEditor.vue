<script setup lang="ts">
import { basicSetup } from 'codemirror'
import { onMounted, ref } from 'vue'
import { indentWithTab } from '@codemirror/commands'
import { EditorView, keymap } from '@codemirror/view'
import { json } from '@codemirror/lang-json'
import { Compartment } from '@codemirror/state'
import { requestAtlasThemeExtension } from '@/lib/codemirrorTheme'
import { useResponseStore } from '@/stores/response'

const responseStore = useResponseStore()

const languageConf = new Compartment()
const themeConf = new Compartment()

const editorContainer = ref<EditorView | null>(null)

const data = ref()

responseStore.$subscribe(() => {
  editorContainer.value?.dispatch({
    changes: {
      from: 0,
      to: editorContainer.value.state.doc.length,
      insert: responseStore.body,
    },
  })
})

onMounted(() => {
  if (!editorContainer.value) {
    initializeEditor()
  }
})

async function initializeEditor() {
  editorContainer.value = new EditorView({
    doc: data.value,
    extensions: [basicSetup, languageConf.of(json()), themeConf.of(requestAtlasThemeExtension), keymap.of([indentWithTab])],
    parent: document.querySelector('#editorContainer') || undefined,
  })
}
</script>

<template>
  <div id="editorContainer" class="overflow-auto" />
</template>
