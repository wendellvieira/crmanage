import { Dispatch, SetStateAction } from 'react'
import * as Yup from 'yup'
import { validate_cpf, validate_cnpj } from 'src/utils/validate'

export interface Errors {
    [key: string]: string
}

export class ValidationError extends Error {
    public errors: Errors

    constructor(e: Errors) {
        super('Validation error')
        this.errors = e
    }

    setState(fn: Dispatch<SetStateAction<Errors>>) {
        fn(this.errors)
    }
}

export async function errorTransform<T, D>(
    schema: Yup.Schema<T>,
    data: D,
    abortEarly = false
) {
    try {
        await schema.validate(data, {
            abortEarly,
        })
    } catch (e) {
        const errors = e.inner.reduce(
            (acc: Errors, err: Yup.ValidationError) => {
                acc[err.path] = err.errors[0]
                return acc
            },
            {}
        )

        throw new ValidationError(errors)
    }
}

// eslint-disable-next-line
Yup.addMethod(Yup.string, 'cpfOrCnpj', function (this: any, message) {
    // eslint-disable-next-line
    return this.test(function (this: any, value: string) {
        const { path, createError } = this

        const cpfIsValid = validate_cpf(value)
        const cnpjIsValid = validate_cnpj(value)

        return (
            !value ||
            cpfIsValid ||
            cnpjIsValid ||
            createError({ path, message })
        )
    })
})

export default Yup
