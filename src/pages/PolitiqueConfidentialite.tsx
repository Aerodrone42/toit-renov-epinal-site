
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SEOHead
        title="Politique de Confidentialité"
        description="Politique de confidentialité de RÉNOVATION TECHNI TOIT, informations sur la collecte et le traitement de vos données."
        keywords="politique confidentialité, RGPD, données personnelles, RÉNOVATION TECHNI TOIT"
      />

      <Header />

      <main className="py-12 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6">
            <section>
              <p className="mb-4">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              <p className="mb-4">RÉNOVATION TECHNI TOIT s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous visitez notre site web ou utilisez nos services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Collecte d'informations</h2>
              <p className="mb-4">Nous recueillons des informations lorsque vous remplissez un formulaire de contact ou demandez un devis sur notre site. Les informations recueillies peuvent inclure votre nom, adresse e-mail, numéro de téléphone et adresse postale.</p>
              <p>Nous collectons également automatiquement des informations sur votre visite à travers des cookies et technologies similaires, comme expliqué dans notre politique de cookies.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Utilisation des informations</h2>
              <p className="mb-2">Les informations que nous recueillons peuvent être utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Vous fournir un contenu et des services personnalisés</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous contacter concernant vos demandes de devis ou d'informations</li>
                <li>Administrer un concours, une promotion ou une enquête</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Protection des informations</h2>
              <p className="mb-4">Nous mettons en œuvre une variété de mesures de sécurité pour protéger vos informations personnelles. Nous utilisons des protocoles de cryptage avancés pour protéger les informations sensibles transmises en ligne.</p>
              <p>Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d'effectuer un travail spécifique ont accès aux informations personnelles identifiables.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Cookies</h2>
              <p className="mb-4">Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser notre trafic et à des fins publicitaires. Vous pouvez contrôler l'utilisation des cookies au niveau du navigateur individuel, mais si vous désactivez les cookies, cela peut limiter votre utilisation de certaines fonctionnalités de notre site web.</p>
              <p>Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre <a href="#" className="text-roofing-red hover:underline">politique de cookies</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Divulgation à des tiers</h2>
              <p>Nous ne vendons, n'échangeons ni ne transférons de quelque autre manière que ce soit vos informations personnelles identifiables à des tiers. Cela n'inclut pas les tierces parties de confiance qui nous aident à exploiter notre site web ou à mener nos activités, tant que ces parties conviennent de garder ces informations confidentielles.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Vos droits</h2>
              <p className="mb-4">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données personnelles</li>
                <li>Droit à l'effacement de vos données personnelles</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="mt-4">Pour exercer ces droits, veuillez nous contacter à l'adresse email : chatellepierre6@gmail.com</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Modifications de notre politique de confidentialité</h2>
              <p>Si nous décidons de modifier notre politique de confidentialité, nous publierons ces modifications sur cette page et mettrons à jour la date de modification.</p>
            </section>
          </div>
        </div>
      </main>
      
      <CTA />
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;
