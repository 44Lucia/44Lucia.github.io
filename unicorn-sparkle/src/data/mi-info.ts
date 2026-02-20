/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║              🦄  TU INFORMACIÓN PERSONAL                ║
 * ║  Edita este fichero para cambiar tus datos personales   ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Aquí defines: tu nombre, título, ubicación, links, bio, etc.
 * Todo lo que aparece en el Hero, About y Contact viene de aquí.
 */

export const miInfo = {
  nombre: 'Lucia Fornos',
  nombreCompleto: 'Lucia Fornos Balaguer',
  titulo: {
    es: 'Programadora de Videojuegos',
    en: 'Videogame Programmer',
  },
  ubicacion: {
    es: 'Barcelona, España',
    en: 'Barcelona, Spain',
  },
  disponible: true, // Muestra el badge "Disponible para trabajar"

  // ── Links y redes sociales ──
  links: {
    github: 'https://github.com/44Lucia',
    linkedin: 'https://www.linkedin.com/in/lucia-fornos-99633823b/',
    email: 'lucia.fornos@email.com', // ⚠️ Cambia esto por tu email real
    itchio: 'https://44lucia.itch.io/',
    web: 'https://44lucia.github.io',
  },

  // ── Descripción corta (aparece en el Hero) ──
  descripcionCorta: {
    es: 'Especialista en C#, Unity, Unreal Engine, C++ y desarrollo de experiencias interactivas.',
    en: 'Specialist in C#, Unity, Unreal Engine, C++ and interactive experience development.',
  },

  // ── Sobre mí (sección About) ──
  sobreMi: {
    subtitulo: {
      es: 'Programadora de videojuegos apasionada por crear experiencias interactivas únicas',
      en: 'Videogame programmer passionate about creating unique interactive experiences',
    },
    descripcion: {
      es: 'Soy una Programadora de Videojuegos de Barcelona, España, con experiencia en el desarrollo de juegos usando Unity, Unreal Engine, C# y C++. Me especializo en programación de gameplay, simulaciones físicas, inteligencia artificial y desarrollo de shaders. He participado en múltiples Game Jams y tengo varios juegos publicados en itch.io. Mi formación académica combina el diseño y desarrollo de videojuegos con sólidos conocimientos en matemáticas aplicadas, física de simulaciones y programación gráfica.',
      en: "I'm a Videogame Programmer from Barcelona, Spain, with experience in game development using Unity, Unreal Engine, C# and C++. I specialize in gameplay programming, physics simulations, artificial intelligence and shader development. I have participated in multiple Game Jams and have several games published on itch.io. My academic background combines videogame design and development with solid knowledge in applied mathematics, simulation physics and graphics programming.",
    },
  },

  // ── Contacto (sección Contact) ──
  contacto: {
    titulo: {
      es: '¿Tienes un proyecto en mente?',
      en: 'Have a project in mind?',
    },
    subtitulo: {
      es: 'Puedo unirme a tu equipo o colaborar en tu próximo videojuego',
      en: 'I can join your team or collaborate on your next videogame',
    },
  },
}
