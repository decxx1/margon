<script setup>
import axios from 'axios';
import { Toaster, toast } from 'vue-sonner';
import { ref } from 'vue';
import { secretKey, siteKey, endPoint, email } from '@/hooks/env.js';

const isSending = ref(false);
const form = ref({
	name: '',
	phone: '',
	email: '',
	message: '',
	action: 'Contacto',
	token: '',
	asunto: '',
	secret_key: secretKey,
	addressee: email,
});

const inputClass =
	'block w-full rounded-xl border border-border-warm bg-body px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:border-border-warm-dark dark:bg-body-dark dark:text-inverse dark:placeholder:text-inverse-subtle';

const labelClass = 'mb-2 block text-sm font-semibold text-foreground dark:text-inverse';

const resetForm = () => {
	form.value = {
		name: '',
		phone: '',
		email: '',
		message: '',
		action: 'Contacto',
		token: '',
		asunto: '',
		secret_key: secretKey,
		addressee: email,
	};
};

const handleSubmit = () => {
	if (!isSending.value) {
		isSending.value = true;
		grecaptcha.ready(function () {
			grecaptcha.execute(siteKey, { action: 'Contacto' }).then(function (token) {
				form.value.asunto = 'Contacto desde la web - de: ' + form.value.name;
				form.value.token = token;
				sendForm();
			});
		});
	}
};

const sendForm = () => {
	axios
		.post(endPoint, form.value, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		.then(() => {
			toast.success('Tu mensaje fue enviado correctamente');
			resetForm();
		})
		.catch((error) => {
			if (error.response?.data?.errors) {
				const formErrors = error.response.data.errors.message;
				for (let field in formErrors) {
					if (formErrors.hasOwnProperty(field)) {
						toast.warning(formErrors[field]);
						break;
					}
				}
			} else if (error.response?.data?.message) {
				toast.error(error.response.data.message);
			}
		})
		.finally(() => {
			isSending.value = false;
		});
};
</script>

<template>
	<div class="rounded-2xl border border-border-warm bg-card p-6 sm:p-8 dark:border-border-warm-dark dark:bg-card-dark">
		<header class="mb-8">
			<p class="mb-3 text-[0.72rem] font-semibold tracking-[0.28em] text-primary-600 uppercase dark:text-primary-300">
				Formulario
			</p>
			<h2 class="text-2xl font-black tracking-tight text-foreground dark:text-inverse">
				Envianos tu consulta
			</h2>
			<div class="mt-4 h-1 w-12 rounded-sm bg-primary-500 dark:bg-primary-400" aria-hidden="true"></div>
			<p class="mt-4 text-sm leading-relaxed text-muted dark:text-inverse-muted">
				Completá el formulario y nos pondremos en contacto a la brevedad.
			</p>
		</header>

		<form class="grid grid-cols-1 gap-6 sm:grid-cols-2" @submit.prevent="handleSubmit()" method="post">
			<Toaster richColors position="top-right" />

			<div class="sm:col-span-2">
				<label for="nombre" :class="labelClass">Nombre *</label>
				<input
					id="nombre"
					v-model="form.name"
					type="text"
					name="name"
					:class="inputClass"
					placeholder="Tu nombre"
					required
				/>
			</div>

			<div>
				<label for="telefono" :class="labelClass">Teléfono *</label>
				<input
					id="telefono"
					v-model="form.phone"
					type="tel"
					name="phone"
					:class="inputClass"
					placeholder="Tu teléfono"
					required
				/>
			</div>

			<div>
				<label for="email" :class="labelClass">E-mail</label>
				<input
					id="email"
					v-model="form.email"
					type="email"
					name="email"
					:class="inputClass"
					placeholder="Tu e-mail"
				/>
			</div>

			<div class="sm:col-span-2">
				<label for="mensaje" :class="labelClass">Mensaje *</label>
				<textarea
					id="mensaje"
					v-model="form.message"
					rows="6"
					:class="inputClass"
					placeholder="Tu mensaje"
					required
				></textarea>
			</div>

			<div class="sm:col-span-2">
				<button
					type="submit"
					:disabled="isSending"
					class="inline-flex w-full items-center justify-center rounded-2xl bg-primary-500 px-8 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700"
				>
					{{ isSending ? 'Enviando…' : 'Enviar' }}
				</button>
			</div>
		</form>
	</div>
</template>
