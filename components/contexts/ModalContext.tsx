import React, { createContext, useState } from 'react'

interface modalPropsInt {
    name?: string
}

const baseModalProps = {
    name: ''
}

interface ModalTypes {
    openModal: (type: modalPropsInt) => void
    closeModal: () => void
    modalOpened: boolean
    modalProps: modalPropsInt
    openPendingModal: () => void
    closePendingModal: () => void
    pendingModalOpened: boolean
}

const ModalContext = createContext<ModalTypes>({
    openModal: (): void => {
        //
    },
    closeModal: (): void => {
        //
    },
    modalOpened: false,
    modalProps: baseModalProps,
    openPendingModal: (): void => {
        //
    },
    closePendingModal: (): void => {
        //
    },
    pendingModalOpened: false,
})

const ModalProvider = ({ children }: { children: JSX.Element }) => {
    const [modalOpened, setModal] = useState<boolean>(false)
    const [pendingModalOpened, setPendingModal] = useState<boolean>(false)
    const [modalProps, setModalProps] = useState<modalPropsInt>(baseModalProps)

    const openModal = (type: modalPropsInt) => {
        console.log('yoooo')
        setModalProps(type)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const openPendingModal = () => {
        setPendingModal(true)
    }

    const closePendingModal = () => {
        setPendingModal(false)
    }

    return (
        <ModalContext.Provider
            value={{
                openModal,
                closeModal,
                modalOpened,
                modalProps,
                openPendingModal,
                closePendingModal,
                pendingModalOpened,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }