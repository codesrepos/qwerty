<template>
  <nav class="d-flex justify-content-between align-items-center mt-56">
    <Column class="nav-logo" lg="2" xl="1">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/859px-United_Parcel_Service_logo_2014.svg.png"
        class="img-fluid"
        alt=""
      />
    </Column>
    <Column offset-md="1" offset-lg="3" offset-xl="4" class="nav-items">
      <button
        v-if="showToggle"
        class="toggle"
        :class="{ active: openMenu }"
        @click="toggleMenu"
      ></button>
      <transition name="scale">
        <div v-show="showMobileMenu" class="nav-links">
          <Button
            v-for="item in navItems"
            :key="item.text"
            :to="item.link"
            variant="''"
            :text="item.text"
            class="link"
            :class="{ 'text-primary': item.special }"
          >
          </Button>
        </div>
      </transition>
    </Column>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          text: 'Kontakt',
          link: 'kontakt'
        },
        {
          text: 'Dodaj Anons',
          link: 'dodaj-anons',
          special: true
        },
        {
          text: 'Zaloguj się',
          link: 'signin'
        },
        {
          text: 'Zarejestruj się',
          link: 'signup'
        }
      ],
      openMenu: false
    }
  },
  computed: {
    showToggle() {
      return this.$mq === 'sm' || this.$mq === 'xs'
    },
    showMobileMenu() {
      if (this.$mq !== 'sm' && this.$mq !== 'xs') {
        return true
      } else if (!this.openMenu) {
        return false
      }
      return true
    }
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu
    }
  }
}
</script>

<style lang="scss">
nav {
  .nav-logo {
    height: 80px;
    max-width: 120px;
    z-index: 2;
  }
  .nav-items {
    flex: 1;
    @include media-breakpoint-down(sm) {
      display: flex;
    }
    .nav-links {
      display: flex;
      flex: 1;
      justify-content: space-between;
      @include media-breakpoint-down(sm) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background: $gray-1;
        padding: 180px 32px 0;
        z-index: 1;
        a {
          margin-bottom: 24px;
        }
      }
    }
    .toggle {
      width: 40px;
      height: 30px;
      border: none;
      $border: 3px solid $light;
      border-top: $border;
      background: transparent;
      position: relative;
      transition: 0.3s transform ease;
      cursor: pointer;
      margin-left: auto;
      z-index: 2;
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-top: $border;
      }
      &::before {
        transform: translateY(10px);
      }
      &::after {
        transform: translateY(25px);
        transition: 0.3s transform ease;
      }
      &.active {
        transform: rotate(45deg) translateY(5px);
        border: none;
        &::after {
          transform: rotate(-90deg) translateX(-10px);
        }
      }
    }
  }
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s;
  transform-origin: 100% 100%;
}
.scale-enter,
.scale-leave-to {
  transform: scale(0);
  transform-origin: 100% 0;
}
</style>
