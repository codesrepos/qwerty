export const state = () => ({
  categories: [
    'Panie',
    'Trans',
    'Panowie',
    'Lesbijki',
    'Kluby',
    'Bi',
    'Striptiz',
    'Geje'
  ],
  activeCategory: 'Panie',
  locations: [
    {
      name: 'Województwo',
      options: ['Mazowieckie', 'Lubuskie', 'Lubelskie', 'Śląskie'],
      selected: 'Mazowieckie'
    },
    {
      name: 'Miasto',
      options: ['Warszawa', 'Kraków', 'Poznań', 'Wrocław'],
      selected: 'Warszawa'
    },
    {
      name: 'Dzielnica',
      options: ['Centrum', 'Dzielnica1', 'Dzielnica2', 'Dzielnica3'],
      selected: 'Centrum'
    }
  ]
})

export const getters = {
  categories: (state) => ({
    active: state.activeCategory,
    list: state.categories
  })
}

export const mutations = {
  updateSelectedLocation(state, value) {
    state.locations = [...state.locations].map((location) => {
      if (location.options.includes(value)) {
        location.selected = value
      }
      return location
    })
  }
}
