<script setup lang="ts">
import { Field, Form, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema } from "~/schema/auth.schema";
import { useLogin } from "~/composables/auth/useLogin";

const validationSchema = toTypedSchema(loginSchema);
const {mutate, isPending, error} = useLogin()
const onSubmit = (values: any) => {
  console.log(values)
}

</script>

<template>
  <section class="flex justify-center items-center h-dvh w-full">
    <Form :validation-schema="validationSchema" @submit="onSubmit" class="space-y-4 border-2 border-primary p-4 rounded-xl w-80">
      <div class="grid">
        <label for="">Username</label>
        <Field
          name="username"
          type="text"
          class="border border-white px-3 py-1 rounded-lg"
        />
        <ErrorMessage name="username" class="text-red-500"/>
      </div>
      <div class="grid">
        <label for="">Password</label>
        <Field
          name="password"
          type="password"
          class="border border-white px-3 py-1 rounded-lg"
        />
        <ErrorMessage name="password" class="text-red-500"/>
      </div>
      <Button class="w-full rounded-2xl!">Submit</Button>
    </Form>
  </section>
</template>
