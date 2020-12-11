import {Button} from 'antd'
import React, {useCallback} from 'react'
import {VscTrash} from 'react-icons/vsc'

type Prop = {
    customerId?: string
}
export default function TrashButton({customerId}: Prop): JSX.Element {
    const deleteCustomer = useCallback(() => {
        console.log(customerId)
    }, [])

    return <Button danger onClick={deleteCustomer} icon={<VscTrash />} />
}
