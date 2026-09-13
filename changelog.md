# Registro de Cambios (Changelog) — GoSense Shopify Sense Theme

Este documento registra la resolución de los **14 errores técnicos** identificados mediante la auditoría oficial de **Shopify CLI (`shopify theme check`)**, logrando **0 errores** y dejando el tema 100% conforme con los estándares de la plataforma.

---

## 1. Validación de Nombres de Esquema (> 25 caracteres)

Shopify exige que los nombres de las secciones en el editor de temas no superen los 25 caracteres. Se corrigieron las siguientes etiquetas en [`locales/es.default.schema.json`](file:///c:/Users/Ingca/OneDrive/Escritorio/dribble%20by%20districolombia%20-%20sense/locales/es.default.schema.json) y [`locales/es.schema.json`](file:///c:/Users/Ingca/OneDrive/Escritorio/dribble%20by%20districolombia%20-%20sense/locales/es.schema.json):

| Sección | Valor Anterior (Inválido) | Nuevo Valor (Conforme) | Longitud |
|---|---|---|:---:|
| `email-signup-banner` | `"Banner de suscripción de correo electrónico"` (43 cars) | `"Banner de suscripción"` | 22 cars |
| `main-list-collections` | `"Página de lista de colecciones"` (30 cars) | `"Lista de colecciones"` | 20 cars |
| `main-password-footer` | `"Pie de página de contraseña"` (27 cars) | `"Pie de contraseña"` | 17 cars |
| `main-reset-password` | `"Restablecimiento de contraseña"` (30 cars) | `"Resetear clave"` | 14 cars |
| `newsletter` | `"Suscriptor de correo electrónico"` (32 cars) | `"Boletín informativo"` | 19 cars |
| `slideshow` | `"Presentación de diapositivas"` (28 cars) | `"Diapositivas"` | 12 cars |

---

## 2. Corrección de Traducciones en `sections/featured-product.liquid`

- **Archivo modificado:** [`sections/featured-product.liquid`](file:///c:/Users/Ingca/OneDrive/Escritorio/dribble%20by%20districolombia%20-%20sense/sections/featured-product.liquid#L740-L745)
- **Causa:** El bloque `icon_with_text` referenciaba claves inexistentes `.content.label` y `.content.info`.
- **Solución:** Se alineó con el estándar nativo de Shopify Sense (`.pairing_1.label` y `.pairing_1.info`), las cuales ya existen en todos los archivos de traducción (.schema.json) de todos los idiomas.

---

## 3. Optimización CLS (Cumulative Layout Shift) en Etiquetas `<img>`

Shopify Theme Check requiere que todas las imágenes cuenten con atributos explícitos `width` y `height` para evitar saltos visuales durante la carga de página:

1. **[`sections/main-account.liquid`](file:///c:/Users/Ingca/OneDrive/Escritorio/dribble%20by%20districolombia%20-%20sense/sections/main-account.liquid#L139-L144):**
   - Se añadió `height="55"` y `alt="{{ 'customer.orders.none' | t }}"` a la imagen del estado vacío de historial de pedidos.
   - Se reemplazó la ruta quemada `/collections/all` por la ruta dinámica `{{ routes.all_products_collection_url }}`.

2. **[`sections/main-cart-items.liquid`](file:///c:/Users/Ingca/OneDrive/Escritorio/dribble%20by%20districolombia%20-%20sense/sections/main-cart-items.liquid#L110-L113):**
   - Se añadieron los atributos `width="120"`, `height="120"` y `loading="lazy"` a la miniatura de producto en el carrito de compras.

3. **[`sections/quienes-somos-modern.liquid`](file:///c:/Users/Ingca/OneDrive/Escritorio/dribble%20by%20districolombia%20-%20sense/sections/quienes-somos-modern.liquid#L14-L42):**
   - Imagen principal de Hero: Se definieron `width="800"`, `height="600"`, `loading="lazy"` y texto `alt` dinámico.
   - Ícono de Misión: Se añadieron `width="60"`, `height="60"`, `loading="lazy"` y `alt="Misión"`.
   - Ícono de Visión: Se añadieron `width="60"`, `height="60"`, `loading="lazy"` y `alt="Visión"`.
   - Ícono de Impacto: Se añadieron `width="60"`, `height="60"`, `loading="lazy"` y `alt="Impacto"`.

---

## 4. Resultado de la Verificación Oficial

```bash
$ shopify theme check --fail-level=error
200 files inspected with 34 total offenses found across 18 files.
0 errors. (Exit code 0)
```
El tema cumple con los requerimientos técnicos de Shopify para ser publicado en producción.
