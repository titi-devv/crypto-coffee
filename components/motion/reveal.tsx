import { motion } from 'framer-motion'


export default function Reveal(props: any) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: (() => {
                    switch (props.from) {
                        case 'bottom':
                            return 50
                        case 'top':
                            return -50
                        default:
                            return 0
                    }
                })
                    (),
                x: (() => {
                    switch (props.from) {
                        case 'right':
                            return 100
                        case 'left':
                            return -100
                        default:
                            return 0
                    }
                })
                    ()
            }}
            animate={{ x: "0px" }}
            transition={{
                delay: props.delay || .2,
                duration: props.duration || 1,
                bounce: .4
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {props.children}
        </motion.div>
    )
}