import React, {useState} from 'react';
import CalculatorBody from "./calculatorBody";
import CalculatorScreen from "./calculatorScreen";
import '../style/calculator.css'

const Calculator = () => {

    const [result, setResult] = useState('')
    const symbols = ['%', '/', '*', '-', '+', '.', ',']
    const [previousValue, setPreviousValue] = useState('')
    const [inOperation, setInOperation] = useState(false);

    const handleResult = (value) => {

        //conditionals to show result and to stop adding to it, maximum 20 characters accepted, there are different situations such as when the previous character is a symbol or a number to set if a operations is active.

        if(result.length === 18){
            return;
        }

        if(result.length === 15 && !symbols.includes(value)) {
            setInOperation(true)
            return;
        }

        if(inOperation === true && result.length === 18){
            return;
        }

        setPreviousValue(value)

        if(symbols.includes(value) && result === '' || symbols.includes(previousValue) && symbols.includes(value) ){
            return;
        }else {
            setResult(result.concat(value))
        }  
    }

    const deleteAll = () => {
        setResult('')
        setPreviousValue('')
    }

    const deleteOne = () => {
        setResult(result.slice(0, result.length - 1))
        setPreviousValue('')
    }

    const handleFinalResult = () => {
        try {
            const finalResult = eval(result)
            if(isNaN(finalResult)){
                setResult('Cannot divide by zero');
            } else {
                setResult(finalResult.toString());
            }
            setInOperation(false)
        }catch(error){
            setResult('Error');
        }
        
    }

    return (
        <section className='calculator_main_Section' >
            <div className='calculator_main_components' >
                <CalculatorScreen result={result}/>
                <CalculatorBody handleFinalResult={handleFinalResult} handleResult={handleResult} deleteAll={deleteAll} deleteOne={deleteOne} />
            </div>
        </section>
    )
};

export default Calculator;