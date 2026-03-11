"use client"

import React from 'react';
import { Suspense } from 'react';
import Loader from './Loader';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
          <div className="error-section container">
            <p>
              {this.props.fallback || "Something went wrong"}  
            </p>
          </div>
      );
    }

    return (
        <Suspense fallback={<Loader />}>
        {this.props.children}
        </Suspense>
    ); 
  }
}
