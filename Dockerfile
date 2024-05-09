# Use uma imagem base com Nginx
FROM nginx:alpine

# Copie os arquivos da aplicação para o diretório de documentos do Nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicie o Nginx e mantenha-o em execução em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
