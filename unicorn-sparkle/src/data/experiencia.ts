/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║            💼  TU EXPERIENCIA LABORAL                   ║
 * ║  Edita este fichero para cambiar tu experiencia         ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Cada entrada en el array es un trabajo/experiencia.
 * Aparecen como pestañas en la sección "Experiencia laboral".
 */

export interface Trabajo {
  empresa: { es: string; en: string }
  puesto: { es: string; en: string }
  fechaInicio: string      // Ej: "Ene 2023"
  fechaFin?: string        // Si no pones fechaFin, aparece como "Actual"
  descripcion: { es: string; en: string }
  tareas: { es: string[]; en: string[] }
}

export const experiencia: Trabajo[] = [
  {
    empresa: { es: 'Proyectos Académicos', en: 'Academic Projects' },
    puesto: {
      es: 'Programadora de Videojuegos',
      en: 'Videogame Programmer',
    },
    fechaInicio: '2022',
    // Sin fechaFin → aparece como "Actual"
    descripcion: {
      es: 'Desarrollo de múltiples proyectos académicos y personales en el ámbito de los videojuegos. He trabajado con motores como Unity y Unreal Engine, implementando mecánicas de gameplay, simulaciones físicas (cinemática directa e inversa, ondas sinusoidales y de Gerstner), sistemas de inteligencia artificial para toma de decisiones, shaders personalizados y proyectos de audio interactivo.',
      en: 'Development of multiple academic and personal projects in the videogame field. I have worked with engines like Unity and Unreal Engine, implementing gameplay mechanics, physics simulations (forward and inverse kinematics, sinusoidal and Gerstner waves), AI decision-making systems, custom shaders and interactive audio projects.',
    },
    tareas: {
      es: ['Programación de gameplay', 'Simulaciones físicas', 'IA para videojuegos', 'Shaders y gráficos'],
      en: ['Gameplay programming', 'Physics simulations', 'Game AI', 'Shaders & graphics'],
    },
  },
  {
    empresa: { es: 'Desarrollo Indie', en: 'Indie Development' },
    puesto: {
      es: 'Desarrolladora de Juegos Indie',
      en: 'Indie Game Developer',
    },
    fechaInicio: '2023',
    fechaFin: undefined, // Actual
    descripcion: {
      es: 'Participación en múltiples Game Jams y desarrollo de juegos indie publicados en itch.io. Creación de juegos completos incluyendo diseño de mecánicas, programación, integración de audio y publicación. Juegos publicados incluyen Grimoire of Madness (Bullet Hell), Save me Eddie (Puzzle), Crab Pong, Too Many Machines (Platformer) y Harvest Night.',
      en: 'Participation in multiple Game Jams and development of indie games published on itch.io. Creation of complete games including mechanics design, programming, audio integration and publishing. Published games include Grimoire of Madness (Bullet Hell), Save me Eddie (Puzzle), Crab Pong, Too Many Machines (Platformer) and Harvest Night.',
    },
    tareas: {
      es: ['Game Jams', 'Desarrollo completo de juegos', 'Publicación en itch.io'],
      en: ['Game Jams', 'Full game development', 'Publishing on itch.io'],
    },
  },
]
