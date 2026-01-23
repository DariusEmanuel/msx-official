<script setup lang="ts">
import { ref } from "vue";
import HeadlineForSection from "@/components/base/HeadlineForSection.vue";

const submitted = ref(false);

function onSubmit() {
  // TODO: wire this to a real endpoint (email / CRM / serverless) before launch
  submitted.value = true;
}
</script>

<template>
  <section class="booking dark">
    <HeadlineForSection
      title="Booking"
      before-text="Matei Sax"
      font-size="82px"
      line-height="96px"
      font-size-span="16px"
      line-height-span="20px"
      as="h2"
    >
      Send a booking inquiry and we’ll get back to you as soon as possible.
    </HeadlineForSection>

    <div class="booking__form">
      <Vueform size="md" :display-errors="false" @submit="onSubmit">
        <TextElement
          name="name"
          placeholder="Name"
          field-name="Name"
          :rules="['required', 'max:255']"
        />

        <DateElement
          name="event_date"
          placeholder="Event date"
          field-name="Event date"
          :rules="['required']"
          display-format="MMMM Do, YYYY"
        />

        <TextElement
          name="event_type"
          placeholder="Type of event"
          field-name="Type of event"
          :rules="['required', 'max:255']"
          description="Examples: Wedding, Corporate event, Private party, Club night, Festival."
        />

        <TextareaElement
          name="message"
          placeholder="Message (optional)"
          field-name="Message"
          :rules="['max:2000']"
        />

        <ButtonElement
          name="send"
          :submits="true"
          button-label="Send inquiry"
          :full="true"
          size="lg"
        />

        <StaticElement
          v-if="submitted"
          name="success"
          tag="p"
          content="Thanks! Your inquiry was sent. We’ll get back to you shortly."
        />
      </Vueform>
    </div>
  </section>
</template>

<style scoped lang="scss">
.booking {
  margin: 40px 20px;

  /* Optional: tune Vueform theme variables to match the site */
  --vf-primary: #fd6b21;
  --vf-ring-color: rgba(253, 107, 33, 0.35);
}

.booking__form {
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
}
</style>

