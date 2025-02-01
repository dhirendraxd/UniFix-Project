import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, FileText, Bell } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Take Action. Report Issues. Make Change.</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our platform helps you report campus issues quickly and track progress in real-time. 
            Get them fixed faster by notifying the right team.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Report an Issue <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Track Your Issues <FileText className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </span>
                  Step 1: Report Your Issue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose the category, upload photos, and pinpoint the issue on the map.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </span>
                  Step 2: Track Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay updated on the status of your report in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-full">
                    <Bell className="h-6 w-6 text-primary" />
                  </span>
                  Step 3: Get Notified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive automatic notifications when the issue is resolved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>For Students & Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Easily report issues with a few clicks and follow their progress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Faculty & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage and resolve issues efficiently from your dashboard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-Time Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get notified when the status of your issue changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "I reported a maintenance issue last night, and it was fixed by morning!"
                </p>
                <p className="font-semibold">- Sarah Johnson, Student</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "The system makes it easy to resolve complaints with the right team."
                </p>
                <p className="font-semibold">- Prof. Michael Chen, Faculty</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-muted-foreground">
                We're dedicated to making campus issue reporting and resolution simple and efficient.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-muted-foreground">
                support@campus.edu<br />
                1-800-CAMPUS-HELP
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 Campus Issue Reporting System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;