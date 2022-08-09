import React from 'react';
import {useDispatch} from "react-redux";
import {CounterPresent} from '../Components/Counter/CounterPresent';
import {changeMaxValueAC, changeStartValueAC, CounterType, setCounterFromStartValueAC} from '../Redux/counterReducer';


export const CounterContainer = () => {
    const dispatch = useDispatch()


    const setCounterFromStartValueHandler = () => dispatch(setCounterFromStartValueAC())

    const changeStartValue = (newValue:number) => dispatch(changeStartValueAC(newValue))
    const changeMaxValue = (newValue:number) => dispatch(changeMaxValueAC(newValue))

    return (
        <div>
            <CounterPresent
                startValue={startValue}
                maxValue={maxValue}
                counter={counter}
                setCounterFromStartValueHandler={setCounterFromStartValueHandler}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
            />
        </div>
    );
};