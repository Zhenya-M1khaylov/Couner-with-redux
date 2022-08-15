import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CounterPresent} from '../Components/Counter/CounterPresent';
import {
    changeMaxValueAC,
    changeStartValueAC,
    CounterType,
    incrementValueAC, resetCounterValueAC,
    setCounterFromStartValueAC
} from '../Redux/counterReducer';
import {StateType} from '../Redux/store';


export const CounterContainer = () => {

    const dispatch = useDispatch()
    const {
        startValue,
        maxValue,
        counter,
        isDisabledButtonSet,
        isDisabledButtonReset,
        isDisabledButtonIncrementCount
    } = useSelector<StateType, CounterType>(state => state.counter)

    const setCounterFromStartValueHandler = () => dispatch(setCounterFromStartValueAC())

    const changeStartValue = (newValue: number) => dispatch(changeStartValueAC(newValue))
    const changeMaxValue = (newValue: number) => dispatch(changeMaxValueAC(newValue))
    const incrementCounterValue = () => dispatch(incrementValueAC())
    const resetCounterValue = () => dispatch(resetCounterValueAC())

    const errorInput =
        maxValue <= 0 ||
        startValue < 0 ||
        startValue > maxValue ||
        maxValue === startValue ||
        typeof startValue === 'string'

    const counterValue = errorInput ? 'Error input' :
        isDisabledButtonSet ? counter : 'Enter the value'

    const maxCountValue = counter === maxValue

    return (
        <div>
            <CounterPresent
                startValue={startValue}
                maxValue={maxValue}
                counter={counterValue}
                setCounterFromStartValueHandler={setCounterFromStartValueHandler}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
                incrementCounterValue={incrementCounterValue}
                errorInput={errorInput}
                isDisabledButtonSet={isDisabledButtonSet}
                isDisabledButtonReset={isDisabledButtonReset}
                isDisabledButtonIncrementCount={isDisabledButtonIncrementCount}
                maxCountValue={maxCountValue}
                resetCounterValue={resetCounterValue}
            />
        </div>
    );
};