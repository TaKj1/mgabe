pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from the source code management system
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool name: 'sonarqube-scanner-latest', type: 'SonarQube Scanner';
                    withSonarQubeEnv('sonnarqube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }

    post {
        always {
            // This step is essential for the "Wait for SonarQube analysis to be completed" in a Declarative Pipeline.
            script {
                def qualityGate = waitForQualityGate()
                if (qualityGate.status != 'OK' && qualityGate.status != 'WARN') {
                    currentBuild.result = 'FAILURE'
                }
            }
        }
    }
}

