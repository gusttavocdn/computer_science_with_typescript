# Ciências da Computação com Typescript

## :page_with_curl: Resumo

Este projeto é basicamente um fork do The Arena Project Repository. O objetivo aqui é fornecer todos os desafios do
repositório original de forma simplificada para estudantes que não podem pagar pelo Curso Arena agora.

Se você deseja ter a experiência completa, pode acessar o site do projeto The Arena Project e se inscrever no curso.

Eu pretendo atualizar este repositório constantemente conforme o repositório original também for atualizado.

## :rocket: Como realizar os desafios

Todos os desafios estão localizados na pasta src listados por temas numerados na ordem recomendada.

Na pasta de cada tema, você encontrará um arquivo suggested_order.json. Este arquivo contém a ordem dos desafios no tema
e você pode seguir esta ordem. Todos os desafios possuem seu próprio arquivo challenge-en.md para descrever o que você
deve fazer. Siga as instruções rigorosamente.

Isso inclui qualquer método presente em built-in objetos como: Array.filter, Array.map, String.toLowerCase, etc.

Como regra geral, você deve adotar que é **EXPLICITAMENTE PROIBIDO** utilizar funções que não estejam listadas como
permitidas diretamente nas instruções de cada desafio.

Não podemos testar se o seu código está ou não utilizando apenas as funções permitidas, mas tenha em mente que se você
não seguir estas instruções, estará apenas enganando a si mesmo e atrasando seu processo de aprendizado.

## :rocket: Como testar seu código

Você pode testar seu código executando o seguinte comando:

```bash
#npm test "themeFolder" "challenge"

#example

npm test 01_fundamentals print-string #test the challenge print string on fundamentals
```

Se você quiser testar todos os desafios em uma pasta, basta seguir o seguinte comando:

```bash
#npm test "themeFolder"

#example

npm test 01_fundamentals
```
