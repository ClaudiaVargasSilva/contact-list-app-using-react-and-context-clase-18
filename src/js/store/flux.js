const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contactList: [],
			idDelete: "",
			contactToEdit: {}
		},
		actions: {
			getData: str => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agende_claudia")
					.then(res => res.json())
					.then(data => setStore({ contactList: data }))
					.catch(error => console.log(error));
			},
			addContact: user => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", // or 'POST'
					body: JSON.stringify(user), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", response))
					.catch(error => console.error("Error:", error));
			},
			addidDelete: id => {
				setStore({ idDelete: id });
			},
			removeContact: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + store.idDelete, {
					method: "DELETE"
				}).then(res => {
					if (res.ok) {
						getActions().getData();
					}
				});
			},
			editContact: (id, contact) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(res => res.json())
					.then(results => console.log(setStore({ contact: results }), "estoy en setStore"))
					.catch(error => console.log("Error", error));
			},
			getContact: contact => {
				setStore({ contactToEdit: contact });
			}
		}
	};
};

export default getState;
