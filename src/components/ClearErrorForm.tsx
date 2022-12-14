import { SubmitHandler, useForm } from 'react-hook-form'

interface FormData {
    firstName: string
    lastName: string
    password: string
}

export const ClearErrorForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        clearErrors
    } = useForm<FormData>({
        defaultValues: {
            firstName: 'Wellington',
            lastName: 'Damasio'
        },
        delayError: 5000
    })

    const onSubmit: SubmitHandler<FormData> = data => console.log(data)

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstName">First name:</label>
                <input {...register('firstName', { required: true })} />
                {
                    errors.firstName
                    && <span className='error-message'>Enter a valid name</span>
                }
            </div>
            <div>
                <label htmlFor="lastName">Last name:</label>
                <input {...register('lastName', { required: true })} />
                {
                    errors.lastName
                    && <span className='error-message'>Enter a valid name</span>
                }
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type='password'
                    {...register('password', { required: true })}
                />
                {
                    errors.password
                    && <span className='error-message'>
                        Enter a valid password
                    </span>
                }
            </div>
            <button type='button' onClick={() => clearErrors()}>
                Clear input errors
            </button>
            <input type="submit" value="Submit" />
        </form>
    )
}