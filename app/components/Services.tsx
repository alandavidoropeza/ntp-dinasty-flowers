import React from 'react'
import { Flower2, Cake, Heart, Apple, Palette, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';


const services = [
  {
    icon: Flower2,
    title: "Florist",
    description: "Elegant and sophisticated floral arrangements for all types of events, from intimate weddings to grand celebrations.",
    features: ["Bridal bouquets", "Centerpieces", "Floral decoration", "Preserved flowers"]
  },
  {
    icon: Cake,
    title: "Pastry & Cakes",
    description: "Artisanal cakes and elegant desserts that combine exceptional flavor with unique and customized designs.",
    features: ["Wedding cakes", "Decorated cupcakes", "Themed desserts", "Candy/dessert table"]
  },
  {
    icon: Heart,
    title: "Decorative Balloons",
    description: "Sophisticated balloon decorations that add color and joy to any special celebration.",
    features: ["Balloon arches", "Decorative sculptures", "Customized balloons", "Ceiling installations"]
  },
  {
    icon: Apple,
    title: "Decorative Fruits",
    description: "Artistic presentations of fresh fruits that combine health, flavor, and visual elegance.",
    features: ["Fruit waterfalls", "Tropical arrangements", "Carved fruits", "Healthy tables"]
  },
  {
    icon: Palette,
    title: "Complete Decoration",
    description: "Comprehensive decoration services that transform any space into the perfect setting.",
    features: ["Ambiance design", "Themed lighting", "Decorative furniture", "Total coordination"]
  },
  {
    icon: Sparkles,
    title: "Special Events",
    description: "Complete planning and execution of unique events with attention to every special detail.",
    features: ["Elegant weddings", "Quinceañeras", "Baptisms", "Themed birthdays"]
  }
];

const Services = () => {
  return (
    <section id='services' className='py-20 bg-gradient-nature'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6'>Our Services</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>We offer a full range of services to make your event a memorable and elegant experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-gold">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground h-16">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className=''>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full border-1 rounded-4xl py-2 hover:cursor-pointer border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className=''>

        </div>

      </div>
    </section>
  )
}

export default Services