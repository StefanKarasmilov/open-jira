# Next.js Open Jira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

*MongoDB URL Local:
```
mongodb://localhost:27017/entriesDB
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a .env

* Reconstruir los módulos de node y levantar Next
```
yarn install
yarn dev
```

##Llenar la base de datos con información de pruebas

LLamar:
```
http://localhost:3000/api/seed
```
