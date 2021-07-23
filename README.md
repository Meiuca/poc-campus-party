# POC - Tematização

## Instalação

Para instalar o projeto, executar:

```
yarn
```

Uma vez que as dependências tenham sido instaladas com o comando acima, executar:

```
npm explore @meiuca/jota-lib-react -- yarn
```

## Executar o projeto

Para executar o projeto, rodar: 

```
yarn start
```

## Temas

Para gerar a compilação para um novo tema: 

```
npm explore @meiuca/jota-lib-react -- cross-env BRAND=jota THEME=outubro-rosa node theme-replace.js
```

Após gerar o novo tema, é necessário compilar o ds:

```
npm explore @meiuca/jota-lib-react -- yarn build
```

E então subir o projeto novamente:

```
yarn start
```

IMPORTANTE: o valor de THEME pode ser outubro-rosa ou default, apenas para a marca jota