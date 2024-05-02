<script setup>
import axios from 'axios';
import { Toaster, toast } from 'vue-sonner'
import { ref } from 'vue'
import { 
    secretKey,
    endPoint,
} from '@/hooks/env.js';

const isSending = ref(false);
const form = ref({
  nombre: '',
  telefono: '',
  mensaje: '',
  action: 'Contacto',
  token: '',
})
const resetForm = () => {
    form.value=  {
        nombre: '',
        telefono: '',
        email: '',
        mensaje: '',
        action: 'Contacto',
        token: '',
    }
}

const handleSubmit = () => {
    if(!isSending.value){
        isSending.value = true;
        grecaptcha.ready(function() {
            grecaptcha.execute(secretKey, { action: 'Contacto' }).then(function(token) {
                form.value.token = token;
                //console.log(form.value)
                sendForm();
            });
        });
    }
}
const sendForm = () => {
    axios.post(endPoint, form.value, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        toast.success('Tu mensaje fue enviado correctamente')
        resetForm()
    })
    .catch(error => {
        console.error(error)
        toast.error('No se pudo enviar el mensaje vuelva a intentarlo más tarde.')
    })
    .finally(() => {
        isSending.value = false
    })
}
</script>
<template>
  
  <form @submit.prevent="handleSubmit()" method="post" class="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-primary-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
    <Toaster richColors position="top-right" />
    <div class="sm:col-span-2">
        <label for="nombre" class="block mb-2 text-sm font-medium text-primary-950 dark:text-gray-300">Nombre *</label>
        <input type="text" name="nombre" id="nombre"
          class="block p-3 w-full text-sm text-primary-950 placeholder:text-primary-900 bg-primary-50 rounded-lg border border-primary-200 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Tu Nombre"
          v-model="form.nombre"
          required
        />
    </div>
    <div>
      <label for="telefono" class="block mb-2 text-sm font-medium text-primary-950 dark:text-gray-300">Teléfono *</label>
      <input type="tel" name="telefono" id="telefono"
        class="block p-3 w-full text-sm text-primary-950 placeholder:text-primary-900 bg-primary-50 rounded-lg border border-primary-200 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        placeholder="Tu teléfono"
        v-model="form.telefono"
        required
      />
    </div>
    <div>
        <label for="email" class="block mb-2 text-sm font-medium text-primary-950 dark:text-gray-300">E-mail</label>
        <input type="email" name="email" id="email"
          class="shadow-sm bg-primary-50 border border-primary-200 text-primary-950 placeholder:text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Tu E-mail"
          v-model="form.email"
        />
    </div>

    <div class="sm:col-span-2">
        <label for="mensaje" class="block mb-2 text-sm font-medium text-primary-950 dark:text-gray-400">Mensaje *</label>
        <textarea id="mensaje" rows="6"
          v-model="form.mensaje"
          class="block p-2.5 w-full text-sm text-primary-950 placeholder:text-primary-900 bg-primary-50 rounded-lg shadow-sm border border-primary-200 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Tu mensaje"
          required
        ></textarea>
    </div>
    <button type="submit" :disabled="isSending" class="py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-500 sm:w-fit hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>
  </form>

</template>

