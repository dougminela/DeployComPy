from fabric import Connection

def deploy():
    # Conexão SSH usando uma raw string para o caminho da chave
    c = Connection('192.168.100.8', connectkwargs={"keyfilename": r"C:\Users\Dias/.ssh/id_rsa"})

    # Caminho onde os arquivos devem ser enviados no servidor
    remote_path = '/usr/share/nginx/html'

    # Upload dos arquivos da aplicação
    c.put('app/*', remote=remote_path)

    # Reinicie o servidor Nginx para garantir que as mudanças sejam aplicadas
    c.run('nginx -s reload')

if __name__ == "main":
    deploy()