import { creerClasseDynamique } from '../classeDynamique';
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement avant tout

describe('Tests sur les classes dynamiques', () => {
    it('devrait créer une instance de la classe dynamique', () => {
        const className = process.env.NOM_CLASSE_DYN || 'nomParDefaut';
        const ClasseDynamique = creerClasseDynamique(className);
        const instance = new ClasseDynamique();
        expect(instance).toBeInstanceOf(ClasseDynamique);
    });

    it('devrait créer une classe avec le nom spécifié', () => {
        const className = process.env.NOM_CLASSE_DYN || 'nomParDefaut';
        const ClasseDynamique = creerClasseDynamique(className);
        expect(ClasseDynamique.className).toBe(className);
    });
});