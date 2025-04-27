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
   
### ML Model (Flask)

2. Run the Flask Applicatiom
   ```bash
   cd ml-integrated-credit-scoring/PipeLine Blueprint/model side


### Instructions on how to run docker application of KYCS: 

1.Pull the latest commit upto "deleted files" into your system while on main branch

2.go to root directory of our capstone in terminal 

3.type docker-compose -up --build

4.open another terminal and go into bash of frontend "docker exec -it creditscore_frontend bash"

5.go to the local host port 5174 

6. Docker compose down once done!

It should be working now

Dont do any changes in main branch now

If you want to change to before docker integration , make branch from "credit history chart" of sarab commit.


### Docker

Individual Containers
flask 
2.  docker run -d --name flask-container -p 5003:5003 my-flask
1. docker build -t my-flask .\PipeLineBlueprint\modelside\   

frontend:
2.docker run -d --name frontend-container -p 5002:80 my-frontend
1. docker build -t my-frontend .\frontend\ 

backend:
2.  docker run -d --name backend-container --env-file ./authentication_end/.env -p 5001:5001 my-backend
1. docker build -t my-backend .\authentication_end

Once everything is working properly then only can we move to the next step that is docker-compose up --build
