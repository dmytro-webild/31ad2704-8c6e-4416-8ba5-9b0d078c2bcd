"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { AlertCircle, Clock, Shield, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Services",          id: "services"},
        {
          name: "Portfolio",          id: "portfolio"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="FVM Créations"
      button={{
        text: "Obtenir ma démo gratuite",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Obtenez plus de clients avec un site web qui travaille pour vous 24/7"
      description="FVM Créations aide les entreprises locales à briller en ligne. Transformez vos visiteurs en clients fidèles grâce à un design moderne, rapide et performant."
      testimonials={[
        {
          name: "Marc L.",          handle: "Restaurant La Table",          testimonial: "Mon site ne générait rien avant FVM. Maintenant, les réservations arrivent tous les jours !",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/professional-portrait-of-a-local-busines-1777417917863-667aacaa.png"},
        {
          name: "Sophie P.",          handle: "Salon Coiffure Chic",          testimonial: "Le design est magnifique et mes clientes adorent la simplicité pour prendre rendez-vous.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/friendly-local-cafe-owner-looking-confid-1777417925906-58dda8da.png"},
        {
          name: "Thomas V.",          handle: "Construction Bâtir",          testimonial: "Une visibilité pro qui nous apporte des devis qualifiés chaque semaine.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/construction-business-manager-confident--1777417934540-dc041622.png?_wi=1"},
        {
          name: "Claire L.",          handle: "Atelier Couture",          testimonial: "Rapidité et efficacité, le service client est tout simplement génial.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/woman-salon-manager-smiling-clean-profes-1777417942416-3b96764c.png?_wi=1"},
        {
          name: "Paul D.",          handle: "Nettoyage Expert",          testimonial: "Un investissement rentabilisé en moins de deux mois grâce au SEO local.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/local-service-store-owner-friendly-smile-1777417953402-af81d48e.png?_wi=1"},
      ]}
      buttons={[
        {
          text: "Obtenir ma démo gratuite",          href: "#contact"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777470076438-cu9gnqft.png"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/professional-portrait-of-a-local-busines-1777418016934-7900f877.png",          alt: "Client 1"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/friendly-local-cafe-owner-looking-confid-1777418025122-ab83028a.png",          alt: "Client 2"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/business-portrait-professional-1777418039957-ad0333f1.png",          alt: "Client 3"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/business-portrait-professional-1777418049081-d818b5e6.png",          alt: "Client 4"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/business-portrait-professional-1777418057536-e8c0b4e1.png",          alt: "Client 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Design Moderne"},
        {
          type: "text",          text: "Optimisation SEO"},
        {
          type: "text",          text: "Accès Mobile"},
        {
          type: "text",          text: "Support Dédié"},
        {
          type: "text",          text: "Croissance ROI"},
      ]}
    />
  </div>

  <div id="problem" data-section="problem">
      <AboutMetric
      useInvertedBackground={false}
      title="Ne perdez plus de clients potentiels en ligne"
      metrics={[
        {
          label: "Entreprises locales sans site",          value: "40%",          icon: AlertCircle,
        },
        {
          label: "Clients qui perdent confiance",          value: "75%",          icon: Users,
        },
        {
          label: "Secondes avant qu'un visiteur quitte ",          value: "3s",          icon: Clock,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="solution" data-section="solution">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Design Professionnel",          description: "Un look qui reflète la qualité de vos services locaux.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/professional-local-restaurant-website-de-1777417891562-a2177b53.png"},
        {
          title: "Optimisation Mobile",          description: "La majorité de vos clients vous cherchent sur leur téléphone.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/modern-construction-company-website-inte-1777417900202-1fec7b5e.png"},
        {
          title: "Génération de leads",          description: "Des formulaires conçus pour transformer le visiteur en client.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777469771967-hkk211aw.png"},
      ]}
      title="Votre solution simple pour croître"
      description="Nous éliminons la complexité technique pour que vous puissiez vous concentrer sur votre métier tout en gagnant des parts de marché en ligne."
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",          price: "Sur mesure",          name: "Création Complète",          features: [
            "Design moderne",            "Optimisation SEO locale",            "Mobile responsive",            "Contact direct"],
          buttons: [
            {
              text: "Demander une consultation",              href: "#contact"},
          ],
        },
        {
          id: "p2",          price: "Sur mesure",          name: "Refonte Express",          features: [
            "Modernisation UI",            "Vitesse optimisée",            "Audit SEO rapide",            "Support 30 jours"],
          buttons: [
            {
              text: "Demander une consultation",              href: "#contact"},
          ],
        },
        {
          id: "p3",          price: "Contactez-nous",          name: "Maintenance & Leads",          features: [
            "Gestion hébergement",            "Mises à jour",            "Suivi performances",            "Stratégie leads"],
          buttons: [
            {
              text: "Demander une consultation",              href: "#contact"},
          ],
        },
      ]}
      title="Nos services de création"
      description="Des forfaits clairs, sans coûts cachés et adaptés à vos besoins de croissance."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      animationType="slide-up"
      useInvertedBackground={true}
      products={[
        {
          id: "item1",          name: "Restaurant Gastronomique",          price: "En ligne",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777468887237-isdxduuk.png"},
        {
          id: "item2",          name: "Entrepreneur Construction",          price: "En ligne",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777468549020-k44si2l3.png"},
        {
          id: "item3",          name: "Salon Beauté Chic",          price: "En ligne",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777468446679-rcmrm4o7.png"},
        {
          id: "item4",          name: "Garage Automobile Moderne",          price: "En ligne",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777466977443-9siims7t.png"},
        {
          id: "item5",          name: "Services Nettoyage",          price: "En ligne",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777468659732-oztnwqwi.png"},
        {
          id: "item6",          name: "Cabinet Conseils",          price: "En ligne",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777468160709-o6d1gu7i.png"},
      ]}
      title="Exemples de réalisations"
      description="Découvrez comment nous aidons nos clients à se démarquer dans leur secteur local, comme cet atelier automobile entièrement digitalisé."
    />
  </div>

  <div id="why-choose" data-section="why-choose">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "100%",          title: "Accompagnement",          description: "Zéro stress technique.",          icon: Shield,
        },
        {
          id: "m2",          value: "Vite ",          title: "Déploiement",          description: "Votre site est prêt en quelques jours.",          icon: Zap,
        },
        {
          id: "m3",          value: "Axé ",          title: "Résultats",          description: "Nous visons la croissance.",          icon: TrendingUp,
        },
      ]}
      title="Pourquoi choisir FVM ?"
      description="Nous garantissons des résultats concrets pour votre visibilité locale."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          title: "Service exceptionnel",          quote: "FVM a transformé ma visibilité. Je ne pourrais plus m'en passer.",          name: "Julie G.",          role: "Propriétaire",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777470408328-qunwbu5s.png"},
        {
          id: "t2",          title: "Approche humaine",          quote: "Enfin une agence qui comprend les petits commerces locaux.",          name: "Thomas V.",          role: "Gérant",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777470899740-i5j8xq5z.png"},
        {
          id: "t3",          title: "Résultats concrets",          quote: "Mes appels ont doublé en un mois. Incroyable travail.",          name: "Claire L.",          role: "Directrice",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/uploaded-1777471539507-hyw29wee.png"},
        {
          id: "t4",          title: "Très efficace",          quote: "Professionnel, rapide, et abordable. Le combo parfait.",          name: "Paul D.",          role: "Entrepreneur",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/woman-salon-manager-smiling-clean-profes-1777417942416-3b96764c.png?_wi=2"},
        {
          id: "t5",          title: "Recommandé à 100%",          quote: "Un site qui enfin nous ressemble.",          name: "Sophie M.",          role: "Boutiquière",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D01LklNGMnlvoqnbP78XCtO1fr/local-service-store-owner-friendly-smile-1777417953402-af81d48e.png?_wi=2"},
      ]}
      title="Ils nous font confiance"
      description="Des partenaires locaux satisfaits par notre expertise web."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated"}}
      text="Prêt à propulser votre entreprise locale ? Obtenez votre démo gratuite dès aujourd'hui."
      buttons={[
        {
          text: "Contactez-nous",          href: "mailto:contact@fvmcreations.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Accueil",              href: "#"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="FVM Créations"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
