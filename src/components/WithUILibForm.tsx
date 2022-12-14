import Select from "react-select"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Input } from "@mui/material"

interface FormData {
    firstName: string
    iceCreamType: { value: string, label: string }
}

export const WithUILibForm = () => {
    const { control, handleSubmit } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = data => console.log(data)
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name='firstName'
                control={control}
                render={({ field }) => <Input {...field} />}
            />
            <Controller
                name='iceCreamType'
                control={control}
                render={({ field }) => <Select
                    {...field}
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'apple', label: 'Apple' },
                        { value: 'avocado', label: 'Avocado' }
                    ]}
                />}
            />
            <input type="submit" value="Submit" />
        </form>
    )
}