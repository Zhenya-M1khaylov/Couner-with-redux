import React from 'react';
import s from '../../Components/Counter/CounterPresent.module.css'
import {Button, Container, Grid, TextField} from '@mui/material';

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
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div className={s.setter}>
                                <div className={s.setter_start}>
                                    <span className={s.setter__value}>startValue:</span>
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
                                <div className={s.setter_max}>
                                    <span className={s.setter__value}>maxValue:</span>
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
                                <Button variant="contained" onClick={setCounterFromStartValueHandler}
                                        disabled={isDisabledButtonSet || errorInput}>Set</Button>
                            </div>

                        </Grid>

                        <Grid item xs={6}>
                            <div>
                                {counter}
                            </div>
                            <div>

                                <Button variant="contained" onClick={incrementCounterValue}
                                        disabled={isDisabledButtonIncrementCount || maxCountValue}>+</Button>
                                <Button variant="contained" onClick={resetCounterValue}
                                        disabled={isDisabledButtonReset}>reset</Button>
                            </div>
                        </Grid>

                    </Grid>
                </Container>

            </div>

        </>
    );
};

export default CounterPresent;