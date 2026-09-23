# HABITAR UNIVERSIDAD — Landing page

Sitio de **una sola página** (una pantalla larga con 7 bloques) para la comunidad *Habitar Universidad*.
Está hecho a mano con **HTML, CSS y JavaScript propios**: no hay frameworks, ni npm, ni paso de compilación.
Se puede publicar tal cual en cualquier hosting estático (Netlify, Vercel, GitHub Pages, Hostinger,
cPanel…): se sube la carpeta completa y funciona.

- **Sin dependencias locales**: solo tres archivos de código (`index.html`, `styles.css`, `script.js`).
- **Los únicos recursos externos** son las tipografías de Google Fonts (League Spartan, Cormorant,
  Montserrat), cargadas con `preconnect` para que no frenen el primer pintado.
- **Todo el contenido está en `index.html`**, dividido con comentarios por bloque para poder editarlo
  sin perderse. Los estilos usan variables CSS, así que la identidad visual se cambia en un solo lugar.
- **Pensado para durar**: funciona igual si el JavaScript no se ejecuta, y respeta la preferencia de
  “reducir movimiento” del sistema operativo.

---

## 1. Estructura del proyecto

```
HabitarUniversidadLP/
├─ index.html          ← todo el contenido y los enlaces (13,3 KB)
├─ styles.css          ← todos los estilos, con variables en :root (17,9 KB)
├─ script.js           ← animaciones de aparición al hacer scroll (1,5 KB)
├─ README.md           ← este archivo
└─ assets/
   └─ img/
      ├─ logo1.png      512×512     23,5 KB   ← logo de barra superior, pie y favicon
      ├─ logolargo.png  1000×436    34,7 KB   ← logo grande de la portada
      ├─ fotohero.jpg   1170×468   106,8 KB   ← foto de la portada (panorámica)
      ├─ foto1.jpg       670×447   133,9 KB   ← bloque 2
      ├─ foto2.jpg       670×447   107,8 KB   ← bloque 3
      ├─ foto3.jpg      1600×900   158,4 KB   ← bloque 4
      ├─ foto4.jpg      1170×468   224,2 KB   ← bloque 5 (panorámica)
      └─ _originales/               1193 KB     ← respaldo de las imágenes previas al afinado
```

> **Nota:** `foto.jpg` (271,7 KB), `foto3.png` (5.044 KB) y `logo.png` (121,5 KB) siguen en la
> carpeta pero **ya no los usa ninguna página**. Ocupan 5,4 MB. Ver el punto 7.

## 2. Cómo verlo

**Opción rápida:** doble clic en `index.html`. Se abre en el navegador y funciona todo.

**Opción recomendada** (para probar en el celular de verdad, con animaciones y rutas reales):

```powershell
# dentro de la carpeta del proyecto
python -m http.server 8791
```

y luego entrar a `http://localhost:8791/`. Para verlo desde el teléfono, con el celular en la misma
red WiFi, entrar a `http://IP-DE-TU-PC:8791/` (la IP se ve con `ipconfig`).

No hay nada que compilar ni instalar. Si no tenés Python, cualquier servidor estático sirve
(la extensión *Live Server* de VS Code, `npx serve`, etc.).

## 3. Dónde tocar cada cosa

| Quiero cambiar… | Voy a… |
| --- | --- |
| Textos, títulos, precios, fechas | `index.html`, dentro del bloque correspondiente (`<!-- ==== BLOQUE n · … ==== -->`) |
| Los enlaces de WhatsApp | `index.html`, las 5 líneas con `https://wa.link/…` (ver punto 4) |
| Colores, tipografías, sombras, radios | `styles.css`, sección **1. Variables de diseño** (`:root`) |
| El tamaño del logo de la portada | `styles.css` → `.portada-logo` → `clamp(260px, 58vw, 460px)` (mínimo, fluido, máximo) |
| Los 6 ejes | `index.html`, bloque 4 |
| Que algo aparezca con animación al bajar | Agregarle la clase `reveal` al elemento (`script.js` se encarga) |
| El aviso del pie, el año del copyright y los enlaces del pie | `index.html`, bloque 7 (cierre y pie) |

**Bloques de la página (en orden):** barra superior · 1 Portada · 2 “Quizás te está pasando” ·
3 “¿Qué es Habitar Universidad?” · 4 Los 6 ejes · 5 “¿Qué vas a encontrar?” · 6 La invitación ·
7 Cierre y pie.

## 4. Los enlaces de WhatsApp

Los **5 botones** de la página (barra superior, portada, invitación, pie y botón flotante) apuntan
al **enlace corto**:

```
https://wa.link/2300v4
```

**Por qué un enlace corto y no el número:** así el número de teléfono **no queda escrito en el HTML**.
Cualquiera que mire el código fuente ve `wa.link/2300v4` y nada más. El número sigue siendo el mismo
de siempre y está guardado del lado de WhatsApp.

**El mensaje ya viene precargado.** Al abrir el enlace, WhatsApp arranca la conversación con el texto
*“Hola, quiero más información sobre Habitar Universidad.”*, así que quien escribe no tiene que pensar
qué decir y vos sabés de dónde viene el contacto.

**Cómo cambiarlo:** reemplazar la dirección en las 5 líneas (las encontrás buscando `wa.link` en
`index.html`). Si algún día preferís una **invitación a grupo** en vez de un chat individual, usá el
enlace de la forma `https://chat.whatsapp.com/…` en esas mismas 5 líneas.

> **Importante:** el número real **no se documenta ni acá ni en el HTML a propósito**: la única copia
> vive en el panel de `wa.link` y en la ficha del propio número de WhatsApp. Si necesitás recuperarlo,
> mirá la configuración del enlace corto en tu cuenta.

## 5. Optimización de las imágenes (lo que se afinó)

**Objetivo:** que la página abra rápido incluso con datos móviles, sin que se note la diferencia a
simple vista. **Resultado: se bajó el peso de las imágenes a la mitad, sin pérdida visible.**

### Antes y después

| Archivo | Antes | Después | Ahorro | Tamaño |
| --- | --- | --- | --- | --- |
| `fotohero.jpg` | 135,4 KB | **106,8 KB** | −21 % | 1170×468 |
| `foto1.jpg` | 261,7 KB | **133,9 KB** | −49 % | 670×447 |
| `foto2.jpg` | 241,5 KB | **107,8 KB** | −55 % | 670×447 |
| `foto4.jpg` | 388,3 KB | **224,2 KB** | −42 % | 1170×468 |
| `logo1.png` | 110,5 KB | **23,5 KB** | −79 % | 1213×1213 → 512×512 |
| `logolargo.png` | 55,6 KB | **34,7 KB** | −37 % | 1184×516 → 1000×436 |
| **Total** | **1193 KB** | **631 KB** | **−47 %** | |

Peso total de las imágenes que la página realmente descarga: **de ~1351 KB a 789 KB (−42 %)**.

### Cómo se logró sin que se note

**En los JPEG** (fotos)
1. Se mantuvieron las **dimensiones** que la página ya usaba: el navegador no reescala nada y las fotos
   se ven igual de nítidas en celular, tablet y pantalla grande.
2. Se conservó el **color en 4:4:4** (sin submuestreo de croma) que ya tenían los originales: eso evita
   que los bordes de colores fuertes muestren halos.
3. La calidad se eligió **midiendo el error** contra el original (RMSE ≤ 3 sobre 255, imperceptible),
   no a ojo: se probaron varios niveles y se quedó con el más liviano que no se nota.
4. **Revisión visual** de cada foto al 100 % (caras, verdes, texturas): sin bloques, sin bandas de
   color, sin bordes fantasma.

**En los PNG** (logos)
1. Son **arte plano**, y ahí está la trampa: si se reescala un PNG de líneas y colores planos, la
   interpolación crea miles de tonos intermedios y el archivo **termina pesando más** que el original
   (pasó en el primer intento: el logo chico subió de 111 KB a 119 KB y el largo de 56 KB a 144 KB).
2. La solución fue exportarlos como **PNG con paleta de 256 colores** y, además, reducirlos al tamaño
   que realmente se usa en pantalla (512 px para `logo1.png`, 1000 px para `logolargo.png`). Con eso el
   logo chico bajó a 23,5 KB.
3. Se compararon a ojo contra el original antes de reemplazarlos: **idénticos** (los logos son formas
   simples y con relleno de color macizo).

### Reglas para la próxima imagen que agregues

1. **Exportá el JPG al tamaño en que se muestra ×2** (para pantallas retina) y no más: una foto de 4000 px
   que se ve a 600 px solo hace pesada la página. Las panorámicas van a **1600 px** de ancho, las
   verticales/cuadradas a **~1000 px**.
2. **JPEG de calidad 78–82 con color 4:4:4** es el punto dulce para fotos con gente y vegetación.
3. **PNG solo si necesitás transparencia**; si es un logo de color plano, paleta de 256 colores.
4. **Compará siempre el peso final**: si el archivo nuevo pesa *más* que el que ya estaba, algo salió mal
   (típico con PNG reescalados). Descartalo.
5. **Guardá el original** en `assets/img/_originales/` antes de reemplazar, así siempre hay vuelta atrás.
6. Actualizá el `width` y `height` del `<img>` en `index.html` si cambiaste la proporción: eso evita que
   el texto salte mientras carga la imagen.

## 6. Accesibilidad y detalles ya resueltos

- `lang="es"`, `title` y `meta description` en español; `theme-color` acorde a la paleta crema.
- Enlace **“Saltar al contenido”** para navegación con teclado.
- **Todas las imágenes tienen `alt`**; los adornos decorativos van con `aria-hidden="true"`.
- Secciones con `aria-labelledby` y botones flotantes con `aria-label` descriptivo.
- Estilos de **foco visibles** para quien navega con teclado.
- `@media (prefers-reduced-motion: reduce)` en `styles.css`: si el sistema pide reducir movimiento, se
  apagan las animaciones.
- **Mobile first** con cortes en 380, 560, 640, 660, 760, 1000 y 1080 px.
- **El contenido no depende del JavaScript**: si el script no corre, todo se ve igual (solo se pierden
  las apariciones suaves).
- `scroll-behavior: smooth` con `scroll-padding-top`, para que la barra fija no tape los títulos al
  saltar a una sección.

## 7. Pendientes y mantenimiento

**a) Archivos que ya no se usan (5,4 MB que conviene sacar del hosting)**

| Archivo | Peso | Qué es |
| --- | --- | --- |
| `assets/img/foto3.png` | 5.044 KB | Versión PNG pesada de la foto del bloque 4 (la página usa `foto3.jpg`, 158 KB) |
| `assets/img/foto.jpg` | 271,7 KB | Foto vieja, reemplazada por `foto1.jpg` |
| `assets/img/logo.png` | 121,5 KB | Logo original, reemplazado por las versiones optimizadas |

No rompen nada si se quedan, pero se suben al hosting y nadie las ve. Se pueden borrar o mover a una
carpeta aparte fuera de la publicación.

**b) Respaldo de las imágenes anteriores**

`assets/img/_originales/` (1193 KB) tiene las 6 imágenes tal como estaban **antes** del afinado.

```powershell
# para volver atrás una sola imagen
Copy-Item assets\img\_originales\foto4.jpg assets\img\foto4.jpg -Force
```

Cuando estés conforme con el resultado, la carpeta se puede borrar (o mover fuera del proyecto) sin
que la página se entere: no está referenciada en ningún lado.

**c) Control de versiones (opcional, pero recomendado)**

Hoy el proyecto **no tiene repositorio git**: si algo se rompe, no hay historial. Alcanza con:

```powershell
git init
git add .
git commit -m "Landing de Habitar Universidad"
```

Si lo subís a GitHub/GitLab, agregate un `.gitignore` con `assets/img/_originales/` para no arrastrar
el respaldo.

**d) Al publicar**

- Activá **compresión gzip/brotli** y **caché de assets** en el hosting (es un interruptor en casi
  todos los paneles). Con eso el HTML y el CSS bajan de 31 KB a un puñado de KB.
- Probá el enlace de WhatsApp desde el celular real: en la PC a veces pide iniciar sesión.

## 8. Registro de esta sesión de trabajo

1. **Enlaces de WhatsApp:** se reemplazó el número de teléfono escrito en el HTML por el enlace corto
   `https://wa.link/2300v4` en los 5 botones. Se verificó en línea que el enlace responde redirigiendo
   a WhatsApp con el número correcto y el mensaje precargado. Se dejó una nota comentada al inicio del
   `index.html` explicando el cambio para quien edite más adelante.
2. **Afinado de imágenes:** se redujo el peso a la mitad con las tablas del punto 5, reescribiendo las
   fotos y los logos y **conservando las dimensiones** de las fotos.
3. **Coherencia de maquetado:** se actualizó el `width`/`height` del logo de portada a `1000×436`, el
   tamaño real del archivo, para que no haya saltos de maquetado al cargar.
4. **Limpieza:** los scripts auxiliares que se usaron para procesar las imágenes y la carpeta de pruebas
   `assets/img/_pruebas/` fueron eliminados. En la raíz quedan solo `index.html`, `styles.css`,
   `script.js` y este README.
5. **Formato de archivos:** saltos de línea normalizados a **CRLF** y UTF-8 **sin BOM** (los emojis 💚
   se muestran correctamente).

## 9. Validación realizada

- Los **10 recursos** que pide la página (`/`, `styles.css`, `script.js` y las 7 imágenes) responden
  **HTTP 200** desde un servidor local.
- `index.html`: 6 bloques `<section>` abiertos y cerrados, 8 `<img>`, y **5 enlaces** a `wa.link`
  (cero apariciones del número de teléfono).
- `styles.css`: 144 llaves `{` y 144 `}`, sin desbalances.
- Sin procesos de servidor ni de procesamiento de imágenes quedando en segundo plano.

---

*Última actualización de este README: septiembre de 2026.*
