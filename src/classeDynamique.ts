export function creerClasseDynamique(nom: string) {
    return class {
        static className = nom;
        constructor() {
            console.log('Création d\'une instance de ' + nom);
        }
    };
}