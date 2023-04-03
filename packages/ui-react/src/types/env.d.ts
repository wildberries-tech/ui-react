/// <reference types="vite/client" />

/* Custom ENV
interface ImportMetaEnv {
    readonly MY_ENV: string
}
*/

interface ImportMeta {
    readonly env: ImportMetaEnv
}
