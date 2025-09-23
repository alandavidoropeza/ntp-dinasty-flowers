import React from "react";
import heroImage from "@/app/assets/img/img9.jpg";
import Image from "next/image";
import { ArrowRight, Star, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-nature overflow-hidden" >

        <div className="absolute inset-0 z-0">
            <Image src={heroImage} alt="flower hero" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-soft opacity-50"></div>
        </div>

        {/* floatings */}
        <div className="absolute top-20 left-10 animate-float">
            <Heart className="text-accent-rose w-8 h-8 opacity-60" />
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "2s" }} >
            <Star className="text-gold w-6 h-6 opacity-70" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }} >
            <Star className="text-primary w-5 h-5 opacity-50" />
        </div>

        {/* content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
                    We Create
                    <span className="block bg-gradient-hero bg-clip-text text-transparent">
                        Unforgettable Moments
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                    Specialists in elegant floral arrangements for weddings, quinceañeras, baptisms, and special events. We also offer artisan pastries, decorative balloons, and ornamental fruits that transform every celebration into a unique experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <a href="#" className="inline-flex bg-gradient-hero text-white font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:-translate-y-1" >
                        Request a quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    <a href="#" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300" >
                        Gallery
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                            500+
                        </div>
                        <div className="text-muted-foreground font-medium">
                            Events Held
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2">
                            15+
                        </div>
                        <div className="text-muted-foreground font-medium">
                            Years of Experience
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-heading font-bold text-accent-rose mb-2">
                            100%
                        </div>
                        <div className="text-muted-foreground font-medium">
                            Satisfied Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
