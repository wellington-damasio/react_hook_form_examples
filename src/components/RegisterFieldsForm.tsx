import { useForm, SubmitHandler } from "react-hook-form"

interface FormInputs {
    firstName: string,
    lastName: string,
    gender: 'female' | 'male' | 'other'
}

export const RegisterFieldsForm = () => {
    const { register, handleSubmit } = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div>
                <label htmlFor="firstName">First name:</label>
                <input {...register('firstName')} id='firstName' />
            </div>
            <div>
                <label htmlFor="lastName">First name:</label>
                <input {...register('lastName')} id='lastName' />
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select {...register('gender')} id='gender'>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <input type="submit" value='Submit' />
        </form>
    )
}