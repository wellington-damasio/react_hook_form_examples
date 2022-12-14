import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormData {
    firstName: string
    lastName: string
    email: string
}

export const HandleErrorForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        formState,
        formState: { isSubmitSuccessful },
        reset,
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log(JSON.stringify(data))
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset])

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name:</label>
            <input
                {...register('firstName', { required: true })}
                aria-invalid={errors.firstName ? 'true' : 'false'}
                id='firstName'
            />
            {
                errors.firstName?.type === 'required'
                && <p role="alert">First name is required</p>
            }

            <label htmlFor="lastName">Last name:</label>
            <input
                {...register('lastName', { required: true })}
                aria-invalid={errors.lastName ? 'true' : 'false'}
                id='lastName'
            />
            {errors.lastName && <p>Please enter your last name.</p>}

            <label htmlFor="email">Email:</label>
            <input
                {...register('email', { required: true })}
                aria-invalid={errors.email ? 'true' : 'false'}
                id='email'
            />
            {errors.email && <p role="alert">Email is required</p>}

            <input type="submit" value="Submit" />
        </form>
    )
}