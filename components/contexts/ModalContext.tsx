import React, { createContext, useState } from 'react'

interface modalPropsInt {
    name?: string


}

const baseModalProps = {
    name: '',

}

//get value from startInput
interface inputPropsInt {
    val?: string
}
const inputModalProps = {
    val: '',

}
interface ModalTypes {
    openModal: (type: modalPropsInt) => void
    closeModal: () => void
    modalOpened: boolean
    modalProps: modalPropsInt
    valProps: inputPropsInt
    getVal: (type: inputPropsInt) => void

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
    valProps: inputModalProps,
    getVal: (): void => {
        //
    }

})

const ModalProvider = ({ children }: { children: JSX.Element }) => {
    const [modalOpened, setModal] = useState<boolean>(false)

    const [modalProps, setModalProps] = useState<modalPropsInt>(baseModalProps)
    const [valProps, setValProps] = useState<inputPropsInt>(inputModalProps)

    const openModal = (type: modalPropsInt) => {

        setModalProps(type)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        setModalProps({ name: '' })
    }
    //get value from startInput
    const getVal = (val: inputPropsInt) => {
        setValProps(val)
        console.log('gotvalue', valProps)
    }

    return (
        <ModalContext.Provider
            value={{
                openModal,
                closeModal,
                modalOpened,
                modalProps,
                valProps,
                getVal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }