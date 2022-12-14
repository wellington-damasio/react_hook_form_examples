import { useForm, useWatch } from "react-hook-form"

interface FormData {
    firstName: string
}

const InputMirror = ({ control }: any) => {
    const firstName = useWatch({
        control,
        name: 'firstName'
    })

    return <p>Watch: {firstName}</p>
}

export const UseWatchHook = () => {
    const { register, control } = useForm()
    return (
        <form className="form">
            <input {...register('firstName')} />
            <InputMirror control={control} />
        </form>
    )
}