export type Contact = {
  name: string;
  phone: string;
};

export const contacts: Contact[] = [
  { name: "Elvin", phone: "050-123-45-67" },
  { name: "Nigar", phone: "055-765-43-21" },
  { name: "Ayxan", phone: "051-888-99-00" },
  { name: "Tunar", phone: "070-333-22-11" },
  { name: "Zaur", phone: "077-111-22-33" },
];

export const searchName: string = "Ayxan";

// Linear search function
 function linearSearch(contacts: Contact[], name: string): Contact | null {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      return contacts[i];
    }
  }
  return null;
}

const result = linearSearch(contacts, searchName);

if (result) {
  console.log(` ✅ Found: ${result.name} - ${result.phone}`);
} else {
  console.log("❌ Name not found.");
}

