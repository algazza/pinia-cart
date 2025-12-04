<script setup lang="ts">
import { loginSchema } from "~/schema/auth.schema";
import { zodResolver } from "@primevue/forms/resolvers/zod";

const resolver = ref(zodResolver(loginSchema));

const onSubmit = ({ values }: any) => {
  console.log(values);
};
</script>

<template>
  <section class="flex justify-center items-center h-dvh w-full">
    <Form
      v-slot="$form"
      :resolver="resolver"
      @submit="onSubmit"
      class="space-y-4 border-2 border-primary p-4 rounded-xl w-80"
    >
      <div class="grid">
        <label for="">Username</label>
        <InputText
          name="username"
          type="text"
          placeholder="Username"
          fluid
          class="border! border-white! rounded-lg!"
        />
        <Message
          v-if="$form.username?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form.username.error.message }}
        </Message>
      </div>
      <div class="grid">
        <label for="">Password</label>
        <InputText
          name="password"
          type="password"
          placeholder="Password"
          fluid
          class="border! border-white! rounded-lg!"
        />
        <Message
          v-if="$form.password?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form.password.error.message }}
        </Message>
      </div>
      <Button type="submit" class="w-full rounded-2xl!">Submit</Button>
    </Form>
  </section>
</template>
