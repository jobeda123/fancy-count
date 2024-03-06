import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

function CountButton({ setCount, type, locked }) {
    const handleClick = (event) => {
        setCount((prev) => {
            if (type === "minus") {
                if (prev > 0) {
                    return prev - 1
                } else return 0
            } else {
                const newCount = prev + 1
                if (newCount > 5) {
                    return 5
                }
                return newCount
            }
        })

        // blur hocche focus er opposite
        // button click korle normally aita focus hoye thake
        // focus er jonno amra jkhn abr space diye increase kori
        // tkhn count action trigger hoy
        // oe double bug remove korar jonno e amra 
        // event er kaj sesh e button er focus ta blur kore dibo
        event.currentTarget.blur()
    };

    return (
        <button disabled={locked} className="count-btn" onClick={handleClick}>
            {
                type === "minus" ? <MinusIcon className='count-btn-icon' /> : <PlusIcon className='count-btn-icon' />
            }

        </button>
    )
}


export default CountButton;