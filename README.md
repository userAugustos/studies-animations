3 tipos de animações: Funcional, material, encantador

1 - @keyframes:

**Eles definem como a animação será, em cada estado da sua linha do tempo, nele se trabalha como linha do tempo mesmo, pessando ele para um elemento da DOM, ele vai aplicar, durante uma duração, os efeitos de acordo com a linha do tempo, ex: ao 0% (inicio) move para cima, ao 50% (metade) move para baixo, e ao 100% (finalizar) move para cima de novo.**

```css
.component {
	animation: move 2s; // animação e o tempo de duração
}

@keyframes move {
	0%{}

	50%{}

	100%{}
}

```

 Veja o KeyFrame a baixo, que faz um simples e belo efeito de bounceIn

 ```css 
	.box {
		width: 100px;
		height: 100px;
		background-color: blue;
		animation: bounceIn 1s;
	}

	@keyframes bounceIn {
		0% {
			transform: scale(0.1);
			opacity: 0;
		}
		60% {
			transform: scale(1.2);
			opacity: 1;
		}
		100% {
			transform: scale(1);
		}
	}
 ```

2 - animation:
 
 **podemos definir qual a animação que vai acontecer com aquele componente, e o tempo que aquela animação vai levar e também temos o interation-count, onde definimos quantas vezes vai acontecer, antes de parar.**

3 - easings: https://easings.net/
	**Easings é a maneira de alterar a execução da sua animação de acordo com o tempo, segunda as docs da mozila:**
- as funçãoes easing é uma função matematica que pode setar e descrever o velocidade que valores númericos mudam.
	Assim, com easing podemos definir como vai acontecer a transição entre dois pontos da animação, fazendo ela mais fluida e humana

```css
 animation-time-function /* key css para easing */

 .component {
	animation-time-function: ease-in;
	animation-time-function: cubic-bezier(x1, y1, x2, y2)
 }
```

cubic-bezier é muito importante para trabalhar com easings, então, vamos entender quais seus valores:

- essa propriedade se baseia na curva de Bézier, e nela, *x* é tempo, e *y* é propriedade.
	Então, vamos tratar P como *posição*, entenda que:

![exemplo de cubic bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier-example.png)

	Via de Regra, *P0* sempre será ponto de partida (0,0) e *P1* o ponto final (1,1).

Então, sendo esse gráfico para representar tempo e objeto, teremos o cubic-bezier dele:

```css
animation: cubic-bezier(x1 = 0.075, y1 = 0.75, x2 = 0.875, y2 = 0.36) 
```

Então, no segundo 0.075, a alteração deve ser 0.75, e no segundo 0.875 deve ser 0.36. Os valores de alteração sempre serão de 0,1, porém o tempo pode alterar, já que uma animação pode ter X segundos de duração.
	