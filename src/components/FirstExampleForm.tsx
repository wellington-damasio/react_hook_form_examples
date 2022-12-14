import { useForm, SubmitHandler } from 'react-hook-form'

interface Inputs {
    name: string,
    age: number
}

export const FirstExampleForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

    console.log(watch())
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div>
                <label htmlFor="name">Name:</label>
                <input defaultValue="Wellington" {...register("name")} id="name" />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    defaultValue={18}
                    type='number'
                    {...register('age', { required: true })}
                />
                {errors.age && <span className='error-message'>This field is required</span>}
            </div>

            <input type="submit" value="Submit" />
        </form>
    )
}