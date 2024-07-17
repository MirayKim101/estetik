<template>
  <div class="form__input">
    <label class="form__input-label" :for="name">{{ label }}</label>
    <p class="form__input-subtitle" v-if="subtitle">{{ subtitle }}</p>
    <input
      class="form__input-input"
      :required="required"
      :placeholder="placeholder"
      :name="name"
      :id="name"
      :type="type"
      :value="value"
      @input="updateValue"
    
    />
    <div
      v-for="(element, index) in error"
      :key="index"
      class="form__input-error"
    >
      <div class="form__input-error-message">
        {{ element.$message }}
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:value"]);
const props = defineProps({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
  required: {
    type: Boolean,
  },
  placeholder: {
    type: String,
  },
  id: {
    type: String,
  },
  type: {
    type: String,
  },
  label: {
    type: String,
  },
  error: {
    type: Array,
    required: false,
  },
  subtitle: {
    type: String,
  },
});
const updateValue = (e) => {
  emit("update:value", e.target.value);
};
</script>
