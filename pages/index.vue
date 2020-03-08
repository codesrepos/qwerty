<template>
  <main>
    <Section class="text-center">
      <h1>
        Tak jak lubisz
      </h1>
      <p class="h4 mb-32">
        Tylko zweryfikowane anonse towarzyskie i erotyczne.
      </p>
      <Row class="justify-content-center">
        <Column
          lg="9"
          xl="8"
          class="d-flex flex-column flex-md-row align-items-center pl-xl-64"
        >
          <InputWSelect
            :value="location"
            :options="options"
            :selected="selected"
            label="Wpisz lokalizację"
          />
          <Button text="Szukaj" class="ml-40 mt-32 mt-md-0" rounded />
        </Column>
      </Row>
    </Section>

    <div v-for="category in categories" :key="category" class="pb-0">
      <OfferBoxRow
        :offers="offers"
        :breakpoints="{ lg: 3 }"
        :title="`${category}:`"
      />
    </div>
    <Section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        elit mauris, a egestas arcu sollicitudin at. Cras fringilla fringilla
        elit, eu pulvinar odio. Vivamus posuere est dolor, et venenatis metus
        laoreet ac. Integer vestibulum, turpis nec interdum vehicula, orci
        tellus sodales arcu, sed vestibulum lorem nibh ut augue. Quisque felis
        quam, interdum ac elit nec, convallis gravida nunc. Pellentesque sit
        amet aliquam odio, vitae iaculis est. Ut dui nulla, convallis in lorem
        vitae, scelerisque sodales dui. Fusce laoreet felis cursus lacus
        volutpat varius. Proin facilisis lectus ut eros dictum ultrices. Aenean
        varius, ex vel tincidunt blandit, ligula nibh viverra mi, vel
        sollicitudin nulla magna id erat. Integer eu erat sit amet dolor semper
        volutpat. Donec semper eu ligula in rutrum. Nullam et volutpat sapien,
        eu blandit nulla. Nulla sed mauris quis urna lacinia fringilla.
        Phasellus pretium at justo sit amet pellentesque. Donec lobortis, neque
        vitae volutpat gravida, elit nisl tincidunt odio, ac vehicula mi sapien
        id purus.
      </p>
    </Section>
    <Section></Section>
  </main>
</template>

<script>
import InputWSelect from '@/components/InputWSelect'
import OfferBoxRow from '@/components/OfferBoxRow'
export default {
  components: { InputWSelect, OfferBoxRow },
  data() {
    return {
      location: '',
      options: ['kategoria: panie', 'kategoria: panowie'],
      selected: 'kategoria: panie',
      offers: [
        {
          name: 'Agnieszka18',
          location: 'Warszawa - Centrum',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/0/02/Cat_IMG_0799.jpg'
        },
        {
          name: 'Agnieszka17',
          location: 'Warszawa - Centrum',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/0/02/Cat_IMG_0799.jpg'
        },
        {
          name: 'Agnieszka16',
          location: 'Warszawa - Centrum',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/0/02/Cat_IMG_0799.jpg'
        },
        {
          name: 'Agnieszka15',
          location: 'Warszawa - Centrum',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/0/02/Cat_IMG_0799.jpg'
        }
      ],
      categories: ['Najnowsze', 'Losowe', 'Najpopularniejsze']
    }
  }
}
</script>
