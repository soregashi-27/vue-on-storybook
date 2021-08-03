<template>
  <div>
    <button
      type="button"
      :class="['button', {primary, secondary}, size]"
      @click="$emit('onClick')"
      :style="style"
      v-text="label"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: true
    },
    primary: {
      type :Boolean,
      default: false
    },
    secondary: {
      type:Boolean,
      default: false
    },
    size: {
      type:String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== 1
      }
    },
    backgroundColor: {
      type: String,
      required: false
    }
  },
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  }

}
</script>

<style></style>
