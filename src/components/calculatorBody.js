import '../style/calculatorBody.css'

const CalculatorBody = ({handleResult, deleteOne, deleteAll, handleFinalResult}) => {

    const buttons = [
        {name: 'AC'},
        {name: 'Del'},
        {name: '%'},
        {name: '/'},
        {name: '7',},
        {name: '8',},
        {name: '9',},
        {name: '*', symbol: 'x'},
        {name: '4',},
        {name: '5',},
        {name: '6',},
        {name: '-'},
        {name: '1',},
        {name: '2',},
        {name: '3',},
        {name: '+'},
        {name: '.'},
        {name: '0',},
        {name: ','},
        {name: '='},
    ]

    const handleResults = (e) => {
        handleResult(e.target.name)
    }

    const deleteAllBtn = () => {
        deleteAll()
    }

    const deleteOneBtn = () => {
        deleteOne()
    }

    const handleFinalResultBtn = (e) => {
        handleFinalResult()
    }

    return (
        <div className='calculator_body'>
            <div className='calculator_btn_distribution'>
                {buttons.map((item, index) => {

                    const name = item.name;                 

                    return (
                        <button 
                        key={index}
                        className={
                            name.includes('Del') ? 'calculator_btn special_character' : 
                            name.includes('AC') ? 'calculator_btn special_character' :
                            name.includes('=') ? 'calculator_btn special_character' : 
                            name.includes('%') ? 'calculator_btn operator' :
                            name.includes('/') ? 'calculator_btn operator' :
                            name.includes('+') ? 'calculator_btn operator' :
                            name.includes('-') ? 'calculator_btn operator' :
                            name.includes('*') ? 'calculator_btn operator' : 'calculator_btn'
                        }
                        name={name}
                        onClick={
                            name.includes('AC') ? deleteAllBtn :
                            name.includes('=') ? handleFinalResultBtn :
                            name.includes('Del') ? deleteOneBtn : handleResults 
                            }>
                            {name.includes('*') ? item.symbol : name}
                        </button>
                    )
                })}
            </div>
        </div>
    ) 
};

export default CalculatorBody;
