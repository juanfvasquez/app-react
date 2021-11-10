import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'

export function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const validaciones = {
    nombre: { required: {value: true, message: 'Nombre requerido'}, minLength: { value: 5, message: 'Debe tener 5 caracteres mínimo'} },
    apellido: { required: { value: true, message: 'Apellido requerido' } },
    email: { required: { value: true, message: 'Email requerido' }, pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'Email no válido'
    } }
  }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div style={{ width: 250, marginLeft: 20 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input {...register("nombre", validaciones['nombre'])} />
          <p style={{ fontSize: 11, color: '#f00' }}>
            {errors?.nombre?.message}
            {/* if (errors != null) {
              if (errors.nombre != null) {
                return errors.nombre.message
              }
            } */}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input {...register("apellido", validaciones['apellido'])} />
          <p style={{ fontSize: 11, color: '#f00' }}>
            {errors?.apellido?.message}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input {...register("email", validaciones['email'])} />
          <p style={{ fontSize: 11, color: '#f00' }}>
            {errors?.email?.message}
          </p>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
