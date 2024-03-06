import { ResetIcon } from '@radix-ui/react-icons'

const ResetButton = ({ setCount }) => {
    const resetHandler = (event) => {
        setCount(0)

        // button click korle normally aita focus hoye thake
        // focus er jonno amra jkhn abr space diye increase kori
        // tkhn count action trigger hoy
        // oe double bug remove korar jonno e amra 
        // event er kaj sesh e button er focus ta blur kore dibo
        event.currentTarget.blur()
    }

    return (
        <button className="reset-btn" onClick={resetHandler}>
            <ResetIcon className='reset-btn-icon' />
        </button>
    )
}


export default ResetButton;