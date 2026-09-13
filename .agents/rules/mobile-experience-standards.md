# Mobile Experience & Responsive Standards

Directrices obligatorias para garantizar una experiencia móvil premium, ultra fluida (60 FPS) y ergonómica en el portafolio de Víctor Alfonzo Reyes (@VicD4ddy).

---

## 1. Ergonomía Táctil y "Thumb Zone" (Zona del Pulgar)
- **Alcance Natural**: Más del 70% de los usuarios navegan con una sola mano usando el pulgar. Los botones de acción crítica (contacto por WhatsApp, abrir IA, cambiar pestañas) deben estar accesibles en la mitad inferior de la pantalla o a través de un dock flotante inferior.
- **Tamaño Mínimo de Objetivos Táctiles (Tap Targets)**:
  - Todo botón, enlace o elemento interactivo debe tener un área táctil mínima de **44x44px** (idealmente **48x48px** per WCAG 2.2).
  - Si el icono visual es más pequeño (ej. 16px o 20px), aplicar padding circundante (`p-2.5` o `p-3`) para que el usuario no falle al tocar.
- **Separación entre Objetivos**: Mínimo 8px de margen entre botones interactivos contiguos para evitar toques accidentales.

---

## 2. Prevención de Retardos y Comportamiento Nativo Táctil
- **Touch-Action**: Usar `touch-action: manipulation;` en elementos clickeables y botones para eliminar el retardo de 300ms que algunos navegadores móviles introducen para detectar doble tap.
- **Tap Highlight**: Desactivar el resaltado gris por defecto de WebKit con `-webkit-tap-highlight-color: transparent;` y sustituirlo por micro-escalas de feedback táctil (`active:scale-95`).
- **Prevención de Auto-Zoom en iOS**:
  - En iOS Safari, si un campo `<input>` o `<textarea>` tiene un `font-size` menor a 16px, el navegador hace zoom automático forzado rompiendo el layout.
  - **Regla estricta**: Todo input debe tener `text-base` (16px) en pantallas móviles, pudiendo reducirse a `sm:text-sm` en desktop.

---

## 3. Viewport & Safe Area Insets
- **Soporte de Notch e Isla Dinámica (iPhone & Android modernos)**:
  - `viewport` en `index.html` debe incluir `viewport-fit=cover`.
  - Elementos fijos inferiores (chat flotante, barra de navegación inferior, modales) deben respetar `env(safe-area-inset-bottom)`.
  - Elementos fijos superiores deben respetar `env(safe-area-inset-top)`.
- **Cero Desbordamiento Horizontal (Zero Horizontal Overflow)**:
  - `overflow-x: hidden` en `body` y contenedores principales.
  - Ningún elemento debe tener un ancho fijo en `px` mayor a `100vw - padding`.
  - Los modales flotantes deben usar `max-w-[calc(100vw-1.5rem)]` o `w-full` con márgenes adaptativos para evitar que se desborden de la pantalla en dispositivos pequeños (360px - 390px).

---

## 4. Modales Adaptables: Bottom Sheets en Móvil
- En desktop, los diálogos se centran en la pantalla (`sm:items-center`).
- En pantallas móviles (<640px), los modales de lectura intensiva (como los detalles del proyecto o chat IA) deben anclarse abajo (`items-end`) simulando un **Bottom Sheet** nativo con esquinas superiores redondeadas (`rounded-t-2xl sm:rounded-2xl`), facilitando el cierre y la interacción con una mano.

---

## 5. Rendimiento en Redes Móviles (Core Web Vitals)
- **INP (Interaction to Next Paint)**: < 200ms en respuestas a toques y cambios de pestañas.
- **Reducción de Carga GPU**:
  - Limitar el uso excesivo de `backdrop-blur` intensos anidados en móviles de gama media/baja.
  - Utilizar transformaciones aceleradas por hardware (`transform`, `opacity`, `translate3d`).
- **Soporte `prefers-reduced-motion`**: Si el usuario móvil tiene ahorro de batería o reducción de movimiento activado, las animaciones deben simplificarse automáticamente.
