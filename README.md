# react-soin
React/Node/JS examples for education purpose only

# Algunos comandos importantes ejecutables en la terminal

## Node
### node --version
> Permite conocer la versión de `node` que tenemos instalada en nuestro equipo
```sh
$ node --version
$ v8.6.0
```

### npm --version
> Permite conocer la versión de `npm` que tenemos instalada en nuestro equipo
```sh
$ npm --version
$ 5.3.0
```

### npm init
> Permite iniciar un proyecto en node, en la terminal debes estar en la carpeta del proyecto y ejecutar `npm init`, van a aparecer una serie de preguntas:

```sh
$ cd project-name
$ npm init
```
> Al finalizar la ejecución este creará un archivo con el nombre de `package.json` que es un archivo de manifiesto de Node, en donde se definen las dependencias de mi proyecto, configuraciones, scripts, y información general.

### node [nombreDelArchivo].js
> Permite ejecutar un archivo de `Javascript` con `Node`, por ejemplo si queremos ejecutar el archivo `index.js` lo realizamos de la siguiente manera:
```sh
$ node index.js
$ Resultado de la suma es: 4
```

### npm install -g [nombreDelPaquete]
> Permite instalar un paquete que esta en el registro de `npm` en nuestro equipo de manera global (que puede ser accedido de cualquier directiorio de mi equipo), por ejemplo si queremos instalar de manera global `pm2` lo realizamos de la siguiente manera:
```sh
$ npm install -g pm2
$ + pm2@2.9.3
$ added 252 packages in 17.908s
```

### npm install -S [nombreDelPaquete]
> Permite instalar un paquete que esta en el registro de `npm` como `dependencia` de nuestro proyecto, por ejemplo si queremos instalar como dependencia un paquete que se llama `express` lo realizamos de la siguiente manera:
```sh
$ npm install -S express
$ + express@4.16.2
$ added 47 packages in 8.413s
```

### npm install -D [nombreDelPaquete]
> Permite instalar un paquete que esta en el registro de `npm` como `dependencia de desarrollo` de nuestro proyecto, por ejemplo si queremos instalar como dependencia de desarrollo un paquete que se llama `prettier` lo realizamos de la siguiente manera:
```sh
$ npm install -D prettier
$ + prettier@1.10.2
$ added 1 package in 3.876s
```

### npm uninstall -[D,S,g] [nombreDelPaquete]
> Permite desinstalar un paquete que se instalo previamente, por ejemplo si queremos desinstalar `prettier`. Es importante, que se debe desintalar indicando la bandera con la que se instalo: -D, -S, -g. Por ejemplo:
```sh
$ npm uninstall -D prettier
```

### npm run [scriptName]
> Permite ejecutar `scripts` que definimos en nuestro `package.json` del proyecto. Por ejemplo, si tenemos un script que se llama `lint`, lo ejecutamos de la siguiente manera:
```sh
$ npm run lint
```

## Git
### git init
> Inicializa un repositorio de tipo GIT en el directorio local:
```sh
$ git init
```

### git clone [urlRepositorio]
> Permite clonar un repositorio en la carpeta donde hayas elegido:
```sh
$ git clone https://github.com/chicus12/react-soin
```

### git add .
> Agrega todos los archivos al stack de git para que sean controlados y versionados:
```sh
$ git add .
```

### git add [archivo]
> Agrega el archivo al stack de git para que sean controlado y versionado:
```sh
$ git add README.md
```

### git checkout -- [archivo]
> Descarta los cambios realizados al archivo:
```sh
$ git checkout -- README.md
```

### git reset --hard
> Descarta todos los cambios realizados en el repositorio local y que no hayan sido "commiteados":
```sh
$ git reset --hard
```

### git commit –m '[mensaje]'
> Confirma los cambios del stack de agregados:
```sh
$ git commit –m 'versión inicial del proyecto'
```

### git push [remote] [nombreRama]
> Sube los cambios confirmados del stack al remote y rama indicados:
```sh
$ git push origin clase1/1-modules
```

### git fetch --all
> Baja los cambios realizados en todas las ramas de todos los remotes:
```sh
$ git fetch --all
```

### git merge [remote = opcional]/[nombreRama]
> Hace union de los cambios realizados en la rama remota con la rama local actual:
```sh
$ git merge origin/clase1/1-modules
```

### git pull [remote = opcional]/[nombreRama]
> Baja los cambios realizadas en la rama remota indicada y hace el merge:
```sh
$ git pull origin/clase1/1-modules
```

### git branch
> Permite ver la lista de ramas/branchs locales:
```sh
$ git branch
$ clase1/1-modules
$ clase1/2-class
$ clase2/1-object_destructuring
$ * master
```

### git branch -r
> Permite ver la lista de ramas/branchs remotas:
```sh
$ git branch -r
$ clase1/1-modules
$ clase1/2-class
$ * master
```

### git checkout -b [nombreRama]
> Crea una rama/branch nuevo y se posiciona en la nueva rama:
```sh
$ git checkout -b clase1/1-modules
```

### git status
> Ver el estado de cambios y archivos agregados al stack:
```sh
$ git status
```