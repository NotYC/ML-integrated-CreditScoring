# Use official Python base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .

RUN pip install --default-timeout=10000 -r requirements.txt


# Copy source code
COPY . .

# Expose flask port inside container
EXPOSE 5003

# Command to run app
CMD ["python", "app.py"]
