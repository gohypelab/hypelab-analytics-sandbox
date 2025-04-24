# HypeLab Analytics Sandbox

This repository serves as a sandbox for implementing and testing HypeLab Analytics integration in different web application environments. It provides examples of how to integrate the HypeLab Analytics SDK in both vanilla JavaScript and React applications.

## Repository Structure

The repository is organized into two main directories:

- **vanilla/** - Contains a simple HTML/JavaScript implementation
- **react/** - Contains a Next.js React implementation

## Vanilla JavaScript Implementation

The vanilla implementation demonstrates how to integrate HypeLab Analytics in a simple HTML page using plain JavaScript. It includes:

- Basic HTML structure with Tailwind CSS styling via CDN
- HypeLab Analytics SDK integration
- A simple UI with a "Deposit" button that triggers an analytics event
- Flash notice implementation for user feedback

### Files:

- `vanilla/index.html` - Main HTML file with inline JavaScript
- `vanilla/tailwind-config.js` - Tailwind CSS configuration

## React Implementation

The React implementation demonstrates how to integrate HypeLab Analytics in a Next.js application. It includes:

- Next.js project structure
- React components with Tailwind CSS styling
- HypeLab Analytics SDK integration in a React context
- A similar UI with a "Deposit" button that triggers an analytics event
- Flash notice implementation using React state

### Files:

- `react/app/layout.js` - Root layout with HypeLab Analytics SDK integration
- `react/app/page.js` - Main page component with deposit functionality
- `react/next.config.js` - Next.js configuration
- `react/package.json` - Project dependencies
- `react/tailwind.config.js` - Tailwind CSS configuration

## Getting Started

### Vanilla Implementation

Simply open the `vanilla/index.html` file in a web browser to see the implementation in action.

### React Implementation

1. Navigate to the React directory:

   ```
   cd react
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## HypeLab Analytics Integration

Both implementations demonstrate how to:

1. Initialize the HypeLab Analytics SDK
2. Configure the client with appropriate environment and property slug
3. Track events (specifically a "first_deposit" event)

For complete documentation on the HypeLab Analytics SDK, visit: [HypeLab Analytics Quickstart](https://docs.hypelab.com/analytics-quickstart)

## Use Cases

This sandbox can be used to:

- Learn how to integrate HypeLab Analytics in different web environments
- Test event tracking functionality
- Compare implementation approaches between vanilla JavaScript and React
- Serve as a reference for your own HypeLab Analytics integration
