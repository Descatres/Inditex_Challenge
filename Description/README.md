# Desafio Front-End

## Resumo
**Esta prova consiste na criação de uma mini-aplicação para comprar dispositivos móveis.**

- A aplicação terá apenas duas (2) vistas:
	1. Vista principal - lista de produtos ([PLP](#plp))
	2. Detalhes dos produtos ([PDP](#plp))

- A implementação dos desenhos fica ao critério do desenvolvedor, mas deverá seguir a estrutura que está definida no encunciado. Será valorizado positivamente o nível de detalhe da proposta (?).
- O uso de React/Preact é requirido para o desenvolvimento da aplicação e poderá ser complementado com o uso de outras bibliotecas de JS, caso seja oportuno.
- É permitido o uso de JS com ES6 e que, de preferência, não seja utilizado TypeScript.
- Poderá ser utilizado um _boilerplate template_ para a criação da estrutura do projeto.
- A aplicação será um _SPA_, onde se adicionará o roteamento das vistas ao código do cliente, sem que seja um MPA e sem a utilização de SSR.
- O projeto terá de conter os seguintes _scripts_, para poder gerir a aplicação:
	1. Start - Modo de desenvolvimento
	2. Build - Compilação para modo "Produção"
	3. Test - Lançamento de teste
	4. Linit - Verificação do código
- O projeto deverá ser apresentado num repositório de código aberto (_GitHub_, _GitLab_, _BitBucket_), com a solução do desafio. Deve carregar o código de maneira evolutiva para que os objetivos sejam alcançados.
- No repositório deve incluir um documento _**README**_ (inclui-lo, de preferência, no primeiro _commit_), onde constará os passos necessários para executar o projeto bem como qualquer nota explicativa ou informação adicional que se conseidere necessária.
---
## Descrição das vistas

### PLP
**Product List Page**

- Esta é a página onde será visível a lista dos produtos.
- Nesta página serão mostrados todos os elementos (produtos) que são devolvidos pela _API_.
- Ao selecionar um produto deverão ser apresentados os detalhes do mesmo ([PDP](#pdp)).
- Serão mostrados, no máximo, quatro (4) produtos por fila. A apresentação dos mesmos será adaptativa, consoante a resolução.

![PLP](D:\Shareable\Loop\React\Desafio_Inditex\Description\images\PLP_image.png)
---
### PDP
**Product Details Page**

- Esta página será dividida em duas colunas:
	+ Na primeira, será apresentado o componente com a imagem do produto.
	+ Na segunda, serão apresentados os detalhes do produto e diversas opções.
- Deverá mostrar um _link_ para voltar à página da lista dos produtos ([PLP](#plp))

![PDP](D:\Shareable\Loop\React\Desafio_Inditex\Description\images\PDP_image.png)
---
## Descrição dos componentes

### Header
- O título ou o ícone da aplicação deverá voltar, quando pressionado, à vista principal ([PLP](#plp)).
- Um _breadcrumbs_ será apresentado, mostrando a página onde o usuário está bem como um _link_ para a sua navegação.
- No lado direito do header, o número de itens que foram adicionados ao carrinho deverá ser apresentado.

### Barra de pesquisa (SEARCH)

- Um _input_ será apresentado ao utilizador, que permitirá a introdução de um texto (_string_).
- O utlizador deverá filtrar os produtos baseado no texto inserido e será comparado com a marca e modelo dos produtos.
- A filtragem ocorrerá em tempo real, isto é, a procura será feita assim que o utilizador altere algum parâmetro da pesquisa.

### Lista de itens (ITEM)

- As seguintes informações sobre o produto serão apresentadas, na vista principal:
	+ Imagem
	+ Marca
	+ Modelo
	+ Preço

### Imagem do produto (IMAGE)

- A imagem do produto que será mostrada

### Descrição do produto (DESCRIPTION)
- Os detalhes associados a cada produto serão apresentados e, pelo menos, os seguintes atributoos deverão ser apresentados:
	+ Marca
	+ Modelo
	+ Preço
	+ CPU
	+ RAM
	+ Sistema operativo
	+ Resolução de ecrã
	+ Bateria
	+ Cameras
	+ Dimensões
	+ Peso

### Ações dos produtos (ACTIONS)

- Two types of selectors will be displayed, where the user will be able to select the type of product he/she wants to add to the cart. The option selectors for the following attributes will be displayed:
	+ Storage
	+ Colors
- Even if there is only one option, the selector will be displayed with the information. For this use case, it should be selected by default.
- An Add button will be displayed, where the user, after selecting the options, will add the product to the cart.
- When adding a product via the API, the following information is required to be sent:
	+ The product identifier
	+ The selected color code
	+ The code of the selected storage capacity
- The add request returns, in the response, the number of products in the basket. This value must be shown in the application header in any view of the application. This requires persisting the data.

## Resources
### Integração _API_
Para poder realizar o desafio, é necessário integrar um _API_ para a gestão de dados.
O domínio do mesmo será igual para todos os _endpoints_ e será o seguinte:</br>
[https://front-test-api.herokuapp.com/](https://front-test-api.herokuapp.com/)

As definições dos _endpoints_ são as seguintes:
#### Obter a lista dos produtos:

**Path**

``` GET /api/product ```

**Response**
```
[
 {
 id: 0001,
 ...
 },
 {
 id: 0002,
 ...
 }
]
```
#### Obter os detalhes dos produtos:

**Path**

``` GET /api/product/:id ```

**Response**
```
[
 {
 id: 0001,
 ...
 },
 {
 id: 0002,
 ...
 }
]
```
#### Adicionar produto ao carrinho:

**Path**

``` POST /api/cart ```

**Body**
```
{
 id: 0001,
 colorCode: 1,
 storageCode: 2
}
```

**Response**
```
{
 count: 1
}

```

## Data persistence
**É necessário adicionar um _client storage_ dos dados recebidos da _API_. Queremos oferecer um _caching system_ de modo a que não sejam feitos constantemnete _requests_ à _API_. Para tal, é necessário definir as as seguintes funcionalidades:**

- A informação será guardada sempre que seja feito um _request_ à API.
- Esta informação será guardada e estará disponível durante uma hora. Assim que este tempo seja excedido a informação deverá ser validada novamente.
- Qualquer método de armazenamento poderá ser utilizado para guardar esta informação, seja no _browser_ ou em memória, mas sempre do lado do cliente.