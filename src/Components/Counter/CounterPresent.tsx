import {Button, TextField} from '@mui/material';
import React from 'react';
import s from './CounterPresent.module.css'

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
const CounterPresent: React.FC<CounterPresentPropsType> = (props) => {
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
            <div className={s.container}>
                <div className={s.container_wrapper}>
                    <div className={s.setter}>
                        <div className={s.setter_item}>
                            <span className={s.setter_value}>startValue:</span>
                            <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={startValue}
                                onChange={(e) => changeStartValue(+e.currentTarget.value)}
                            />
                        </div>
                        <div className={s.setter_item}>
                            <span className={s.setter_value}>maxValue:</span>
                            <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={maxValue}
                                onChange={(e) => changeMaxValue(+e.currentTarget.value)}

                            />
                        </div>
                        <Button
                            className={s.setter_button}
                            variant="contained"
                            onClick={setCounterFromStartValueHandler}
                            disabled={isDisabledButtonSet || errorInput}
                        >Set
                        </Button>
                    </div>
                    <div className={s.counter}>
                        <div className={
                            `
                            ${s.counter_value} 
                            ${!isDisabledButtonSet && s.counter_value_edit}
                            ${errorInput && s.red}
                            ${errorInput && s.bold}
                            ${maxCountValue && counter !=='Enter the value' && s.red}
                            `}>
                            {counter}
                        </div>

                        <div className={s.buttons}>
                            <Button variant="contained" onClick={incrementCounterValue}
                                    disabled={isDisabledButtonIncrementCount || maxCountValue}>+</Button>
                            <Button variant="contained" onClick={resetCounterValue}
                                    disabled={isDisabledButtonReset}>reset</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};
export default CounterPresent;