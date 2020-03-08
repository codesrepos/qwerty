<template>
  <div class="wrapper">
    <div class="intro">
      <Container>
        <Row class="flex-column align-items-center text-center">
          <h1>
            Tak jak lubisz
          </h1>
          <p class="h4 mb-32">
            Tylko zweryfikowane anonse towarzyskie i erotyczne.
          </p>
          <Column md="8" lg="6" class="mb-48 mb-md-80">
            <Input
              v-model="location"
              :input="location"
              label="Wpisz lokalizację"
              full-width
              icon="search"
            />
          </Column>
          <Column lg="10">
            <p class="text-left mb-48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt elit mauris, a egestas arcu sollicitudin at. Cras
              fringilla fringilla elit, eu pulvinar odio. Vivamus posuere est
              dolor, et venenatis metus laoreet ac. Integer vestibulum, turpis
              nec interdum vehicula, orci tellus sodales arcu, sed vestibulum
              lorem nibh ut augue. Quisque felis quam, interdum ac elit nec,
              convallis gravida nunc. Pellentesque sit amet aliquam odio, vitae
              iaculis est. Ut dui nulla, convallis in lorem vitae, scelerisque
              sodales dui. Fusce laoreet felis cursus lacus volutpat varius.
              Proin facilisis lectus ut eros dictum ultrices. Aenean varius, ex
              vel tincidunt blandit, ligula nibh viverra mi, vel sollicitudin
              nulla magna id erat. Integer eu erat sit amet dolor semper
              volutpat. Donec semper eu ligula in rutrum. Nullam et volutpat
              sapien, eu blandit nulla. Nulla sed mauris quis
            </p>
          </Column>
          <Column
            sm="10"
            md="8"
            lg="7"
            xl="6"
            offset-sm="10"
            class="d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between"
          >
            <Button
              text="Rezygnuję"
              outline
              icon="exit"
              href="https://www.wp.pl/"
              target="_blank"
            />
            <Button text="Wchodzę" class="mb-24 mb-sm-0" :click="enter" />
          </Column>
        </Row>
      </Container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: ''
    }
  },
  layout: 'intro',
  methods: {
    enter() {
      this.$cookies.set('accepted', true, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })
      const url = this.$store.state.global.targetURL
      this.$router.push({ name: url })
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  .intro {
    width: 90%;
    max-width: 1170px;
    background: $gray-1;
    padding: 76px 40px;
    @include media-breakpoint-down(sm) {
      width: 100%;
      display: flex;
      min-height: 100vh;
      align-items: center;
      padding: 48px 16px;
    }
  }
}
</style>
