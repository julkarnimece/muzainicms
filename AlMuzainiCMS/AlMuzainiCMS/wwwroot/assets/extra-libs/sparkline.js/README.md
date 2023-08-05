# sparkline.js

> Lightweight sparkline based on SVG. 基于 SVG 的轻量级缩略可视化图形。


[![npm](https://img.shields.io/npm/v/sparkline.js.svg)](https://www.npmjs.com/package/sparkline.js)
[![npm](https://img.shields.io/npm/dm/sparkline.js.svg)](https://www.npmjs.com/package/sparkline.js)
[![gzip](http://img.badgesize.io/https://unpkg.com/sparkline.js/dist/sparkline.min.js?compression=gzip)](https://unpkg.com/sparkline.js/dist/sparkline.min.js)



## Install


> npm i --save sparkline.js

Then import it.

```js
import { Chart, registerTheme } from 'sparkline.js';
```

or import it by `script` in HTML, then get `SL` on window.

```html
<script src="https://unpkg.com/sparkline.js/dist/sparkline.min.js"></script>
```



## Usage


 - **Line**

```js
import { Chart } from 'sparkline.js';

const values = [5,3,2,-1,-3,-2,2,3,5,2];

const line = new Chart.Line({ width: 32, height: 16 });

line.value(values).render('.line');
```

 - **Bar**

```js
import { Chart } from 'sparkline.js';

const values = [5,3,2,-1,-3,-2,2,3,5,2];

new Chart.Bar({ width: 32, height: 16 }).value(values).render('.bar');
```

 - **Pie**

```js
import { Chart } from 'sparkline.js';

const values = [1,1,1,8,2,4];

new Chart.Pie({ width: 32, height: 32, theme: 'dark' }).value(values).render('.pie');
```



## Theme


The project contains 2 theme named `dark`, `light`. You can customize `theme` of chart by yourself with API `registerTheme`.


```js
import { registerTheme } from 'sparkline.js';

registerTheme('theme-name', themeObject);
```

Then you can use it in charts.



# License


MIT@[hustcc](https://github.com/hustcc).
