
pipeline {
    agent any

    environment {
        IMAGE_NAME     = "myapp-image"
        CONTAINER_NAME = "myapp-container"
        APP_PORT       = "3000"
    }

    stages {
        stage('Checkout from Git') {
            steps {
                // This is your "git clone" – Jenkins checks out the repo
                checkout scm
            }
        }

        stage('Build Docker image') {
            steps {
                // Build the Docker image from Dockerfile in the repo
                sh "docker build --no-cache -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Stop old container (if running)') {
            steps {
                // Remove old container so we can run a fresh one
                sh """
                    if [ \$(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                      echo "Stopping and removing existing container..."
                      docker rm -f ${CONTAINER_NAME}
                    else
                      echo "No existing container found."
                    fi
                """
            }
        }

        stage('Run new container') {
            steps {
                // Start new container mapped to localhost:3000
                sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:${APP_PORT} ${IMAGE_NAME}:latest"
            }
        }
    }

    post {
        success {
            echo "✅ Deployed! Open http://localhost:${APP_PORT} (or http://<host-ip>:${APP_PORT})"
        }
        failure {
            echo "❌ Pipeline failed. Check console output."
        }
    }
}

