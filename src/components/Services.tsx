import React from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServiceCard = ({ title, description, icon: Icon }) => (
  <Card className="h-full">
    <CardHeader>
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardContent>
  </Card>
);

export const Services = () => {
  const services = [
    {
      title: "Zaawansowane chatboty AI dla biznesu",
      description: "Zautomatyzuj obsługę klienta, generuj leady i zwiększ sprzedaż dzięki inteligentnym chatbotom dopasowanym do Twoich potrzeb.",
      icon: MessageCircle
    },
    {
      title: "Kursy online z AI dla biznesu",
      description: "Naucz się praktycznego wykorzystania AI w swoim biznesie. Zdobądź wiedzę i umiejętności do automatyzacji procesów i analizy danych.",
      icon: CheckCircle
    },
    {
      title: "Doradztwo w zakresie wdrażania AI",
      description: "Odkryj, jak AI może pomóc Ci w realizacji misji Twojej organizacji. Zoptymalizuj procesy i zwiększ zasięg swoich działań.",
      icon: CheckCircle
    },
    {
      title: "Indywidualne konsultacje",
      description: "Odzyskaj czas i zredukuj stres dzięki inteligentnym narzędziom i technikom. Naucz się wykorzystywać AI do automatyzacji zadań.",
      icon: CheckCircle
    }
  ];

  return (
    <section id="oferta" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Moja oferta</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};