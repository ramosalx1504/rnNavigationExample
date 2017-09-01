import {INCREMENT} from '../types';

const INITIAL_STATE = {
	number : 0
};

export default (state = INITIAL_STATE, actions) => {
	switch(actions.type){
		case INCREMENT : return {...state, number : state.number +1 }
		default : return state;
	}
}	