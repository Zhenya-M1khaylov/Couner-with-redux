export type CounterType = {
    startValue: number,
    maxValue: number,
    counter: number,
    isDisabledButtonSet: boolean,
    isDisabledButtonIncrementCount: boolean,
    isDisabledButtonReset: boolean,
}

const initialState: CounterType = {
    startValue: 0,
    maxValue: 1,
    counter: 0,
    isDisabledButtonIncrementCount: true,
    isDisabledButtonReset: true,
    isDisabledButtonSet: false
}

export const counterReducer = (state = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case 'INCREMENT-COUNTER': {
            return {
                ...state,
                counter: state.counter + 1,
                isDisabledButtonReset: false
            }
        }
        case 'SET-COUNTER-FROM-START-VALUE': {
            return {
                ...state,
                counter: state.startValue,
                isDisabledButtonSet: true,
                isDisabledButtonIncrementCount: false,
            }
        }
        case 'CHANGE-START-VALUE': {
            return {
                ...state,
                startValue: action.payload.newValue,
                isDisabledButtonSet: false,
                isDisabledButtonIncrementCount: true,
                isDisabledButtonReset: true,
            }
        }
        case 'CHANGE-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.payload.newValue,
                isDisabledButtonSet: false,
                isDisabledButtonIncrementCount: true,
                isDisabledButtonReset: true,
            }
        }
        case 'RESET-COUNTER-VALUE': {
            return {
                ...state,
                counter: state.startValue,
                isDisabledButtonReset: true
            }
        }
        default:
            return state
    }
}

export type ActionType = IncrementValueACType
    | setCounterFromStartValueACType
    | changeStartValueACType
    | changeMaxValueACType
    | resetCounterValueACType

type IncrementValueACType = ReturnType<typeof incrementValueAC>
export const incrementValueAC = () => {
    return {
        type: 'INCREMENT-COUNTER',
        payload: {}
    } as const
}

type setCounterFromStartValueACType = ReturnType<typeof setCounterFromStartValueAC>
export const setCounterFromStartValueAC = () => {
    return {
        type: 'SET-COUNTER-FROM-START-VALUE',
        payload: {}
    } as const
}

type changeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (newValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        payload: {
            newValue
        }
    } as const
}

type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (newValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            newValue
        }
    } as const
}
type resetCounterValueACType = ReturnType<typeof resetCounterValueAC>
export const resetCounterValueAC = () => {
    return {
        type: 'RESET-COUNTER-VALUE',
        payload: {}
    } as const
}