import React from "react";
import { Award, Users, Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/Card";

const AboutUs = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      text: "Years of Experience",
    },
    {
      icon: Users,
      number: "500+",
      text: "Events Held",
    },
    {
      icon: Clock,
      number: "24/7",
      text: "Personalized Attention",
    },
    {
      icon: Heart,
      number: "100%",
      text: "Satisfaction Guaranteed",
    },
  ];

  return (
    <section id="aboutus" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Our History
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                For over 15 years, NTP Dinasty Flowers has been synonymous with
                excellence and creativity in the world of floral decoration and
                special events.
              </p>
            </div>
            <div className="mt-8 p-6 bg-card/50 rounded-2xl border border-border/50">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Our Filosophy
              </h3>
              <p className="text-muted-foreground">
                We believe that every event is unique and deserves personalized
                attention. We specialize in capturing the essence of each
                celebration and translating it into decorations that reflect our
                clients' personalities and dreams.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-hero text-white font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:-translate-y-1">
                Conoce Nuestro Equipo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="hover-lift border-0 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-gold">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.text}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>          
        </div>

        {/* Mision y Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Mision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating unique and memorable experiences through exceptional floral arrangements, combining creativity, elegance, and personalized attention to make our clients' dreams come true for every special event.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the leading company in floral decoration and special events, setting new standards of excellence, innovation, and customer satisfaction in every project we undertake.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
