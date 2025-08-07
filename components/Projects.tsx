import React, { useState } from "react";
import projectOne from "@/public/images/project-one.png";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionTitle from "./SectionTitle";
import SectionOverlayText from "./SectionOverlayText";
import { createPortal } from "react-dom";
import projectDetailsOne from "@/public/images/project-details-1.png";
import projectDetailsTwo from "@/public/images/project-details-2.png";
import techshopBig from "@/public/images/techshop-big.png";
import projectDetailsCorrelation from "@/public/images/project-details-correlation.png";
import questionderechercheOne from "@/public/images/question_de_recherche.png";
import questionrechercheoneparttwo from "@/public/images/question_de_recherche_part_two.png";
import questionrecherchetwo from "@/public/images/question_de_recherche_two.png";
import questionrecherchethree from "@/public/images/question_de_recherche_three.png";
import questionrecherchefour from "@/public/images/question_de_recherche_four.png";
import questionrecherchefive from "@/public/images/question_de_recherche_five.png";

const projects = [
  {
    name: "Analyse des performances des ventes",
    description: `Dans les secteurs du commerce de détail et de gros, une gestion efficace des ventes et des stocks est essentielle pour maximiser la rentabilité et assurer l'efficacité opérationnelle. Des stratégies de tarification inefficaces, une rotation lente des stocks ou une dépendance excessive à certains fournisseurs peuvent entraîner des pertes financières importantes`,
    tags: ["SQL", "Python", "Power BI"],
    category: "BI Solution",
    image: projectOne,
    bigImg: techshopBig,
  },
  // {
  //   name: "Edumaster",
  //   description: `Edumaster is a comprehensive online learning platform that empowers students and educators alike to explore new horizons in education. The platform offers a rich array of courses and educational resources that span multiple disciplines and skill levels. Edumaster's innovative approach to course delivery emphasizes engagement and interactivity, leveraging multimedia elements, including videos, animations, quizzes, and interactive exercises, to create immersive learning experiences. Edumaster offers personalized learning journeys tailored to individual goals, preferences, and learning styles. The platform adapts to the pace and progress of each student, providing targeted recommendations and feedback that support continuous improvement and mastery. The platform also offers a comprehensive suite of features for educators, including course authoring tools, analytics dashboards, and communication channels. Edumaster fosters a vibrant community of learners and educators who collaborate and connect through the platform. Discussion forums, peer reviews, group projects, and live sessions create opportunities for meaningful interaction and knowledge exchange. The platform is optimized for accessibility, offering features such as closed captioning, screen reader compatibility, and multilingual support. Looking to the future, Edumaster is poised to lead the way in shaping the future of education, with plans to incorporate cutting-edge technologies such as virtual reality and artificial intelligence.`,
  //   tags: ["design", "frontend", "backend"],
  //   category: "Online Learning Platform",
  //   image: projectTwo,
  //   bigImg: edumasterBig,
  // // },
  // {
  //   name: "QuickBite",
  //   description: `QuickBite is a groundbreaking mobile app that redefines the food delivery experience, offering users a seamless, user-friendly, and innovative way to satisfy their cravings with just a few taps on their smartphones. The app's intuitive interface allows users to browse a vast selection of restaurants and cuisines, from local favorites to international delicacies. QuickBite offers real-time order tracking, allowing users to monitor the status of their delivery from preparation to arrival. QuickBite has established a highly efficient delivery network, partnering with a wide range of restaurants and local eateries to offer users an extensive selection of options. The app's sophisticated logistics system optimizes delivery routes and dispatches, ensuring that orders are fulfilled promptly and accurately. QuickBite prioritizes user-centric design, making the app accessible and easy to use for everyone. The app's clean and modern interface is complemented by seamless navigation and intuitive controls. To further enhance customer satisfaction and engagement, QuickBite offers a variety of promotions and loyalty programs. Users can take advantage of exclusive discounts, special offers, and rewards that incentivize repeat orders and foster brand loyalty. QuickBite is committed to ensuring the highest standards of quality and sustainability in its operations. The app collaborates with restaurants to ensure that food is delivered fresh and in an eco-friendly manner.`,
  //   tags: ["ui/ux design", "mobile development"],
  //   category: "Food Delivery Mobile App",
  //   image: projectThree,
  //   bigImg: quickbiteBig,
  // },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  useGSAP(() => {
    gsap.from(".single-project", {
      opacity: 0,
      stagger: 0.2,
      scale: 0,
      scrollTrigger: {
        trigger: ".project-list",
        start: "top 60%",
        end: "top 20%",
      },
    });
  });
  return (
    <>
      <section id="projects" className="projects section position-relative">
        <SectionOverlayText text="projects" />
        <SectionTitle subtitle="Some of my most recent projects" title="My Featured Projects" />
        <div className="row pb-60 project-list g-4">
          {projects.map((project) => (
            <div key={project.name} onClick={() => setCurrentProject(project)} className="col-sm-6 col-lg-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div className="single-project">
                <div className="project-card">
                  <div className="card-inner"></div>
                  <Image src={project.image} className="img-fluid w-100 card-img h-100" alt="" />
                  <div className="card-arrow">
                    <div className="arrow-inner">
                      <i className="ph ph-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p>{project.category}</p>
                  <div className="tags d-flex align-items-center gap-1">
                    {project.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span> {i < project.tags.length - 1 && "-"}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12">
          <Link href="#how_i_work" className="d-flex gap-4 align-items-center next-chapter">
            <span className="page">07/11</span>
            <span className="next">Next Chapter</span>
            <i className="ph ph-arrow-elbow-right-down"></i>
          </Link>
        </div>
      </section>
      {createPortal(
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close">
                  <i className="ph ph-x"></i>
                </button>
                <Image src={currentProject.bigImg} className="w-100 img-fluid project-details-img rounded-3 mb-3 mb-xl-4" alt="" />
                <div className="row gx-4 gy-4 gy-md-0">
                  <div className="col-md-7 col-xl-9">
                    <h1 className="mb-3 fw-semibold" id="project-title">
                      {currentProject.name}
                    </h1>
                    <p className="mb-4 mb-xl-5">
                      🧩 Problématique d’affaires – Optimisation des ventes et de la gestion des stocks <br /> Dans les secteurs du commerce de détail et de gros, une gestion efficace des ventes et des stocks est essentielle pour maximiser la rentabilité et assurer l&apos;efficacité opérationnelle.
                      Des stratégies de tarification inefficaces, une rotation lente des stocks ou une dépendance excessive à certains fournisseurs peuvent entraîner des pertes financières importantes
                    </p>
                    <h2 className="mb-3 fw-semibold">🎯 Objectifs du Projet</h2>
                    <p className="mb-4">Cette analyse vise à fournir des insights basés sur les données pour orienter la prise de décision stratégique en répondant aux objectifs suivants:</p>
                    <ul className="list-plus">
                      <li>🔍 Identifier les marques sous-performantes nécessitant des ajustements de prix, des promotions ou un repositionnement produit.</li>
                      <li>📈 Mettre en évidence les fournisseurs les plus performants, en termes de chiffre d’affaires et de contribution à la marge brute.</li>
                      <li>📦 Analyser l’impact des achats en gros sur le coût unitaire et les marges bénéficiaires, afin d’optimiser les stratégies d’approvisionnement.</li>
                      <li>🔄 Évaluer la rotation des stocks pour repérer les produits à faible écoulement et réduire les coûts de stockage.</li>
                      <li>💰 Comparer la rentabilité des fournisseurs, en distinguant les plus rentables des moins performants afin d’améliorer la gestion des partenariats.</li>
                    </ul>
                  </div>
                  <div className="col-md-5 col-xl-3">
                    <div className="right-bar">
                      <div>
                        <p className="mb-1">Client</p>
                        <h6 className="fw-semibold">Job search</h6>
                      </div>
                      <div>
                        <p className="mb-1">Category</p>
                        <h6 className="fw-semibold">Data Analysis</h6>
                      </div>
                      <div>
                        <p className="mb-1">Start Date</p>
                        <h6 className="fw-semibold">01/04/2025</h6>
                      </div>
                      <div>
                        <p className="mb-1">End Date</p>
                        <h6 className="fw-semibold">15/04/2025</h6>
                      </div>
                      <div>
                        <p className="mb-1">Tools</p>
                        <h6 className="fw-semibold">SQL, Python, Power BI</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="fw-medium mb-2">Analyse exploratoire des données</h3>
                  <p className="mb-4">Statistiques récapitulatives:</p>
                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={projectDetailsOne} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                    <div className="col-md-6">
                      <Image src={projectDetailsTwo} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>
                  <h4 className="mb-3">📉 Analyse des Valeurs Négatives, Nulles et Valeurs Extrêmes:</h4>
                  <p className="mb-4">Developed a website for a non-profit organization aimed at raising awareness and funds for environmental conservation. The site features educational content, event management, and donation capabilities.</p>
                  <ul className="bullet mb-4 pb-3 mb-xl-5">
                    <h5>🔸 Valeurs Négatives et Nulles: </h5>
                    <li>Gross Profit : Minimum de -52 002,78, signalant des pertes potentielles dues à des coûts élevés ou à des remises importantes..</li>
                    <li>Profit Margin : Minimum de -∞, indiquant des cas où les revenus sont nuls ou inférieurs aux coûts totaux, générant des marges négatives extrêmes.</li>
                    <li>Total Sales Quantity & Sales Dollars : Certains produits affichent zéro vente malgré un achat, ce qui suggère un stock obsolète ou à faible rotation.</li>
                    <h5>🔸 Outliers détectés via de fortes déviations standard:</h5>
                    <li>Purchase Price & Actual Price : Les valeurs maximales (5 681,81 et 7 499,99) sont bien au-dessus des moyennes (24,39 et 35,64), indiquant la présence de produits premium ou de cas isolés à très forte valeur.</li>
                    <li>Freight Cost : Variation extrême de 0,09 à 257 032,07, reflétant des inefficacités logistiques, des envois en vrac ou des coûts d’expédition très irréguliers selon les produits.</li>
                    <li>Stock Turnover : Allant de 0 à 274,5, cela montre que certains produits se vendent très rapidement alors que d&apos;autres restent invendus. Une valeur &gt; 1 indique que les ventes dépassent les achats grâce à un ancien stock utilisé pour honorer les commandes.</li>
                  </ul>

                  <h4 className="mb-3">🧹 Filtrage des Données</h4>
                  <p className="mb-4">Pour améliorer la fiabilité des analyses et garantir des insights exploitables, certaines observations ont été exclues selon les critères suivants :</p>
                  <ul className="bullet mb-4 pb-3 mb-xl-5">
                    <li>Gross Profit ≤ 0 : Élimination des transactions non rentables ou générant des pertes.</li>
                    <li>Profit Margin ≤ 0 : Exclusion des ventes avec marge nulle ou négative pour se concentrer sur les transactions profitables.</li>
                    <li>Total Sales Quantity = 0 : Suppression des produits achetés mais jamais vendus, susceptibles de fausser l’analyse des performances.</li>
                  </ul>

                  <h4 className="mb-3">🔗 Corrélation entre les Variables (Correlation Insights)</h4>
                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={projectDetailsCorrelation} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>
                  <ul className="bullet mb-4 pb-3 mb-xl-5">
                    <li>Purchase Price vs. Total Sales Dollars & Gross Profit : Corrélation faible (−0,012 et −0,016), indiquant que les variations de prix d&apos;achat n’ont pas d’impact significatif sur le revenu ou le profit généré.</li>
                    <li>Total Purchase Quantity vs. Total Sales Quantity : Corrélation très forte (0,999), confirmant une excellente rotation des stocks et une cohérence entre achats et ventes.</li>
                    <li>Profit Margin vs. Total Sales Price : Corrélation négative (−0,179), suggérant que l’augmentation des prix de vente peut entraîner une baisse des marges, possiblement en raison de pressions concurrentielles.</li>
                    <li>Stock Turnover vs. Gross Profit & Profit Margin : Corrélations négatives faibles (−0,038 et −0,055), montrant qu’un écoulement rapide des stocks n’est pas systématiquement associé à une meilleure rentabilité.</li>
                  </ul>

                  <h4 className="mb-3">❓ Question de recherche 1 : Quelles marques nécessitent des ajustements de prix ou de promotion ?</h4>
                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={questionderechercheOne} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>
                  <p className="mb-4">
                    🔍 Observation clé : <br />
                    198 marques présentent de faibles ventes mais des marges bénéficiaires élevées, ce qui pourrait être exploité grâce à un marketing ciblé, des promotions ou des optimisations de prix afin d’augmenter le volume sans compromettre la rentabilité.
                  </p>

                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={questionrechercheoneparttwo} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>

                  <h4 className="mb-3">❓ Question de recherche 2 : Quels sont les fournisseurs les plus dominants et quels risques leur concentration implique-t-elle ?</h4>

                  <p className="mb-4">
                    🔍 Observation clé : <br />
                    Les 10 principaux fournisseurs représentent 65,69 % des achats totaux, tandis que tous les autres fournisseurs ne totalisent que 34,31 %.
                  </p>
                  <p className="mb-4">
                    ⚠️ Interprétation : <br />
                    Cette forte dépendance à un nombre restreint de fournisseurs peut exposer l’entreprise à des risques de rupture de la chaîne d’approvisionnement, de négociation déséquilibrée ou de perturbations imprévues.
                  </p>

                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={questionrecherchetwo} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>

                  <h4 className="mb-3">❓ Question de recherche 3 : Quel est l’impact des achats en grande quantité sur le coût unitaire ?</h4>

                  <p className="mb-4">
                    🔍 Observation clé : <br />
                    Les commandes de grande taille permettent d’obtenir un coût unitaire moyen de 10,78 $, soit une réduction de 72 % par rapport aux petites commandes (39,06 $).
                  </p>
                  <p className="mb-4">
                    ⚠️ Interprétation : <br /> Les stratégies de tarification par volume incitent à passer des commandes plus importantes, ce qui permet de réduire les coûts d’achat, augmenter les marges, et stimuler les ventes totales tout en maintenant la rentabilité.
                  </p>

                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={questionrecherchethree} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>

                  <h4 className="mb-3">❓ Question de recherche 4 : Quels fournisseurs présentent une faible rotation des stocks et comment cela affecte-t-il la rentabilité ?</h4>

                  <p className="mb-4">
                    🔍 Observation clé : <br />
                    Le capital immobilisé dans les stocks invendus s’élève à 2,71 millions de dollars.
                  </p>
                  <p className="mb-4">
                    ⚠️ Interprétation : <br /> Une rotation lente des stocks engendre des coûts de stockage élevés, diminue l’efficacité des flux de trésorerie et impacte négativement la rentabilité globale de l’entreprise.
                  </p>

                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={questionrecherchefour} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>

                  <h4 className="mb-3">❓ Question de recherche 5 : Comment les marges varient-elles entre les fournisseurs performants et sous-performants ?</h4>

                  <p className="mb-4">
                    🔍 Observation clé : <br />
                    Fournisseurs performants : Marge moyenne de 31,17 % avec un intervalle de confiance à 95 % entre 30,74 % et 31,61 %.
                    <br />
                    Fournisseurs sous-performants : Marge moyenne de 41,55 % avec un intervalle de confiance à 95 % entre 40,48 % et 42,62 %.
                  </p>
                  <p className="mb-4">
                    ⚠️ Interprétation : <br /> Les fournisseurs sous-performants affichent des marges plus élevées mais peinent à générer du volume de ventes, ce qui peut révéler des inefficacités de tarification ou un manque de portée commerciale.
                  </p>

                  <div className="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                    <div className="col-md-6">
                      <Image src={questionrecherchefive} className="w-100 img-fluid rounded-3" alt="" />
                    </div>
                  </div>

                  <h4 className="mb-3">❓ Question de recherche 6 : Existe-t-il une différence statistiquement significative entre les marges des fournisseurs performants et sous-performants ?</h4>

                  <p className="mb-4">
                    🧪 Test d’hypothèse : <br /> H₀ (Hypothèse nulle) : Il n’y a pas de différence significative entre les marges bénéficiaires des deux groupes de fournisseurs.
                    <br /> H₁ (Hypothèse alternative) : Il existe une différence significative entre les marges bénéficiaires des fournisseurs performants et sous-performants.
                  </p>
                  <p className="mb-4">
                    ⚠️ Interprétation : <br /> Les fournisseurs sous-performants affichent des marges plus élevées mais peinent à générer du volume de ventes, ce qui peut révéler des inefficacités de tarification ou un manque de portée commerciale.
                  </p>
                  <p className="mb-4">
                    ✅ Résultat : <br /> L’hypothèse nulle est rejetée, ce qui confirme que les deux groupes présentent des modèles de rentabilité distincts.
                  </p>
                  <p className="mb-4">
                    💡 Implication stratégique :
                    <br /> Les fournisseurs à fortes marges pourraient miser sur des stratégies tarifaires efficaces.
                    <br />
                    Les fournisseurs à fort volume de ventes devraient se concentrer sur l’optimisation des coûts pour améliorer leurs marges.
                  </p>

                  <h2 className="mb-3 fw-semibold">✅ Recommandations Finales</h2>
                  <ul className="list-plus">
                    <li>Réévaluer la stratégie de tarification des marques à faibles ventes mais à forte marge afin d’augmenter les volumes sans compromettre la rentabilité.</li>
                    <li>Diversifier les partenariats fournisseurs pour réduire la dépendance envers quelques fournisseurs et limiter les risques liés à la chaîne d’approvisionnement.</li>
                    <li>Exploiter les avantages des achats en gros afin de maintenir des prix compétitifs tout en optimisant la gestion des stocks.</li>
                    <li>Optimiser les stocks à faible rotation en ajustant les quantités commandées, en lançant des ventes de liquidation ou en révisant les stratégies d’entreposage.</li>
                    <li>Renforcer les efforts de marketing et de distribution pour les fournisseurs sous-performants afin d’augmenter les volumes de ventes tout en maintenant les marges bénéficiaires.</li>
                    <li>En appliquant ces recommandations, l’entreprise pourra améliorer durablement sa rentabilité, réduire ses risques opérationnels et accroître son efficacité globale.</li>
                  </ul>

                  <div className="outcome">
                    <h5 className="mb-3">📂 Accès au projet complet:</h5>
                    <p>Les ressources détaillées de ce projet (code source, visualisations, données nettoyées et analyses avancées) sont disponibles sur demande.</p>
                    <p>👉 Pour y accéder, veuillez remplir le formulaire ci-dessous afin d’obtenir une autorisation d’accès au dépôt GitHub</p>
                    <p>Une fois votre demande examinée, vous recevrez un lien GitHub privé si elle est approuvée. 🔒 Cette procédure permet de protéger le contenu du projet tout en partageant les ressources avec des personnes sérieusement intéressées à des fins professionnelles ou académiques.</p>
                  </div>
                  <form className="contact-form full-width">
                    <h3 className="mb-3">Have project in mind? Let&apos;s discuss</h3>
                    <p className="mb-4 mb-xl-5 pb-2">Get in touch with us to see how we can help you with your project</p>
                    <div className="row g-4 g-xl-5">
                      <div className="col-sm-6 contact-input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="user_name" placeholder="Your name" required />
                      </div>
                      <div className="col-sm-6 contact-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="user_email" placeholder="Your e-mail" required />
                      </div>
                      <div className="col-12 contact-input">
                        <label htmlFor="service">Service</label>
                        <input name="service" placeholder="Your Serivice" />
                      </div>
                      <div className="col-12 contact-input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Your message"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="submit-btn position-relative">
                          <div className="waves-top-md">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          submit
                          <div className="waves-bottom-md">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default Projects;
