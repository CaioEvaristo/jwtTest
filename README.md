# JSON Web Token (JWT)

Um JSON Web Token (JWT) é uma forma de representar informações em formato JSON que são transmitidas entre partes de forma segura. Ele é frequentemente utilizado para autenticação e autorização em sistemas web.

## Estrutura de um JWT

Um JWT é composto por três partes separadas por um ponto ".":

```
header.payload.signature

```

### Header

O cabeçalho (header) contém informações sobre o tipo de token e o algoritmo de criptografia utilizado para gerar a assinatura. A estrutura do cabeçalho é a seguinte:

```
{
  "alg": "HS256",
  "typ": "JWT"
}

```

Onde "alg" representa o algoritmo de criptografia utilizado e "typ" representa o tipo de token, que é sempre "JWT".

### Payload

O payload contém as informações que serão transmitidas e é a parte do token que é visível em texto claro. Ele é composto por um conjunto de pares chave-valor, chamados de claims. Existem três tipos de claims:

- Registered Claims: claims definidos pelo padrão JWT, que não são obrigatórios, mas recomendados;
- Public Claims: claims definidos por quem utiliza o JWT para troca de informações;
- Private Claims: claims definidos para uso exclusivo das partes envolvidas na troca de informações.

Exemplo de um payload:

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}

```

### Signature

A assinatura é usada para verificar se o token foi modificado durante a transmissão. Ela é gerada a partir do cabeçalho, do payload e de uma chave secreta compartilhada entre as partes. O algoritmo de criptografia utilizado para gerar a assinatura deve ser o mesmo definido no cabeçalho.

## Como funciona a autenticação com JWT

O processo de autenticação com JWT funciona da seguinte forma:

1. O cliente envia suas credenciais (normalmente usuário e senha) para o servidor;
2. O servidor verifica se as credenciais são válidas e, caso sejam, gera um JWT contendo as informações de autenticação do usuário;
3. O servidor envia o JWT para o cliente;
4. O cliente armazena o JWT (normalmente em um cookie ou no armazenamento local do navegador);
5. O cliente envia o JWT em todas as requisições para o servidor;
6. O servidor verifica se o JWT é válido e, caso seja, permite o acesso aos recursos solicitados.

Dessa forma, o servidor não precisa armazenar as informações de autenticação do usuário em sessões ou cookies, o que simplifica o processo de autenticação e reduz a carga no servidor.

## Conclusão

O JWT é uma forma segura e eficiente de trocar informações entre partes em sistemas web. Ele permite a autenticação e autorização de usuários sem a necessidade de armazenar informações de sessão no servidor. Ao utilizar o JWT, é importante seguir as recomendações de segurança e utilizar algoritmos de criptografia seguros para garantir a integridade das informações transmitidas.

https://jwt.io/
