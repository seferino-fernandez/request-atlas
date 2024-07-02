import { EditorView } from '@codemirror/view'
import type { Extension } from '@codemirror/state'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags as t } from '@lezer/highlight'

/// The colors used in the theme, as CSS color strings.
const color = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: 'hsl(var(--card))',
  cardForeground: 'hsl(var(--card-foreground))',
  popover: 'hsl(var(--popover))',
  popoverForeground: 'hsl(var(--popover-foreground))',
  primary: 'hsl(var(--primary))',
  primaryForeground: 'hsl(var(--primary-foreground))',
  secondary: 'hsl(var(--secondary))',
  secondaryForeground: 'hsl(var(--secondary-foreground))',
  muted: 'hsl(var(--muted))',
  mutedForeground: 'hsl(var(--muted-foreground))',
  accent: 'hsl(var(--accent))',
  accentForeground: 'hsl(var(--accent-foreground))',
  destructive: 'hsl(var(--destructive))',
  destructiveForeground: 'hsl(var(--destructive-foreground))',
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  radius: 'var(--radius)',
}

export const requestAtlasTheme = EditorView.theme(
  {
    '&': {
      color: color.foreground,
      backgroundColor: color.background,
      borderRadius: '0.5rem',
      minHeight: '100dvh',
      maxHeight: '100dvh',
    },

    '.cm-content': {
      caretColor: color.primary,
    },

    '.cm-cursor, .cm-dropCursor': { borderLeftColor: color.primary },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: color.secondary },

    '.cm-panels': { backgroundColor: color.card, color: color.cardForeground },
    '.cm-panels.cm-panels-top': { borderBottom: `2px solid ${color.border}` },
    '.cm-panels.cm-panels-bottom': { borderTop: `2px solid ${color.border}` },

    '.cm-searchMatch': {
      backgroundColor: 'hsl(var(--highlight, #72a1ff59))',
      outline: '1px solid hsl(var(--outline, #457dff))',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: 'hsl(var(--highlight-selected, #6199ff2f))',
    },

    '.cm-activeLine': { backgroundColor: 'hsl(var(--active-line, #6699ff0b))' },
    '.cm-selectionMatch': { backgroundColor: 'hsl(var(--selection-match, #aafe661a))' },

    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      backgroundColor: 'hsl(var(--bracket, #bad0f847))',
    },

    '.cm-gutters': {
      backgroundColor: color.background,
      color: color.mutedForeground,
      border: 'none',
    },

    '.cm-activeLineGutter': {
      backgroundColor: color.muted,
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: color.mutedForeground,
    },

    '.cm-scroller': {
      overflow: 'auto',
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: color.popover,
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: color.popover,
      borderBottomColor: color.popover,
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: color.muted,
        color: color.foreground,
      },
    },
  },
)

export const requestAtlasHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: color.primary },
  { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: color.mutedForeground },
  { tag: [t.function(t.variableName), t.labelName], color: color.accent },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: color.secondary },
  { tag: [t.definition(t.name), t.separator], color: color.foreground },
  { tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: color.muted },
  { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: color.primaryForeground },
  { tag: [t.meta, t.comment], color: color.mutedForeground },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.link, color: color.mutedForeground, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: color.primary },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: color.secondary },
  { tag: [t.processingInstruction, t.string, t.inserted], color: color.accentForeground },
  { tag: t.invalid, color: color.destructiveForeground },
])

export const requestAtlasThemeExtension: Extension = [requestAtlasTheme, syntaxHighlighting(requestAtlasHighlightStyle)]
