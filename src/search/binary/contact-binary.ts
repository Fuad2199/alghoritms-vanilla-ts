import {type Contact, contacts, searchName} from "../linear/contact-linear";


function binarySearch(contacts: Contact[], name: string): Contact | null {
  let low = 0;
  let high = contacts.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midName = contacts[mid].name;

    if (midName === name) {
      return contacts[mid];
    } else if (midName < name) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null; // tapılmadı
}

const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
const binaryResult = binarySearch(sortedContacts, searchName);