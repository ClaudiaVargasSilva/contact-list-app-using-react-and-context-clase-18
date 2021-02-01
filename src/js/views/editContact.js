import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		full_name: store.contactToEdit.full_name,
		email: store.contactToEdit.email,
		agenda_slug: "agende_claudia",
		address: store.contactToEdit.address,
		phone: store.contactToEdit.phone
	});

	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
		console.log(user);
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.editContact(store.contactToEdit.id, user);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form onChange={handleChange} onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							defaultValue={user.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							defaultValue={user.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="address"
							defaultValue={user.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="phone"
							defaultValue={user.address}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
