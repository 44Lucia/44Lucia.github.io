/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║          📂  CARGADOR DE PROYECTOS                      ║
 * ║  Lee automáticamente todos los .json de proyectos/      ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * NO necesitas tocar este fichero.
 * Solo crea/edita los .json en la carpeta proyectos/
 * y aparecerán automáticamente en la web.
 */

export interface Proyecto {
  orden: number
  destacado: boolean
  titulo: string
  descripcion: { es: string; en: string }
  tecnologias: string[]
  media: string[]
  enlaces: { codigo: string; demo: string }
  etiquetas: {
    codigo: { es: string; en: string }
    demo: { es: string; en: string }
  }
}

// Lee todos los JSON de la carpeta (excepto _plantilla)
const archivos = import.meta.glob<Proyecto>('./proyectos/*.json', { eager: true, import: 'default' })

export function cargarProyectos(): Proyecto[] {
  return Object.entries(archivos)
    .filter(([path]) => !path.includes('_plantilla'))
    .map(([, proyecto]) => proyecto)
    .sort((a, b) => a.orden - b.orden)
}

export function proyectosDestacados(): Proyecto[] {
  return cargarProyectos().filter(p => p.destacado)
}

export function otrosProyectos(): Proyecto[] {
  return cargarProyectos().filter(p => !p.destacado)
}
