# CAINAM Frontend

A modern web application for building and managing AI trading agents. The platform allows users to create, configure, and deploy various types of trading agents with different strategies and components.

## Features

- Create and manage AI trading agents
- Drag-and-drop component builder interface
- Real-time agent status monitoring
- Support for multiple trading strategies:
  - Social Media Sentiment Analysis
  - On-Chain Metrics Monitoring
  - Delta-Neutral Trading
  - MEV-Resistant Execution

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/your-username/cainam-frontend.git
cd cainam-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
cainam-frontend/
├── app/                    # Next.js app directory
│   ├── agents/            # Agent management pages
│   ├── components/        # Reusable React components
│   ├── styles/           # Global styles
│   └── ...
├── public/                # Static assets
├── README.md             # Project documentation
└── package.json          # Project dependencies and scripts
```

## Development

- Run development server:
```bash
npm run dev
```

- Run tests:
```bash
npm test
```

- Build for production:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team. 