# Projeto GenLang - Interface para Aprendizado de Línguas

Este projeto tem como objetivo desenvolver uma interface inspirada no **Anki**, um aplicativo amplamente utilizado para memorização por meio de flashcards, com foco no aprendizado de línguas. No entanto, em vez de apenas exibir as palavras ou frases nos cards, o aplicativo gerará automaticamente frases contextuais baseadas nas entradas do usuário. 

Essa funcionalidade surgiu a partir da minha própria experiência com o Anki: ao estudar, percebi que, muitas vezes, memorizava as frases apenas no contexto em que foram inicialmente apresentadas. Quando encontrava novas frases utilizando as mesmas palavras, não conseguia reconhecê-las ou aplicá-las corretamente. A geração de frases automáticas visa mitigar esse problema, proporcionando um aprendizado mais eficaz e contextualizado.

## Funcionalidades

### 1. Tela Inicial
- Exibe os baralhos do usuário.
- O usuário pode criar, editar ou excluir baralhos.
- Ao clicar no nome de um baralho, o usuário é redirecionado para a tela do baralho selecionado.

### 2. Tela do Baralho
Dentro de cada baralho, o usuário tem três opções principais:

- **Adicionar**: Ao clicar neste botão, uma nova tela será aberta com um campo de entrada onde o usuário pode digitar uma palavra ou frase. Essa entrada será armazenada como um novo card.
- **Cards**: Exibe todos os cards criados no baralho. O usuário pode editar ou excluir cards existentes.
- **Revisar**: Permite que o usuário revise os cards. O processo de revisão funciona da seguinte forma:
  - O usuário verá uma frase gerada por IA contendo a palavra ou frase adicionada ao card.
  - O usuário pode clicar no botão **"Mostrar Resposta"** para ver a tradução ou explicação da frase.
  - Após ver a resposta, o usuário pode clicar em **"Acerto"** ou **"Erro"** para determinar quando o card será revisado novamente:
    - **Acerto**: Se o usuário entendeu a frase, o card será revisado em um intervalo maior.
    - **Erro**: Se o usuário não entendeu, o card será revisado em um intervalo mais curto.

O tempo de revisão será ajustado com base nas respostas do usuário, seguindo o conceito de **revisão espaçada**, que ajudará a reforçar o aprendizado.

## Protótipo Inicial
Atualmente, estou desenvolvendo o **protótipo inicial** deste sistema, com a implementação básica das funcionalidades descritas acima. O objetivo do protótipo é validar a lógica de criação, exibição e revisão dos cards, além de testar a interação do usuário com a interface.

Este protótipo está em fase inicial, e as funcionalidades serão aprimoradas conforme o desenvolvimento avançar. Fique à vontade para contribuir ou sugerir melhorias!

## Dependências
- **CustomTkinter**: Para a interface gráfica.
- Outros pacotes necessários serão adicionados conforme o desenvolvimento do projeto.

Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**!
