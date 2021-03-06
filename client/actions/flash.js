import { DELETE_FLASH_MESSAGE, ADD_NEW_FLASH_MESSAGE } from "../types";

export function addFlashMessage(message) {
	return {
		type: ADD_NEW_FLASH_MESSAGE,
		message
	};
}

export function deleteFlashMessage(id) {
	return {
		type: DELETE_FLASH_MESSAGE,
		id
	};
}
