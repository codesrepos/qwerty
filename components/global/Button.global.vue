<template>
  <component
    :is="type"
    :to="to ? to : false"
    :href="href ? href : false"
    :aria-label="text"
    :class="className"
    @click="onClick"
  >
    <span v-if="icon" :class="`icon-${icon}`"></span>
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    click: {
      type: Function,
      required: false
    },
    link: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    className() {
      let options = ['variant', 'outline', 'icon', 'rounded', 'link']
      if (this.link) {
        options = options.filter((option) => option !== 'variant')
      }
      return options
        .filter((option) => this[option])
        .reduce((total, current) => {
          let className = this[current]
          if (current === 'outline') {
            className = 'outline'
          } else if (current === 'icon') {
            className = 'icon'
          } else if (current === 'rounded') {
            className = 'rounded'
          } else if (current === 'link') {
            className = 'link'
          }
          return `${total} ${className}`
        }, '')
    },
    type() {
      if (this.to) {
        return 'nuxt-link'
      }
      if (this.href) {
        return 'a'
      }
      return 'button'
    }
  },
  methods: {
    onClick() {
      if (this.click) {
        this.click()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.link {
  color: $light;
  font-size: inherit;
  position: relative;
  border: none;
  background: transparent;
  &::before {
    content: '';
    transform: scaleX(0);
  }
  @include hover-active-focus() {
    cursor: pointer;
    &::before {
      width: 95%;
      position: absolute;
      height: 1px;
      left: 0;
      bottom: -2px;
      background: $light;
      transform: scaleX(1);
      transition: transform 0.2s ease-out;
    }
  }
}
.primary {
  background: $primary;
  border: none;
  border-radius: 18px;
  color: $dark;
  padding: 18px 48px;
  font-size: 18px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &.outline {
    background: transparent;
    border: 1px solid $primary;
    color: $primary;
  }
  &.icon {
    padding: 18px 34px;
    @include media-breakpoint-down(sm) {
      padding: 12px 28px;
    }
    span {
      font-size: 1.25em;
      margin-right: 1.3em;
    }
  }
  @include media-breakpoint-down(sm) {
    padding: 12px 40px;
    font-size: 16px;
  }
}
.rounded {
  border-radius: 29px;
  font-size: 16px;
}
</style>
