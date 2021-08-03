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

}
</script>

<style></style>
