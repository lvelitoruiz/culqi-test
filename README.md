# culqi

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### You Can test the components 

```sh
npm run test
```

 ### Así mismo se han agregado cosas que no fueron pedidas (Aparte del uso de Pinia y además persistencia en el storage) por ejemplo, en base a la data obtenida se obtienen ahora los cargos y permite señalar a las personas con el cargo seleccionado.

 ![Alt text](./src/assets/img/Screen%20Shot%202023-08-14%20at%2010.31.42.png "a title")

### Se puede hacer sorting de los elementos que están en la página actual

 ![Alt text](./src/assets/img/Screen%20Shot%202023-08-14%20at%2010.33.57.png "a title")

 ### Este sorting funciona con los campos: Nombre, Nombre cargo, Departamento y Cuenta

  ![Alt text](./src/assets/img/Screen%20Shot%202023-08-14%20at%2010.34.14.png "a title")

  ### Además de haberse realizado una validación en el login, para desactivar el botón en caso no estén llenos los dos campos de user y pasword

   ![Alt text](./src/assets/img/Screen%20Shot%202023-08-14%20at%2010.37.12.png "a title")
