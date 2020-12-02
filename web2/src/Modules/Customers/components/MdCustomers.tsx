import {Modal} from 'antd'
import React, {
    forwardRef,
    ForwardRefRenderFunction,
    useCallback,
    useImperativeHandle,
    useState,
} from 'react'

export type ModalHandles = {
    openModal: () => void
}

const MdCustomers: ForwardRefRenderFunction<ModalHandles> = (p, ref) => {
    const [modalStatus, setStatusModal] = useState(false)

    const openModal = useCallback(() => {
        setStatusModal(true)
    }, [])
    const closeModal = useCallback(() => {
        setStatusModal(false)
    }, [])

    useImperativeHandle(ref, () => ({openModal}))

    return (
        <Modal
            title="Gerenciar Cliente"
            visible={modalStatus}
            onCancel={closeModal}
            width="800px"
            okText="Salvar"
            cancelText="Cancelar"
            maskClosable={false}>
            ola mundo
        </Modal>
    )
}

export default forwardRef(MdCustomers)
