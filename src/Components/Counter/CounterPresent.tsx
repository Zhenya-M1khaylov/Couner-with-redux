import React from 'react';
import s from '../../Components/Counter/CounterPresent.module.css'

type CounterPresentPropsType = {
    startValue: number,
    maxValue: number,
    counter: string | number,
    setCounterFromStartValueHandler: () => void,
    changeStartValue: (newValue: number) => void,
    changeMaxValue: (newValue: number) => void,
    incrementCounterValue: () => void,
    errorInput: boolean,
    isDisabledButtonSet: boolean,
    isDisabledButtonReset: boolean,
    isDisabledButtonIncrementCount: boolean,
    maxCountValue: boolean,
    resetCounterValue: () => void
}

export const CounterPresent: React.FC<CounterPresentPropsType> = (props) => {

    const {
        maxValue,
        startValue,
        counter,
        setCounterFromStartValueHandler,
        changeStartValue,
        changeMaxValue,
        incrementCounterValue,
        errorInput,
        isDisabledButtonSet,
        isDisabledButtonReset,
        isDisabledButtonIncrementCount,
        maxCountValue,
        resetCounterValue
    } = props

    return (
        <>
            <div>
                startValue: <input
                type={'number'}
                value={startValue}
                onChange={(e) => changeStartValue(+e.currentTarget.value)}
            />
            </div>
            <div>
                MaxValue: <input
                type={'number'}
                value={maxValue}
                onChange={(e) => changeMaxValue(+e.currentTarget.value)}
            />
            </div>
            <div>
                <button
                    onClick={setCounterFromStartValueHandler}
                    disabled={isDisabledButtonSet}
                >Set
                </button>
                <button
                    onClick={incrementCounterValue}
                    disabled={isDisabledButtonIncrementCount || maxCountValue}
                >+
                </button>
                <button
                    onClick={resetCounterValue}
                    disabled={isDisabledButtonReset}
                >Reset
                </button>
            </div>
            <div>
                {counter}
            </div>
        </>
    )

}