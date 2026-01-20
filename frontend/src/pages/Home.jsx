import React, { useState } from 'react';
import { Truck, Shield, Clock, Award, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { companyInfo, services, galleryImages, testimonials, stats, submitQuoteRequest, submitContactForm } from '../mock';
import Header from '../components/Header';
import Footer from '../components/Footer';

const iconMap = {
  truck: Truck,
  settings: Shield,
  package: Clock,
  zap: Award
};

const Home = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    const result = await submitQuoteRequest(quoteForm);
    if (result.success) {
      toast.success(result.message);
      setQuoteForm({ name: '', email: '', phone: '', service: '', details: '' });
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const result = await submitContactForm(contactForm);
    if (result.success) {
      toast.success(result.message);
      setContactForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Reliable Transport for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Civil Engineering Goods</span>
              </h1>
              <p className="text-xl text-gray-600">
                {companyInfo.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg"
                  size="lg"
                >
                  Get Free Quote
                </Button>
                <Button
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
                  size="lg"
                >
                  Our Services
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1590856029620-23a411d1945c?w=600&h=400&fit=crop"
                  alt="Transport Service"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-8 right-8 w-72 h-72 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl -z-0 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Anurag Traders</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience in the transport industry, we specialize in the safe and efficient delivery of construction materials and civil engineering goods. Our dedicated team and modern fleet ensure your materials reach their destination on time, every time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Shield className="text-orange-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Safety First</h3>
                    <p className="text-sm text-gray-600">Full insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-orange-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">On-Time Delivery</h3>
                    <p className="text-sm text-gray-600">99% on-time rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1597476392367-76a58e0f7e8d?w=600&h=500&fit=crop"
                alt="About Us"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive transport solutions tailored for your construction needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Truck;
              return (
                <Card key={service.id} className="border-2 hover:border-orange-500 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="text-orange-600 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-lg font-semibold text-orange-600">{service.pricing}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See our fleet and services in action
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Quote Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Request a quote or contact us for more information</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Quote Request Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="quote-name">Name</Label>
                    <Input
                      id="quote-name"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quote-email">Email</Label>
                    <Input
                      id="quote-email"
                      type="email"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quote-phone">Phone</Label>
                    <Input
                      id="quote-phone"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quote-service">Service Required</Label>
                    <Input
                      id="quote-service"
                      value={quoteForm.service}
                      onChange={(e) => setQuoteForm({...quoteForm, service: e.target.value})}
                      placeholder="e.g., Heavy Material Transport"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quote-details">Additional Details</Label>
                    <Textarea
                      id="quote-details"
                      value={quoteForm.details}
                      onChange={(e) => setQuoteForm({...quoteForm, details: e.target.value})}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Have questions? Reach out to us directly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={4}
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-600" size={20} />
                    <a href={`tel:${companyInfo.phone}`} className="text-gray-700 hover:text-orange-600">{companyInfo.phone}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-orange-600" size={20} />
                    <a href={`mailto:${companyInfo.email}`} className="text-gray-700 hover:text-orange-600 break-all">{companyInfo.email}</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;