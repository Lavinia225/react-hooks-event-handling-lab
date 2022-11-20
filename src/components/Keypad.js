// Code Keypad Component Here

function Keypad (){
    function handlePass(){
        console.log('Entering password...')
    }

    return (
        <>
        <input type="password" onChange={handlePass}></input>
        </>
    )
}

export default Keypad;