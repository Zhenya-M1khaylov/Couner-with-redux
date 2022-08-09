export type CounterType = {
    startValue: number,
    maxValue: number,
    counter: string | number
}

const initialState: CounterType = {
    startValue: 0,
    maxValue: 0,
    counter: 'Set the value'
}

export const counterReducer = (state = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case 'INCREMENT-COUNTER': {
            return {
                ...state, startValue: state.startValue + 1
            }
        }
        case 'SET-COUNTER-FROM-START-VALUE': {
            return {
                ...state, counter: state.startValue
            }
        }
        case 'CHANGE-START-VALUE': {
            return {
                ...state, startValue:action.payload.newValue
            }
        }
        case 'CHANGE-MAX-VALUE': {
            return {
                ...state, maxValue: action.payload.newValue
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

type IncrementValueACType = ReturnType<typeof incrementValueAC>
export const incrementValueAC = () => {
    return {
        type: 'INCREMENT-COUNTER',
        payload: {

        }
    } as const
}

type setCounterFromStartValueACType = ReturnType<typeof setCounterFromStartValueAC>
export const setCounterFromStartValueAC = () => {
    return {
        type: 'SET-COUNTER-FROM-START-VALUE',
        payload: {

        }
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
