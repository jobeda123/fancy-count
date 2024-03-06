const Title = ({ locked }) => {
    return (
        <h1 className="title">{
            locked ?
                <>
                    <span>Limit ! Buy <b>Pro</b> for &gt;5</span>
                    <span className="description">Your are disabled. To use Free version, Press reset button to start again!!!</span>
                </>
                : "Fancy Counter"
        }</h1>
    )
}

export default Title