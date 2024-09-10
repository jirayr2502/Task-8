import { useContext, useState } from "react";
import { UserContext } from "../context";
import { IAddUser, InputUser } from "../types";
export const AddUser = () => {

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('error')
    }
    const { handleAdd } = context

    const [error, setError] = useState<string>('')

    const [value, setValue] = useState<IAddUser>({
        name: '',
        age: '',
        salary: ''
    })

    const handleSub = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        if (!value.name.trim() || !value.age.trim() || !value.salary.trim()) {
            return setError('fill in all fields')
        }

        setError('')

        const User: InputUser = { ...value, age: +value.age, salary: +value.salary }

        handleAdd(User)

        setValue({ name: '', age: '', salary: '' })

    }
    return <>
        <h3>Add User</h3>
        <form onSubmit={handleSub}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="name"
                value={value.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, name: event.target.value })}
            />
            <input
                type="number"
                placeholder="age"
                value={value.age}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, age: event.target.value })}
            />
            <input
                type="number"
                placeholder="salary"
                value={value.salary}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, salary: event.target.value })}
            />
            <button>Save</button>
        </form>
    </>
}