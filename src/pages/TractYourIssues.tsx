// src/pages/TrackYourIssues.tsx
import React, { useState } from 'react';
import IssueList from '@/components/ui/IssuesList';
import FilterOptions from '@/components/ui/FilterOptions';
import { mockIssues } from '@/mockdata';

const TrackYourIssues: React.FC = () => {
  const [issues, setIssues] = useState(mockIssues);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="px-6 py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Track Your Issues</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated on the progress of your reported issues and know when they’re resolved.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <FilterOptions />
        </div>
      </section>

      {/* Issue List */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <IssueList issues={issues} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary/5 text-muted-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p>
                We're dedicated to making campus issue reporting and resolution simple and efficient.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p>
                Unixfix@edu.np<br />
                98624788xx - 98624788xx
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p>&copy; 2024 Campus Issue Reporting System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrackYourIssues;
