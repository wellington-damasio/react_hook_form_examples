import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInputs {
    firstName: string
    lastName: string
    age: number
    phone: number
}

export const ValidationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>({
        defaultValues: {
            firstName: 'Wellington',
            lastName: 'Damasio',
            age: 20,
            phone: 37
        }
    })

    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data)
    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input
                    {...register('firstName', { required: true, maxLength: 20 })}
                    id='firstName'
                />
                {
                    errors.firstName
                    && <span className='error-message'>
                        Type a name with max 20 characters
                    </span>
                }
            </div>
            <div>
                <label htmlFor='lastName'>Last name:</label>
                <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
                {
                    errors.lastName
                    && <span className='error-message'>Cannot contain numbers</span>
                }
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <input
                    type='number' {...register('age', { min: 18, max: 99 })}
                    id='age'
                />
                {
                    errors.age
                    && <span className='error-message'>
                        Keep it in the range of 18 to 99
                    </span>
                }
            </div>
            <div>
                <label htmlFor='phone'>Phone:</label>
                <input
                    type='number'
                    {...register('phone', { minLength: 9, maxLength: 11 })}
                    id='phone'
                />
                {
                    errors.phone
                    && <span className='error-message'>
                        Your number must have at least 9 character and max of 11
                    </span>
                }
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}