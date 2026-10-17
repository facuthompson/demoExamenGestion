# Simulacros de parcial · Gestión de Proyectos

Sitio estático (HTML + CSS + JS, sin build ni dependencias) con 3 simulacros de 20 preguntas de opción múltiple.
En cada intento y en cada reintento se mezclan el orden de las preguntas y el de las opciones.

## Subir a Vercel

**Opción A: desde la terminal**

```bash
npm i -g vercel
cd simulacros-parcial
vercel          # la primera vez te pregunta cuenta y nombre del proyecto
vercel --prod   # publica en producción
```

Cuando pregunte por el framework, elegí "Other" (o dejá lo que detecte). No hay comando de build ni carpeta de salida: se sirve la raíz.

**Opción B: desde GitHub**

1. Subí esta carpeta a un repo.
2. En vercel.com/new importá el repo.
3. Framework Preset: **Other**. Build Command y Output Directory vacíos. Deploy.

## Probar en local

```bash
python3 -m http.server 3000
# abrir http://localhost:3000
```

## Editar preguntas

Todo está en `questions.js`. Cada pregunta es:

```js
Q(R, 'Enunciado', 'Opción correcta', ['Incorrecta 1', 'Incorrecta 2', 'Incorrecta 3'], 'Explicación')
```

La correcta se escribe siempre primera; la web la mezcla sola. Los temas son `R` (RRHH), `C` (Comunicaciones), `L` (Liderazgo) y `T` (Testing).

## Qué guarda

Solo en el navegador (localStorage): mejor puntaje, último puntaje, cantidad de intentos y si activaste la corrección al instante. No se envía nada a ningún servidor.
