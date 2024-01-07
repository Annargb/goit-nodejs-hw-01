const argv = require("yargs").argv;
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;

    case "update":
      const updatedContact = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(updatedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// const actionIndex = process.argv.indexOf("--action");

// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Ann",
//   email: "test@nail.com",
//   phone: "577587841",
// });

// invokeAction({
//   action: "update",
//   id: "VBMxOinGq7tXNQ_LHykFI",
//   name: "Developer Ann",
//   email: "test@nail.com",
//   phone: "577587841",
// });

// invokeAction({ action: "remove", id: "VBMxOinGq7tXNQ_LHykFI" });

invokeAction(argv);
