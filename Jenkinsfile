environment {
    NODE_ENV = 'production'
}

stages {
    stage('Install Dependencies') {
        steps {
            script {
                sh 'npm install'
            }
        }
    }

    stage('Lint Code') {
        steps {
            script {
                sh 'npm run lint'
            }
        }
    }

    stage('Build Application') {
        steps {
            script {
                sh 'npm run build'
            }
        }
    }

    stage('Docker Build and Push') {
        steps {
            script {
                sh '''
                docker build -t doctor-website:latest .
                docker tag doctor-website:latest <your-dockerhub-username>/doctor-website:latest
                docker push <your-dockerhub-username>/doctor-website:latest
                '''
            }
        }
    }

    stage('Deploy') {
        steps {
            script {
                sh '''
                docker-compose down
                docker-compose up -d
                '''
            }
        }
    }
}

post {
    always {
        echo 'Pipeline finished.'
    }
    success {
        echo 'Pipeline completed successfully.'
    }
    failure {
        echo 'Pipeline failed.'
    }
}