import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.config({
    rules: {        
      // Controla os espaços dentro de () e {}
      'space-in-parens': ['error', 'never'], // Não permite espaços dentro de parênteses
      'object-curly-spacing': ['error', 'always'], // Exige espaços dentro de chaves { foo: 'bar' }
        
      'quotes': ['error', 'single', { 'avoidEscape': true }], // Usa aspas simples, mas permite aspas duplas em strings com escape
      'indent': ['error', 2], // Usa 2 espaços para indentação
      'semi': ['error', 'always'], // Garante que ponto e vírgula sempre seja usado
    },
  }),
];

export default eslintConfig;
