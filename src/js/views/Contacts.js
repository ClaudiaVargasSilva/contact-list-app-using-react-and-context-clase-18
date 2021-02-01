import React, { useState, useEffect, useContext } from "react"; //paso 1 para acceder a context
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //paso 2 para acceder a context

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { checkPropTypes } from "prop-types";

export const Contacts = () => {
	const { store, actions } = useContext(Context); //paso 3 para acceder a context
	const [state, setState] = useState({
		showModal: false
	});

	useEffect(() => {
		actions.getData();
	}, []);
	console.log(store.contactList);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactList.map((user, index) => (
							<ContactCard
								key={index}
								contact={user}
								onDelete={() => {
									actions.addidDelete(user.id);
									setState({ showModal: true });
								}}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
