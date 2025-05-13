
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const MentionsLegales = () => {
  return (
    <>
      <SEOHead
        title="Mentions Légales"
        description="Mentions légales de RÉNOVATION TECHNI TOIT, entreprise de couverture et rénovation extérieure basée à Igney dans les Vosges."
        keywords="mentions légales, RÉNOVATION TECHNI TOIT, couvreur Vosges, artisan toiture Épinal"
      />

      <Header />

      <main className="py-12 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-4">Informations légales</h2>
              <p className="mb-2"><strong>Dénomination :</strong> RÉNOVATION TECHNI TOIT</p>
              <p className="mb-2"><strong>Forme juridique :</strong> Entreprise individuelle</p>
              <p className="mb-2"><strong>Adresse :</strong> 36 rue de Lorraine, 88150 IGNEY, France</p>
              <p className="mb-2"><strong>Téléphone :</strong> 06 02 32 75 57</p>
              <p className="mb-2"><strong>Email :</strong> chatellepierre6@gmail.com</p>
              <p className="mb-2"><strong>SIRET :</strong> 850 700 771 00019</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Directeur de la publication</h2>
              <p>M. Pierre CHATELLE, Gérant de RÉNOVATION TECHNI TOIT</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Hébergement du site</h2>
              <p>[Informations de l'hébergeur - à compléter]</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Propriété intellectuelle</h2>
              <p className="mb-4">L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Limite de responsabilité</h2>
              <p className="mb-4">RÉNOVATION TECHNI TOIT s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de modifier, à tout moment et sans préavis, le contenu. Cependant, RÉNOVATION TECHNI TOIT ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.</p>
              <p>RÉNOVATION TECHNI TOIT décline toute responsabilité :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Pour toute interruption du site</li>
                <li>Pour toute survenance de bogues</li>
                <li>Pour toute inexactitude ou omission dans les informations disponibles sur ce site</li>
                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à la disposition sur ce site</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
};

export default MentionsLegales;
