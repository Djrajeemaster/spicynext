'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, Clock, Shield, Zap, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const projectTypes = [
  { value: 'website', label: 'Website Development', icon: '🌐' },
  { value: 'mobile-app', label: 'Mobile App', icon: '📱' },
  { value: 'web-app', label: 'Web Application', icon: '💻' },
  { value: 'ai-integration', label: 'AI Implementation', icon: '🤖' },
  { value: 'product-launch', label: 'Full Product Launch', icon: '🚀' },
  { value: 'other', label: 'Other / Not Sure', icon: '❓' },
];

const budgetRanges = [
  { value: '4-lakh-12-lakh', label: '₹4 Lakh - ₹12 Lakh', description: 'Small projects, MVPs' },
  { value: '12-lakh-28-lakh', label: '₹12 Lakh - ₹28 Lakh', description: 'Medium complexity' },
  { value: '28-lakh-60-lakh', label: '₹28 Lakh - ₹60 Lakh', description: 'Enterprise features' },
  { value: '60-lakh+', label: '₹60 Lakh+', description: 'Complex platforms' },
];

const timelines = [
  { value: 'asap', label: 'ASAP (Rush job)', icon: '⚡' },
  { value: '1-2-months', label: '1-2 months', icon: '🏃' },
  { value: '3-6-months', label: '3-6 months', icon: '🚶' },
  { value: 'flexible', label: 'Flexible timeline', icon: '🧘' },
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string({ required_error: 'Please select a project type.' }),
  budget: z.string({ required_error: 'Please select a budget range.' }),
  timeline: z.string({ required_error: 'Please select a timeline.' }),
  description: z.string().min(20, 'Please provide a more detailed description (at least 20 characters).'),
  features: z.string().optional(),
  hasDesign: z.boolean().default(false),
  needsHosting: z.boolean().default(false),
  needsMaintenance: z.boolean().default(false),
});

export default function GetQuotePage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: undefined,
      budget: undefined,
      timeline: undefined,
      description: '',
      features: '',
      hasDesign: false,
      needsHosting: false,
      needsMaintenance: false,
    }
  });

  const watchedValues = watch();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form Data:', data);
      
      toast.success('Quote request submitted successfully! We\'ll get back to you within 24 hours.');
      reset();
      
    } catch (error) {
      toast.error('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-navy py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your Project Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tell us about your project and get a detailed proposal within 24 hours.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Clock className="h-5 w-5 text-electric-blue" />
                <span className="text-sm">24hr response</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Shield className="h-5 w-5 text-electric-blue" />
                <span className="text-sm">No sales pressure</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Zap className="h-5 w-5 text-electric-blue" />
                <span className="text-sm">Free consultation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Information */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-navy mb-6">1. Basic Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" {...register("name")} />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" {...register("company")} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" {...register("phone")} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-navy mb-6">2. Project Details</h2>
                  <div className="space-y-6">
                    <div>
                      <Label>What type of project is this? *</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setValue('projectType', type.value, { shouldValidate: true })}
                            className={`p-4 border rounded-lg text-left transition-all ${
                              watchedValues.projectType === type.value
                                ? 'border-electric-blue bg-electric-blue/5 ring-2 ring-electric-blue'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{type.icon}</span>
                              <span className="font-medium">{type.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.projectType && <p className="text-sm text-red-500 mt-1">{errors.projectType.message}</p>}
                    </div>

                    <div>
                      <Label>What's your budget range? *</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-3">
                        {budgetRanges.map((budget) => (
                          <button
                            key={budget.value}
                            type="button"
                            onClick={() => setValue('budget', budget.value, { shouldValidate: true })}
                            className={`p-4 border rounded-lg text-left transition-all ${
                              watchedValues.budget === budget.value
                                ? 'border-electric-blue bg-electric-blue/5 ring-2 ring-electric-blue'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-medium text-navy">{budget.label}</div>
                            <div className="text-sm text-gray-600">{budget.description}</div>
                          </button>
                        ))}
                      </div>
                      {errors.budget && <p className="text-sm text-red-500 mt-1">{errors.budget.message}</p>}
                    </div>

                    <div>
                      <Label>Timeline *</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-3">
                        {timelines.map((timeline) => (
                          <button
                            key={timeline.value}
                            type="button"
                            onClick={() => setValue('timeline', timeline.value, { shouldValidate: true })}
                            className={`p-4 border rounded-lg text-left transition-all ${
                              watchedValues.timeline === timeline.value
                                ? 'border-electric-blue bg-electric-blue/5 ring-2 ring-electric-blue'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-xl">{timeline.icon}</span>
                              <span className="font-medium">{timeline.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.timeline && <p className="text-sm text-red-500 mt-1">{errors.timeline.message}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Description */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-navy mb-6">3. Project Description</h2>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="description">Describe your project in detail *</Label>
                      <Textarea
                        id="description"
                        placeholder="Tell us about your project goals, target audience, key functionality needed..."
                        rows={6}
                        {...register("description")}
                      />
                      {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
                      <p className="text-sm text-gray-600 mt-2">
                        Be specific about what you want to achieve and any specific requirements.
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="features">Key features or functionality needed</Label>
                      <Textarea
                        id="features"
                        placeholder="e.g., User authentication, payment processing, real-time chat, admin dashboard..."
                        rows={4}
                        {...register("features")}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Services */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-navy mb-6">4. Additional Services</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="hasDesign" checked={watchedValues.hasDesign} onCheckedChange={(checked) => setValue('hasDesign', checked as boolean)} />
                      <Label htmlFor="hasDesign" className="font-medium">I already have designs/mockups</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="needsHosting" checked={watchedValues.needsHosting} onCheckedChange={(checked) => setValue('needsHosting', checked as boolean)} />
                      <Label htmlFor="needsHosting" className="font-medium">I need hosting and deployment</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="needsMaintenance" checked={watchedValues.needsMaintenance} onCheckedChange={(checked) => setValue('needsMaintenance', checked as boolean)} />
                      <Label htmlFor="needsMaintenance" className="font-medium">I need ongoing maintenance and support</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="flex justify-center items-center space-x-6 mb-8 text-sm text-gray-600">
                      <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Free consultation</span></div>
                      <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>24-hour response</span></div>
                      <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>No commitments</span></div>
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="bg-electric-blue hover:bg-electric-blue/90 px-8 py-4 w-full sm:w-auto">
                      {isSubmitting ? (
                        <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>Submitting...</>
                      ) : (
                        <><Send className="mr-2 h-5 w-5" />Get My Quote</>
                      )}
                    </Button>
                    <p className="text-sm text-gray-600 mt-4">
                      By submitting this form, you agree to our <a href="/privacy" className="text-electric-blue hover:underline">Privacy Policy</a>. We'll never share your information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}