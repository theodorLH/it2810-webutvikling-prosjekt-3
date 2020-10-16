//her skal vi bare eksportere typen, movies. skal bare deinfere typene her tror jeg.
// Nå kopierte jeg bare over det jeg hadde fra type.d.tsx

interface MovieInterface {
    id: number
    title: string
    body: string
  }
  
  type MovieState = {
    articles: MovieInterface[]
  }
  
  type MovieAction = {
    type: string
    article: MovieInterface
  }
  
  type DispatchType = (args: MovieAction) => MovieAction