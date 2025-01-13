import React, { useState } from 'react'
import './styles.css'

const Calculator = () => {

    const [input, setInput] = useState('0');

    const display = (val) => {
        if (input == 0) {
            setInput(val)
        }
        else setInput(input + val)
        console.log(input);
    }

    const clear = () => {
        setInput('')
    }

    function backspace() {
        setInput((prevInput) => prevInput?.slice(0, -1));
    }

    const calculate = () => {
        setInput(eval(input))
    }

    return (
        <form>
            <input className="display" id="calculator-display" value={input} type='text' onChange={(e) => setInput(e.target.value)} />
            <table>

                <span className="special" onClick={() => clear()}>AC</span>
                <span className="special" onClick={() => display('%')}>%</span>
                <span className="special" onClick={() => display('/')}>÷</span>
                <span className="special" onClick={backspace}>⌫</span>


                <span onClick={() => display('7')}>7</span>
                <span onClick={() => display('8')}>8</span>
                <span onClick={() => display('9')}>9</span>
                <span class="special" onClick={() => display('*')}>x</span>


                <span onClick={() => display('4')}>4</span>
                <span onClick={() => display('5')}>5</span>
                <span onClick={() => display('6')}>6</span>
                <span class="special" onClick={() => display('-')}>-</span>


                <span onClick={() => display('1')}>1</span>
                <span onClick={() => display('2')}>2</span>
                <span onClick={() => display('3')}>3</span>
                <span class="special" onClick={() => display('+')}>+</span>


                <span class="wide" onClick={() => display('0')}>0</span>
                <span onClick={() => display('.')}>.</span>
                <span class="special" onClick={() => calculate()}>=</span>
            </table>
        </form>


    )
}

export default Calculator