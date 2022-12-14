import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form'
import React from 'react'

interface FormData {
    firstName: string,
    age: number
}

interface InputProps {
    label: string
    name: string
    register?: any
    required?: boolean
}

const Input = ({ label, register, name, required }: InputProps) => {
    return (
        <div>
            <label htmlFor={`${name}`}>{label}</label>
            <input {...register(name, { required })} />
        </div>
    )
}

const Select = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<FormData>>
>(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="lt20">Below 20</option>
            <option value="20">20's</option>
            <option value="30">30's</option>
            <option value="40">40's</option>
            <option value="granpa">Granpa</option>
        </select>
    </>
));


export const ComponentsForm = () => {
    const { register, handleSubmit } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = data => console.log(data)

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="First name:"
                name="firstName"
                register={register}
                required
            />
            <Select label='Age:' {...register('age')} />
            <input type="submit" value="Submit" />
        </form>
    )
}
