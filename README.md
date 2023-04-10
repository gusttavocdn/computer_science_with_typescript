# Ciências da Computação com Typescript

- [Documentação em inglês](https://github.com/gusttavocdn/computer_science_with_typescript/blob/main/README.md)

## :page_with_curl: Resumo

Este projeto é basicamente um fork do curso [The Arena Project](https://www.thearenaproject.co/).
O objetivo aqui é
fornecer todos os desafios do
repositorio original do curso, já que é aberto a todos, de forma simplificada para estudantes que não podem pagar pelo
curso agora.

Todos os desafios deste repositório têm o objetivo de fazer você mergulhar profundamente em vários temas de ciência da
computação que são comuns a qualquer linguagem.
Se você ficar preso em algum desafio, lembre-se de que o Google é seu
melhor amigo.
Você também pode pedir ajuda a amigos e entrar em contato comigo no [LinkedIn](https://www.linkedin.com/in/gustavocdn/)
ou no Discord com a tag
`GusttavoCDN#3784`.

Tente não procurar pelas repostas completas para os desafios, mas sim entender os conceitos em cada um.

Como o criador original, [Kevin Piacentini](https://github.com/kevinpiac), é um ex-aluno da **42**, este projeto tem uma
grande semelhança com o método de
ensino da **42**.

Como estudante da **42**, também é meu dever convidá-lo a conhecer essa escola maravilhosa.
Provavelmente é o melhor programa de Engenharia
de Software que já vi em toda minha vida.

- [**42**SP](https://www.**42**sp.org.br/)
- [**42** Youtube Channel](https://www.youtube.com/c/ForadaNormaPodcast)
- [Ecole **42**](https://**42**.fr/en/homepage/)

## :rocket: Como realizar os desafios

Todos os desafios estão localizados na pasta src listados por temas numerados na ordem recomendada.

Na pasta de cada tema, você encontrará um arquivo suggested_order.json. Este arquivo contém a ordem dos desafios no tema
e você pode seguir esta ordem. Todos os desafios possuem seu próprio arquivo challenge-en.md para descrever o que você
deve fazer. Siga as instruções rigorosamente.

Isso inclui qualquer método presente em built-in objetos como: Array.filter, Array.map, String.toLowerCase, etc.

Como regra geral, você deve adotar que é **EXPLICITAMENTE PROIBIDO** utilizar funções que não estejam listadas como
permitidas diretamente nas instruções de cada desafio.

As regras do ESLINT garantirão que métodos não permitidos não sejam usados. Tenha em mente que, se você tentar ignorar o
eslint, os testes locais para seus desafios podem passar, mas você não poderá fazer o commit do seu trabalho até que
todas as regras sejam corrigidas.

Minha abordagem sugerida para organizar seu trabalho e também fornecer maneiras de compará-lo com o trabalho de outras
pessoas que possam estar realizando esses desafios é a seguinte:

1. ###### **_Clone this repository_**
   ```bash
      git clone git@github.com:gusttavocdn/computer_science_with_typescript.git
      cd computer_science_with_typescript
      npm install
   ```

2. ###### **_Make a branch for your work_**

   ```bash
      git checkout -b "your-branch-name"
   ```

3. ###### **_Commit your work as a pull request_**
   ```bash
      git add .
      git commit -m "your-commit-message"
      # This syntax is only necessary on the first push. After that you can use "git push"
      git push -u origin "your-branch-name" 
   ```

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
