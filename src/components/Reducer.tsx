 
type State={
    count:number,
}
type Action={
    type:'increase',
}|{
    type:'decrease'
}
export function Reducer(state:State,action:Action):State{
    switch (action.type){
        case 'increase':
            return {count:state.count+1};
        case 'decrease':
            return {count:state.count>0?state.count-1:0}
        default:
            throw new Error('Unknown action type');
    }
}
