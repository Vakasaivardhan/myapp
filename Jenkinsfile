pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Get code from GitHub
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image using Docker Desktop
                bat 'docker build -t myapp:latest .'
            }
        }

        stage('Run Container') {
            steps {
                // Stop and remove old container if it exists (ignore errors)
                bat 'docker stop myapp || exit 0'
                bat 'docker rm myapp || exit 0'

                // Run new container
                bat 'docker run -d -p 3000:3000 --name myapp myapp:latest'
            }
        }
    }

    post {
        success {
            echo '✅ App deployed! Open http://<your-machine-ip>:3000'
        }
        failure {
            echo '❌ Build failed. Check the console log.'
        }
    }
}
