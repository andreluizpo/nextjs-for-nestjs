# Servidor

Os requisitos para deploy vão ser:

- Um servidor linux com IP válido que não mude, com acesso SSH (vou usar Ubuntu 24.04 na Google Cloud Platform)
- Um domínio que você possa configurar registros de DNS (Registro tipo A já funcionada)

Comandos para iniciar o site do zero.

```sh
# Ter o node instalado
# Instalar todos os pacotes
npm i
# Configura o .env.local
npm run migrate
npm run seed # Seed é opcional

# build do next
npm run build
npm start # apenas para teste
```
