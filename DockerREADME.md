# Guia para Build e Execução do Container do Painel de OKRs com Docker

## 1. Build da Imagem Docker

Na raiz do projeto e execute o seguinte comando para realizar o **build** da imagem Docker:

```sh
docker build -t okrs-panel --build-arg NEXT_PUBLIC_API_URL=https://api.example.com .
```

- `-t OKRsPanel` → Define o nome da imagem como `OKRsPanel`.
- `--build-arg NEXT_PUBLIC_API_URL=https://api.example.com` → Define a variável de ambiente `NEXT_PUBLIC_API_URL`.

## 2. Executando o Container

Para iniciar o contêiner e expor a aplicação na porta `3000`, execute:

```sh
docker run -p 3000:3000 okrs-panel
```

## 3. Parando o Container

- Só é necessário realizar este procedimento caso o container não pare automaticamente ao encerrar o comando de RUN

Para listar os contêineres em execução:

```sh
docker ps
```

Para parar um contêiner, copie o `CONTAINER_ID` e execute:

```sh
docker stop CONTAINER_ID
```

## 4. Removendo Imagens e Containers

Se precisar remover um contêiner:

```sh
docker rm CONTAINER_ID
```

Para remover a imagem:

```sh
docker rmi OKRsPanel
```