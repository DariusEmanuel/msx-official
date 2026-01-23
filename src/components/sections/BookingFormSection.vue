<script setup lang="ts">
import { ref } from "vue";
import HeadlineForSection from "@/components/base/HeadlineForSection.vue";

const submitted = ref(false);
const submitting = ref(false);
const submitError = ref<string | null>(null);

async function onSubmit(form$: any) {
  submitted.value = false;
  submitError.value = null;
  submitting.value = true;

  try {
    const data = form$?.data ? form$.data : {};

    const res = await fetch("/api/send-inquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        event_date: data.event_date,
        location: data.location,
        event_type: data.event_type,
        message: data.message,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || "Request failed");
    }

    submitted.value = true;
    form$?.reset?.();
  } catch (e: any) {
    submitError.value =
      "Your request cannot be processed right now. Please email events@mateisax.com";
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <section class="booking dark">
    <HeadlineForSection
      title="Booking"
      before-text="Matei Sax"
      font-size="68px"
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
          name="location"
          placeholder="Country, City, Location"
          field-name="Country, City, Location"
          :rules="['required', 'max:255']"
        />

        <TextElement
          name="event_type"
          placeholder="Type of event"
          field-name="Type of event"
          :rules="['required', 'max:255']"
          description="Examples: Festival, Beach Club, Wedding, Corporate event, Private party, Night Club ..."
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
          :disabled="submitting"
        />

        <StaticElement
          v-if="submitted"
          name="success"
          tag="p"
          content="Thanks! Your inquiry was sent. We’ll get back to you shortly."
        />

        <StaticElement
          v-if="submitError"
          name="error"
          tag="p"
          :content="submitError"
        />
      </Vueform>
    </div>
  </section>
</template>

<style scoped lang="scss">
.booking {
  margin: 40px 20px;
}

.booking__form {
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
}
</style>

