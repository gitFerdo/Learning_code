class Calculator
{
    constructor ( previewOperandTextElement, currentOperandTextElement )
    {
        this.previewOperandTextElement = previewOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear ()
    {
        this.currentOperandTextElement = ''
        this.previewOperandTextElement = ''
        this.operation = undefined
    }

    delete ()
    {

    }

    appendNumber ( number )
    {

    }

    chooseOperation ( operation )
    {

    }

    compute ()
    {

    }

    updateDisplay ()
    {

    }
}

const numberButtons = document.querySelectorAll( '[data-number]' )
const operationButtons = document.querySelectorAll( '[data-operation]' )
const equalsButton = document.querySelector( '[data-equals]' )
const deleteButton = document.querySelector( '[data-delete]' )
const allClearButton = document.querySelector( '[data-all-clear]' )
const previewOperandTextElement = document.querySelector( '[data-preview-operand]' )
const currentOperandTextElement = document.querySelector( '[data-current-operand]' )