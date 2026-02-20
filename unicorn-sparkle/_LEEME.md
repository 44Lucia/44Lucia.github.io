# 🦄 MI PORTFOLIO — Guía rápida

## 📁 ¿Dónde toco cada cosa?

```
unicorn-sparkle/src/
│
├── data/                          ← 🎯 TODO LO QUE NECESITAS EDITAR
│   ├── mi-info.ts                 ← Tu nombre, título, bio, links, redes sociales
│   ├── experiencia.ts             ← Tu experiencia laboral (trabajos, prácticas)
│   ├── cargar-proyectos.ts        ← ⚙️ NO TOCAR (lee automáticamente los proyectos)
│   ├── constants.ts               ← URL de tu web (ya configurada)
│   └── proyectos/                 ← 🎮 UN FICHERO POR PROYECTO
│       ├── _plantilla.json        ← 📋 Copia esto para crear un proyecto nuevo
│       ├── grimoire-of-madness.json
│       ├── save-me-eddie.json
│       ├── too-many-machines.json
│       ├── waves-simulation.json
│       ├── solar-system.json
│       └── cats-vs-zombis.json
│
├── images/                        ← 📸 Tu foto de perfil
│   └── lucia-fornos.jpg           ← REEMPLAZA con tu foto real
│
├── locales/                       ← 🌐 Solo títulos de secciones (ES/EN)
│   ├── es/common.json
│   └── en/common.json
│
└── components/                    ← ⚙️ NO TOCAR (componentes visuales)
    ├── Carousel.astro             ← El carrusel de imágenes
    └── ...

public/
└── media/
    └── proyectos/                 ← 🖼️ IMÁGENES DE TUS PROYECTOS
        ├── grimoire-of-madness/
        │   ├── preview.jpg        ← Imagen principal
        │   └── gameplay.gif       ← GIF de gameplay (opcional)
        ├── save-me-eddie/
        │   └── preview.jpg
        └── ...
```

---

## 🎮 ¿Cómo añado un proyecto nuevo?

### 1. Copia la plantilla
Copia `src/data/proyectos/_plantilla.json` y renómbralo:
```
_plantilla.json  →  mi-nuevo-juego.json
```

### 2. Rellena los datos
```json
{
  "orden": 7,              ← Número de orden (para ordenar en la web)
  "destacado": true,       ← true = aparece en "Proyectos" / false = aparece en "Otros Proyectos"
  "titulo": "Mi Nuevo Juego",
  "descripcion": {
    "es": "Descripción en español...",
    "en": "English description..."
  },
  "tecnologias": ["Unity", "CSharp"],
  "media": [
    "/media/proyectos/mi-nuevo-juego/preview.jpg",
    "/media/proyectos/mi-nuevo-juego/gameplay.gif"
  ],
  "enlaces": {
    "codigo": "https://github.com/44Lucia/mi-repo",
    "demo": "https://44lucia.itch.io/mi-juego"
  },
  "etiquetas": {
    "codigo": { "es": "Código", "en": "Code" },
    "demo": { "es": "Jugar", "en": "Play" }
  }
}
```

### 3. Pon las imágenes
Crea la carpeta `public/media/proyectos/mi-nuevo-juego/` y pon ahí:
- `preview.jpg` — Imagen principal
- `gameplay.gif` — GIF opcional (se verá en el carrusel)

### 4. ¡Listo!
El proyecto aparece automáticamente. No necesitas tocar ningún otro fichero.

---

## ✏️ ¿Cómo cambio mis datos personales?

Edita **`src/data/mi-info.ts`**:
- `nombre` → Tu nombre
- `titulo` → Tu título profesional
- `ubicacion` → Tu ciudad
- `links` → GitHub, LinkedIn, email, itch.io
- `descripcionCorta` → Lo que aparece en el Hero
- `sobreMi` → Sección "Sobre mí"
- `contacto` → Sección de contacto

---

## 💼 ¿Cómo cambio mi experiencia laboral?

Edita **`src/data/experiencia.ts`** — cada objeto del array es un trabajo.

---

## 📸 ¿Cómo cambio mi foto?

Reemplaza `src/images/lucia-fornos.jpg` con tu foto (mismo nombre).

---

## 🖼️ Carrusel de imágenes

Cada proyecto puede tener múltiples imágenes/gifs en el array `media`:
```json
"media": [
  "/media/proyectos/mi-juego/preview.jpg",
  "/media/proyectos/mi-juego/gameplay.gif",
  "/media/proyectos/mi-juego/screenshot-2.jpg"
]
```
- Se muestran en un carrusel con scroll automático cada 5 segundos
- Tiene flechas ← → para pasar manualmente
- Al pasar el ratón por encima, se pausa
- Si solo hay 1 imagen, se muestra sin carrusel

---

## 🚀 Comandos

```bash
pnpm dev:us      # Arrancar en local
pnpm build:us    # Construir para producción
```
