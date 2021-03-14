# chandlechanel
## Abstract
Get segment channel points in stocks.

Spanish Proyect. (Contenido en español disculpe)

![Imagen Ilustrativa](https://github.com/brakdag/chandlechanel/blob/main/images/image.png?raw=true)

## Install.

```sh
npm install
npm test
```

## Análisis del problema.

Poder encontrar rectas que sean resistencias dinámicas de forma automática es una buena herramienta,
para poder determinarlas, es mejor hacerla en un entorno reducido de datos, o una ventana de análisis de datos.

Cada uno de estos puntos donde tocan rectas los llamaremos pivot, se supone que se puede trazar una recta entre pivots (dos puntos). Esta recta tiene mayor valor, si no es cortada en ningún momento por velas anteriores ni posteriores en el gráfico.

Como el conjunto de rectas tienen diferentes importancias, hay que hacer una categorización de las rectas, según importancia.

Entonces tenemos rectas importantes que son una resistencia dinámica también importante en el mercado y rectas menos importantes que han sido resistencias dinámicas rotas anterior o posterior.

## TODO

- [x] Carga de datos.
- [x] Ordenar datos por tiempo.
- [ ] Obtener lista de máximos y mínimos.
- [ ] Convertir a escala logaritmica.
- [ ] Obtener lista de pivotes.
- [ ] Obtener proyección nueva rueda en base a pivote.
- [ ] Categorizar los segmetos.





