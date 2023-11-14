import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm({onSubmit}) {
	const [formValidateState, setFormValidateState] = useState({
		title: true,
		text: true,
		date: true
	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid =true;

		if (!formProps.title?.trim().length) {
			setFormValidateState(state => ({...state, title: false}));
			isFormValid = false;
		} else {
			setFormValidateState(state => ({...state, title: true}));
		}

		if (!formProps.text?.trim().length) {
			setFormValidateState(state => ({...state, text: false}));
			isFormValid = false;
		} else {
			setFormValidateState(state => ({...state, text: true}));
		}

		if (!formProps.date) {
			setFormValidateState(state => ({...state, date: false}));
			isFormValid = false;
		} else {
			setFormValidateState(state => ({...state, date: true}));
		}

		if (!isFormValid) {
			return;
		}

		onSubmit(formProps);
	};

	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<input type="text" name="title" id="title" />
			<input type="date" name="date" id="date" />
			<input type="text" name="tag" id="tag" />
			<textarea name="post" id="post" cols="30" rows="10"></textarea>
			<Button>Submit</Button>
		</form>
	);
}

export default JournalForm;