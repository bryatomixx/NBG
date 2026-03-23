export type Testimonial = {
  name: string
  location: string
  quote: string
  lang: 'en' | 'es'
}

export const testimonials: Testimonial[] = [
  {
    name: 'Michael T.',
    location: 'Miami, FL',
    quote: 'NBG made the whole process simple. I got covered in two days and the rates were better than anything I found online.',
    lang: 'en',
  },
  {
    name: 'Sandra R.',
    location: 'Doral, FL',
    quote: 'The team at NBG truly cares. They walked me through every option and never made me feel pressured.',
    lang: 'en',
  },
  {
    name: 'James K.',
    location: 'Hialeah, FL',
    quote: 'I had been putting off life insurance for years. NBG made it easy and affordable. My family is finally protected.',
    lang: 'en',
  },
  {
    name: 'María G.',
    location: 'Doral, FL',
    quote: 'Gracias a NBG Latino ahora tengo un seguro de vida que se adapta a mi presupuesto. Me atendieron en español y con mucha paciencia.',
    lang: 'es',
  },
  {
    name: 'Carlos M.',
    location: 'Hialeah, FL',
    quote: 'Por fin encontré una agencia que entiende las necesidades de nuestra comunidad. NBG Latino es de confianza.',
    lang: 'es',
  },
  {
    name: 'Ana P.',
    location: 'Miami, FL',
    quote: 'El proceso fue muy fácil. En poco tiempo tuve mi cotización y mi familia quedó protegida. ¡Los recomiendo al 100%!',
    lang: 'es',
  },
]
