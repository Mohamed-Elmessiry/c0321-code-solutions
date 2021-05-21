function graduate(credential) {
  return function nameNcredentials(fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Mohamed Elmessiry'));
console.log(lawSchool('Mohamed Elmessiry'));
