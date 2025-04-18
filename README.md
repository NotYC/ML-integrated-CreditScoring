"# Project Initiated on 8 Feb 2025" 
# ML Integrated Credit Scoring System

This project is a **Machine Learning Integrated Credit Scoring System** that predicts the credit score of individuals using a combination of machine learning models (Linear Regression and XGBoost). The system is built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), integrating the power of machine learning algorithms into a seamless web application.

## Features

- **User Input Form**: A comprehensive form to input personal, professional, and financial details, which will be used to predict the credit score.
- **Machine Learning Models**:
  - **Linear Regression**: A simple, interpretable algorithm used to predict credit score based on input data.
  - **XGBoost**: An advanced, powerful gradient boosting technique for enhanced accuracy in credit score prediction.
- **Credit Score Visualization**: Real-time display of the predicted credit score with a modern animated dial gauge and rating (e.g., Poor, Fair, Good, Excellent).
- **MongoDB Integration**: The predicted credit score is stored in MongoDB for persistence.
- **Responsive UI**: A modern and responsive UI with sections like Personal Info, Professional Info, Asset Info, and a credit score meter.

## Tech Stack

- **Frontend**:
  - **React.js**: A JavaScript library for building user interfaces.
  - **Material-UI**: A React component library for building modern, responsive designs.
- **Backend**:
  - **Node.js**: JavaScript runtime for building the server.
  - **Express.js**: A web framework for Node.js to handle backend routing.
  - **Flask**: For serving the machine learning models as APIs (if running models in a separate service).
- **Machine Learning**:
  - **XGBoost**: A scalable machine learning algorithm used for gradient boosting.
  - **Linear Regression**: A basic algorithm used to predict the credit score.
- **Database**:
  - **MongoDB**: A NoSQL database for storing user information and predicted credit scores.

## Prerequisites

- Node.js
- MongoDB Compass
- Python 3.x
- Pip (for Python dependencies)
- NPM  for managing JavaScript dependencies

## Setup

### Backend (Node.js + Express)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ml-integrated-credit-scoring.git
   cd ml-integrated-credit-scoring
