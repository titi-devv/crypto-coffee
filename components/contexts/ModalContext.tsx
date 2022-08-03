import React, { createContext, useState } from 'react'

// interface modalPropsInt {
//     name?: string
//     email?: string
// }

// const baseModalProps = {
//     name: '',
//     email: ''
// }

interface ModalTypes {
    openModal: () => void
    closeModal: () => void
    modalOpened: boolean
    // modalProps: modalPropsInt

}

const ModalContext = createContext<ModalTypes>({
    openModal: (): void => {
        //
    },
    closeModal: (): void => {
        //
    },
    modalOpened: false,
    // modalProps: baseModalProps,

})

const ModalProvider = ({ children }: { children: JSX.Element }) => {
    const [modalOpened, setModal] = useState<boolean>(false)

    // const [modalProps, setModalProps] = useState<modalPropsInt>(baseModalProps)

    const openModal = () => {
        console.log(modalOpened, 'ouvert?')
        // setModalProps(type)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        console.log('closed')
    }


    return (
        <ModalContext.Provider
            value={{
                openModal,
                closeModal,
                modalOpened,
                // modalProps,

            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }