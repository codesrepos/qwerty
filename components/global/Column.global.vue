<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script>
import camelCase from 'lodash.camelCase'
const propsArr = [
  'cols',
  'sm',
  'md',
  'lg',
  'xl',
  'offset',
  'offset-sm',
  'offset-md',
  'offset-lg',
  'offset-xl'
]
const propsObj = propsArr.reduce((total, current) => {
  total[current] = {
    type: [Number, String],
    default: ''
  }
  return total
}, {})
export default {
  props: {
    ...propsObj
  },
  computed: {
    className() {
      return propsArr
        .filter((prop) => {
          if (prop.includes('offset')) {
            return this[camelCase(prop)]
          }
          return this[prop]
        })
        .reduce((total, current) => {
          let className = ` col-${current}-${this[current]}`
          if (current === 'cols') {
            className = ` col-${this[current]}`
          }
          if (current.includes('offset')) {
            className = ` ${current}-${this[camelCase(current)]}`
          }
          return total + className
        }, '')
        .trim()
    }
  }
}
</script>
<style lang="scss" scoped>
[class*='col-'] {
  position: relative;
  padding: 0 15px;
  width: 100%;
}
@mixin createColumns($breakpoint: null) {
  @for $i from 1 through 12 {
    $width: 100% / 12 * $i;
    $column: col-#{$breakpoint}-#{$i};
    @if ($breakpoint == null) {
      $column: col-#{$i};
    }

    .#{$column} {
      max-width: $width;
      flex: 0 0 $width;
    }
  }
}

@mixin createOffsets($breakpoint: null) {
  @for $i from 0 through 6 {
    $width: 100% / 12 * $i;
    $offset: offset-#{$breakpoint}-#{$i};
    @if ($breakpoint == null) {
      $offset: offset-#{$i};
    }

    .#{$offset} {
      margin-left: $width !important;
    }
  }
}

@include createColumns();
@include createOffsets();
@each $breakpoint, $value in $breakpoints {
  @if ($breakpoint != 'xs') {
    @include media-breakpoint-up($breakpoint) {
      @include createColumns($breakpoint);
      @include createOffsets($breakpoint);
      .col-#{$breakpoint} {
        max-width: none;
        flex: 1;
      }
    }
  }
}
</style>
