interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'pending lorem',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'in-progress lorem',
      status: 'in-progress',
      createdAt: Date.now()
    },
    {
      description: 'finished lorem',
      status: 'finished',
      createdAt: Date.now()
    },
    {
      description: 'in-progress lorem',
      status: 'in-progress',
      createdAt: Date.now()
    }
  ]
}
