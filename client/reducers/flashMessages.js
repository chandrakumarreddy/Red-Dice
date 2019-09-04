import shortId from "shortid";
import findIndex from "lodash/findIndex";
import { DELETE_FLASH_MESSAGE, ADD_NEW_FLASH_MESSAGE } from "../types";

export default (state = [], action) => {
	switch (action.type) {
		case ADD_NEW_FLASH_MESSAGE:
			return [
				...state,
				{
					id: shortId.generate(),
					type: action.message.type,
					text: action.message.text
				}
			];
		case DELETE_FLASH_MESSAGE:
			let deleteIndex = findIndex(state, { id: action.id });
			return (state = [
				...state.slice(0, deleteIndex),
				...state.slice(deleteIndex + 1)
			]);
		default:
			return state;
	}
};
